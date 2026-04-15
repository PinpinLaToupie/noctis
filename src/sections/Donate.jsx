import { useState, useEffect, useRef } from "react";
import { Bitcoin, Coins, Copy, Check, Heart } from "lucide-react";

const XMR_ADDRESS =
  "49QcGTvb8QKfBqTfprfZRBXiQSw2RoayHgBPZzDw3dvgR3Q82fAiM4K64C4qf5BzKq4kRCyFzTD6tFAZsxJVb69vRWMT88h";
const BTC_ADDRESS = "bc1qnn3qjwte4qxh8wq4kfcqw0y98rhlz6tcczrv52";

function CryptoCard({ icon: Icon, name, ticker, accentColor, address, delay }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="glass-card fade-up"
      style={{ ...styles.card, transitionDelay: delay }}
    >
      {/* En-tête */}
      <div style={styles.cardHeader}>
        <div style={{ ...styles.iconBox, background: accentColor + "18", border: `1px solid ${accentColor}30` }}>
          <Icon size={20} color={accentColor} />
        </div>
        <div>
          <div style={styles.cryptoName}>{name}</div>
          <div style={styles.cryptoTicker}>{ticker}</div>
        </div>
      </div>

      {/* Adresse */}
      <div style={styles.addressBox}>
        <span style={styles.addressText}>{address}</span>
      </div>

      {/* Bouton copier */}
      <button
        onClick={handleCopy}
        style={{
          ...styles.copyBtn,
          ...(copied ? styles.copyBtnCopied : {}),
        }}
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
        {copied ? "Copié !" : "Copier l'adresse"}
      </button>
    </div>
  );
}

export default function Donate() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="divider" />
      <div className="section">
        {/* Label */}
        <div className="fade-up" style={{ marginBottom: "48px" }}>
          <span className="section-label">
            <Heart size={11} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
            Open Source
          </span>
          <h2 className="section-title">Soutenir Noctis</h2>
          <p className="section-sub">
            Noctis est gratuit et open-source. Si l'app t'a été utile, un don en crypto
            aide à garder le projet vivant et indépendant.
          </p>
        </div>

        {/* Cards */}
        <div style={styles.grid}>
          <CryptoCard
            icon={Coins}
            name="Monero"
            ticker="XMR"
            accentColor="#FF6600"
            address={XMR_ADDRESS}
            delay="0.08s"
          />
          <CryptoCard
            icon={Bitcoin}
            name="Bitcoin"
            ticker="BTC"
            accentColor="#F7931A"
            address={BTC_ADDRESS}
            delay="0.16s"
          />
        </div>

        {/* Note discrète */}
        <p className="fade-up" style={styles.note}>
          Aucun tracking, aucun formulaire, aucun intermédiaire.
        </p>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "24px",
  },

  card: {
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  iconBox: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  cryptoName: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#F0EAFF",
    lineHeight: 1.2,
  },

  cryptoTicker: {
    fontSize: "12px",
    color: "#7A7090",
    marginTop: "2px",
  },

  addressBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(75,45,142,0.25)",
    borderRadius: "10px",
    padding: "12px 14px",
    overflow: "hidden",
  },

  addressText: {
    fontSize: "12px",
    fontFamily: "'Courier New', Courier, monospace",
    color: "#A78BFA",
    wordBreak: "break-all",
    lineHeight: 1.6,
    letterSpacing: "0.02em",
  },

  copyBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 18px",
    background: "rgba(75,45,142,0.15)",
    border: "1px solid rgba(75,45,142,0.35)",
    borderRadius: "10px",
    color: "#A78BFA",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "'Inter', system-ui, sans-serif",
    cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s, color 0.2s",
    alignSelf: "flex-start",
  },

  copyBtnCopied: {
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#22c55e",
  },

  note: {
    fontSize: "13px",
    color: "#7A7090",
    textAlign: "center",
    marginTop: "8px",
  },
};
