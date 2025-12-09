"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

const Manage = dynamic(() => import("../components/manage"), { ssr: false });

type Props = {
  pdfUrl?: string;
  initialPage?: number;
  pageWidth?: number;
};

export default function BookReader({
  pdfUrl = "/book.pdf",
  initialPage = 0,
  pageWidth = 900,
}: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState<number>(initialPage);

  const [flipping, setFlipping] = useState(false);
  const flipFrontRef = useRef<HTMLDivElement | null>(null);
  const flipBackRef = useRef<HTMLDivElement | null>(null);

  const [flipFrontImage, setFlipFrontImage] = useState<string | null>(null);
  const [flipBackImage, setFlipBackImage] = useState<string | null>(null);

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true), []);

  // Load PDF Pages
  useEffect(() => {
    let cancelled = false;

    async function loadPDF() {
      setLoading(true);
      try {
        const loadingTask = getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const imgs: string[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) break;

          const page = await pdf.getPage(i);

          const viewport = page.getViewport({ scale: 1 });
          const scale = pageWidth / viewport.width;
          const vp = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = Math.round(vp.width);
          canvas.height = Math.round(vp.height);

          const ctx = canvas.getContext("2d")!;
          await page.render({ canvasContext: ctx, viewport: vp, canvas }).promise;

          imgs.push(canvas.toDataURL("image/jpeg", 0.95));
        }

        if (!cancelled) {
          setImages(imgs);
          setCurrentIndex(Math.min(initialPage, imgs.length - 1));
        }
      } catch (err) {
        console.error("PDF load error", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPDF();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl, pageWidth, initialPage]);

  // Flip Next
  const flipNext = async () => {
    if (flipping || currentIndex + 1 >= images.length) return;

    const nextIndex = currentIndex + 1;
    setFlipping(true);

    // Set flip images
    setFlipFrontImage(images[currentIndex]);
    setFlipBackImage(images[nextIndex]);

    await new Promise((r) => setTimeout(r, 20));

    flipFrontRef.current?.classList.add("flip-next");

    // Wait animation fully
    setTimeout(() => {
      flipFrontRef.current?.classList.remove("flip-next");
      setCurrentIndex(nextIndex);
      setFlipping(false);
    }, 700);
  };

  // Flip Prev
  const flipPrev = async () => {
    if (flipping || currentIndex === 0) return;

    const prevIndex = currentIndex - 1;
    setFlipping(true);

    setFlipFrontImage(images[currentIndex]);
    setFlipBackImage(images[prevIndex]);

    await new Promise((r) => setTimeout(r, 20));

    flipFrontRef.current?.classList.add("flip-prev");

    setTimeout(() => {
      flipFrontRef.current?.classList.remove("flip-prev");
      setCurrentIndex(prevIndex);
      setFlipping(false);
    }, 700);
  };

  if (!isBrowser) return null;

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-start py-20 bg-gradient-to-b from-[#fdf8f0] to-[#fff9f0] relative">

      {/* BEAUTIFUL 3D PAGE + SHADOW EFFECTS */}
      <style jsx>{`
        .book-container {
          position: relative;
          width: 90%;
          max-width: 1000px;
          min-height: 650px;
          background: #fdfdf8;
          border-radius: 18px;
          box-shadow: 0 35px 85px rgba(0, 0, 0, 0.25),
            inset 0 0 55px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          perspective: 1800px;
        }

        .page {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: #fffdf2;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          overflow: hidden;
          padding: 28px;
          box-shadow: inset 0 0 18px rgba(0, 0, 0, 0.08);
        }

        .page img {
          max-width: 96%;
          max-height: 96%;
          object-fit: contain;
          border-radius: 10px;
          background: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
          border: 1px solid #eadcc7;
        }

        /* STATIC PAGE — fade smoothly, DO NOT vanish */
        .visible-page {
          opacity: 1;
          transition: opacity 0.2s ease-in-out;
        }

        .visible-page.hidden {
          opacity: 0;
        }

        /* FLIP PAGES */
        .flip-front,
        .flip-back {
          background: white;
          z-index: 20;
          backface-visibility: hidden;
        }

        .flip-front {
          transform-origin: left;
        }

        .flip-back {
          transform-origin: left;
          transform: rotateY(180deg);
        }

        /* 3D SHADOW WHILE FLIPPING */
        .flip-front.flip-next,
        .flip-front.flip-prev {
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.25),
            inset 0 0 50px rgba(0, 0, 0, 0.2);
        }

        /* NEXT FLIP ANIMATION */
        .flip-next {
          animation: flipNext 0.7s forwards ease-in-out;
        }

        @keyframes flipNext {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-80deg) skewY(1deg);
          }
          100% {
            transform: rotateY(-180deg) skewY(0deg);
          }
        }

        /* PREV FLIP ANIMATION */
        .flip-prev {
          animation: flipPrev 0.7s forwards ease-in-out;
        }

        @keyframes flipPrev {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(80deg) skewY(-1deg);
          }
          100% {
            transform: rotateY(180deg) skewY(0deg);
          }
        }

        /* NAV AREAS */
        .side-nav {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 50;
        }

        .side-nav:hover {
          background: rgba(0, 0, 0, 0.06);
        }

        .left-nav {
          left: 0;
        }

        .right-nav {
          right: 0;
        }

        .nav-arrow {
          font-size: 34px;
          font-weight: bold;
          color: #8b5e3c;
        }

        .page-number {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 15px;
          font-weight: 600;
          color: #8b5e3c;
        }
      `}</style>

      <div className="book-container">

        {loading ? (
          <div className="flex items-center justify-center h-full text-[#8b5e3c] font-semibold text-lg">
            Loading PDF…
          </div>
        ) : (
          <>
            {/* STATIC PAGE — FADE OUT INSTEAD OF REMOVED */}
            <div
              className={
                "page visible-page " + (flipping ? "hidden" : "visible")
              }
            >
              <img src={images[currentIndex]} />
            </div>

            {/* FLIP ANIMATION LAYERS */}
            {flipping && (
              <>
                <div className="page flip-back" ref={flipBackRef}>
                  <img src={flipBackImage ?? ""} />
                </div>

                <div className="page flip-front" ref={flipFrontRef}>
                  <img src={flipFrontImage ?? ""} />
                </div>
              </>
            )}

            {/* NAVIGATION */}
            <div className="side-nav left-nav" onClick={flipPrev}>
              <span className="nav-arrow">←</span>
            </div>

            <div className="side-nav right-nav" onClick={flipNext}>
              <span className="nav-arrow">→</span>
            </div>

            {/* PAGE NUMBER */}
            <div className="page-number">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
