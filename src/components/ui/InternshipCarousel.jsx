import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { internshipPhotos } from "../../data/siteContent";
import Badge from "./Badge";

export default function InternshipCarousel({ photos = internshipPhotos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const current = photos[currentIndex];

  return (
    <div className="mt-8 rounded-3xl border border-[#B8975B]/25 bg-white/90 p-5 sm:p-7 shadow-lg backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#B8975B]/15 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8C6D34] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.22em] text-[#8C6D34] uppercase">
              INTERNSHIP PHOTO GALLERY & SPOTLIGHT
            </span>
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold text-[#1A1D20]">
            Sumeet Infra Solutions & Campus Experience
          </h3>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs font-medium text-[#786E63] mr-2">
            {currentIndex + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#B8975B]/30 bg-white text-[#1A1D20] shadow-sm hover:bg-[#FAF8F5] hover:border-[#8C6D34] transition-all"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#B8975B]/30 bg-white text-[#1A1D20] shadow-sm hover:bg-[#FAF8F5] hover:border-[#8C6D34] transition-all"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#B8975B]/20 bg-[#FAF8F5]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div
            className="relative lg:col-span-7 aspect-[4/3] sm:aspect-[16/10] overflow-hidden cursor-pointer group"
            onClick={() => setSelectedPhoto(current)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.src}
                alt={current.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <Badge className="bg-black/60 text-white border-white/20 backdrop-blur-md">
                {current.category}
              </Badge>
              <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#1A1D20] shadow-md backdrop-blur-md">
                Click to Enlarge 🔍
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-[#8C6D34] uppercase">
                  {current.company} • {current.location}
                </div>

                <h4 className="font-display text-2xl font-bold text-[#1A1D20]">
                  {current.title}
                </h4>

                <p className="text-sm leading-relaxed text-[#3E4450]">
                  {current.caption}
                </p>

                <p className="text-xs leading-relaxed text-[#656C7A] bg-[#FAF7F2] p-3.5 rounded-xl border border-[#B8975B]/20">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center gap-2">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#8C6D34]"
                      : "w-2.5 bg-[#B8975B]/30 hover:bg-[#B8975B]/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`relative overflow-hidden rounded-xl border-2 aspect-[4/3] transition-all duration-300 ${
              idx === currentIndex
                ? "border-[#8C6D34] ring-2 ring-[#B8975B]/30 scale-[1.02]"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="h-full w-full object-cover"
            />
            <div
              className={`absolute inset-0 transition-opacity ${
                idx === currentIndex ? "bg-transparent" : "bg-black/20"
              }`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition-all"
              >
                ✕
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black grid place-items-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <div className="text-xs font-semibold tracking-[0.2em] text-[#8C6D34] uppercase">
                  {selectedPhoto.category} • {selectedPhoto.company}
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold text-[#1A1D20]">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 text-sm text-[#3E4450]">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
