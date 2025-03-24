export const ASSETS_BASE_URL =
  'https://alvai-assets.s3.eu-west-3.amazonaws.com';

export const projects = [
  {
    title: 'pokedexTitle',
    description: 'pokedexDescription',
    github: 'https://github.com/Alvai/pokedex',
    image: `${ASSETS_BASE_URL}/pokedex-square.webp`,
    stack: ['Javascript', 'HTML', 'CSS'],
    missions: 'pokedexMissions',
  },
  {
    title: 'golemAiTitle',
    description: 'golemAiDescription',
    website: 'https://golem.ai',
    image: `${ASSETS_BASE_URL}/golem-square.webp`,
    stack: ['PHP', 'Symfony'],
    missions: 'golemAiMissions',
  },
  {
    title: 'homepilotTitle',
    description: 'homepilotDescription',
    website: 'https://estimation-loyer.homepilot.fr',
    image: `${ASSETS_BASE_URL}/homepilot-square.webp`,
    stack: ['React.js', 'Node.js'],
    missions: 'homepilotMissions',
  },
  {
    title: 'tooShortTitle',
    description: 'tooShortDescription',
    github: 'https://github.com/Alvai/too-short',
    image: `${ASSETS_BASE_URL}/short-square.webp`,
    stack: ['Node.js'],
    missions: 'tooShortMissions',
  },
  {
    title: 'deezwebTitle',
    description: 'deezwebDescription',
    github: 'https://github.com/Alvai/deezweb',
    image: `${ASSETS_BASE_URL}/deezweb-square.webp`,
    stack: ['Vue.js'],
    missions: 'deezwebMissions',
  },
  {
    title: 'citioTitle',
    description: 'citioDescription',
    website: 'https://cit.io',
    image: `${ASSETS_BASE_URL}/citio-square.webp`,
    stack: ['D3', 'React.js', 'Crossfilter'],
    missions: 'citioMissions',
  },
];
