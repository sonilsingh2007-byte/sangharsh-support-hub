import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import { saveDonation } from "@/lib/database";

const amounts = [500, 1000, 2500, 5000];

const Donate = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    donor_name: "", email: "", phone: "", donation_amount: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.donor_name.trim() || !form.email.trim() || !form.phone.trim() || !form.donation_amount) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    const amount = Number(form.donation_amount);
    if (isNaN(amount) || amount <= 0) {
      toast({ title: "Please enter a valid amount", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await saveDonation({ ...form, donation_amount: amount });
      setSuccess(true);
      toast({ title: "Thank you for your support!", description: "This donation is recorded for demonstration purposes." });
    } catch {
      toast({ title: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-card rounded-xl p-10 border shadow-sm max-w-md mx-4"
        >
          <div className="h-16 w-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-primary-foreground fill-primary-foreground" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Thank You!</h2>
          <p className="mt-3 text-muted-foreground">
            Your donation of ₹{form.donation_amount} has been recorded successfully. This is a demonstration — no real payment was processed.
          </p>
          <Button variant="hero" className="mt-6" onClick={() => { setSuccess(false); setForm({ donor_name: "", email: "", phone: "", donation_amount: "", message: "" }); }}>
            Make Another Donation
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Support Our Cause</h1>
          <p className="mt-4 text-primary-foreground/80">Your generosity can change lives. (Demonstration Mode)</p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-lg">
        <SectionHeading title="Make a Donation" subtitle="All fields marked are required. No real payment is processed." />
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-xl p-8 border shadow-sm space-y-5"
        >
          <Input placeholder="Full Name *" value={form.donor_name} onChange={(e) => setForm({ ...form, donor_name: e.target.value })} maxLength={100} />
          <Input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
          <Input type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} />

          <div>
            <p className="text-sm font-medium text-foreground mb-2">Select Amount (₹)</p>
            <div className="grid grid-cols-4 gap-2">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setForm({ ...form, donation_amount: String(a) })}
                  className={`py-2 rounded-lg border text-sm font-medium transition-colors ${
                    form.donation_amount === String(a)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground hover:border-primary"
                  }`}
                >
                  ₹{a}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              placeholder="Or enter custom amount *"
              className="pl-9"
              value={form.donation_amount}
              onChange={(e) => setForm({ ...form, donation_amount: e.target.value })}
              min={1}
            />
          </div>

          <Textarea placeholder="Message (optional)" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={500} />

          <Button type="submit" variant="hero" disabled={loading} className="w-full">
            {loading ? "Processing..." : "Donate Now (Demo)"}
          </Button>
          <p className="text-xs text-center text-muted-foreground">This is a demonstration. No real payment gateway is connected.</p>
        </motion.form>
      </section>
    </div>
  );
};

export default Donate;
