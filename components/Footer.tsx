
"use client";

import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "WordPress Development",
  "eCommerce Solutions",
  "Website Customization",
  "Website Optimization",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#166534] text-white">

      <div className="container-custom py-14 md:py-16">

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <Link
              href="#home"
              className="text-3xl font-bold tracking-tight text-white"
            >
              Tonmoy<span className="text-green-200">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Certified WordPress Developer with 6+ years of
              experience building beautiful, responsive and
              user-focused websites that help businesses grow.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/mitonmoy/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#166534]"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/mi-tonmoy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#166534]"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition hover:translate-x-1 hover:text-white inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              My Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/80"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/20 pt-7 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-white/75">
            © {new Date().getFullYear()} Moyeenul Islam Tonmoy.
            All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#166534] transition hover:-translate-y-1 hover:bg-green-50"
          >
            Back to Top ↑
          </button>

        </div>

      </div>
    </footer>
  );
}
