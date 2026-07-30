import type { Vegetable, PHLevel, FAQ, ProcessStep } from '../types';

export const VEGETABLES: Vegetable[] = [
  {
    id: 'red-cabbage',
    name: 'Red Cabbage',
    role: 'Primary Anthocyanin Source',
    reason: 'Red cabbage has the most anthocyanins out of all the common vegetables we looked at. It turns a vivid red in acids and goes all the way to yellow-green in strong bases, which makes it the main part of our indicator.',
    color: '#8b1a5e',
    glowColor: '#c44d8b',
    position: [0, 0, 0],
    emoji: '🥬',
  },
  {
    id: 'red-onion',
    name: 'Red Onion',
    role: 'Stability Enhancer',
    reason: 'Red onion has its own set of anthocyanins that help keep the mixture stable. Its flavonoids slow down how fast the pigments break down, so the colours stay consistent even when temperature changes a bit.',
    color: '#6b1a3a',
    glowColor: '#a0365e',
    position: [-2.5, 0, -0.5],
    emoji: '🧅',
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    role: 'Color Depth Agent',
    reason: 'Beetroot uses betalain pigments instead of anthocyanins. They are not as sensitive to pH on their own but they add a lot of depth to the colour and make it easier to spot small differences, especially around neutral pH.',
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
    examples: ['Substance E', 'Hydrochloric acid', 'Battery acid'],
    indicatorColor: 'Bright Red',
  },
  {
    range: '4–5',
    label: 'Weak Acid',
    color: '#e11d6a',
    textColor: '#fff',
    ph: '≈ pH 4–5',
    examples: ['Substance B', 'Vinegar', 'Orange juice'],
    indicatorColor: 'Bright Pinkish Red',
  },
  {
    range: '6–7',
    label: 'Neutral',
    color: '#7c3aed',
    textColor: '#fff',
    ph: '≈ pH 6–7',
    examples: ['Substance A', 'Substance D', 'Tap water'],
    indicatorColor: 'Violet',
  },
  {
    range: '8–9',
    label: 'Weak Alkali',
    color: '#1d4ed8',
    textColor: '#fff',
    ph: '≈ pH 8–9',
    examples: ['Substance C', 'Baking soda', 'Sea water'],
    indicatorColor: 'Deep Dark Blue',
  },
  {
    range: '10–14',
    label: 'Strong Alkali',
    color: '#16a34a',
    textColor: '#fff',
    ph: '≈ pH 10–14',
    examples: ['Substance F', 'Bleach', 'Ammonia'],
    indicatorColor: 'Yellow-Green',
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'What are anthocyanins and why do they change colour?',
    answer: 'Anthocyanins are natural pigments found in a lot of red, purple and blue plants. Their structure has something called a flavylium cation that picks up or loses protons depending on how acidic the solution around it is. In acid the molecule carries a positive charge and absorbs green light, so it looks red. As the pH goes up it loses those protons and the colour shifts through purple, blue and eventually yellow in very alkaline conditions.',
  },
  {
    question: 'How do I prepare the natural pH indicator?',
    answer: 'Chop about 100g of red cabbage into small pieces and simmer with 300ml of distilled water for around 10 minutes until the water goes a deep purple. Strain out the solids and let it cool. Do the same with red onion (50g) and beetroot (50g), then mix all three extracts together. That combined liquid is your indicator.',
  },
  {
    question: 'How accurate is this compared to litmus paper?',
    answer: 'It is generally accurate to within about half a pH unit for broad classification. It works really well for telling apart strong and weak acids or bases but can struggle a bit in the 5 to 8 range where colours look similar. Commercial pH paper is more precise but our indicator gives great qualitative results and the colour changes are genuinely much nicer to look at.',
  },
  {
    question: 'Can the indicator be preserved for later use?',
    answer: 'Yes. Pour it into a sealed glass bottle and keep it in the fridge, it stays good for one to two weeks. If you want it to last longer you can add a bit of rubbing alcohol, around 10% by volume, or freeze portions in an ice cube tray for up to three months. Just keep it away from strong light and heat as both break down anthocyanins pretty quickly.',
  },
  {
    question: 'Why do some household bases not produce the expected colour?',
    answer: 'Some bases do more than just transfer protons. Bleach for example is an oxidising agent that permanently destroys the pigment rather than shifting its colour, so you just get a colourless liquid. Some cleaners also have surfactants that mess with the pigment structure. For reliable results stick to simple things like baking soda, washing soda or dilute ammonia.',
  },
  {
    question: 'Is this safe to use with children?',
    answer: 'The indicator itself is made from vegetables so it is non-toxic and safe. The substances you test with are a different matter though. Strong acids and bases are corrosive so always supervise children, have them wear gloves and eye protection, and keep the experiment to mild household things like vinegar, lemon juice and baking soda. Do not let children anywhere near concentrated lab chemicals.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Prepare the Indicator',
    description: 'Simmer red cabbage, red onion and beetroot in distilled water for 10 minutes. Strain each one and combine the extracts into a single deep purple solution.',
    icon: '1',
    duration: '15 min',
  },
  {
    step: 2,
    title: 'Prepare Test Solutions',
    description: 'Fill separate test tubes or clear glasses with your test solutions. Vinegar, lemon juice, water, baking soda solution and ammonia water all work well.',
    icon: '2',
    duration: '5 min',
  },
  {
    step: 3,
    title: 'Add the Indicator',
    description: 'Add 2 to 3 ml of the indicator into each solution and watch the colour change happen. Give it a gentle swirl to make sure it mixes evenly.',
    icon: '3',
    duration: '2 min',
  },
  {
    step: 4,
    title: 'Compare and Record',
    description: 'Hold each solution against a white background and compare it to the colour chart. Write down what you see. Slight differences in shade can point to intermediate pH values.',
    icon: '4',
    duration: '5 min',
  },
];
