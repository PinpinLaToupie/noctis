import { useEffect, useRef } from 'react'
import { KeyRound, QrCode, MessageSquareLock } from 'lucide-react'

const STEPS = [
  {
    icon: KeyRound,
    num: '01',
    title: 'Générez vos clés',
    desc: "À l'installation, l'app génère une paire de clés asymétriques curve25519 directement sur votre appareil. La clé privée ne quitte jamais le keychain chiffré.",
  },
  {
    icon: QrCode,
    num: '02',
    title: 'Échangez vos QR codes',
    desc: "Chaque contact s'ajoute par scan de QR code. Vous partagez uniquement votre clé publique — aucune information personnelle, aucun numéro de téléphone.",
  },
  {
    icon: MessageSquareLock,
    num: '03',
    title: 'Discutez en sécurité',
    desc: "Chaque message est chiffré avec la clé publique du destinataire avant de quitter l'appareil. Le serveur relay ne voit qu'un flux opaque. Même compromis, il est inutile.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els?.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} style={styles.wrapper}>
      {/* Background glow */}
      <div style={styles.bgGlow} aria-hidden="true" />

      <div className="divider" />
      <div className="section">
        <div className="fade-up" style={{ marginBottom: '60px' }}>
          <span className="section-label">Comment ça marche</span>
          <h2 className="section-title">Trois étapes,<br />aucun secret exposé.</h2>
          <p className="section-sub">
            Le protocole est simple. La cryptographie derrière l'est beaucoup moins — et c'est exactement le point.
          </p>
        </div>

        <div style={styles.stepsRow}>
          {STEPS.map(({ icon: Icon, num, title, desc }, i) => (
            <div key={num} style={styles.stepWrapper}>
              {/* Connector line (between steps) */}
              {i < STEPS.length - 1 && (
                <div style={styles.connector} aria-hidden="true" />
              )}

              <div className="fade-up glass-card" style={styles.card}>
                <div style={styles.numRow}>
                  <span style={styles.num}>{num}</span>
                  <div style={styles.iconWrap}>
                    <Icon size={20} color="#A78BFA" />
                  </div>
                </div>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.desc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security note */}
        <div className="fade-up" style={styles.note}>
          <div style={styles.noteDot} />
          <p style={styles.noteText}>
            Le serveur relay Node.js hébergé sur Railway stocke les messages
            <strong style={{ color: '#A78BFA' }}> uniquement</strong> le temps que le destinataire se reconnecte — puis les supprime.
          </p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  wrapper: {
    position: 'relative',
    zIndex: 1,
  },
  bgGlow: {
    position: 'absolute',
    left: '-20%',
    top: '20%',
    width: '600px',
    height: '500px',
    background: 'radial-gradient(ellipse at center, rgba(75,45,142,0.15) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  stepsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    position: 'relative',
    marginBottom: '32px',
  },
  stepWrapper: {
    position: 'relative',
  },
  connector: {
    display: 'none', // hidden on mobile, shown via media query would need CSS
  },
  card: {
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    height: '100%',
  },
  numRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4px',
  },
  num: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: 'rgba(167,139,250,0.45)',
  },
  iconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'rgba(167,139,250,0.1)',
    border: '1px solid rgba(167,139,250,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#F0EAFF',
  },
  desc: {
    fontSize: '14px',
    color: '#7A7090',
    lineHeight: 1.7,
  },
  note: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    padding: '20px 24px',
    background: 'rgba(75,45,142,0.1)',
    border: '1px solid rgba(75,45,142,0.25)',
    borderRadius: '12px',
    marginTop: '16px',
  },
  noteDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#A78BFA',
    flexShrink: 0,
    marginTop: '5px',
  },
  noteText: {
    fontSize: '14px',
    color: '#7A7090',
    lineHeight: 1.65,
  },
}
