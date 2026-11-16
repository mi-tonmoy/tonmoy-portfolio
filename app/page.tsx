import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">

      <Navbar />


      {/* HERO SECTION */}
      <section className="relative" id="home">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-green-100/70 blur-[100px]" />

        <div className="container-custom relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="animate-fade-up">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-600" />
              Available for New Projects
            </div>

            <p className="mb-4 text-lg font-medium text-gray-500">
              Hello, I'm Moyeenul Islam Tonmoy
            </p>

            <h1 className="max-w-[650px] text-5xl font-bold leading-[1.12] tracking-tight text-gray-950 sm:text-6xl xl:text-7xl">
              I Build
              <span className="text-green"> Beautiful </span>
              Websites That Grow Businesses.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Certified WordPress Developer with 6+ years of experience.
              I create modern, responsive and user-focused websites
              that help businesses grow online.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#projects" className="btn-primary">
                Explore My Work <span>↗</span>
              </Link>

              <Link href="#contact" className="btn-secondary">
                Let's Talk
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-gray-200 pt-8">

              <div>
                <h3 className="text-3xl font-bold text-gray-950">
                  6+
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-950">
                  650+
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-950">
                  100%
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Client Focused
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[480px] animate-fade-up lg:ml-auto">

            <div className="absolute -inset-5 rounded-[40px] bg-green-100/70 blur-2xl" />

            <div className="animate-float relative overflow-hidden rounded-[32px] border border-green-100 bg-[#F0F7F1] p-4 shadow-2xl shadow-green-900/10">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-green-100">

                <Image
                  src="/profile.jpg"
                  alt="Moyeenul Islam Tonmoy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />

              </div>

              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                <p className="text-sm font-semibold text-gray-900">
                  WordPress Developer
                </p>
                <p className="mt-1 text-xs text-green">
                  Building Digital Experiences
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

<Reveal>
      
{/* ABOUT SECTION */}
<section
  id="about"
  className="section-padding bg-[#F5F8F5]"
>
  <div className="container-custom">

    {/* SECTION HEADING */}
    <div className="mb-14">
      <p className="text-sm font-bold uppercase tracking-[3px] text-green">
        About Me
      </p>

      <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
        Turning Ideas Into
        <span className="text-green"> Digital Experiences.</span>
      </h2>

      <p className="mt-5 max-w-2xl leading-8 text-gray-600">
        I am a Certified WordPress Developer passionate about
        creating beautiful, functional and high-performing websites
        that help businesses establish a strong online presence.
      </p>
    </div>

    {/* ABOUT CONTENT */}
    <div className="grid items-start gap-12 lg:grid-cols-2">

      {/* LEFT CONTENT */}
      <div>
        <div className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm sm:p-9">

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-800">
              WP
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-950">
                WordPress Developer
              </h3>
              <p className="text-sm text-gray-500">
                Certified Professional
              </p>
            </div>
          </div>

          <p className="leading-8 text-gray-600">
            With 6+ years of experience and 650+ completed projects,
            I specialize in building custom WordPress websites,
            eCommerce solutions, landing pages and performance-focused
            digital experiences.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            My approach combines clean development, modern design
            principles and attention to detail to deliver websites
            that look great and work smoothly across all devices.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-[#F5F8F5] p-5">
              <h4 className="text-3xl font-bold text-green">
                6+
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F8F5] p-5">
              <h4 className="text-3xl font-bold text-green">
                650+
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Completed Projects
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <h3 className="mb-6 text-2xl font-bold text-gray-950">
          My Technical Skills
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

          {[
            "WordPress",
            "Elementor",
            "WooCommerce",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JavaScript",
            "jQuery",
            "PHP",
            "Git",
            "GitHub",
            "Tailwind CSS",
          ].map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-gray-200 bg-white p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:bg-green-50 hover:shadow-lg hover:shadow-green-900/5"
            >
              <span className="font-semibold text-gray-700 transition group-hover:text-green">
                {skill}
              </span>
            </div>
          ))}

        </div>

        {/* EDUCATION */}
        <div className="mt-8 rounded-3xl border border-green-100 bg-white p-7">

          <h3 className="mb-6 text-xl font-bold text-gray-950">
            Education
          </h3>

          <div className="border-l-2 border-green-200 pl-5">

            <div className="relative mb-7">
              <span className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-green-600 ring-4 ring-green-100" />

              <h4 className="font-bold text-gray-900">
                MS in Statistics
              </h4>

              <p className="mt-1 text-sm text-green">
                Shahjalal University of Science and Technology
              </p>

              <p className="mt-1 text-sm text-gray-500">
                2021 – 2022
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-green-600 ring-4 ring-green-100" />

              <h4 className="font-bold text-gray-900">
                BSc (Hons.) in Statistics
              </h4>

              <p className="mt-1 text-sm text-green">
                Shahjalal University of Science and Technology
              </p>

              <p className="mt-1 text-sm text-gray-500">
                2017 – 2020
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

</Reveal>


      
{/* SERVICES SECTION */}
<section id="services" className="section-padding bg-white">
  <div className="container-custom">

    {/* HEADING */}
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>
        <p className="text-sm font-bold uppercase tracking-[3px] text-green">
          What I Do
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
          Services That Help
          <span className="text-green"> Your Business Grow.</span>
        </h2>
      </div>

      <p className="max-w-md leading-7 text-gray-500">
        From custom WordPress development to complete eCommerce
        solutions, I create digital experiences tailored to your goals.
      </p>

    </div>

    {/* SERVICE CARDS */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          number: "01",
          icon: "</>",
          title: "WordPress Development",
          description:
            "Custom WordPress websites built with modern design, clean development and responsive layouts.",
          tags: ["Custom Websites", "Elementor", "Theme Development"],
        },
        {
          number: "02",
          icon: "↗",
          title: "eCommerce Solutions",
          description:
            "Powerful online stores with WooCommerce integration, product management and smooth shopping experiences.",
          tags: ["WooCommerce", "Online Stores", "Payment Integration"],
        },
        {
          number: "03",
          icon: "✳",
          title: "Website Customization",
          description:
            "Improve existing websites with custom layouts, functionality, performance and professional styling.",
          tags: ["Theme Customization", "Plugin Setup", "Bug Fixing"],
        },
      ].map((service) => (
        <div
          key={service.number}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10"
        >

          {/* CARD NUMBER */}
          <div className="absolute right-7 top-7 text-sm font-bold text-gray-300 transition group-hover:text-green">
            {service.number}
          </div>

          {/* ICON */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-2xl font-bold text-green transition duration-300 group-hover:bg-green group-hover:text-white">
            {service.icon}
          </div>

          {/* CONTENT */}
          <h3 className="mt-8 text-2xl font-bold text-gray-950 transition group-hover:text-green">
            {service.title}
          </h3>

          <p className="mt-4 min-h-[100px] leading-7 text-gray-500">
            {service.description}
          </p>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F5F8F5] px-3 py-2 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BOTTOM LINE */}
          <div className="mt-8 h-1 w-12 rounded-full bg-green-200 transition-all duration-300 group-hover:w-full group-hover:bg-green-600" />

        </div>
      ))}

    </div>

    {/* BOTTOM CTA */}
    <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#F5F8F5] p-8 sm:flex-row sm:items-center sm:p-10">

      <div>
        <h3 className="text-2xl font-bold text-gray-950">
          Have a project in mind?
        </h3>

        <p className="mt-2 text-gray-500">
          Let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      <a
        href="#contact"
        className="btn-primary shrink-0"
      >
        Start a Project ↗
      </a>

    </div>

  </div>
</section>


      
{/* FEATURED PROJECTS SECTION */}
<section
  id="projects"
  className="section-padding bg-[#F5F8F5]"
>
  <div className="container-custom">

    {/* HEADING */}
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>
        <p className="text-sm font-bold uppercase tracking-[3px] text-green">
          My Portfolio
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
          Selected
          <span className="text-green"> Projects.</span>
        </h2>
      </div>

      <p className="max-w-md leading-7 text-gray-500">
        A selection of websites and digital experiences
        built with creativity, attention to detail and modern technology.
      </p>

    </div>

    {/* PROJECT GRID */}
    <div className="grid gap-8 md:grid-cols-2">

      {[
        {
          number: "01",
          title: "Business Website",
          category: "WordPress Development",
          description:
            "A modern and professional business website with responsive layouts and a clean user experience.",
          image: "/projects/project-1.jpg",
          technologies: ["WordPress", "Elementor", "CSS"],
          link: "",
        },
        {
          number: "02",
          title: "eCommerce Website",
          category: "Online Store",
          description:
            "A user-friendly online shopping experience with product layouts and WooCommerce integration.",
          image: "/projects/project-2.jpg",
          technologies: ["WordPress", "WooCommerce", "PHP"],
          link: "",
        },
        {
          number: "03",
          title: "Landing Page",
          category: "Website Design",
          description:
            "A conversion-focused landing page designed to communicate value and encourage user engagement.",
          image: "/projects/project-3.jpg",
          technologies: ["WordPress", "Elementor", "JavaScript"],
          link: "",
        },
        {
          number: "04",
          title: "Corporate Website",
          category: "Custom Website",
          description:
            "A responsive corporate website with structured content and a professional digital presence.",
          image: "/projects/project-4.jpg",
          technologies: ["WordPress", "CSS", "JavaScript"],
          link: "",
        },
      ].map((project) => (
        <article
          key={project.number}
          className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10"
        >

          {/* PROJECT IMAGE */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold text-green-800 backdrop-blur">
              {project.category}
            </div>

            <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-green opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
              ↗
            </div>

          </div>

          {/* PROJECT DETAILS */}
          <div className="p-7 sm:p-8">

            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-green">
                PROJECT {project.number}
              </span>

              <span className="h-px flex-1 mx-5 bg-gray-200" />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-950 transition group-hover:text-green">
              {project.title}
            </h3>

            <p className="mt-3 leading-7 text-gray-500">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[#F5F8F5] px-3 py-2 text-xs font-medium text-gray-600"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* LINK */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-green transition hover:gap-4"
              >
                View Live Project <span>↗</span>
              </a>
            )}

          </div>

        </article>
      ))}

    </div>

    {/* BOTTOM TEXT */}
    <div className="mt-14 text-center">
      <p className="text-gray-500">
        Interested in working together?
      </p>

      <a
        href="#contact"
        className="mt-3 inline-flex items-center gap-2 font-bold text-green transition hover:gap-4"
      >
        Let's Build Something Great <span>↗</span>
      </a>
    </div>

  </div>
</section>



{/* CONTACT SECTION */}
<section id="contact" className="section-padding bg-white">
  <div className="container-custom">

    <div className="mb-12 text-center">
      <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green">
        Get In Touch
      </span>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
        Let's Work Together
      </h2>

      <p className="mx-auto max-w-2xl text-gray-600">
        Have a project in mind? Let's discuss how I can help
        bring your ideas to life.
      </p>
    </div>

    <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-gray-100 bg-[#F8FAF8] p-6 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-10">

      <div>
        <h3 className="mb-4 text-2xl font-bold text-gray-950">
          Let's Talk About Your Project
        </h3>

        <p className="mb-8 leading-7 text-gray-600">
          I'm available for WordPress development, eCommerce
          solutions and website customization projects.
          Send me a message and let's get started.
        </p>

        <div className="space-y-6">
          <div>
            <p className="mb-1 text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-900">
              moyeenulislam98@gmail.com
            </p>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-500">Availability</p>
            <p className="font-semibold text-green">
              Available for New Projects
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm md:p-7">
        <ContactForm />
      </div>

    </div>
  </div>
</section>

<Footer />

    </main>

  );
}
