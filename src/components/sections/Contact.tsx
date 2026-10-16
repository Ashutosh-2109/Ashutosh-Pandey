"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms access key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "9631b9e5-e1e7-4e4a-a094-f3fbc159fec9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error submitting form", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-surface-container-low/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-geist text-on-surface mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-surface-container-high/50 backdrop-blur-sm border border-outline/10"
          >
            <h3 className="text-2xl font-bold text-on-surface font-geist mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-jetbrains text-on-surface-variant">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-surface-container-lowest border border-outline/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-jetbrains text-on-surface-variant">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full bg-surface-container-lowest border border-outline/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-jetbrains text-on-surface-variant">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full bg-surface-container-lowest border border-outline/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-jetbrains text-on-surface-variant">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full bg-surface-container-lowest border border-outline/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Hello Ashutosh..."
                />
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary text-surface font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center font-jetbrains mt-4">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-jetbrains mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container-high/50 border border-outline/10 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-2 font-geist">Email</h4>
                <a href="mailto:ashutosh.pandey.2197@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
                  ashutosh.pandey.2197@gmail.com
                </a>
              </div>
              
              <div className="p-6 rounded-2xl bg-surface-container-high/50 border border-outline/10 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-2 font-geist">Location</h4>
                <p className="text-on-surface-variant">
                  VIT Vellore, <br /> Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="flex-1 rounded-3xl overflow-hidden border border-outline/20 relative min-h-[250px] bg-surface-container-lowest group">
              {/* Fallback stylized map background using CSS pattern if iframe fails or is loading */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm19 19V1H1v18h18z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }} />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.041079970119!2d79.15335867490408!3d12.96922328734547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecbea!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(80%)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-all duration-500 group-hover:filter-none"
              ></iframe>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <motion.a 
                href="https://github.com/Ashutosh-2109" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-surface-container-high border border-outline/15 flex items-center justify-center text-on-surface hover:bg-primary hover:text-surface hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ashutosh-pandey-8468072b5/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: -8 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-surface-container-high border border-outline/15 flex items-center justify-center text-on-surface hover:bg-primary hover:text-surface hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
