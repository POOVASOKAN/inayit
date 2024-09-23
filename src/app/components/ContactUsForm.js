// ContactUsForm.js
import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export default function ContactUsForm() {
  return (
    <Box className="contact-container">
      <Typography variant="h4" className="contact-title">
        Get In Touch
      </Typography>
      <Grid container spacing={4}>
        {/* Left Section - Contact Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="contact-subtitle">
            Contact Us
          </Typography>

          {/* Location */}
          <Box className="contact-item">
            <IconButton color="primary">
              <LocationOnIcon />
            </IconButton>
            <Box sx={{ marginLeft: "1rem" }}>
              <Typography variant="h6">Location</Typography>
              <Typography variant="body1">
                340 Winterthur Way, Basingstoke, Hampshire, RG21 7UQ, United
                Kingdom
              </Typography>
            </Box>
          </Box>

          {/* Phone */}
          <Box className="contact-item">
            <IconButton color="primary">
              <PhoneIcon />
            </IconButton>
            <Box sx={{ marginLeft: "1rem" }}>
              <Typography variant="h6">Phone</Typography>
              <Typography variant="body1">+44-75860 31157</Typography>
            </Box>
          </Box>

          {/* Email */}
          <Box className="contact-item">
            <IconButton color="primary">
              <EmailIcon />
            </IconButton>
            <Box sx={{ marginLeft: "1rem" }}>
              <Typography variant="h6">Email</Typography>
              <Typography variant="body1">info@inayit.com</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="contact-subtitle">
            Fill Up The Form
          </Typography>
          <Typography variant="body2" className="contact-info">
            Your email address will not be published. Required fields are marked
            *
          </Typography>

          {/* Form Fields */}
          <form noValidate autoComplete="off">
            <TextField
              label="Your Name*"
              fullWidth
              required
              variant="outlined"
              className="contact-input"
            />
            <TextField
              label="Email Address*"
              fullWidth
              required
              type="email"
              variant="outlined"
              className="contact-input"
            />
            <TextField
              label="Enter Your Message Here"
              fullWidth
              required
              multiline
              rows={4}
              variant="outlined"
              className="contact-input"
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<SendIcon />}
              fullWidth
              className="contact-button"
            >
              Get In Touch
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
