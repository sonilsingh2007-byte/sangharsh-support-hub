import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, HandHeart, Shield, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";

const stats = [
  { icon: Heart, value: "500+", label: "Women Empowered" },
  { icon: BookOpen, value: "1200+", label: "Children Educated" },
  { icon: Users, value: "50+", label: "Community Programs" },
  { icon: HandHeart, value: "300+", label: "Volunteers" },
];

const programs = [
  { icon: Heart, title: "Women Empowerment", desc: "Skill development, self-help groups, and vocational training for women." },
  { icon: BookOpen, title: "Education Support", desc: "Scholarships, tuition centers, and school supplies for underprivileged children." },
  { icon: Users, title: "Community Development", desc: "Clean water, sanitation, and infrastructure projects for rural communities." },
  { icon: Stethoscope, title: "Health Awareness", desc: "Free health camps, maternal care, and nutrition awareness drives." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden hero-gradient py-24 md:py-36">
      <div className="absolute inset-0 bg-foreground/20" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight"
        >
          Empowering Women,<br />Transforming Communities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto"
        >
          Sangharsh Mahila Mitra Mandal works towards building a more equitable society through education, empowerment, and compassion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Link to="/donate">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8">
              Donate Now
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>

    {/* About snippet */}
    <section className="section-alt py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Who We Are" subtitle="A brief introduction to our mission and values." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed"
        >
          <p>
            Founded in 2010, Sangharsh Mahila Mitra Mandal is a non-profit organization committed to uplifting marginalized women and children across Maharashtra. Through sustainable community programs, vocational training, and education initiatives, we strive to create lasting change.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Shield className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Registered NGO | Trusted by 50+ Partner Organizations</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Programs preview */}
    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="Our Programs" subtitle="Flagship initiatives driving real impact in communities." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow group"
          >
            <div className="h-12 w-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <p.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/programs">
          <Button variant="outline-hero">View All Programs</Button>
        </Link>
      </div>
    </section>

    {/* CTA */}
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Make a Difference Today</h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
          Your contribution helps us empower more women, educate more children, and build stronger communities.
        </p>
        <Link to="/donate">
          <Button size="lg" className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10">
            Donate Now
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
