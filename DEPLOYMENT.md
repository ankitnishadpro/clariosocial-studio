# ClarioSocial Studio - Render Deployment Guide

## Prerequisites

1. **GitHub Repository**: Push your code to GitHub
2. **EmailJS Account**: Sign up at https://www.emailjs.com/
3. **Render Account**: Sign up at https://render.com/

## EmailJS Setup

1. Create a new EmailJS account at https://www.emailjs.com/
2. Create a new email service (e.g., Gmail, Outlook, etc.)
3. Create a new email template with the following variables:
   - `{{from_name}}` - Contact's full name
   - `{{from_email}}` - Contact's email address
   - `{{business_name}}` - Business name
   - `{{business_type}}` - Type of business
   - `{{monthly_revenue}}` - Monthly revenue range
   - `{{challenge}}` - Current challenge/goal
   - `{{referral}}` - How they heard about you
   - `{{to_email}}` - Your email (hello@clariosocialstudio.in)

4. Note down:
   - Service ID
   - Template ID
   - Public Key (from Account settings)

## Render Deployment Steps

### Method 1: Using render.yaml (Recommended)

1. **Connect GitHub Repository**:
   - Go to Render dashboard
   - Click "New +" > "Web Service"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

2. **Set Environment Variables**:
   In the Render dashboard, add these environment variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

3. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically build and deploy your app

### Method 2: Manual Setup

1. **Create Web Service**:
   - Go to Render dashboard
   - Click "New +" > "Web Service" 
   - Connect your GitHub repository

2. **Configure Build & Deploy**:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - **Plan**: `Free` (or paid plan)

3. **Environment Variables**:
   Add the same variables as listed in Method 1

4. **Health Check** (Optional):
   - Path: `/api/health`

## Post-Deployment

1. **Test the Contact Form**: Submit a test form to ensure EmailJS is working
2. **Check Health Endpoint**: Visit `https://your-app.render.com/api/health`
3. **Update DNS**: Point your domain `clariosocialstudio.in` to your Render app

## Environment Variables Reference

```bash
# Required for EmailJS functionality
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx

# Production settings (automatically set by Render)
NODE_ENV=production
PORT=10000
```

## Troubleshooting

- **Build fails**: Check that all dependencies are listed in package.json
- **Contact form not working**: Verify EmailJS credentials in environment variables
- **404 on refresh**: This is handled by the Express server serving the React app
- **Environment variables not working**: Make sure they start with `VITE_` for client-side access

## Custom Domain Setup

1. In Render dashboard, go to your service settings
2. Add your custom domain `clariosocialstudio.in`
3. Update your domain's DNS settings to point to Render
4. Enable automatic TLS certificate

## Support

For deployment issues, check:
- Render build logs
- Application logs in Render dashboard
- EmailJS dashboard for email delivery status