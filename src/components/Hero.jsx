import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import useMediaQuery from "react-responsive";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

ScrollTrigger.config({
  ignoreMobileResize: true,
  anticipatePin: 1,
});

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());

    const video = videoRef.current;
    if (!video) return;

    video.style.transform = "translateZ(0)";
    video.pause();
    video.currentTime = 0;

    // document.fonts.ready.then(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.8,
    });

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.8,
      stagger: 0.06,
      delay: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-wrapper",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    video.onloadedmetadata = () => {
      tl.to(video, {
        currentTime: video.duration,
        ease: "none",
      });
    };
  }, [isMobile]);

  return (
    <>
      <section id="hero">
        <h1 className="title">Born to Race - Engineered to Win</h1>

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
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

      <div className="video-wrapper">
        <video ref={videoRef} muted playsInline preload="auto">
          {/* Mobile first */}
          <source
            src="/videos/forSmallScreen.mp4"
            media="(max-width: 767px)"
            type="video/mp4"
          />

          {/* Desktop fallback */}
          <source
            src="/videos/forBigScreen.mp4"
            media="(min-width: 768px)"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Hero;
