import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.8,
      // stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.8,
      stagger: 0.06,
      delay: 1,
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy ">
        <h1 className="title">Born to Race - Engineered to Win</h1>

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block ">
              <p>Since 1950. Forever Red.</p>
              <p className="subtitle">speed-precision-passion</p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                The spirit of Scuderia Ferrari where every millisecond matters
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
