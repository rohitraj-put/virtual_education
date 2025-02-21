import React, { useState, useRef, useEffect } from "react";

const StudentFeedbackData = [
  {
    name: "Alice Johnson",
    role: "UI-UX Designer",
    imagePath:
      "https://www.tailwindtap.com/assets/edtech/feedback/feedback_img1.png",
    description:
      "Alice is a highly creative UI/UX designer with over 5 years of experience in crafting intuitive and engaging user interfaces. She has a deep understanding of user psychology and focuses on delivering exceptional digital experiences. Alice has worked on a wide variety of projects ranging from mobile applications to web platforms.",
  },
  {
    name: "Michael Smith",
    role: "Web Developer",
    imagePath:
      "https://www.tailwindtap.com/assets/edtech/feedback/feedback_img.png",
    description:
      "Michael is a skilled web developer specializing in front-end and back-end development with a knack for solving complex problems. He has extensive experience in building dynamic websites and web applications using technologies like HTML, CSS, JavaScript, and React.",
  },
  {
    name: "Sophia Lee",
    role: "Software Engineer",
    imagePath:
      "https://www.tailwindtap.com/assets/edtech/feedback/feedback_img.png",
    description:
      "Sophia is a highly proficient software engineer with expertise in developing scalable software solutions. She has experience working with various programming languages such as Python, Java, and C++. Sophia's focus is on building robust applications that are easy to maintain and optimize for performance.",
  },
  {
    name: "David Patel",
    role: "Backend Developer",
    imagePath:
      "https://www.tailwindtap.com/assets/edtech/feedback/feedback_img.png",
    description:
      "David is a backend developer with a strong understanding of server-side technologies, database management, and APIs. His expertise includes working with Node.js, Express, and MongoDB, which allows him to build robust and scalable systems. He is passionate about optimizing back-end processes to improve performance and reliability.",
  },
  {
    name: "Emma Davis",
    role: "Frontend Developer",
    imagePath:
      "https://www.tailwindtap.com/assets/edtech/feedback/feedback_img.png",
    description:
      "Emma is a dedicated frontend developer who excels at turning design concepts into fully functional websites and web applications. She has a strong grasp of modern front-end technologies like React, Vue.js, and Material UI, ensuring that her work is both visually appealing and technically sound.",
  },
  {
    name: "James Carter",
    role: "UI-UX Designer",
    imagePath:
      "https://www.tailwindtap.com/assets/edtech/feedback/feedback_img.png",
    description:
      "James is an experienced UI/UX designer who combines creativity with technical expertise to create engaging and user-centered designs. His work spans various industries, and he is known for his ability to simplify complex workflows while maintaining aesthetic appeal.",
  },
];

export default function Feedback() {
  return (
    <div className="max-w-full px-8 xl:mx-auto py-20">
      <div className=" mx-auto">
        <div className="text-2xl md:text-3xl lg:text-[40px]  font-semibold flex gap-2 relative">
          <p>Student</p>
          <p className="text-[#20b486]">Feedback</p>
        </div>
        <div>
          <p className="text-primaryGray text-md my-4  md:text-left">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>
      </div>
      <div className="flex gap-3 overflow-hidden">
        <Slider width={600} isUpdateWidth={true}>
          {StudentFeedbackData.map((item, index) => (
            <FeedbackCard key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
function FeedbackCard({ item }) {
  return (
    <div className=" relative shadow-custom-box-shadow shadow-md p-5 w-[90vw] md:w-[500px] lg:w-[600px] rounded-[30px] select-none">
      <div className="flex gap-[10px] items-center">
        <div className="h-16 w-16 rounded-full overflow-hidden ">
          <img src={item?.imagePath} alt="image" height={64} width={64} />
        </div>
        <div>
          <p className="md:text-2xl font-semibold">{item?.name}</p>
          <p className="text-xs md:text-base font-normal">{item?.role}</p>
        </div>
      </div>
      <div className="mt-[23px]">
        <p>{item?.description.slice(0, 250) + "..."}</p>
      </div>
      <img
        src="https://www.tailwindtap.com/assets/edtech/feedback/feedback_logo.svg"
        alt="image"
        height={31}
        width={44}
        className="h-6 w-8 md:h-8 md:w-11 absolute top-3 right-8 "
      />
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
                index === currentIndex ? "bg-[#20b486]" : "bg-gray-300"
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
