# Sapthagiri NPS University // Zero-Gravity Student Credentials & Telemetry Registry

A state-of-the-art, high-fidelity student registration portal and administrative telemetry control center. Engineered with a premium **"Antigravity" Glassmorphic Zero-Gravity theme** (featuring drifting star fields, weightless floating controls, bio-scanner laser sweeps, and dynamic success confetti), this portal is fully integrated with a cloud-connected **Firebase Firestore** backend.

---

## 🌟 Key Features

### 1. Zero-Gravity Registration Form (`index.html`)
* **Futuristic UI/UX**: Ultra-thin glassmorphic card container with depth ambient nebula backdrops, slow drifting space particles, and smooth responsive hover physics.
* **Weightless Input Controls**: Fields levitate slightly upward on focus with glowing custom gold and cyan focus bounds.
* **Futuristic Profile Uploader**: Drag-and-drop passport photograph parser featuring an active scanner laser sweep and real-time circular preview.
* **Dynamic Validation**: Real-time constraint checking with glowing neon-pink error balloons that execute a mechanical shake animation on failure.
* **Launch Sequence**: Valid submissions trigger a physical launch sequence: the submit button rockets upwards, the card detaches and floats away, weightless iridescent confetti fills the screen, and a holographic Travel & Admissions pass slides into view.

### 2. Decoupled Firebase API Architecture (`firebase-config.js`)
* **Modular Clean Code**: The Firebase SDK credentials, Firestore references (`db`), and online readiness indicators are fully decoupled into an independent configuration file.
* **Global Accessibility**: Loads seamlessly across all routes (`index.html`, `login.html`, `dashboard.html`).

### 3. Dual-Role Portal Gateway (`login.html`)
* **Student Access Portal**: Students log in securely using their registered **Email & SRN**. Firestore executes a real-time record check. If matched, it unlocks their Holographic admissions pass.
* **Administrator Access**: Secure login pathway for administrators to access the centralized records database.
* **Interactive Switcher**: Sliding gold/cyan pill toggle switcher with custom entrance slide animations.

### 4. Admin Telemetry Control Center (`dashboard.html`)
* **Stats Counter Panel**: Large, glowing golden display presenting a live counter of all registered documents in the Firestore collection.
* **Cyber records Grid**: Beautiful glassmorphic table listing student enrollments chronologically (newest first).
* **Instant Filter Engine**: High-performance, zero-latency search bar filtering rows in real-time by Name, SRN, Course, or Email.
* **Pass Inspector**: Open and inspect the official student pass of any row directly in a pop-up modal. Admins can view or download passes on behalf of any student.
* **Session Route Guard**: Automatically checks and blocks unauthorized direct URL page hits, redirecting intruders to `login.html`.

### 5. High-Definition Borderless PDF Passes
* **Perfect Dynamic Sizing**: Programmatically measures card dimensions after collapsing action buttons (`display: none`).
* **Borderless Output**: Maps pixel measurements to points (`1 px = 0.75 pt`) and passes them to `jsPDF: { format: [width, height] }` with `margin: 0`, completely removing A4 margins for a perfect borderless card.
* **3x Scale Crispness**: Exports cards at 3x DPI for crystal-clear text, barcode, and logo print resolution.

---

## 📂 File Directory

```bash
├── index.html            # Academic Registration Form Portal
├── login.html            # Student & Admin Portal Gatekeeper
├── dashboard.html        # Admin Telemetry Grid Control Center
├── firebase-config.js    # Decoupled Firebase configuration and DB initialization
├── logo.png              # Official University Seal Emblem
└── .gitignore            # Git exclusion guidelines
```

---

## 🛠️ Getting Started

### 1. Prerequisites
Ensure you have a modern web browser and a local server environment (e.g. Python, Node.js).

### 2. Configure Firebase Database
Open `firebase-config.js` and insert your active Firestore Web SDK credentials:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
```

### 3. Run Locally
Start a lightweight local server from your project directory to allow correct CORS image rendering and routing:

**Using Python:**
```bash
python -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

**Using Node.js (npx serve):**
```bash
npx serve .
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔑 Master Credentials
* **Administrator Portal Email**: `admin@sapthagiri.edu.in`
* **Administrator Portal Password**: `admin2025`

---

## 📐 Technologies Used
* **Frontend**: HTML5, Vanilla CSS3 (Custom Grid, Flex, Perspective, CSS Variables)
* **Logic**: Vanilla Javascript (ES6+, DOM Traversal, Bounding Boxes, LocalStorage)
* **SDKs & CDNs**: Firebase Firestore Web Client (v8 Compat), Lucide Icons, html2pdf.js (html2canvas & jsPDF)
