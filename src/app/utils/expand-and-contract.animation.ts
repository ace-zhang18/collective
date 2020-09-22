import { style, trigger, state, transition, animate } from "@angular/animations";

export const ExpandAndContractAnimation = (height, grow) => {
    return trigger(`ExpandAndContractAnimation${height}by${grow}`, [
        state('0', style({
            overflow: 'hidden',
            height: `${height}vh`
        })),
        state('1', style({
            overflow: 'hidden',
            height: `${height + grow}vh`
        })),
        transition('1 => 0', animate('1000ms ease-in-out')),
        transition('0 => 1', animate('1000ms ease-in-out'))
    ]);
};