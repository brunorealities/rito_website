type Translations = {
    [key: string]: string | Translations | Translations[] | any[];
};

export const pt: Translations = {
    nav: {
        work: "Trabalho",
        process: "Processo",
        about: "Sobre",
        contact: "Contato"
    },
    hero: {
        title: "Tecnologias de reimaginação para organizações que precisam decidir no presente.",
        subtitle: "Experiências imersivas para vivenciar cenários complexos, criar memória de futuros e mover cultura.",
        cta1: "Quero desenhar uma experiência",
        cta2: "Ver Cases",
        since: "Desde 2016",
        futures: "Estudos de Futuros",
        art: "Arte",
        design: "Design",
        technology: "Tecnologia"
    },
    ingredients: {
        title: "Ingredientes",
        subtitle: "Quatro dimensões que se entrelaçam em cada projeto que a gente cria.",
        items: [
            {
                title: "Arte",
                description: "A linguagem que move. Criamos experiências estéticas que abrem percepção antes de qualquer argumento racional."
            },
            {
                title: "Tecnologia",
                description: "Ferramenta, não fim. Usamos tecnologia como mediadora de mundos para tornar o invisível habitável."
            },
            {
                title: "Design",
                description: "Forma que gera sentido. Cada detalhe tem intenção: guiar a experiência sem que ela perceba que está sendo guiada."
            },
            {
                title: "Estudos de Futuros",
                description: "Método de pensar o amanhã hoje. Mapeamos sinais, construímos cenários e tornamos o futuro algo que se pode tocar."
            }
        ]
    },
    cases: {
        title: "Cases Reais",
        viewProject: "Ver projeto",
        items: [
            {
                title: "Alt-G: O Futuro da Genética",
                description: "Experiência imersiva que transporta participantes para cenários futuros da genética, explorando dilemas éticos."
            },
            {
                title: "Instalação — Inteligências Criadoras",
                description: "Instalação artística que explora as fronteiras entre inteligência humana e artificial."
            },
            {
                title: "Um Dia em 2037",
                description: "Teatro imersivo que transporta a plateia para um dia cotidiano em 2037."
            },
            {
                title: "Sci-fi: Feel — O Futuro da Comunicação",
                description: "Curta de ficção científica interativo que imagina o futuro da comunicação digital."
            }
        ]
    },
    howWeWork: {
        title: "Como a gente trabalha",
        description: "Nossa metodologia combina futurologia, design especulativo e facilitação imersiva para transformar organizações que precisam decidir hoje sobre o amanhã.",
        cta: "Quero desenhar uma experiência",
        steps: [
            {
                title: "Sinais",
                description: "Rastreamos tendências, tensões culturais e sinais fracos que indicam mudança antes que ela se consolide."
            },
            {
                title: "Cenários",
                description: "Construímos múltiplos futuros possíveis, não previsões, mas mundos habitáveis que ampliam o campo de decisão."
            },
            {
                title: "Prototipagem narrativa",
                description: "Transformamos cenários em histórias, objetos e experiências físicas que tornam o abstrato concreto."
            },
            {
                title: "Experiência imersiva",
                description: "A organização vive o futuro antes de decidir sobre ele, criando memória muscular para escolhas estratégicas."
            }
        ]
    },
    manifesto: {
        title: "Mapear. Imaginar. Sistematizar. Ilustrar. Experimentar.",
        paragraph1: "Futurologia não é prever o que vai acontecer. É ampliar o campo do possível para que as organizações tomem decisões mais corajosas e mais bem fundamentadas ainda no presente.",
        paragraph2: "A Rito traduz esse método em experiências que o corpo e a emoção entendem antes da cabeça decidir."
    },
    testimonials: {
        title: "O que falam de nós:",
        items: [
            {
                text: "A Rito nos fez ver possibilidades que estavam na nossa frente, mas que a rotina operacional nos impedia de enxergar.",
                author: "DIRETORA DE INOVAÇÃO",
                role: "Empresa de consumo, SP"
            },
            {
                text: "A experiência imersiva foi fundamental para alinhar nossa visão estratégica de longo prazo.",
                author: "CEO",
                role: "Tech Hub, Global"
            },
            {
                text: "Um trabalho de profundidade rara, unindo estética impecável e rigor metodológico.",
                author: "HEAD DE ESTRATÉGIA",
                role: "Grupo de Mídia, RJ"
            }
        ]
    },
    cta: {
        title: "Pronto para reimaginar o futuro da sua organização?",
        button: "Quero desenhar uma experiência"
    },
    footer: {
        tags: [
            "RITO - TECNOLOGIAS DE REIMAGINAÇÃO",
            "2026",
            "contato@rito.cc",
            "@rito.cc"
        ]
    }
};
