// =============================================
// CYBERTHREAT - ADVANCED JAVASCRIPT
// Educational Malware History Website
// =============================================

"use strict";

// =============================================
// 1. WEBSITE INITIALIZATION
// =============================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("%c CYBERTHREAT SYSTEM ONLINE", 
        "color:#00ff9d;font-size:20px;font-weight:bold");

    console.log("Loading cybersecurity database...");

    initializeSearch();
    initializeVirusCards();
    initializeTerminal();
    initializeScrollAnimations();
    initializeStatistics();
    initializeNavigation();
    initializeBackToTop();
    initializeThreatInformation();
    initializeKeyboardShortcuts();

    console.log("All systems initialized successfully.");
});


// =============================================
// 2. MALWARE DATABASE
// =============================================

const malwareDatabase = {

    ILOVEYOU: {
        name: "ILOVEYOU",
        year: 2000,
        type: "Email Worm",
        origin: "Philippines",
        spread: "Email attachments",
        impact: "Millions of computers affected",
        description:
            "ILOVEYOU spread through email messages disguised as love letters. It overwrote files and automatically sent copies of itself to contacts.",
        protection:
            "Avoid unexpected email attachments and keep security software updated."
    },

    WannaCry: {
        name: "WannaCry",
        year: 2017,
        type: "Ransomware Worm",
        origin: "Unknown",
        spread: "Windows SMB vulnerability",
        impact: "More than 300,000 computers affected",
        description:
            "WannaCry encrypted files and demanded ransom payments. It disrupted hospitals, companies, and government organizations.",
        protection:
            "Install security patches, maintain backups, and disable unnecessary network services."
    },

    Mydoom: {
        name: "Mydoom",
        year: 2004,
        type: "Email Worm",
        origin: "Unknown",
        spread: "Email attachments",
        impact: "Massive worldwide email disruption",
        description:
            "Mydoom became one of the fastest-spreading email worms in history.",
        protection:
            "Use email filtering and avoid suspicious attachments."
    },

    Conficker: {
        name: "Conficker",
        year: 2008,
        type: "Network Worm",
        origin: "Unknown",
        spread: "Windows network vulnerabilities",
        impact: "Millions of infected computers",
        description:
            "Conficker spread through vulnerable Windows systems and created a large botnet.",
        protection:
            "Keep Windows patched and restrict unnecessary network access."
    },

    Stuxnet: {
        name: "Stuxnet",
        year: 2010,
        type: "Industrial Worm",
        origin: "Widely attributed to a state-sponsored operation",
        spread: "Multiple infection methods",
        impact: "Industrial equipment disruption",
        description:
            "Stuxnet targeted industrial control systems and demonstrated how malware could cause physical damage.",
        protection:
            "Use network segmentation, software updates, and industrial security monitoring."
    },

    NotPetya: {
        name: "NotPetya",
        year: 2017,
        type: "Destructive Malware",
        origin: "Widely attributed to Russian military intelligence",
        spread: "Compromised software updates and network propagation",
        impact: "Billions of dollars in damages",
        description:
            "NotPetya was destructive malware disguised as ransomware. It caused major international disruptions.",
        protection:
            "Maintain isolated backups, secure software supply chains, and apply security patches."
    },

    Melissa: {
        name: "Melissa",
        year: 1999,
        type: "Macro Virus",
        origin: "United States",
        spread: "Microsoft Word documents",
        impact: "Major email system disruptions",
        description:
            "Melissa infected Microsoft Word documents and spread through Microsoft Outlook.",
        protection:
            "Disable unnecessary macros and avoid untrusted documents."
    },

    CryptoLocker: {
        name: "CryptoLocker",
        year: 2013,
        type: "Ransomware",
        origin: "Unknown",
        spread: "Malicious attachments and botnet delivery",
        impact: "Large-scale file encryption",
        description:
            "CryptoLocker encrypted victims' files and demanded payment for decryption.",
        protection:
            "Maintain offline backups and avoid suspicious downloads."
    }

};


// =============================================
// 3. LIVE SEARCH SYSTEM
// =============================================

function initializeSearch() {

    const searchInput = document.getElementById("virusSearch");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {

        const searchValue = searchInput.value
            .toLowerCase()
            .trim();

        const cards = document.querySelectorAll(".virus-card");

        let visibleCount = 0;

        cards.forEach(card => {

            const cardText = card.textContent.toLowerCase();

            const matches = cardText.includes(searchValue);

            card.style.display = matches ? "block" : "none";

            if (matches) {
                visibleCount++;
            }

        });

        updateSearchResults(visibleCount);

    });

}

function updateSearchResults(count) {

    let results = document.getElementById("searchResults");

    if (!results) {

        results = document.createElement("p");

        results.id = "searchResults";

        results.style.color = "#00ff9d";
        results.style.textAlign = "center";
        results.style.marginBottom = "30px";

        const grid = document.getElementById("virusGrid");

        if (!grid) return;

        grid.parentNode.insertBefore(results, grid);

    }

    results.textContent = `${count} malware records found`;

}


// =============================================
// 4. INTERACTIVE VIRUS CARDS
// =============================================

function initializeVirusCards() {

    const cards = document.querySelectorAll(".virus-card");

    cards.forEach(card => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {

            const title = card.querySelector("h3");

            if (!title) return;

            const malwareName = title.textContent.trim();

            showMalwareDetails(malwareName);

        });

    });

}

function showMalwareDetails(name) {

    const malware = Object.values(malwareDatabase)
        .find(item => item.name.toLowerCase() === name.toLowerCase());

    if (!malware) return;

    const existingModal = document.getElementById("malwareModal");

    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement("div");

    modal.id = "malwareModal";

    Object.assign(modal.style, {
        position: "fixed",
        inset: "0",
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999",
        padding: "20px"
    });

    const content = document.createElement("div");

    Object.assign(content.style, {
        background: "#101a29",
        border: "1px solid #00ff9d",
        borderRadius: "12px",
        padding: "35px",
        maxWidth: "600px",
        width: "100%",
        maxHeight: "85vh",
        overflowY: "auto",
        color: "white",
        boxShadow: "0 0 40px #00ff9d33"
    });

    content.innerHTML = `
        <h2 style="color:#00ff9d;margin-bottom:20px;">
            ${malware.name}
        </h2>

        <p><strong>Year:</strong> ${malware.year}</p>
        <br>

        <p><strong>Type:</strong> ${malware.type}</p>
        <br>

        <p><strong>Origin:</strong> ${malware.origin}</p>
        <br>

        <p><strong>Spread:</strong> ${malware.spread}</p>
        <br>

        <p><strong>Impact:</strong> ${malware.impact}</p>
        <br>

        <h3 style="color:#00ff9d;">Description</h3>
        <p style="line-height:1.8;margin-top:10px;">
            ${malware.description}
        </p>

        <br>

        <h3 style="color:#00ff9d;">Protection</h3>
        <p style="line-height:1.8;margin-top:10px;">
            ${malware.protection}
        </p>

        <br>

        <button id="closeMalwareModal" style="
            background:#00ff9d;
            color:black;
            border:none;
            padding:12px 25px;
            border-radius:5px;
            cursor:pointer;
            font-weight:bold;
        ">
            CLOSE
        </button>
    `;

    modal.appendChild(content);

    document.body.appendChild(modal);

    document.getElementById("closeMalwareModal")
        .addEventListener("click", () => modal.remove());

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            modal.remove();
        }

    });

}


// =============================================
// 5. ANIMATED CYBERSECURITY TERMINAL
// =============================================

function initializeTerminal() {

    const terminal = document.getElementById("terminalOutput");

    if (!terminal) return;

    terminal.innerHTML = "";

    const messages = [

        "[BOOT] CyberThreat Analysis System",

        "[BOOT] Initializing historical database...",

        "[OK] Database connection established.",

        "[SYSTEM] Loading malware signatures...",

        "[OK] ILOVEYOU record loaded.",

        "[OK] Mydoom record loaded.",

        "[OK] Conficker record loaded.",

        "[OK] Stuxnet record loaded.",

        "[OK] WannaCry record loaded.",

        "[OK] NotPetya record loaded.",

        "[SYSTEM] Analyzing historical incidents...",

        "[INFO] Ransomware attacks encrypt files.",

        "[INFO] Worms can spread between computers.",

        "[INFO] Macro viruses infect certain documents.",

        "[INFO] Industrial malware can affect physical systems.",

        "[SYSTEM] Analysis completed.",

        "[STATUS] Educational simulation only.",

        "[SECURITY] No real malware was executed.",

        "[READY] CyberThreat database online."

    ];

    let index = 0;

    function printMessage() {

        if (index >= messages.length) {

            const cursor = document.createElement("span");

            cursor.textContent = "█";

            cursor.className = "cursor";

            terminal.appendChild(cursor);

            return;
        }

        const line = document.createElement("div");

        line.textContent = messages[index];

        line.style.opacity = "0";

        terminal.appendChild(line);

        setTimeout(() => {
            line.style.opacity = "1";
            line.style.transition = "opacity 0.3s";
        }, 30);

        terminal.scrollTop = terminal.scrollHeight;

        index++;

        setTimeout(printMessage, 450);

    }

    printMessage();

}


// =============================================
// 6. SCROLL REVEAL ANIMATIONS
// =============================================

function initializeScrollAnimations() {

    const elements = document.querySelectorAll(
        ".virus-card, .timeline-item, .protection-card"
    );

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1
    });

    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

}


// =============================================
// 7. ANIMATED STATISTICS
// =============================================

function initializeStatistics() {

    const stats = document.querySelectorAll(".stat-box h2");

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.5
    });

    stats.forEach(stat => observer.observe(stat));

}

function animateCounter(element) {

    const originalText = element.textContent.trim();

    const match = originalText.match(/^([\d,.]+)(.*)$/);

    if (!match) return;

    const target = Number(match[1].replace(/,/g, ""));

    const suffix = match[2];

    if (!Number.isFinite(target)) return;

    const duration = 1500;

    const startTime = performance.now();

    function update(currentTime) {

        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const eased = 1 - Math.pow(1 - progress, 3);

        const value = Math.floor(target * eased);

        element.textContent =
            value.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = originalText;
        }

    }

    requestAnimationFrame(update);

}


// =============================================
// 8. NAVIGATION EFFECTS
// =============================================

function initializeNavigation() {

    const nav = document.querySelector("nav");

    if (!nav) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            nav.style.background = "rgba(5,10,20,0.98)";

            nav.style.boxShadow =
                "0 5px 30px rgba(0,255,157,0.1)";

        } else {

            nav.style.background = "rgba(5,10,20,0.95)";

            nav.style.boxShadow = "none";

        }

    });

}


// =============================================
// 9. BACK TO TOP BUTTON
// =============================================

function initializeBackToTop() {

    const button = document.createElement("button");

    button.textContent = "↑";

    button.title = "Back to top";
    button.setAttribute("aria-label", "Back to top");

    Object.assign(button.style, {

        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        background: "#00ff9d",
        color: "#000",
        border: "none",
        borderRadius: "50%",
        fontSize: "25px",
        fontWeight: "bold",
        cursor: "pointer",
        zIndex: "1000",
        display: "none",
        boxShadow: "0 0 20px #00ff9d55"

    });

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        button.style.display =
            window.scrollY > 500 ? "block" : "none";

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =============================================
// 10. CYBERSECURITY FACTS
// =============================================

const cybersecurityFacts = [

    "The Morris Worm appeared in 1988.",

    "ILOVEYOU spread through email attachments.",

    "WannaCry affected organizations in over 150 countries.",

    "Stuxnet targeted industrial control systems.",

    "NotPetya caused billions of dollars in damage.",

    "Conficker infected millions of Windows computers.",

    "Ransomware commonly encrypts victims' files.",

    "Security updates can prevent many malware infections.",

    "Offline backups can help organizations recover from ransomware.",

    "Not every type of malware is technically a computer virus."

];

function initializeThreatInformation() {

    const section = document.getElementById("protection");

    if (!section) return;

    const factBox = document.createElement("div");

    factBox.style.background = "#101a29";
    factBox.style.border = "1px solid #00ff9d";
    factBox.style.padding = "30px";
    factBox.style.borderRadius = "10px";
    factBox.style.marginTop = "50px";
    factBox.style.textAlign = "center";

    const title = document.createElement("h3");

    title.textContent = "CYBERSECURITY FACT";

    title.style.color = "#00ff9d";
    title.style.marginBottom = "15px";

    const factText = document.createElement("p");

    factText.id = "cyberFact";

    factText.style.color = "#aab5c5";
    factText.style.marginBottom = "20px";

    const button = document.createElement("button");

    button.textContent = "GENERATE NEW FACT";

    Object.assign(button.style, {
        background: "#00ff9d",
        color: "black",
        border: "none",
        padding: "12px 25px",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer"
    });

    function generateFact() {

        const randomIndex = Math.floor(
            Math.random() * cybersecurityFacts.length
        );

        factText.textContent =
            cybersecurityFacts[randomIndex];

    }

    button.addEventListener("click", generateFact);

    factBox.appendChild(title);
    factBox.appendChild(factText);
    factBox.appendChild(button);

    section.appendChild(factBox);

    generateFact();

}


// =============================================
// 11. KEYBOARD SHORTCUTS
// =============================================

function initializeKeyboardShortcuts() {

    document.addEventListener("keydown", event => {

        // ESC closes malware details

        if (event.key === "Escape") {

            const modal = document.getElementById("malwareModal");

            if (modal) {
                modal.remove();
            }

        }

        // CTRL + K opens search

        if (event.ctrlKey && event.key.toLowerCase() === "k") {

            const search = document.getElementById("virusSearch");

            if (search) {

                event.preventDefault();

                search.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                search.focus();

            }

        }

    });

}


// =============================================
// 12. MALWARE DATABASE FUNCTIONS
// =============================================

function getMalwareByYear(year) {

    return Object.values(malwareDatabase).filter(
        malware => malware.year === year
    );

}

function getMalwareByType(type) {

    return Object.values(malwareDatabase).filter(
        malware => malware.type.toLowerCase().includes(
            type.toLowerCase()
        )
    );

}

function getAllMalware() {

    return Object.values(malwareDatabase);

}

function getTotalMalwareCount() {

    return Object.keys(malwareDatabase).length;

}


// =============================================
// 13. DATABASE STATISTICS
// =============================================

function getDatabaseStatistics() {

    const malware = getAllMalware();

    const years = malware.map(item => item.year);

    const types = [...new Set(
        malware.map(item => item.type)
    )];

    return {

        totalMalware: malware.length,

        earliestYear: Math.min(...years),

        latestYear: Math.max(...years),

        malwareTypes: types.length

    };

}


// =============================================
// 14. EDUCATIONAL SYSTEM STATUS
// =============================================

function createSystemStatus() {

    const status = document.createElement("div");

    status.id = "systemStatus";

    Object.assign(status.style, {

        position: "fixed",
        bottom: "20px",
        left: "20px",
        background: "#101a29",
        border: "1px solid #00ff9d",
        color: "#00ff9d",
        padding: "12px 18px",
        borderRadius: "8px",
        fontSize: "12px",
        zIndex: "999",
        boxShadow: "0 0 20px #00ff9d22"

    });

    status.textContent = "● DATABASE ONLINE";

    document.body.appendChild(status);

}

document.addEventListener("DOMContentLoaded", createSystemStatus);


// =============================================
// 15. DISPLAY DATABASE INFORMATION
// =============================================

document.addEventListener("DOMContentLoaded", () => {

    const stats = getDatabaseStatistics();

    console.log("CyberThreat Database Statistics:");

    console.table(stats);

    console.log(
        "Loaded " + getTotalMalwareCount() + " malware records."
    );

});


// =============================================
// 16. PERFORMANCE MONITORING
// =============================================

window.addEventListener("load", () => {

    const loadTime = performance.now();

    console.log(
        "Website loaded in " +
        loadTime.toFixed(2) +
        " milliseconds."
    );

});


// =============================================
// 17. FINAL INITIALIZATION MESSAGE
// =============================================

console.log(
    "%c CYBERTHREAT JAVASCRIPT LOADED ",
    "background:#00ff9d;color:#000;padding:10px;font-size:16px;"
);

console.log(
    "Educational website only. No malware execution."
);