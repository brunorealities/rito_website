import { Case, Ingredient, Step, Testimonial } from './types';

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'arte',
    title: 'Arte',
    description: 'A linguagem que move. Criamos experiências estéticas que abrem percepção antes de qualquer argumento racional.',
    icon: 'ArteIcon',
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    description: 'Ferramenta, não fim. Usamos tecnologia como mediadora de mundos para tornar o invisível habitável.',
    icon: 'TechIcon',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Forma que gera sentido. Cada detalhe tem intenção: guiar a experiência sem que ela perceba que está sendo guiada.',
    icon: 'DesignIcon',
  },
  {
    id: 'futuros',
    title: 'Estudos de Futuros',
    description: 'Método de pensar o amanhã hoje. Mapeamos sinais, construímos cenários e tornamos o futuro algo que se pode tocar.',
    icon: 'FutureIcon',
  },
];

export const CASES: Case[] = [
  {
    id: '1',
    title: 'Alt-G: O Futuro da Genética',
    tag: 'ART DIRECTION',
    description: 'Experiência imersiva que transporta participantes para cenários futuros da genética, explorando dilemas éticos.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/82415a93612165.Y3JvcCw0NjYzLDM2NDcsNDA0LDA.jpg',
  },
  {
    id: '2',
    title: 'Instalação — Inteligências Criadoras',
    tag: 'INSTALAÇÃO',
    description: 'Instalação artística que explora as fronteiras entre inteligência humana e artificial.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/72789d89938465.Y3JvcCw0MTc1LDMyNjYsNzEzLDA.jpg',
  },
  {
    id: '3',
    title: 'Um Dia em 2037',
    tag: 'PERFORMING ARTS',
    description: 'Teatro imersivo que transporta a plateia para um dia cotidiano em 2037.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/aa2eec82519135.Y3JvcCwxMTkyLDkzMywyLDA.jpg',
  },
  {
    id: '4',
    title: 'Sci-fi: Feel — O Futuro da Comunicação',
    tag: 'INTERACTIVE DESIGN',
    description: 'Curta de ficção científica interativo que imagina o futuro da comunicação digital.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/9df18681819345.Y3JvcCw5MjAsNzIwLDc5LDA.jpg',
  },
];

export const STEPS: Step[] = [
  {
    id: 'sinais',
    number: '01',
    title: 'Sinais',
    description: 'Rastreamos tendências, tensões culturais e sinais fracos que indicam mudança antes que ela se consolide.',
  },
  {
    id: 'cenarios',
    number: '02',
    title: 'Cenários',
    description: 'Construímos múltiplos futuros possíveis, não previsões, mas mundos habitáveis que ampliam o campo de decisão.',
  },
  {
    id: 'prototipagem',
    number: '03',
    title: 'Prototipagem narrativa',
    description: 'Transformamos cenários em histórias, objetos e experiências físicas que tornam o abstrato concreto.',
  },
  {
    id: 'experiencia',
    number: '04',
    title: 'Experiência imersiva',
    description: 'A organização vive o futuro antes de decidir sobre ele, criando memória muscular para escolhas estratégicas.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: 'A Rito nos fez ver possibilidades que estavam na nossa frente, mas que a rotina operacional nos impedia de enxergar.',
    author: 'DIRETORA DE INOVAÇÃO',
    role: 'Empresa de consumo, SP',
  },
  {
    id: '2',
    text: 'A experiência imersiva foi fundamental para alinhar nossa visão estratégica de longo prazo.',
    author: 'CEO',
    role: 'Tech Hub, Global',
  },
  {
    id: '3',
    text: 'Um trabalho de profundidade rara, unindo estética impecável e rigor metodológico.',
    author: 'HEAD DE ESTRATÉGIA',
    role: 'Grupo de Mídia, RJ',
  },
];
