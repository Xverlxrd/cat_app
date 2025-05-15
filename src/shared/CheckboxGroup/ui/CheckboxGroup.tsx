'use client';
import styles from './CheckboxGroup.module.scss';
import {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";

interface CheckboxGroupProps {
    enabled: boolean,
    setEnabledAction: Dispatch<SetStateAction<boolean>>,
    fetchImageAction: () => Promise<void>,
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ enabled, setEnabledAction, fetchImageAction }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [autoRefresh, setAutoRefresh] = useState(false);

    const handleEnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnabledAction(e.target.checked);
    };

    const handleAutoRefreshChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutoRefresh(e.target.checked);
    };

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (autoRefresh && enabled) {
            intervalRef.current = setInterval(fetchImageAction, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoRefresh, enabled, fetchImageAction]);

    return (
        <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
                <input
                    checked={enabled}
                    onChange={handleEnabledChange}
                    type="checkbox"
                    className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>Enabled</span>
            </label>

            <label className={styles.checkboxLabel}>
                <input
                    checked={autoRefresh}
                    onChange={handleAutoRefreshChange}
                    type="checkbox"
                    className={styles.checkboxInput}
                    disabled={!enabled}
                />
                <span className={styles.checkboxText}>Auto-refresh every 5 seconds</span>
            </label>
        </div>
    );
};