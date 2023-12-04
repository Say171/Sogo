// pages/index.jsx

import React from 'react';
import Link from 'next/link';
import QRCodeGenerator from '../components/QRCodeGenerator';
import Shibe from '../components/Shibe';
import styles from '../styles/style.css';

const HomePage = () => {
  return (
    <div id = "home">
      {/* Header */}
      <header className={styles.header}>
        <h1>やぁ |ω・｀）ﾉ ﾔｧ</h1>
        <nav id="g_navi">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className={styles.mainContainer}>
        {/* Shibe */}
        <section>
          <Shibe count={1} urls={true} httpsUrls={true} imageSize="500px" />
        </section>
        <section className={styles.mainSection}>
          <h2>歓迎するよ。</h2>
          <p>てすと てすと てすと てすと てすと てすと</p>
        </section>
        <section>
          {/* QR Code Generator */}
          <QRCodeGenerator />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>ページ作成者:s5422036 原 清太朗</p>
        <p>&copy; 日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
      </footer>
    </div>
  );
};

export default HomePage;
