/**
 * Taxonomy behind the Products dropdown in the Navbar.
 *
 * Categories with an `items` array render a flyout submenu; the rest are single
 * links. Product names are transcribed from the Kimpex catalog captured in
 * `kimpex_products.html` at the repo root.
 *
 * Detail pages do not exist yet, so every link currently resolves to /products
 * with a query string. When those routes land, change the two href helpers at
 * the bottom of this file and nothing else.
 */

export interface ProductMenuItem {
  name: string;
  slug: string;
}

export interface ProductMenuCategory {
  name: string;
  slug: string;
  /** Present only for categories that open a submenu. */
  items?: ProductMenuItem[];
}

export const productMenu: ProductMenuCategory[] = [
  {
    name: "Gas Pressure Regulators",
    slug: "gas-pressure-regulators",
    items: [
      { name: "Double Stage – ERG-SR Series", slug: "erg-sr-series" },
      { name: "Double Stage – ERG-SE Series", slug: "erg-se-series" },
      { name: "Double Stage – ERG-SX Series", slug: "erg-sx-series" },
      { name: "Single Stage – ERG-E Series", slug: "erg-e-series" },
      { name: "Single Stage – ERG-H Series", slug: "erg-h-series" },
      { name: "Single Stage – ERG-EH Series", slug: "erg-eh-series" },
      { name: "Direct-Acting – ERG-H1", slug: "erg-h1" },
      { name: "Direct-Acting – ERG-H5", slug: "erg-h5" },
      { name: "Direct-Acting – ERG-H6", slug: "erg-h6" },
      { name: "Direct-Acting – ERG-H7", slug: "erg-h7" },
    ],
  },
  {
    // PLACEHOLDER: the source catalog has no filter range, so these are generic
    // product types rather than real series names. Replace with the actual line.
    name: "Gas Filters",
    slug: "gas-filters",
    items: [
      { name: "Inline Gas Filters", slug: "inline-gas-filters" },
      { name: "Y-Type Strainers", slug: "y-type-strainers" },
      { name: "Cartridge Filter Elements", slug: "cartridge-filter-elements" },
    ],
  },
  {
    name: "Solenoid Valves",
    slug: "solenoid-valves",
    items: [
      { name: "ZEV Series", slug: "zev-series" },
      { name: "ZEV-ES Series", slug: "zev-es-series" },
      { name: "ZEVR Series", slug: "zevr-series" },
      { name: "ZEVS Series", slug: "zevs-series" },
    ],
  },
  {
    name: "Gas Meters",
    slug: "gas-meters",
    items: [
      { name: "Domestic Gas Meters – ZT Series", slug: "zt-series" },
      { name: "Commercial Diaphragm – UG Series", slug: "ug-series" },
      { name: "High-Pressure Diaphragm – UG4-AL", slug: "ug4-al" },
      { name: "High-Pressure Diaphragm – G6 & G10", slug: "g6-g10" },
      { name: "FMG Rotary Gas Meter (RPD)", slug: "fmg-rotary" },
      { name: "Turbine Gas Meters – FMT Series", slug: "fmt-series" },
    ],
  },
  { name: "Safety Relief Valves", slug: "safety-relief-valves" },
  { name: "Slam Shut Valves", slug: "slam-shut-valves" },
  { name: "Zero Governor", slug: "zero-governor" },
  { name: "Gas/Air Pressure Switch", slug: "gas-air-pressure-switch" },
  { name: "Burner Equipments", slug: "burner-equipments" },
];

export function categoryHref(categorySlug: string) {
  return `/products?category=${categorySlug}`;
}

export function productHref(categorySlug: string, productSlug: string) {
  return `/products?category=${categorySlug}&product=${productSlug}`;
}
