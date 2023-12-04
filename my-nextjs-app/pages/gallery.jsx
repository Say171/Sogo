import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/img.css';

export default function App() {
  const images = [
    { src: "/images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "/images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "/images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "/images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "/images/pic5.jpg", alt: "Large moth on a leaf" },
  ];

  // ステートの宣言と初期化
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isDarkened, setIsDarkened] = useState(false);

  // サムネイルがクリックされたときの処理
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setIsDarkened(false); // 画像が暗くなっている状態をリセット
  };

  // "Darken"ボタンがクリックされたときの処理
  const handleDarkenClick = () => {
    setIsDarkened(!isDarkened); // 画像を暗く/明るくする状態を切り替え
  };

  // オーバーレイのスタイル
  // 条件 ? 真の場合の値 : 偽の場合の値
  // transparent: 透明になる
  const overlayStyle = {
    backgroundColor: isDarkened ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
  };

  return (
    <>
      <div id="image-gallery-app">
        <h1>Image gallery</h1>
      </div>

      <div>
        <p>&ldquo;エモ&rdquo;</p>
      </div>

      <div className="full-img">
        {/* 画像の表示 */}
        <Image
          className={`displayed-img ${isDarkened ? 'darkened' : ''}`}
          src={selectedImage.src}
          alt={selectedImage.alt}
          width={640}
          height={480}
        />
      </div>
      <div className="thumb-bar">
        {/* サムネイルバー */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}

        <p>※著作権法第35条の解釈のもとの作成</p>
        <Link href="/">戻る</Link>
      </div>
    </>
  );
}
