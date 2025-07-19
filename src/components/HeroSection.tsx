import React, { useState } from 'react';
import { MapPin, RefreshCw, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    pickupName: '',
    pickupAddress: '',
    deliveryName: '',
    deliveryAddress: '',
    captcha: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleVerifyCaptcha = () => {
    if (formData.captcha.toLowerCase() === 'abcd') {
      setCaptchaVerified(true);
    } else {
      alert('Please enter the correct captcha: ABCD');
    }
  };

  const handleProceed = () => {
    if (captchaVerified && formData.pickupName && formData.pickupAddress && formData.deliveryName && formData.deliveryAddress) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill all fields and verify captcha');
    }
  };

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Section - About */}
          <div className="space-y-6 lg:order-2">
            <div className="space-mt-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                <span className="text-yellow-600">Mamta</span> Packers
              
                <span className="text-gray-700"> & Movers</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are dedicated to making every relocation smooth, secure, and completely hassle-free for our customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Welcome to Mamta Packers and Movers!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Aimed at making every relocation procedure seamless and secure, our platform serves as the best online hub to hire verified, professional packers and movers both across India and internationally.
              </p>
            </div>


             <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Who we are ?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2015, we started as a loading/unloading specialist serving events, shifting operations, and more. As customer needs evolved, we expanded to full packing, moving, and logistics services. Over the years, our business has grown—yet our core focus remains the same: safe handling, on-time delivery, and earning trust one client at a time.

                 Vision Statement
                 “To be the first choice in comprehensive logistics and relocation solutions—known for our safety-first mindset, punctual service, and unwavering client trust.”

                  Mission Statement
                  Deliver excellence in packing, moving, loading, and unloading through a skilled, customer-focused team.

                  Champion safety by using secure methods, protective packaging, and quality equipment to safeguard every item.

                  Prioritize timeliness through streamlined operations and proactive communication—so schedules matter, and we meet them.

                  Earn and keep client trust by treating goods as our own and backing every service with transparent, reliable support.

                  Core Values
                  Safety & Care: Every item is precious. We handle your goods with utmost protection.

                  Reliability: On-time delivery and consistent execution build real peace of mind.

                  Trust & Integrity: We deliver what we promise—and own up if anything goes off‑track.

                  Adaptability: As needs change, so do we—adding services, technology, and responsiveness.

                  Client-Centric Service: Your satisfaction drives us. We listen, customize, and follow through.

                  Why We Stand Out
                  A Decade of Experience since 2015 across events, logistics, and relocations.

                 Integrated Solutions: From packing to unpacking—you count on us for complete end-to-end service.

                  Client Trust: Our success is built on long-term relationships and repeated referrals.

                  Commitment to Advancement: As new challenges arise, we evolve—adding services to stay ahead.
              </p>
            </div>
          </div>

          {/* Left Section - Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 lg:order-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get Free Quote
            </h2>

            <form className="space-y-6">
              {/* Pickup Point */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-yellow-600">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Pickup Point</h3>
                </div>
                <input
                  type="text"
                  name="pickupName"
                  placeholder="Name"
                  value={formData.pickupName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <textarea
                  name="pickupAddress"
                  placeholder="Address"
                  value={formData.pickupAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* Delivery Point */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-yellow-600">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Delivery Point</h3>
                </div>
                <input
                  type="text"
                  name="deliveryName"
                  placeholder="Name"
                  value={formData.deliveryName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <textarea
                  name="deliveryAddress"
                  placeholder="Address"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* CAPTCHA */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                  <span className="text-lg font-mono font-bold text-gray-700">ABCD</span>
                  <RefreshCw className="h-5 w-5 text-gray-500 cursor-pointer hover:text-yellow-600" />
                </div>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Enter CAPTCHA"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={handleVerifyCaptcha}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    captchaVerified
                      ? 'bg-green-600 text-white cursor-default'
                      : 'bg-yellow-600 text-white hover:bg-yellow-700'
                  }`}
                >
                  {captchaVerified ? '✓ Verified' : 'Verify Captcha'}
                </button>
              </div>

              {/* Proceed Button */}
              <button
                type="button"
                onClick={handleProceed}
                disabled={!captchaVerified}
                className={`w-full py-4 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors ${
                  captchaVerified
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>Proceed</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;