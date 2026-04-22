const DEFAULT_NAME = "Mitarbeitende";
const DEFAULT_ROLE = "Bauer Kompressoren Intranet";
const NAME_STORAGE_KEY = "bauer-intranet-user-name";
const FOCUS_STORAGE_KEY = "bauer-intranet-focus-posts";

const DEPARTMENTS = {
  technik: {
    name: "Technik",
    icon: "⚙️",
    bannerCopy: "Systeme, Infrastruktur und technischer Support an einem Ort.",
    description: "Die Kommunikationsseite der Technik buendelt Informationen zu Systemen, Infrastruktur, IT-Support und laufenden technischen Themen.",
    panelTitle: "Technische Informationen schnell teilen",
    panelCopy: "Stoerungen, Hinweise und neue technische Informationen koennen von hier direkt in den Fokus-Bereich gesendet werden.",
    highlights: [
      {
        title: "Systemstatus",
        text: "Wichtige Updates zu Infrastruktur, Tools und technischen Aenderungen fuer den Arbeitsalltag."
      },
      {
        title: "Supportkommunikation",
        text: "Teams koennen Hinweise, interne Serviceinformationen und Stoerungsupdates gebuendelt veroeffentlichen."
      },
      {
        title: "Dokumentation",
        text: "Leitfaeden, Prozesse und technische Hilfestellungen werden hier sichtbar und auffindbar gehalten."
      }
    ],
    topics: ["IT Support", "Infrastruktur", "Systeme", "Fernzugriff", "Betriebsstatus"]
  },
  sales: {
    name: "Sales",
    icon: "🤝",
    bannerCopy: "Vertrieb, Kundenkommunikation und Marktaktivitaeten gebuendelt.",
    description: "Die Sales-Kommunikationsseite dient als Einstieg fuer Vertrieb, Kundenkontakte, Aktionen und wichtige vertriebsrelevante Informationen.",
    panelTitle: "Meldungen aus dem Vertrieb sichtbar machen",
    panelCopy: "Aktionen, Marktupdates und interne Hinweise aus Sales landen von hier direkt im Fokus der Startseite.",
    highlights: [
      {
        title: "Vertriebsaktionen",
        text: "Teams informieren hier ueber Kampagnen, Kundeninitiativen und vertriebliche Schwerpunkte."
      },
      {
        title: "Marktkommunikation",
        text: "Wichtige Hinweise aus Vertrieb und Kundenkontakt werden nachvollziehbar gesammelt."
      },
      {
        title: "Austausch im Team",
        text: "Die Seite schafft einen einheitlichen Einstieg fuer Kommunikation und taegliche Vertriebsinformationen."
      }
    ],
    topics: ["Kunden", "Markt", "Leads", "Angebote", "Kampagnen"]
  },
  produktion: {
    name: "Produktion",
    icon: "🏭",
    bannerCopy: "Fertigung, Prozesse und operative Abstimmung zentral verfuegbar.",
    description: "Die Produktionsseite sammelt relevante Informationen zu Fertigung, Auslastung, Prozessen und operativen Hinweisen.",
    panelTitle: "Operative Hinweise strukturiert teilen",
    panelCopy: "Meldungen aus der Produktion koennen hier erstellt und sofort in den Fokus-Bereich uebernommen werden.",
    highlights: [
      {
        title: "Fertigungsstatus",
        text: "Aktuelle Hinweise zu Auslastung, Prioritaeten und Ablaufen koennen zentral erfasst werden."
      },
      {
        title: "Prozessupdates",
        text: "Aenderungen an Fertigungsprozessen und Abstimmungen werden transparent kommuniziert."
      },
      {
        title: "Koordination",
        text: "Die Seite unterstuetzt einen einheitlichen Kommunikationsweg fuer operative Themen."
      }
    ],
    topics: ["Fertigung", "Schichten", "Auslastung", "Ablauf", "Qualitaet"]
  },
  academy: {
    name: "Academy",
    icon: "🎓",
    bannerCopy: "Weiterbildung, Schulungen und Wissensentwicklung im Unternehmen.",
    description: "Auf der Academy-Seite werden Schulungen, Lerninhalte, Termine und interne Wissensangebote fuer Mitarbeitende gesammelt.",
    panelTitle: "Lernangebote im Intranet sichtbar machen",
    panelCopy: "Ankuendigungen zu Schulungen oder Lernformaten werden von hier direkt im Fokus-Bereich sichtbar.",
    highlights: [
      {
        title: "Weiterbildung",
        text: "Schulungen, Trainings und neue Lernangebote koennen strukturiert angekuendigt werden."
      },
      {
        title: "Wissensaustausch",
        text: "Teams erhalten einen klaren Einstieg zu Lernformaten, Inhalten und Wissensressourcen."
      },
      {
        title: "Interne Entwicklung",
        text: "Die Academy macht Entwicklungsangebote im Intranet leichter zugreifbar."
      }
    ],
    topics: ["Schulungen", "Trainings", "Wissen", "Lernpfade", "Entwicklung"]
  },
  sicherheit: {
    name: "Sicherheit",
    icon: "🛡️",
    bannerCopy: "Arbeitsschutz, Compliance und Sicherheitshinweise gesammelt an einem Ort.",
    description: "Die Kommunikationsseite Sicherheit ist der Einstieg fuer Arbeitsschutz, Compliance, Notfallhinweise und sicherheitsrelevante Kommunikation.",
    panelTitle: "Sicherheitsinformationen klar kommunizieren",
    panelCopy: "Wichtige Hinweise aus dem Bereich Sicherheit koennen direkt in den gemeinsamen Fokus-Feed uebernommen werden.",
    highlights: [
      {
        title: "Arbeitsschutz",
        text: "Relevante Informationen, Hinweise und Aenderungen fuer sichere Arbeitsablaeufe werden sichtbar gemacht."
      },
      {
        title: "Compliance",
        text: "Richtlinien und sensible Hinweise lassen sich einheitlich an Mitarbeitende kommunizieren."
      },
      {
        title: "Notfallthemen",
        text: "Sicherheitsnahe Meldungen koennen schnell zentral auf der Startseite auftauchen."
      }
    ],
    topics: ["Arbeitsschutz", "Compliance", "Notfall", "Richtlinien", "Praevention"]
  },
  marketing: {
    name: "Marketing",
    icon: "📣",
    bannerCopy: "Kampagnen, Kommunikation und Inhalte im Markenrahmen.",
    description: "Marketing nutzt diese Seite fuer interne Kommunikation zu Kampagnen, Inhalten, Markenthemen und Materialbereitstellung.",
    panelTitle: "Kommunikation aus Marketing zentral teilen",
    panelCopy: "Wichtige interne Marketingmeldungen werden von hier in den gemeinsamen Fokus-Bereich gespielt.",
    highlights: [
      {
        title: "Kampagnen",
        text: "Interne Hinweise zu Kampagnen, Inhalten und Material koennen schnell geteilt werden."
      },
      {
        title: "Branding",
        text: "Die Seite verknuepft Markenkommunikation und interne Informationsweitergabe."
      },
      {
        title: "Inhalte",
        text: "Mitarbeitende erhalten einen klaren Zugang zu Kommunikations- und Contentthemen."
      }
    ],
    topics: ["Marke", "Kampagnen", "Inhalte", "Vorlagen", "Kommunikation"]
  },
  "hr-geschaeftsfuehrung": {
    name: "HR & Geschaeftsfuehrung",
    icon: "👔",
    bannerCopy: "Personalthemen, Fuehrung und zentrale Unternehmensinformationen.",
    description: "Diese Seite verbindet Personalthemen mit Informationen der Geschaeftsfuehrung und schafft einen zentralen Einstieg fuer organisatorische Kommunikation.",
    panelTitle: "Zentrale Unternehmensinfos sichtbar machen",
    panelCopy: "Hinweise aus HR oder der Geschaeftsfuehrung werden von hier in den Fokus-Bereich uebernommen.",
    highlights: [
      {
        title: "Personalinformationen",
        text: "Wichtige Themen fuer Mitarbeitende koennen gebuendelt und uebersichtlich kommuniziert werden."
      },
      {
        title: "Fuehrungskommunikation",
        text: "Botschaften der Geschaeftsfuehrung erhalten einen klaren und sichtbaren Einstiegspunkt."
      },
      {
        title: "Richtlinien",
        text: "Unternehmensweite Hinweise und organisatorische Informationen werden leicht auffindbar."
      }
    ],
    topics: ["Personal", "Fuehrung", "Richtlinien", "Unternehmensinfos", "Organisation"]
  },
  betriebsrat: {
    name: "Betriebsrat",
    icon: "🗳️",
    bannerCopy: "Mitbestimmung, Ansprechpartner und Hinweise fuer Mitarbeitende.",
    description: "Die Kommunikationsseite des Betriebsrats bietet einen direkten Zugang zu Ansprechpartnern, Mitbestimmungsthemen und relevanten Hinweisen.",
    panelTitle: "Hinweise aus dem Betriebsrat an den Fokus senden",
    panelCopy: "Informationen und Mitteilungen des Betriebsrats koennen von hier direkt auf der Startseite erscheinen.",
    highlights: [
      {
        title: "Mitbestimmung",
        text: "Wichtige Themen des Betriebsrats werden transparent und nachvollziehbar kommuniziert."
      },
      {
        title: "Ansprechpartner",
        text: "Mitarbeitende finden einen klaren Zugang zu Informationen und Kontaktpunkten."
      },
      {
        title: "Hinweise",
        text: "Aktuelle Mitteilungen koennen gezielt im Fokus-Bereich sichtbar gemacht werden."
      }
    ],
    topics: ["Mitbestimmung", "Ansprechpartner", "Hinweise", "Mitarbeitende", "Austausch"]
  }
};

const DEFAULT_FOCUS_POSTS = [
  {
    id: "default-1",
    department: "technik",
    title: "VPN & Fernzugriff",
    content: "Neue Hinweise zum sicheren Fernzugriff stehen fuer alle Mitarbeitenden bereit.",
    author: "Technik",
    createdAt: "2026-04-22T08:15:00"
  },
  {
    id: "default-2",
    department: "hr-geschaeftsfuehrung",
    title: "Urlaubsplanung",
    content: "Die aktuellen Hinweise zur Urlaubsplanung sind jetzt im HR-Bereich verlinkt.",
    author: "HR & Geschaeftsfuehrung",
    createdAt: "2026-04-22T08:45:00"
  },
  {
    id: "default-3",
    department: "produktion",
    title: "Abstimmung in der Fertigung",
    content: "Wichtige operative Informationen zur aktuellen Auslastung wurden aktualisiert.",
    author: "Produktion",
    createdAt: "2026-04-22T09:00:00"
  }
];

function normalizeName(value) {
  return value.replace(/\s+/g, " ").trim();
}

function titleCaseName(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getNameFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const queryName = params.get("name");

  return queryName ? titleCaseName(normalizeName(queryName)) : "";
}

function updateProfile(name) {
  const nameEl = document.getElementById("current-user-name");
  const roleEl = document.getElementById("current-user-role");

  if (!nameEl || !roleEl) {
    return;
  }

  if (name) {
    nameEl.textContent = name;
    roleEl.textContent = DEFAULT_ROLE;
    return;
  }

  nameEl.textContent = DEFAULT_NAME;
  roleEl.textContent = DEFAULT_ROLE;
}

function requestName() {
  const entered = window.prompt("Wie lautet dein Name?");

  if (!entered) {
    updateProfile("");
    return "";
  }

  const normalized = titleCaseName(normalizeName(entered));

  if (!normalized) {
    updateProfile("");
    return "";
  }

  localStorage.setItem(NAME_STORAGE_KEY, normalized);
  updateProfile(normalized);
  return normalized;
}

function initProfile() {
  const queryName = getNameFromQuery();

  if (queryName) {
    localStorage.setItem(NAME_STORAGE_KEY, queryName);
    updateProfile(queryName);
    return queryName;
  }

  const savedName = localStorage.getItem(NAME_STORAGE_KEY);

  if (savedName) {
    updateProfile(savedName);
    return savedName;
  }

  return requestName();
}

function getCurrentUserName() {
  return localStorage.getItem(NAME_STORAGE_KEY) || DEFAULT_NAME;
}

function readFocusPosts() {
  const raw = localStorage.getItem(FOCUS_STORAGE_KEY);

  if (!raw) {
    return [...DEFAULT_FOCUS_POSTS];
  }

  try {
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return [...DEFAULT_FOCUS_POSTS];
    }

    return parsed;
  } catch (error) {
    return [...DEFAULT_FOCUS_POSTS];
  }
}

function writeFocusPosts(posts) {
  localStorage.setItem(FOCUS_STORAGE_KEY, JSON.stringify(posts));
}

function sortPostsByDate(posts) {
  return [...posts].sort((left, right) => {
    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
}

function formatPostDate(value) {
  const date = new Date(value);

  return date.toLocaleString("de-DE", {
    dateStyle: "short",
    timeStyle: "short"
  });
}

function renderFocusFeed() {
  const container = document.getElementById("focus-feed");
  const emptyState = document.getElementById("focus-empty");

  if (!container) {
    return;
  }

  const posts = sortPostsByDate(readFocusPosts()).slice(0, 8);

  if (posts.length === 0) {
    container.innerHTML = "";

    if (emptyState) {
      emptyState.hidden = false;
    }

    return;
  }

  if (emptyState) {
    emptyState.hidden = true;
  }

  container.innerHTML = posts.map((post) => {
    const department = DEPARTMENTS[post.department];
    const departmentName = department ? department.name : "Abteilung";
    const departmentIcon = department ? department.icon : "•";
    const author = post.author || departmentName;

    return `
      <article class="focus-item">
        <div class="focus-item-header">
          <span class="focus-badge">${departmentIcon} ${escapeHtml(departmentName)}</span>
          <span class="focus-meta">${escapeHtml(formatPostDate(post.createdAt))} · von ${escapeHtml(author)}</span>
        </div>
        <h4>${escapeHtml(post.title)}</h4>
        <p>${escapeHtml(post.content)}</p>
      </article>
    `;
  }).join("");
}

function setTextContent(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function renderDepartmentHighlights(items) {
  const container = document.getElementById("department-highlights");

  if (!container) {
    return;
  }

  container.innerHTML = items.map((item) => {
    return `
      <article class="info-card">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `;
  }).join("");
}

function renderDepartmentTopics(topics) {
  const container = document.getElementById("department-topics");

  if (!container) {
    return;
  }

  container.innerHTML = topics.map((topic) => {
    return `<span class="topic-chip">${escapeHtml(topic)}</span>`;
  }).join("");
}

function getDepartmentKeyFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("dept");

  if (key && DEPARTMENTS[key]) {
    return key;
  }

  return "technik";
}

function saveDepartmentMessage(departmentKey, title, content) {
  const posts = sortPostsByDate(readFocusPosts());
  const department = DEPARTMENTS[departmentKey];
  const author = getCurrentUserName() || department.name;

  posts.unshift({
    id: `${departmentKey}-${Date.now()}`,
    department: departmentKey,
    title,
    content,
    author,
    createdAt: new Date().toISOString()
  });

  writeFocusPosts(posts.slice(0, 30));
}

function initDepartmentPage() {
  if (document.body.dataset.page !== "department") {
    return;
  }

  const departmentKey = getDepartmentKeyFromQuery();
  const department = DEPARTMENTS[departmentKey];

  document.title = `${department.name} | Bauer Kompressoren Intranet`;

  setTextContent("department-banner-title", `${department.icon} ${department.name}`);
  setTextContent("department-banner-copy", department.bannerCopy);
  setTextContent("department-page-label", `Abteilung ${department.name}`);
  setTextContent("department-page-title", `${department.icon} ${department.name}`);
  setTextContent("department-page-description", department.description);
  setTextContent("department-panel-title", department.panelTitle);
  setTextContent("department-panel-copy", department.panelCopy);
  setTextContent("compose-title", `Neue Nachricht aus ${department.name}`);

  renderDepartmentHighlights(department.highlights);
  renderDepartmentTopics(department.topics);

  const toggleButton = document.getElementById("compose-toggle");
  const cancelButton = document.getElementById("compose-cancel");
  const form = document.getElementById("department-message-form");
  const titleField = document.getElementById("message-title");
  const contentField = document.getElementById("message-content");
  const status = document.getElementById("message-status");

  if (toggleButton && form && titleField) {
    toggleButton.addEventListener("click", () => {
      form.hidden = false;
      titleField.focus();
    });
  }

  if (cancelButton && form) {
    cancelButton.addEventListener("click", () => {
      form.hidden = true;
    });
  }

  if (!form || !titleField || !contentField) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = normalizeName(titleField.value);
    const content = normalizeName(contentField.value);

    if (!title || !content) {
      if (status) {
        status.textContent = "Bitte Titel und Nachricht ausfuellen.";
      }
      return;
    }

    saveDepartmentMessage(departmentKey, title, content);

    if (status) {
      status.textContent = "Nachricht gespeichert. Du wirst zum Bereich Im Fokus weitergeleitet.";
    }

    window.setTimeout(() => {
      window.location.href = "index.html#focus";
    }, 500);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initProfile();
  renderFocusFeed();
  initDepartmentPage();
});

window.addEventListener("storage", (event) => {
  if (event.key === FOCUS_STORAGE_KEY) {
    renderFocusFeed();
  }
});
