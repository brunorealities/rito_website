type Translations = {
    [key: string]: string | Translations | Translations[] | any[];
};

export const en: Translations = {
    nav: {
        work: "Work",
        process: "Process",
        about: "About",
        contact: "Contact"
    },
    hero: {
        title: "Reimagination technologies for organizations that need to decide in the present.",
        subtitle: "Immersive experiences to live complex scenarios, create memory of futures and move culture.",
        cta1: "I want to design an experience",
        cta2: "View Cases",
        since: "Since 2016",
        futures: "Futures Studies",
        art: "Art",
        design: "Design",
        technology: "Technology"
    },
    ingredients: {
        title: "Ingredients",
        subtitle: "Four dimensions that intertwine in every project we create.",
        items: [
            {
                title: "Art",
                description: "The language that moves. We create aesthetic experiences that open perception before any rational argument."
            },
            {
                title: "Technology",
                description: "A tool, not an end. We use technology as a mediator of worlds to make the invisible inhabitable."
            },
            {
                title: "Design",
                description: "Form that generates meaning. Every detail has an intention: to guide the experience without it realizing it's being guided."
            },
            {
                title: "Futures Studies",
                description: "A method of thinking about tomorrow today. We map signals, build scenarios, and make the future something you can touch."
            }
        ]
    },
    cases: {
        title: "Real Cases",
        viewProject: "View project",
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
        title: "Map. Imagine. Systematize. Illustrate. Experience.",
        paragraph1: "Futurology is not about predicting what will happen. It is expanding the realm of the possible so organizations can make braver and better-founded decisions in the present.",
        paragraph2: "Rito translates this method into experiences the body and emotion understand before the mind decides."
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
        button: "I want to design an experience"
    },
    footer: {
        tags: [
            "RITO - REIMAGINATION TECHNOLOGIES",
            "2026",
            "contact@rito.cc",
            "@rito.cc"
        ]
    }
};
