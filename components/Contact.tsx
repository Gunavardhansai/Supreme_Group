"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message."));
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0066B3] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between"
    >
      {/* Left side */}
      <div className="md:w-1/2 space-y-4 mb-8 md:mb-0">
        <h2 className="text-3xl font-semibold">Get in touch</h2>
        <p className="text-white/90">For general enquiries</p>
        <div className="space-y-3 text-white/90 text-sm">
          <p>
            <span className="font-semibold">Address :</span> <br />
            110, 16th Road, Chembur, Mumbai – 400071
          </p>
          <p>
            <span className="font-semibold">Phone :</span> <br />
            +91 22 25208822
          </p>
          <p>
            <span className="font-semibold">Email :</span> <br />
            info@supremegroup.co.in
          </p>
        </div>
      </div>

      {/* Right side - form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 grid grid-cols-1 gap-4 text-black"
      >
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 bg-transparent border-b border-white focus:outline-none text-white placeholder-white"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 bg-transparent border-b border-white focus:outline-none text-white placeholder-white"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="p-2 bg-transparent border-b border-white focus:outline-none text-white placeholder-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="p-2 bg-transparent border-b border-white focus:outline-none text-white placeholder-white"
        />
        <button
          type="submit"
          className="bg-white text-[#0066B3] rounded-full w-28 py-2 hover:bg-gray-100 transition"
        >
          Send
        </button>
        {status && (
          <p className="text-sm text-white/90 mt-2">{status}</p>
        )}
      </form>
    </motion.section>
  );
}
