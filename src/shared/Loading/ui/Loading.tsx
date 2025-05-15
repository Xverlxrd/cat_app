import styles from './Loading.module.scss';

export const Loading = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.circle}>
                <div className={styles.circle_into}>
                </div>
            </div>
            <div className={styles.loader}>Loading cat...</div>
        </div>
    );
};

