import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IndianRupee, Users, Mail, Layers, Trash2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  getDonations, getMessages, deleteDonation, deleteMessage,
  isAdminLoggedIn, adminLogout, type Donation, type Message,
} from "@/lib/database";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tab, setTab] = useState<"donations" | "messages">("donations");
  const [donations, setDonations] = useState<Donation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate("/admin/login");
      return;
    }
    setDonations(getDonations());
    setMessages(getMessages());
  }, [navigate]);

  const handleDeleteDonation = (id: string) => {
    deleteDonation(id);
    setDonations(getDonations());
    toast({ title: "Donation record deleted" });
  };

  const handleDeleteMessage = (id: string) => {
    deleteMessage(id);
    setMessages(getMessages());
    toast({ title: "Message deleted" });
  };

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  const totalDonations = donations.reduce((s, d) => s + d.donation_amount, 0);

  const stats = [
    { icon: IndianRupee, label: "Total Donations", value: `₹${totalDonations.toLocaleString()}` },
    { icon: Users, label: "Total Donors", value: String(donations.length) },
    { icon: Mail, label: "Total Messages", value: String(messages.length) },
    { icon: Layers, label: "Total Programs", value: "8" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="font-display text-lg font-bold text-foreground">Admin Dashboard</h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-1" /> Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 border shadow-sm"
            >
              <s.icon className="h-6 w-6 text-primary mb-2" />
              <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["donations", "messages"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                tab === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t} ({t === "donations" ? donations.length : messages.length})
            </button>
          ))}
        </div>

        {/* Donations Table */}
        {tab === "donations" && (
          <div className="bg-card rounded-xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-medium text-foreground">Name</th>
                    <th className="text-left p-3 font-medium text-foreground">Email</th>
                    <th className="text-left p-3 font-medium text-foreground">Phone</th>
                    <th className="text-right p-3 font-medium text-foreground">Amount</th>
                    <th className="text-left p-3 font-medium text-foreground">Date</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((d) => (
                    <tr key={d.id} className="border-t hover:bg-muted/30">
                      <td className="p-3 text-foreground">{d.donor_name}</td>
                      <td className="p-3 text-muted-foreground">{d.email}</td>
                      <td className="p-3 text-muted-foreground">{d.phone}</td>
                      <td className="p-3 text-right font-medium text-foreground">₹{d.donation_amount.toLocaleString()}</td>
                      <td className="p-3 text-muted-foreground">{d.date}</td>
                      <td className="p-3">
                        <button onClick={() => handleDeleteDonation(d.id)} className="text-destructive hover:text-destructive/80">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {donations.length === 0 && (
                    <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">No donations yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages Table */}
        {tab === "messages" && (
          <div className="space-y-3">
            {messages.map((m) => (
              <div key={m.id} className="bg-card rounded-xl p-4 border flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">{m.name}</span>
                    <span className="text-muted-foreground">({m.email})</span>
                    <span className="text-xs text-muted-foreground">{m.date}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground text-sm">{m.message}</p>
                </div>
                <button onClick={() => handleDeleteMessage(m.id)} className="text-destructive hover:text-destructive/80 shrink-0">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            {messages.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No messages yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
