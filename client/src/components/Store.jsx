import React from "react";

const Store = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] ">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://www.smergers.com/media/businessphoto/33048-1564385751-1a4f2bba-e317-467c-ae88-b8dd3d029db4.jpg"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://www.smergers.com/media/businessphoto/33048-1564385748-22d36ccf-3174-4775-aa29-c5318069f533.jpg"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://www.smergers.com/media/businessphoto/33047-1564385742-e181b8d4-50e4-4cfa-81d6-1f4a1265a3b9.jpg"
          alt="a"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://imgk.timesnownews.com/story/gold_14.jpg?tr=w-600,h-450,fo-auto"
          alt="b"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://i.insider.com/61025e410d35a9001825c443?width=700&format=jpeg&auto=webp"
          alt=""
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Visit Our Store</h3>
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
            Read More
          </button>
          <button className="border-black bg-black text-white hover:shadow-xl">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
