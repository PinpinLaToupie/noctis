import { useEffect, useRef } from 'react'

const TECH = [
  { name: 'React Native', sub: 'Framework mobile', color: '#61DAFB' },
  { name: 'Expo SDK 53', sub: 'Build & runtime', color: '#fff' },
  { name: 'TweetNaCl', sub: 'Chiffrement NaCl', color: '#A78BFA' },
  { name: 'expo-secure-store', sub: 'Stockage clés', color: '#7B5DCC' },
  { name: 'WebSocket (ws)', sub: 'Transport relay', color: '#A78BFA' },
  { name: 'FCM', sub: 'Push notifications', color: '#FCBA03' },
  { name: 'Node.js', sub: 'Serveur relay', color: '#6DA55F' },
  { name: 'Railway', sub: 'Hébergement', color: '#B044F7' },
  { name: 'EAS Build', sub: 'Build APK local', color: '#4B5CFF' },
]

export default function TechStack() {
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
      <div className="divider" />
      <div className="section">
        <div className="fade-up" style={{ marginBottom: '52px' }}>
          <span className="section-label">Stack technique</span>
          <h2 className="section-title">Construit avec<br />les bons outils.</h2>
          <p className="section-sub">
            Des technologies éprouvées, auditables, et open-source au cœur de chaque couche.
          </p>
        </div>

        <div style={styles.grid}>
          {TECH.map(({ name, sub, color }) => (
            <div key={name} className="fade-up glass-card" style={styles.badge}>
              <div style={{ ...styles.dot, background: color, boxShadow: `0 0 8px ${color}66` }} />
              <div>
                <div style={styles.name}>{name}</div>
                <div style={styles.sub}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Audit note */}
        <div className="fade-up" style={styles.auditNote}>
          <span style={styles.auditIcon}>🔍</span>
          <p style={styles.auditText}>
            TweetNaCl est une implémentation NaCl minimaliste, auditée et largement utilisée.
            Le code de chiffrement de Noctis est lisible et vérifiable — pas de boîte noire.
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
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '32px',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 20px',
    borderRadius: '12px',
    minWidth: '200px',
    flex: '1 1 200px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  name: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#F0EAFF',
    lineHeight: 1.3,
  },
  sub: {
    fontSize: '12px',
    color: '#7A7090',
    marginTop: '2px',
  },
  auditNote: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    padding: '20px 24px',
    background: 'rgba(75,45,142,0.1)',
    border: '1px solid rgba(75,45,142,0.25)',
    borderRadius: '12px',
  },
  auditIcon: {
    fontSize: '18px',
    flexShrink: 0,
  },
  auditText: {
    fontSize: '14px',
    color: '#7A7090',
    lineHeight: 1.65,
  },
}
