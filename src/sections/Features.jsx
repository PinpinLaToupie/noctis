import { useEffect, useRef } from 'react'
import { Lock, Key, Calculator, Mic, Users, Zap, QrCode, Bell, RefreshCw } from 'lucide-react'

const FEATURES = [
  {
    icon: Lock,
    title: 'Chiffrement E2E asymétrique',
    desc: 'NaCl/TweetNaCl — curve25519 + XSalsa20-Poly1305. Le serveur relay ne voit que du texte chiffré opaque.',
    color: '#A78BFA',
  },
  {
    icon: Key,
    title: 'Clés générées localement',
    desc: "La clé privée ne quitte jamais l'appareil. Stockée dans expo-secure-store, le keychain chiffré d'Android.",
    color: '#7B5DCC',
  },
  {
    icon: Calculator,
    title: 'Mode calculatrice',
    desc: "L'app se déguise en calculatrice. Un code secret l'ouvre, un code panique la verrouille immédiatement.",
    color: '#A78BFA',
  },
  {
    icon: Mic,
    title: 'Messages vocaux chiffrés',
    desc: "Enregistrement audio chiffré avant upload. Lecture directe dans le chat, comme n'importe quel audio.",
    color: '#7B5DCC',
  },
  {
    icon: Users,
    title: 'Multi-comptes & Groupes',
    desc: 'Plusieurs identités cryptographiques indépendantes sur un seul appareil. Conversations de groupe chiffrées.',
    color: '#A78BFA',
  },
  {
    icon: Zap,
    title: 'Effacement à distance',
    desc: "Un token secret permet de déclencher la suppression totale des données depuis n'importe où dans le monde.",
    color: '#7B5DCC',
  },
  {
    icon: QrCode,
    title: 'Contacts par QR code',
    desc: 'Échange de clés publiques par scan. Zéro information personnelle partagée, zéro compte requis.',
    color: '#A78BFA',
  },
  {
    icon: Bell,
    title: 'Notifications push FCM',
    desc: 'Notifications Android natives quand un message arrive, même app fermée ou en arrière-plan.',
    color: '#7B5DCC',
  },
  {
    icon: RefreshCw,
    title: 'Reconnexion automatique',
    desc: "Le client se reconnecte sans intervention. Messages en file d'attente livrés à la prochaine connexion.",
    color: '#A78BFA',
  },
]

export default function Features() {
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
        <div className="fade-up" style={{ marginBottom: '56px' }}>
          <span className="section-label">Fonctionnalités</span>
          <h2 className="section-title">Conçu pour la confidentialité,<br />pas pour le compromis.</h2>
          <p className="section-sub">
            Chaque décision de design part d'un principe : zéro confiance envers l'infrastructure.
          </p>
        </div>

        <div style={styles.grid}>
          {FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
            <div key={title} className="fade-up glass-card" style={styles.card}>
              <div style={{ ...styles.iconWrap, background: `${color}18`, border: `1px solid ${color}35` }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={styles.cardTitle}>{title}</h3>
              <p style={styles.cardDesc}>{desc}</p>
            </div>
          ))}
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
  },
  card: {
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  iconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#F0EAFF',
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: '14px',
    color: '#7A7090',
    lineHeight: 1.65,
  },
}
