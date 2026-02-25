# Noctis — Messagerie chiffrée de bout en bout

> Chiffrement de bout en bout. Zéro serveur. Zéro secret partagé.

Site vitrine officiel de l'application Android **Noctis**, une messagerie pensée pour la confidentialité absolue. Chaque message est chiffré avec la clé publique du destinataire avant même d'atteindre le serveur. Même en cas de compromission de l'infrastructure, vos conversations restent illisibles.

---

## Aperçu

- Chiffrement asymétrique bout en bout (clé publique / clé privée)
- Aucune donnée lisible côté serveur
- Zéro dépendance à un tiers de confiance
- Application Android native

---

## Stack technique

| Technologie | Usage |
|-------------|-------|
| React + Vite | Framework UI |
| Vercel | Hébergement & déploiement continu |
| GitHub Releases | Distribution de l'APK |

---

## Installation locale

```bash
# Cloner le repo
git clone https://github.com/PinpinLaToupie/noctis.git
cd noctis

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build
```

---

## Déploiement

Le site se déploie automatiquement sur **Vercel** à chaque push sur la branche `main`.

---

## Télécharger l'application

L'APK Android est disponible dans les [Releases GitHub](https://github.com/PinpinLaToupie/noctis/releases).

**Version actuelle :** v2.0 — 125 MB

---

## Configuration

Toutes les variables (URL de l'APK, version, taille) sont centralisées dans [`src/config.js`](src/config.js) :

```js
export const APK_URL = 'https://github.com/PinpinLaToupie/noctis/releases/download/v2.0/Noctis-v2.0.apk'
export const APP_VERSION = '2.0'
export const APK_SIZE = '125 MB'
```

Pour mettre à jour une release, modifier uniquement ce fichier.

---

## Structure du projet

```
noctis-web/
├── public/
│   └── assets/          # Logo, splash screen
├── src/
│   ├── sections/        # Hero, Features, HowItWorks, TechStack, Footer
│   ├── config.js        # Config centralisée (APK URL, version)
│   ├── App.jsx
│   └── index.css
├── index.html
└── vite.config.js
```

---

## Crédits

Conçu et développé par **[LamaDigital](https://lamadigital.fr)** — design, développement & stratégie digitale.

---

*Fait avec intention.*
