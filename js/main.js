const pad = (n) => String(n).padStart(2, "0");

function renderProjectList() {
  const list = document.getElementById("project-list");
  if (!list) return;

  document.getElementById("project-count").textContent = pad(PROJECTS.length);

  list.innerHTML = PROJECTS.map((p, i) => `
    <li>
      <a class="row" href="project.html?slug=${encodeURIComponent(p.slug)}">
        <span class="row-key">${pad(i + 1)}</span>
        <span><span class="row-title">${p.title}</span><br /><span class="muted">${p.meta}</span></span>
        <span class="arrow">&nearr;</span>
      </a>
    </li>
  `).join("");
}

const paragraphs = (arr) => (arr || []).map((t) => `<p>${t}</p>`).join("");

// One figure: an image (optionally linking out) with its caption below.
function figure({ image, url, text, portrait }) {
  const img = `<img src="${image}" alt="" loading="lazy" />`;
  const site = url && /instagram\.com/.test(url) ? "Instagram" : "LinkedIn";
  const media = url
    ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${img}</a>`
    : img;
  const view = url
    ? `<a class="view" href="${url}" target="_blank" rel="noopener noreferrer">View on ${site} <span class="arrow">&nearr;</span></a>`
    : "";
  const caption = paragraphs(text) + view;

  return `
    <figure class="${portrait ? "portrait-thumb" : ""}">
      ${media}
      ${caption ? `<figcaption>${caption}</figcaption>` : ""}
    </figure>
  `;
}

function renderDetail() {
  const el = document.getElementById("project-detail");
  if (!el) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const index = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug));
  const project = PROJECTS[index];
  document.title = `${project.title} — Samaira Banga`;
  document.getElementById("project-index").textContent = pad(index + 1);

  // Every project's media, whatever shape it was entered in, becomes the
  // same simple grid of figures.
  const figures = [
    ...(project.photos || []).map((p) => figure({ image: p.image, url: p.url, text: p.caption ? [p.caption] : [] })),
    ...(project.videos || []).map((v) => figure({ image: v.thumbnail, url: v.url, text: v.text, portrait: true })),
    ...(project.gallery || []).map((g) => figure(g)),
    ...(project.sections || []).flatMap((s) => (s.images || []).map((src) => figure({ image: src })))
  ];

  const bodyText = [
    ...(project.sections || []).flatMap((s) => s.text || []),
    ...(project.body || [])
  ];

  el.innerHTML = `
    <h1 class="detail-title">${project.title}</h1>
    <ul class="rows detail-facts">
      <li class="row"><span class="row-key">Role</span><span>${project.meta}</span><span></span></li>
      <li class="row"><span class="row-key">Company</span><span>${project.role}</span><span></span></li>
    </ul>
    ${figures.length ? `<div class="media">${figures.join("")}</div>` : ""}
    ${bodyText.length ? `<div class="body">${paragraphs(bodyText)}</div>` : ""}
  `;
}

renderProjectList();
renderDetail();
