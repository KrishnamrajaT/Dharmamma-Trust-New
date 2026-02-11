import React, { useState } from "react";
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
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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

  const [form, setForm] = useState({
    name: initialName || "",
    email: initialEmail || "",
    pan: "",
    amount: initialAmount || "",
    phone: initialPhone || "",
  });

  const [errors, setErrors] = useState({});

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
    setLoading(true);

    try {
      // Create order on backend (amount in rupees)
      const resp = await fetch("/api/payment/create-order", {
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

      const order = await resp.json();
      if (!order.id) throw new Error(order.message || "Order creation failed");

      // build options
      const options = {
        key:
          process.env.REACT_APP_RAZORPAY_KEY_ID ||
          window.RAZORPAY_KEY_ID ||
          "rzp_test_XXXXXXXX",
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
            const verifyResp = await fetch("/api/payment/verify-payment", {
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
            });
            const verifyResult = await verifyResp.json();
            if (verifyResult && verifyResult.success) {
              alert(
                "Payment successful and verified. Thank you for your donation!",
              );
            } else {
              alert(
                "Payment processed but verification failed. We will contact you.",
              );
            }
          } catch (err) {
            console.error("Verification error", err);
            alert("Payment completed but verification failed.");
          } finally {
            setLoading(false);
            onClose();
          }
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      // load script and open
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        const rzp = new window.Razorpay(options);
        rzp.open();
      };
      document.body.appendChild(script);
    } catch (error) {
      console.error("Payment error:", error);
      alert(error.message || "Failed to initiate payment");
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
