# EmailJS Setup Guide for Portfolio Contact Form

## 🎯 Overview
Your contact form now sends beautiful emails directly to your inbox whenever someone submits a message. This guide will help you set up EmailJS to enable this functionality.

## 📧 EmailJS Setup Steps

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this **beautiful template code**:

```html
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
  
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #081b29 0%, #00abf0 100%); padding: 40px 30px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
      📧 New Contact Form Message
    </h1>
    <p style="color: #e8f4f8; margin: 10px 0 0 0; font-size: 16px;">
      Someone reached out through your portfolio website
    </p>
  </div>
  
  <!-- Content -->
  <div style="padding: 40px 30px;">
    
    <!-- Sender Info -->
    <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #00abf0;">
      <h2 style="color: #081b29; margin: 0 0 15px 0; font-size: 20px;">
        👤 Sender Information
      </h2>
      <p style="margin: 8px 0; color: #333; font-size: 16px;">
        <strong>Name:</strong> {{from_name}}
      </p>
      <p style="margin: 8px 0; color: #333; font-size: 16px;">
        <strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #00abf0; text-decoration: none;">{{from_email}}</a>
      </p>
      <p style="margin: 8px 0; color: #333; font-size: 16px;">
        <strong>Subject:</strong> {{subject}}
      </p>
    </div>
    
    <!-- Message -->
    <div style="background: #ffffff; padding: 25px; border-radius: 8px; border: 2px solid #e9ecef;">
      <h2 style="color: #081b29; margin: 0 0 15px 0; font-size: 20px;">
        💬 Message
      </h2>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 3px solid #00abf0;">
        <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.6;">
          {{message}}
        </p>
      </div>
    </div>
    
    <!-- Submission Details -->
    <div style="margin-top: 25px; padding: 20px; background: #e8f4f8; border-radius: 8px;">
      <h3 style="color: #081b29; margin: 0 0 10px 0; font-size: 16px;">
        📊 Submission Details
      </h3>
      <p style="margin: 5px 0; color: #666; font-size: 14px;">
        <strong>Date:</strong> {{submission_date}}
      </p>
      <p style="margin: 5px 0; color: #666; font-size: 14px;">
        <strong>Browser:</strong> {{user_browser}}
      </p>
      <p style="margin: 5px 0; color: #666; font-size: 14px;">
        <strong>Platform:</strong> {{user_platform}}
      </p>
    </div>
    
    <!-- Quick Actions -->
    <div style="margin-top: 30px; text-align: center;">
      <a href="mailto:{{from_email}}?subject=Re: {{subject}}" 
         style="display: inline-block; background: linear-gradient(135deg, #00abf0, #0088cc); color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px 10px 0;">
        📧 Reply via Email
      </a>
      <a href="https://wa.me/918388895425" 
         style="display: inline-block; background: #25D366; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px 10px 0;">
        💬 WhatsApp
      </a>
    </div>
    
  </div>
  
  <!-- Footer -->
  <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e9ecef;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      This email was sent automatically from your portfolio contact form
    </p>
    <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
      Portfolio Website - Ankan Chakraborty
    </p>
  </div>
  
</div>
```

4. **Save the template** and copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abc123def456`)

### Step 5: Update Your Code
1. Open `msgbox.js` file
2. Find the `EMAILJS_CONFIG` section at the top
3. Replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',    // Replace with your public key
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',    // Replace with your service ID
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID'   // Replace with your template ID
};
```

## 🎨 Template Variables
The email template uses these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{submission_date}}` - When the form was submitted
- `{{user_browser}}` - User's browser info
- `{{user_platform}}` - User's operating system

## 🔧 Testing
1. Fill out your contact form
2. Submit the message
3. Check your email inbox for the beautiful notification
4. The message is also saved to Firebase as backup

## 💡 Features
- ✅ **Beautiful HTML Email Design** - Professional, responsive layout
- ✅ **Automatic Email Notifications** - Instant alerts when someone contacts you
- ✅ **Sender Information** - Complete contact details organized beautifully
- ✅ **Quick Reply Actions** - Direct email reply and WhatsApp buttons
- ✅ **Submission Metadata** - Date, browser, and platform information
- ✅ **Backup Storage** - Messages saved to Firebase database
- ✅ **Error Handling** - Graceful fallbacks if email fails
- ✅ **Loading States** - Beautiful UI feedback during submission
- ✅ **Success Notifications** - User-friendly confirmation messages

## 🚀 Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- Perfect for portfolio contact forms
- No credit card required

## 🎯 Result
When someone sends you a message, you'll receive:
1. **Immediate email notification** with beautiful formatting
2. **All contact details** organized professionally
3. **Quick action buttons** to reply or contact via WhatsApp
4. **Complete message backup** in your Firebase database

Your portfolio contact form is now professional-grade! 🎉

---
**Need help?** Check the EmailJS documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
