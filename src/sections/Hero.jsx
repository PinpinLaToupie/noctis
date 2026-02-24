import { useEffect, useRef } from "react";
import { Download, Shield, Smartphone } from "lucide-react";
import { APK_URL, APP_VERSION, APK_SIZE } from "../config.js";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    els?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} style={styles.wrapper}>
      {/* Radial glow background */}
      <div style={styles.glow} aria-hidden="true" />
      <div style={styles.glowSecondary} aria-hidden="true" />

      <div style={styles.inner}>
        {/* Logo */}
        <div className="fade-up" style={styles.logoWrap}>
          <img
            src="/assets/splash.png"
            alt="Noctis logo"
            style={styles.logoIcon}
          />
        </div>

        {/* Tagline */}
        <h1 className="fade-up" style={styles.tagline}>
          Chiffrement de bout en bout.{" "}
          <span style={styles.taglineAccent}>Zéro serveur.</span> Secret
          partagé.
        </h1>

        {/* Sub */}
        <p className="fade-up" style={styles.sub}>
          Chaque message chiffré avec la clé publique du destinataire avant
          d'atteindre le serveur. Même si l'infrastructure est compromise, vos
          conversations restent illisibles.
        </p>

        {/* CTA */}
        <div className="fade-up" style={styles.ctaRow}>
          <a href={APK_URL} download className="btn-download">
            <Download size={18} />
            Télécharger l'APK (v{APP_VERSION})
          </a>
          <div style={styles.badges}>
            <span style={styles.badge}>
              <Smartphone size={13} style={{ marginRight: 5 }} />
              Android
            </span>
            <span style={styles.badge}>
              <Shield size={13} style={{ marginRight: 5 }} />
              {APK_SIZE}
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fade-up" style={styles.scrollHint} aria-hidden="true">
          <div style={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "80px 24px 60px",
  },
  glow: {
    position: "absolute",
    top: "-10%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "900px",
    height: "700px",
    background:
      "radial-gradient(ellipse at center, rgba(75,45,142,0.35) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  glowSecondary: {
    position: "absolute",
    bottom: "5%",
    right: "-15%",
    width: "500px",
    height: "400px",
    background:
      "radial-gradient(ellipse at center, rgba(123,93,204,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  inner: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "740px",
    gap: "0",
  },
  logoWrap: {
    marginBottom: "24px",
  },
  logoIcon: {
    width: "250px",
    height: "250px",
    objectFit: "contain",
    filter: "drop-shadow(0 0 32px rgba(167,139,250,0.4))",
  },
  logoTextWrap: {
    marginBottom: "32px",
  },
  logoText: {
    height: "38px",
    objectFit: "contain",
    filter: "drop-shadow(0 0 12px rgba(167,139,250,0.25))",
  },
  tagline: {
    fontSize: "clamp(30px, 6vw, 52px)",
    fontWeight: 800,
    lineHeight: 1.12,
    color: "#F0EAFF",
    marginBottom: "20px",
    letterSpacing: "-0.02em",
  },
  taglineAccent: {
    background: "linear-gradient(90deg, #A78BFA, #7B5DCC)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  sub: {
    fontSize: "17px",
    color: "#7A7090",
    lineHeight: 1.7,
    maxWidth: "540px",
    marginBottom: "40px",
  },
  ctaRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginBottom: "56px",
  },
  badges: {
    display: "flex",
    gap: "10px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "5px 12px",
    background: "rgba(75,45,142,0.18)",
    border: "1px solid rgba(75,45,142,0.35)",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#A78BFA",
    fontWeight: 500,
  },
  scrollHint: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
  },
  scrollDot: {
    width: "6px",
    height: "40px",
    borderRadius: "3px",
    background:
      "linear-gradient(to bottom, rgba(167,139,250,0.6), transparent)",
    animation: "pulse 2s ease-in-out infinite",
  },
};
