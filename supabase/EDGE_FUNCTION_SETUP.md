**Contact Email Notification Setup**

This project already saves contact form data into the `contact_submissions` table in Supabase.

To send a notification email whenever a new contact row is inserted:

1. Deploy the Edge Function:
   `supabase functions deploy contact-email`

2. Set Edge Function secrets:
   `supabase secrets set RESEND_API_KEY=your_resend_api_key`
   `supabase secrets set NOTIFICATION_TO_EMAIL=webgaebel@gmail.com`
   `supabase secrets set NOTIFICATION_FROM_EMAIL=WebGaebel <onboarding@resend.dev>`

3. In Supabase Dashboard, create a Database Webhook:
   - Table: `contact_submissions`
   - Event: `INSERT`
   - Type: `Supabase Edge Functions`
   - Function: `contact-email`

4. Submit the contact form. The row will save in Supabase first, then the webhook will trigger the function and send the notification email.

Notes:
- Resend is used here because Gmail is not a direct transactional email API.
- `NOTIFICATION_FROM_EMAIL` must be a verified sender/domain in Resend for production.
- The webhook payload includes a `record` object, and this function already handles that format.
