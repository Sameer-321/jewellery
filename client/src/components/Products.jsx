import React from "react";

const Products = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Products</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea
          saepe voluptatibus sed facilis possimus.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwaf4ca3c8/images/blog-images/Beautiful-Chokers-Dazzling-Chains-and-Traditional-Necklaces.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw5020f8d8/images/blog-images/Perfect-Versatile-Earrings.jpg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd031a648/images/blog-images/Auspicious-Design-Mangalsutra.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Products;
