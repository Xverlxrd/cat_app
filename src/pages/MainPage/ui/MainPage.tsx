'use client'
import { useState } from 'react';
import styles from './MainPage.module.scss';
import { Button } from "@/shared/Button";
import { CheckboxGroup } from "@/shared/CheckboxGroup";
import Image from "next/image";
import { getRandomCatImage } from "@/app/lib/getRandomCatImage";
import {Loading} from "@/shared/Loading";

interface CatImage {
    breeds: [],
    id: string,
    url: string,
    width: number,
    height: number
}

const MainPage = () => {
    const [imageUrl, setImageUrl] = useState<CatImage | null>(null);
    const [enabled, setEnabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchImage = async () => {
        if (!enabled) return;

        setLoading(true);
        setError(null);

        try {
            const url = await getRandomCatImage();
            setImageUrl(url);
        } catch (err) {
            setError('Failed to load cat image');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <CheckboxGroup
                    fetchImageAction={fetchImage}
                    enabled={enabled}
                    setEnabledAction={setEnabled}
                />

                <Button
                    enabled={enabled && !loading}
                    className={styles.btn}
                    onClick={fetchImage}
                    disabled={loading}
                >
                    {'Get cat'}
                </Button>

                {error && <p className={styles.error}>{error}</p>}

                <div className={styles.imageContainer}>
                    {loading ? (
                        <div className={styles.loading}>
                            <Loading />
                        </div>
                        ) : imageUrl ? (
                        <Image
                            src={imageUrl.url}
                            className={styles.image}
                            alt='Random cat'
                            width={250}
                            height={250}
                            priority
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default MainPage;