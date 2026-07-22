"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    timestamp: new Date().toISOString(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "info@kotharedu.com",
          timestamp: new Date().toLocaleTimeString(),
        },
        publicKey,
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          timestamp: new Date().toISOString(),
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "An error occurred. Please try again or email us directly at info@kotharedu.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const fieldClass =
    "flex h-11 w-full rounded-xl border border-border bg-muted/40 px-4 py-2 text-sm transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2";

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/4 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a project in mind? Send a message and we&apos;ll respond within
            24 hours.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <Reveal>
            <Card className="border-border/80 shadow-xl shadow-ink/5">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Share your goals, timeline, and budget — we&apos;ll take it
                  from there.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What are you building?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about requirements, timeline, and budget..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="flex w-full resize-none rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`rounded-xl p-4 text-sm ${
                        submitStatus.type === "success"
                          ? "border border-green-200 bg-green-50 text-green-800"
                          : "border border-red-200 bg-red-50 text-red-800"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full border-0 bg-orange text-base font-semibold text-white hover:bg-orange-deep disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:info@kothartechsolutions.com"
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-orange/40 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange transition-transform group-hover:scale-110">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="mt-1 break-all font-display font-semibold group-hover:text-orange">
                  info@kothartechsolutions.com
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Reply within 24 hours
                </p>
              </a>

              <a
                href="tel:0450466876"
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-cyan/40 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan transition-transform group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="text-sm text-muted-foreground">Call</p>
                <p className="mt-1 font-display font-semibold group-hover:text-cyan">
                  0450 466 876
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Mon–Fri, 9AM–6PM AEST
                </p>
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <MapPin className="h-4 w-4 text-orange" />
                <span className="text-sm font-medium">Australia</span>
              </div>
              <div className="aspect-[16/11] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4297169015954!2d151.2051283762601!3d-33.878585173222916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb69e2955d53%3A0x6ad24eb26655122c!2sKOTHAR%20Educational%20Services!5e0!3m2!1sen!2sau!4v1762216653323!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kothar Tech Solutions location"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
