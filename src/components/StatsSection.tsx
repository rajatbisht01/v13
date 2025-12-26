import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll";
import { Trophy } from "lucide-react";

const stats = [
  { value: 350, suffix: "+", label: "Customers", sublabel: "Worldwide" },
  { value: 400, suffix: "+", label: "Cloud", sublabel: "Certifications" },
  { value: 300, suffix: "+", label: "Successful", sublabel: "Projects" },
  { value: 25, suffix: "+", label: "Industry", sublabel: "Alliances" },
];

const awards = [
  "Cloud Innovation Partner",
  "AWS Advanced Partner",
  "Azure Expert MSP",
  "Google Cloud Partner",
  "Outstanding Growth Award",
  "Innovation Excellence",
  "Rising Star Partner",
  "Technology Leader",
];

export const StatsSection = () => {
  return (
    <section className="py-24 stats-gradient">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Vi-3 Technology
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by enterprises worldwide for digital transformation excellence
            </p>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center p-8 rounded-2xl bg-card shadow-lg border border-border/50"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-foreground font-semibold">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.sublabel}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Awards Carousel */}
        <FadeIn delay={0.4}>
          <InfiniteScroll speed={40}>
            <div className="flex gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card px-6 py-4 rounded-xl border border-border/50 shrink-0"
                >
                  <Trophy className="text-primary" size={24} />
                  <span className="text-foreground font-medium whitespace-nowrap">
                    {award}
                  </span>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </FadeIn>
      </div>
    </section>
  );
};
