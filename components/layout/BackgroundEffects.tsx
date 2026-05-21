"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";

const STAR_COLORS = ["#ffffff", "#fee77e", "#c8d8ff", "#ffd1a3"];
const STAR_COUNT = 200;

function createStar(): HTMLDivElement {
  const star = document.createElement("div");
  const size = Math.random() * 2.5 + 0.5;
  const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
  star.className = "star";
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animation = `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`;
  star.style.animationDelay = Math.random() * 4 + "s";
  star.style.background = color;
  if (size > 2) {
    star.style.boxShadow = `0 0 ${size * 2}px ${color}`;
  }
  return star;
}

function createShootingStar(): HTMLDivElement {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 15 + "s";
  star.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
  return star;
}

export default function BackgroundEffects() {
  const { theme } = useTheme();
  const starRef = useRef<HTMLDivElement>(null);
  const meteorRef = useRef<HTMLDivElement>(null);
  const isLight = theme === "celestial-terminal-light";

  useEffect(() => {
    if (isLight) {
      if (starRef.current) starRef.current.innerHTML = "";
      if (meteorRef.current) meteorRef.current.innerHTML = "";
      return;
    }

    const starEl = starRef.current;
    if (starEl) {
      starEl.innerHTML = "";
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < STAR_COUNT; i++) {
        fragment.appendChild(createStar());
      }
      starEl.appendChild(fragment);
    }

    const meteorEl = meteorRef.current;
    if (meteorEl) {
      meteorEl.innerHTML = "";
      const mFragment = document.createDocumentFragment();
      for (let i = 0; i < 4; i++) {
        mFragment.appendChild(createShootingStar());
      }
      meteorEl.appendChild(mFragment);
    }
  }, [isLight]);

  return (
    <>
      <div className="nebula-overlay" />
      {isLight ? (
        <div className="light-ambient">
          <div className="light-star" /><div className="light-star" /><div className="light-star" />
          <div className="light-star" /><div className="light-star" /><div className="light-star" />
          <div className="light-star" /><div className="light-star" /><div className="light-star" />
          <div className="light-star" /><div className="light-star" /><div className="light-star" />
          <div className="light-star" /><div className="light-star" /><div className="light-star" />
        </div>
      ) : (
        <>
          <div ref={starRef} className="star-field" />
          <div ref={meteorRef} className="meteor-field" />
          <div className="glow-orb" style={{ top: "5%", left: "-8%", background: "#FEE77E", width: "500px", height: "500px", opacity: 0.12 }} />
          <div className="glow-orb" style={{ top: "50%", right: "-10%", background: "#6366f1", width: "450px", height: "450px", opacity: 0.08 }} />
          <div className="glow-orb" style={{ bottom: "10%", left: "15%", background: "#a855f7", width: "350px", height: "350px", opacity: 0.06 }} />
        </>
      )}
    </>
  );
}
