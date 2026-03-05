import { useControls, folder } from 'leva';
import { DEBUG } from '../config/debugConfig';

/**
 * Hook independente para gerenciar os controles dos pássaros.
 * Isso permite que a lógica de UI fique separada da lógica de renderização 3D.
 */
export function useBirdsControls() {
    const controls = useControls({
        'Controles dos Pássaros': folder({
            separation: { value: 21., min: 0.0, max: 100.0, step: 1.0 },
            alignment: { value: 54.75, min: 0.0, max: 100.0, step: 0.001 },
            cohesion: { value: 51.55, min: 0.0, max: 100.0, step: 0.025 },
            freedom: { value: 0.51, min: 0.0, max: 1.0, step: 0.01 },
            opacity: { value: 0.2, min: 0.0, max: 1.0, step: 0.01 },
            birdColor: '#f5da76'
        }, { collapsed: false, render: () => DEBUG })
    });

    return controls;
}
