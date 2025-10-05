import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been sent successfully ✨");
      event.target.reset();
    } else {
      setResult("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-16 px-4"
    >
      <div className="max-w-5xl w-full bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-lg shadow-black/40">
        <h2 className="mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent text-center">
          Let’s Connect
        </h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6 text-gray-300">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-teal-500/10 text-teal-400">
                <FaEnvelope size={24} />
              </div>
              <a
                href="mailto:paridhimittal0210@gmail.com"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                paridhimittal0210@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-teal-500/10 text-teal-400">
                <FaMapMarkerAlt size={24} />
              </div>
              <p className="text-gray-400">Noida, Uttar Pradesh, India</p>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-teal-500/10 text-teal-400">
                <FaLinkedin size={24} />
              </div>
              <a
                href="https://www.linkedin.com/in/paridhi-mittal-912874245/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                linkedin.com/in/paridhi-mittal
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-teal-500/10 text-teal-400">
                <FaGithub size={24} />
              </div>
              <a
                href="https://github.com/parim2024"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                github.com/parim2024
              </a>
            </div>

            {/* Buttons for LinkedIn & GitHub 
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/paridhi-mittal-912874245/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:shadow-teal-500/40"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/parim2024"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:shadow-gray-500/40"
              >
                GitHub
              </a>
            </div>
          */}
 </div>

          {/* Contact Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50 outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/40"
            >
              Send Message
            </button>

            {result && (
              <p className="text-center text-sm text-teal-400 mt-2">{result}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
