import React, { useRef, useEffect } from 'react';

const WaveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let y = height - height / 3;
    let amplitude = 50;
    let frequency = 0.02;
    let phase = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(0, y);

      for (let i = 0; i <= width; i++) {
        const waveY = amplitude * Math.sin(frequency * i + phase) + y;
        ctx.lineTo(i, waveY);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0d6efd'); // Adjusted color
      gradient.addColorStop(1, 'rgba(13, 110, 253, 0.5)'); // Adjusted color with transparency
      ctx.fillStyle = gradient;
      ctx.fill();

      phase -= 0.05;
      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => window.removeEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />;
};

export default WaveBackground;
