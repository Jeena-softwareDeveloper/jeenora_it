"use client";

import { motion } from "framer-motion";
import { ImageIcon, Play } from "lucide-react";
import { EASE_OUT } from "@/lib/animations";

interface MediaPlaceholderProps {
  /** "image" or "video". Controls the placeholder icon and how a provided src is rendered. */
  type?: "image" | "video";
  /**
   * When you upload your asset, set this to its path (e.g. "/screenshots/dashboard.png"
   * or "/videos/demo.mp4"). While empty, a styled placeholder slot is shown instead.
   */
  src?: string;
  /** Poster image for videos (shown before play). */
  poster?: string;
  alt?: string;
  /** Caption shown inside the empty slot, e.g. "Dashboard Screenshot". */
  label?: string;
  /** Small hint under the label, e.g. recommended size "1280 × 720". */
  hint?: string;
  /** Tailwind aspect + sizing classes, e.g. "aspect-video", "aspect-[16/7]". */
  className?: string;
  rounded?: string;
}

/**
 * Drop-in media slot. Renders the real image/video once `src` is provided,
 * otherwise shows a polished placeholder so the layout looks intentional.
 */
export default function MediaPlaceholder({
  type = "image",
  src,
  poster,
  alt = "",
  label = "Image",
  hint,
  className = "aspect-video",
  rounded = "rounded-2xl",
}: MediaPlaceholderProps) {
  const hasMedia = Boolean(src);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`group relative overflow-hidden border border-gray-100 shadow-sm bg-white ${rounded} ${className}`}
    >
      {hasMedia ? (
        type === "video" ? (
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt || label}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2f9_100%)] border-2 border-dashed border-primary/20 px-4 text-center">
          {/* Subtle dotted texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(var(--primary) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            {type === "video" ? (
              <Play className="h-6 w-6 fill-primary" />
            ) : (
              <ImageIcon className="h-6 w-6" />
            )}
          </div>
          <p className="relative text-sm font-semibold text-slate-600">{label}</p>
          {hint && <p className="relative text-xs text-slate-400">{hint}</p>}
          <span className="relative mt-1 text-[10px] font-bold uppercase tracking-widest text-primary/50">
            {type === "video" ? "Video coming soon" : "Image coming soon"}
          </span>
        </div>
      )}
    </motion.div>
  );
}
