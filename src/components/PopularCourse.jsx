import React, { useState, useRef, useEffect } from "react";
import { MdOutlineStar } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

function PopularCourse() {
  const PopularCourseData = [
    {
      title: "Mastering HTML5",
      img_path:
        "https://www.tailwindtap.com/assets/edtech/course/course_img2.png",
      star: 4,
      reviewCount: 12,
      tag: "HTML",
      price: 3000,
    },
    {
      title: "JavaScript for Beginners",
      img_path:
        "https://www.tailwindtap.com/assets/edtech/course/course_img1.png",
      star: 5,
      reviewCount: 25,
      tag: "JavaScript",
      price: 4500,
    },
    {
      title: "Complete React Guide",
      img_path:
        "https://www.tailwindtap.com/assets/edtech/course/course_img2.png",
      star: 4.5,
      reviewCount: 40,
      tag: "React",
      price: 5500,
    },
    {
      title: "Node.js Development",
      img_path:
        "https://www.tailwindtap.com/assets/edtech/course/course_img3.png",
      star: 4.2,
      reviewCount: 18,
      tag: "Node.js",
      price: 6000,
    },
    {
      title: "UI/UX Design",
      img_path:
        "https://www.tailwindtap.com/assets/edtech/course/course_img1.png",
      star: 4.8,
      reviewCount: 50,
      tag: "Design",
      price: 5000,
    },
  ];
  return (
    <div className="bg-[#f0faf7] py-12">
      <div className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-center relative">
        <span className="text-[#20b486] ">
          Most Popular Course
          <img
            className=" absolute top-9 left-[42%]"
            src="https://www.tailwindtap.com/assets/edtech/bottom_vector.svg"
          />
        </span>
      </div>
      <div className=" mx-4 ">
        <div className="overflow-hidden max-w-[1320px] lg:mx-auto">
          <div className="relative flex flex-col lg:flex-row items-center gap-10">
            <Slider width={290}>
              {PopularCourseData.map((course, index) => (
                <CourseCard key={index} item={course} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
function Slider({ children, width, isUpdateWidth = false }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(width);
  const carouselRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const mouseStartRef = useRef(null);
  const totalItems = React.Children.count(children);
  const duplicatedChildren = [
    ...React.Children.toArray(children),
    ...React.Children.toArray(children),
  ];
  useEffect(() => {
    const updateItemWidth = () => {
      setItemWidth(width);
      if (isUpdateWidth) {
        if (window.innerWidth < 768) {
          setItemWidth(300);
        } else if (window.innerWidth < 1024) {
          setItemWidth(500);
        } else {
          setItemWidth(600);
        }
      }
    };
    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => {
      window.removeEventListener("resize", updateItemWidth);
    };
  }, []);
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalItems - 1);
      setScrollPosition((totalItems - 1) * itemWidth);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setScrollPosition((prevPosition) => prevPosition - itemWidth);
    }
  };
  const handleNextClick = () => {
    if (currentIndex === totalItems - 1) {
      setCurrentIndex(0);
      setScrollPosition(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setScrollPosition((prevPosition) => prevPosition + itemWidth);
    }
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setScrollPosition(index * itemWidth);
  };
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndRef.current = e.changedTouches[0].clientX;
    handleSwipe();
  };
  const handleSwipe = () => {
    if (touchStartRef.current !== null && touchEndRef.current !== null) {
      const diff = touchStartRef.current - touchEndRef.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNextClick();
        } else {
          handlePrevClick();
        }
      }
      touchStartRef.current = null;
      touchEndRef.current = null;
    }
  };
  const handleMouseDown = (e) => {
    mouseStartRef.current = e.clientX;
  };
  const handleMouseUp = (e) => {
    if (mouseStartRef.current !== null) {
      const diff = mouseStartRef.current - e.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNextClick();
        } else {
          handlePrevClick();
        }
      }
      mouseStartRef.current = null;
    }
  };
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);
  return (
    <div>
      <div className="w-screen 2xl:max-w-[1320px] mx-auto overflow-hidden relative">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-hidden overflow-y-hidden py-4"
          style={{ scrollSnapType: "x mandatory" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {duplicatedChildren.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 "
              style={{ width: `screen` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 2xl:mr-28">
        {/* gap-0 md:gap-52  */}
        <div className="flex gap-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-#365CCE" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function CourseCard({ item }) {
  return (
    <div className="bg-white max-w-[250px] sm:max-w-[280px] rounded-2xl shadow-md select-none">
      <div className="p-4">
        <div className="relative">
          <img
            src={item?.img_path}
            alt="image"
            width={280}
            height={207}
            className="rounded-lg"
          />
          <div className="absolute z-10 top-0 left-0 bg-[#cec3b9] py-[6px] px-[13px] rounded-md m-[6px]">
            <p>{item?.tag}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] mt-4">
          <p className="text-[#363A3D] font-medium sm:text-xl overflow-hidden">
            {item?.title.slice(0, 23)}...
          </p>{" "}
          <div className="flex items-center gap-[11px]">
            <div className="flex items-center gap-[6px]">
              <MdOutlineStar className="size-6 text-starColor" />
              <MdOutlineStar className="size-6 text-starColor" />
              <MdOutlineStar className="size-6 text-starColor" />
              <MdOutlineStar className="size-6 text-starColor" />
              <MdOutlineStar className="size-6 text-starColor" />
            </div>
            <div>
              <p className="text-[#52565C]  ">({item?.reviewCount})</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center border-t border-b-gray-300 p-4">
        <div>
          <p className="sm:text-2xl font-semibold">$ {item?.price}</p>
        </div>
        <div className="p-[10px] shadow-custom-box-shadow cursor-pointer hover:bg-[#20b486] hover:text-white  rounded-lg transition duration-300 ease-in-out">
          <HiArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default PopularCourse;
