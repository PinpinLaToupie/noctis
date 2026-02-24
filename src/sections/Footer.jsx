import { Download, Shield } from "lucide-react";
import { APK_URL, APP_VERSION } from "../config.js";

export default function Footer() {
  return (
    <footer style={styles.wrapper}>
      <div className="divider" />

      {/* CTA banner before footer */}
      <div style={styles.ctaBanner}>
        <div style={styles.ctaBannerGlow} aria-hidden="true" />
        <div style={styles.ctaInner}>
          <div style={styles.ctaLeft}>
            <h3 style={styles.ctaTitle}>Prêt à reprendre le contrôle ?</h3>
            <p style={styles.ctaSub}>
              Téléchargez l'APK, installez, et vos messages n'appartiennent qu'à
              vous.
            </p>
          </div>
          <a href={APK_URL} download className="btn-download">
            <Download size={18} />
            Télécharger v{APP_VERSION}
          </a>
        </div>
      </div>

      {/* Footer proper */}
      <div style={styles.footerContent}>
        <div style={styles.brand}>
          <img src="/assets/logo.png" alt="Noctis" style={styles.logoImg} />
          <div>
            <div style={styles.brandName}>Noctis</div>
            <div style={styles.brandSub}>
              Chiffrement de bout en bout. Zéro serveur. Secret partagé.
            </div>
          </div>
        </div>

        <div style={styles.footerRight}>
          <div style={styles.pillRow}>
            <span style={styles.pill}>
              <Shield size={12} style={{ marginRight: 4 }} />
              Chiffrement E2E
            </span>
            <span style={styles.pill}>Auditable</span>
            <span style={styles.pill}>Android</span>
          </div>
          <p style={styles.copy}>
            © {new Date().getFullYear()} Noctis 🐢 · Fait avec intention.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    zIndex: 1,
  },
  ctaBanner: {
    position: "relative",
    margin: "0 24px",
    padding: "48px 40px",
    background: "rgba(75,45,142,0.12)",
    border: "1px solid rgba(75,45,142,0.30)",
    borderRadius: "20px",
    overflow: "hidden",
    maxWidth: "1052px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ctaBannerGlow: {
    position: "absolute",
    top: "-40%",
    right: "-10%",
    width: "500px",
    height: "400px",
    background:
      "radial-gradient(ellipse at center, rgba(75,45,142,0.3) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  ctaInner: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "32px",
    flexWrap: "wrap",
  },
  ctaLeft: {
    flex: 1,
    minWidth: "240px",
  },
  ctaTitle: {
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 800,
    color: "#F0EAFF",
    marginBottom: "8px",
  },
  ctaSub: {
    fontSize: "15px",
    color: "#7A7090",
    lineHeight: 1.6,
  },
  footerContent: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "36px 24px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "24px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  logoImg: {
    width: "52px",
    height: "52px",
    objectFit: "contain",
    filter: "drop-shadow(0 0 8px rgba(167,139,250,0.3))",
  },
  brandName: {
    fontSize: "16px",
    fontWeight: 800,
    color: "#F0EAFF",
    letterSpacing: "-0.01em",
  },
  brandSub: {
    fontSize: "12px",
    color: "#7A7090",
    marginTop: "1px",
  },
  footerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
  },
  pillRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    background: "rgba(75,45,142,0.18)",
    border: "1px solid rgba(75,45,142,0.30)",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#A78BFA",
    fontWeight: 500,
  },
  copy: {
    fontSize: "12px",
    color: "#7A7090",
  },
};
