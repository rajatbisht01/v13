import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextType from "@/components/ui/TextType";

// Import hero images for each word
import heroDigital from "@/assets/hero-digital.jpg";
import heroCloud from "@/assets/hero-cloud.jpg";
import heroApplication from "@/assets/hero-application.jpg";
import heroData from "@/assets/hero-data.jpg";
import heroAi from "@/assets/hero-ai.jpg";

const transformWords = ["Digital", "Cloud", "Application", "Data", "AI"];
const heroImages = [heroDigital, heroCloud, heroApplication, heroData, heroAi];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTextChange = useCallback((_text: string, index: number) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <section className="relative  min-h-screen flex items-center overflow-hidden">
      {/* Background Images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
    key={currentImageIndex}
    initial={{ opacity: 0, scale: 1.005 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.005 }}
    transition={{
      duration: 1.6,
      ease: [0.4, 0.0, 0.2, 1],
    }}
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
  >
  {/* Image contrast scrim */}
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/10" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        </motion.div>

      </AnimatePresence>

      {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-secondary mb-4 font-medium"
          >
            Powering your
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="relative inline-block">
              <TextType
                text={transformWords}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-primary"
                className="text-primary"
                onTextChange={handleTextChange}
              />
              <span className="absolute -bottom-1 left-0 w-full h-1 gradient-primary rounded-full" />
            </span>
            <span className="text-secondary ml-4">transformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-secondary mb-8 font-semibold"
          >
            Business Transformation Done Right
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/services"
              className="inline-flex items-center border gap-2 px-8 py-4 gradient-primary text-primary-foreground font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity"
            >
              Explore Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
    </section>
      );
};
