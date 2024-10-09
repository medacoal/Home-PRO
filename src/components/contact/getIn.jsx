import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.fullName) formErrors.fullName = 'Full name is required';
    if (!formData.email) formErrors.email = 'Email address is required';
    if (!formData.phone) formErrors.phone = 'Phone number is required';
    if (!formData.subject) formErrors.subject = 'Subject is required';
    if (!formData.message) formErrors.message = 'Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center p-6 transform md:w-[90%] mx-auto">
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md lg:max-h-[695px]">
          <h1 className="text-2xl font-bold mb-4 text-center">Get in Touch with Us</h1>
          <p className="mb-8 text-center">
            We're here to help you with all your real estate needs. Whether you have questions about buying
            or selling a property, need advice on the market, or want to schedule a viewing, our team is ready
            to assist you. Please fill out the form below or reach out to us directly through the provided
            contact information.
          </p>

          <form className="space-y-4 lg:space-y-10" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:gap-4 mb-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-4 mb-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows="6"
              className="w-full max-h-56 px-3 py-3 border border-gray-300 rounded-lg shadow-sm sm:text-sm mb-4"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-2/5 py-3 px-4 bg-[#9FA007] text-white font-semibold rounded-full shadow-md hover:bg-[#8d8d44] text-decoration-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;