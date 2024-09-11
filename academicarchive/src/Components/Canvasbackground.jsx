import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#FF6F61');
      gradient.addColorStop(0.5, '#FFB57A');
      gradient.addColorStop(1, '#FF61A6');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const wave = (x, y, t) => {
        const amplitude = 10;
        const frequency = 0.05;
        return amplitude * Math.sin(frequency * (x + t)) + amplitude * Math.cos(frequency * (y + t));
      };

      for (let x = 0; x < width; x += 10) {
        for (let y = 0; y < height; y += 10) {
          const xOffset = wave(x, y, offset);
          const yOffset = wave(y, x, offset);

          ctx.beginPath();
          ctx.arc(x + xOffset, y + yOffset, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.fill();
        }
      }

      offset += 1;
      requestAnimationFrame(draw);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default CanvasBackground;
