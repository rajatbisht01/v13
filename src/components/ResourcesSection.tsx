import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    category: "AI Solutions",
    title: "What Is Agentic AI: Redefining Enterprise Intelligence",
    tags: ["Agentic AI", "GenAI", "Machine Learning"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    category: "Cybersecurity",
    title: "The Modern CISO's Playbook: Balancing Security & Business Priorities",
    tags: ["Cloud Security", "GRC", "Risk Management"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    category: "IT Management",
    title: "IT Service Management 101: Streamlining Operations & Delivery",
    tags: ["ITSM", "Cloud Applications", "DevOps"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export const ResourcesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore latest <span className="text-gradient">resources</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Stay updated with insights, best practices, and industry trends
              </p>
            </div>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0"
            >
              See All Resources
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <FadeIn key={resource.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div
                  className={`h-48 rounded-2xl bg-gradient-to-br ${resource.gradient} mb-6 flex items-center justify-center overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-6xl font-bold text-foreground/10 group-hover:scale-110 transition-transform">
                    {resource.category.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {resource.title}
                </h3>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
