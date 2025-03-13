import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus({ loading: true, success: false, error: null });
      try {
        // Replace these with your actual EmailJS credentials
        const result = await emailjs.sendForm(
          'YOUR_SERVICE_ID', // Service ID
          'YOUR_TEMPLATE_ID', // Template ID
          form.current,
          'YOUR_PUBLIC_KEY' // Public Key
        );

        if (result.text === 'OK') {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ name: "", email: "", message: "" }); // Reset form
          setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000); // Clear success message after 5s
        }
      } catch (error) {
        console.error('Failed to send email:', error);
        setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
      }
    }
  };

  const renderField = (field) => {
    const isMessage = field === 'message';
    const Component = isMessage ? 'textarea' : 'input';
    const label = field.charAt(0).toUpperCase() + field.slice(1);
    
    return (
      <div key={field} className="mb-4">
        <label htmlFor={field} className="block text-sm font-medium text-gray-200 mb-2">
          {label}
        </label>
        <Component
          id={field}
          name={field}
          type={field === 'email' ? 'email' : 'text'}
          placeholder={`Enter your ${label.toLowerCase()}`}
          className={`w-full px-4 py-2 bg-gray-800 border ${
            errors[field] ? 'border-red-500' : 'border-gray-600'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-colors ${
            isMessage ? 'h-32 resize-none' : 'h-10'
          }`}
          value={formData[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          onBlur={validate}
        />
        {errors[field] && (
          <p className="mt-1 text-sm text-red-400">{errors[field]}</p>
        )}
      </div>
    );
  };

  return (
    <section className="p-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {['name', 'email', 'message'].map(renderField)}
        
        {status.error && (
          <div className="text-red-400 text-center text-sm">
            {status.error}
          </div>
        )}
        
        {status.success && (
          <div className="text-green-400 text-center text-sm">
            Message sent successfully!
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={status.loading}
            className={`btn btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 
              ${status.loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact; 