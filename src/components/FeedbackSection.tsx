import React, { useState } from 'react';
import { Star, Send, MessageSquare, User, Mail, Phone } from 'lucide-react';

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Home Shifting',
    'Office Relocation',
    'Car Transport',
    'Bike Transport',
    'International Moving',
    'Local Shifting',
    'Warehousing & Storage',
    'Packing Services',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailContent = `
New Feedback from Mamta Packers and Movers Website

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service Used: ${formData.service}

Rating: ${rating}/5 stars

Feedback:
${formData.feedback}

Submitted on: ${new Date().toLocaleString()}
    `;

    try {
      // Using EmailJS or similar service would be ideal here
      // For now, we'll simulate the email sending
      const mailtoLink = `mailto:itsshahid92@gmail.com?subject=New Feedback - Mamta Packers and Movers&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        feedback: ''
      });
      setRating(0);
    } catch (error) {
      console.error('Error sending feedback:', error);
      alert('There was an error sending your feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-xl shadow-lg border border-yellow-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your feedback has been submitted successfully. We appreciate your time and will get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
            >
              Submit Another Feedback
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Share Your <span className="text-yellow-600">Feedback</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We value your opinion! Please share your experience with our services and help us improve.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Service Used
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Rating Section */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-4 block">
                Rate Our Service *
              </label>
              <div className="flex items-center space-x-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none transition-colors"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= (hoveredRating || rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {rating === 0 && 'Please select a rating'}
                {rating === 1 && 'Poor - Needs significant improvement'}
                {rating === 2 && 'Fair - Below expectations'}
                {rating === 3 && 'Good - Meets expectations'}
                {rating === 4 && 'Very Good - Exceeds expectations'}
                {rating === 5 && 'Excellent - Outstanding service'}
              </p>
            </div>

            {/* Feedback Text */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="h-4 w-4" />
                <span>Your Feedback *</span>
              </label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Please share your detailed feedback about our services..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-medium text-lg transition-colors ${
                  isSubmitting || rating === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-yellow-600 text-white hover:bg-yellow-700'
                }`}
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Feedback'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            You can also reach us directly at{' '}
            <a href="mailto:itsshahid92@gmail.com" className="text-yellow-600 hover:text-yellow-700 font-medium">
              itsshahid92@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;