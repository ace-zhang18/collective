import { style, trigger, state, transition, animate } from "@angular/animations";

export const WidenAndShrinkAnimation = (width, grow) => {
    return trigger(`WidenAndShrinkAnimation${width}by${grow}`, [
        state('0', style({
            overflow: 'hidden',
            width: `${width}vw`
        })),
        state('1', style({
            overflow: 'hidden',
            width: `${width + grow}vw`
        })),
        transition('1 => 0', animate('1000ms ease-in-out')),
        transition('0 => 1', animate('1000ms ease-in-out'))
    ]);
};