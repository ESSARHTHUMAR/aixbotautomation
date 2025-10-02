import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { Card } from "@/components/utils/Card";
import { Footer } from "@/components/footer/Footer";
import { SplashButton } from "@/components/buttons/SplashButton";
import { GradientGrid } from "@/components/hero/GradientGrid";
import { Barlow } from "next/font/google";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const validate = () => {
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = "Name is required.";
    const emailTrim = email.trim();
    if (!emailTrim) {
      nextErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailTrim)) nextErrors.email = "Enter a valid email.";
    }
    if (!message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }
    return nextErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data?.error || "Something went wrong. Try again.");
      }
      setStatus({ type: "success", text: "Thanks! Your message has been sent." });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={barlowFont.className}>
      <section className="relative z-0 overflow-hidden bg-zinc-950 pt-28 md:pt-32">
        <MaxWidthWrapper className="relative z-10 pb-20">
          <div className="mb-12 space-y-3">
            <SectionHeading persistCenter>Contact Us</SectionHeading>
            <SectionSubheading persistCenter>
              We would love to hear from you. Reach out and we will get back within 1-2 business
              days.
            </SectionSubheading>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="space-y-5 md:col-span-1">
              <ContactInfo
                icon={<FiMail className="h-5 w-5" />}
                label="Email"
                value="aixbotautomation@gmail.com"
                href="mailto:aixbotautomation@gmail.com"
              />
              <ContactInfo
                icon={<FiPhone className="h-5 w-5" />}
                label="Phone"
                value="+91 95374 40350"
                href="tel:+919537440350"
              />
              <ContactInfo
                icon={<FiMapPin className="h-5 w-5" />}
                label="Address"
                value="209 Opera Points, Kothariya, Rajkot - 360002, Gujarat, India"
              />
            </Card>

            <Card className="md:col-span-2">
              {status.text && (
                <div
                  className={`mb-4 rounded-md border px-3 py-2 text-sm ${
                    status.type === "success"
                      ? "border-green-700 bg-green-900/30 text-green-300"
                      : "border-red-700 bg-red-900/30 text-red-300"
                  }`}
                >
                  {status.text}
                </div>
              )}
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-4">
                  <label htmlFor="name" className="mb-1.5 block text-zinc-400">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={`w-full rounded-md border bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700 ${
                      errors.name ? "border-red-700" : "border-zinc-700"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="mb-1.5 block text-zinc-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@provider.com"
                    className={`w-full rounded-md border bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700 ${
                      errors.email ? "border-red-700" : "border-zinc-700"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div className="mb-6">
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="message" className="block text-zinc-400">
                      Message
                    </label>
                    <span className="text-xs text-zinc-500">Min 10 characters</span>
                  </div>
                  <textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className={`w-full resize-y rounded-md border bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700 ${
                      errors.message ? "border-red-700" : "border-zinc-700"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <SplashButton
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? "cursor-not-allowed opacity-80" : ""}`}
                >
                  {loading ? "Sending..." : "Send message"}
                </SplashButton>
              </form>
            </Card>
          </div>
        </MaxWidthWrapper>
        <GradientGrid />
      </section>
      <Footer />
    </main>
  );
}

const ContactInfo = ({ icon, label, value, href }) => {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="flex items-start gap-3 rounded-md border border-zinc-700 bg-zinc-900/60 p-3 text-zinc-300 transition-colors hover:border-zinc-600"
    >
      <div className="mt-0.5 rounded-md border border-zinc-700 bg-zinc-800/80 p-2 text-zinc-200">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-400">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </Wrapper>
  );
};