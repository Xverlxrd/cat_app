'use client'
import {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import {Button} from "@/shared/Button";
import {CheckboxGroup} from "@/shared/CheckboxGroup";
import Image from "next/image";
import {getRandomCatImage} from "@/pages/MainPage/model/lib/getRandomCatImage";

const MainPage = () => {

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const url = await getRandomCatImage();
            setImageUrl(url);
        };
        fetchImage();
    }, []);

    if (!imageUrl) return <div>Loading...</div>;
    console.log(imageUrl);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <CheckboxGroup/>
                <Button className={styles.btn}>Get cat</Button>
                <Image
                    src={imageUrl.url}
                    className={styles.image}
                    alt='Image'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
};

export default MainPage;