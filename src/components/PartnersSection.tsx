import { FadeIn } from "@/components/ui/FadeIn";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll";
import { FadeInUp } from "./ui/motion";

const partners = [
  { name: "IBM", color: "#052FAD" },
  { name: "Nutanix", color: "#024DA1" },
  { name: "Redington", color: "#E31837" },
  { name: "AccuKnox", color: "#6366F1" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Microsoft Azure", color: "#0089D6" },
  { name: "AWS", color: "#FF9900" },
  { name: "CoreStack", color: "#00B4AB" },
  { name: "Databricks", color: "#FF3621" },
    { name: "Flaxera", color: "#052FAD" },
  { name: "ServiceNow", color: "#62D84E" },
    { name: "Workday", color: "#024DA1" },
  { name: "CrowdStrike", color: "#F80000" },
  { name: "NetApp", color: "#0067C5" },
    { name: "Zoho", color: "#FF3621" },

];

export const PartnersSection = () => {
  return (
    <section className="py-16 partners-gradient">
      <div className="container mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Strategic Alliances:</span>
            <br />
            <span className="text-foreground">Our Technology Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Through powerful industry alliances and partnerships, we give you access to 
            best-in-class tools, services and infrastructure for hybrid & multi-cloud operations.
          </p>
        </FadeInUp>

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
