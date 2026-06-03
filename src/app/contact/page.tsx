import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ashutosh Pandey",
  description: "Get in touch with Ashutosh Pandey.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Contact />
    </div>
  );
}
