import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Quote, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const objectives = [
  "Empower women through awareness, education, and social support.",
  "Provide essential resources to marginalized communities.",
  "Conduct health camps and nutrition drives for underprivileged families.",
  "Spread awareness about dowry, domestic violence, and women's legal rights.",
  "Distribute food, clothing, and education supplies to those in need.",
  "Promote social awareness on pollution, RTI, SRA schemes, and cancer prevention.",
];

const initiatives = [
  { year: "2008", title: "Foundation", desc: "Sangharsh Mahila Mandal established in Mumbai with registration number 2739/2008." },
  { year: "2010", title: "First Awareness Campaign", desc: "Launched dowry protection and women's rights awareness drives." },
  { year: "2014", title: "Food & Clothes Donation", desc: "Started large-scale food and clothes donation drives across Mumbai." },
  { year: "2017", title: "Medical Camp Initiative", desc: "Organized blood donation drives and free health check-up camps." },
  { year: "2020", title: "Education Support", desc: "Began distributing textbooks, notebooks, and stationery to needy students." },
  { year: "2024", title: "Growing Impact", desc: "Expanded social awareness campaigns covering RTI, SRA, pollution, and cancer awareness." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Discover our journey, mission, and the people behind Sangharsh Mahila Mandal.
        </p>
      </div>
    </section>

    {/* History */}
    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="Our Story" subtitle="A journey of resilience, compassion, and community empowerment." />
      <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4">
        <p>Sangharsh Mahila Mandal is a registered Non-Governmental Organization dedicated to the upliftment of women and the welfare of society. The organization has been actively working toward empowering women, spreading social awareness, and helping underprivileged communities.</p>
        <p>Founded in 2008, the NGO focuses on providing support, education, and essential resources to marginalized sections of society in order to build a self-reliant and educated community. Based in Mumbai, Maharashtra, the organization continues to expand its reach and impact across communities.</p>
      </div>
    </section>

    {/* Founder Profile Card */}
    <section className="section-alt py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="Founder & President" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 border shadow-sm flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="h-24 w-24 rounded-full hero-gradient flex items-center justify-center shrink-0">
            <User className="h-12 w-12 text-primary-foreground" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl font-bold text-foreground">Seema V. Pawar</h3>
            <p className="text-lg text-primary font-semibold mt-1">सौ. सीमा वि. पवार (अध्यक्ष)</p>
            <p className="text-muted-foreground mt-2">Master of Social Work</p>
            <p className="text-sm text-muted-foreground mt-1">Founder & President, Sangharsh Mahila Mandal</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
        {[
          { icon: Target, title: "Our Mission", text: "To empower women, provide social support, and promote awareness about social issues so that communities can become self-reliant and progressive." },
          { icon: Eye, title: "Our Vision", text: "To build a strong society where women are empowered, educated, and capable of contributing to social development." },
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
    <section className="section-alt py-16">
      <div className="container mx-auto px-4">
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
      </div>
    </section>

    {/* Founder message */}
    <section className="py-16">
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
            "When I started Sangharsh Mahila Mandal, I had a simple belief — that every woman deserves to live with dignity and every community deserves to be self-reliant. Through our work in women's empowerment, food and clothes donation, education support, and social awareness, we are building a stronger society. Our journey has just begun, and with your support, we will continue to fight for a better tomorrow."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">S</div>
            <div>
              <p className="font-semibold text-foreground">Seema V. Pawar</p>
              <p className="text-sm text-muted-foreground">Founder & President</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-alt py-16">
      <div className="container mx-auto px-4">
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
      </div>
    </section>
  </div>
);

export default About;
