"use client";

import { useEffect, useRef } from "react";

const CONNECTION_DISTANCE = 180;
const NODE_COUNT_DESKTOP = 80;
const NODE_COUNT_MOBILE = 40;
const MOBILE_BREAKPOINT = 768;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glow: number;
}

interface Connection {
  a: number;
  b: number;
}

interface DataPulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function HeroNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let connections: Connection[] = [];
    let pulses: DataPulse[] = [];
    let time = 0;
    let lastPulseSpawn = 0;

    const getNodeCount = () =>
      typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
        ? NODE_COUNT_MOBILE
        : NODE_COUNT_DESKTOP;

    const resize = (width: number, height: number) => {
      const dpr = Math.min(
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
        2
      );

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const nodeCount = getNodeCount();

      if (nodes.length === 0 || nodes.length !== nodeCount) {
        nodes = Array.from({ length: nodeCount }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          radius: 1.5 + Math.random() * 1.5,
          glow: 0.4 + Math.random() * 0.5,
        }));
        connections = [];
        pulses = [];
      } else {
        nodes = nodes.map((n) => ({
          ...n,
          x: Math.min(width - 1, Math.max(1, n.x)),
          y: Math.min(height - 1, Math.max(1, n.y)),
        }));
      }
    };

    const updateConnections = () => {
      connections = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            connections.push({ a: i, b: j });
          }
        }
      }
    };

    const spawnPulse = () => {
      if (connections.length === 0 || reducedMotion) return;
      const conn = connections[Math.floor(Math.random() * connections.length)];
      pulses.push({
        fromNode: conn.a,
        toNode: conn.b,
        progress: 0,
        speed: 0.002 + Math.random() * 0.0015,
      });
      if (pulses.length > 12) pulses.shift();
    };

    const initSize = () => {
      const width = container.offsetWidth || window.innerWidth;
      const height = container.offsetHeight || Math.max(window.innerHeight, 600);
      resize(width, height);
    };

    const draw = () => {
      const dpr = Math.min(
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
        2
      );
      const width = canvas!.width / dpr;
      const height = canvas!.height / dpr;

      ctx.clearRect(0, 0, width, height);

      // Update node positions (slow movement)
      const timeMult = reducedMotion ? 0 : 1;
      nodes.forEach((node) => {
        node.x += node.vx * timeMult;
        node.y += node.vy * timeMult;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      });

      // Update connections each frame (nodes move)
      updateConnections();

      // Spawn data pulse occasionally (~every 2.5s)
      if (!reducedMotion && time - lastPulseSpawn > 2500) {
        spawnPulse();
        lastPulseSpawn = time;
      }

      // Draw thin lines between nearby nodes
      connections.forEach(({ a, b }) => {
        const nodeA = nodes[a];
        const nodeB = nodes[b];
        const dx = nodeB.x - nodeA.x;
        const dy = nodeB.y - nodeA.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const opacity =
          (1 - dist / CONNECTION_DISTANCE) *
          0.12 *
          (reducedMotion ? 0.9 : 0.7 + 0.2 * Math.sin(time * 0.001 + a + b));

        ctx.beginPath();
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      });

      // Update and draw data pulses
      pulses.forEach((pulse, i) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(i, 1);
          return;
        }

        const nodeA = nodes[pulse.fromNode];
        const nodeB = nodes[pulse.toNode];
        const px = nodeA.x + (nodeB.x - nodeA.x) * pulse.progress;
        const py = nodeA.y + (nodeB.y - nodeA.y) * pulse.progress;
        const pulseAlpha = Math.sin(pulse.progress * Math.PI) * 0.9;

        const gradient = ctx.createRadialGradient(
          px, py, 0,
          px, py, 8
        );
        gradient.addColorStop(0, `rgba(34, 211, 238, ${pulseAlpha})`);
        gradient.addColorStop(0.5, `rgba(20, 184, 166, ${pulseAlpha * 0.3})`);
        gradient.addColorStop(1, "rgba(20, 184, 166, 0)");

        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${pulseAlpha})`;
        ctx.fill();
      });

      // Draw glowing nodes
      nodes.forEach((node, i) => {
        const pulse = reducedMotion
          ? 1
          : 0.85 + 0.15 * Math.sin(time * 0.0008 * timeMult + i * 0.4);
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 10
        );
        gradient.addColorStop(0, `rgba(20, 184, 166, ${0.35 * node.glow * pulse})`);
        gradient.addColorStop(0.4, `rgba(34, 211, 238, ${0.12 * node.glow * pulse})`);
        gradient.addColorStop(1, "rgba(20, 184, 166, 0)");

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 10, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.85 * pulse})`;
        ctx.fill();
      });

      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    initSize();
    draw();

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(animationId);
      initSize();
      draw();
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#0a1628" }}
        aria-hidden
      />
    </div>
  );
}
