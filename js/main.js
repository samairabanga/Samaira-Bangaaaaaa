function renderProjectList() {
  const list = document.getElementById("project-list");
  if (!list) return;

  list.innerHTML = PROJECTS.map((p) => `
    <li>
      <a href="project.html?slug=${encodeURIComponent(p.slug)}">
        <span class="name">${p.title}</span>
        <span class="meta">${p.meta}</span>
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
    ? `<a class="view" href="${url}" target="_blank" rel="noopener noreferrer">View on ${site} &nearr;</a>`
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
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];
  document.title = `${project.title} — Samaira Banga`;

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
    <p class="detail-sub">${project.role} · ${project.meta}</p>
    ${figures.length ? `<div class="media">${figures.join("")}</div>` : ""}
    ${bodyText.length ? `<div class="body">${paragraphs(bodyText)}</div>` : ""}
  `;
}

renderProjectList();
renderDetail();
