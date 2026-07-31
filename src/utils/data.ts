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
    answer: 'They are pigments found naturally in a lot of red and purple plants: red cabbage, blueberries, red onion, that sort of thing. The reason they change colour is down to a part of the molecule called the flavylium cation, which picks up or drops protons depending on how acidic the solution is. In acid it absorbs green light so it looks red. Add base, it loses protons, the structure shifts, and the colour walks up through purple and blue. At very high pH it goes yellow.',
  },
  {
    question: 'How do I prepare the natural pH indicator?',
    answer: 'Chop up about 100g of red cabbage and simmer it in 300ml of water for 10 minutes or so until the water turns a deep purple. Strain out the bits and leave it to cool. Repeat with 50g of red onion and 50g of beetroot separately, then mix all three liquids together. That is your indicator. It should be a dark purplish colour.',
  },
  {
    question: 'How accurate is this compared to litmus paper?',
    answer: 'Roughly accurate to about half a pH unit, which is good enough for telling strong acid from weak acid, or weak base from strong base. It struggles a bit between pH 5 and 8 where the colours are closer together and harder to read. Litmus paper is more precise. But honestly the colour shifts on this are much more dramatic and interesting to watch than a paper strip turning slightly pink.',
  },
  {
    question: 'Can the indicator be preserved for later use?',
    answer: 'Yeah, just seal it in a glass bottle and stick it in the fridge. It keeps for a week or two that way. If you want it to last longer, add around 10% rubbing alcohol to slow down degradation, or freeze small portions in an ice cube tray, which keep for up to three months. Avoid leaving it in direct light or anywhere warm, both speed up breakdown.',
  },
  {
    question: 'Why do some household bases not produce the expected colour?',
    answer: 'Not all bases work the same way. Bleach, for instance, is an oxidiser. It does not just change the pH. It destroys the pigment entirely and the liquid just goes clear. Some cleaning products also have surfactants that interfere with the pigment structure. Stick to simple stuff like baking soda or washing soda if you want consistent results.',
  },
  {
    question: 'Is this safe to use with children?',
    answer: 'The indicator itself is just vegetable juice so it is fine. What you test with is a different story. Strong acids and bases are corrosive and will burn skin. If kids are involved, keep the test solutions to mild household things like vinegar, lemon juice and baking soda, and have them wear gloves. No concentrated lab acids or bases.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Prepare the Indicator',
    description: 'Simmer red cabbage, red onion and beetroot separately in water for about 10 minutes each until the water picks up a strong colour. Strain out the solids and combine the three liquids. You should end up with a dark purplish solution.',
    icon: '1',
    duration: '15 min',
  },
  {
    step: 2,
    title: 'Prepare Test Solutions',
    description: 'Fill small clear glasses or test tubes with whatever you want to test. Vinegar, lemon juice, tap water and baking soda solution are good starting points. They are easy to get and cover the acid-to-base range nicely.',
    icon: '2',
    duration: '5 min',
  },
  {
    step: 3,
    title: 'Add the Indicator',
    description: 'Add 2 to 3ml of indicator to each solution and give it a gentle swirl. The colour change usually happens almost immediately, sometimes within a second of mixing.',
    icon: '3',
    duration: '2 min',
  },
  {
    step: 4,
    title: 'Compare and Record',
    description: 'Hold each glass against a white background and compare it to the chart. Write down the colour you see. Even small differences in shade are worth noting. They can tell you whether something is a weak or strong acid or base.',
    icon: '4',
    duration: '5 min',
  },
];
