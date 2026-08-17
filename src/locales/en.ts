type Translations = {
    [key: string]: string | Translations | Translations[] | any[];
};

export const en: Translations = {
    nav: {
        work: "Work",
        process: "Process",
        about: "About",
        portfolio: "Portfolio",
        como: "How",
        contact: "Contact"
    },
    hero: {
        title: "Reimagination Technologies",
        subtitle: "Immersive experiences to live complex scenarios, create memory of futures and impact cultures.",
        cta1: "I want to design an experience",
        cta2: "View portfolio",
        since: "Since 2016 creating experiences for large organizations",
        futures: "Futures",
        art: "Art",
        design: "Design",
        technology: "Technology"
    },
    ingredients: {
        lead: "We are a creative studio of strategic imagination and experiential futures.",
        description: "We design experiences and scenarios that help organizations, governments, and communities visualize and build more creative and resilient futures.",
        columns: [
            {
                title: "STRATEGIC REIMAGINATION",
                subtitle: "To expand vision, dive into signals of futures, and co-create unprecedented paths.",
                items: [
                    "WORKSHOPS AND IMMERSIONS",
                    "SPECULATIVE GAMES",
                    "FORESIGHT FOR DECISION MAKING"
                ]
            },
            {
                title: "EXPERIENTIAL FUTURES",
                subtitle: "To experience futures on the skin, provoke deep reflections, enchant, and engage.",
                items: [
                    "INSTALLATIONS AND PERFORMANCES",
                    "ARTIFACT DESIGN",
                    "TRANSMEDIA NARRATIVES"
                ]
            }
        ]
    },
    cases: {
        title: "Portfolio",
        viewProject: "View project",
        viewAllProjects: "View all projects",
        items: [
            {
                title: "Alt-G: The Future of Genetics",
                description: "Immersive experience that transports participants to future scenarios of genetics, exploring ethical dilemmas."
            },
            {
                title: "Installation — Creating Intelligences",
                description: "Art installation that explores the boundaries between human and artificial intelligence."
            },
            {
                title: "A Day in 2037",
                description: "Immersive theater that transports the audience to an everyday day in 2037."
            },
            {
                title: "Sci-fi: Feel — The Future of Communication",
                description: "Interactive science fiction short film that imagines the future of digital communication."
            }
        ]
    },
    howWeWork: {
        title: "How we work",
        description: "Our methodology combines futurology, speculative design, and immersive facilitation to transform organizations that need to decide today about tomorrow.",
        cta: "I want to design an experience",
        steps: [
            {
                title: "Signals",
                description: "We track trends, cultural tensions, and weak signals that indicate change before it consolidates."
            },
            {
                title: "Scenarios",
                description: "We build multiple possible futures, not predictions, but inhabitable worlds that expand the field of decision."
            },
            {
                title: "Narrative prototyping",
                description: "We transform scenarios into stories, objects, and physical experiences that make the abstract concrete."
            },
            {
                title: "Immersive experience",
                description: "The organization experiences the future before deciding on it, creating muscle memory for strategic choices."
            }
        ]
    },
    manifesto: {
        title: "Map. Imagine. Systematize. Ilustrate. Experience.",
        paragraph1: "Futurology is not about predicting what will happen. It is about expanding the field of possibilities to stimulate courageous decisions and anticipate complex situations. We do this through unique experiences that engage the senses and emotions, creating memories of the future and catalyzing change in the present.",
    },
    testimonials: {
        title: "What they say about us:",
        items: [
            {
                text: "Rito made us see possibilities that were right in front of us, but the operational routine prevented us from seeing.",
                author: "INNOVATION DIRECTOR",
                role: "Consumer company, SP"
            },
            {
                text: "The immersive experience was fundamental to align our long-term strategic vision.",
                author: "CEO",
                role: "Tech Hub, Global"
            },
            {
                text: "A work of rare depth, uniting impeccable aesthetics and methodological rigor.",
                author: "HEAD OF STRATEGY",
                role: "Media Group, RJ"
            }
        ]
    },
    cta: {
        title: "Ready to reimagine your organization's future?",
        button: "I want to design an experience",
        namePlaceholder: "Name/Organization",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message"
    },
    footer: {
        tags: [
            "RITO - REIMAGINATION TECHNOLOGIES",
            "2026",
            "contato@rito.cc",
            "@rito.cc"
        ]
    }
};
