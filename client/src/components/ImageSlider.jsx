import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://imgmediagumlet.lbb.in/media/2022/09/632846916e5fb64e9bd02f1a_1663583889764.jpg?fm=webp&w=250&h=250&dpr=2",
      title: "",
    },
    {
      url: "https://imgmediagumlet.lbb.in/media/2022/09/632846916e5fb64e9bd02f1b_1663583889766.jpg?fm=webp&w=250&h=250&dpr=1",
      title: "",
    },
    {
      url: "https://www.boutiquedeluxe.ca/wp-content/uploads/indian_jewelry_mobile_necklace_sets.jpg",
      title: "",
    },
    {
      url: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "",
    },
    {
      url: "https://images.pexels.com/photos/1185617/pexels-photo-1185617.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "",
    },
    {
      url: "https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center
                   bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 
                   text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer  "
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
                   text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer  "
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* slector */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer "
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
