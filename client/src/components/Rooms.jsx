import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea
          saepe voluptatibus sed facilis possimus.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1668911493514-2aeed8439227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODg5MDA0NHx8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8cVl3Z2RudG1SSGN8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
