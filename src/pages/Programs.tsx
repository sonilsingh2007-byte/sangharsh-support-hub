import { motion } from "framer-motion";
import { ShieldCheck, Utensils, Shirt, BookOpen, Stethoscope, Megaphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const activities = [
  {
    icon: ShieldCheck, title: "Dowry Protection",
    desc: "Conduct awareness campaigns and provide legal guidance to women against dowry harassment. We work to protect women's rights and ensure they can live free from dowry-related abuse.",
    color: "from-primary to-accent",
  },
  {
    icon: Utensils, title: "Food Donation",
    desc: "Collect leftover food from social events and distribute it to the hungry and homeless. Our food drives ensure that no meal goes to waste while people go hungry.",
    color: "from-secondary to-primary",
  },
  {
    icon: Shirt, title: "Clothes Donation",
    desc: "Provide clothes to people living in slums and tribal areas to help them live with dignity. We organize regular collection and distribution drives across Mumbai.",
    color: "from-primary to-secondary",
  },
  {
    icon: BookOpen, title: "Education Support",
    desc: "Distribute textbooks, notebooks, and stationery to needy students to encourage education. We believe every child deserves access to quality learning resources.",
    color: "from-accent to-primary",
  },
  {
    icon: Stethoscope, title: "Medical Camps",
    desc: "Organize blood donation drives and free health check-up camps for communities. Our medical initiatives provide essential healthcare access to underserved populations.",
    color: "from-secondary to-accent",
  },
  {
    icon: Megaphone, title: "Social Awareness",
    desc: "Run campaigns about pollution control, RTI Act awareness, SRA schemes, and cancer awareness. We empower communities with knowledge about their rights and important social issues.",
    color: "from-primary to-accent",
  },
];

const Activities = () => (
  <div>
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Our Activities</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Explore our initiatives creating lasting impact across communities in Mumbai and Maharashtra.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="What We Do" subtitle="Each activity is designed with community needs at the center." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <p.icon className="h-14 w-14 text-primary-foreground/90 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Activities;
