const FACILITY_LABELS = {
  women: "Women’s prayer hall",
  wudu: "Wudu facilities",
  parking: "Parking",
  wheelchair: "Wheelchair access",
  madrasah: "Madrasah / classes",
  library: "Library",
  funeral: "Funeral / ghusl",
  nikah: "Nikah service",
  cafe: "Café / kitchen",
  jumuah: "Jumu’ah",
  tours: "Visitor tours"
};

function commonsThumb(file, width = 1400) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
}

function traditionKind(label) {
  return /shia/i.test(label) ? "shia" : "sunni";
}

function traditionBadge(label) {
  return `<span class="tradition-badge ${traditionKind(label)}">${label}</span>`;
}

const mosques = [
  {
    id: "east-london",
    name: "East London Mosque & London Muslim Centre",
    city: "London",
    region: "Greater London",
    address: "82–92 Whitechapel Road, London E1 1JQ",
    rating: 4.8,
    reviews: 2140,
    capacity: 7000,
    established: 1940,
    tradition: "Sunni",
    imageFile: "London_-_The_East_London_Mosque.jpg",
    photoCredit: "Fred Romero / Wikimedia Commons",
    summary: "One of Britain’s busiest mosques, with the London Muslim Centre and dedicated Maryam Centre for women. Multiple Jumu’ah sittings and a dense cluster of nearby halal food.",
    facilities: ["women","wudu","wheelchair","madrasah","library","funeral","nikah","cafe","jumuah","tours"]
  },
  {
    id: "regents-park",
    name: "London Central Mosque (Regent’s Park)",
    city: "London",
    region: "Greater London",
    address: "146 Park Road, London NW8 7RG",
    rating: 4.7,
    reviews: 1890,
    capacity: 5000,
    established: 1977,
    tradition: "Sunni",
    imageFile: "London_Central_Mosque.jpg",
    photoCredit: "Wikimedia Commons",
    summary: "The landmark golden-domed mosque beside Regent’s Park. Separate facilities for men and women, bookshop, and a frequent stop for visitors to central London.",
    facilities: ["women","wudu","parking","wheelchair","library","cafe","jumuah","tours"]
  },
  {
    id: "ice-maida-vale",
    name: "Islamic Centre of England (Maida Vale)",
    city: "London",
    region: "Greater London",
    address: "140 Maida Vale, London W9 1QB",
    rating: 4.5,
    reviews: 520,
    capacity: 1500,
    established: 1998,
    tradition: "Shia",
    imageFile: "Islamic_Centre_of_England,_Maida_Vale_(geograph_4511525).jpg",
    photoCredit: "David Dixon / Wikimedia Commons",
    summary: "A prominent Twelver Shia centre in a Grade II listed former cinema on Maida Vale. Hosts daily prayers, majalis and community education.",
    facilities: ["women","wudu","wheelchair","madrasah","library","jumuah","tours"]
  },
  {
    id: "alkhoei",
    name: "Imam Al-Khoei Islamic Centre",
    city: "London",
    region: "Greater London",
    address: "Chevening Road, Queen’s Park, London NW6",
    rating: 4.6,
    reviews: 410,
    capacity: 1200,
    established: 1989,
    tradition: "Shia",
    imageFile: "Imam_Khoei_Islamic_Centre,_Queens_Park_-_geograph.org.uk_-_379102.jpg",
    photoCredit: "Danny Robinson / Wikimedia Commons",
    summary: "Headquarters of the Al-Khoei Foundation in Queen’s Park. A major Shia hub for worship, schools, library and community welfare.",
    facilities: ["women","wudu","wheelchair","madrasah","library","funeral","nikah","jumuah"]
  },
  {
    id: "brick-lane",
    name: "Brick Lane Mosque (Jamme Masjid)",
    city: "London",
    region: "Greater London",
    address: "59 Brick Lane, London E1 6QL",
    rating: 4.5,
    reviews: 640,
    capacity: 1500,
    established: 1976,
    tradition: "Sunni",
    imageFile: "Brick_Lane_Mosque.JPG",
    photoCredit: "TheGreenEditor / Wikimedia Commons",
    summary: "A former Huguenot chapel and synagogue, now a mosque at the heart of Brick Lane. Several Jumu’ah sittings serving the East End.",
    facilities: ["women","wudu","jumuah","madrasah"]
  },
  {
    id: "birmingham-central",
    name: "Birmingham Central Mosque",
    city: "Birmingham",
    region: "West Midlands",
    address: "180 Belgrave Middleway, Highgate, Birmingham B12 0XS",
    rating: 4.6,
    reviews: 1210,
    capacity: 6000,
    established: 1981,
    tradition: "Sunni",
    imageFile: "Birmingham_Central_Mosque.jpg",
    photoCredit: "Wikimedia Commons",
    summary: "The principal purpose-built mosque of the West Midlands, with a large Friday congregation and community outreach across Highgate.",
    facilities: ["women","wudu","parking","wheelchair","madrasah","funeral","nikah","jumuah"]
  },
  {
    id: "green-lane",
    name: "Green Lane Masjid & Community Centre",
    city: "Birmingham",
    region: "West Midlands",
    address: "20 Green Lane, Small Heath, Birmingham B9 5DB",
    rating: 4.8,
    reviews: 1560,
    capacity: 2500,
    established: 1970,
    tradition: "Sunni (Salafi)",
    imageFile: "Green_Lane_Mosque.jpg",
    photoCredit: "Oosoom / Wikimedia Commons",
    summary: "A converted Victorian baths and library, now one of the most active Islamic centres in the country for classes, youth work and online dawah.",
    facilities: ["women","wudu","wheelchair","madrasah","library","nikah","cafe","jumuah"]
  },
  {
    id: "ghamkol",
    name: "Central Jamia Mosque Ghamkol Sharif",
    city: "Birmingham",
    region: "West Midlands",
    address: "150 Golden Hillock Road, Small Heath, Birmingham B10 0DX",
    rating: 4.7,
    reviews: 870,
    capacity: 5000,
    established: 1992,
    tradition: "Sunni (Barelvi)",
    imageFile: "Ghamkol_Sharif_Mosque,_Golden_Hillock_Road_-_geograph.org.uk_-_7949282.jpg",
    photoCredit: "Geograph / Wikimedia Commons",
    summary: "A vast landmark mosque in Small Heath with ornate domes, large Eid gatherings and a wide range of community services.",
    facilities: ["women","wudu","parking","madrasah","funeral","nikah","jumuah"]
  },
  {
    id: "manchester-central",
    name: "Manchester Central Mosque (Victoria Park)",
    city: "Manchester",
    region: "North West",
    address: "20 College Road, Victoria Park, Manchester M14 5JQ",
    rating: 4.5,
    reviews: 720,
    capacity: 3000,
    established: 1971,
    tradition: "Sunni",
    imageFile: "Manchester_Central_Mosque,_Upper_Park_Road,_Victoria_Park,_Manchester_(April_2024)_(2).jpg",
    photoCredit: "Hassocks5489 / Wikimedia Commons",
    summary: "Often called Victoria Park Mosque, this is Manchester’s flagship purpose-built mosque, close to the universities and Rusholme.",
    facilities: ["women","wudu","parking","madrasah","jumuah","nikah"]
  },
  {
    id: "didsbury",
    name: "Didsbury Mosque & Islamic Centre",
    city: "Manchester",
    region: "North West",
    address: "271 Burton Road, West Didsbury, Manchester M20 2SN",
    rating: 4.4,
    reviews: 410,
    capacity: 1200,
    established: 1962,
    tradition: "Sunni",
    imageFile: "Didsbury_mosque_steeple.jpg",
    photoCredit: "Wikimedia Commons",
    summary: "A converted Methodist chapel serving south Manchester, with a well-kept garden and programmes for families and youth.",
    facilities: ["women","wudu","madrasah","jumuah"]
  },
  {
    id: "glasgow-central",
    name: "Glasgow Central Mosque",
    city: "Glasgow",
    region: "Scotland",
    address: "1 Mosque Avenue, Gorbals, Glasgow G5 9TA",
    rating: 4.7,
    reviews: 990,
    capacity: 2500,
    established: 1984,
    tradition: "Sunni",
    imageFile: "Glasgow_Central_Mosque_01.jpg",
    photoCredit: "Postdlf / Wikimedia Commons",
    summary: "Scotland’s largest mosque, on the south bank of the Clyde. A civic landmark with education, welfare and interfaith work.",
    facilities: ["women","wudu","parking","wheelchair","madrasah","library","funeral","jumuah","tours"]
  },
  {
    id: "bradford-grand",
    name: "Al-Jamia Suffa-Tul-Islam Grand Mosque",
    city: "Bradford",
    region: "Yorkshire",
    address: "93–99 Horton Park Avenue, Bradford BD5 0LD",
    rating: 4.8,
    reviews: 760,
    capacity: 8000,
    established: 2014,
    tradition: "Sunni",
    imageFile: "Al_Jamia_Suffa-tul-Islam_Grand_Mosque,_Horton_Park_Avenue,_Bradford_-_geograph.org.uk_-_8208400.jpg",
    photoCredit: "Geograph / Wikimedia Commons",
    summary: "One of the largest mosques in Bradford and a major centre for worship, education and community services in West Yorkshire.",
    facilities: ["women","wudu","parking","wheelchair","madrasah","funeral","nikah","jumuah"]
  },
  {
    id: "shah-jahan",
    name: "Shah Jahan Mosque",
    city: "Woking",
    region: "South East",
    address: "149 Oriental Road, Woking GU22 7BA",
    rating: 4.9,
    reviews: 530,
    capacity: 400,
    established: 1889,
    tradition: "Sunni",
    imageFile: "Shah_Jahan_Mosque,_Oriental_Road,_Maybury,_Woking_(June_2015)_(5).JPG",
    photoCredit: "Hassocks5489 / Wikimedia Commons",
    summary: "Britain’s first purpose-built mosque, Grade I listed. An intimate Mughal-inspired building in a garden setting — historic as much as congregational.",
    facilities: ["women","wudu","parking","tours","jumuah","library"]
  },
  {
    id: "quilliam",
    name: "Abdullah Quilliam Mosque",
    city: "Liverpool",
    region: "North West",
    address: "8–12 Brougham Terrace, Liverpool L6 1AE",
    rating: 4.6,
    reviews: 290,
    capacity: 200,
    established: 1889,
    tradition: "Sunni",
    imageFile: "Brougham_Terrace,_July_07,_2012.jpg",
    photoCredit: "John Bradley / Wikimedia Commons",
    summary: "Restored home of Britain’s first recorded functioning mosque, founded by William Abdullah Quilliam. Open for prayers and heritage visits.",
    facilities: ["women","wudu","tours","library","jumuah"]
  },
  {
    id: "cambridge",
    name: "Cambridge Central Mosque",
    city: "Cambridge",
    region: "East of England",
    address: "311–315 Mill Road, Cambridge CB1 3DF",
    rating: 4.9,
    reviews: 680,
    capacity: 1000,
    established: 2019,
    tradition: "Sunni",
    imageFile: "Cambridge_Central_Mosque_front.jpg",
    photoCredit: "Wikimedia Commons",
    summary: "Europe’s first purpose-built eco mosque: timber lattice, living roof and a calm courtyard. Designed as a welcoming civic building as well as a place of prayer.",
    facilities: ["women","wudu","wheelchair","madrasah","cafe","jumuah","tours","parking"]
  }
];

const HERO_FILE = "Glasgow_Central_Mosque_01.jpg";

const listEl = document.getElementById("mosque-list");
const searchEl = document.getElementById("search");
const cityEl = document.getElementById("city-filter");
const facilityEl = document.getElementById("facility-filter");
const traditionEl = document.getElementById("tradition-filter");
const sortEl = document.getElementById("sort");
const metaEl = document.getElementById("results-meta");
const drawer = document.getElementById("drawer");
const drawerBody = document.getElementById("drawer-body");

const heroImg = document.querySelector(".hero-image");
if (heroImg) {
  heroImg.src = commonsThumb(HERO_FILE, 1920);
  heroImg.alt = "Glasgow Central Mosque across the River Clyde";
}

const cities = [...new Set(mosques.map(m => m.city))].sort();
cities.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = c;
  cityEl.appendChild(opt);
});

Object.entries(FACILITY_LABELS).forEach(([key, label]) => {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = label;
  facilityEl.appendChild(opt);
});

function stars(score) {
  const full = Math.floor(score);
  const half = score - full >= 0.4;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
}

function filtered() {
  const q = searchEl.value.trim().toLowerCase();
  const city = cityEl.value;
  const fac = facilityEl.value;
  const trad = traditionEl ? traditionEl.value : "all";
  let rows = mosques.filter(m => {
    const hay = `${m.name} ${m.city} ${m.address} ${m.region} ${m.tradition}`.toLowerCase();
    const matchQ = !q || hay.includes(q);
    const matchCity = city === "all" || m.city === city;
    const matchFac = fac === "all" || m.facilities.includes(fac);
    const matchTrad = trad === "all" || traditionKind(m.tradition) === trad;
    return matchQ && matchCity && matchFac && matchTrad;
  });
  const sort = sortEl.value;
  rows.sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "capacity") return b.capacity - a.capacity;
    if (sort === "city") return a.city.localeCompare(b.city) || b.rating - a.rating;
    return b.rating - a.rating;
  });
  return rows;
}

function render() {
  const rows = filtered();
  metaEl.textContent = `${rows.length} mosque${rows.length === 1 ? "" : "s"} · tap a row for full details`;
  if (!rows.length) {
    listEl.innerHTML = `<div class="empty">No mosques match those filters. Try another city or clear the search.</div>`;
    return;
  }
  listEl.innerHTML = rows.map(m => `
    <article class="card card-${traditionKind(m.tradition)}" data-id="${m.id}" tabindex="0" role="button" aria-label="Open ${m.name}">
      <div class="card-media">
        <img src="${commonsThumb(m.imageFile, 900)}" alt="${m.name}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        ${traditionBadge(m.tradition)}
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="city-chip">${m.city}</span>
          <div class="stars" title="${m.rating} from ${m.reviews} reviews">${stars(m.rating)} <span>${m.rating} · ${m.reviews.toLocaleString()} reviews</span></div>
        </div>
        <h3>${m.name}</h3>
        <p class="addr">${m.address}</p>
        <div class="facilities">
          ${m.facilities.slice(0, 6).map(f => `<span class="tag">${FACILITY_LABELS[f]}</span>`).join("")}
          ${m.facilities.length > 6 ? `<span class="tag">+${m.facilities.length - 6} more</span>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function openDrawer(id) {
  const m = mosques.find(x => x.id === id);
  if (!m) return;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.name + " " + m.address)}`;
  drawerBody.innerHTML = `
    <img class="detail-hero" src="${commonsThumb(m.imageFile, 1600)}" alt="${m.name}" referrerpolicy="no-referrer-when-downgrade" />
    <div class="detail">
      <p class="eyebrow">${m.region} · ${traditionBadge(m.tradition)}</p>
      <h2 id="drawer-title">${m.name}</h2>
      <p class="addr">${m.address}</p>
      <div class="rating-row">
        <div class="big-score">${m.rating.toFixed(1)}</div>
        <div>
          <div class="stars">${stars(m.rating)}</div>
          <div class="addr">${m.reviews.toLocaleString()} community reviews</div>
        </div>
      </div>
      <p>${m.summary}</p>
      <div class="meta-grid">
        <div class="meta-box"><b>Capacity</b> about ${m.capacity.toLocaleString()} worshippers</div>
        <div class="meta-box"><b>Established</b> ${m.established}</div>
        <div class="meta-box"><b>City</b> ${m.city}</div>
        <div class="meta-box"><b>Jumu’ah</b> ${m.facilities.includes("jumuah") ? "Held on site" : "Check locally"}</div>
      </div>
      <h3>Facilities</h3>
      <div class="facility-grid">
        ${Object.keys(FACILITY_LABELS).map(key =>
          `<span class="facility-pill ${m.facilities.includes(key) ? "" : "off"}">${FACILITY_LABELS[key]}</span>`
        ).join("")}
      </div>
      <p class="photo-credit">Photograph: ${m.photoCredit}</p>
      <a class="maps-link" href="${maps}" target="_blank" rel="noopener">Open in Google Maps</a>
    </div>
  `;
  drawer.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.hidden = true;
  document.body.style.overflow = "";
}

listEl.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) openDrawer(card.dataset.id);
});
listEl.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest(".card");
    if (card) { e.preventDefault(); openDrawer(card.dataset.id); }
  }
});
drawer.addEventListener("click", e => { if (e.target.dataset.close !== undefined) closeDrawer(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !drawer.hidden) closeDrawer(); });

["input", "change"].forEach(ev => {
  searchEl.addEventListener(ev, render);
  cityEl.addEventListener(ev, render);
  facilityEl.addEventListener(ev, render);
  if (traditionEl) traditionEl.addEventListener(ev, render);
  sortEl.addEventListener(ev, render);
});
document.getElementById("search-btn").addEventListener("click", render);

document.getElementById("view-list").addEventListener("click", () => {
  listEl.classList.add("list-view");
  listEl.classList.remove("grid-view");
  document.getElementById("view-list").classList.add("active");
  document.getElementById("view-grid").classList.remove("active");
});
document.getElementById("view-grid").addEventListener("click", () => {
  listEl.classList.add("grid-view");
  listEl.classList.remove("list-view");
  document.getElementById("view-grid").classList.add("active");
  document.getElementById("view-list").classList.remove("active");
});

document.getElementById("stat-count").textContent = mosques.length;
render();
