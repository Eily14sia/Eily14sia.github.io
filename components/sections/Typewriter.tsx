"use client";
import { useEffect, useState } from "react";
import { typewriterWords } from "@/lib/data";

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIdx < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 150);
    } else if (!deleting && charIdx === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 75);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((wordIdx + 1) % typewriterWords.length);
      timeout = setTimeout(() => {}, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <span className="font-headline-md text-headline-md text-primary typewriter-cursor">
      {text}
    </span>
  );
}
