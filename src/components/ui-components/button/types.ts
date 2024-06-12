import { ReactNode } from 'react';

export type ButtonType = {
    cyId: string,
    type: 'button' | 'submit' | 'reset',
    children: ReactNode,
    style: {
        background?: string,
        fontSize?: string,
        fontWeight?: string,
        color?: string,
        borderRadius?: string,
    },
    onClick: () => void,
    disabled: boolean,
};
