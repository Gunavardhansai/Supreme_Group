import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your_user_id';
      
      await emailjs.sendForm(serviceId, templateId, formRef.current!, userId);
      setStatus('Message sent!');
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      {/* form fields */}
      <p>{status}</p>
    </form>
  );
}
