import React from 'react';
import { MapPin, User } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      role: 'Director',
      name: 'Rajesh Kumar',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      role: 'Manager',
      name: 'Priya Sharma',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      role: 'Transport Head',
      name: 'Amit Singh',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const drivers = [
    {
      name: 'Ramesh Yadav',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Suresh Kumar',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Vinod Gupta',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-yellow-600">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional and experienced team members dedicated to your smooth relocation
          </p>
        </div>

        {/* Management Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Management Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center justify-center space-x-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{member.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Drivers */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Lead Drivers</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {drivers.map((driver, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <img
                    src={driver.image}
                    alt={driver.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{driver.name}</h4>
                  <p className="text-yellow-600 font-medium">Lead Driver</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;