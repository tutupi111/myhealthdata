"use client";

import { useEffect, useRef } from "react";

const LINES = 12;
const CHARS = "{}[]();=>const function return import export";

export function CodePatternBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement?.offsetWidth || window.innerWidth;
      const height = canvas.parentElement?.offsetHeight || 400;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const width = canvas!.width / (window.devicePixelRatio || 1);
      const height = canvas!.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      ctx.font = "12px monospace";
      const lineHeight = 20;
      const charWidth = 8;

      for (let i = 0; i < LINES; i++) {
        const y = ((i * lineHeight + offset) % (height + lineHeight)) - lineHeight;
        const startX = (offset * 0.3 + i * 50) % (width + 200) - 100;

        let x = startX;
        const lineLength = 15 + (i % 10);
        for (let j = 0; j < lineLength; j++) {
          const char = CHARS[(i + j + Math.floor(offset / 30)) % CHARS.length];
          const alpha = 0.03 + 0.02 * Math.sin(offset * 0.02 + i + j);
          ctx.fillStyle = `rgba(20, 184, 166, ${alpha})`;
          ctx.fillText(char, x, y);
          x += charWidth;
        }
      }

      offset += reducedMotion ? 0 : 0.5;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden
    />
  );
}
