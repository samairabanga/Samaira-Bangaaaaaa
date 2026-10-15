// Central place to edit project content. Each project becomes one
// "book" on the Projects shelf and one detail page.
// `cover` points at an image in assets/ — the book render itself
// (spine, pages, shadow) should already be baked into that image.
const PROJECTS = [
  {
    slug: "clodo",
    title: "Clodo AI (YC)",
    role: "Backed by Y Combinator — planet scale people sourcing",
    meta: "#1 Growth",
    cover: "assets/clodo-cover.jpg",
    // Numbered sections: an optional heading, a row of images (max 2 per
    // row), then a shared caption below the whole row.
    sections: [
      {
        images: ["assets/clodo-1.png", "assets/clodo-2.png"],
        text: [
          "Created Founder-Led content on LinkedIn for <a class=\"inline-link\" href=\"https://www.linkedin.com/in/sidharthrajaram/\" target=\"_blank\" rel=\"noopener noreferrer\">@Sidrajaram</a> and <a class=\"inline-link\" href=\"https://www.linkedin.com/in/rithvikchuppala/\" target=\"_blank\" rel=\"noopener noreferrer\">@RithvikChuppala</a>, growing from 0 to 2M+ impressions and 0 to $40k revenue."
        ]
      }
    ]
  },
  {
    slug: "girlsintovc",
    title: "Girls into VC",
    role: "Closing the gender gap in venture capital",
    meta: "Regional Lead",
    cover: "assets/girlsintovc-cover.jpg",
    videos: [
      {
        thumbnail: "assets/girlsintovc-photo-1.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7467707389861928960/",
        text: [
          "Hosted a Vibe-coding Hackathon during Boston's first A16Z Tech Week."
        ]
      },
      {
        thumbnail: "assets/girlsintovc-photo-2.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7467707389861928960/",
        text: [
          "Social marketing before the event, resulting in 100+ attendees.",
          "Sponsorships from Gamma, Lovable, and Silicon Valley Bank."
        ]
      },
      {
        thumbnail: "assets/girlsintovc-photo-3.jpg",
        url: "https://www.instagram.com/reels/DbL_dWmSLYs/",
        text: [
          "Created short-form content targeted at increasing community membership, 12k+ views, 3% conversion rate."
        ]
      }
    ]
  },
  {
    slug: "whoop",
    title: "WHOOP",
    // Optional project-page header: heading, small label, one-line tagline.
    heading: "Whoop X Mass AI Coalition",
    kicker: "Community Campaign",
    tagline: "Retaining Boston's top talent in Mass",
    role: "Wearable fitness and health platform",
    meta: "Community campaign",
    cover: "assets/whoop-cover.jpg",
    // Full-width horizontal photo, clickable.
    photos: [
      {
        image: "assets/whoop.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7473116035550736384/"
      }
    ],
    body: [
      "Campaign for the MASS AI Coalition, a private sector initiative encouraging founders, operators, and students new to Boston to build from Boston."
    ]
  },
  {
    slug: "gamma",
    title: "GAMMA",
    heading: "Gamma X Girls into VC hackathon",
    tagline: "3 Perspectives on creativity and communication in the age of AI.",
    role: "AI powered presentations",
    meta: "Campaign",
    cover: "assets/gamma-cover.jpg",
    photos: [
      {
        image: "assets/gamma.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7478933854884425728/"
      }
    ]
  },
  {
    slug: "sunrooof",
    title: "SUNROOOF",
    role: "Patented wellness lighting technology",
    meta: "Brand Marketing Intern",
    cover: "assets/sunrooof-cover.jpg",
    // Each entry is a clickable thumbnail (opens the Instagram Reel in a
    // new tab) paired with its own `text` paragraph(s), rendered right
    // next to it in a shared grid row.
    videos: [
      {
        thumbnail: "assets/sunrooof-reel-1.jpg",
        url: "https://www.instagram.com/reel/Dbx7BBmJCUR/",
        text: [
          "<strong>#1 Founder-led storytelling:</strong> We have spent decades improving artificial light, but our bodies evolved to require natural light."
        ]
      },
      {
        thumbnail: "assets/sunrooof-reel-2.jpg",
        url: "https://www.instagram.com/p/DWBnBYdkSQD/",
        text: [
          "<strong>#2 Celebrity Collaboration:</strong> Building social proof through Bollywood actress Shilpa Shetty."
        ]
      }
    ]
  }
];
