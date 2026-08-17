import { useControls, folder } from 'leva';

export interface TextSizes {
    heroTitle: number;
    heroTitleMaxWidth: number;
    heroTitleLineHeight: number;
    heroTitleLetterSpacing: number;
    heroTitleSizeMin: number;
    heroTitleSizeVw: number;
    heroTitleSizeMax: number;
    heroMarginBottom: number;
    heroLeftColSpan: number;
    heroRightColSpan: number;
    heroIconSize: number;
    heroSubtitleMarginTop: number;
    heroSubtitle: number;
    heroSubtitleMaxWidth: number;
    heroSubtitleLineHeight: number;
    heroBrandsWidth: number;
    heroTitleMarginRight: number;
    heroSubtitleMarginLeft: number;
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
    brandsMarginTop: number;
    brandsPaddingTop: number;
    brandsMaxWidth: number;
    brandsOpacity: number;
    heroPadding: number;
    heroMinHeight: number;
    ingredientsPadding: number;
    ingredientsMinHeight: number;
    casesPadding: number;
    casesMinHeight: number;
    howWeWorkPadding: number;
    howWeWorkMinHeight: number;
    manifestoPadding: number;
    manifestoMinHeight: number;
    testimonialsPadding: number;
    testimonialsMinHeight: number;
    ingredientsColGap: number;
    ingredientsRowGap: number;
    casesGridGap: number;
    workStackGap: number;
    sectionHeaderGap: number;
}

export function useTextSizes() {
    const sizes = useControls('Typography', {
        Hero: folder({
            heroTitle: { value: 66, min: 40, max: 200, step: 2, label: 'Size (px)' },
            heroTitleMaxWidth: { value: 900, min: 400, max: 2000, step: 50, label: 'Max Width (px)' },
            heroTitleLineHeight: { value: 0.95, min: 0.5, max: 2.0, step: 0.05, label: 'Line Height' },
            heroTitleLetterSpacing: { value: -0.08, min: -0.1, max: 0.1, step: 0.01, label: 'Letter Spacing (em)' },

            heroTitleSizeMin: { value: 48, min: 20, max: 150, step: 1, label: 'Title Size Min (px)' },
            heroTitleSizeVw: { value: 6, min: 1, max: 15, step: 0.1, label: 'Title Size (vw)' },
            heroTitleSizeMax: { value: 96, min: 40, max: 200, step: 1, label: 'Title Size Max (px)' },
            heroMarginBottom: { value: 40, min: 0, max: 150, step: 2, label: 'Title Margin B. (px)' },

            heroLeftColSpan: { value: 8, min: 1, max: 12, step: 1, label: 'Left Col Span (md)' },
            heroRightColSpan: { value: 4, min: 1, max: 12, step: 1, label: 'Right Col Span (md)' },

            heroTitleMarginRight: { value: 0, min: 0, max: 400, step: 2, label: 'Título Margin R (px)' },
            heroSubtitleMarginLeft: { value: 102, min: -200, max: 400, step: 2, label: 'Subtítulo Margin L (px)' },

            heroIconSize: { value: 104, min: 20, max: 150, step: 2, label: 'Icon Size (px)' },
            heroSubtitleMarginTop: { value: 64, min: 0, max: 200, step: 4, label: 'Subtitle Gap Top (px)' },

            heroSubtitle: { value: 12, min: 5, max: 60, step: 1, label: 'Sub Size (px)' },
            heroSubtitleMaxWidth: { value: 600, min: 200, max: 1200, step: 20, label: 'Sub Max Width' },
            heroSubtitleLineHeight: { value: 1.65, min: 0.5, max: 2.0, step: 0.05, label: 'Sub Line Height' },

            heroBrandsWidth: { value: 130, min: 20, max: 170, step: 1, label: 'Tamanho Marcas (%)' },

            heroAlign: { options: { Left: 'left', Center: 'center', Right: 'right' }, value: 'left', label: 'Alignment' },

            brandsMarginTop: { value: 64, min: 0, max: 200, step: 4, label: 'Brands Top (px)' },
            brandsPaddingTop: { value: 48, min: 0, max: 150, step: 4, label: 'Brands Space (px)' },
            brandsMaxWidth: { value: 100, min: 10, max: 100, step: 5, label: 'Brands Width (%)' },
            brandsOpacity: { value: 0.7, min: 0, max: 1, step: 0.05, label: 'Brands Opacity' },
        })
    });

    const hiddenFallbackSizes = {
        sectionTitle: 48,
        sectionTitleMaxWidth: 1000,
        sectionTitleLineHeight: 1.1,
        sectionAlign: 'left' as const,
        bodyText: 18,
        bodyMaxWidth: 800,
        bodyLineHeight: 1.6,
        metaText: 10,
        metaLetterSpacing: 2,
        heroPadding: 0,
        heroMinHeight: 0,
        ingredientsPadding: 72,
        ingredientsMinHeight: 0,
        casesPadding: 88,
        casesMinHeight: 0,
        howWeWorkPadding: 88,
        howWeWorkMinHeight: 0,
        manifestoPadding: 48,
        manifestoMinHeight: 0,
        testimonialsPadding: 72,
        testimonialsMinHeight: 0,
        ingredientsColGap: 24,
        ingredientsRowGap: 16,
        casesGridGap: 24,
        workStackGap: 48,
        sectionHeaderGap: 64,
    };

    return { ...sizes, ...hiddenFallbackSizes } as TextSizes;
}
