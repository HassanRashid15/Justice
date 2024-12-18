import React from 'react';

function Expertise() {
  const expertiseItems = [
    {
      id: 1,
      name: 'Super Value Pizza',
      price: '$12.99',
      image: '/path/to/image1.jpg', // Example image path
      iconColor: 'text-red-500',
    },
    {
      id: 2,
      name: 'Deluxe Burger',
      price: '$9.99',
      image: '/path/to/image2.jpg', // Example image path
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      name: 'Classic Pasta',
      price: '$14.99',
      image: '/path/to/image3.jpg', // Example image path
      iconColor: 'text-blue-500',
    },
    {
      id: 4,
      name: 'Veggie Salad',
      price: '$7.99',
      image: '/path/to/image4.jpg', // Example image path
      iconColor: 'text-yellow-500',
    },
    // Add more items as needed
  ];

  return (
    <>
      <div>Expertise</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
        {expertiseItems.map(item => (
          <div key={item.id} className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md" style={{ minHeight: '160px' }}>
            <div>
              <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                <div className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 h-auto fill-current ${item.iconColor}`} viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative block h-full">
                <div className="h-32 bg-gray-100 rounded-lg"></div>
              </div>
            </div>

            <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">{item.name}</h2>

            <p className="mt-2 text-gray-800 text-sm">{item.price}</p>

            <button className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">
              Order
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Expertise;
