import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY 
        )
        .then(
            () => {
                toast.success("Message sent successfully!");
                e.target.reset();
            },
            (error) => {
                toast.error("Failed to send");
                console.log(error);
            }
        );
    };

  return (
    <>
     <div className='min-h-screen max-w-6xl mx-auto px-6 py-16'>
        <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold'>
                Contact <span className='text-blue-500'>Me</span>
            </h1>
            <p className='text-gray-500 mt-4 max-w-xl mx-auto'>
                Have a project idea, opportunity, or just want to connect? Feel free to react out.
            </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
            <div className='space-y-6'>
                <h2 className='text-2xl font-semibold'>Let's Connect</h2>
                <p className='text-gray-500 leading-relaxed'>
                    I'm always open to discussing projects, collaboration, interships, or developer opportunites.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                        <FaEnvelope className='text-blue-500 text-xl'/>
                        <a href='mailto:akulakumar453@gmail.com' target='_blank' className='text-blue-500 text-xl'>akulakumar453@gmail.com</a>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaGithub className='text-blue-500 text-xl'/>
                        <a href="https://github.com/Arunkumar2026" rel='noopener noreferrer' target='_blank' className='text-blue-500 text-xl'>https://github.com/Arunkumar2026</a>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaLinkedin className='text-blue-500 text-xl'/>
                        <a href='https://www.linkedin.com/in/arun-kumar-02a608195/' rel='noopener noreferrer' target='_blank' className='text-blue-500 text-xl'>https://www.linkedin.com/in/arun-kumar-02a608195/</a>
                    </div>
                </div>
            </div>

            <div className='bg-white shadow-xl rounded-2xl p-8'>
                <form className='space-y-5' ref={form} onSubmit={sendEmail}>
                    <input type="text" name='from_name' placeholder='Your Name' className='w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500' />
                    <input type="email" name='from_email' placeholder='Your Email' className='w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500' />
                    <textarea rows="5" name='message' placeholder='Your Message' className='w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500' />
                    <button className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition'>Send Message</button>
                </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default Contact