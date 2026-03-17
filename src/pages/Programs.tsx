import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Stethoscope, Sprout, Laptop, Scale, Baby } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const programs = [
  {
    icon: Heart, title: "Women Empowerment",
    desc: "Vocational training in tailoring, beauty services, and handicrafts. Self-help groups provide micro-loans and financial literacy to over 200 women annually.",
    color: "from-primary to-accent",
  },
  {
    icon: BookOpen, title: "Education Support",
    desc: "Free tuition centers, school supply distribution, and scholarships for underprivileged children. Currently supporting 1200+ students across 15 centers.",
    color: "from-secondary to-primary",
  },
  {
    icon: Users, title: "Community Development",
    desc: "Clean water projects, sanitation drives, and rural infrastructure improvement. Working in 25+ villages to build sustainable community resources.",
    color: "from-primary to-secondary",
  },
  {
    icon: Stethoscope, title: "Health Awareness",
    desc: "Free health camps, maternal care programs, nutrition drives, and mental health counseling. Conducted 30+ camps reaching 5,000+ beneficiaries.",
    color: "from-accent to-primary",
  },
  {
    icon: Laptop, title: "Digital Literacy",
    desc: "Computer training and internet literacy programs for women and youth in rural areas, enabling access to digital services and online opportunities.",
    color: "from-secondary to-accent",
  },
  {
    icon: Scale, title: "Legal Aid & Awareness",
    desc: "Free legal counseling for women facing domestic violence, property disputes, and workplace harassment. Awareness drives on women's rights and laws.",
    color: "from-primary to-accent",
  },
  {
    icon: Sprout, title: "Environmental Initiatives",
    desc: "Tree plantation drives, waste management workshops, and promoting sustainable agriculture practices in partner communities.",
    color: "from-secondary to-primary",
  },
  {
    icon: Baby, title: "Child Welfare",
    desc: "Nutrition programs for malnourished children, early childhood education centers, and child safety awareness campaigns across rural districts.",
    color: "from-accent to-secondary",
  },
];

const Programs = () => (
  <div>
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Our Programs</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Explore our flagship initiatives creating lasting impact across communities.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="What We Do" subtitle="Each program is designed with community needs at the center." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, i) => (
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

export default Programs;
