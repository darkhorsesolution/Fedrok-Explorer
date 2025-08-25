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
    <footer style={{ backgroundColor: "rgb(251, 241, 229)" }}>
      <div className="flex flex-col items-center max-w-screen-2xl mx-auto w-full" style={{ padding: "24px 80px" }}>
        <div className="flex flex-wrap justify-between max-w-screen-2xl w-full gap-4">
          {/* Left Column - Branding & Contact */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-16" style={{ height: "204px", width: "204px" }}>
              <div className="bg-primary-600 rounded-2xl flex items-center justify-center h-full w-full">
                <span className="text-white font-display text-6xl font-bold">F</span>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="pb-12" style={{ maxWidth: "630px", color: "rgb(0, 74, 37)" }}>
              <h6 style={{
                fontFamily: "WorkSans, sans-serif",
                fontSize: "40px",
                fontWeight: "300",
                lineHeight: "52px",
                color: "rgb(0, 74, 37)"
              }}>
                Blockchain for sustainability. Let's create a lasting impact together.
              </h6>
            </div>

            {/* Contact Section */}
            <div className="w-fit">
              <div className="flex justify-between w-full">
                <p style={{
                  fontFamily: "WorkSans, sans-serif",
                  lineHeight: "22.4px",
                  color: "rgb(0, 74, 37)"
                }}>
                  Contact us
                </p>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 cursor-pointer transition-colors duration-200"
                  style={{ color: "rgb(0, 74, 37)" }}
                >
                  <p style={{
                    fontFamily: "WorkSans, sans-serif",
                    lineHeight: "22.4px",
                    color: "rgb(0, 74, 37)"
                  }}>
                    {copiedEmail ? 'Email Copied!' : 'Copy Email'}
                  </p>
                  <span className="text-base">📋</span>
                </button>
              </div>
              <button className="cursor-pointer">
                <h5 style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontSize: "48px",
                  lineHeight: "62.4px",
                  textAlign: "center",
                  color: "rgb(5, 96, 50)"
                }}>
                  contact@fedrok.com
                </h5>
              </button>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="flex flex-col items-end gap-20 mt-5" style={{ maxWidth: "760px", minWidth: "320px" }}>
            {/* Navigation Links */}
            <div className="flex gap-20 justify-end w-full">
              {Object.entries(navigationSections).map(([sectionName, links]) => (
                <div key={sectionName} className="flex flex-col gap-3 w-fit">
                  <p style={{
                    fontFamily: "WorkSans, sans-serif",
                    lineHeight: "22.4px",
                    color: "rgb(0, 74, 37)"
                  }}>
                    {sectionName}
                  </p>
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="cursor-pointer transition-all duration-300 hover:transform hover:translate-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "WorkSans, sans-serif",
                        letterSpacing: "0.5px",
                        textAlign: "center",
                        color: "rgb(0, 74, 37)"
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-8">
              <button style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "2px solid rgb(5, 96, 50)",
                color: "rgb(5, 96, 50)",
                fontFamily: "WorkSans, sans-serif",
                fontSize: "20px",
                lineHeight: "28px",
                height: "60px",
                minWidth: "180px",
                padding: "0 80px",
                textAlign: "center"
              }}>
                Docs
              </button>
              <button className="flex items-center justify-between" style={{
                backgroundColor: "rgb(5, 96, 50)",
                color: "rgb(255, 255, 255)",
                fontFamily: "WorkSans, sans-serif",
                fontSize: "20px",
                lineHeight: "28px",
                height: "60px",
                minWidth: "267px",
                padding: "0 32px 0 32px"
              }}>
                <span>Start Mining</span>
                <div className="flex items-center justify-center bg-white text-primary-600" style={{
                  minHeight: "48px",
                  minWidth: "48px",
                  aspectRatio: "1 / 1"
                }}>
                  <span className="text-xl transform rotate-45">→</span>
                </div>
              </button>
            </div>

            {/* Contact Info & Social Links */}
            <div className="flex gap-20 justify-end w-full">
              {/* Contact Info */}
              <div className="flex gap-6">
                <div className="flex flex-col gap-1 max-w-32 w-full">
                  <p style={{
                    fontFamily: "WorkSans, sans-serif",
                    lineHeight: "22.4px",
                    color: "rgb(0, 74, 37)"
                  }}>
                    Address
                  </p>
                  <p style={{
                    fontFamily: "WorkSans, sans-serif",
                    fontSize: "14px",
                    lineHeight: "19.6px",
                    color: "rgb(5, 96, 50)"
                  }}>
                    Bahnhofplatz 6300 Zug<br />
                    Switzerland
                  </p>
                </div>
                <div className="flex flex-col gap-1 max-w-32 w-full">
                  <p style={{
                    fontFamily: "WorkSans, sans-serif",
                    lineHeight: "22.4px",
                    color: "rgb(0, 74, 37)"
                  }}>
                    Phone
                  </p>
                  <p style={{
                    fontFamily: "WorkSans, sans-serif",
                    fontSize: "14px",
                    lineHeight: "19.6px",
                    color: "rgb(5, 96, 50)"
                  }}>
                    +44-7730-280670
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col w-fit">
                <p style={{
                  fontFamily: "WorkSans, sans-serif",
                  lineHeight: "22.4px",
                  color: "rgb(0, 74, 37)"
                }}>
                  Follow us on
                </p>
                <div className="flex gap-6 justify-end pt-3 text-right w-fit">
                  {socialLinks.map((social) => (
                    <button
                      key={social.name}
                      className="flex items-center justify-center transition-colors duration-200"
                      style={{
                        backgroundColor: "rgb(5, 96, 50)",
                        color: "rgb(255, 255, 255)",
                        height: "36px",
                        width: "36px"
                      }}
                      title={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row-reverse flex-wrap justify-between max-w-screen-2xl w-full gap-4" style={{ paddingTop: "78px" }}>
          <div className="flex gap-4">
            <Link
              href="https://fedrok.com/privacy-policy"
              className="cursor-pointer underline"
              style={{
                fontFamily: "WorkSans, sans-serif",
                lineHeight: "22.4px",
                color: "rgb(105, 160, 132)"
              }}
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-2">
            <p style={{
              fontFamily: "WorkSans, sans-serif",
              lineHeight: "22.4px",
              color: "rgb(105, 160, 132)"
            }}>
              ©Fedrok 2024. All rights reserved by Fedrok.
            </p>
            <p style={{
              fontFamily: "WorkSans, sans-serif",
              lineHeight: "22.4px",
              color: "rgb(105, 160, 132)"
            }}>
              v 1.8.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
