import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Database, BarChart, TrendingUp, PieChart, Layers, Zap, ArrowRight, LineChart, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

const dataServices = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines, ETL processes, and data lakes using modern data stack technologies."
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Interactive dashboards and reporting solutions with tools like Tableau, Power BI, and Looker."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Machine learning models for forecasting, trend analysis, and predictive maintenance."
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Transform complex data into compelling visual stories that drive decision-making."
  },
  {
    icon: Layers,
    title: "Data Warehousing",
    description: "Modern cloud data warehouses with Snowflake, BigQuery, and Redshift for scalable analytics."
  },
  {
    icon: GitBranch,
    title: "Real-time Analytics",
    description: "Stream processing and real-time analytics with Kafka, Spark, and cloud-native solutions."
  }
];

const techStack = [
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "Databricks", category: "Data Platform" },
  { name: "dbt", category: "Transformation" },
  { name: "Airflow", category: "Orchestration" },
  { name: "Tableau", category: "Visualization" },
  { name: "Power BI", category: "BI Platform" },
  { name: "Spark", category: "Processing" },
  { name: "Kafka", category: "Streaming" }
];

const DataAnalyticsServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">Data & Analytics</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Database className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Data & Analytics
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Turn Data into Actionable Insights
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              Unlock the full potential of your data with our comprehensive analytics services. 
              From data engineering to advanced analytics, we help you make data-driven decisions 
              that accelerate business growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                Data Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                View Case Studies
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Data <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end data solutions from ingestion to insights
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <div className="group glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </HoverScale>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Modern Data <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading tools and platforms we work with
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <FadeInUp key={tech.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Become Data-Driven?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's build a data strategy that unlocks insights and drives growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Start Your Data Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalyticsServices;
