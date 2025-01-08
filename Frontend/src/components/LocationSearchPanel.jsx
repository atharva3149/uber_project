import React from 'react'

const LocationSearchPanel = ({ suggestions, setvehiclePanel, setpanelopen, setpickup, setdestination, activeField }) => {

  const handleSuggestionClick = (suggestion) => {
      if (activeField === 'pickup') {
          setpickup(suggestion.formatted); // Access the `formatted` property
      } else if (activeField === 'destination') {
          setdestination(suggestion.formatted); // Access the `formatted` property
      }
      // Optionally set other state changes
    //   setvehiclePanel(true);
    //   setpanelopen(false);
  };

  return (
      <div>
          {/* Display fetched suggestions */}
          {suggestions.map((elem, idx) => (
              <div 
                  key={idx} 
                  onClick={() => handleSuggestionClick(elem)} 
                  className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                  <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                      <i className="ri-map-pin-fill"></i>
                  </h2>
                  {/* Display the `formatted` field from the suggestion object */}
                  <h4 className='font-medium'>{elem.formatted}</h4>
              </div>
          ))}
      </div>
  );
};

export default LocationSearchPanel;
