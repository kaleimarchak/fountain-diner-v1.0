function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function renderBadges(item) {
  let html = "";

  if (item.gf) {
    html += `<span class="menu-badge menu-badge-gf" title="Gluten Free">GF</span>`;
  }

  if (item.veg) {
    html += `<span class="menu-badge menu-badge-v" title="Vegetarian">V</span>`;
  }

  return html;
}

function renderMenuItem(item) {
  let html = `<div class="menu-item">`;

  if (item.price !== undefined) {
    html += `
      <div class="menu-item-row">
        <span class="menu-item-name">${item.name}${renderBadges(item)}</span>
        <span class="menu-item-leader" aria-hidden="true"></span>
        <span class="menu-item-price">${formatPrice(item.price)}</span>
      </div>
    `;
  } else {
    html += `<div class="menu-item-name">${item.name}${renderBadges(item)}</div>`;
  }

  if (item.description) {
    html += `<p class="menu-item-desc">${item.description}</p>`;
  }

  if (item.note) {
    html += `<p class="menu-item-note">${item.note}</p>`;
  }

  if (item.size) {
    html += `<p class="menu-item-meta">Size: ${item.size}</p>`;
  }

  if (item.flavors) {
    html += `<p class="menu-item-meta"><strong>Flavors:</strong> ${item.flavors.join(", ")}</p>`;
  }

  if (item.prices) {
    html += `<div class="menu-item-prices">`;

    item.prices.forEach((option) => {
      html += `
        <div class="menu-item-row">
          <span class="menu-item-name">${option.size}</span>
          <span class="menu-item-leader" aria-hidden="true"></span>
          <span class="menu-item-price">${formatPrice(option.price)}</span>
        </div>
      `;
    });

    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

function renderMenuSection(section) {
  let html = `
    <section class="menu-section" ${section.id ? `id="${section.id}"` : ""}>
      <h3 class="menu-section-title">${section.category}</h3>
      <hr class="menu-section-rule">
  `;

  section.items.forEach((item) => {
    html += renderMenuItem(item);
  });

  if (section.addOns) {
    html += `
      <div class="menu-addons">
        <h4 class="menu-addons-title">Add-Ons</h4>
    `;

    section.addOns.forEach((addOn) => {
      html += `
        <div class="menu-item-row">
          <span class="menu-item-name">${addOn.name}</span>
          <span class="menu-item-leader" aria-hidden="true"></span>
          ${addOn.price !== undefined ? `<span class="menu-item-price">${formatPrice(addOn.price)}</span>` : `<span class="menu-item-price"></span>`}
        </div>
      `;

      if (addOn.option) {
        html += `<p class="menu-item-note">${addOn.option}</p>`;
      }
    });

    html += `</div>`;
  }

  html += `</section>`;
  return html;
}

function renderFooterBlock(block) {
  const colsClass = block.cols ? ` cols-${block.cols}` : "";

  let html = `
    <div class="menu-footer-block" ${block.id ? `id="${block.id}"` : ""}>
      <h4 class="menu-footer-block-title">${block.title}</h4>
  `;

  if (block.items) {
    html += `<div class="menu-footer-grid${colsClass}">`;

    block.items.forEach((item) => {
      html += `
        <div class="menu-footer-item">
          <span class="menu-footer-item-name">${item.name}</span>
          <span class="menu-footer-item-price">${formatPrice(item.price)}</span>
        </div>
      `;
    });

    html += `</div>`;
  }

  if (block.flavors) {
    html += `<p class="menu-footer-flavors"><strong>Flavors:</strong> ${block.flavors.join(", ")}</p>`;
  }

  if (block.note) {
    html += `<p class="menu-footer-flavors">${block.note}</p>`;
  }

  html += `</div>`;
  return html;
}

function renderMenuSheet({
  containerId,
  title,
  subtitle,
  infoBar,
  leftSections,
  rightSections,
  footerBlocks = []
}) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const leftHtml = leftSections.map(renderMenuSection).join("");
  const rightHtml = rightSections.map(renderMenuSection).join("");
  const footerHtml = footerBlocks.map(renderFooterBlock).join("");

  container.innerHTML = `
    <div class="menu-sheet-inner">
      <header class="menu-sheet-header">
        <h2 class="menu-sheet-title">${title}</h2>
        ${subtitle ? `<p class="menu-sheet-subtitle">${subtitle}</p>` : ""}
        <div class="menu-legend">
          <span class="menu-legend-item"><span class="menu-badge menu-badge-gf">GF</span> Gluten Free</span>
          <span class="menu-legend-item"><span class="menu-badge menu-badge-v">V</span> Vegetarian</span>
        </div>
        ${infoBar ? `<div class="menu-info-bar">${infoBar}</div>` : ""}
      </header>
      <div class="menu-sheet-body">
        <div class="menu-columns">
          <div class="menu-col">${leftHtml}</div>
          <div class="menu-col-divider" aria-hidden="true"></div>
          <div class="menu-col">${rightHtml}</div>
        </div>
        ${footerHtml ? `<div class="menu-footer-blocks">${footerHtml}</div>` : ""}
        <p class="menu-tax-note">All prices do not include tax</p>
      </div>
    </div>
  `;
}

const breakfastInfoBar =
  "Any breakfast can substitute fruit cup or tomatoes $1.99. Sub multigrain, rye, or sourdough toast $1.99. Sub gluten free toast or English muffin $1.99. Bacon, sausage, or ham $5.99. Sub egg whites on three egg dishes $2.99. Three-egg dishes $3.99.";

const lunchInfoBar =
  "All sandwiches and burgers come with choice of side: Fries, Salad, Soup, or Poutine. $2.99 to substitute Poutine. All sandwiches and wraps available in gluten free tortilla $1.99.";

const lunchSides = [
  { name: "Fries", price: 5.99 },
  { name: "Side Salad", price: 5.99 },
  { name: "Soup Cup", price: 5.99 },
  { name: "Poutine", price: 8.99 },
  { name: "Onion Rings", price: 7.99 },
  { name: "Tater Tots", price: 6.99 }
];

const lunchBeverages = drinksMenu[0].items.map((item) => ({
  name: item.name,
  price: item.price
}));

const lunchMilkshakes = drinksMenu.find((section) => section.category === "Milkshakes");
const lunchDesserts = drinksMenu.find((section) => section.category === "Desserts");

renderMenuSheet({
  containerId: "breakfast-menu",
  title: "Breakfast Menu",
  subtitle: "Served all day",
  infoBar: breakfastInfoBar,
  leftSections: breakfastMenu.slice(0, 3),
  rightSections: breakfastMenu.slice(3),
  footerBlocks: [
    {
      id: "sides",
      title: "Sides & Add-Ons",
      cols: 4,
      items: sidesMenu[0].items.map((item) => ({
        name: item.name,
        price: item.price
      }))
    }
  ]
});

renderMenuSheet({
  containerId: "lunch-menu",
  title: "Lunch Menu",
  infoBar: lunchInfoBar,
  leftSections: [lunchMenu[0], lunchMenu[2]],
  rightSections: [
    lunchMenu[1],
    { ...kidsMenu[0], id: "kids" }
  ],
  footerBlocks: [
    {
      id: "lunch-sides",
      title: "Sides",
      cols: 3,
      items: lunchSides
    },
    {
      id: "drinks",
      title: "Beverages",
      cols: 3,
      items: lunchBeverages
    },
    {
      title: "Milkshakes",
      items: [{ name: "Milkshake", price: lunchMilkshakes.items[0].price }],
      flavors: lunchMilkshakes.items[0].flavors
    },
    {
      title: "Desserts",
      cols: 2,
      items: lunchDesserts.items.map((item) => ({
        name: item.name,
        price: item.price
      })),
      note: lunchDesserts.items[1].flavors
        ? `Sundae sauces: ${lunchDesserts.items[1].flavors.join(", ")}`
        : ""
    }
  ]
});
