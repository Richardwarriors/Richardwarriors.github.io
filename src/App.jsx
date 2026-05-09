import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import heroPortrait from "../liuhaocun/liuhaocun_14.jpg";
import heroDetail from "../liuhaocun/liuhaocun_24.jpg";
import heroAccent from "../liuhaocun/liuhaocun_18.jpg";
import galleryEditorial from "../liuhaocun/liuhaocun_24.jpg";
import galleryAtelier from "../liuhaocun/liuhaocun_15.jpg";
import galleryRedCarpet from "../liuhaocun/liuhaocun_21.jpg";
import galleryMagazine from "../liuhaocun/liuhaocun_18.jpg";
import galleryWorldTour from "../liuhaocun/liuhaocun_23.jpg";
import galleryNight from "../liuhaocun/liuhaocun_22.jpg";
import galleryOffDuty from "../liuhaocun/liuhaocun_20.jpg";
import galleryBts from "../liuhaocun/liuhaocun_10.jpg";

const titleLines = [
  ["L", "I", "U"],
  ["H", "A", "O", "C", "U", "N"],
];

const heroReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const letterReveal = {
  hidden: { y: "112%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const galleryReveal = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.08 * index,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const galleryItems = [
  {
    image: galleryEditorial,
    caption: "Editorial Shoot",
    note: "Close portrait / velvet focus",
    layout: "layout-a",
  },
  {
    image: galleryAtelier,
    caption: "Atelier Diary",
    note: "Warm palette / cinematic framing",
    layout: "layout-b",
  },
  {
    image: galleryRedCarpet,
    caption: "Red Carpet",
    note: "Soft tailoring / silver light",
    layout: "layout-c",
  },
  {
    image: galleryMagazine,
    caption: "Magazine Cover",
    note: "Pastel polish / sculpted glow",
    layout: "layout-d",
  },
  {
    image: galleryWorldTour,
    caption: "World Tour",
    note: "Playful styling / graphic shape",
    layout: "layout-e",
  },
  {
    image: galleryNight,
    caption: "Celebration Night",
    note: "Rich crimson / couture energy",
    layout: "layout-f",
  },
  {
    image: galleryOffDuty,
    caption: "Off-Duty Glow",
    note: "Quiet ease / natural movement",
    layout: "layout-g",
  },
  {
    image: galleryBts,
    caption: "Behind the Scenes",
    note: "Lime wash / backstage charm",
    layout: "layout-h",
  },
];

function App() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 18, mass: 0.55 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 18, mass: 0.55 });

  const mediaX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const mediaY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const detailX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const detailY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["36%", "64%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["32%", "66%"]);

  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(255, 255, 255, 0.22) 0%, rgba(173, 114, 255, 0.18) 14%, rgba(90, 34, 138, 0.08) 28%, transparent 52%)`;

  const handlePointerMove = (event) => {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="site-shell">
      <motion.div
        aria-hidden="true"
        className="ambient-blob ambient-blob-one"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 26, -12, 0],
                y: [0, -22, 14, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="ambient-blob ambient-blob-two"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -34, 12, 0],
                y: [0, 24, -18, 0],
                scale: [1, 0.94, 1.06, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="ambient-blob ambient-blob-three"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 12, -20, 0],
                y: [0, -18, 8, 0],
                scale: [1, 1.05, 0.98, 1],
              }
        }
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <main className="page-frame">
        <motion.section
          id="hero"
          className="hero-section"
          initial="hidden"
          animate="show"
          onMouseMove={handlePointerMove}
          onMouseLeave={resetPointer}
        >
          <div className="hero-chrome">
            <span className="chrome-brand">Liu Haocun / Edition</span>
            <div className="chrome-links">
              <a href="#gallery">Gallery</a>
              <a href="portfolio.html">Portfolio</a>
            </div>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <motion.span className="eyebrow" variants={fadeUp}>
                New wave cinema. Fashion-led presence.
              </motion.span>

              <h1 className="sr-only">Liu Haocun</h1>
              <motion.div className="hero-title-lockup" variants={heroReveal}>
                {titleLines.map((line, lineIndex) => (
                  <div key={lineIndex} className="title-line" aria-hidden="true">
                    {line.map((letter, letterIndex) => (
                      <motion.span
                        key={`${lineIndex}-${letterIndex}`}
                        className="title-letter"
                        variants={letterReveal}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.div>

              <motion.p className="hero-tagline" variants={fadeUp}>
                Actress. Performer. Global Icon.
              </motion.p>

              <motion.p className="hero-description" variants={fadeUp}>
                A cinematic digital feature shaped like an editorial cover story: precise, luminous,
                and built around Liu Haocun&apos;s calm magnetism across fashion, performance, and
                image-making.
              </motion.p>

              <motion.div className="cta-row" variants={fadeUp}>
                <a className="button button-primary" href="#gallery">
                  Explore Gallery
                </a>
                <a className="button button-secondary" href="#highlights">
                  Watch Story
                </a>
              </motion.div>

              <motion.div id="highlights" className="hero-highlights" variants={fadeUp}>
                <article className="highlight-card">
                  <span className="highlight-index">01</span>
                  <strong>Editorial velocity</strong>
                  <p>Large-scale typography and runway-grade contrast.</p>
                </article>
                <article className="highlight-card">
                  <span className="highlight-index">02</span>
                  <strong>Screen presence</strong>
                  <p>Quiet styling, silver light, and cinematic depth.</p>
                </article>
                <article className="highlight-card">
                  <span className="highlight-index">03</span>
                  <strong>Curated frames</strong>
                  <p>A gallery arranged like a magazine spread, not a simple grid.</p>
                </article>
              </motion.div>
            </div>

            <div className="hero-visual">
              <motion.div className="hero-spotlight" style={{ backgroundImage: spotlight }} />

              <motion.div className="portrait-stage" style={shouldReduceMotion ? undefined : { x: mediaX, y: mediaY }}>
                <div className="portrait-panel">
                  <img src={heroPortrait} alt="Liu Haocun in tailored editorial styling" />
                  <div className="portrait-caption">
                    <span className="portrait-kicker">Cover Story / Motion Edit</span>
                    <strong>Asymmetry, softness, and a fashion-house sense of restraint.</strong>
                  </div>
                </div>
              </motion.div>

              <motion.article
                className="floating-frame floating-frame-top"
                style={shouldReduceMotion ? undefined : { x: detailX, y: detailY }}
              >
                <img src={heroDetail} alt="Close portrait of Liu Haocun" />
                <div className="floating-copy">
                  <span>Beauty close-up</span>
                  <strong>Porcelain light</strong>
                </div>
              </motion.article>

              <motion.article
                className="floating-frame floating-frame-bottom"
                style={shouldReduceMotion ? undefined : { x: mediaX, y: detailY }}
              >
                <img src={heroAccent} alt="Liu Haocun in a pastel editorial pose" />
                <div className="floating-copy">
                  <span>Fashion note</span>
                  <strong>Pastel precision</strong>
                </div>
              </motion.article>
            </div>
          </div>
        </motion.section>

        <section id="gallery" className="gallery-section">
          <motion.div
            className="gallery-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <div>
              <span className="eyebrow">Gallery selection</span>
              <h2>Selected frames with magazine-spread rhythm.</h2>
            </div>
            <p>
              Eight looks, arranged as an editorial mosaic with depth, hover glow, and smooth
              reveal timing powered by Framer Motion.
            </p>
          </motion.div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <motion.article
                key={item.caption}
                className={`gallery-card ${item.layout}`}
                custom={index}
                variants={galleryReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={shouldReduceMotion ? undefined : { y: -10 }}
              >
                <div className="gallery-media">
                  <img src={item.image} alt={`${item.caption} portrait of Liu Haocun`} />
                </div>
                <div className="gallery-overlay" />
                <span className="gallery-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="gallery-copy">
                  <span>{item.note}</span>
                  <h3>{item.caption}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
