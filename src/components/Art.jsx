import { useGSAP } from "@gsap/react";
import { performanceLists, chasisLists } from "../constants";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap/all";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <div>
            <h3 className="will-fade">Performance - Power</h3>
            <ul className="space-y-4 will-fade">
              {performanceLists.map(({ id, key, value }) => {
                return (
                  <li key={id} className="flex items-center gap-2 ">
                    <img src="/images/check.png" alt="check" />
                    <p>
                      <span className="font-bold">{key}</span> : {value}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="car-img">
            <img
              src="/images/under-image.jpg"
              alt="car"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <div>
            <h3 className="will-fade">Chassis - Engineering</h3>
            <ul className="space-y-4 will-fade">
              {chasisLists.map(({ id, key, value }) => {
                return (
                  <li key={id} className="flex items-center gap-2 ">
                    <img src="/images/check.png" alt="check" />
                    <p className="md:w-fit w-60">
                      <span className="font-bold">{key}</span> : {value}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Built to perform under extreme pressure</h2>
          <div id="masked-content">
            <h3>The Ferrari F1 Machine</h3>
            <p>This Formula One car is built to dominate and conquer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
