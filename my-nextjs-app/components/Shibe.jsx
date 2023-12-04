// pages/components/Shibe.jsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/shibe.css'; // 新しいCSSをインポート

const Shibe = ({ count = 1, urls = true, httpsUrls = true, imageSize = '150px' }) => {
  const [shibeImages, setShibeImages] = useState([]);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const fetchShibeImages = async () => {
      try {
        const apiUrl = `https://shibe.online/api/shibes?count=${count}&urls=${urls}&httpsUrls=${httpsUrls}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setShibeImages(data);
        setIsBannerVisible(true); // バナーを表示
      } catch (error) {
        console.error('Error fetching Shibe images', error);
      }
    };

    // 一定の時間（Xミリ秒）後にバナーを非表示にする
    const hideBannerTimeout = setTimeout(() => {
      setIsBannerVisible(false);
    }, 2000);

    fetchShibeImages();

    // useEffectクリーンアップ関数でタイムアウトをクリア
    return () => clearTimeout(hideBannerTimeout);
  }, [count, urls, httpsUrls]);

  return (
    <div className={styles.bannerContainer} style={{ display: isBannerVisible ? 'block' : 'none' }}>
      {shibeImages.map((shibeImage, index) => (
        <img
          key={index}
          src={shibeImage}
          alt={`Shibe Banner ${index + 1}`}
          style={{ width: imageSize, height: 'auto' }}
        />
      ))}
      <p>サブリミナル柴イッヌ</p>
      {/* ライセンス表記 */}
      <p>
        ※This イッヌ is powered by the <a href="https://shibe.online/" target="_blank" rel="noopener noreferrer">shibe.online API</a>.
        <br />
      </p>
    </div>
  );
};

export default Shibe;