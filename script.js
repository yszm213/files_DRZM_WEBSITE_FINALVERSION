// ===========================================
// CALCULATEUR IMC
// ===========================================
function calculerIMC() {
    let poids = document.getElementById('poids').value;
    let taille = document.getElementById('taille').value;
    const zone = document.getElementById('resultat-imc');

    // Accepter la virgule comme séparateur décimal
    taille = String(taille).replace(',', '.');

    if (!poids || !taille) {
        zone.style.display = 'block';
        zone.innerHTML = '⚠️ Veuillez renseigner votre poids et votre taille.';
        zone.style.backgroundColor = 'rgba(239,68,68,0.25)';
        zone.style.color = '#fca5a5';
        return;
    }

    poids = parseFloat(poids);
    taille = parseFloat(taille);
    const imc = (poids / (taille * taille)).toFixed(1);

    let msg, bg, color;

    if (imc < 18.5) {
        msg   = `Votre IMC est de <strong>${imc}</strong>.<br>Vous êtes en situation de <strong>sous-poids</strong>.`;
        bg    = 'rgba(251,191,36,0.2)';
        color = '#fbbf24';
    } else if (imc <= 24.9) {
        msg   = `Votre IMC est de <strong>${imc}</strong>.<br>Vous avez une <strong>corpulence normale</strong>. Continuez à prendre soin de votre cœur !`;
        bg    = 'rgba(16,196,130,0.2)';
        color = '#34d399';
    } else if (imc <= 29.9) {
        msg   = `Votre IMC est de <strong>${imc}</strong>.<br>Vous êtes en <strong>surpoids</strong>. Une activité physique régulière est recommandée.`;
        bg    = 'rgba(251,191,36,0.2)';
        color = '#fbbf24';
    } else {
        msg   = `Votre IMC est de <strong>${imc}</strong>.<br>Vous êtes en situation d'<strong>obésité</strong>. Un suivi médical régulier est fortement conseillé.`;
        bg    = 'rgba(239,68,68,0.2)';
        color = '#fca5a5';
    }

    zone.style.display          = 'block';
    zone.innerHTML              = msg;
    zone.style.backgroundColor  = bg;
    zone.style.color            = color;
}

// ===========================================
// JOUR ACTUEL DANS LE TABLEAU DES HORAIRES
// ===========================================
document.addEventListener('DOMContentLoaded', function () {
    const tableau = document.getElementById('tableau-horaires');
    if (!tableau) return;

    const jourActuel = new Date().getDay();
    tableau.querySelectorAll('tr').forEach(ligne => {
        if (parseInt(ligne.getAttribute('data-jour')) === jourActuel) {
            ligne.classList.add('jour-actuel');
            const cell = ligne.querySelector('.jour');
            if (cell) cell.innerHTML += " <span style='color:#e53e3e;font-size:.8em;margin-left:4px;'>(Aujourd'hui)</span>";
        }
    });
});

// ===========================================
// BOUTON RETOUR EN HAUT
// ===========================================
window.addEventListener('scroll', function () {
    const btn = document.getElementById('btn-retour-haut');
    if (!btn) return;
    btn.style.display = (window.scrollY > 200) ? 'flex' : 'none';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
});

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn-retour-haut');
    if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

// ===========================================
// MODE SOMBRE
// ===========================================
document.addEventListener('DOMContentLoaded', function () {
    const btnTheme  = document.getElementById('btn-theme');
    const iconTheme = document.getElementById('icon-theme');

    // Restaurer le thème sauvegardé
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (iconTheme) { iconTheme.classList.replace('fa-moon', 'fa-sun'); }
    }

    if (!btnTheme) return;

    btnTheme.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (iconTheme) {
            iconTheme.classList.toggle('fa-moon', !isDark);
            iconTheme.classList.toggle('fa-sun', isDark);
        }
    });
});

// ===========================================
// ACCORDÉON FAQ
// ===========================================
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.accordion-item').forEach(item => {
        const btn = item.querySelector('.accordion-bouton');
        if (!btn) return;
        btn.addEventListener('click', () => {
            // Fermer les autres
            document.querySelectorAll('.accordion-item').forEach(other => {
                if (other !== item) other.classList.remove('actif');
            });
            item.classList.toggle('actif');
        });
    });
});

// ===========================================
// LOADER — affichage minimum garanti
// ===========================================
const LOADER_DEBUT = Date.now();
const LOADER_MIN_MS = 700; // durée minimale d'affichage en ms

function masquerLoader() {
    const loader = document.getElementById('loader');
    if (!loader || loader.classList.contains('loader-hidden')) return;

    const ecoule = Date.now() - LOADER_DEBUT;
    const attente = Math.max(0, LOADER_MIN_MS - ecoule);

    setTimeout(() => {
        loader.classList.add('loader-hidden');
        setTimeout(() => { if (loader) loader.style.display = 'none'; }, 600);
    }, attente);
}

document.addEventListener('DOMContentLoaded', masquerLoader);
setTimeout(masquerLoader, LOADER_MIN_MS + 1000); // sécurité absolue

// ===========================================
// TÉLÉCHARGEMENT V-CARD
// ===========================================
function telechargerVCard() {
    const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:Dr Safi Med ZMOULI\n" +
        "ORG:Cabinet de Cardiologie Zmouli\n" +
        "TEL;TYPE=WORK,VOICE:0240822757\n" +
        "ADR;TYPE=WORK,PREF:;;23 Boulevard de Linz;Pornic;;44210;France\n" +
        "URL:https://www.maiia.com/cardiologue/44210-pornic/zmouli-safi-med\n" +
        "END:VCARD";

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'Dr_Safi_Med_ZMOULI.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===========================================
// TEST FRÉQUENCE CARDIAQUE
// ===========================================
let timer, countdown;
let battements = 0, tempsRestant = 60, enCours = false;

function demarrerTest() {
    if (enCours) return;
    enCours = true;
    battements = 0;
    tempsRestant = 60;

    const status    = document.getElementById('status-text');
    const timerDisp = document.getElementById('timer-display');
    const startBtn  = document.getElementById('start-pulse-btn');
    const tapBtn    = document.getElementById('tap-pulse-btn');
    const countDisp = document.getElementById('heartbeat-count');

    startBtn.style.display = 'none';
    countDisp.innerText    = '0';

    let prep = 3;
    status.innerText    = 'Préparez-vous…';
    timerDisp.innerText = prep;

    countdown = setInterval(() => {
        prep--;
        if (prep > 0) {
            timerDisp.innerText = prep;
        } else {
            clearInterval(countdown);
            lancerMesure();
        }
    }, 1000);

    function lancerMesure() {
        status.innerText    = 'TAPEZ À CHAQUE BATTEMENT !';
        timerDisp.innerText = tempsRestant;
        tapBtn.style.display = 'inline-block';

        timer = setInterval(() => {
            tempsRestant--;
            timerDisp.innerText = tempsRestant;
            if (tempsRestant <= 0) terminerTest();
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const tapBtn = document.getElementById('tap-pulse-btn');
    if (!tapBtn) return;
    tapBtn.addEventListener('click', function () {
        battements++;
        document.getElementById('heartbeat-count').innerText = battements;
        const circle = document.querySelector('.timer-circle');
        if (circle) {
            circle.classList.remove('timer-pulse-active');
            void circle.offsetWidth; // Force reflow
            circle.classList.add('timer-pulse-active');
        }
    });
});

function terminerTest() {
    clearInterval(timer);
    enCours = false;
    document.getElementById('status-text').innerText     = 'Test terminé !';
    document.getElementById('tap-pulse-btn').style.display  = 'none';
    const startBtn = document.getElementById('start-pulse-btn');
    startBtn.style.display   = 'inline-block';
    startBtn.innerText       = 'Relancer le test';
    alert(`Votre fréquence cardiaque est de : ${battements} BPM`);
}

function resetTest() {
    clearInterval(timer);
    clearInterval(countdown);
    enCours      = false;
    battements   = 0;
    tempsRestant = 60;
    const s = (id) => document.getElementById(id);
    if (s('status-text'))     s('status-text').innerText    = 'Prêt pour le test ?';
    if (s('timer-display'))   s('timer-display').innerText  = '60';
    if (s('heartbeat-count')) s('heartbeat-count').innerText = '0';
    if (s('tap-pulse-btn'))   s('tap-pulse-btn').style.display  = 'none';
    if (s('start-pulse-btn')) s('start-pulse-btn').style.display = 'inline-block';
}

// ===========================================
// FILTRE GLOSSAIRE
// ===========================================
function filtrerGlossaire() {
    const q      = document.getElementById('search-glossaire').value.toLowerCase();
    const cards  = document.querySelectorAll('.term-card');
    const noRes  = document.getElementById('no-results');
    let found    = false;

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const text  = card.querySelector('p').innerText.toLowerCase();
        const match = title.includes(q) || text.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) found = true;
    });

    if (noRes) noRes.style.display = found ? 'none' : 'block';
}
