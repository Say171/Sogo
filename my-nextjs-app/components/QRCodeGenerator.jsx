// QRCodeGenerator.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'; // next/imageを追加

const QRCodeGenerator = () => {
  const [qrCodeText, setQRCodeText] = useState('好きな言葉を入れてね');
  const [qrCodeImage, setQRCodeImage] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await axios.get('https://api.qrserver.com/v1/create-qr-code/', {
        params: {
          data: qrCodeText,
          size: '200x200', // QRコードのサイズ
        },
        responseType: 'blob', // 画像データを取得するために必要
      });

      if (response.status === 200) {
        const imageUrl = URL.createObjectURL(response.data);
        setQRCodeImage(imageUrl);
      } else {
        console.error('Failed to generate QR code');
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div>
      <h2>QRコードジェネレーター</h2>
      <div>
        <label htmlFor="qrCodeText">Enter text for QR code:</label>
        <input
          type="text"
          id="qrCodeText"
          value={qrCodeText}
          onChange={(e) => setQRCodeText(e.target.value)}
        />
      </div>
      <p>
        <button onClick={generateQRCode}>Generate QR Code</button>
      </p>

      {qrCodeImage && (
        <div>
          <h3>Generated QR Code:</h3>
          <Image
            src={qrCodeImage}
            alt="QR Code"
            width={200}
            height={200}
          />
        </div>
      )}

      {/* ライセンス表記 */}
      <p>
        ※This QR code generation is powered by the <a href="http://goqr.me/api/" target="_blank" rel="noopener noreferrer">goqr.me API</a>.
        <br />
      </p>
    </div>
  );
};

export default QRCodeGenerator;
