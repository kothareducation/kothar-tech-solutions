# Email Setup Instructions

Your contact form is now integrated with **EmailJS** for sending emails! Follow these steps to complete the setup:

## 📧 Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free tier)
3. Verify your email address

## 🔑 Step 2: Set Up EmailJS Service

1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - **Other**: Use SMTP settings
4. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## 📝 Step 3: Create an Email Template

1. In EmailJS Dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use this template configuration:

### Template Settings:

- **Template Name**: Contact Form Submission
- **Subject**: `New Contact: {{subject}}`

### Template Content:

```html
<h2>New Contact Form Submission</h2>

<h3>Contact Details:</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr />
<p>
  <small>This email was sent from the Kothar Tech Solutions contact form</small>
</p>
```

### Email Configuration:

- **To Email**: `info@kotharedu.com` (or use `{{to_email}}` for dynamic)
- **From Name**: `{{from_name}}`
- **Reply To**: `{{from_email}}`

4. Click **Save**
5. Copy the **Template ID** (e.g., `template_xxxxxxx`)

## 🔐 Step 4: Get Your Public Key

1. In EmailJS Dashboard, go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## ⚙️ Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root:

```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**Important:**

- Replace the values with your actual EmailJS credentials
- The `NEXT_PUBLIC_` prefix is required for client-side access
- Never commit `.env.local` to git!

## 🧪 Step 6: Test Your Contact Form

1. Start your development server:

```bash
npm run dev
```

2. Go to `http://localhost:3000/#contact`
3. Fill out the contact form and submit
4. Check your email at `info@kotharedu.com`
5. You should receive an email with the form details!

## 🎨 Customizing the Email Template

You can customize your email template in the EmailJS dashboard:

### Add Brand Colors

```html
<div style="background-color: #ed6a06; padding: 20px; color: white;">
  <h2>New Contact Form</h2>
</div>
```

### Add Your Logo

```html
<img src="https://yourdomain.com/logo.png" alt="Logo" width="150" />
```

### Style the Layout

```html
<div style="font-family: Arial; max-width: 600px; margin: 0 auto;">
  <!-- Your content here -->
</div>
```

## 🚀 Step 7: Deploy to Production

When deploying to Vercel, Netlify, or other platforms:

1. Add the environment variables in your hosting platform's settings:

   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

2. Deploy your site

3. Test the contact form on production

## 📋 Template Variables Reference

Use these variables in your EmailJS template:

| Variable         | Description     | Example             |
| ---------------- | --------------- | ------------------- |
| `{{from_name}}`  | Sender's name   | John Doe            |
| `{{from_email}}` | Sender's email  | john@example.com    |
| `{{phone}}`      | Sender's phone  | +61 430 082 553     |
| `{{subject}}`    | Message subject | Project Inquiry     |
| `{{message}}`    | Message content | I need a website... |
| `{{to_email}}`   | Recipient email | info@kotharedu.com  |

## 🔒 Security & Best Practices

### EmailJS Allowlist (Recommended)

1. Go to **Account** → **Security**
2. Add your domain(s) to the allowlist:
   - `localhost:3000` (for development)
   - `yourdomain.com` (for production)
3. This prevents unauthorized use of your EmailJS account

### Rate Limiting

EmailJS automatically limits to:

- **200 emails/month** on free tier
- **50 emails/hour** per service

### Environment Variables

- ✅ Use `NEXT_PUBLIC_` prefix for client-side access
- ✅ Never commit `.env.local` to version control
- ✅ Add different values for development and production

## 🆘 Troubleshooting

### Email not sending?

- **Check browser console** for error messages
- **Verify credentials** in `.env.local` are correct
- **Restart dev server** after changing environment variables
- **Check EmailJS dashboard** logs for errors

### "Template not found" error?

- Verify your Template ID is correct
- Make sure the template is saved and active in EmailJS

### "Service not found" error?

- Verify your Service ID is correct
- Check that your email service is connected and active

### Rate limit exceeded?

- Free tier: 200 emails/month
- Upgrade to paid plan for more emails
- Check EmailJS dashboard usage statistics

### Email going to spam?

- Use a custom domain email (not Gmail)
- Warm up your email service gradually
- Ask recipients to whitelist your email

## 📚 Additional Resources

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **Dashboard**: https://dashboard.emailjs.com/
- **Support**: Contact EmailJS support through dashboard

## 💡 Pro Tips

1. **Test Mode**: Use a test email address during development
2. **Auto-Reply**: Set up an auto-reply template for customers
3. **Multiple Templates**: Create different templates for different forms
4. **Track Deliveries**: Monitor email delivery in EmailJS dashboard
5. **Custom Variables**: Add more variables to template as needed

## 📞 Need Help?

If you encounter any issues:

1. Check the EmailJS [Documentation](https://www.emailjs.com/docs/)
2. Review the [FAQ](https://www.emailjs.com/docs/faq/)
3. Contact EmailJS support through the dashboard
4. Check browser console for detailed error messages

---

✅ **Your contact form is ready to use with EmailJS!**

**Advantages of EmailJS:**

- ✨ No backend required (client-side only)
- 🚀 Simple setup and configuration
- 💰 Generous free tier (200 emails/month)
- 🔧 Easy to customize email templates
- 📊 Built-in analytics and delivery tracking
- 🔒 Secure with allowlist protection
