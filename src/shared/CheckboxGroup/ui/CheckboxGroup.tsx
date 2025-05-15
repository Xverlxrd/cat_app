'use client';
import styles from './CheckboxGroup.module.scss';

export const CheckboxGroup = () => {
    return (
        <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkboxInput} />
                <span className={styles.checkboxText}>Enabled</span>
            </label>

            <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkboxInput} />
                <span className={styles.checkboxText}>Auto-refresh every 5 seconds</span>
            </label>
        </div>
    );
};

