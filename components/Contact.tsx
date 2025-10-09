import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){
  const formRef = useRef<HTMLFormElement|null>(null)
  const [status, setStatus] = useState('')

  const send = async (e:any) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // You must set these environment variables in production or replace with your EmailJS user/service/template IDs
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your_user_id'
      const res = await emailjs.sendForm(serviceId, templateId, formRef.current as HTMLFormElement, userId)
      setStatus('Message sent!')
      (formRef.current as HTMLFormElement).reset()
    } catch (err:any) {
      console.error(err)
      setStatus('Error sending message')
    }
  }

  return (
    <section id="contact" className="bg-primaryBlue text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-semibold">Get in touch</h3>
          <p className="mt-4 text-sm opacity-90">For general enquiries</p>

          <div className="mt-6 text-sm">
            <p><strong>Address :</strong><br/>110, 16th Road, Chembur, Mumbai - 400071</p>
            <p className="mt-4"><strong>Phone :</strong><br/>+91 22 25208822</p>
            <p className="mt-4"><strong>Email :</strong><br/>info@supremegroup.co.in</p>
          </div>
        </div>

        <form ref={formRef} onSubmit={send} className="space-y-4">
          <input name="from_name" placeholder="Full name" className="w-full bg-transparent border-b border-white/40 py-2 outline-none" required/>
          <input name="reply_to" placeholder="E-mail" className="w-full bg-transparent border-b border-white/40 py-2 outline-none" required/>
          <input name="subject" placeholder="Subject" className="w-full bg-transparent border-b border-white/40 py-2 outline-none" />
          <textarea name="message" placeholder="Message" className="w-full bg-transparent border-b border-white/40 py-2 outline-none" rows={4} required/>
          <div>
            <button type="submit" className="bg-white text-primaryBlue px-6 py-2 rounded-full">Send</button>
            <p className="mt-2 text-sm">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
