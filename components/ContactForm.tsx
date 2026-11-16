
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            maxLength={80}
            placeholder="John Doe"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green focus:ring-2 focus:ring-green/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green focus:ring-2 focus:ring-green/10"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          maxLength={120}
          placeholder="What would you like to discuss?"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green focus:ring-2 focus:ring-green/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Your Message
        </label>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green focus:ring-2 focus:ring-green/10"
        />
      </div>

      {/* Hidden spam-trap field */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800">
          Your message has been sent successfully! I'll get back to you soon.
        </p>
      )}

      {status && status !== "success" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {status}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending Message..." : "Send Message ↗"}
      </button>
    </form>
  );
}
