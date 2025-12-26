import { FadeIn } from "@/components/ui/FadeIn";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll";

const partners = [
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Azure", color: "#0078D4" },
  { name: "HashiCorp", color: "#7B42BC" },
  { name: "Terraform", color: "#623CE4" },
  { name: "Databricks", color: "#FF3621" },
  { name: "Snowflake", color: "#29B5E8" },
  { name: "MongoDB", color: "#47A248" },
];

export const PartnersSection = () => {
  return (
    <section className="py-24 partners-gradient">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Winning connections:{" "}
              <span className="text-gradient">Our industry partnerships</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Through powerful industry alliances and partnerships, we give you access to 
              best-in-class tools, services and infrastructure for hybrid & multi-cloud operations.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <InfiniteScroll speed={35} direction="left">
            <div className="flex gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-40 h-20 bg-card rounded-xl border border-border/50 px-6 shrink-0 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <span
                    className="font-bold text-lg"
                    style={{ color: partner.color }}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8">
            <InfiniteScroll speed={35} direction="right">
              <div className="flex gap-12">
                {[...partners].reverse().map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-40 h-20 bg-card rounded-xl border border-border/50 px-6 shrink-0 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: partner.color }}
                    >
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
