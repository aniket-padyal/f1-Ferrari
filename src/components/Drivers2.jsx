import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { driverLists } from "../constants";

const Drivers = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalDrivers = driverLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalDrivers) % totalDrivers;
    setCurrentIndex(newIndex);
  };

  const getDriverAt = (offset) => {
    return driverLists[
      (currentIndex + offset + totalDrivers) % totalDrivers
    ];
  };

  const currentDriver = getDriverAt(0);
  const nextDriver = getDriverAt(1);
  const prevDriver = getDriverAt(-1);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      "#title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        imageRef.current,
        { opacity: 0, xPercent: -20 },
        { opacity: 1, xPercent: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".details h2",
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        ".details p",
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
      );
  }, [currentIndex]);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <h2 id="menu-heading" className="sr-only">
        Ferrari Drivers
      </h2>

      {/* Tabs */}
      <nav className="cocktail-tabs" aria-label="Driver Navigation">
        {driverLists.map((driver, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={driver.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {driver.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        {/* Arrows */}
        <div className="arrows">
          <button onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevDriver.name}</span>
            <img
              src="/images/right-arrow.png"
              alt=""
              aria-hidden="true"
            />
          </button>

          <button onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextDriver.name}</span>
            <img
              src="/images/left-arrow.png"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Driver Image */}
        <div className="cocktail">
          <img
            ref={imageRef}
            src={currentDriver.image}
            alt={currentDriver.name}
            className="object-contain"
          />
        </div>

        {/* Driver Info */}
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Driver:</p>
            <p id="title">{currentDriver.name}</p>
          </div>

          <div className="details">
            <h2>{currentDriver.title}</h2>
            <p>{currentDriver.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drivers;
