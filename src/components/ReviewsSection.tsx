import React from 'react';
import { Star, User } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Anita Sharma',
      location: 'Delhi to Mumbai',
      rating: 5,
      review: 'Excellent service! The team was professional and handled all our belongings with care. Highly recommended.',
      date: 'March 2024'
    },
    {
      name: 'Rajesh Patel',
      location: 'Bangalore to Chennai',
      rating: 5,
      review: 'Very satisfied with the service. On-time delivery and reasonable pricing. Will definitely use again.',
      date: 'February 2024'
    },
    {
      name: 'Sunita Gupta',
      location: 'Pune to Hyderabad',
      rating: 4,
      review: 'Good service overall. The staff was courteous and the process was smooth. Minor delay but worth it.',
      date: 'January 2024'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews & <span className="text-yellow-600">Ratings</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers across India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
              
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-600 text-white px-6 py-3 rounded-lg">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-semibold">4.8/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;