import { style, trigger, state, transition, animate } from "@angular/animations";

export const ExpandAndContractAnimation = (height, grow) => {
    return trigger(`ExpandAndContractAnimation${height}by${grow}`, [
        state('0', style({
            overflow: 'hidden',
            height: `${height}px`
        })),
        state('1', style({
            overflow: 'hidden',
            height: `${height + grow}px`
        })),
        transition('1 => 0', animate('1000ms ease-in-out')),
        transition('0 => 1', animate('1000ms ease-in-out'))
    ]);
};