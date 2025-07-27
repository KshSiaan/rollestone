import React from "react";

const PassengerDetails = () => {
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        Passenger Details
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {/* Name */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Name</p>
          <p className="text-lg font-medium text-gray-800">Liam Bentley</p>
        </div>
        {/* Email */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Email</p>
          <p className="text-lg font-medium text-gray-800">Liam@gmail.com</p>
        </div>

        {/* Card Number */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Card Number</p>
          <p className="text-lg font-medium text-gray-800">**** 2466</p>
        </div>
        {/* Current Balance */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Current Balance</p>
          <p className="text-lg font-medium text-green-600">$78.90</p>
        </div>

        {/* Last Trip */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Last Trip</p>
          <p className="text-lg font-medium text-gray-800">30 min ago</p>
        </div>
        {/* Status */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Status</p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
