import { motion } from "framer-motion";
import { Award, FileText, Calendar, MapPin, Building } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const registrationDetails = [
  { icon: FileText, label: "Registration Number", value: "2739/2008 G.B.B.S.D F-54224" },
  { icon: Calendar, label: "Registration Date", value: "30 December 2008" },
  { icon: Building, label: "Registered Under", value: "Maharashtra Public Trust Act" },
  { icon: MapPin, label: "Location", value: "Mumbai – 400070, Maharashtra, India" },
];

const Certificate = () => (
  <div>
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Certificate</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Official registration details of Sangharsh Mahila Mandal (N.G.O.)
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4">
      <SectionHeading title="Registration Details" subtitle="Sangharsh Mahila Mandal is a legally registered NGO under the Maharashtra Public Trust Act." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-card rounded-xl border shadow-sm overflow-hidden"
      >
        {/* Header */}
        <div className="hero-gradient p-8 text-center">
          <Award className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-primary-foreground">Sangharsh Mahila Mandal</h2>
          <p className="text-primary-foreground/80 mt-1">(N.G.O.)</p>
        </div>

        {/* Details */}
        <div className="p-8 space-y-6">
          {registrationDetails.map((detail, i) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                <p className="font-semibold text-foreground">{detail.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="border-t px-8 py-4 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            This is a registered organization under the Maharashtra Public Trust Act. For verification, please contact the Charity Commissioner's office.
          </p>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Certificate;
