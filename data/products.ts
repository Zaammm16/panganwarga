// Kita definisikan tipe datanya biar TypeScript senang
export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  category: 'raw' | 'processed';
  desc: string;
  specs: ProductSpec[];
  images: string[];
}

export const products: Product[] = [
  { 
    id: "coffee", 
    title: "Arabica Gayo Coffee", 
    category: "raw", 
    desc: "Premium Grade 1 Arabica beans harvested from the highlands of Aceh. Known for its low acidity, heavy body, and distinct earthy notes.", 
    specs: [{ label: "Grade", value: "Grade 1 (Specialty)" }, { label: "Origin", value: "Aceh Gayo" }], 
    images: ["https://picsum.photos/seed/coffeebean/800/800", "https://picsum.photos/seed/coffeebean2/800/800"] 
  },
  { 
    id: "nutmeg", 
    title: "Whole Nutmeg", 
    category: "raw", 
    desc: "High-quality whole nutmeg seeds sourced from the Banda Islands. Characterized by a strong aromatic scent.", 
    specs: [{ label: "Grade", value: "AB / Whole" }, { label: "Origin", value: "Banda Islands" }], 
    images: ["https://picsum.photos/seed/nutmeg/800/800", "https://picsum.photos/seed/nutmeg2/800/800"] 
  },
  { 
    id: "oil", 
    title: "Virgin Coconut Oil", 
    category: "processed", 
    desc: "Cold-pressed VCO made from fresh coconut milk. Contains medium-chain triglycerides (MCTs).", 
    specs: [{ label: "Type", value: "Cold Pressed" }, { label: "Acid Value", value: "Max 0.5%" }], 
    images: ["https://picsum.photos/seed/oil/800/800", "https://picsum.photos/seed/oil2/800/800"] 
  },
  { 
    id: "cloves", 
    title: "Dried Cloves", 
    category: "raw", 
    desc: "Hand-picked sun-dried cloves. Consistent dark brown color with high oil content.", 
    specs: [{ label: "Grade", value: "Whole / Clean" }, { label: "Origin", value: "Manado" }], 
    images: ["https://picsum.photos/seed/clove/800/800", "https://picsum.photos/seed/clove2/800/800"] 
  },
  { 
    id: "sugar", 
    title: "Organic Palm Sugar", 
    category: "processed", 
    desc: "Natural crystalline sugar derived from coconut palm sap. Low glycemic index.", 
    specs: [{ label: "Form", value: "Crystal / Blocks" }, { label: "Sweetness", value: "75% Sucrose" }], 
    images: ["https://picsum.photos/seed/sugar/800/800", "https://picsum.photos/seed/sugar2/800/800"] 
  }
];