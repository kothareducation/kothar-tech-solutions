# Email Setup Instructions

Your contact form is now integrated with **Resend** for sending emails! Follow these steps to complete the setup:

## 📧 Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

## 🔑 Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Copy the API key (it starts with `re_`)

## ⚙️ Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root:

```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and add your API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

3. **Important:** Never commit `.env.local` to git!

## 📨 Step 4: Configure Your Email Domain (Optional but Recommended)

For production, you should verify your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `kotharedu.com`)
4. Follow the DNS setup instructions
5. Once verified, update the `from` email in `/app/api/send-email/route.ts`:

```typescript
from: 'Kothar Tech Website <contact@kotharedu.com>', // Your verified domain
```

## 🧪 Step 5: Test Your Contact Form

1. Start your development server:

```bash
npm run dev
```

2. Go to `http://localhost:3000/#contact`
3. Fill out the contact form and submit
4. Check your email at `info@kotharedu.com`
5. You should receive a beautifully formatted email!

## 🚀 Step 6: Deploy to Production

When deploying to Vercel, Netlify, or other platforms:

1. Add the `RESEND_API_KEY` environment variable in your hosting platform's settings
2. Make sure your domain is verified in Resend
3. Update the `from` email address to use your verified domain

## 📝 Current Configuration

- **Emails sent to:** `info@kotharedu.com`
- **Reply-to:** Customer's email address (so you can reply directly)
- **From address (dev):** `onboarding@resend.dev` (Resend's test domain)
- **From address (prod):** Update to your verified domain

## 🎨 Email Template

The contact form submissions are sent as beautiful HTML emails with:

- Orange and teal brand colors (#ed6a06 and #63afc7)
- Organized contact details
- Formatted message content
- Timestamp in Australian timezone (AEST)

## 🔒 Security

- API key is stored in `.env.local` (not in git)
- Form validation on both client and server
- Rate limiting recommended for production (not included)

## 🆘 Troubleshooting

**Email not sending?**

- Check your API key is correct in `.env.local`
- Restart your dev server after adding environment variables
- Check the browser console for errors
- Check Resend dashboard logs

**"onboarding@resend.dev" in from address?**

- This is normal for development
- Verify your domain in Resend for production use

**Need help?**

- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com

---

✅ **Your contact form is ready to use!**
