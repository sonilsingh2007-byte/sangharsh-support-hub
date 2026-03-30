import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import { saveMessage } from "@/lib/database";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleDemoClick = () => {
    toast({
      title: "Demonstration Website",
      description: "This is a demonstration website created for a college project. Direct messaging functionality is not enabled.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await saveMessage({ name: form.name, email: form.email, message: form.message });
      toast({ title: "Message Recorded", description: "Your message has been recorded for demonstration purposes." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Failed to send message", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="mt-4 text-primary-foreground/80">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 max-w-5xl mx-auto">
          <div>
            <SectionHeading title="Get In Touch" center={false} />
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p>+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p>contact@sangharshngo.org</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button - Demo only */}
            <Button
              onClick={handleDemoClick}
              className="mt-8 bg-[hsl(142,70%,45%)] text-white font-semibold hover:bg-[hsl(142,70%,40%)]"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <p className="text-xs text-muted-foreground mt-2">* This is a demonstration feature</p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 border shadow-sm space-y-5"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">Send a Message</h3>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
            <Input
              type="tel"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={15}
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
            />
            <Button type="submit" variant="hero" disabled={loading} className="w-full">
              {loading ? "Sending..." : <><Send className="h-4 w-4 mr-2" /> Send Message</>}
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
