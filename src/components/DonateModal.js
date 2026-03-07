import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Grid,
  Alert,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const RAW_API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || "").trim();
const API_BASE_URL =
  RAW_API_BASE_URL ||
  "https://dharmamma-trust-new-nqra.vercel.app";

const DEFAULT_REGISTERED_WEBSITE_URL =
  "https://dharmamma-trust-new-nqra.vercel.app";
const RAW_REGISTERED_WEBSITE_URL =
  (process.env.REACT_APP_RAZORPAY_REGISTERED_WEBSITE_URL || "").trim();
const REGISTERED_WEBSITE_URL =
  RAW_REGISTERED_WEBSITE_URL || DEFAULT_REGISTERED_WEBSITE_URL;

const getSafeOrigin = (url) => {
  try {
    return new URL(url).origin.toLowerCase();
  } catch (_error) {
    return "";
  }
};

const getApiBaseUrlWarning = () => {
  if (!RAW_API_BASE_URL) {
    return "Payment API is using fallback URL. Set REACT_APP_API_BASE_URL in Vercel to your backend domain.";
  }

  try {
    const parsed = new URL(RAW_API_BASE_URL);
    if (parsed.pathname && parsed.pathname !== "/") {
      return "REACT_APP_API_BASE_URL should be backend domain only (without /api or any path).";
    }
  } catch (_error) {
    return "REACT_APP_API_BASE_URL is invalid. Use a full URL like https://your-backend.vercel.app";
  }

  return "";
};

const getRegisteredWebsiteOrigin = () => {
  return (
    getSafeOrigin(RAW_REGISTERED_WEBSITE_URL) ||
    getSafeOrigin(DEFAULT_REGISTERED_WEBSITE_URL)
  );
};

const getRegisteredWebsiteWarning = () => {
  if (!RAW_REGISTERED_WEBSITE_URL) {
    return "Using default Razorpay registered website URL. Set REACT_APP_RAZORPAY_REGISTERED_WEBSITE_URL in Vercel for clarity.";
  }

  if (!getSafeOrigin(RAW_REGISTERED_WEBSITE_URL)) {
    return "REACT_APP_RAZORPAY_REGISTERED_WEBSITE_URL is invalid. Use only a full URL like https://your-frontend.vercel.app";
  }

  return "";
};

const RAZORPAY_SCRIPT_URL = "https://checkout.razorpay.com/v1/checkout.js";

const loadRazorpayScript = () =>
  new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const injectScript = (retryCount = 0) => {
      const existingScript = document.querySelector(
        `script[src="${RAZORPAY_SCRIPT_URL}"]`,
      );

      if (existingScript && window.Razorpay) {
        resolve(true);
        return;
      }

      if (existingScript && retryCount > 0) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.src = RAZORPAY_SCRIPT_URL;
      script.async = true;
      script.onload = () => {
        if (window.Razorpay) {
          resolve(true);
          return;
        }

        reject(
          new Error(
            "Razorpay script loaded, but Checkout is unavailable. Please disable blockers and retry.",
          ),
        );
      };
      script.onerror = () => {
        if (retryCount < 1) {
          injectScript(retryCount + 1);
          return;
        }

        reject(
          new Error(
            "Failed to load Razorpay checkout script. Check browser blockers/network and retry.",
          ),
        );
      };

      document.body.appendChild(script);
    };

    injectScript();
  });

const bankDetails = {
  accountName: "Dharmamma Charitable Trust",
  accountNumber: "50200063205398",
  ifsc: "HDFC0004284",
  bankName: "HDFC Bank",
  branch: "Venkatagiri Branch",
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    console.error("Copy failed", e);
  }
};

const DonateModal = ({
  open,
  onClose,
  amount: initialAmount,
  donorName: initialName,
  donorEmail: initialEmail,
  donorPhone: initialPhone,
}) => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState("idle");
  const [paymentStatus, setPaymentStatus] = useState({
    type: "",
    message: "",
  });

  const [form, setForm] = useState({
    name: initialName || "",
    email: initialEmail || "",
    pan: "",
    amount: initialAmount || "",
    phone: initialPhone || "",
  });

  const [errors, setErrors] = useState({});
  const apiBaseUrlWarning = getApiBaseUrlWarning();
  const registeredWebsiteWarning = getRegisteredWebsiteWarning();

  useEffect(() => {
    if (!paymentStatus.message) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setPaymentStatus({ type: "", message: "" });
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [paymentStatus.message]);

  const validate = () => {
    const e = {};
    if (!form.name || form.name.trim().length < 2)
      e.name = "Please enter your full name";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.amount || isNaN(Number(form.amount)) || Number(form.amount) <= 0)
      e.amount = "Enter a valid amount";
    // PAN format (basic): 5 letters, 4 digits, 1 letter
    if (form.pan) {
      const pan = form.pan.toUpperCase();
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan))
        e.pan = "Enter a valid PAN (e.g. ABCDE1234F)";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handlePaymentClick = async () => {
    if (!validate()) return;

    const registeredOrigin = getRegisteredWebsiteOrigin();
    const currentOrigin = window.location.origin.toLowerCase();

    if (registeredOrigin && currentOrigin !== registeredOrigin) {
      const redirectUrl = `${registeredOrigin}${window.location.pathname}${window.location.search}${window.location.hash}`;
      setPaymentStatus({
        type: "error",
        message: `Payments are enabled only on ${registeredOrigin}. Redirecting...`,
      });
      window.location.replace(redirectUrl);
      return;
    }

    setLoading(true);
    setPaymentStatus({ type: "", message: "" });

    try {
      // Create order on backend (amount in rupees)
      const resp = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(Number(form.amount)),
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
          donorName: form.name,
          donorEmail: form.email,
          donorPhone: form.phone || "",
        }),
      });

      if (!resp.ok) {
        const errorPayload = await resp.json().catch(() => ({}));
        throw new Error(
          errorPayload.message || errorPayload.error || "Order creation failed",
        );
      }

      const order = await resp.json();
      if (!order.id) throw new Error(order.message || "Order creation failed");

      const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID || order.key_id;
      if (!razorpayKey) {
        throw new Error(
          "Razorpay key is missing. Configure backend RAZORPAY_KEY_ID or frontend REACT_APP_RAZORPAY_KEY_ID.",
        );
      }

      await loadRazorpayScript();

      // build options
      const options = {
        key: razorpayKey,
        amount: Number(order.amount) || Math.round(Number(form.amount) * 100),
        currency: order.currency || "INR",
        name: "Dharmamma Charitable Trust",
        description: "Donation",
        order_id: order.id,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone || "",
        },
        theme: { color: "#2E5090" },
        handler: async (response) => {
          try {
            // verify payment with backend
            const verifyResp = await fetch(
              `${API_BASE_URL}/api/payment/verify-payment`,
              {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donorName: form.name,
                donorEmail: form.email,
                donorPhone: form.phone || "",
                amount: Math.round(Number(form.amount)),
              }),
              },
            );

            if (!verifyResp.ok) {
              const verifyError = await verifyResp.json().catch(() => ({}));
              throw new Error(verifyError.error || "Payment verification failed");
            }

            const verifyResult = await verifyResp.json();
            if (verifyResult && verifyResult.success) {
              setPaymentStatus({
                type: "success",
                message:
                  "Payment successful and verified. Thank you for your donation!",
              });
              setForm({
                name: "",
                email: "",
                pan: "",
                amount: "",
                phone: "",
              });
              setErrors({});
            } else {
              setPaymentStatus({
                type: "error",
                message:
                  "Payment processed but verification failed. We will contact you.",
              });
            }
          } catch (err) {
            console.error("Verification error", err);
            setPaymentStatus({
              type: "error",
              message: "Payment completed but verification failed.",
            });
          } finally {
            setLoading(false);
          }
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStatus({
        type: "error",
        message: error.message || "Failed to initiate payment",
      });
      setLoading(false);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center" }}>
        Donate to Dharmamma Charitable Trust
      </DialogTitle>

      {/* donor form shown above tabs so user can input details first */}
      <DialogContent>
        {registeredWebsiteWarning && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {registeredWebsiteWarning}
          </Alert>
        )}
        {apiBaseUrlWarning && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {apiBaseUrlWarning}
          </Alert>
        )}
        {paymentStatus.message && (
          <Alert
            severity={paymentStatus.type === "success" ? "success" : "error"}
            sx={{ mb: 2 }}
          >
            {paymentStatus.message}
          </Alert>
        )}
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            if (tabValue === 0) handlePaymentClick();
            else onClose();
          }}
        >
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                fullWidth
                value={form.name}
                onChange={handleChange("name")}
                error={!!errors.name}
                helperText={errors.name}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                fullWidth
                value={form.email}
                onChange={handleChange("email")}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                fullWidth
                value={form.phone}
                onChange={handleChange("phone")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="PAN (optional)"
                fullWidth
                value={form.pan}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    pan: e.target.value.toUpperCase(),
                  }))
                }
                error={!!errors.pan}
                helperText={errors.pan}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Amount (INR)"
                type="number"
                fullWidth
                value={form.amount}
                onChange={handleChange("amount")}
                error={!!errors.amount}
                helperText={errors.amount}
                required
              />
            </Grid>
          </Grid>

          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}
          >
            <Tab label="Online Payment" sx={{ flex: 1 }} />
            <Tab label="Manual Transfer" sx={{ flex: 1 }} />
          </Tabs>

          {tabValue === 0 && (
            <Box sx={{ textAlign: "center", py: 2 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                You will be redirected to a secure payment gateway.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handlePaymentClick}
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay Now (Razorpay)"}
              </Button>
            </Box>
          )}

          {tabValue === 1 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 3,
                alignItems: "center",
                justifyContent: "center",
                py: 1,
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
                  Bank Transfer
                </Typography>
                <Typography variant="body2">
                  A/c Name: {bankDetails.accountName}
                </Typography>
                <Typography variant="body2">
                  A/c No: {bankDetails.accountNumber}
                </Typography>
                <Typography variant="body2">
                  IFSC: {bankDetails.ifsc}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Bank: {bankDetails.bankName} — {bankDetails.branch}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={async () => {
                      setCopyStatus("copying");
                      await copyToClipboard(
                        `${bankDetails.accountName} | ${bankDetails.accountNumber} | IFSC: ${bankDetails.ifsc}`,
                      );
                      setCopyStatus("copied");
                      setTimeout(() => setCopyStatus("idle"), 1800);
                    }}
                    startIcon={<ContentCopyIcon />}
                    disabled={copyStatus === "copying"}
                  >
                    {copyStatus === "copied" ? "Copied" : "Copy Bank Details"}
                  </Button>
                  {copyStatus === "copied" && (
                    <Typography
                      variant="caption"
                      sx={{ ml: 1, color: "success.main" }}
                      aria-live="polite"
                    >
                      Bank details copied.
                    </Typography>
                  )}
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    After transfer, please email dharmammatrust@gmail.com with
                    your transaction details to receive a receipt.
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DonateModal;
