import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import aboutMission from "@/assets/about-mission.jpg";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that drive real business value.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest partnerships are at the core of everything we do.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We measure our achievements through your growth.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, fostering seamless collaboration at every step.",
  },
];

const stats = [
  { value: 200, suffix: "+", label: "Enterprise Clients" },
  { value: 50, suffix: "+", label: "Technology Experts" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const leadership = [
  { name: "Bhaskar Kumar", role: "CEO & Founder", initial: "B" },
  { name: "Rajesh Sharma", role: "CTO", initial: "R" },
  { name: "Priya Patel", role: "VP of Operations", initial: "P" },
  { name: "Amit Singh", role: "Head of Cloud Services", initial: "A" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(16, 23, 42, 0.8), rgba(16, 23, 42, 0.95)), url(${aboutMission})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              About V13 Technology
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforming Businesses
              <br />
              Through Technology
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              We are a team of passionate technologists dedicated to helping enterprises 
              navigate their digital transformation journey with confidence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building the Future of Enterprise Technology
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to bridge the gap between cutting-edge technology and 
                practical business applications, V13 Technology has grown from a small 
                consulting firm to a trusted partner for enterprises worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey began with a simple belief: that every business deserves access 
                to world-class technology solutions. Today, we continue to uphold that 
                belief as we help organizations embrace AI, cloud computing, and digital 
                transformation.
              </p>
              <p className="text-muted-foreground">
                With a team of seasoned experts and a commitment to excellence, we deliver 
                solutions that not only meet today's challenges but prepare our clients for 
                tomorrow's opportunities.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative">
                <img
                  src={aboutTeam}
                  alt="V13 Technology Team"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm opacity-80">Years of Excellence</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <CountUp target={stat.value} suffix={stat.suffix} duration={2} />
                  </p>
                  <p className="text-hero-foreground/70">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values shape everything we do, from how we build solutions to how 
              we build relationships.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-card p-8 rounded-2xl border border-border h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Leadership Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in technology 
              consulting and enterprise solutions.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <FadeIn key={leader.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{leader.initial}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-muted-foreground">{leader.role}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                Global Presence
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Serving Clients Worldwide
              </h2>
              <p className="text-muted-foreground mb-6">
                With offices across multiple continents and a network of technology partners, 
                we deliver solutions that transcend borders. Our global reach enables us to 
                bring international best practices while understanding local requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                {["India", "USA", "UK", "Singapore", "Australia"].map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border"
                  >
                    <Globe size={16} className="text-primary" />
                    <span className="text-foreground">{location}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Award className="text-primary mb-4" size={32} />
                  <p className="text-2xl font-bold text-foreground mb-1">AWS</p>
                  <p className="text-muted-foreground text-sm">Advanced Partner</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Award className="text-primary mb-4" size={32} />
                  <p className="text-2xl font-bold text-foreground mb-1">Azure</p>
                  <p className="text-muted-foreground text-sm">Gold Partner</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Award className="text-primary mb-4" size={32} />
                  <p className="text-2xl font-bold text-foreground mb-1">GCP</p>
                  <p className="text-muted-foreground text-sm">Premier Partner</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <Award className="text-primary mb-4" size={32} />
                  <p className="text-2xl font-bold text-foreground mb-1">ISO</p>
                  <p className="text-muted-foreground text-sm">27001 Certified</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
