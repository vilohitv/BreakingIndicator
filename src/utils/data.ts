import type { Vegetable, PHLevel, FAQ, ProcessStep } from '../types';

export const VEGETABLES: Vegetable[] = [
  {
    id: 'red-cabbage',
    name: 'Red Cabbage',
    role: 'Primary Anthocyanin Source',
    reason: 'Out of everything we tested, red cabbage had by far the strongest colour response. In acid it goes a vivid red, and push it into a strong base and it shifts all the way to yellow-green — a range that makes it genuinely useful as an indicator rather than just decorative.',
    color: '#8b1a5e',
    glowColor: '#c44d8b',
    position: [0, 0, 0],
    emoji: '🥬',
  },
  {
    id: 'red-onion',
    name: 'Red Onion',
    role: 'Stability Enhancer',
    reason: 'A small amount of red onion goes a long way. The flavonoids in the skin slow down pigment degradation, so the indicator holds its colour for longer instead of fading out after an hour. Think of it as the preservative that keeps everything else working.',
    color: '#6b1a3a',
    glowColor: '#a0365e',
    position: [-2.5, 0, -0.5],
    emoji: '🧅',
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    role: 'Color Depth Agent',
    reason: 'Beetroot runs on betalain pigments rather than anthocyanins, so it does not react to pH the same way. What it does do is thicken the colour of the mixture, making subtle differences — especially near neutral — much easier to pick out by eye.',
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
    question: 'What are anthocyanins, and why do they change colour?',
    answer: 'They are natural pigments — the ones responsible for the red and purple colours in a lot of plants. The key part of their structure is something called a flavylium cation, which is sensitive to hydrogen ions. In an acidic environment it picks up protons, absorbs green light, and the solution looks red. Raise the pH and it loses those protons, the molecular structure shifts, and the colour moves through purple, then blue, and eventually yellow if conditions are alkaline enough.',
  },
  {
    question: 'How do I prepare the indicator at home?',
    answer: 'Roughly chop 100g of red cabbage and simmer it in 300ml of distilled water for about 10 minutes — you are looking for the water to turn a deep, dark purple. Strain and cool. Do the same separately with 50g of red onion and 50g of beetroot, then combine all three liquids. That is your indicator. The whole thing takes maybe half an hour.',
  },
  {
    question: 'How does it compare to litmus paper for accuracy?',
    answer: 'For broad classification — acid, neutral, base — it is reliable to roughly half a pH unit. Where it starts to struggle is the middle range, roughly pH 5 to 8, where the colours are close enough that telling them apart by eye gets tricky. Commercial pH paper will always be more precise. But the colour range here is far more interesting to watch, which is kind of the point.',
  },
  {
    question: 'Can you store it and use it later?',
    answer: 'Yes — in a sealed glass bottle in the fridge it will last one to two weeks without much degradation. For longer storage, mix in about 10% rubbing alcohol by volume to slow down the breakdown, or pour portions into an ice cube tray and freeze them. Either way, keep it away from direct light and heat. Both of those destroy anthocyanins faster than almost anything else.',
  },
  {
    question: 'Why do some household bases not give the expected colour?',
    answer: 'Not every base works by just moving protons around. Bleach is the classic example — it is an oxidising agent, and instead of shifting the colour it destroys the pigment entirely, leaving you with a colourless liquid. Some cleaning products contain surfactants that interfere with the pigment structure in unpredictable ways. If you want consistent results, stick to baking soda, washing soda, or very dilute ammonia.',
  },
  {
    question: 'Is it safe to use with younger students?',
    answer: 'The indicator itself is completely food-safe — it is just vegetable juice. The test substances are the thing to be careful about. Strong acids and bases are corrosive, so for any school or home setting keep it to mild household examples: vinegar, lemon juice, baking soda solution. Gloves and eye protection are worth having regardless, and anything from a chemistry lab should stay out of reach entirely.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Prepare the Indicator',
    description: 'Simmer red cabbage, red onion and beetroot separately in distilled water for about 10 minutes each. Strain the solids out and combine the three liquids. You should end up with something deep purple.',
    icon: '1',
    duration: '15 min',
  },
  {
    step: 2,
    title: 'Set Up Your Test Solutions',
    description: 'Pour your test substances into separate clear containers. Vinegar, lemon juice, plain water, dissolved baking soda — anything you want to identify. Label them so you do not lose track.',
    icon: '2',
    duration: '5 min',
  },
  {
    step: 3,
    title: 'Add the Indicator',
    description: 'A couple of millilitres into each container is plenty. Swirl gently so it mixes through. The colour change usually happens within a few seconds — no waiting around.',
    icon: '3',
    duration: '2 min',
  },
  {
    step: 4,
    title: 'Compare and Record',
    description: 'Hold each container up against a white surface and match the colour to the chart. Note down what you see, including any in-between shades — those can tell you something too.',
    icon: '4',
    duration: '5 min',
  },
];
