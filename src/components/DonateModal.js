import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';

const bankDetails = {
  accountName: 'Dharmamma Trust',
  accountNumber: '123456789012',
  ifsc: 'SBIN0000123',
  bankName: 'State Bank of Example',
  branch: 'Main Branch',
  upi: 'dharmamma@upi',
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    console.error('Copy failed', e);
  }
};

const DonateModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center' }}>Donate to Dharmamma Trust</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, alignItems: 'center', justifyContent: 'center', py: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box component="img" src="/donate-qr.svg" alt="Donate QR" sx={{ width: { xs: 180, sm: 220 }, height: 'auto', borderRadius: 2, bgcolor: '#fff', p: 1 }} />
            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>Scan to pay (UPI)</Typography>
            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
              <Button size="small" startIcon={<DownloadIcon />} href="/donate-qr.svg" download>
                Download QR
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>UPI ID</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography sx={{ wordBreak: 'break-all' }}>{bankDetails.upi}</Typography>
              <IconButton size="small" onClick={() => copyToClipboard(bankDetails.upi)}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Box>

            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>Bank Transfer</Typography>
            <Typography variant="body2">A/c Name: {bankDetails.accountName}</Typography>
            <Typography variant="body2">A/c No: {bankDetails.accountNumber}</Typography>
            <Typography variant="body2">IFSC: {bankDetails.ifsc}</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Bank: {bankDetails.bankName} — {bankDetails.branch}</Typography>
            <Box sx={{ mt: 1 }}>
              <Button variant="outlined" size="small" onClick={() => copyToClipboard(`${bankDetails.accountName} | ${bankDetails.accountNumber} | IFSC: ${bankDetails.ifsc}`)} startIcon={<ContentCopyIcon />}>Copy Bank Details</Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="caption" color="text.secondary">If you need a receipt or help completing the transfer, please email contact@dharmamma.org with your transaction details.</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DonateModal;
