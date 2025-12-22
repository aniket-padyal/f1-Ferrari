import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // ---------------- TEXT SPLIT ----------------
    document.fonts.ready.then(() => {
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
    });

    // ---------------- HERO PARALLAX ----------------
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // ---------------- VIDEO SCRUB ----------------
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const startValue = isMobile ? "top top" : "center 60%";
    // const endValue = isMobile ? "140% top" : "bottom top";
    const endValue = isMobile
      ? `${Math.min(video.duration * 30, 180)}% top`
      : "bottom top";

    video.onloadedmetadata = () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: video,
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true, // ✅ safe because video is absolute
          },
        })
        .to(video, {
          currentTime: video.duration,
          ease: "none",
        });
    };
  }, [isMobile]);

  return (
    <>
      {/* ---------------- HERO CONTENT ---------------- */}
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

      {/* ---------------- VIDEO OVERLAY ---------------- */}
      <div className="video ">
        <video ref={videoRef} muted playsInline preload="auto">
          {/* MOBILE FIRST */}
          <source
            src="/videos/forSmallScreen.mp4"
            media="(max-width: 767px)"
            type="video/mp4"
          />

          {/* DESKTOP */}
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
