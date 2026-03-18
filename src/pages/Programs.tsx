import { motion } from "framer-motion";
import { ShieldCheck, Utensils, Shirt, BookOpen, Stethoscope, Megaphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const activities = [
  {
    icon: ShieldCheck, title: "Dowry Protection Awareness",
    desc: "Conducting awareness campaigns and providing legal guidance to women facing dowry harassment. We work to protect women's rights and ensure they can live free from dowry-related abuse.",
  },
  {
    icon: Utensils, title: "Food Distribution Drives",
    desc: "Collecting surplus food from social events and distributing it to the hungry and homeless. Our community-led food drives ensure that no meal goes to waste while people go hungry.",
  },
  {
    icon: Shirt, title: "Clothing Donation Campaigns",
    desc: "Providing clothing to people living in slums and tribal areas to help them live with dignity. We organize regular collection and distribution drives across Mumbai.",
  },
  {
    icon: BookOpen, title: "Educational Assistance Programs",
    desc: "Distributing textbooks, notebooks, and stationery to needy students to encourage education. We believe every child deserves access to quality learning resources.",
  },
  {
    icon: Stethoscope, title: "Health & Medical Camps",
    desc: "Organizing blood donation drives and free health check-up camps for underserved communities. Our medical initiatives provide essential healthcare access to those who need it most.",
  },
  {
    icon: Megaphone, title: "Social Awareness Campaigns",
    desc: "Running public awareness campaigns about pollution control, RTI Act, SRA schemes, and cancer prevention. We empower communities with knowledge about their rights and important social issues.",
  },
];

const Activities = () => (
  <div>
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Our Activities</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Explore our community empowerment initiatives creating lasting impact across Mumbai and Maharashtra.
        </p>
      </div>
    </section>

    <section className="py-20 container mx-auto px-4">
      <SectionHeading title="What We Do" subtitle="Each initiative is designed with community needs at the center." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="h-44 hero-gradient flex items-center justify-center">
              <p.icon className="h-16 w-16 text-primary-foreground/90 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-6">
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
