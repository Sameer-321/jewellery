import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] ">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://media.istockphoto.com/id/1160947136/photo/couple-relax-on-the-beach-enjoy-beautiful-sea-on-the-tropical-island.webp?b=1&s=170667a&w=0&k=20&c=iQlqRxWg8LdpLy6Sr4nhkKZ_pW7ZdCTVJApuWQsPEiM="
          alt=""
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciuntet
          ad at? Quis veniam eaque vitae magni earum minus velit, sed, magnam
          eveniet atque facere nam eum qui. Mollitia.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="border-black bg-black text-white hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
