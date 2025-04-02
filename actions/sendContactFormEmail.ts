'use server';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

// Load environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL as string;

const sendContactFormEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail') as string;
  const message = formData.get('message') as string;

  // Validate inputs
  if (!validateString(senderEmail, 200)) {
    return { error: 'Invalid sender email.' };
  }
  if (!validateString(message, 5000)) {
    return { error: 'Message is too long or invalid.' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: RECEIVER_EMAIL,
      subject: '📩 New Message from Your Portfolio',
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, { message, senderEmail }),
    });

    return { success: 'Thanks! I’ll get back to you soon.' };

  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};

export default sendContactFormEmail;
