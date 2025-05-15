'use client';

import type { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

export enum ButtonTheme {
    primary = 'primary',
    secondary = 'secondary',
    clear = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
                                            className = '',
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
            className={`${styles.Button} ${className} ${styles[theme]}`}
            {...otherProps}
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
};

