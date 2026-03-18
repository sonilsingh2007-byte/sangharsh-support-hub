import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, HandHeart, ShieldCheck, Utensils, Shirt, Stethoscope, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import { useToast } from "@/hooks/use-toast";

const stats = [
  { icon: Heart, value: "Since 2008", label: "Serving Society" },
  { icon: BookOpen, value: "1000+", label: "Students Supported" },
  { icon: Users, value: "6+", label: "Active Programs" },
  { icon: HandHeart, value: "500+", label: "Families Helped" },
];

const activities = [
  { icon: ShieldCheck, title: "Dowry Protection", desc: "Awareness campaigns and legal guidance for women facing dowry harassment." },
  { icon: Utensils, title: "Food Distribution", desc: "Collecting surplus food from events and distributing it to the hungry and homeless." },
  { icon: Shirt, title: "Clothing Drives", desc: "Providing clothing to people in slums and tribal areas for a dignified life." },
  { icon: Stethoscope, title: "Health & Medical Camps", desc: "Blood donation drives and free health check-up camps for underserved communities." },
];

const Index = () => {
  const { toast } = useToast();

  const handleDemoClick = () => {
    toast({
      title: "Demonstration Website",
      description: "This is a demonstration website created for a college project. Direct messaging functionality is not enabled.",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient py-28 md:py-40">
        <div className="absolute inset-0 bg-foreground/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight"
          >
            Empowering Women,<br />Strengthening Society
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto"
          >
            Dedicated to community welfare, grassroots development, and women support programs since 2008. Join us in building a self-reliant and educated society.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8"
              onClick={handleDemoClick}
            >
              <MessageCircle className="h-5 w-5 mr-2" /> Contact on WhatsApp
            </Button>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
                Support Our Cause
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Who We Are" subtitle="A grassroots organization working toward community empowerment and social welfare." />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              Sangharsh Mahila Mandal is a registered Non-Governmental Organization committed to the upliftment of women and the welfare of society. Since our establishment in 2008, we have been driving public awareness campaigns, women support programs, and grassroots development efforts across Mumbai and Maharashtra.
            </p>
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-secondary">Registered NGO | Reg. No. 2739/2008</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities preview */}
      <section className="py-20 container mx-auto px-4">
        <SectionHeading title="Our Initiatives" subtitle="Key social welfare activities driving real impact in communities." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((p, i) => (
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
        <div className="text-center mt-10">
          <Link to="/activities">
            <Button variant="outline-hero">View All Activities</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Join Our Mission</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Together we can empower more women, support more families, and build stronger communities through grassroots development.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10">
                <Heart className="h-5 w-5 mr-2" /> Donate Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-10">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
