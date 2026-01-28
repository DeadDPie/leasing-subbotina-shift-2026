import { useState } from "react";
import { API_URL } from "@/shared/constants/url";
import type { CarMedia } from "@/shared/types/car";
import styles from "./CarGallery.module.css";

interface CarGalleryProps {
	media: CarMedia[];
}
export const CarGallery = ({ media }: CarGalleryProps) => {
	const cover = media.find((m) => m.isCover);
	const defaultSrc = cover ? `${API_URL}${cover.url}` : "/placeholder-car.png";

	const [currentImage, setCurrentImage] = useState(defaultSrc);

	if (media.length === 0) {
		return <p>Изображения не найдены.</p>;
	}

	return (
		<figure className={styles.gallery}>
			<img className={styles.cover} src={currentImage} />
			<div className={styles.thumbnails_list}>
				{media.map((image) => (
					<img
						onClick={() => setCurrentImage(`${API_URL}${image.url}`)}
						key={image.url}
						className={styles.thumbnail}
						src={`${API_URL}${image.url}`}
					/>
				))}
			</div>
		</figure>
	);
};
