import { Resend } from 'resend';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Check key before creating Resend instance
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing in process.env');
    return res.status(500).json({ message: 'Server configuration error: Missing API key.' });
  }

  // Instantiate Resend inside the handler
  const resend = new Resend(apiKey);
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'lahiruthraka97@gmail.com'],
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}: ${subject || 'New Message'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return res.status(400).json({ message: data.error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server Catch Error:', error);
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
}