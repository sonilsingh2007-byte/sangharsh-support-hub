import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const galleryItems = [
  { title: "Women's Tailoring Workshop", category: "Women Empowerment" },
  { title: "Annual Health Camp 2023", category: "Health" },
  { title: "Children's Day Celebration", category: "Education" },
  { title: "Tree Plantation Drive", category: "Environment" },
  { title: "Self-Help Group Meeting", category: "Women Empowerment" },
  { title: "School Supply Distribution", category: "Education" },
  { title: "Community Clean Water Project", category: "Development" },
  { title: "Yoga & Wellness Session", category: "Health" },
  { title: "Computer Training Batch 5", category: "Digital Literacy" },
  { title: "Republic Day Celebration", category: "Community" },
  { title: "Women's Legal Rights Workshop", category: "Legal Aid" },
  { title: "Nutrition Awareness Camp", category: "Health" },
];

const colors = [
  "from-primary/60 to-accent/60",
  "from-secondary/60 to-primary/60",
  "from-accent/60 to-secondary/60",
  "from-primary/50 to-secondary/50",
];

const Gallery = () => (
  <div>
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Gallery</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Moments captured from our events, camps, and community programs.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="Our Moments" subtitle="A glimpse into the lives we're touching." />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className={`aspect-square rounded-xl bg-gradient-to-br ${colors[i % colors.length]} flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform cursor-pointer`}
          >
            <p className="font-display text-sm md:text-base font-semibold text-foreground">{item.title}</p>
            <span className="mt-1 text-xs text-muted-foreground bg-background/60 px-2 py-0.5 rounded-full">{item.category}</span>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Gallery;
