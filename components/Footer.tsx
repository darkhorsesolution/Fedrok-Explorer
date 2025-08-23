'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@fedrok.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const navigationSections = {
    Build: [
      { name: 'Docs', href: 'https://fedrok.com/docs' },
    ],
    Papers: [
      { name: 'White Paper', href: 'https://drive.google.com/file/d/1NDEqn9YSiHxaFZscQG4WiQBJT68Pfd-J/view?usp=sharing' },
      { name: 'Yellow Paper', href: 'https://drive.google.com/file/d/1Nn5UT9H14OrPZxrGsp9bzqlzWz6TRhvh/view?usp=sharing' },
      { name: 'One pager', href: 'https://fedrok.com/onepager' },
    ],
    Explore: [
      { name: 'Ecosystem', href: 'https://fedrok.com/ecosystem' },
      { name: 'Roadmap', href: 'https://fedrok.com/roadmap' },
      { name: 'Bridge', href: 'https://fedrok.com/bridge' },
      { name: 'Exchange', href: 'https://fedrok.com/exchange' },
    ],
    Fedrok: [
      { name: 'FDK Coin', href: 'https://fedrok.com/' },
      { name: 'FDK Scan', href: 'http://51.107.25.235/blocks' },
      { name: 'About us', href: 'https://fedrok.com/about' },
      { name: 'Blog', href: 'https://fedrok.com/blog' },
      { name: 'Contact Us', href: 'https://fedrok.com/contactUs' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: '🔗' },
    { name: 'Notion', href: '#', icon: '📝' },
    { name: 'Telegram', href: '#', icon: '📱' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Discord', href: '#', icon: '🎮' },
    { name: 'X (Twitter)', href: '#', icon: '🐦' },
  ];

  return (
    <footer className="bg-primary-50 py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column - Branding & Contact */}
          <div className="space-y-16">
            {/* Logo */}
            <div className="w-52 h-52">
              <div className="w-full h-full bg-primary-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-display text-6xl font-bold">F</span>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-xl">
              <h3 className="text-primary-800 font-sans text-3xl lg:text-4xl font-light leading-relaxed mb-12">
                Blockchain for sustainability. Let's create a lasting impact together.
              </h3>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <p className="text-primary-800 font-sans text-base">Contact us</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-primary-800 hover:text-primary-600 transition-colors"
                >
                  <span className="font-sans text-base">
                    {copiedEmail ? 'Email Copied!' : 'Copy Email'}
                  </span>
                  <span className="text-lg">📋</span>
                </button>
              </div>
              <div>
                <h4 className="text-primary-600 font-display text-4xl lg:text-5xl font-bold hover:text-primary-700 transition-colors cursor-pointer">
                  contact@fedrok.com
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="space-y-20">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
              {Object.entries(navigationSections).map(([sectionName, links]) => (
                <div key={sectionName} className="space-y-3">
                  <h4 className="text-primary-800 font-sans text-base font-medium mb-3">
                    {sectionName}
                  </h4>
                  <div className="space-y-2">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block text-primary-800 font-sans text-base hover:text-primary-600 transition-colors tracking-wide"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://fedrok.com/docs"
                className="bg-white border-2 border-primary-600 text-primary-600 px-20 py-4 rounded-lg font-sans text-xl text-center hover:bg-primary-50 transition-colors min-w-44"
              >
                Docs
              </Link>
              <Link
                href="#"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-sans text-xl flex items-center justify-between hover:bg-primary-700 transition-colors min-w-64"
              >
                <span>Start Mining</span>
                <div className="bg-white text-primary-600 w-12 h-12 rounded flex items-center justify-center ml-2">
                  <span className="text-xl transform rotate-45">→</span>
                </div>
              </Link>
            </div>

            {/* Contact Info & Social Links */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="max-w-32">
                  <h5 className="text-primary-800 font-sans text-base font-medium mb-1">Address</h5>
                  <p className="text-primary-600 text-sm leading-relaxed">
                    Bahnhofplatz 6300 Zug<br />
                    Switzerland
                  </p>
                </div>
                <div className="max-w-32">
                  <h5 className="text-primary-800 font-sans text-base font-medium mb-1">Phone</h5>
                  <p className="text-primary-600 text-sm">+44-7730-280670</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="lg:text-right">
                <h5 className="text-primary-800 font-sans text-base font-medium mb-3">Follow us on</h5>
                <div className="flex flex-wrap gap-6 lg:justify-end">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="bg-primary-600 text-white w-9 h-9 rounded flex items-center justify-center hover:bg-primary-700 transition-colors text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-200 pt-20 flex flex-col lg:flex-row-reverse lg:justify-between gap-4">
          <div>
            <Link
              href="https://fedrok.com/privacy-policy"
              className="text-primary-600 font-sans text-base underline hover:text-primary-700 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-2 text-primary-600 font-sans text-base">
            <span>©Fedrok 2024. All rights reserved by Fedrok.</span>
            <span>v 1.8.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
