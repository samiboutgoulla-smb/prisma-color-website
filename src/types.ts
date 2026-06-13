// ─── i18n Helper Type ────────────────────────────────────────────────────────
export interface ProductI18n {
  fr: string;
  en: string;
  ar: string;
}

// ─── Product Interface ────────────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  category: 'interior' | 'exterior' | 'decor' | 'special';
  subCategory?: string;
  line: ProductI18n;
  description: ProductI18n;
  coverage: string;
  coverageMultiplier: number;
  dryingTime: string;
  finishes: string[];
  tag: string;
  features: ProductI18n[];
  image: string;
  fallbackImage: string;
  dilution: string;
  density: string;
  cov: string;
  outils: ProductI18n;
  preparation: ProductI18n;
  longDescription: ProductI18n;
  usage: ProductI18n[];
  pdfUrl?: string;
  VideoUrl?: string;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
  category: 'chaleureux' | 'mineral' | 'nature' | 'neutre';
  description: string;
}

export interface Room {
  id: string;
  name: string;
  label: string;
  viewBox: string;
  elements: { id: string; name: string; defaultColor: string; d: string }[];
}

// ─── Shared i18n Snippets (reused across products) ───────────────────────────
const PREP_SMOOTH = {
  fr: "Le support doit être rigoureusement lisse, plan, sain et parfaitement enduit.",
  en: "The surface must be perfectly smooth, flat, sound and properly coated.",
  ar: "يجب أن تكون الدعامة ناعمة تماماً ومستوية وسليمة ومطلية بشكل صحيح."
};

const PREP_CLEAN_CRACKS = {
  fr: "Nettoyer le support, combler au préalable les fissures majeures.",
  en: "Clean the surface and fill any major cracks beforehand.",
  ar: "نظف السطح وامل الشقوق الكبيرة مسبقاً."
};

const PREP_PRIMER = {
  fr: "Brosser et dépoussiérer les maçonneries neuves avant application du primaire.",
  en: "Brush and dust off new masonry before applying the primer.",
  ar: "فرشط وأزل الغبار عن البناء الجديد قبل تطبيق الطلاء الأساسي."
};

const PREP_HEALTHY_DRY = {
  fr: "Pour tous les travaux, les supports doivent être sains, secs.",
  en: "For all works, surfaces must be sound and dry.",
  ar: "لجميع الأعمال، يجب أن تكون الأسطح سليمة وجافة."
};

const PREP_HUMIDITY = {
  fr: "Éliminer l'humidité résiduelle, traiter la source d'infiltration avant peinture.",
  en: "Eliminate residual moisture and treat the source of infiltration before painting.",
  ar: "أزل الرطوبة المتبقية وعالج مصدر التسرب قبل الطلاء."
};

const PREP_SANDING = {
  fr: "Ponçage fin du bois ou dépoussiérage méticuleux du support.",
  en: "Fine sanding of wood or meticulous dust removal from the surface.",
  ar: "صنفرة ناعمة للخشب أو إزالة الغبار بعناية عن السطح."
};

const USAGE_ACCENT = [
  { fr: "Murs d'accent et niches", en: "Accent walls and niches", ar: "جدران التمييز والمنافذ" },
  { fr: "Halls de palaces", en: "Palace halls", ar: "قاعات القصور" },
  { fr: "Salons traditionnels et modernes", en: "Traditional and modern living rooms", ar: "غرف المعيشة التقليدية والحديثة" },
];

const USAGE_LIVING = [
  { fr: "Pièces de vie principales", en: "Main living rooms", ar: "غرف المعيشة الرئيسية" },
  { fr: "Cuisines et circulations", en: "Kitchens and corridors", ar: "المطابخ والممرات" },
  { fr: "Bâtiments tertiaires", en: "Office and tertiary buildings", ar: "المباني التجارية والإدارية" },
];

const USAGE_POROUS = [
  { fr: "Fonds poreux", en: "Porous surfaces", ar: "الأسطح المسامية" },
  { fr: "Plaques de plâtre", en: "Plasterboards", ar: "ألواح الجبس" },
  { fr: "Supports neufs absorbants", en: "New absorbent surfaces", ar: "الأسطح الجديدة الماصة" },
];

const USAGE_SMOOTHING = [
  { fr: "Rembouchage et lissage", en: "Filling and smoothing", ar: "الحشو والتسوية" },
  { fr: "Préparation des murs intérieurs/extérieurs", en: "Interior/exterior wall preparation", ar: "تحضير الجدران الداخلية/الخارجية" },
];

const USAGE_HUMID = [
  { fr: "Caves et parkings", en: "Basements and car parks", ar: "الأقبية ومواقف السيارات" },
  { fr: "Terrasses d'étanchéité", en: "Waterproofed terraces", ar: "الأسطح المعالجة للعزل" },
  { fr: "Zones humides et joints", en: "Wet areas and joints", ar: "المناطق الرطبة والمفاصل" },
];

const USAGE_WOODWORK = [
  { fr: "Menuiseries et boiseries", en: "Joinery and woodwork", ar: "النجارة والأعمال الخشبية" },
  { fr: "Bardages extérieurs", en: "Exterior cladding", ar: "الكسوة الخارجية" },
  { fr: "Finitions de prestige", en: "Premium finishes", ar: "التشطيبات الراقية" },
];

const OUTILS_STANDARD = {
  fr: "Rouleau polyuréthane, brosse dure, pistolet pneumatique.",
  en: "Polyurethane roller, hard brush, pneumatic spray gun.",
  ar: "رول البولي يوريثان، الفرشاة الصلبة، مسدس الرش الهوائي."
};

const OUTILS_ROLLER_BRUSH = {
  fr: "Rouleau ou brosse",
  en: "Roller or brush",
  ar: "رول أو فرشاة"
};

const OUTILS_VARNISH_BRUSH = {
  fr: "Pinceau vernis à poils fins, rouleau laqueur.",
  en: "Fine-bristle varnish brush, lacquer roller.",
  ar: "فرشاة الورنيش ذات الشعر الناعم، رول اللكيه."
};

// ─── Products Database ────────────────────────────────────────────────────────
export const PRODUCTS_DB: Product[] = [
  // ==================== INTÉRIEUR - DÉCO ====================
  {
    id: "int-chromia",
    name: "CHROMIA",
    pdfUrl: "/fiches/chromia.pdf",
    VideoUrl: "https://youtu.be/yGT2wmVdEJc?si=TL4cM4EKpDtAbpTs",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Effet nacré",
    description: {
      fr: "Peinture décorative haut de gamme à effet velours mat soyeux qui magnifie l'éclairage intérieur.",
      en: "High-end decorative paint with a silky matte velvet effect that enhances interior lighting.",
      ar: "طلاء ديكوري راقٍ بتأثير المخمل الحريري المطفأ الذي يُبرز الإضاءة الداخلية."
    },
    coverage: "4 m²/Kg par couche",
    coverageMultiplier: 4,
    features: [
      { fr: "Bon pouvoir couvrant.", en: "Good covering power.", ar: "قدرة تغطية جيدة." },
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" }
    ],
    dryingTime: "Hors poussières: 1H, Recouvrable : 4H",
    finishes: ["Marbré", "satiné"],
    image: "/images/Chromia.png",
    fallbackImage: "/src/assets/images/Chromia.png",
    dilution: "5 à 10 % avec d'eau à 25 °C",
    density: "1.6 ± 0.05 kg/l",
    cov: "Faible Cov",
    outils: { fr: "Taloche inox ou couteau à enduire.", en: "Stainless steel trowel or plastering knife.", ar: "مالج الفولاذ المقاوم للصدأ أو سكين البطانة." },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "CHROMIA est une peinture décorative écologique, offrant un aspect unique grâce à sa capacité à refléter la lumière sous tous les angles, apportant ainsi une touche élégante et lumineuse. Idéale pour créer une ambiance douce et raffinée.",
      en: "CHROMIA is an ecological decorative paint offering a unique look thanks to its ability to reflect light from all angles, bringing an elegant and luminous touch. Ideal for creating a soft and refined atmosphere.",
      ar: "كروميا طلاء ديكوري بيئي يمنح مظهراً فريداً بفضل قدرته على عكس الضوء من جميع الزوايا، مما يضفي لمسة أنيقة ومضيئة. مثالي لخلق أجواء ناعمة وراقية."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-cira-mineralia",
    name: "CIRA MINERALIA",
    pdfUrl: "/fiches/CiraMineralia.pdf",
    VideoUrl: "https://youtu.be/yGT2wmVdEJc?si=TL4cM4EKpDtAbpTs",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Tadelakt",
    description: {
      fr: "Vernis acrylique en phase aqueuse, d'aspect nacré et mat, conçu pour la protection et la décoration des produits décoratifs.",
      en: "Water-based acrylic varnish with a pearlescent and matte finish, designed for the protection and decoration of decorative products.",
      ar: "ورنيش أكريليك على أساس مائي بمظهر لؤلؤي ومطفأ، مصمم لحماية وزخرفة منتجات الديكور."
    },
    coverage: "12 à 14 m²/Kg selon la porosité du support.",
    coverageMultiplier: 13,
    dryingTime: "Sec : 2h, Hors poussière : 1H",
    finishes: ["Mat", "Nacré"],
    features: [
      { fr: "Sans odeur", en: "Odourless", ar: "بدون رائحة" },
      { fr: "Très facile à appliquer.", en: "Very easy to apply.", ar: "سهل التطبيق جداً." },
      { fr: "Disponible en mate et nacré", en: "Available in matte and pearlescent", ar: "متوفر بالمطفأ واللؤلؤي" }
    ],
    image: "/images/CiraMineralia.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% max.",
    density: "110 ± 5 KU à 25°C.",
    cov: "Faible Cov",
    outils: { fr: "Éponge", en: "Sponge", ar: "إسفنجة" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Vernis acrylique en phase aqueuse, d'aspect nacré et mat, conçu pour la protection et la décoration des produits décoratifs : Minéralia.",
      en: "Water-based acrylic varnish with a pearlescent and matte finish, designed for the protection and decoration of decorative products: Minéralia.",
      ar: "ورنيش أكريليك على أساس مائي بمظهر لؤلؤي ومطفأ، مصمم لحماية وزخرفة منتجات الديكور: ميناراليا."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-fluorina",
    name: "FLUORINA",
    pdfUrl: "/fiches/Fluorina.pdf",
    VideoUrl: "https://youtu.be/yGT2wmVdEJc?si=TL4cM4EKpDtAbpTs",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Sablé Nacré",
    description: {
      fr: "Peinture décorative écologique de prestige en phase aqueuse à effet sablé nacré, conçue spécialement pour la haute décoration des espaces intérieurs.",
      en: "Prestigious ecological decorative paint in water phase with a pearlescent sandy effect, specially designed for high-end interior decoration.",
      ar: "طلاء ديكوري بيئي راقٍ على أساس مائي بتأثير رملي لؤلؤي، مصمم خصيصاً للديكور الراقي للمساحات الداخلية."
    },
    coverage: "5-6 m²/Kg par couche",
    coverageMultiplier: 5.5,
    dryingTime: "Sec : 3H, Hors Poussière : 1h",
    finishes: ["Sablé Nacré"],
    features: [
      { fr: "Bon pouvoir couvrant", en: "Good covering power", ar: "قدرة تغطية جيدة" },
      { fr: "Peinture lessivable", en: "Washable paint", ar: "طلاء قابل للغسيل" }
    ],
    image: "/images/Fluorina.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% à 10% max.",
    density: "650 ± 50 POISE à 25°C",
    cov: "Faible cov",
    outils: { fr: "Brosse, Spalter", en: "Brush, Spalter", ar: "فرشاة، سبالتر" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "FLUORINA est un revêtement décoratif écologique pour intérieurs composé de charges métalliques et d'agrégats de quartz sélectionnés qui produisent des effets visuels haut de gamme et créent un jeu unique de lumière et d'ombres.",
      en: "FLUORINA is an ecological decorative coating for interiors composed of metallic fillers and selected quartz aggregates that produce high-end visual effects and create a unique interplay of light and shadows.",
      ar: "فلورينا طبقة طلاء ديكورية بيئية للمساحات الداخلية مكونة من حشوات معدنية وركام الكوارتز المختار التي تنتج تأثيرات بصرية راقية وتخلق لعبة فريدة من الضوء والظلال."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-vega-star",
    name: "VEGA STAR",
    pdfUrl: "/fiches/VegaStar.pdf",
    VideoUrl: "https://youtu.be/yGT2wmVdEJc?si=TL4cM4EKpDtAbpTs",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Nacré",
    description: {
      fr: "Peinture décorative écologique, conçue spécialement pour la haute décoration des espaces en intérieur, donnant un effet nacré, étincelant et luminescent grâce à sa pigmentation métallisée ultra fine.",
      en: "Ecological decorative paint specially designed for high-end interior decoration, giving a pearlescent, sparkling and luminescent effect thanks to its ultra-fine metallic pigmentation.",
      ar: "طلاء ديكوري بيئي مصمم خصيصاً للديكور الراقي للمساحات الداخلية، يمنح تأثيراً لؤلؤياً لامعاً ومضيئاً بفضل صبغته المعدنية الدقيقة للغاية."
    },
    coverage: " 4 m²/Kg par couche",
    coverageMultiplier: 4,
    dryingTime: "Recouvrable : 4h, Hors Poussière : 1h",
    finishes: ["Nacré", "métalisé"],
    features: [
      { fr: "Bon pouvoir couvrant", en: "Good covering power", ar: "قدرة تغطية جيدة" },
      { fr: "Peinture lessivable", en: "Washable paint", ar: "طلاء قابل للغسيل" }
    ],
    image: "/images/VegaStar.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% à 10% max.",
    density: "800 ± 100 poises à 25°C",
    cov: "Faible cov",
    outils: { fr: "Pistolet rouleau, Taloche plastique, Spatule", en: "Spray gun, plastic trowel, spatula", ar: "مسدس الرش، مالج البلاستيك، مكشطة" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Découvrez l'élégance intemporelle de la peinture décorative haut de gamme VEGA STAR. Conçue pour sublimer vos intérieurs, VEGA STAR allie une qualité exceptionnelle, une palette de couleurs raffinée et des finitions soignées. Chaque teinte est méticuleusement sélectionnée pour créer des ambiances uniques et durables.",
      en: "Discover the timeless elegance of VEGA STAR premium decorative paint. Designed to enhance your interiors, VEGA STAR combines exceptional quality, a refined colour palette and careful finishes. Each shade is meticulously selected to create unique and lasting atmospheres.",
      ar: "اكتشف الأناقة الخالدة لطلاء VEGA STAR الديكوري الراقي. مصمم لتجميل مساحاتك الداخلية، يجمع VEGA STAR بين الجودة الاستثنائية ولوحة ألوان راقية وتشطيبات مدروسة. كل لون مختار بعناية لخلق أجواء فريدة ودائمة."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-beton-a-cire",
    name: "BÉTON À CIRÉ",
    pdfUrl: "/fiches/BetonACire.pdf",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Effet Ciment",
    description: {
      fr: "Un mortier monocomposant en poudre à base de ciment, de granulats de marbre et de silice, de résines synthétiques et d'additifs spéciaux.",
      en: "A single-component powder mortar based on cement, marble and silica aggregates, synthetic resins and special additives.",
      ar: "ملاط أحادي المكون على شكل مسحوق مصنوع من الأسمنت وركام الرخام والسيليكا والراتنجات الاصطناعية والإضافات الخاصة."
    },
    coverage: " 2-4 m²/Kg par couche",
    coverageMultiplier: 3,
    dryingTime: "Hors Poussière : 1H, Recouvrable : 12H",
    finishes: ["Lisse", "Minéral"],
    features: [
      { fr: "Rendement élevé", en: "High yield", ar: "مردودية عالية" },
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Très bonne adhérence", en: "Very good adhesion", ar: "التصاق ممتاز" }
    ],
    image: "/images/BetonCire.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 20% à 25% max.",
    density: "-",
    cov: "Faible cov",
    outils: { fr: "Lisseuse en inox, platoir inox", en: "Stainless steel smoother, stainless steel trowel", ar: "مكواة الفولاذ المقاوم للصدأ، مالج الفولاذ المقاوم للصدأ" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Un mortier monocomposant en poudre à base de ciment, de granulats de marbre et de silice, de résines synthétiques et d'additifs spéciaux qui réduisent l'absorption et la perméabilité de l'eau et lui confèrent une maniabilité et une docilité optimales pour son application, ainsi que des propriétés mécaniques, d'abrasion, d'adhérence et de résistance élevées.",
      en: "A single-component powder mortar based on cement, marble and silica aggregates, synthetic resins and special additives that reduce water absorption and permeability, providing optimal workability and high mechanical, abrasion, adhesion and resistance properties.",
      ar: "ملاط أحادي المكون على شكل مسحوق مصنوع من الأسمنت وركام الرخام والسيليكا والراتنجات الاصطناعية والإضافات الخاصة التي تقلل من امتصاص الماء ونفاذيته، مما يمنحه سهولة عمل ومرونة مثلى عند التطبيق، فضلاً عن خصائص ميكانيكية ومقاومة للتآكل والالتصاق والمقاومة عالية."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-onyx",
    name: "ONYX",
    pdfUrl: "/fiches/Onyx.pdf",
    VideoUrl: "https://youtu.be/yGT2wmVdEJc?si=TL4cM4EKpDtAbpTs",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Marbré",
    description: {
      fr: "Peinture décorative écologique pour intérieur à aspect marbré et brillant.",
      en: "Ecological decorative paint for interiors with a marbled and shiny finish.",
      ar: "طلاء ديكوري بيئي للمساحات الداخلية بمظهر رخامي ولامع."
    },
    coverage: "4 m²/Kg par couche",
    coverageMultiplier: 4,
    dryingTime: "Hors Poussière: 1H, Recouvrable : 4H",
    finishes: ["Satiné", "Marbré"],
    features: [
      { fr: "Bon pouvoir couvrant", en: "Good covering power", ar: "قدرة تغطية جيدة" },
      { fr: "Blancheur très élevée", en: "Very high whiteness", ar: "بياض عالٍ جداً" },
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" }
    ],
    image: "/images/Onyx.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% à 10% max.",
    density: "1400 ± 200 POISE à 25°C",
    cov: "Faible cov",
    outils: { fr: "Taloche inox, couteau à enduire", en: "Stainless steel trowel, plastering knife", ar: "مالج الفولاذ المقاوم للصدأ، سكين البطانة" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "ONYX est une peinture décorative en phase aqueuse qui a un aspect marbré et brillant à l'ancienne. Convient à tous les espaces intérieurs.",
      en: "ONYX is a water-based decorative paint with an old-fashioned marbled and shiny finish. Suitable for all interior spaces.",
      ar: "أونيكس طلاء ديكوري على أساس مائي بمظهر رخامي ولامع على الطراز القديم. مناسب لجميع المساحات الداخلية."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-prisma-cire",
    name: "PRISMA CIRE",
    pdfUrl: "/fiches/PrismaCire.pdf",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Cire de Protection",
    description: {
      fr: "Cire à base d'eau particulièrement recommandée pour la protection et l'amélioration de la brillance des stucs comme ONYX.",
      en: "Water-based wax particularly recommended for the protection and improvement of the shine of stuccos such as ONYX.",
      ar: "شمع على أساس مائي موصى به بشكل خاص لحماية وتحسين لمعان الجص كـ ONYX."
    },
    coverage: "10-12 m²/Kg par couche",
    coverageMultiplier: 11,
    dryingTime: "Sec : 24h",
    finishes: ["Brillant"],
    features: [
      { fr: "Très bonne propriété hydrofuge", en: "Very good water-repellent property", ar: "خاصية طاردة للماء ممتازة" },
      { fr: "Rendement élevé", en: "High yield", ar: "مردودية عالية" },
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Très bonne adhérence", en: "Very good adhesion", ar: "التصاق ممتاز" }
    ],
    image: "/images/Vide.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% à 10% max.",
    density: "1 ± 0.05 Kg/L à 25°C",
    cov: "Faible cov",
    outils: { fr: "Éponge", en: "Sponge", ar: "إسفنجة" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Une cire à base d'eau particulièrement recommandée pour la protection et l'amélioration de la brillance des stucs comme ONYX.",
      en: "A water-based wax particularly recommended for the protection and improvement of the shine of stuccos such as ONYX.",
      ar: "شمع على أساس مائي موصى به بشكل خاص لحماية وتحسين لمعان الجص مثل ONYX."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-iridium",
    name: "IRIDIUM",
    pdfUrl: "/fiches/Iridium.pdf",
    VideoUrl: "https://youtu.be/yGT2wmVdEJc?si=TL4cM4EKpDtAbpTs",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Nacré , métallisé",
    description: {
      fr: "Une peinture décorative écologique de prestige en phase aqueuse, conçue spécialement pour la haute décoration des espaces intérieurs. Ses ramages décoratifs ainsi que son aspect moiré nacré.",
      en: "A prestigious ecological decorative paint in water phase, specially designed for high-end interior decoration. Its decorative patterns and pearlescent moiré effect.",
      ar: "طلاء ديكوري بيئي راقٍ على أساس مائي، مصمم خصيصاً للديكور الراقي للمساحات الداخلية. أنماطه الزخرفية وتأثيره اللؤلؤي المموج."
    },
    coverage: "4-5 m²/Kg par couche",
    coverageMultiplier: 4.5,
    dryingTime: "Hors Poussière: 1H, Recouvrable : 4H",
    finishes: ["Nacré", "métalisé"],
    features: [
      { fr: "Bon pouvoir couvrant", en: "Good covering power", ar: "قدرة تغطية جيدة" },
      { fr: "Peinture lessivable", en: "Washable paint", ar: "طلاء قابل للغسيل" }
    ],
    image: "/images/Iridium.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% à 10% max.",
    density: "140 ± 5 KU à 25°C",
    cov: "Faible cov",
    outils: { fr: "Spatule, Taloche plastique", en: "Spatula, plastic trowel", ar: "مكشطة، مالج بلاستيك" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "IRIDIUM est une peinture décorative écologique, caractérisée par un effet nacré subtil et un toucher soyeux. Elle allie esthétisme et performance pour embellir les espaces intérieurs. Facile à appliquer, elle apporte une touche élégante et moderne.",
      en: "IRIDIUM is an ecological decorative paint, characterized by a subtle pearlescent effect and a silky touch. It combines aesthetics and performance to beautify interior spaces. Easy to apply, it brings an elegant and modern touch.",
      ar: "إيريديوم طلاء ديكوري بيئي يتميز بتأثير لؤلؤي رقيق وملمس حريري. يجمع بين الجماليات والأداء لتجميل المساحات الداخلية. سهل التطبيق، يضفي لمسة أنيقة وعصرية."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-mineralia",
    name: "MINERALIA",
    pdfUrl: "/fiches/Mineralia.pdf",
    VideoUrl: "https://youtu.be/yGT2wmVdEJc?si=TL4cM4EKpDtAbpTs",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Tadelakt",
    description: {
      fr: "Une peinture décorative minérale à base de chaux pour intérieurs, à appliquer sur différents supports ; enduits en plâtre et matériaux dérivés du plâtre, enduits au mortier de liants hydrauliques, parements de béton.",
      en: "A mineral lime-based decorative paint for interiors, to be applied on various surfaces; plaster coatings and plaster-derived materials, hydraulic binder mortar coatings, concrete cladding.",
      ar: "طلاء ديكوري معدني على أساس الجير للمساحات الداخلية، يُطبق على أسطح مختلفة؛ طبقات الجبس والمواد المشتقة منه، طبقات ملاط الرابطات الهيدروليكية، كسوة الخرسانة."
    },
    coverage: "2-3 m²/Kg par couche",
    coverageMultiplier: 2.5,
    dryingTime: "Hors Poussière :1h, Recouvrable : 4h",
    finishes: ["Nacré", "mate"],
    features: [
      { fr: "Aspect mat ou nacré selon l'effet réalisé", en: "Matte or pearlescent finish depending on the effect achieved", ar: "مظهر مطفأ أو لؤلؤي حسب التأثير المُنجز" },
      { fr: "Pouvoir couvrant et garnissant élevé", en: "High covering and filling power", ar: "قدرة تغطية وحشو عالية" }
    ],
    image: "/images/Mineralia.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% à 10% max.",
    density: "1.65 ± 0.05 Kg/L à 25°C",
    cov: "Faible cov",
    outils: { fr: "Platoir inox", en: "Stainless steel trowel", ar: "مالج الفولاذ المقاوم للصدأ" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "MINERALIA est une peinture décorative écologique inspirée du Tadelakt, un revêtement traditionnel marocain à base de chaux et de pigments naturels. Elle confère brillance et douceur aux surfaces, et est particulièrement prisée dans les hammams, les salons. MINERALIA se termine par une couche de vernis ou de Prisma cire pour améliorer sa résistance et sa durabilité.",
      en: "MINERALIA is an ecological decorative paint inspired by Tadelakt, a traditional Moroccan coating based on lime and natural pigments. It gives surfaces shine and smoothness, and is particularly prized in hammams and living rooms. MINERALIA is finished with a coat of varnish or Prisma wax to improve its resistance and durability.",
      ar: "ميناراليا طلاء ديكوري بيئي مستوحى من التادلاكت، وهو طبقة تقليدية مغربية على أساس الجير والأصباغ الطبيعية. يمنح الأسطح لمعاناً ونعومة، ومحبوب بشكل خاص في الحمامات والصالونات. يُنهى ميناراليا بطبقة ورنيش أو شمع بريسما لتحسين مقاومته ومتانته."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-prisma-teinte",
    name: "PRISMA TEINTE",
    pdfUrl: "/fiches/PrismaTeinte.pdf",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Colorant Universel",
    description: {
      fr: "Système de colorants universels à haute concentration pour teinter et personnaliser avec précision toutes les bases acryliques.",
      en: "High-concentration universal colourant system for precisely tinting and customising all acrylic bases.",
      ar: "نظام ملونات عالمية عالي التركيز لتلوين وتخصيص جميع القواعد الأكريليكية بدقة."
    },
    coverage: "-",
    coverageMultiplier: 1,
    dryingTime: "-",
    finishes: ["-"],
    features: [
      { fr: "Pigments minéraux inaltérables", en: "Unalterable mineral pigments", ar: "أصباغ معدنية ثابتة" },
      { fr: "Compatibilité totale assurée", en: "Total compatibility guaranteed", ar: "توافق كامل مضمون" },
      { fr: "Stabilité absolue de la couleur", en: "Absolute colour stability", ar: "ثبات مطلق للون" },
      { fr: "Formule super-concentrée", en: "Super-concentrated formula", ar: "تركيبة فائقة التركيز" }
    ],
    image: "/src/assets/images/regenerated_image_1780776524454.jpg",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% max.",
    density: "-",
    cov: "Faible cov",
    outils: { fr: "-", en: "-", ar: "-" },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Système de colorants universels à haute concentration pour teinter et personnaliser avec précision toutes les bases acryliques. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "High-concentration universal colourant system for precisely tinting and customising all acrylic bases. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "نظام ملونات عالمية عالي التركيز لتلوين وتخصيص جميع القواعد الأكريليكية بدقة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "int-prisma-lux",
    name: "PRISMA LUX",
    pdfUrl: "/fiches/PrismaLux.pdf",
    category: "interior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco", en: "Décor Range", ar: "تشكيلة الديكور" },
    tag: "Laque Brillante Prestige",
    description: {
      fr: "Concentré métallisé décoratif en phase aqueuse, pour métal, plâtre, bois et béton.",
      en: "Decorative metallic concentrate in water phase, for metal, plaster, wood and concrete.",
      ar: "مركز معدني ديكوري على أساس مائي، للمعدن والجبس والخشب والخرسانة."
    },
    coverage: "10-12 m²/Kg par couche",
    coverageMultiplier: 11,
    dryingTime: "Sec : 2h, Hors Poussière : 30 min",
    finishes: ["Nacré", "Doré", "Argenté", "Bronze"],
    features: [
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Très faible odeur.", en: "Very low odour.", ar: "رائحة منخفضة جداً." }
    ],
    image: "/images/PrismaLux.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi.",
    density: "1,12 ± 0.05 Kg/L",
    cov: "Faible cov",
    outils: { fr: "Pinceau, Pistolet et Rouleau.", en: "Brush, spray gun and roller.", ar: "فرشاة، مسدس رش ورول." },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Un concentré métallisé décoratif en phase aqueuse, pour métal, plâtre, bois et béton. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "A decorative metallic concentrate in water phase, for metal, plaster, wood and concrete. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "مركز معدني ديكوري على أساس مائي، للمعدن والجبس والخشب والخرسانة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_ACCENT,
  },

  // ==================== INTÉRIEUR - IMPRESSION ====================
  {
    id: "int-prisma-prim-extra",
    name: "PRISMA PRIM EXTRA",
    pdfUrl: "/fiches/PrismaPrim.pdf",
    category: "interior",
    subCategory: "IMPRESSION",
    line: { fr: "Gamme Impression", en: "Primer Range", ar: "تشكيلة الطلاء الأساسي" },
    tag: "Satiné",
    description: {
      fr: "Une impression universelle écologique transparente en phase aqueuse, conçue pour l'imperméabilisation et la protection des supports de maçonnerie, de bois et de plâtre.",
      en: "A transparent ecological universal primer in water phase, designed for waterproofing and protecting masonry, wood and plaster surfaces.",
      ar: "طلاء أساسي شفاف بيئي عالمي على أساس مائي، مصمم لعزل وحماية أسطح البناء والخشب والجبس."
    },
    coverage: "10-12 m²/Kg par couche",
    coverageMultiplier: 11,
    dryingTime: "Hors Poussière : 1h, Sec : 1H 30 min",
    finishes: ["Satiné"],
    features: [
      { fr: "Très bonne propriété hydrofuge", en: "Very good water-repellent property", ar: "خاصية طاردة للماء ممتازة" },
      { fr: "Rendement élevé", en: "High yield", ar: "مردودية عالية" },
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Très bonne adhérence", en: "Very good adhesion", ar: "التصاق ممتاز" }
    ],
    image: "/images/PrismaPrimExtra.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: " 5% à 10 % avec de l'eau à 25 °C.",
    density: "1 ± 0.05 Kg/L",
    cov: "Faible cov",
    outils: OUTILS_ROLLER_BRUSH,
    preparation: PREP_PRIMER,
    longDescription: {
      fr: "Une impression universelle écologique transparente en phase aqueuse, conçue pour l'imperméabilisation et la protection des supports de maçonnerie, de bois et de plâtre.",
      en: "A transparent ecological universal primer in water phase, designed for waterproofing and protecting masonry, wood and plaster surfaces.",
      ar: "طلاء أساسي شفاف بيئي عالمي على أساس مائي، مصمم لعزل وحماية أسطح البناء والخشب والجبس."
    },
    usage: USAGE_POROUS,
  },
  {
    id: "int-prisma-blanc-fix",
    name: "PRISMA BLANC FIX",
    pdfUrl: "/fiches/PrismaBlancFix.pdf",
    category: "interior",
    subCategory: "IMPRESSION",
    line: { fr: "Gamme Impression", en: "Primer Range", ar: "تشكيلة الطلاء الأساسي" },
    tag: "Accrochage et Blocage de Pores",
    description: {
      fr: "Une impression écologique pigmentée en phase aqueuse, conçue pour le blocage des pores et l'accrochage des finitions sur le support.",
      en: "A pigmented ecological water-based primer designed for pore blocking and adhesion of finishes to the surface.",
      ar: "طلاء أساسي مصبوغ بيئي على أساس مائي، مصمم لسد المسام والتصاق الطبقات النهائية بالسطح."
    },
    coverage: "10-12 m²/Kg par couche",
    coverageMultiplier: 11,
    dryingTime: "Sec : 1h, Recouvrable : 3h, Hors Poussière : 30 min",
    finishes: ["Satiné"],
    features: [
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Très bonne adhérence", en: "Very good adhesion", ar: "التصاق ممتاز" },
      { fr: "Rendement élevé", en: "High yield", ar: "مردودية عالية" }
    ],
    image: "/images/BlancFixe.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "Eau claire : 10% à 15% pour pénétration optimale.",
    density: "1 ± 0.05 Kg/L",
    cov: "Faible cov",
    outils: OUTILS_ROLLER_BRUSH,
    preparation: PREP_PRIMER,
    longDescription: {
      fr: "Une impression écologique pigmentée en phase aqueuse, conçue pour le blocage des pores et l'accrochage des finitions sur le support.",
      en: "A pigmented ecological water-based primer designed for pore blocking and adhesion of finishes to the surface.",
      ar: "طلاء أساسي مصبوغ بيئي على أساس مائي، مصمم لسد المسام والتصاق الطبقات النهائية بالسطح."
    },
    usage: USAGE_POROUS,
  },
  {
    id: "int-prisma-fondo",
    name: "PRISMA FONDO",
    pdfUrl: "/fiches/PrismaFondo.pdf",
    category: "interior",
    subCategory: "IMPRESSION",
    line: { fr: "Gamme Impression", en: "Primer Range", ar: "تشكيلة الطلاء الأساسي" },
    tag: "Primaire Texturé",
    description: {
      fr: "Sous-couche d'accroche grainée ou micro-sablée, indispensable pour la dépose mécanique des enduits à effets décoratifs.",
      en: "Grained or micro-sanded adhesion undercoat, essential for the mechanical application of decorative effect coatings.",
      ar: "طبقة تحضيرية مخشنة أو مصنفرة، ضرورية للتطبيق الميكانيكي لطبقات التأثيرات الديكورية."
    },
    coverage: "9-11 m²/L par couche",
    coverageMultiplier: 10,
    dryingTime: "Sec au toucher : 1h, Recouvrable : 4h",
    finishes: ["Opale Mat"],
    features: [
      { fr: "Crée une accroche rugueuse", en: "Creates a rough adhesion surface", ar: "يخلق سطح تثبيت خشن" },
      { fr: "Facilite l'application sur plâtre", en: "Facilitates application on plaster", ar: "يسهل التطبيق على الجبس" },
      { fr: "Empêche le glissement d'enduit", en: "Prevents coating slippage", ar: "يمنع انزلاق البطانة" },
      { fr: "Haute teneur en charges solides", en: "High solid content", ar: "محتوى عالٍ من الحشوات الصلبة" }
    ],
    image: "/images/PrismaFondo.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "Eau claire : 10% à 15% pour pénétration optimale.",
    density: "1.49 ± 0.05 g/cm³",
    cov: "< 5 g/L (Haute performance écologique)",
    outils: { fr: "Rouleau microfibre 12mm, brosse, pistolet Airless.", en: "12mm microfibre roller, brush, Airless gun.", ar: "رول الميكروفايبر 12 مم، فرشاة، مسدس Airless." },
    preparation: PREP_PRIMER,
    longDescription: {
      fr: "Sous-couche d'accroche grainée ou micro-sablée, indispensable pour la dépose mécanique des enduits à effets décoratifs. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Grained or micro-sanded adhesion undercoat, essential for the mechanical application of decorative effect coatings. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طبقة تحضيرية مخشنة أو مصنفرة، ضرورية للتطبيق الميكانيكي لطبقات التأثيرات الديكورية. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_POROUS,
  },

  // ==================== INTÉRIEUR - ENDUIT ====================
  {
    id: "int-prisma-pate",
    name: "PRISMA PATE",
    pdfUrl: "/fiches/PrismaPate.pdf",
    category: "interior",
    subCategory: "ENDUIT",
    line: { fr: "Gamme Enduits", en: "Coating Range", ar: "تشكيلة البطانة" },
    tag: "Enduit",
    description: {
      fr: "Un enduit vinylique en pâte, prêt à l'emploi, conçu pour égaliser les supports en ciment ou plâtre et rattraper les irrégularités de surface.",
      en: "A ready-to-use vinyl paste coating designed to level cement or plaster surfaces and correct surface irregularities.",
      ar: "بطانة فينيل على شكل معجون، جاهزة للاستخدام، مصممة لتسوية أسطح الأسمنت أو الجبس وتصحيح عدم انتظام السطح."
    },
    coverage: "2-4 m²/kg",
    coverageMultiplier: 3,
    dryingTime: "Hors poussière : 1h, Recouvrable : 6h",
    finishes: ["Mate"],
    features: [
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Grand pouvoir garnissant", en: "High filling power", ar: "قوة حشو كبيرة" },
      { fr: "Très bonne adhérence", en: "Very good adhesion", ar: "التصاق ممتاز" },
      { fr: "Pas de frisage", en: "No shrinkage", ar: "لا تقلص" },
      { fr: "Facile à poncer", en: "Easy to sand", ar: "سهل الصنفرة" }
    ],
    image: "/images/PrismaPate.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "5% à 10% avec de l'eau à 25 °C.",
    density: "1.80 ± 0.05 g/cm³",
    cov: "Faible cov",
    outils: { fr: "Lame à enduire, platoir en acier inoxydable.", en: "Coating blade, stainless steel trowel.", ar: "شفرة البطانة، مالج الفولاذ المقاوم للصدأ." },
    preparation: PREP_CLEAN_CRACKS,
    longDescription: {
      fr: "Un enduit vinylique en pâte, prêt à l'emploi, conçu pour égaliser les supports en ciment ou plâtre et rattraper les irrégularités de surface.",
      en: "A ready-to-use vinyl paste coating designed to level cement or plaster surfaces and correct surface irregularities.",
      ar: "بطانة فينيل على شكل معجون، جاهزة للاستخدام، مصممة لتسوية أسطح الأسمنت أو الجبس وتصحيح عدم انتظام السطح."
    },
    usage: USAGE_SMOOTHING,
  },
  {
    id: "int-prisma-pret",
    name: "PRISMA PRET",
    pdfUrl: "/fiches/PrismaPret.pdf",
    category: "interior",
    subCategory: "ENDUIT",
    line: { fr: "Gamme Enduits", en: "Coating Range", ar: "تشكيلة البطانة" },
    tag: "Lissage des supports",
    description: {
      fr: "Un enduit en poudre d'intérieur très garnissant recommandé pour le lissage des supports en ciments.",
      en: "A highly filling interior powder coating recommended for smoothing cement surfaces.",
      ar: "بطانة مسحوق داخلية عالية الحشو موصى بها لتسوية أسطح الأسمنت."
    },
    coverage: "pour enduisage 1 à 2 m²/kg, et pour ratissage 2 à 3 m²/kg",
    coverageMultiplier: 2,
    dryingTime: "Hors poussières : 1 H, Recouvrable : 12 H",
    finishes: ["Poudre"],
    features: [
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Grand pouvoir garnissant.", en: "High filling power.", ar: "قوة حشو كبيرة." },
      { fr: "Très bonne adhérence.", en: "Very good adhesion.", ar: "التصاق ممتاز." },
      { fr: "Pas de frisage.", en: "No shrinkage.", ar: "لا تقلص." },
      { fr: "Facile à poncer.", en: "Easy to sand.", ar: "سهل الصنفرة." }
    ],
    image: "/images/PrismaPret.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "20% à 25% avec de l'eau à 25 °C.",
    density: "-",
    cov: "Faible cov",
    outils: { fr: "Couteau à enduire, platoir en acier inoxydable.", en: "Coating knife, stainless steel trowel.", ar: "سكين البطانة، مالج الفولاذ المقاوم للصدأ." },
    preparation: PREP_CLEAN_CRACKS,
    longDescription: {
      fr: "Un enduit en poudre d'intérieur très garnissant recommandé pour le lissage des supports en ciments.",
      en: "A highly filling interior powder coating recommended for smoothing cement surfaces.",
      ar: "بطانة مسحوق داخلية عالية الحشو موصى بها لتسوية أسطح الأسمنت."
    },
    usage: USAGE_SMOOTHING,
  },
  {
    id: "int-prisma-stop",
    name: "PRISMA STOP",
    pdfUrl: "/fiches/PrismaStop.pdf",
    category: "interior",
    subCategory: "ENDUIT",
    line: { fr: "Gamme Enduits", en: "Coating Range", ar: "تشكيلة البطانة" },
    tag: "Lissage",
    description: {
      fr: "Un enduit en pâte conçu pour les travaux soignés en intérieur. Il rebouche et masque les aspérités de surface, donne lieu à une surface lisse permettant l'obtention des finitions.",
      en: "A paste coating designed for neat interior work. It fills and hides surface imperfections, resulting in a smooth surface for finishing.",
      ar: "بطانة معجون مصممة للأعمال الداخلية الدقيقة. تملأ وتخفي عيوب السطح، مما ينتج عنه سطح أملس للتشطيب."
    },
    coverage: "2-3kg/m² selon support",
    coverageMultiplier: 2.5,
    dryingTime: "Hors poussière : 1h, Recouvrable : 6h",
    finishes: ["Mate"],
    features: [
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Pas de frisage", en: "No shrinkage", ar: "لا تقلص" },
      { fr: "Bon garnissant", en: "Good filling", ar: "حشو جيد" },
      { fr: "Très bonne adhérence", en: "Very good adhesion", ar: "التصاق ممتاز" }
    ],
    image: "/images/PrismaStop.png",
    fallbackImage: "/images/PrismaStop.png?v=2",
    dilution: "Prêt à l'emploi",
    density: "1.90 ± 0.05 g/cm³",
    cov: "Faible cov",
    outils: { fr: "Lame à enduire, platoir en acier inoxydable.", en: "Coating blade, stainless steel trowel.", ar: "شفرة البطانة، مالج الفولاذ المقاوم للصدأ." },
    preparation: PREP_CLEAN_CRACKS,
    longDescription: {
      fr: "Un enduit en pâte conçu pour les travaux soignés en intérieur. Il rebouche et masque les aspérités de surface, donne lieu à une surface lisse permettant l'obtention des finitions.",
      en: "A paste coating designed for neat interior work. It fills and hides surface imperfections, resulting in a smooth surface for finishing.",
      ar: "بطانة معجون مصممة للأعمال الداخلية الدقيقة. تملأ وتخفي عيوب السطح، مما ينتج عنه سطح أملس للتشطيب."
    },
    usage: USAGE_SMOOTHING,
  },

  // ==================== INTÉRIEUR - VERNIS ====================
  {
    id: "int-prisma-pores",
    name: "PRISMA PORES",
    pdfUrl: "/fiches/PrismaPores.pdf",
    category: "interior",
    subCategory: "VERNIS",
    line: { fr: "Gamme Vernis", en: "Varnish Range", ar: "تشكيلة الورنيش" },
    tag: "surfaceur pour le bois",
    description: {
      fr: "Un surfaceur pour le bois, il remplit les pores et donne après égrenage une surface lisse qui facilite l'application de la finition.",
      en: "A wood surfacer that fills the pores and, after sanding, gives a smooth surface that facilitates the application of the finish.",
      ar: "طلاء معالجة سطح الخشب، يملأ المسام ويعطي بعد الصنفرة سطحاً ناعماً يسهل تطبيق الطبقة النهائية."
    },
    coverage: "12-14 m²/L par couche",
    coverageMultiplier: 13,
    dryingTime: "Hors poussière : 30min, Sec : 4h",
    finishes: ["Satiné"],
    features: [
      { fr: "Très facile à appliquer.", en: "Very easy to apply.", ar: "سهل التطبيق جداً." },
      { fr: "Rendement élevé.", en: "High yield.", ar: "مردودية عالية." }
    ],
    image: "/images/PrismaPores.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "5 à 30% avec de l'eau à 25 °C.",
    density: "1.03 ± 0.05 Kg/L",
    cov: "Faible cov",
    outils: { fr: "Pinceau ou pistolet", en: "Brush or spray gun", ar: "فرشاة أو مسدس رش" },
    preparation: PREP_SANDING,
    longDescription: {
      fr: "Un surfaceur pour le bois, il remplit les pores et donne après égrenage une surface lisse qui facilite l'application de la finition.",
      en: "A wood surfacer that fills the pores and, after sanding, gives a smooth surface that facilitates the application of the finish.",
      ar: "طلاء معالجة سطح الخشب، يملأ المسام ويعطي بعد الصنفرة سطحاً ناعماً يسهل تطبيق الطبقة النهائية."
    },
    usage: USAGE_WOODWORK,
  },
  {
    id: "int-prisma-wood",
    name: "PRISMA WOOD",
    pdfUrl: "/fiches/PrismaWood.pdf",
    category: "interior",
    subCategory: "VERNIS",
    line: { fr: "Gamme Vernis", en: "Varnish Range", ar: "تشكيلة الورنيش" },
    tag: "Polyuréthane Ultra-Dureté",
    description: {
      fr: "Vernis polyuréthane monocomposant brillant formulé pour la vitrification des parquets, escaliers et tables d'art.",
      en: "Single-component glossy polyurethane varnish formulated for the glazing of floors, staircases and art tables.",
      ar: "ورنيش بولي يوريثان أحادي المكون لامع مصمم لتزجيج الأرضيات والسلالم وطاولات الفن."
    },
    coverage: "10-12 m²/L par couche",
    coverageMultiplier: 11,
    dryingTime: "Sec au toucher : 3h, Recouvrable : 8h",
    finishes: ["Brillant Céleste", "Satiné Soyeux"],
    features: [
      { fr: "Résistance totale aux rayures", en: "Total scratch resistance", ar: "مقاومة كاملة للخدوش" },
      { fr: "Fini de haut poli mirifique", en: "High-gloss mirror finish", ar: "تشطيب مرآوي عالي اللمعان" },
      { fr: "Imperméabilité absolue aux liquides", en: "Absolute impermeability to liquids", ar: "عدم نفاذية مطلقة للسوائل" },
      { fr: "Anti-jaunissement renforcé", en: "Enhanced anti-yellowing", ar: "مقاومة معززة للاصفرار" }
    ],
    image: "/src/assets/images/regenerated_image_1780776530905.jpg",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Diluant synthétique ou eau à 5% selon la formulation.",
    density: "1.08 ± 0.05 g/cm³",
    cov: "< 25 g/L (Haute protection résine)",
    outils: OUTILS_VARNISH_BRUSH,
    preparation: PREP_SANDING,
    longDescription: {
      fr: "Vernis polyuréthane monocomposant brillant formulé pour la vitrification des parquets, escaliers et tables d'art. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Single-component glossy polyurethane varnish formulated for the glazing of floors, staircases and art tables. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "ورنيش بولي يوريثان أحادي المكون لامع مصمم لتزجيج الأرضيات والسلالم وطاولات الفن. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_WOODWORK,
  },

  // ==================== INTÉRIEUR - HYGIÈNE ====================
  {
    id: "int-peinture-antibacterienne",
    name: "PEINTURE ANTIBACTÉRIENNE",
    pdfUrl: "/fiches/PeintureAntibacterienne.pdf",
    category: "interior",
    subCategory: "HYGIÈNE",
    line: { fr: "Gamme Hygiène", en: "Hygiene Range", ar: "تشكيلة النظافة" },
    tag: "Ions d'Argent Actifs",
    description: {
      fr: "Peinture acrylique mate désinfectante, enrichie en ions d'argent détruisant les virus et bactéries au contact.",
      en: "Disinfecting matte acrylic paint, enriched with silver ions that destroy viruses and bacteria on contact.",
      ar: "طلاء أكريليك مطفأ مطهر، مخصب بأيونات الفضة التي تدمر الفيروسات والبكتيريا عند الاتصال."
    },
    coverage: "10-11 m²/L par couche",
    coverageMultiplier: 10.5,
    dryingTime: "Sec : 1.5h, Recouvrable : 6h",
    finishes: ["Velouté", "Satiné Hygiénique"],
    features: [
      { fr: "Protection active permanente 24h", en: "Permanent 24h active protection", ar: "حماية نشطة دائمة 24 ساعة" },
      { fr: "Résiste aux lavages désinfectants", en: "Resistant to disinfectant washing", ar: "مقاوم لعمليات الغسيل بالمطهرات" },
      { fr: "Certifié contact alimentaire", en: "Food contact certified", ar: "معتمد للاتصال بالغذاء" },
      { fr: "Idéal pour crèches et hôpitaux", en: "Ideal for nurseries and hospitals", ar: "مثالي لدور الحضانة والمستشفيات" }
    ],
    image: "/src/assets/images/regenerated_image_1780776530600.jpg",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Eau claire : 5% à 10% maximum.",
    density: "1.45 ± 0.05 g/cm³",
    cov: "< 8 g/L (Certifié anti-microbien)",
    outils: { fr: "Rouleau microfibre, brosse à rechampir.", en: "Microfibre roller, cutting-in brush.", ar: "رول الميكروفايبر، فرشاة التقطيع." },
    preparation: { fr: "Laver et désinfecter le support si présence antérieure de moisissures.", en: "Wash and disinfect the surface if there has been previous mould growth.", ar: "اغسل وعقم السطح إذا كان هناك نمو سابق للعفن." },
    longDescription: {
      fr: "Peinture acrylique mate désinfectante, enrichie en ions d'argent détruisant les virus et bactéries au contact. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Disinfecting matte acrylic paint, enriched with silver ions that destroy viruses and bacteria on contact. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء أكريليك مطفأ مطهر، مخصب بأيونات الفضة التي تدمر الفيروسات والبكتيريا عند الاتصال. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: [
      { fr: "Milieux hospitaliers", en: "Hospital environments", ar: "البيئات الاستشفائية" },
      { fr: "Chambres d'enfants", en: "Children's rooms", ar: "غرف الأطفال" },
      { fr: "Cuisines et crèches", en: "Kitchens and nurseries", ar: "المطابخ ودور الحضانة" },
    ],
  },

  // ==================== INTÉRIEUR - ACRYLIQUE ====================
  {
    id: "int-prisma-plast",
    name: "PRISMA PLAST",
    pdfUrl: "/fiches/PrismaPlast.pdf",
    category: "interior",
    subCategory: "ACRYLIQUE",
    line: { fr: "Gamme Acryliques", en: "Acrylic Range", ar: "تشكيلة الأكريليك" },
    tag: "Acrylique",
    description: {
      fr: "Une peinture acrylique, mate en phase aqueuse destinée pour les travaux d'intérieures et extérieures.",
      en: "A water-based matte acrylic paint for interior and exterior work.",
      ar: "طلاء أكريليك مطفأ على أساس مائي للأعمال الداخلية والخارجية."
    },
    coverage: "4-5 m²/kg",
    coverageMultiplier: 4.5,
    dryingTime: "Hors poussières : 15 min, Sec : 30 min, Recouvrable : 3h",
    finishes: ["mate lisse"],
    features: [
      { fr: "Bon pouvoir couvrant", en: "Good covering power", ar: "قدرة تغطية جيدة" },
      { fr: "Rendement élevé", en: "High yield", ar: "مردودية عالية" }
    ],
    image: "/images/PrismaPlast.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "5 à 10 % avec d'eau à 25 °C",
    density: "1.78 ± 0.05 Kg/L",
    cov: "Faible Cov",
    outils: { fr: "Un rouleau, pinceau ou pistolet.", en: "A roller, brush or spray gun.", ar: "رول أو فرشاة أو مسدس رش." },
    preparation: PREP_HEALTHY_DRY,
    longDescription: {
      fr: "Une peinture acrylique, mate en phase aqueuse destinée pour les travaux d'intérieures et extérieures.",
      en: "A water-based matte acrylic paint for interior and exterior work.",
      ar: "طلاء أكريليك مطفأ على أساس مائي للأعمال الداخلية والخارجية."
    },
    usage: USAGE_LIVING,
  },
  {
    id: "int-prisma-vinyl",
    name: "PRISMA VINYL",
    pdfUrl: "/fiches/PrismaVinyl.pdf",
    category: "interior",
    subCategory: "ACRYLIQUE",
    line: { fr: "Gamme Acryliques", en: "Acrylic Range", ar: "تشكيلة الأكريليك" },
    tag: "Finition Souple de Tradition",
    description: {
      fr: "Peinture traditionnelle à base de copolymères vinyliques offrant un excellent rapport pouvoir couvrant / prix.",
      en: "Traditional paint based on vinyl copolymers offering an excellent covering power/price ratio.",
      ar: "طلاء تقليدي على أساس مشتركات الفينيل يقدم نسبة ممتازة بين قدرة التغطية والسعر."
    },
    coverage: "9-11 m²/L par couche",
    coverageMultiplier: 10,
    dryingTime: "Sec au toucher : 2h, Recouvrable : 6h",
    finishes: ["Satiné", "Mat velouté"],
    features: [
      { fr: "Blancheur mate respirante", en: "Breathable matte whiteness", ar: "بياض مطفأ نافذ للهواء" },
      { fr: "Idéal sur plaques de plâtre", en: "Ideal on plasterboards", ar: "مثالي على ألواح الجبس" },
      { fr: "Bonne opacité en deux passes", en: "Good opacity in two coats", ar: "عتامة جيدة في طبقتين" },
      { fr: "Application fluide sans traînées", en: "Smooth application without streaks", ar: "تطبيق سلس بدون خطوط" }
    ],
    image: "/images/PrismaVinyl.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Eau claire : 10% max.",
    density: "1.41 ± 0.05 g/cm³",
    cov: "< 12 g/L (Haute lessivabilité)",
    outils: { fr: "Rouleau polyester 12mm, brosse, Airless.", en: "12mm polyester roller, brush, Airless.", ar: "رول البوليستر 12 مم، فرشاة، Airless." },
    preparation: { fr: "Appliquer une sous-couche compatible pour homogénéiser l'absorption.", en: "Apply a compatible undercoat to homogenise absorption.", ar: "طبق طبقة أساس متوافقة لتوحيد الامتصاص." },
    longDescription: {
      fr: "Peinture traditionnelle à base de copolymères vinyliques offrant un excellent rapport pouvoir couvrant / prix. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Traditional paint based on vinyl copolymers offering an excellent covering power/price ratio. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء تقليدي على أساس مشتركات الفينيل يقدم نسبة ممتازة بين قدرة التغطية والسعر. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_LIVING,
  },
  {
    id: "int-ecologia",
    name: "ECOLOGIA",
    pdfUrl: "/fiches/Ecologia.pdf",
    category: "interior",
    subCategory: "ACRYLIQUE",
    line: { fr: "Gamme Acryliques", en: "Acrylic Range", ar: "تشكيلة الأكريليك" },
    tag: "Zéro COV Certifié",
    description: {
      fr: "Est une peinture acrylique, en phase aqueuse présentant un aspect mat lisse, ayant une très faible odeur à l'application.",
      en: "An acrylic water-based paint with a smooth matte finish, with a very low odour during application.",
      ar: "طلاء أكريليك على أساس مائي بمظهر مطفأ أملس، ذو رائحة منخفضة جداً عند التطبيق."
    },
    coverage: "8-10 m²/kg",
    coverageMultiplier: 9,
    dryingTime: "Hors poussières : 15 MIN, Sec : 1 H, Recouvrable : 3 H",
    finishes: ["mate lisse"],
    features: [
      { fr: "Bon pouvoir couvrant", en: "Good covering power", ar: "قدرة تغطية جيدة" },
      { fr: "Peinture lessivable", en: "Washable paint", ar: "طلاء قابل للغسيل" }
    ],
    image: "/images/Ecologia.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "5 à 10 % avec d'eau à 25 °C",
    density: "1.43 ± 0.05 kg/l",
    cov: "Faible Cov",
    outils: { fr: "Un rouleau, pinceau ou pistolet.", en: "A roller, brush or spray gun.", ar: "رول أو فرشاة أو مسدس رش." },
    preparation: PREP_HEALTHY_DRY,
    longDescription: {
      fr: "Est une peinture acrylique, en phase aqueuse présentant un aspect mat lisse, ayant une très faible odeur à l'application.",
      en: "An acrylic water-based paint with a smooth matte finish, with a very low odour during application.",
      ar: "طلاء أكريليك على أساس مائي بمظهر مطفأ أملس، ذو رائحة منخفضة جداً عند التطبيق."
    },
    usage: USAGE_LIVING,
  },

  // ==================== INTÉRIEUR - SOLUTIONS ====================
  {
    id: "int-enduit-carrelage",
    name: "ENDUIT CARRELAGE",
    pdfUrl: "/fiches/EnduitCarrelage.pdf",
    category: "interior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions", en: "Solutions Range", ar: "تشكيلة الحلول" },
    tag: "Rénovation Directe Faïence",
    description: {
      fr: "Enduit d'égalisation et d'accroche étanche conçu pour masquer directement les joints de carrelage intérieurs.",
      en: "Waterproof levelling and bonding coating designed to directly cover interior tile joints.",
      ar: "بطانة تسوية وتثبيت مقاومة للماء مصممة لتغطية مفاصل البلاط الداخلي مباشرة."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Adhérence totale sur verre et céramique", en: "Total adhesion on glass and ceramic", ar: "التصاق كامل على الزجاج والسيراميك" },
      { fr: "Évite d'enlever l'ancien carrelage", en: "Avoids removing old tiling", ar: "يتجنب إزالة البلاط القديم" },
      { fr: "Préparation résiliente", en: "Resilient preparation", ar: "تحضير مرن" },
      { fr: "Garantit des murs intérieurs plats", en: "Ensures flat interior walls", ar: "يضمن جدراناً داخلية مستوية" }
    ],
    image: "/images/EnduitCarrelage.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Enduit d'égalisation et d'accroche étanche conçu pour masquer directement les joints de carrelage intérieurs. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Waterproof levelling and bonding coating designed to directly cover interior tile joints. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "بطانة تسوية وتثبيت مقاومة للماء مصممة لتغطية مفاصل البلاط الداخلي مباشرة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "int-antifissure",
    name: "ANTIFISSURE",
    pdfUrl: "/fiches/AntiFissure.pdf",
    category: "interior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions", en: "Solutions Range", ar: "تشكيلة الحلول" },
    tag: "Élastique Anti-Fissures",
    description: {
      fr: "Traitement acrylique souple de rebouchage pour réparations de fissures actives intérieures sujettes aux micro-mouvements.",
      en: "Flexible acrylic filling treatment for repairing active interior cracks subject to micro-movements.",
      ar: "معالجة أكريليك مرنة للحشو لإصلاح الشقوق الداخلية النشطة المعرضة للحركات الدقيقة."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Allongement exceptionnel", en: "Exceptional elongation", ar: "تمدد استثنائي" },
      { fr: "Suit les mouvements de dilatation", en: "Follows expansion movements", ar: "يتبع حركات التمدد" },
      { fr: "Recouvrable par toutes finitions", en: "Coverable by all finishes", ar: "قابل للتغطية بجميع التشطيبات" },
      { fr: "Excellente tenue dans le temps", en: "Excellent long-term performance", ar: "أداء ممتاز على المدى الطويل" }
    ],
    image: "/images/AntiFissure.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Traitement acrylique souple de rebouchage pour réparations de fissures actives intérieures sujettes aux micro-mouvements. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Flexible acrylic filling treatment for repairing active interior cracks subject to micro-movements. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "معالجة أكريليك مرنة للحشو لإصلاح الشقوق الداخلية النشطة المعرضة للحركات الدقيقة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "int-antihumidite",
    name: "ANTIHUMIDITÉ",
    pdfUrl: "/fiches/Antihumidité.pdf",
    category: "interior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions", en: "Solutions Range", ar: "تشكيلة الحلول" },
    tag: "Bloqueur d'Infiltration",
    description: {
      fr: "Peinture solvantée d'étanchéité intérieure bloquant activement l'humidité dans les caves, sous-sols et buanderies.",
      en: "Solvent-based interior waterproofing paint that actively blocks moisture in cellars, basements and utility rooms.",
      ar: "طلاء عزل داخلي على أساس مذيب يحجب الرطوبة بشكل فعال في الأقبية والبدرومات وغرف الغسيل."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Directement applicable sur fond humide", en: "Directly applicable on damp surfaces", ar: "قابل للتطبيق مباشرة على الأسطح الرطبة" },
      { fr: "Permet l'évaporation saine de l'eau", en: "Allows healthy water evaporation", ar: "يسمح بتبخر صحي للماء" },
      { fr: "Bloque l'humidité de capillarité", en: "Blocks capillary moisture", ar: "يحجب رطوبة الشعيرات" },
      { fr: "Traitement curatif absolu", en: "Absolute curative treatment", ar: "معالجة علاجية مطلقة" }
    ],
    image: "/images/antihumidite.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Peinture solvantée d'étanchéité intérieure bloquant activement l'humidité dans les caves, sous-sols et buanderies. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Solvent-based interior waterproofing paint that actively blocks moisture in cellars, basements and utility rooms. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء عزل داخلي على أساس مذيب يحجب الرطوبة بشكل فعال في الأقبية والبدرومات وغرف الغسيل. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "int-fongex",
    name: "FONGEX",
    pdfUrl: "/fiches/Fongex.pdf",
    category: "interior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions", en: "Solutions Range", ar: "تشكيلة الحلول" },
    tag: "Assainissant Anti-Moisissure",
    description: {
      fr: "Solution liquide curative à large spectre pour éliminer et désinfecter les moisissures et lichens des zones obscures humides.",
      en: "Broad-spectrum curative liquid solution for eliminating and disinfecting mould and lichen from dark, damp areas.",
      ar: "محلول سائل علاجي واسع الطيف لإزالة وتطهير العفن والأشنيات من المناطق المظلمة الرطبة."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Action destructrice rapide", en: "Rapid destructive action", ar: "تأثير تدميري سريع" },
      { fr: "Empêche la réapparition des mousses", en: "Prevents moss re-growth", ar: "يمنع إعادة نمو الطحالب" },
      { fr: "Pénètre profondément le support", en: "Penetrates deeply into the surface", ar: "يتغلغل بعمق في السطح" },
      { fr: "Facile d'application par brosse", en: "Easy brush application", ar: "سهل التطبيق بالفرشاة" }
    ],
    image: "/images/Fongex.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Solution liquide curative à large spectre pour éliminer et désinfecter les moisissures et lichens des zones obscures humides. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Broad-spectrum curative liquid solution for eliminating and disinfecting mould and lichen from dark, damp areas. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "محلول سائل علاجي واسع الطيف لإزالة وتطهير العفن والأشنيات من المناطق المظلمة الرطبة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "int-prima-fix",
    name: "PRIMA FIX",
    pdfUrl: "/fiches/PrimaFix.pdf",
    category: "interior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions", en: "Solutions Range", ar: "تشكيلة الحلول" },
    tag: "Fixateur Fort Solvanté",
    description: {
      fr: "Fixateur de fond incolore en solvant, conçu pour agglomérer, durcir et fixer les plâtres farineux ou friables.",
      en: "Colourless solvent-based primer, designed to agglomerate, harden and fix powdery or friable plasters.",
      ar: "طلاء أساسي شفاف على أساس مذيب، مصمم لتكتيل وتصلب وتثبيت الجبس المسحوق أو القابل للتفتت."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Pénétration sub-porale intense", en: "Intense sub-pore penetration", ar: "تغلغل عميق تحت مسامي مكثف" },
      { fr: "Consolide les bétons poreux", en: "Consolidates porous concrete", ar: "يعزز الخرسانة المسامية" },
      { fr: "Améliore le rendement des finitions", en: "Improves finishing yield", ar: "يحسن مردودية التشطيب" },
      { fr: "Haute tenue aux alcalis", en: "High alkali resistance", ar: "مقاومة عالية للقلويات" }
    ],
    image: "/images/PrimaFix.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Fixateur de fond incolore en solvant, conçu pour agglomérer, durcir et fixer les plâtres farineux ou friables. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Colourless solvent-based primer, designed to agglomerate, harden and fix powdery or friable plasters. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء أساسي شفاف على أساس مذيب، مصمم لتكتيل وتصلب وتثبيت الجبس المسحوق أو القابل للتفتت. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "int-epoxy",
    name: "EPOXY",
    pdfUrl: "/fiches/PrismaEpoxy.pdf",
    category: "interior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions", en: "Solutions Range", ar: "تشكيلة الحلول" },
    tag: "Résine Sol Bi-Composante",
    description: {
      fr: "Système époxy fluide auto-lissant bi-composant haute performance pour sols intérieurs d'habitations d'ateliers.",
      en: "High-performance two-component self-levelling fluid epoxy system for interior residential and workshop floors.",
      ar: "نظام إيبوكسي سائل ثنائي المكون عالي الأداء ذاتي التسوية لأرضيات المنازل والورش الداخلية."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Dureté vitreuse ultra-solide", en: "Ultra-solid glass-like hardness", ar: "صلابة زجاجية فائقة الصلابة" },
      { fr: "Résistance chimique aux hydrocarbures", en: "Chemical resistance to hydrocarbons", ar: "مقاومة كيميائية للهيدروكربونات" },
      { fr: "Aspect brillant impeccable", en: "Impeccable shiny finish", ar: "مظهر لامع لا تشوبه شائبة" },
      { fr: "Zéro jaunissement sous verre", en: "Zero yellowing under glass", ar: "لا اصفرار تحت الزجاج" }
    ],
    image: "/src/assets/images/regenerated_image_1780776539099.jpg",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Système époxy fluide auto-lissant bi-composant haute performance pour sols intérieurs d'habitations d'ateliers. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "High-performance two-component self-levelling fluid epoxy system for interior residential and workshop floors. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "نظام إيبوكسي سائل ثنائي المكون عالي الأداء ذاتي التسوية لأرضيات المنازل والورش الداخلية. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },

  // ==================== EXTÉRIEUR - DÉCO ====================
  {
    id: "ext-effet-beton",
    name: "EFFET BETON",
    pdfUrl: "/fiches/PrismaEffetBeton.pdf",
    category: "exterior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco Facade", en: "Facade Décor Range", ar: "تشكيلة الديكور الواجهة" },
    tag: "Brut / Contemporain",
    description: {
      fr: "Enduit acrylique garnissant extérieur reproduisant parfaitement l'effet authentique du béton brut de décoffrage.",
      en: "Exterior acrylic filling coating that perfectly reproduces the authentic effect of raw shuttered concrete.",
      ar: "بطانة أكريليك حشو خارجية تُعيد إنتاج التأثير الأصيل للخرسانة الخام بشكل مثالي."
    },
    coverage: "5-7 m²/L par couche",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Recouvrable : 24h",
    finishes: ["Mat structuré", "Aspect Béton"],
    features: [
      { fr: "Rendu architectural contemporain", en: "Contemporary architectural look", ar: "مظهر معماري معاصر" },
      { fr: "Masque les spectres de briques", en: "Hides brick outlines", ar: "يخفي معالم الطوب" },
      { fr: "Protection anti-UV renforcée", en: "Enhanced UV protection", ar: "حماية معززة ضد الأشعة فوق البنفسجية" },
      { fr: "Haute perspirance à la vapeur", en: "High vapour permeability", ar: "نفاذية عالية للبخار" }
    ],
    image: "/images/EffetBeton.png",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% max.",
    density: "1.62 ± 0.05 g/cm³",
    cov: "< 10 g/L (Norme Environnementale Alkyde-Silice)",
    outils: { fr: "Spatule, platoir inox, brosse à effet, spalter.", en: "Spatula, stainless steel trowel, effect brush, spalter.", ar: "مكشطة، مالج الفولاذ المقاوم للصدأ، فرشاة التأثير، سبالتر." },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Enduit acrylique garnissant extérieur reproduisant parfaitement l'effet authentique du béton brut de décoffrage. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Exterior acrylic filling coating that perfectly reproduces the authentic effect of raw shuttered concrete. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "بطانة أكريليك حشو خارجية تُعيد إنتاج التأثير الأصيل للخرسانة الخام بشكل مثالي. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "ext-monocouche",
    name: "MONOCOUCHE",
    pdfUrl: "/fiches/PrismaMonocouche.pdf",
    category: "exterior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco Facade", en: "Facade Décor Range", ar: "تشكيلة الديكور الواجهة" },
    tag: "Crépi Minéral Moderne",
    description: {
      fr: "Revêtement d'imperméabilisation monocouche à base de chaux et charges de quartz pour la mise en valeur des villas.",
      en: "Single-coat waterproofing coating based on lime and quartz fillers for enhancing villas.",
      ar: "طبقة عزل أحادية الطبقة على أساس الجير وحشوات الكوارتز لإبراز جمال الفيلات."
    },
    coverage: "5-7 m²/L par couche",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Recouvrable : 24h",
    finishes: ["Mat structuré", "Aspect Béton"],
    features: [
      { fr: "Décoration en une seule passe", en: "Decoration in a single pass", ar: "ديكور في تمريرة واحدة" },
      { fr: "Imperméabilisation certifiée", en: "Certified waterproofing", ar: "عزل مائي معتمد" },
      { fr: "Résistance au grattage", en: "Scratch resistance", ar: "مقاومة للخدش" },
      { fr: "Disponible en teintes chaudes du Maroc", en: "Available in warm Moroccan shades", ar: "متوفر بألوان مغربية دافئة" }
    ],
    image: "/src/assets/images/regenerated_image_1780776539917.jpg",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "Prêt à l'emploi. Dilution à l'eau 5% max.",
    density: "1.62 ± 0.05 g/cm³",
    cov: "< 10 g/L (Norme Environnementale Alkyde-Silice)",
    outils: { fr: "Spatule, platoir inox, brosse à effet, spalter.", en: "Spatula, stainless steel trowel, effect brush, spalter.", ar: "مكشطة، مالج الفولاذ المقاوم للصدأ، فرشاة التأثير، سبالتر." },
    preparation: PREP_SMOOTH,
    longDescription: {
      fr: "Revêtement d'imperméabilisation monocouche à base de chaux et charges de quartz pour la mise en valeur des villas. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Single-coat waterproofing coating based on lime and quartz fillers for enhancing villas. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طبقة عزل أحادية الطبقة على أساس الجير وحشوات الكوارتز لإبراز جمال الفيلات. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_ACCENT,
  },
  {
    id: "ext-prisma-rex",
    name: "PRISMA REX",
    pdfUrl: "/fiches/PrismaRex.pdf",
    category: "exterior",
    subCategory: "DÉCO",
    line: { fr: "Gamme Déco Facade", en: "Facade Décor Range", ar: "تشكيلة الديكور الواجهة" },
    tag: "Revêtement Plastique Épais",
    description: {
      fr: "PRISMA REX est un revêtement de façade décoratif et garnissant, d'aspect taloché à base de grains de quartz.",
      en: "PRISMA REX is a decorative and filling facade coating with a trowelled finish based on quartz grains.",
      ar: "PRISMA REX هو طبقة واجهة ديكورية وحشو بمظهر مُملَّس على أساس حبيبات الكوارتز."
    },
    coverage: "1 à 2 kg/m²",
    coverageMultiplier: 0.75,
    dryingTime: "Hors poussière: 24heures, Dur: 48heure",
    finishes: ["Granulé", "Granulométrie: 0,5 mm à 1.5 mm"],
    features: [
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Masque les irrégularités du support", en: "Hides surface irregularities", ar: "يخفي عدم انتظام السطح" }
    ],
    image: "/src/assets/images/regenerated_image_1780776539392.jpg",
    fallbackImage: "/src/assets/images/paint_bucket_decor_1780770364551.png",
    dilution: "dilué de 1% à 2% d'eau",
    density: "1,8 ± 0.05",
    cov: "Faible Cov",
    outils: { fr: "Rouleau alvéolé pour aspect décoratif spatulé", en: "Honeycomb roller for spatula decorative effect", ar: "رول خلوي للمظهر الديكوري المكشوط" },
    preparation: { fr: "Pour tous les travaux, les supports doivent être sains et secs. Appliquer une couche de FIX MAR à l'aide d'un rouleau.", en: "For all works, surfaces must be sound and dry. Apply a coat of FIX MAR with a roller.", ar: "لجميع الأعمال، يجب أن تكون الأسطح سليمة وجافة. طبق طبقة من FIX MAR بالرول." },
    longDescription: {
      fr: "PRISMA REX est un revêtement de façade décoratif et garnissant, d'aspect taloché à base de grains de quartz.",
      en: "PRISMA REX is a decorative and filling facade coating with a trowelled finish based on quartz grains.",
      ar: "PRISMA REX هو طبقة واجهة ديكورية وحشو بمظهر مُملَّس على أساس حبيبات الكوارتز."
    },
    usage: USAGE_ACCENT,
  },

  // ==================== EXTÉRIEUR - IMPRESSION ====================
  {
    id: "ext-prisma-prim-extra",
    name: "PRISMA PRIM EXTRA",
    pdfUrl: "/fiches/PrismaPrim.pdf",
    category: "exterior",
    subCategory: "IMPRESSION",
    line: { fr: "Gamme Impression Facade", en: "Facade Primer Range", ar: "تشكيلة الطلاء الأساسي للواجهة" },
    tag: "Primaire Hydrofuge",
    description: {
      fr: "Sous-couche acrylique hydrofuge extérieure d'accrochage à fort pouvoir régulateur de porosité maçonnerie.",
      en: "Exterior water-repellent acrylic undercoat with strong masonry porosity regulating power.",
      ar: "طبقة أكريليك تحضيرية طاردة للماء خارجية ذات قدرة قوية على تنظيم مسامية البناء."
    },
    coverage: "10-12 m²/L",
    coverageMultiplier: 11,
    dryingTime: "Hors poussières : 1 H, Sec : 1 H 30 min",
    finishes: ["Satiné"],
    features: [
      { fr: "Très bonne propriété hydrofuge", en: "Very good water-repellent property", ar: "خاصية طاردة للماء ممتازة" },
      { fr: "Rendement élevé", en: "High yield", ar: "مردودية عالية" },
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Très bonne adhérence", en: "Very good adhesion", ar: "التصاق ممتاز" }
    ],
    image: "/images/PrismaPrimExtra.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "5 à 10 % avec d'eau à 25 °C",
    density: "1 ± 0.05 Kg/L",
    cov: "Faible Cov",
    outils: OUTILS_ROLLER_BRUSH,
    preparation: { fr: "Appliquer en une seule couche mince. Eviter toute coulure ou surépaisseur.", en: "Apply in a single thin coat. Avoid any drips or excessive thickness.", ar: "طبق في طبقة رقيقة واحدة. تجنب أي تقطير أو سماكة مفرطة." },
    longDescription: {
      fr: "Sous-couche acrylique hydrofuge extérieure d'accrochage à fort pouvoir régulateur de porosité maçonnerie.",
      en: "Exterior water-repellent acrylic undercoat with strong masonry porosity regulating power.",
      ar: "طبقة أكريليك تحضيرية طاردة للماء خارجية ذات قدرة قوية على تنظيم مسامية البناء."
    },
    usage: USAGE_POROUS,
  },
  {
    id: "ext-blanc-fixe",
    name: "BLANC FIXE",
    pdfUrl: "/fiches/PrismaBlancFix.pdf",
    category: "exterior",
    subCategory: "IMPRESSION",
    line: { fr: "Gamme Impression Facade", en: "Facade Primer Range", ar: "تشكيلة الطلاء الأساسي للواجهة" },
    tag: "Régulation Blancheur",
    description: {
      fr: "Primaire et bloqueur d'alcalis à fort extrait sec blanc, excellent pour stabiliser les façades extérieures sales ou anciennes.",
      en: "High white dry extract alkali blocker primer, excellent for stabilising dirty or old exterior facades.",
      ar: "طلاء أساسي وحاجب قلويات ذو مقتطى جاف أبيض عالٍ، ممتاز لتثبيت الواجهات الخارجية المتسخة أو القديمة."
    },
    coverage: "9-11 m²/L par couche",
    coverageMultiplier: 10,
    dryingTime: "Sec au toucher : 1h, Recouvrable : 4h",
    finishes: ["Opale Mat"],
    features: [
      { fr: "Neutralise la laitance du béton", en: "Neutralises concrete laitance", ar: "يحيّد حليب الأسمنت" },
      { fr: "Opacité immense sur fonds foncés", en: "Immense opacity on dark backgrounds", ar: "عتامة هائلة على الخلفيات الداكنة" },
      { fr: "Excellente tenue aux sels marins", en: "Excellent resistance to sea salts", ar: "مقاومة ممتازة للأملاح البحرية" },
      { fr: "Améliore la durabilité extérieure", en: "Improves exterior durability", ar: "يحسن المتانة الخارجية" }
    ],
    image: "/images/BlancFixe.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "Eau claire : 10% à 15% pour pénétration optimale.",
    density: "1.49 ± 0.05 g/cm³",
    cov: "< 5 g/L (Haute performance écologique)",
    outils: { fr: "Rouleau microfibre 12mm, brosse, pistolet Airless.", en: "12mm microfibre roller, brush, Airless gun.", ar: "رول الميكروفايبر 12 مم، فرشاة، مسدس Airless." },
    preparation: PREP_PRIMER,
    longDescription: {
      fr: "Primaire et bloqueur d'alcalis à fort extrait sec blanc, excellent pour stabiliser les façades extérieures sales ou anciennes. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "High white dry extract alkali blocker primer, excellent for stabilising dirty or old exterior facades. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء أساسي وحاجب قلويات ذو مقتطى جاف أبيض عالٍ، ممتاز لتثبيت الواجهات الخارجية المتسخة أو القديمة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_POROUS,
  },
  {
    id: "ext-prima-fixe",
    name: "PRIMA FIXE",
    pdfUrl: "/fiches/PrismaPrimaFixe.pdf",
    category: "exterior",
    subCategory: "IMPRESSION",
    line: { fr: "Gamme Impression Facade", en: "Facade Primer Range", ar: "تشكيلة الطلاء الأساسي للواجهة" },
    tag: "Fixateur de Maçonnerie",
    description: {
      fr: "Impression durcissante solvantée à forte capacité d'accrochage pour resserrer et agréger les enduits farineux.",
      en: "Solvent-based hardening primer with strong adhesion capacity for tightening and aggregating powdery coatings.",
      ar: "طلاء أساسي مصلّب على أساس مذيب ذو قدرة تثبيت قوية لتشديد وتكتيل الطبقات المسحوقة."
    },
    coverage: "9-11 m²/L par couche",
    coverageMultiplier: 10,
    dryingTime: "Sec au toucher : 1h, Recouvrable : 4h",
    finishes: ["Opale Mat"],
    features: [
      { fr: "Excellente pénétration micrométrique", en: "Excellent micrometric penetration", ar: "تغلغل ميكرومتري ممتاز" },
      { fr: "Bloque l'efflorescence alcaline", en: "Blocks alkaline efflorescence", ar: "يحجب الأزهار القلوية" },
      { fr: "Idéal avant les peintures de façade", en: "Ideal before facade paints", ar: "مثالي قبل طلاءات الواجهة" },
      { fr: "Applicable en conditions humides", en: "Applicable in humid conditions", ar: "قابل للتطبيق في الظروف الرطبة" }
    ],
    image: "/images/PrimaFix.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "Eau claire : 10% à 15% pour pénétration optimale.",
    density: "1.49 ± 0.05 g/cm³",
    cov: "< 5 g/L (Haute performance écologique)",
    outils: { fr: "Rouleau microfibre 12mm, brosse, pistolet Airless.", en: "12mm microfibre roller, brush, Airless gun.", ar: "رول الميكروفايبر 12 مم، فرشاة، مسدس Airless." },
    preparation: PREP_PRIMER,
    longDescription: {
      fr: "Impression durcissante solvantée à forte capacité d'accrochage pour resserrer et agréger les enduits farineux. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Solvent-based hardening primer with strong adhesion capacity for tightening and aggregating powdery coatings. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء أساسي مصلّب على أساس مذيب ذو قدرة تثبيت قوية لتشديد وتكتيل الطبقات المسحوقة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_POROUS,
  },

  // ==================== EXTÉRIEUR - ENDUIT ====================
  {
    id: "ext-enduit-facade-lisse",
    name: "ENDUIT FACADE LISSE",
    pdfUrl: "/fiches/PrismaEnduitFacade.pdf",
    category: "exterior",
    subCategory: "ENDUIT",
    line: { fr: "Gamme Enduits Facade", en: "Facade Coating Range", ar: "تشكيلة بطانة الواجهة" },
    tag: "Lissage Plat Parfait",
    description: {
      fr: "Enduit d'égalisation et de ratissage extérieur formulé pour niveler parfaitement les façades rugueuses.",
      en: "Exterior levelling and scraping coating formulated to perfectly level rough facades.",
      ar: "بطانة تسوية وتنعيم خارجية مصممة لتسوية الواجهات الخشنة بشكل مثالي."
    },
    coverage: "0.8 - 1.5 kg/m² selon support",
    coverageMultiplier: 1.2,
    dryingTime: "Sec complet : 12h, Recouvrable : 24h",
    finishes: ["Mat très fin"],
    features: [
      { fr: "Résistance totale aux intempéries", en: "Total weather resistance", ar: "مقاومة كاملة للعوامل الجوية" },
      { fr: "Ponçage très simple", en: "Very easy sanding", ar: "صنفرة سهلة جداً" },
      { fr: "Nivellement précis au mortier", en: "Precise mortar levelling", ar: "تسوية دقيقة بالملاط" },
      { fr: "Excellente souplesse d'application", en: "Excellent application flexibility", ar: "مرونة تطبيق ممتازة" }
    ],
    image: "/images/EnduitFacadeLisse.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "Prêt à l'emploi en pâte onctueuse.",
    density: "1.75 ± 0.05 g/cm³",
    cov: "< 2 g/L (Zéro COV)",
    outils: { fr: "Lame à enduire, platoir en acier inoxydable.", en: "Coating blade, stainless steel trowel.", ar: "شفرة البطانة، مالج الفولاذ المقاوم للصدأ." },
    preparation: PREP_CLEAN_CRACKS,
    longDescription: {
      fr: "Enduit d'égalisation et de ratissage extérieur formulé pour niveler parfaitement les façades rugueuses. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Exterior levelling and scraping coating formulated to perfectly level rough facades. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "بطانة تسوية وتنعيم خارجية مصممة لتسوية الواجهات الخشنة بشكل مثالي. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_SMOOTHING,
  },
  {
    id: "ext-enduit-facade-130",
    name: "ENDUIT FACADE 130",
    pdfUrl: "/fiches/PrismaEnduitFacade.pdf",
    category: "exterior",
    subCategory: "ENDUIT",
    line: { fr: "Gamme Enduits Facade", en: "Facade Coating Range", ar: "تشكيلة بطانة الواجهة" },
    tag: "Garnissant Mortier Lourd",
    description: {
      fr: "Enduit cimenteux de ragréage extérieur à fort pouvoir garnissant permettant de reboucher jusqu'à 5mm par couche.",
      en: "Heavy-duty exterior cement levelling coating with high filling power allowing filling up to 5mm per coat.",
      ar: "بطانة أسمنتية خارجية ثقيلة التسوية ذات قدرة حشو عالية تسمح بالحشو حتى 5 مم لكل طبقة."
    },
    coverage: "0.8 - 1.5 kg/m² selon support",
    coverageMultiplier: 1.2,
    dryingTime: "Sec complet : 12h, Recouvrable : 24h",
    finishes: ["Mat très fin"],
    features: [
      { fr: "Adhérence extraordinaire sur béton brut", en: "Extraordinary adhesion on raw concrete", ar: "التصاق استثنائي على الخرسانة الخام" },
      { fr: "Aucun affaissement de matière", en: "No material sagging", ar: "لا هبوط في المادة" },
      { fr: "Retrait réduit contrôlé", en: "Controlled reduced shrinkage", ar: "انكماش محكوم ومخفض" },
      { fr: "Haut rendement de rattrapage", en: "High recovery yield", ar: "مردودية استرداد عالية" }
    ],
    image: "/images/EnduitFacade130.png",
    fallbackImage: "/src/assets/images/paint_bucket_habitat_1780770319051.png",
    dilution: "Prêt à l'emploi en pâte onctueuse.",
    density: "1.75 ± 0.05 g/cm³",
    cov: "< 2 g/L (Zéro COV)",
    outils: { fr: "Lame à enduire, platoir en acier inoxydable.", en: "Coating blade, stainless steel trowel.", ar: "شفرة البطانة، مالج الفولاذ المقاوم للصدأ." },
    preparation: PREP_CLEAN_CRACKS,
    longDescription: {
      fr: "Enduit cimenteux de ragréage extérieur à fort pouvoir garnissant permettant de reboucher jusqu'à 5mm par couche. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Heavy-duty exterior cement levelling coating with high filling power allowing filling up to 5mm per coat. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "بطانة أسمنتية خارجية ثقيلة التسوية ذات قدرة حشو عالية تسمح بالحشو حتى 5 مم لكل طبقة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_SMOOTHING,
  },

  // ==================== EXTÉRIEUR - VERNIS ====================
  {
    id: "ext-prisma-protect",
    name: "PRISMA PROTECT",
    pdfUrl: "/fiches/PrismaProtect.pdf",
    category: "exterior",
    subCategory: "VERNIS",
    line: { fr: "Gamme Vernis Facade", en: "Facade Varnish Range", ar: "تشكيلة ورنيش الواجهة" },
    tag: "Barrière Hydrofuge Invisible",
    description: {
      fr: "Traitement de protection extérieure totalement invisible et perlant protégeant des graisses et graffiti.",
      en: "Totally invisible and beading exterior protective treatment protecting against grease and graffiti.",
      ar: "معالجة حماية خارجية غير مرئية تماماً وتكوّن حبيبات ماء، تحمي من الشحوم والكتابة العشوائية."
    },
    coverage: "10 m²/L",
    coverageMultiplier: 10,
    dryingTime: "Hors poussière : 1h, Sec : 2h",
    finishes: ["satiné"],
    features: [
      { fr: "Rendement élevé", en: "High yield", ar: "مردودية عالية" },
      { fr: "Très facile à appliquer", en: "Very easy to apply", ar: "سهل التطبيق جداً" },
      { fr: "Très bonne propriété hydrofuge", en: "Very good water-repellent property", ar: "خاصية طاردة للماء ممتازة" }
    ],
    image: "/src/assets/images/paint_bucket_ext-prisma-protect.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Prêt à l'emploi",
    density: "1.1 ± 0.05 Kg/L",
    cov: "Faible Cov",
    outils: { fr: "Rouleau ou brosse.", en: "Roller or brush.", ar: "رول أو فرشاة." },
    preparation: { fr: "Appliquer à l'aide d'un rouleau ou brosse en répartissant le produit de façon homogène sur le support. Eviter toute coulure ou surépaisseur.", en: "Apply with a roller or brush, spreading the product evenly over the surface. Avoid any drips or excessive thickness.", ar: "طبق بالرول أو الفرشاة، مع توزيع المنتج بالتساوي على السطح. تجنب أي تقطير أو سماكة مفرطة." },
    longDescription: {
      fr: "Traitement de protection extérieure totalement invisible et perlant protégeant des graisses et graffiti.",
      en: "Totally invisible and beading exterior protective treatment protecting against grease and graffiti.",
      ar: "معالجة حماية خارجية غير مرئية تماماً وتكوّن حبيبات ماء، تحمي من الشحوم والكتابة العشوائية."
    },
    usage: USAGE_WOODWORK,
  },
  {
    id: "ext-prisma-pores",
    name: "PRISMA PORES",
    pdfUrl: "/fiches/PrismaPores.pdf",
    category: "exterior",
    subCategory: "VERNIS",
    line: { fr: "Gamme Vernis Facade", en: "Facade Varnish Range", ar: "تشكيلة ورنيش الواجهة" },
    tag: "Protection Hydro-Régulatrice",
    description: {
      fr: "Vernis acrylique satiné microporeux pour saturer et rehausser les chalets et menuiseries extérieures.",
      en: "Microporous satin acrylic varnish for saturating and enhancing chalets and exterior joinery.",
      ar: "ورنيش أكريليك ساتان مسامي دقيق لإشباع وتحسين الشاليهات والنجارة الخارجية."
    },
    coverage: "10-12 m²/L par couche",
    coverageMultiplier: 11,
    dryingTime: "Sec au toucher : 3h, Recouvrable : 8h",
    finishes: ["Brillant Céleste", "Satiné Soyeux"],
    features: [
      { fr: "Protège le veinage du bois", en: "Protects wood grain", ar: "يحمي تعرق الخشب" },
      { fr: "Filtre anti-UV de haute performance", en: "High-performance UV filter", ar: "مرشح UV عالي الأداء" },
      { fr: "Hydrophobe et microporeux", en: "Hydrophobic and microporous", ar: "كاره للماء ومسامي دقيق" },
      { fr: "Grande facilité de maintenance", en: "Very easy maintenance", ar: "سهولة كبيرة في الصيانة" }
    ],
    image: "/images/PrismaPores.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Diluant synthétique ou eau à 5% selon la formulation.",
    density: "1.08 ± 0.05 g/cm³",
    cov: "< 25 g/L (Haute protection résine)",
    outils: OUTILS_VARNISH_BRUSH,
    preparation: PREP_SANDING,
    longDescription: {
      fr: "Vernis acrylique satiné microporeux pour saturer et rehausser les chalets et menuiseries extérieures. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Microporous satin acrylic varnish for saturating and enhancing chalets and exterior joinery. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "ورنيش أكريليك ساتان مسامي دقيق لإشباع وتحسين الشاليهات والنجارة الخارجية. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_WOODWORK,
  },
  {
    id: "ext-prisma-wood",
    name: "PRISMA WOOD",
    pdfUrl: "/fiches/PrismaWood.pdf",
    category: "exterior",
    subCategory: "VERNIS",
    line: { fr: "Gamme Vernis Facade", en: "Facade Varnish Range", ar: "تشكيلة ورنيش الواجهة" },
    tag: "Vitrification Extrême",
    description: {
      fr: "Vernis polyuréthane de qualité marine hautement polymérisé offrant un superbe fini brillant durable face aux agressions UV.",
      en: "Marine-grade highly polymerised polyurethane varnish offering a superb durable glossy finish against UV aggression.",
      ar: "ورنيش بولي يوريثان من الدرجة البحرية عالي البلمرة يوفر تشطيباً لامعاً رائعاً ومتيناً في مواجهة الإشعاع فوق البنفسجي."
    },
    coverage: "10-12 m²/L par couche",
    coverageMultiplier: 11,
    dryingTime: "Sec au toucher : 3h, Recouvrable : 8h",
    finishes: ["Brillant Céleste", "Satiné Soyeux"],
    features: [
      { fr: "Brillant miroir très robuste", en: "Very robust mirror gloss", ar: "لمعان مرآوي قوي جداً" },
      { fr: "Résistance aux embruns marins", en: "Resistance to sea spray", ar: "مقاومة للرذاذ البحري" },
      { fr: "Absorbeurs d'UV intégrés", en: "Integrated UV absorbers", ar: "ماصات UV مدمجة" },
      { fr: "Séchage régulier rapide", en: "Fast regular drying", ar: "جفاف سريع ومنتظم" }
    ],
    image: "/images/PrismaWood.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Diluant synthétique ou eau à 5% selon la formulation.",
    density: "1.08 ± 0.05 g/cm³",
    cov: "< 25 g/L (Haute protection résine)",
    outils: OUTILS_VARNISH_BRUSH,
    preparation: PREP_SANDING,
    longDescription: {
      fr: "Vernis polyuréthane de qualité marine hautement polymérisé offrant un superbe fini brillant durable face aux agressions UV. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Marine-grade highly polymerised polyurethane varnish offering a superb durable glossy finish against UV aggression. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "ورنيش بولي يوريثان من الدرجة البحرية عالي البلمرة يوفر تشطيباً لامعاً رائعاً ومتيناً في مواجهة الإشعاع فوق البنفسجي. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_WOODWORK,
  },
  {
    id: "ext-vernis-pio",
    name: "VERNIS PIO",
    pdfUrl: "/fiches/PrismaVernisPolyurethane.pdf",
    category: "exterior",
    subCategory: "VERNIS",
    line: { fr: "Gamme Vernis Facade", en: "Facade Varnish Range", ar: "تشكيلة ورنيش الواجهة" },
    tag: "Spécial Pierre & Brique",
    description: {
      fr: "Vernis de finition polyuréthane bi-composant.",
      en: "Two-component polyurethane finishing varnish.",
      ar: "ورنيش تشطيب بولي يوريثان ثنائي المكون."
    },
    coverage: "150 à 250 g/m²",
    coverageMultiplier: 5,
    dryingTime: "Sec : 2 heures",
    finishes: ["Satiné"],
    features: [
      { fr: "Finition polyuréthane protectrice", en: "Protective polyurethane finish", ar: "تشطيب بولي يوريثان واقي" },
      { fr: "Système bi-composant", en: "Two-component system", ar: "نظام ثنائي المكون" }
    ],
    image: "/src/assets/images/paint_bucket_ext-vernis-pio.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Mélange : verser le composant A dans B",
    density: "1.08 ± 0.05 g/cm³",
    cov: "Faible Cov",
    outils: { fr: "Rouleau", en: "Roller", ar: "رول" },
    preparation: { fr: "Utiliser un mélangeur à faible vitesse et verser le composant A dans B avant l'application.", en: "Use a low-speed mixer and pour component A into B before application.", ar: "استخدم خلاطاً بسرعة منخفضة واسكب المكوّن A في B قبل التطبيق." },
    longDescription: {
      fr: "Vernis de finition polyuréthane bi-composant. Spécialement conçu pour une excellente résistance et durabilité.",
      en: "Two-component polyurethane finishing varnish. Specially designed for excellent resistance and durability.",
      ar: "ورنيش تشطيب بولي يوريثان ثنائي المكون. مصمم خصيصاً لمقاومة ومتانة ممتازتين."
    },
    usage: USAGE_WOODWORK,
  },
  {
    id: "ext-prisma-protect-2",
    name: "PRISMA PROTECT",
    pdfUrl: "/fiches/PrismaProtect.pdf",
    category: "exterior",
    subCategory: "VERNIS",
    line: { fr: "Gamme Vernis Facade", en: "Facade Varnish Range", ar: "تشكيلة ورنيش الواجهة" },
    tag: "Barrière Hydrofuge Invisible",
    description: {
      fr: "Traitement de protection extérieure totalement invisible et perlant protégeant des graisses et graffiti.",
      en: "Totally invisible and beading exterior protective treatment protecting against grease and graffiti.",
      ar: "معالجة حماية خارجية غير مرئية تماماً وتكوّن حبيبات ماء، تحمي من الشحوم والكتابة العشوائية."
    },
    coverage: "10-12 m²/L par couche",
    coverageMultiplier: 11,
    dryingTime: "Sec au toucher : 3h, Recouvrable : 8h",
    finishes: ["Brillant Céleste", "Satiné Soyeux"],
    features: [
      { fr: "Totalement incolore sans brillance", en: "Totally colourless without shine", ar: "شفاف تماماً بدون لمعان" },
      { fr: "Empêche la pénétration des graisses", en: "Prevents grease penetration", ar: "يمنع تغلغل الشحوم" },
      { fr: "Effet déperlant d'étanchéité", en: "Waterproof beading effect", ar: "تأثير تكوين حبيبات الماء للعزل" },
      { fr: "Nettoyage de briques simplifié", en: "Simplified brick cleaning", ar: "تنظيف مبسط للطوب" }
    ],
    image: "/src/assets/images/paint_bucket_ext-prisma-protect.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "Diluant synthétique ou eau à 5% selon la formulation.",
    density: "1.08 ± 0.05 g/cm³",
    cov: "< 25 g/L (Haute protection résine)",
    outils: OUTILS_VARNISH_BRUSH,
    preparation: PREP_SANDING,
    longDescription: {
      fr: "Traitement de protection extérieure totalement invisible et perlant protégeant des graisses et graffiti. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Totally invisible and beading exterior protective treatment protecting against grease and graffiti. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "معالجة حماية خارجية غير مرئية تماماً وتكوّن حبيبات ماء، تحمي من الشحوم والكتابة العشوائية. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_WOODWORK,
  },

  // ==================== EXTÉRIEUR - ACRYLIQUE ====================
  {
    id: "ext-prisma-vinyl",
    name: "PRISMA VINYL",
    pdfUrl: "/fiches/PrismaVinyl.pdf",
    category: "exterior",
    subCategory: "ACRYLIQUE",
    line: { fr: "Gamme Acryliques Facade", en: "Facade Acrylic Range", ar: "تشكيلة الأكريليك للواجهة" },
    tag: "Finition Résistante Éco",
    description: {
      fr: "Revêtement acrylique fluide d'usage universel extérieur, parfait pour la coloration économique des maçonneries.",
      en: "Universal exterior fluid acrylic coating, perfect for the economical colouring of masonry.",
      ar: "طبقة أكريليك سائلة عالمية خارجية، مثالية للتلوين الاقتصادي للبناء."
    },
    coverage: "6-7 m²/kg",
    coverageMultiplier: 6.5,
    dryingTime: "Hors poussières : 15 MIN, Sec : 30 MIN, Recouvrable : 3 H",
    finishes: ["mate lisse"],
    features: [
      { fr: "Bon pouvoir couvrant", en: "Good covering power", ar: "قدرة تغطية جيدة" },
      { fr: "Peinture lessivable", en: "Washable paint", ar: "طلاء قابل للغسيل" }
    ],
    image: "/images/PrismaVinyl.png",
    fallbackImage: "/src/assets/images/paint_bucket_velours_1780770334628.png",
    dilution: "5 à 10 % avec d'eau à 25 °C",
    density: "1.75 ± 0.05 kg/l",
    cov: "Faible Cov",
    outils: { fr: "Un rouleau, pinceau ou pistolet.", en: "A roller, brush or spray gun.", ar: "رول أو فرشاة أو مسدس رش." },
    preparation: PREP_HEALTHY_DRY,
    longDescription: {
      fr: "Revêtement acrylique fluide d'usage universel extérieur, parfait pour la coloration économique des maçonneries.",
      en: "Universal exterior fluid acrylic coating, perfect for the economical colouring of masonry.",
      ar: "طبقة أكريليك سائلة عالمية خارجية، مثالية للتلوين الاقتصادي للبناء."
    },
    usage: USAGE_LIVING,
  },

  // ==================== EXTÉRIEUR - SOLUTIONS ====================
  {
    id: "ext-antifissure",
    name: "ANTIFISSURE",
    pdfUrl: "/fiches/PrismaAntifissure.pdf",
    category: "exterior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions Facade", en: "Facade Solutions Range", ar: "تشكيلة حلول الواجهة" },
    tag: "Hydro-Élastomère",
    description: {
      fr: "Peinture d'imperméabilisation élastomère haute élasticité, idéale pour ponter les fissures actives de façade.",
      en: "High-elasticity elastomeric waterproofing paint, ideal for bridging active facade cracks.",
      ar: "طلاء عزل إيلاستومير عالي المرونة، مثالي لتجسير الشقوق النشطة في الواجهة."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Capacité de pontage jusqu'à 2.5mm", en: "Bridging capacity up to 2.5mm", ar: "قدرة تجسير حتى 2.5 مم" },
      { fr: "Imperméabilité totale à l'eau liquide", en: "Total impermeability to liquid water", ar: "عدم نفاذية كاملة للماء السائل" },
      { fr: "Excellente tenue aux amplitudes thermiques", en: "Excellent resistance to thermal variations", ar: "مقاومة ممتازة لتوسعات الحرارة" },
      { fr: "Fini mat garnissant", en: "Filling matte finish", ar: "تشطيب مطفأ حاشٍ" }
    ],
    image: "/images/AntiFissure.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Peinture d'imperméabilisation élastomère haute élasticité, idéale pour ponter les fissures actives de façade. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "High-elasticity elastomeric waterproofing paint, ideal for bridging active facade cracks. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء عزل إيلاستومير عالي المرونة، مثالي لتجسير الشقوق النشطة في الواجهة. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "ext-enduit-carrelage",
    name: "ENDUIT CARRELAGE",
    pdfUrl: "/fiches/PrismaEnduitCarrelage.pdf",
    category: "exterior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions Facade", en: "Facade Solutions Range", ar: "تشكيلة حلول الواجهة" },
    tag: "Adhésion Directe Sols",
    description: {
      fr: "Enduit-colle étanche spécial terrasse permettant d'unifier les sols extérieures recouverts de faïence avant peinture.",
      en: "Waterproof special terrace adhesive coating allowing to unify exterior floors covered with tiles before painting.",
      ar: "بطانة لاصقة مقاومة للماء خاصة بالتراس تتيح توحيد الأرضيات الخارجية المغطاة بالفسيفساء قبل الطلاء."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Super adhérence ciment-résine", en: "Super cement-resin adhesion", ar: "التصاق فائق بالأسمنت والراتنج" },
      { fr: "Résistant au gel-dégel extérieur", en: "Resistant to exterior freeze-thaw", ar: "مقاوم للتجمد وذوبان الجليد الخارجي" },
      { fr: "Étanchéité secondaire adjointe", en: "Added secondary waterproofing", ar: "عزل مائي ثانوي مضاف" },
      { fr: "Application à la spatule large", en: "Wide spatula application", ar: "تطبيق بمكشطة واسعة" }
    ],
    image: "/images/EnduitCarrelage.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Enduit-colle étanche spécial terrasse permettant d'unifier les sols extérieures recouverts de faïence avant peinture. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Waterproof special terrace adhesive coating allowing to unify exterior floors covered with tiles before painting. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "بطانة لاصقة مقاومة للماء خاصة بالتراس تتيح توحيد الأرضيات الخارجية المغطاة بالفسيفساء قبل الطلاء. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "ext-antihumidite",
    name: "ANTIHUMIDITÉ",
    pdfUrl: "/fiches/PrismaAntihumidite.pdf",
    category: "exterior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions Facade", en: "Facade Solutions Range", ar: "تشكيلة حلول الواجهة" },
    tag: "Hydrofuge Coupe-Barrière",
    description: {
      fr: "Traitement minéralisant hydrofuge de profondeur destiné à assainir et étanchéifier les soubassements bruts.",
      en: "Deep mineralising water-repellent treatment designed to sanitise and waterproof raw foundations.",
      ar: "معالجة معدنية طاردة للماء عميقة مصممة لتطهير وعزل القواعد الخام."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "S'oppose aux remontées par capillarité", en: "Opposes capillary rise", ar: "يعارض الصعود الشعري" },
      { fr: "Fort pouvoir durcisseur moléculaire", en: "Strong molecular hardening power", ar: "قوة تصلب جزيئية قوية" },
      { fr: "Idéal contre les dalles poreuses", en: "Ideal against porous slabs", ar: "مثالي ضد الألواح المسامية" },
      { fr: "Invisible ou recouvrable", en: "Invisible or coverable", ar: "غير مرئي أو قابل للتغطية" }
    ],
    image: "/images/antihumidite.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Traitement minéralisant hydrofuge de profondeur destiné à assainir et étanchéifier les soubassements bruts. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Deep mineralising water-repellent treatment designed to sanitise and waterproof raw foundations. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "معالجة معدنية طاردة للماء عميقة مصممة لتطهير وعزل القواعد الخام. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "ext-prisma-flex",
    name: "PRISMA FLEX",
    pdfUrl: "/fiches/PrismaFlex.pdf",
    category: "exterior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions Facade", en: "Facade Solutions Range", ar: "تشكيلة حلول الواجهة" },
    tag: "Étanchéité Liquide",
    description: {
      fr: "Résine élastique d'étanchéité liquide continue formant une membrane caoutchouteuse imperméable pour terrasses.",
      en: "Continuous liquid elastic waterproofing resin forming an impermeable rubber membrane for terraces.",
      ar: "راتنج مطاطي مرن للعزل السائل المستمر يشكل غشاءً مطاطياً غير نافذ للأسطح."
    },
    coverage: "1.5 - 2 m²/kg",
    coverageMultiplier: 1.75,
    dryingTime: "Hors poussières : 6 à 8h, Sec : 24h",
    finishes: ["Satiné"],
    features: [
      { fr: "Imperméable à l'eau de ruissellement", en: "Impermeable to runoff water", ar: "غير نافذ لمياه الصرف" },
      { fr: "Très bonne résistance aux intempéries", en: "Very good weather resistance", ar: "مقاومة ممتازة للعوامل الجوية" },
      { fr: "Grande élasticité qui compense les microfissures et les fissures", en: "High elasticity that compensates for micro-cracks and cracks", ar: "مرونة عالية تعوض التشققات الدقيقة والشقوق" },
      { fr: "Imperméable à l'eau liquide", en: "Impermeable to liquid water", ar: "غير نافذ للماء السائل" }
    ],
    image: "/images/PrismaFlex.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "1ère couche : 30 à 40 % d'eau, 2ème couche : Sans dilution",
    density: "1.25 ± 0.05 Kg/L",
    cov: "Faible Cov",
    outils: { fr: "Un rouleau ou brosse.", en: "A roller or brush.", ar: "رول أو فرشاة." },
    preparation: PREP_HEALTHY_DRY,
    longDescription: {
      fr: "Résine élastique d'étanchéité liquide continue formant une membrane caoutchouteuse imperméable pour terrasses.",
      en: "Continuous liquid elastic waterproofing resin forming an impermeable rubber membrane for terraces.",
      ar: "راتنج مطاطي مرن للعزل السائل المستمر يشكل غشاءً مطاطياً غير نافذ للأسطح."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "ext-prisma-fibre",
    name: "PRISMA FIBRE",
    pdfUrl: "/fiches/CiraMineralia.pdf",
    category: "exterior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions Facade", en: "Facade Solutions Range", ar: "تشكيلة حلول الواجهة" },
    tag: "Mortier Armé Fibres",
    description: {
      fr: "Mortier de surfaçage technique armé de micro-fibres de verre synthétiques, empêchant la fissuration mécanique façades.",
      en: "Technical surfacing mortar reinforced with synthetic glass micro-fibres, preventing mechanical cracking of facades.",
      ar: "ملاط تسطيح تقني مقوى بألياف الزجاج الصناعية الدقيقة، يمنع التشقق الميكانيكي للواجهات."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Résistance extrême à la traction", en: "Extreme tensile strength", ar: "مقاومة شد فائقة" },
      { fr: "Garnissage direct des éclats de béton", en: "Direct filling of concrete chips", ar: "حشو مباشر لرقائق الخرسانة" },
      { fr: "Ponçage facile", en: "Easy sanding", ar: "صنفرة سهلة" },
      { fr: "Excellent support d'accroche", en: "Excellent adhesion base", ar: "قاعدة التصاق ممتازة" }
    ],
    image: "/images/PrismaFibre.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Mortier de surfaçage technique armé de micro-fibres de verre synthétiques, empêchant la fissuration mécanique façades. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Technical surfacing mortar reinforced with synthetic glass micro-fibres, preventing mechanical cracking of facades. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "ملاط تسطيح تقني مقوى بألياف الزجاج الصناعية الدقيقة، يمنع التشقق الميكانيكي للواجهات. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  },
  {
    id: "ext-izo-10",
    name: "IZO 10",
    pdfUrl: "/fiches/CiraMineralia.pdf",
    category: "exterior",
    subCategory: "SOLUTIONS",
    line: { fr: "Gamme Solutions Facade", en: "Facade Solutions Range", ar: "تشكيلة حلول الواجهة" },
    tag: "Réflecteur Thermique",
    description: {
      fr: "Peinture d'étanchéité et d'isolation thermo-réflective, bloquant le rayonnement solaire infrarouge pour isoler les toitures.",
      en: "Thermal-reflective waterproofing and insulation paint, blocking infrared solar radiation to insulate roofs.",
      ar: "طلاء عزل وتثبيت حراري عاكس يحجب الإشعاع الشمسي تحت الأحمر لعزل الأسطح."
    },
    coverage: "4-7 m²/L par couche ou kg/m²",
    coverageMultiplier: 6,
    dryingTime: "Sec au toucher : 4h, Circulation : 24h",
    finishes: ["Mat technique", "Brillant structuré"],
    features: [
      { fr: "Abaisse doucement la température intérieure", en: "Gently lowers interior temperature", ar: "يخفض درجة الحرارة الداخلية بلطف" },
      { fr: "Membrane étanche élastique continue", en: "Continuous elastic waterproof membrane", ar: "غشاء مائي مرن مستمر" },
      { fr: "Haute réflectivité solaire certifiée", en: "Certified high solar reflectivity", ar: "انعكاسية شمسية عالية معتمدة" },
      { fr: "Application simple et à haut rendement", en: "Simple high-yield application", ar: "تطبيق بسيط ذو مردودية عالية" }
    ],
    image: "/src/assets/images/paint_bucket_ext-izo-10.png",
    fallbackImage: "/src/assets/images/paint_bucket_facade_1780770349775.png",
    dilution: "Prêt à l'emploi ou dilution selon fiche spécifique.",
    density: "1.52 ± 0.05 g/cm³",
    cov: "< 35 g/L (Normes techniques d'étanchéité)",
    outils: OUTILS_STANDARD,
    preparation: PREP_HUMIDITY,
    longDescription: {
      fr: "Peinture d'étanchéité et d'isolation thermo-réflective, bloquant le rayonnement solaire infrarouge pour isoler les toitures. Spécialement conçu pour satisfaire les normes de haute qualité au Maroc, ce produit offre un confort d'application inédit et une durabilité remarquable.",
      en: "Thermal-reflective waterproofing and insulation paint, blocking infrared solar radiation to insulate roofs. Specially designed to meet the high quality standards in Morocco, this product offers unrivalled application comfort and remarkable durability.",
      ar: "طلاء عزل وتثبيت حراري عاكس يحجب الإشعاع الشمسي تحت الأحمر لعزل الأسطح. مصمم خصيصاً لتلبية معايير الجودة العالية في المغرب، يوفر هذا المنتج راحة تطبيق لا مثيل لها ومتانة رائعة."
    },
    usage: USAGE_HUMID,
  }
];

export const MOROCCAN_COLORS: Color[] = [
  { id: "prisma-green", name: "Vert Prisma", hex: "#6ca352", category: "nature", description: "Le vert officiel Prisma, symbole d'authenticité et de nature marocaine." },
  { id: "prisma-gold", name: "Or de Fès", hex: "#d2a632", category: "chaleureux", description: "Un jaune ocre riche et lumineux, inspiré par la finesse et la splendeur de l'artisanat de Fès." },
  { id: "prisma-red", name: "Rouge Marrakech", hex: "#dc1d24", category: "chaleureux", description: "Un rouge vibrant et terreux, capturant la chaleur des remparts de la ville ocre sous le soleil couchant." },
  { id: "ocean-safi", name: "Bleu de Safi", hex: "#1e5299", category: "mineral", description: "Un bleu azur profond et captivant qui évoque la célèbre faïence de Safi." },
  { id: "dune-sahara", name: "Sable du Sahara", hex: "#e7c08a", category: "chaleureux", description: "Un ton sable chaud, apaisant et très polyvalent pour les intérieurs modernes." },
  { id: "atlas-slate", name: "Ardoise de l'Atlas", hex: "#4a535a", category: "mineral", description: "Un gris foncé majestueux et texturé, tiré des rocheuses du Haut Atlas." },
  { id: "white-moulay", name: "Blanc Moulay Idriss", hex: "#fcfcfa", category: "neutre", description: "Un blanc pur avec une touche d'ivoire très douce, apportant de l'éclat aux pièces sombres." },
  { id: "terracotta-ouarzazate", name: "Terre de Kasbah", hex: "#c87d55", category: "chaleureux", description: "Un terracotta chaleureux qui rappelle l'enduit de terre crue des Kasbahs du Sud." },
  { id: "mint-valley", name: "Menthe de l'Ourika", hex: "#a4cbb4", category: "nature", description: "Un vert de menthe poivrée pastel, relaxant, idéal pour introduire de la fraîcheur." },
  { id: "charcoal-casbah", name: "Charbon de Mejjat", hex: "#1c1d1f", category: "neutre", description: "Le noir charbon de notre charte graphique. Profond, élégant et riche." },
  { id: "pearl-rabat", name: "Brume de Rabat", hex: "#e0e3e5", category: "neutre", description: "Un gris perle lumineux inspiré de la brume côtière matinale de la capitale." },
  { id: "copper-medina", name: "Cuivre de la Médina", hex: "#b46548", category: "chaleureux", description: "Une nuance cuivrée métallique polie, douce mais pleine de caractère." }
];

export const MOCK_ROOMS: Room[] = [
  {
    id: "salon",
    name: "Salon Contemporain",
    label: "Séjour & Espace à Vivre",
    viewBox: "0 0 800 450",
    elements: [
      { id: "bg", name: "Plancher & Arrière-plan", defaultColor: "#e5dec9", d: "M 0 0 L 800 0 L 800 450 L 0 450 Z" },
      { id: "floor", name: "Sol en Parquet", defaultColor: "#a38d72", d: "M 0 320 L 800 320 L 800 450 L 0 450 Z" },
      { id: "wall-left", name: "Mur d'Accent Gauche", defaultColor: "COLOR_PLACEHOLDER", d: "M 0 0 L 220 50 L 220 320 L 0 320 Z" },
      { id: "wall-back", name: "Mur Principal", defaultColor: "COLOR_PLACEHOLDER_BG", d: "M 220 50 L 580 50 L 580 320 L 220 320 Z" },
      { id: "wall-right", name: "Mur Droit", defaultColor: "#f3f3f0", d: "M 580 50 L 800 0 L 800 320 L 580 320 Z" },
      { id: "sofa", name: "Canapé Style Marocain", defaultColor: "#2a2d34", d: "M 280 220 L 520 220 C 530 220, 540 230, 540 240 L 540 290 L 260 290 L 260 240 C 260 230, 270 220, 280 220 Z M 220 250 L 260 250 L 260 300 L 220 300 Z M 540 250 L 580 250 L 580 300 L 540 300 Z" },
      { id: "pillow-1", name: "Coussin Or fès", defaultColor: "#d2a632", d: "M 290 235 C 290 225, 330 225, 330 235 L 330 270 L 290 270 Z" },
      { id: "pillow-2", name: "Coussin Vert", defaultColor: "#6ca352", d: "M 470 235 C 470 225, 510 225, 510 235 L 510 270 L 470 270 Z" },
      { id: "lamp", name: "Suspension Cuivre", defaultColor: "#b46548", d: "M 400 50 L 400 110 M 370 110 L 430 110 L 415 130 L 385 130 Z" },
      { id: "frame", name: "Tableau Déco", defaultColor: "#ffffff", d: "M 340 70 L 460 70 L 460 150 L 340 150 Z" },
      { id: "frame-inner", name: "Contenu Tableau", defaultColor: "#e5f0e0", d: "M 350 80 L 450 80 L 450 140 L 350 140 Z" }
    ]
  },
  {
    id: "facade",
    name: "Façade Extérieure",
    label: "Riad & Villa",
    viewBox: "0 0 800 450",
    elements: [
      { id: "sky", name: "Ciel Azur", defaultColor: "#abccee", d: "M 0 0 L 800 0 L 800 450 L 0 450 Z" },
      { id: "ground", name: "Sol Pavé", defaultColor: "#939ba2", d: "M 0 350 L 800 350 L 800 450 L 0 450 Z" },
      { id: "main-wall", name: "Corps de Façade", defaultColor: "COLOR_PLACEHOLDER", d: "M 80 80 L 720 80 L 720 350 L 80 350 Z" },
      { id: "roof", name: "Toiture Tuiles vertes", defaultColor: "#325732", d: "M 60 80 L 740 80 L 700 45 L 100 45 Z" },
      { id: "door-frame", name: "Encadrement Arche", defaultColor: "COLOR_PLACEHOLDER_ALT", d: "M 340 180 C 340 130, 460 130, 460 180 L 460 350 L 340 350 Z" },
      { id: "door", name: "Porte Sculptée", defaultColor: "#58200c", d: "M 355 190 C 355 155, 445 155, 445 190 L 445 350 L 355 350 Z" },
      { id: "window-l", name: "Fenêtre Gauche", defaultColor: "#eaeceb", d: "M 180 140 L 260 140 L 260 220 L 180 220 Z" },
      { id: "window-r", name: "Fenêtre Droite", defaultColor: "#eaeceb", d: "M 540 140 L 620 140 L 620 220 L 540 220 Z" },
      { id: "window-bar-l", name: "Grilles Gauche", defaultColor: "#111111", d: "M 180 180 L 260 180 M 220 140 L 220 220" },
      { id: "window-bar-r", name: "Grilles Droite", defaultColor: "#111111", d: "M 540 180 L 620 180 M 580 140 L 580 220" },
      { id: "plant-pot", name: "Vase Terracotta", defaultColor: "#b05427", d: "M 290 310 L 320 310 L 315 350 L 295 350 Z" },
      { id: "plant-green", name: "Plante Menthe", defaultColor: "#417441", d: "M 285 295 C 295 285, 315 285, 325 295 C 335 285, 320 270, 305 270 C 290 270, 275 285, 285 295 Z" }
    ]
  },
  {
    id: "chambre",
    name: "Chambre à Coucher",
    label: "Suite Parentale ou Enfant",
    viewBox: "0 0 800 450",
    elements: [
      { id: "bg", name: "Plafond", defaultColor: "#fafafa", d: "M 0 0 L 800 0 L 800 450 L 0 450 Z" },
      { id: "floor", name: "Sol Carrelage beige", defaultColor: "#eae3d2", d: "M 0 350 L 800 350 L 800 450 L 0 450 Z" },
      { id: "headboard-wall", name: "Tête de lit (Mur d'appui)", defaultColor: "COLOR_PLACEHOLDER", d: "M 120 40 L 680 40 L 680 350 L 120 350 Z" },
      { id: "wall-left", name: "Mur Gauche", defaultColor: "#eef2e6", d: "M 0 0 L 120 40 L 120 350 L 0 350 Z" },
      { id: "wall-right", name: "Mur Droit", defaultColor: "#fbf9f4", d: "M 680 40 L 800 0 L 800 350 L 680 350 Z" },
      { id: "bed", name: "Sommier Lit", defaultColor: "#b2abab", d: "M 230 260 L 570 260 L 570 350 L 230 350 Z" },
      { id: "headboard", name: "Tête de lit Cuir", defaultColor: "#6c4d37", d: "M 210 180 L 590 180 L 590 260 L 210 260 Z" },
      { id: "blanket", name: "Couverture de lit", defaultColor: "#4f6e5a", d: "M 240 280 L 560 280 L 560 350 L 240 350 Z" },
      { id: "pillows", name: "Oreillers", defaultColor: "#fcfcfa", d: "M 260 220 L 370 220 L 370 260 L 260 260 Z M 430 220 L 540 220 L 540 260 L 430 260 Z" },
      { id: "pillows-acc", name: "Coussinet Ocre", defaultColor: "#d2a632", d: "M 350 240 L 390 240 L 410 270 L 370 270 Z" },
      { id: "shelf", name: "Table de chevet bois", defaultColor: "#93633e", d: "M 140 290 L 190 290 L 190 350 L 140 350 Z M 610 290 L 660 290 L 660 350 L 610 350 Z" }
    ]
  }
];