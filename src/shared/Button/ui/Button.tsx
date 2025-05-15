'use client';

import type { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

export enum ButtonTheme {
    primary = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    onClick?: () => void;
    enabled?: boolean
}

export const Button: FC<ButtonProps> = ({
                                            className = '',
                                            enabled = true,
                                            theme = ButtonTheme.primary,
                                            onClick,
                                            children,
                                            ...otherProps
                                        }) => {

    const handleOnClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            disabled={!enabled}
            className={`
                ${styles.Button} 
                ${!enabled ? styles.btn_enabled : ''} 
                ${className} 
                ${styles[theme]}
            `}
            {...otherProps}
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
};

