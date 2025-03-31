import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';
//re_NSrGYXqE_3ah16BTAshuaMDD7kmRAFRvx
const resend = new Resend(process.env.RESEND_API_KEY);
// console.log(process.env.RESEND_API_KEY, 'here we are');
const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 200)) {
    return { error: 'Invalid sender email' };
  }
  if (!validateString(message, 200)) {
    return {
      error: 'Invalid message',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'tesfayeyeabsra446@gmail.com',
      subject: 'Message from contact form',
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};

export default sendEmail;
