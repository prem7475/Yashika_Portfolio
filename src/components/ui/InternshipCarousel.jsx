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
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              INTERNSHIP PHOTO GALLERY
            </span>
          </div>
          <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
            Sumeet Infra Solutions & Campus Experience
          </h3>
        </div>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <span className="text-xs font-semibold text-slate-500 mr-1">
            {currentIndex + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <svg
              className="h-4 w-4"
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
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <svg
              className="h-4 w-4"
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

      <div className="relative mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div
            className="relative lg:col-span-7 aspect-[4/3] sm:aspect-[16/10] overflow-hidden cursor-pointer group bg-slate-100"
            onClick={() => setSelectedPhoto(current)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.src}
                alt={current.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <Badge className="bg-slate-900/80 text-white border-none">
                {current.category}
              </Badge>
              <span className="rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm">
                Enlarge Photo 🔍
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5 lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                  {current.company} • {current.location}
                </div>

                <h4 className="font-display text-xl font-bold text-slate-900">
                  {current.title}
                </h4>

                <p className="text-sm leading-relaxed text-slate-600">
                  {current.caption}
                </p>

                <p className="text-xs leading-relaxed text-slate-500 bg-white p-3 rounded-lg border border-slate-200">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex items-center gap-1.5">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "w-6 bg-slate-900"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2.5 sm:gap-3">
        {photos.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`relative overflow-hidden rounded-lg border-2 aspect-[4/3] transition-all ${
              idx === currentIndex
                ? "border-blue-600 ring-1 ring-blue-600"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="h-full w-full object-cover"
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 p-4 sm:p-6 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative max-w-3xl w-full overflow-hidden rounded-2xl bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors text-sm"
              >
                ✕
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-slate-900 grid place-items-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 bg-white">
                <div className="text-xs font-bold text-blue-600 uppercase">
                  {selectedPhoto.category} • {selectedPhoto.company}
                </div>
                <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
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
