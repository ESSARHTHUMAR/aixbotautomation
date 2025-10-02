import React from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "../navbar/NavLogo";
import { SiInstagram, SiX, SiLinkedin, SiFacebook } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Services"
          links={[
            {
              title: "Web Scraping ",
              href: "/#features",
            },
            {
              title: "Bot Development ",
              href: "/#testimonials",
            },
            {
              title: "Automation Workflows",
              href: "/#pricing",
            },
            {
              title: "API & CRM Integration",
              href: "/#pricing",
            },
          ]}
        />
        <GenericColumn
          title="Company"
          links={[
            // {
            //   title: "Careers",
            //   href: "/#",
            // },
            {
              title: "Team",
              href: "/#",
            },
            {
              title: "Contact",
              href: "/contact",
            },
          ]}
        />
        <GenericColumn
          title="Legal"
          links={[
            {
              title: "Terms & Conditions",
              href: "/#",
            },
            {
              title: "Privacy Policy",
              href: "/#",
            },
            {
              title: "Refund Policy",
              href: "/#",
            },
          ]}
        />

        <GenericColumn
          title="Socials"
          links={[
            {
              title: "Linkedin",
              href: "/#",
              Icon: SiLinkedin,
            },
            {
              title: "Instagram",
              href: "/#",
              Icon: SiInstagram,
            },
            {
              title: "Facebook",
              href: "/#",
              Icon: SiFacebook,
            },
            {
              title: "Twitter",
              href: "/#",
              Icon: SiX,
            },
          ]}
        />
      </MaxWidthWrapper>

      <div className="mt-8 border-t border-zinc-800">
        <MaxWidthWrapper className="flex items-center justify-between py-4 text-xs text-zinc-400">
          <span>© AIXBOT AUTOMATION - All rights reserved</span>
          <span>
            Designed & Developed by{" "}
            <Link
              className="inline-block text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
              key="Essar"
              href="#"
            >
              Essar Thumar
            </Link>
          </span>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <NavLogo />
      <div className="mt-4 space-y-2 text-sm text-zinc-400">
        <div className="flex items-start gap-2">
          <FiMapPin className="h-4 w-4 text-zinc-500" />
          <div className="flex flex-col items-start justify-start">
          <p>209 Opera Points, Kothariya, </p>
          <p>Rajkot - 360002, Gujarat, India</p>
          </div>
        </div>
        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 transition-colors hover:text-zinc-200"
        >
          <FiPhone className="h-4 w-4 text-zinc-500" />
          +91 95374 40350
        </a>
        <a
          href="mailto:hello@aixbot.dev"
          className="flex items-center gap-2 transition-colors hover:text-zinc-200"
        >
          <FiMail className="h-4 w-4 text-zinc-500" />
          aixbotautomation@gmail.com
        </a>
      </div>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block text-zinc-50">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};
