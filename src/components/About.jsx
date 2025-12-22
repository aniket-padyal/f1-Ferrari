import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          z: -200,
          scale: 0.85,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5 ">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">About Scuderia Ferrari</p>
            <h2>
              Racing isn’t what Ferrari does
              <span className="text-white ">-</span>Racing is who Ferrari is
            </h2>
          </div>

          {/* <div className="sub-content">
            <div>
              <p className="md:text-2xl text-xl font-bold">
                The most iconic name in Formula 1 history.
              </p>
            </div>

            <p>
              Scuderia Ferrari is more than a racing team — it is a legacy of
              passion, innovation, and relentless pursuit of excellence. 
              Founded in Italy, Ferrari has been at the heart of Formula 1 since
              its very first championship.
            </p>
          </div> */}
        </div>

        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy">
              <img src="/images/abt-5.jpg" alt="grid-img-5" />
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="noisy">
              <img src="/images/abt-1.png" alt="grid-img-1" />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="noisy">
              <img src="/images/abt-3.png" alt="grid-img-3" />
            </div>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-4">
            <div className="noisy">
              <img src="/images/abt-4.png" alt="grid-img-4" />
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="noisy">
              <img src="/images/abt-2.png" alt="grid-img-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
