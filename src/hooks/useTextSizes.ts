import { useControls, folder } from 'leva';

export interface TextSizes {
    heroTitle: number;
    heroTitleMaxWidth: number;
    heroTitleLineHeight: number;
    heroTitleLetterSpacing: number;
    heroSubtitle: number;
    heroSubtitleMaxWidth: number;
    heroSubtitleLineHeight: number;
    heroAlign: 'left' | 'center' | 'right';
    sectionTitle: number;
    sectionTitleMaxWidth: number;
    sectionTitleLineHeight: number;
    sectionAlign: 'left' | 'center' | 'right';
    bodyText: number;
    bodyMaxWidth: number;
    bodyLineHeight: number;
    metaText: number;
    metaLetterSpacing: number;
}

export function useTextSizes() {
    const sizes = useControls('Typography', {
        Hero: folder({
            heroTitle: { value: 66, min: 40, max: 200, step: 2, label: 'Title Size (px)' },
            heroTitleMaxWidth: { value: 800, min: 400, max: 2000, step: 50, label: 'Title Max Width (px)' },
            heroTitleLineHeight: { value: 1.0, min: 0.5, max: 2.0, step: 0.05, label: 'Title Line Height' },
            heroTitleLetterSpacing: { value: -1.5, min: -10, max: 10, step: 0.5, label: 'Title Letter Spacing (px)' },

            heroSubtitle: { value: 26, min: 12, max: 60, step: 1, label: 'Subtitle Size (px)' },
            heroSubtitleMaxWidth: { value: 600, min: 200, max: 1200, step: 20, label: 'Subtitle Max Width (px)' },
            heroSubtitleLineHeight: { value: 1.2, min: 0.5, max: 2.0, step: 0.05, label: 'Subtitle Line Height' },

            heroAlign: { options: { Left: 'left', Center: 'center', Right: 'right' }, value: 'left', label: 'Hero Alignment' },
        }),
        Sections: folder({
            sectionTitle: { value: 48, min: 24, max: 120, step: 2, label: 'Header Size (px)' },
            sectionTitleMaxWidth: { value: 1000, min: 300, max: 1600, step: 50, label: 'Header Max Width (px)' },
            sectionTitleLineHeight: { value: 1.1, min: 0.5, max: 2.0, step: 0.05, label: 'Header Line Height' },
            sectionAlign: { options: { Left: 'left', Center: 'center', Right: 'right' }, value: 'left', label: 'Section Alignment' },

            bodyText: { value: 18, min: 12, max: 32, step: 1, label: 'Body Size (px)' },
            bodyMaxWidth: { value: 800, min: 200, max: 1200, step: 20, label: 'Body Max Width (px)' },
            bodyLineHeight: { value: 1.6, min: 0.5, max: 2.5, step: 0.1, label: 'Body Line Height' },

            metaText: { value: 10, min: 8, max: 16, step: 1, label: 'Meta Size (px)' },
            metaLetterSpacing: { value: 2, min: 0, max: 10, step: 0.5, label: 'Meta Letter Spacing (px)' },
        }),
    });

    return sizes;
}
