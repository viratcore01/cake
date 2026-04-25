'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const frameNames = [
  "Create_video_breaking_202604251826_001.jpg",
  "Create_video_breaking_202604251826_002.jpg",
  "Create_video_breaking_202604251826_003.jpg",
  "Create_video_breaking_202604251826_004.jpg",
  "Create_video_breaking_202604251826_005.jpg",
  "Create_video_breaking_202604251826_008.jpg",
  "Create_video_breaking_202604251826_009.jpg",
  "Create_video_breaking_202604251826_010.jpg",
  "Create_video_breaking_202604251826_012.jpg",
  "Create_video_breaking_202604251826_013.jpg",
  "Create_video_breaking_202604251826_014.jpg",
  "Create_video_breaking_202604251826_016.jpg",
  "Create_video_breaking_202604251826_017.jpg",
  "Create_video_breaking_202604251826_018.jpg",
  "Create_video_breaking_202604251826_019.jpg",
  "Create_video_breaking_202604251826_021.jpg",
  "Create_video_breaking_202604251826_022.jpg",
  "Create_video_breaking_202604251826_023.jpg",
  "Create_video_breaking_202604251826_024.jpg"
];

export default function CakeScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    frameNames.forEach((name, index) => {
      const img = new Image();
      img.src = `/images/${name}`;
      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;
        if (loadedCount === frameNames.length) {
          setImages(loadedImages);
          // Draw first frame immediately when all loaded
          drawFrame(loadedImages, 0);
        }
      };
    });
  }, []);

  const drawFrame = (imgs: HTMLImageElement[], frameIndex: number) => {
    if (!canvasRef.current || imgs.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgs[frameIndex];
    if (!img) return;

    // Use dimensions that scale properly
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Set to window size
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      resizeCanvas();
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate aspect ratios (cover behavior)
    const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // Handle window resize dynamically to redraw current frame
  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const frameIndex = Math.floor(scrollYProgress.get() * (images.length - 1));
        drawFrame(images, frameIndex);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  // Framer Motion hook to track scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    let frameIndex = Math.floor(latest * (images.length - 1));
    // Clamp
    frameIndex = Math.max(0, Math.min(frameIndex, images.length - 1));
    // Important optimization: use requestAnimationFrame
    requestAnimationFrame(() => drawFrame(images, frameIndex));
  });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#110A0A]">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{
          opacity: images.length > 0 ? 1 : 0, 
          transition: "opacity 1s ease-in-out"
        }}
      />
      {/* Soft overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#110A0A]/80 via-transparent to-[#110A0A]/90 pointer-events-none mix-blend-multiply" />
    </div>
  );
}
