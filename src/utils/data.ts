import type { Vegetable, PHLevel, FAQ, ProcessStep } from '../types';

export const VEGETABLES: Vegetable[] = [
  {
    id: 'red-cabbage',
    name: 'Red Cabbage',
    scientificName: 'Brassica oleracea',
    role: 'Primary Anthocyanin Source',
    reason: 'Red cabbage contains the highest concentration of anthocyanins among common vegetables. These pigments undergo dramatic color shifts across the full pH spectrum — from vivid red in acids to deep green-yellow in strong bases — making it the backbone of our indicator.',
    color: '#8b1a5e',
    glowColor: '#c44d8b',
    position: [0, 0, 0],
    emoji: '🥬',
  },
  {
    id: 'red-onion',
    name: 'Red Onion',
    scientificName: 'Allium cepa',
    role: 'Stability Enhancer',
    reason: 'Red onion provides a complementary anthocyanin profile that broadens the indicator\'s sensitivity range. Its flavonoids stabilize the pigment mixture, preventing degradation and ensuring consistent color readings across temperature variations.',
    color: '#6b1a3a',
    glowColor: '#a0365e',
    position: [-2.5, 0, -0.5],
    emoji: '🧅',
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    scientificName: 'Beta vulgaris',
    role: 'Color Depth Agent',
    reason: 'Beetroot\'s betalain pigments — betacyanins and betaxanthins — add richness and depth to the indicator\'s color transitions. While less pH-sensitive than anthocyanins, they enhance visual contrast and help distinguish subtle pH differences in the neutral range.',
    color: '#5c0a2a',
    glowColor: '#8b1a45',
    position: [2.5, 0, -0.5],
    emoji: '🫐',
  },
];

export const PH_LEVELS: PHLevel[] = [
  {
    range: '1–3',
    label: 'Strong Acid',
    color: '#dc2626',
    textColor: '#fff',
    ph: '≈ pH 1–3',
    examples: ['Hydrochloric acid', 'Battery acid', 'Lemon juice'],
    indicatorColor: 'Bright Red / Pink',
  },
  {
    range: '4–5',
    label: 'Weak Acid',
    color: '#ea580c',
    textColor: '#fff',
    ph: '≈ pH 4–5',
    examples: ['Vinegar', 'Orange juice', 'Coffee'],
    indicatorColor: 'Red-Purple',
  },
  {
    range: '6–7',
    label: 'Neutral',
    color: '#7c3aed',
    textColor: '#fff',
    ph: '≈ pH 6–7',
    examples: ['Pure water', 'Milk', 'Blood'],
    indicatorColor: 'Deep Violet',
  },
  {
    range: '8–9',
    label: 'Weak Base',
    color: '#059669',
    textColor: '#fff',
    ph: '≈ pH 8–9',
    examples: ['Baking soda', 'Sea water', 'Toothpaste'],
    indicatorColor: 'Blue-Green',
  },
  {
    range: '10–14',
    label: 'Strong Base',
    color: '#16a34a',
    textColor: '#fff',
    ph: '≈ pH 10–14',
    examples: ['Bleach', 'Ammonia', 'Sodium hydroxide'],
    indicatorColor: 'Yellow-Green',
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'What are anthocyanins and why do they change color?',
    answer: 'Anthocyanins are water-soluble pigments found in many red, purple, and blue plants. Their molecular structure contains a flavylium cation that gains or loses protons depending on the pH of the surrounding solution. In acidic conditions, the molecule is positively charged and absorbs green light, appearing red. As pH increases, deprotonation shifts the absorption spectrum, producing purples, blues, and eventually yellows in strongly alkaline conditions.',
  },
  {
    question: 'How do I prepare the natural pH indicator?',
    answer: 'Chop approximately 100g of red cabbage into small pieces and place them in a pot with 300ml of distilled water. Simmer for 10 minutes until the water turns deep purple. Strain the liquid, discarding the solids. Allow to cool, then repeat with red onion (50g) and beetroot (50g), combining all three extracts. The combined solution is your indicator.',
  },
  {
    question: 'How accurate is this indicator compared to litmus paper?',
    answer: 'Natural anthocyanin indicators are generally accurate to within ±0.5 pH units for broad classification. They excel at distinguishing strong vs weak acids and bases, but may struggle with precise readings in the 5–8 range. Commercial pH paper is calibrated more precisely, but our natural indicator provides excellent qualitative results and has the advantage of showing beautiful, distinct color changes.',
  },
  {
    question: 'Can the indicator be preserved for later use?',
    answer: 'Yes — store the indicator in a sealed, airtight glass bottle in the refrigerator. It will remain effective for 1–2 weeks. To extend shelf life, you can add a small amount of rubbing alcohol (10% by volume) as a preservative, or freeze it in ice cube trays for storage up to 3 months. Avoid exposure to strong light or heat, which degrade anthocyanins.',
  },
  {
    question: 'Why do some household bases not produce the expected color?',
    answer: 'Household bases often contain compounds that react with the pigments beyond simple proton transfer. For example, bleach (sodium hypochlorite) is an oxidizing agent that permanently decolorizes the anthocyanins rather than shifting their color. Similarly, some cleaners contain surfactants that can affect the pigment structure. For reliable results, use simple ionic compounds like baking soda, washing soda, or dilute ammonia.',
  },
  {
    question: 'Is this indicator safe to use with children?',
    answer: 'The indicator itself is made from food-grade vegetables and is non-toxic. However, the substances used to test the pH may not be safe — strong acids and strong bases are corrosive. Always supervise children, use protective gloves and eyewear, and restrict the experiment to mild household solutions like vinegar, lemon juice, and baking soda. Never allow children to handle concentrated laboratory chemicals.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Prepare the Indicator',
    description: 'Simmer red cabbage, red onion, and beetroot in distilled water for 10 minutes. Strain and combine the deep purple extracts into a single solution.',
    icon: '1',
    duration: '15 min',
  },
  {
    step: 2,
    title: 'Prepare Test Solutions',
    description: 'Fill separate test tubes or clear glasses with your test solutions — vinegar, lemon juice, water, baking soda solution, and ammonia water at varying concentrations.',
    icon: '2',
    duration: '5 min',
  },
  {
    step: 3,
    title: 'Add the Indicator',
    description: 'Add 2–3 ml of the indicator to each test solution. Observe the immediate color change. Swirl gently to ensure thorough mixing and stable color development.',
    icon: '3',
    duration: '2 min',
  },
  {
    step: 4,
    title: 'Compare & Record',
    description: 'Hold each solution against a white background and compare the color to the reference chart. Record your observations. Note that subtle variations indicate intermediate pH values.',
    icon: '4',
    duration: '5 min',
  },
];
