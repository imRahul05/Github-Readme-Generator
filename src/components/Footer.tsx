import React from 'react';
import { Linkedin, Github, Globe } from 'lucide-react';
// Use X icon instead of Twitter
import { X } from 'lucide-react';

interface FooterProps {
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  name?: string;
}

export default function Footer({ 
  socialLinks = {
    twitter: "https://twitter.com/RahulJW007",
    linkedin: "https://linkedin.com/in/imrahul05",
    github: "https://github.com/imrahul05",
    website: "https://imrahul05.vercel.app"
  },
  name = "Rahul Kumar"
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: X, href: socialLinks.twitter, label: "X (Twitter) Profile" }, // Updated to X
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn Profile" },
    { icon: Github, href: socialLinks.github, label: "GitHub Profile" },
    { icon: Globe, href: socialLinks.website, label: "Portfolio Website" }
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 p-6 mt-12 text-center transition-all duration-300 hover:bg-gray-900/60">
      <div className="flex justify-center space-x-6 mb-4">
        {socialIcons.map(({ icon: Icon, href, label }) => href && (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transform transition-transform duration-200 hover:scale-110"
          >
            <Icon className="text-blue-400 hover:text-blue-300" size={24} />
          </a>
        ))}
      </div>
      <p className="text-gray-400 text-sm">
        © {currentYear} {name}. All rights reserved.
      </p>
    </footer>
  );
}