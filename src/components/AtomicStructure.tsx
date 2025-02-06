import React, { useRef, useEffect } from 'react';
import { atomicColors, atomicStructures, atomicSymbols, atomicNames } from '../data/atomic-data';

interface AtomicStructureProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const AtomicStructure: React.FC<AtomicStructureProps> = ({ canvasRef, videoRef }) => {
  const frameCountRef = useRef(0);
  const animationFrameRef = useRef<number>();

  const drawAtomicStructure = (
    ctx: CanvasRenderingContext2D,
    center: { x: number; y: number },
    orbits: number[],
    frameCount: number,
    atomicNumber: number,
    bonded = false
  ) => {
    const nucleusRadius = 25;
    const orbitalSpacing = 60;

    // Draw nucleus
    ctx.beginPath();
    ctx.arc(center.x, center.y, nucleusRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Draw atom symbol
    const symbol = atomicSymbols[atomicNumber as keyof typeof atomicSymbols] || '?';
    const atomName = atomicNames[atomicNumber as keyof typeof atomicNames];
    const atomColor = atomicColors[atomName as keyof typeof atomicColors] || '#000000';

    ctx.font = '20px Arial';
    ctx.fillStyle = atomColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol, center.x, center.y);

    if (bonded) return;

    // Draw orbits and electrons
    orbits.forEach((numElectrons, i) => {
      const orbitRadius = (i + 1) * orbitalSpacing;

      // Draw orbit
      ctx.beginPath();
      ctx.arc(center.x, center.y, orbitRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw electrons
      for (let j = 0; j < numElectrons; j++) {
        const angle = (j * 360 / numElectrons + frameCount * 3) * (Math.PI / 180);
        const x = center.x + orbitRadius * Math.cos(angle);
        const y = center.y + orbitRadius * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#00FF00';
        ctx.fill();
      }
    });
  };

  const render = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !video || !ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw video frame
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Simulate marker detection (replace with actual marker detection)
    const markerData = [
      { id: 1, center: { x: 200, y: 200 } },
      { id: 8, center: { x: 400, y: 400 } }
    ];

    // Draw atomic structures
    markerData.forEach(marker => {
      const atomStructure = atomicStructures[marker.id as keyof typeof atomicStructures];
      if (atomStructure) {
        drawAtomicStructure(ctx, marker.center, [...atomStructure], frameCountRef.current, marker.id);
      }
    });

    frameCountRef.current++;
    animationFrameRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    render();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return null;
};