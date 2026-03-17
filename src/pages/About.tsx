import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const objectives = [
  "Promote women's self-reliance through skill development and entrepreneurship.",
  "Provide quality education and learning resources to underprivileged children.",
  "Conduct health awareness camps and maternal care programs.",
  "Advocate for gender equality and women's legal rights.",
  "Build sustainable community infrastructure in rural areas.",
  "Foster volunteerism and civic participation among youth.",
];

const initiatives = [
  { year: "2010", title: "Foundation", desc: "Sangharsh Mahila Mitra Mandal established in Pune with 15 founding members." },
  { year: "2013", title: "First Education Center", desc: "Opened community tuition center serving 200+ students." },
  { year: "2016", title: "Women's SHG Network", desc: "Launched self-help group network across 12 villages." },
  { year: "2019", title: "Health Camp Initiative", desc: "Conducted 30+ free health camps reaching 5,000 beneficiaries." },
  { year: "2022", title: "Digital Literacy", desc: "Introduced computer training for women and youth in rural areas." },
  { year: "2024", title: "50+ Programs", desc: "Expanded to 50+ active community programs across Maharashtra." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Discover our journey, mission, and the people behind Sangharsh Mahila Mitra Mandal.
        </p>
      </div>
    </section>

    {/* History */}
    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="Our Story" subtitle="A journey of resilience, compassion, and community empowerment." />
      <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4">
        <p>Sangharsh Mahila Mitra Mandal was founded in 2010 by a group of passionate social workers who witnessed the struggles of women in rural Maharashtra. What started as a small initiative to provide vocational training has grown into a multi-faceted NGO serving thousands of beneficiaries.</p>
        <p>Over the past decade, we have expanded our reach to include education support, health awareness, community development, and digital literacy programs. Our grassroots approach ensures that every initiative is designed with the community's needs at its heart.</p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-alt py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
        {[
          { icon: Target, title: "Our Mission", text: "To empower marginalized women and children through sustainable programs in education, health, and livelihood, fostering self-reliance and dignity in every community we serve." },
          { icon: Eye, title: "Our Vision", text: "A society where every woman is empowered, every child is educated, and every community thrives with equality, health, and opportunity." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 border shadow-sm"
          >
            <item.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
            <p className="mt-3 text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Objectives */}
    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="Our Objectives" />
      <div className="max-w-2xl mx-auto space-y-3">
        {objectives.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-3 items-start"
          >
            <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
            <p className="text-muted-foreground">{obj}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Founder message */}
    <section className="section-alt py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="Founder's Message" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 border shadow-sm"
        >
          <Quote className="h-8 w-8 text-primary/30 mb-4" />
          <p className="text-muted-foreground italic leading-relaxed">
            "When I started Sangharsh Mahila Mitra Mandal, I had a simple belief — that every woman deserves the right to live with dignity and every child the right to learn. Over the years, seeing women become entrepreneurs, children excel in school, and communities transform gives me immense hope. Our journey has just begun, and with your support, we will continue to fight for a better tomorrow."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">S</div>
            <div>
              <p className="font-semibold text-foreground">Smt. Sunita Deshpande</p>
              <p className="text-sm text-muted-foreground">Founder & President</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="Our Journey" subtitle="Key milestones in our growth." />
      <div className="max-w-2xl mx-auto space-y-6">
        {initiatives.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="shrink-0 w-16 text-right">
              <span className="font-display text-lg font-bold text-primary">{item.year}</span>
            </div>
            <div className="border-l-2 border-primary/30 pl-4 pb-2">
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
