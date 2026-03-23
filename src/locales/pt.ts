type Translations = {
    [key: string]: string | Translations | Translations[] | any[];
};

export const pt: Translations = {
    nav: {
        work: "Trabalho",
        process: "Processo",
        about: "Sobre",
        portfolio: "Portfolio",
        como: "Como",
        contact: "Contato"
    },
    hero: {
        title: "Tecnologias de Reimaginação",
        subtitle: "Experiências imersivas para vivenciar cenários complexos, criar memória de futuros e impactar culturas.",
        cta1: "Quero desenhar uma experiência",
        cta2: "Ver portfolio",
        since: "Desde 2016 criando experiências para grandes organizações",
        futures: "Futuros",
        art: "Arte",
        design: "Design",
        technology: "Tecnologia"
    },
    ingredients: {
        lead: "Somos um estúdio criativo de imaginação estratégica e futuros experienciais.",
        description: "Projetamos experiências e cenários que ajudam organizações, governos e comunidades a visualizar e construir futuros mais criativos e resilientes.",
        columns: [
            {
                title: "REIMAGINAÇÃO ESTRATÉGICA",
                subtitle: "Para expandir a visão, mergulhar em sinais de futuros e cocriar caminhos inéditos.",
                items: [
                    "WORKSHOPS E IMERSÕES",
                    "JOGOS ESPECULATIVOS",
                    "FORESIGHT PARA TOMADA DE DECISÕES"
                ]
            },
            {
                title: "FUTUROS EXPERIENCIAIS",
                subtitle: "Para experimentar futuros na pele, provocar reflexões profundas, encantar e engajar.",
                items: [
                    "INSTALAÇÕES E PERFORMANCES",
                    "DESIGN DE ARTEFATOS",
                    "NARRATIVAS TRANSMÍDIA"
                ]
            }
        ]
    },
    cases: {
        title: "Portfolio",
        viewProject: "Ver projeto",
        viewAllProjects: "Ver todos os projetos",
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
                description: "Teatro imersivo que especula sobre o futuro da comunicação digital."
            }
        ]
    },
    howWeWork: {
        title: "Como fazemos",
        description: "Nossa metodologia combina futurologia, design especulativo e facilitação imersiva para transformar organizações que precisam decidir hoje sobre o amanhã.",
        cta: "Quero desenhar uma experiência",
        steps: [
            {
                title: "Sinais",
                description: "Rastreamos tendências, tensões culturais e sinais fracos que indicam mudança antes que ela se consolide."
            },
            {
                title: "Cenários",
                description: "Construímos múltiplos futuros possíveis, não previsões, mas possibilidades que ampliam o campo de decisão."
            },
            {
                title: "Prototipagem narrativa",
                description: "Transformamos cenários em histórias, objetos e experiências físicas que tornam o abstrato concreto e emocionalmente real."
            },
            {
                title: "Experiência imersiva",
                description: "Criamos experiências envolventes e memoráveis para vivenciar situações de futuros com todos os sentidos."
            }
        ]
    },
    manifesto: {
        title: "Mapear. Imaginar. Sistematizar. Ilustrar. Experimentar.",
        paragraph1: "Futurologia não é prever o que vai acontecer. É ampliar o campo do possível  para estimular decisões corajosas e antecipar situações complexas. Fazemos isso através de experiências únicas que sensibilizam e emocionam para criar memórias de futuros e catalisar mudanças no presente. "
    },
    testimonials: {
        title: "Depoimentos:",
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
        button: "Quero desenhar uma experiência",
        namePlaceholder: "Nome/Organização",
        emailPlaceholder: "E-mail",
        messagePlaceholder: "Mensagem"
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
