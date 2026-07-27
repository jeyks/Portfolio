"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    id: 1,
    image: "/about/me1.jpg",
    title: "A Day Out",
    subtitle: "One of my favorite moments.",
    emoji: "📸",
  },
  {
    id: 2,
    image: "/about/me2.jpg",
    title: "Vacation",
    subtitle: "Enjoying time away from the screen.",
    emoji: "🌤️",
  },
  {
    id: 3,
    image: "/about/me3.jpg",
    title: "Favorite Treat",
    subtitle: "Ice cream always makes the day better.",
    emoji: "🍨",
  },
  {
    id: 4,
    image: "/about/me4.jpg",
    title: "Walking",
    subtitle: "Taking a walk to clear my mind and enjoy the moment.",
    emoji: "🚶",
  },
  {
    id: 5,
    image: "/about/me5.jpg",
    title: "Memories",
    subtitle: "Capturing moments that matter.",
    emoji: "✨",
  },
  {
    id: 6,
    image: "/about/me6.jpg",
    title: "Behind the Wheel",
    subtitle: "Creating memories along the way.",
    emoji: "🚘",
  },
];

export default function PhotoStack() {
  const [cards, setCards] = useState(photos);

  const handleSwipe = (offset: number) => {
    if (Math.abs(offset) < 120) return;

    setCards((prev) => {
      const next = [...prev];
      const first = next.shift();

      if (first) next.push(first);

      return next;
    });
  };

  return (
    <div className="relative mx-auto h-[460px] w-[280px] sm:h-[520px] sm:w-[320px] lg:h-[560px] lg:w-[360px]">
      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[100px]" />

      <AnimatePresence initial={false}>
        {cards.map((card, index) => {
          const isTop = index === 0;

          return (
            <motion.div
              key={card.id}
              layout
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => handleSwipe(info.offset.x)}
              whileDrag={{
                rotate: infoRotation(),
                scale: 1.04,
                cursor: "grabbing",
              }}
              whileHover={
                isTop
                  ? {
                      y: -8,
                      scale: 1.02,
                    }
                  : {}
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              animate={{
                scale: 1 - index * 0.04,
                y: index * 16,
                x: index * 12,
                rotate: index === 0 ? 0 : index % 2 === 0 ? -4 : 4,
              }}
              style={{
                zIndex: cards.length - index,
              }}
              className="absolute left-0 top-0"
            >
              <div
                className="
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-2s
                shadow-lg
                shadow-slate-200/60
                dark:border-white/10
                dark:bg-slate-900
                dark:shadow-2xl
                dark:shadow-black/40
                sm:p-3
                "
              >
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={340}
                    height={430}
                    className="h-[400px] w-[340px] rounded-2xl object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                    {card.emoji} {card.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-slate-500 sm:-bottom-10 sm:text-sm">
        ← Drag the photo →
      </p>
    </div>
  );
}

function infoRotation() {
  return Math.random() > 0.5 ? 8 : -8;
}
