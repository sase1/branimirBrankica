import React, {useState, useEffect} from "react";
import "./Gallery.css";
import PageHeader from "../components/PageHeader";

const allImages = [
    "https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg",
    "https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?semt=ais_hybrid&w=740",
    "https://cdn.pixabay.com/photo/2020/05/31/12/41/mountain-5242534_640.jpg",
    "https://img.lovepik.com/bg/20240124/Download-HD-Wallpaper-The-Best-Modern-Wallpapers-with-Colorful-Light_3022379_wh1200.jpg",
    "https://wallpapers.com/images/featured/hd-desktop-0tybboag2sq3qa95.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/049/547/330/small_2x/golden-sunset-hd-backgrounds-captivatings-for-serene-scenes-photo.jpg",
    "https://c4.wallpaperflare.com/wallpaper/961/953/301/full-hd-nature-for-pc-1920x1200-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
    "https://wallpapers.com/images/featured/hd-car-o3yvt8dloqz5cvm4.jpg",
    "https://www.nsbpictures.com/wp-content/uploads/2020/04/sunset-hd-background-photos-12-scaled.jpg",
    "https://wallpapers.com/images/hd/yellow-house-and-greenery-best-hd-h5hf3cmcwkls52wo.jpg",
    "https://media.istockphoto.com/id/1280385511/photo/colorful-background.jpg?s=612x612&w=0&k=20&c=kj0PRQlgvWLzA1-1me6iZp5mlwsZhC4QlcvIEb1J1bs=",
    "https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?semt=ais_hybrid&w=740",
];

const imagesPerPage = 12;

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const totalPages = Math.ceil(allImages.length / imagesPerPage);

    const currentImages = allImages.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    );

    const openLightbox = (index) => {
        setLightboxIndex((currentPage - 1) * imagesPerPage + index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const showPrev = () => {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const showNext = () => {
        setLightboxIndex((prev) =>
            prev < allImages.length - 1 ? prev + 1 : prev
        );
    };

    const handleKey = (e) => {
        if (lightboxIndex !== null) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    return (
        <div className="container-fluid text-white">
            <div className="row">
                <div className="col-lg-12">
                    <PageHeader title="Галерија"/>
                </div>
            </div>
            <div className="masonry-grid">
                {currentImages.map((src, idx) => (
                    <div key={idx} className="masonry-item mb-3">
                        <img
                            src={src}
                            alt={`img-${idx}`}
                            className="img-fluid rounded shadow"
                            style={{width: "100%", cursor: "pointer"}}
                            onClick={() => openLightbox(idx)}
                        />
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center align-items-center mt-4 mb-5">
                <button
                    className="btn btn-outline-light me-3"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                >
                    &larr;
                </button>
                <span className="numbers">
          {currentPage} / {totalPages}
        </span>
                <button
                    className="btn btn-outline-light ms-3"
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    &rarr;
                </button>
            </div>

            {lightboxIndex !== null && (
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                >
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
                    <img
                        src={allImages[lightboxIndex]}
                        alt="lightbox"
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="lightbox-controls">
                        <button
                            className="btn btn-light me-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrev();
                            }}
                            disabled={lightboxIndex === 0}
                        >
                            &larr;
                        </button>
                        <button
                            className="btn btn-light"
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                            disabled={lightboxIndex === allImages.length - 1}
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};




