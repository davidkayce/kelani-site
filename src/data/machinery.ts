import { LineIconName } from "../components/LineIcon";

// NOTE: placeholder catalog — replace names, specs and prices with the real
// inventory list before launch. Prices are indicative, ex-works.
//
// To add a real photo of a machine, drop the file in
// public/assets/images/machinery/ and set `image` to its path, e.g.
//   image: "/assets/images/machinery/single-screw-extruder.jpg"
// Until then, cards fall back to a branded placeholder built from the icon.
export interface Machine {
  id: string;
  name: string;
  category: "Plastics" | "Food & Water" | "Energy" | "Packaging";
  icon: LineIconName;
  specs: string[];
  price: string;
  condition: "New" | "Refurbished";
  image?: string;
}

export const machines: Machine[] = [
  {
    id: "single-screw-extruder",
    name: "Single-Screw Extrusion Line",
    category: "Plastics",
    icon: "extrude",
    specs: ["Ø90mm screw · 38:1 L/D", "Up to 180 kg/hr output", "Pipe & profile dies included"],
    price: "₦48,500,000",
    condition: "New",
  },
  {
    id: "injection-moulding-320t",
    name: "Injection Moulding Machine — 320T",
    category: "Plastics",
    icon: "mould",
    specs: ["320-tonne clamping force", "Servo-hydraulic drive", "Suits crates, basins & fittings"],
    price: "₦62,000,000",
    condition: "New",
  },
  {
    id: "pet-washing-line",
    name: "PET Bottle Washing Line",
    category: "Plastics",
    icon: "recycle",
    specs: ["500 kg/hr hot-wash", "Label remover + friction washers", "Food-grade flake output"],
    price: "₦85,000,000",
    condition: "New",
    image: "/assets/images/balebreaker-PET-recycling.jpg",
  },
  {
    id: "pelletizing-line",
    name: "Plastic Pelletizing Line",
    category: "Plastics",
    icon: "pellet",
    specs: ["300 kg/hr twin-stage", "Water-ring cutter", "PE / PP / PET compatible"],
    price: "₦39,000,000",
    condition: "Refurbished",
    image: "/assets/images/energy1.jpg",
  },
  {
    id: "ro-plant-10000",
    name: "Reverse Osmosis Plant — 10,000 L/hr",
    category: "Food & Water",
    icon: "filter",
    specs: ["10,000 L/hr permeate", "Duplex pre-treatment skid", "NAFDAC-compliant output"],
    price: "₦27,500,000",
    condition: "New",
  },
  {
    id: "sachet-water-line",
    name: "Sachet Water Production Line",
    category: "Food & Water",
    icon: "package",
    specs: ["3,500 sachets/hr", "Auto form-fill-seal", "UV + micron filtration train"],
    price: "₦14,800,000",
    condition: "New",
  },
  {
    id: "bottling-line",
    name: "Bottled Water Filling Line",
    category: "Food & Water",
    icon: "droplet",
    specs: ["2,000 BPH (500ml)", "Rinse-fill-cap monoblock", "Includes date coder"],
    price: "₦46,000,000",
    condition: "New",
  },
  {
    id: "grain-mill",
    name: "Industrial Grain Milling Plant",
    category: "Food & Water",
    icon: "mill",
    specs: ["2 t/hr maize or sorghum", "Destoner + degermer", "Cyclone bagging station"],
    price: "₦33,500,000",
    condition: "New",
  },
  {
    id: "cold-room",
    name: "Modular Cold Room — 40m³",
    category: "Food & Water",
    icon: "snowflake",
    specs: ["-5°C to +10°C range", "Panel-built, site-assembled", "Standby compressor option"],
    price: "₦18,200,000",
    condition: "New",
  },
  {
    id: "shrink-wrap-tunnel",
    name: "Shrink-Wrap Packaging Tunnel",
    category: "Packaging",
    icon: "package",
    specs: ["25 packs/min", "PE film, auto sleeve-seal", "Suits bottles & cartons"],
    price: "₦9,600,000",
    condition: "New",
  },
  {
    id: "labeling-machine",
    name: "Automatic Labeling Machine",
    category: "Packaging",
    icon: "clipboard",
    specs: ["120 bottles/min", "Self-adhesive, round bottles", "PLC + touchscreen control"],
    price: "₦11,400,000",
    condition: "Refurbished",
  },
  {
    id: "biochar-retort",
    name: "Biomass Carbonisation Retort",
    category: "Energy",
    icon: "flame",
    specs: ["1.2 t/batch feedstock", "Syngas recirculation burner", "Char cooling conveyor"],
    price: "Price on request",
    condition: "New",
  },
  {
    id: "biogas-digester",
    name: "Biogas Digester Package — 50m³",
    category: "Energy",
    icon: "gas",
    specs: ["50m³ digester + holder", "Desulphurisation unit", "Genset-ready gas train"],
    price: "Price on request",
    condition: "New",
  },
  {
    id: "diesel-genset-500",
    name: "Industrial Generator — 500 kVA",
    category: "Energy",
    icon: "spark",
    specs: ["500 kVA prime power", "Soundproof canopy", "Deep-sea controller"],
    price: "₦52,000,000",
    condition: "Refurbished",
  },
];

export const machineCategories = ["All", "Plastics", "Food & Water", "Energy", "Packaging"] as const;
