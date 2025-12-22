import { performanceLists, chasisLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Art = () => {
  useGSAP(() => {
    // Center image mask reveal
    gsap.fromTo(
      ".masked-img",
      {
        clipPath: "circle(20% at 50% 50%)",
      },
      {
        clipPath: "circle(75% at 50% 50%)",
        ease: "none",
        scrollTrigger: {
          trigger: "#art",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // Optional: fade lists
    gsap.from(".will-fade", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#art",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content grid grid-cols-3 items-center gap-10">
          {/* LEFT */}
          <div>
            <h3>Performance - Power</h3>
            <ul className="space-y-4 will-fade">
              {performanceLists.map(({ id, key, value }) => (
                <li key={id} className="flex items-center gap-2">
                  <img src="/images/check.png" alt="check" />
                  <span className="font-bold">{key}</span> : {value}
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER IMAGE (MASKED) */}
          <div className="cocktail-img">
            <video
              className="masked-img size-full object-contain"
              src="/videos/EndScreen.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* RIGHT */}
          <div>
            <h3>Chassis - Engineering</h3>
            <ul className="space-y-4 will-fade">
              {chasisLists.map(({ id, key, value }) => (
                <li key={id} className="flex items-center gap-2">
                  <img src="/images/check.png" alt="check" />
                  <span className="font-bold">{key}</span> : {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
