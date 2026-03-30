// Local storage-based database for demo purposes
// In production, this would connect to Supabase/backend

const IS_DEV = import.meta.env.DEV;

export interface Donation {
  id: string;
  donor_name: string;
  email: string;
  phone: string;
  donation_amount: number;
  message: string;
  date: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

const DONATIONS_KEY = "smm_donations";
const MESSAGES_KEY = "smm_messages";

// Seed dummy data on first load
function initDummyData() {
  if (!localStorage.getItem(DONATIONS_KEY)) {
    const dummyDonations: Donation[] = [
      { id: "d1", donor_name: "Rajesh Sharma", email: "rajesh@example.com", phone: "9876543210", donation_amount: 5000, message: "Keep up the great work!", date: "2024-11-15" },
      { id: "d2", donor_name: "Priya Patil", email: "priya@example.com", phone: "9876543211", donation_amount: 2500, message: "For children's education", date: "2024-11-20" },
      { id: "d3", donor_name: "Amit Kulkarni", email: "amit@example.com", phone: "9876543212", donation_amount: 10000, message: "", date: "2024-12-01" },
      { id: "d4", donor_name: "Sneha Joshi", email: "sneha@example.com", phone: "9876543213", donation_amount: 1000, message: "Happy to contribute", date: "2024-12-05" },
      { id: "d5", donor_name: "Vikram Deshmukh", email: "vikram@example.com", phone: "9876543214", donation_amount: 7500, message: "For women empowerment programs", date: "2024-12-10" },
      { id: "d6", donor_name: "Anita Bhosale", email: "anita@example.com", phone: "9876543215", donation_amount: 3000, message: "God bless", date: "2024-12-15" },
      { id: "d7", donor_name: "Suresh Wagh", email: "suresh@example.com", phone: "9876543216", donation_amount: 500, message: "", date: "2024-12-20" },
      { id: "d8", donor_name: "Meena Gaikwad", email: "meena@example.com", phone: "9876543217", donation_amount: 15000, message: "Annual contribution", date: "2025-01-05" },
      { id: "d9", donor_name: "Rohit Pawar", email: "rohit@example.com", phone: "9876543218", donation_amount: 2000, message: "For health camps", date: "2025-01-12" },
      { id: "d10", donor_name: "Kavita Naik", email: "kavita@example.com", phone: "9876543219", donation_amount: 4000, message: "Supporting education", date: "2025-01-20" },
    ];
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(dummyDonations));
  }
  if (!localStorage.getItem(MESSAGES_KEY)) {
    const dummyMessages: Message[] = [
      { id: "m1", name: "Pooja Deshpande", email: "pooja@example.com", message: "I would like to volunteer for the education program. Please share the details.", date: "2024-12-01" },
      { id: "m2", name: "Manoj Shinde", email: "manoj@example.com", message: "Can you organize a health camp in our village? We have 500+ residents.", date: "2024-12-08" },
      { id: "m3", name: "Rashmi Jadhav", email: "rashmi@example.com", message: "Great work by the organization. How can I donate regularly?", date: "2024-12-15" },
      { id: "m4", name: "Deepak More", email: "deepak@example.com", message: "Interested in the computer training program for my sister.", date: "2024-12-22" },
      { id: "m5", name: "Sunita Kale", email: "sunita@example.com", message: "Thank you for the tailoring workshop. It changed my life.", date: "2025-01-10" },
    ];
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(dummyMessages));
  }
}

initDummyData();

export function getDonations(): Donation[] {
  try {
    const raw = localStorage.getItem(DONATIONS_KEY);
    const parsed = JSON.parse(raw || "[]");
    if (IS_DEV) console.log("[DB] getDonations →", parsed.length, "records");
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    if (IS_DEV) console.error("[DB] getDonations parse error:", err);
    return [];
  }
}

export function getMessages(): Message[] {
  try {
    const raw = localStorage.getItem(MESSAGES_KEY);
    const parsed = JSON.parse(raw || "[]");
    if (IS_DEV) console.log("[DB] getMessages →", parsed.length, "records");
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    if (IS_DEV) console.error("[DB] getMessages parse error:", err);
    return [];
  }
}

export async function saveDonation(data: Omit<Donation, "id" | "date">): Promise<void> {
  await new Promise((r) => setTimeout(r, 800)); // simulate network
  const donations = getDonations();
  const newEntry: Donation = {
    ...data,
    id: "d" + Date.now(),
    date: new Date().toISOString().split("T")[0],
  };
  donations.push(newEntry);
  localStorage.setItem(DONATIONS_KEY, JSON.stringify(donations));
  if (IS_DEV) console.log("[DB] saveDonation → saved id:", newEntry.id, "| total:", donations.length);
}

export async function saveMessage(data: Omit<Message, "id" | "date">): Promise<void> {
  await new Promise((r) => setTimeout(r, 800));
  const messages = getMessages();
  const newEntry: Message = {
    ...data,
    id: "m" + Date.now(),
    date: new Date().toISOString().split("T")[0],
  };
  messages.push(newEntry);
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  if (IS_DEV) console.log("[DB] saveMessage → saved id:", newEntry.id, "| total:", messages.length);
}

export function deleteDonation(id: string): void {
  const donations = getDonations().filter((d) => d.id !== id);
  localStorage.setItem(DONATIONS_KEY, JSON.stringify(donations));
}

export function deleteMessage(id: string): void {
  const messages = getMessages().filter((m) => m.id !== id);
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
}

// Admin auth (demo only — hardcoded credentials)
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";
const AUTH_KEY = "smm_admin_auth";

export function adminLogin(username: string, password: string): boolean {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function adminLogout(): void {
  localStorage.removeItem(AUTH_KEY);
}
