'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@fedrok.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
    <div className="flex h-[17px] overflow-hidden">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="transition-transform duration-[440ms] ease-out hover:-translate-y-4"
          style={{
            transitionDelay: `${delay + index * 50}ms`,
            textShadow: 'rgb(5, 96, 50) 0px 16px 0px'
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );

  return (
    <footer className="w-full bg-[rgb(251,241,229)] py-6 px-20">
      <div className="max-w-[1920px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between gap-4 w-full">
          
          {/* Left Section - Logo and Contact */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="w-[204px] h-[204px] mb-16">
              <div className="w-full h-full bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-4xl font-bold">FEDROK</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="max-w-[630px] pb-12">
              <h6 className="text-[40px] font-light leading-[52px] text-[rgb(0,74,37)] font-sans">
                Blockchain for sustainability. Let's create a lasting impact together.
              </h6>
            </div>

            {/* Contact Section */}
            <div className="w-fit">
              <div className="flex justify-between w-full mb-2">
                <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Contact us</p>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 bg-transparent border-none cursor-pointer transition-colors duration-200 px-1.5 py-0.5"
                >
                  <p className={`text-center transition-opacity duration-400 ${emailCopied ? 'opacity-100' : 'opacity-60'} text-[rgb(0,74,37)] font-sans leading-[22.4px]`}>
                    {emailCopied ? 'Copied!' : 'Copy Email'}
                  </p>
                  <div className="w-4 h-4">
                    <svg width="16" height="16" className="text-[rgb(0,74,37)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                  </div>
                </button>
              </div>
              <button className="bg-transparent border-none cursor-pointer">
                <h5 className="text-[48px] leading-[62.4px] text-center cursor-pointer text-[rgb(5,96,50)] font-['Unbounded',sans-serif]">
                  contact@fedrok.com
                </h5>
              </button>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col items-end gap-20 mt-5 max-w-[760px] min-w-[320px]">
            
            {/* Navigation Columns */}
            <div className="flex gap-20 justify-end w-full">
              
              {/* Build Column */}
              <div className="flex flex-col gap-3 w-fit">
                <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Build</p>
                <Link href="https://fedrok.com/docs" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Docs" />
                  </button>
                </Link>
              </div>

              {/* Papers Column */}
              <div className="flex flex-col gap-3 w-fit">
                <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Papers</p>
                <Link href="https://drive.google.com/file/d/1NDEqn9YSiHxaFZscQG4WiQBJT68Pfd-J/view?usp=sharing" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="WhitePaper" />
                  </button>
                </Link>
                <Link href="https://drive.google.com/file/d/1Nn5UT9H14OrPZxrGsp9bzqlzWz6TRhvh/view?usp=sharing" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="YellowPaper" />
                  </button>
                </Link>
                <Link href="https://fedrok.com/onepager" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Onepager" />
                  </button>
                </Link>
              </div>

              {/* Explore Column */}
              <div className="flex flex-col gap-3 w-fit">
                <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Explore</p>
                <Link href="https://fedrok.com/ecosystem" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Ecosystem" />
                  </button>
                </Link>
                <Link href="https://fedrok.com/roadmap" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Roadmap" />
                  </button>
                </Link>
                <Link href="https://fedrok.com/bridge" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Bridge" />
                  </button>
                </Link>
                <Link href="https://fedrok.com/exchange" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Exchange" />
                  </button>
                </Link>
              </div>

              {/* Fedrok Column */}
              <div className="flex flex-col gap-3 w-fit">
                <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Fedrok</p>
                <Link href="https://fedrok.com/" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="FDKCoin" />
                  </button>
                </Link>
                <Link href="http://51.107.25.235/blocks" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="FDKScan" />
                  </button>
                </Link>
                <Link href="https://fedrok.com/about" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Aboutus" />
                  </button>
                </Link>
                <Link href="https://fedrok.com/blog" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="Blog" />
                  </button>
                </Link>
                <Link href="https://fedrok.com/contactUs" className="cursor-pointer">
                  <button className="bg-transparent border-none text-[rgb(0,74,37)] cursor-pointer font-sans text-center tracking-[0.5px] transition-all duration-[440ms] ease-in-out">
                    <AnimatedText text="ContactUs" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-8">
              <button className="bg-white border border-[rgb(5,96,50)] text-[rgb(5,96,50)] cursor-pointer font-sans text-xl leading-7 min-w-[180px] h-[60px] px-20 text-center">
                <div className="flex items-center justify-center h-[50px] relative overflow-hidden transition-transform duration-400">
                  <p className="relative h-full text-center whitespace-nowrap transition-transform duration-400 ease-[cubic-bezier(0.35,0.1,0.25,1)] invisible w-full">
                    Docs
                  </p>
                </div>
              </button>
              <button className="bg-[rgb(5,96,50)] border border-white text-white cursor-pointer flex items-center justify-between font-sans text-xl leading-7 min-w-[267px] h-[60px] px-8 py-2">
                <div className="flex items-center justify-center h-[50px] relative overflow-hidden transition-transform duration-400">
                  <p className="relative h-full text-center whitespace-nowrap transition-transform duration-400 ease-[cubic-bezier(0.35,0.1,0.25,1)] invisible w-full">
                    Start Mining
                  </p>
                </div>
                <div className="aspect-square bg-white text-[rgb(5,96,50)] flex items-center justify-center min-h-[48px] min-w-[48px] transition-all duration-300 ease-in-out transform hover:bg-gray-100">
                  <svg width="20" height="20" className="transition-transform duration-300 rotate-45" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Contact Info and Social */}
            <div className="flex gap-20 justify-end w-full">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1 max-w-[130px] w-full">
                  <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Address</p>
                  <p className="text-[rgb(5,96,50)] font-sans text-sm leading-[19.6px]">
                    <span>Bahnhofplatz 6300 Zug </span>
                    <br />
                    <span>Switzerland</span>
                  </p>
                </div>
                <div className="flex flex-col gap-1 max-w-[130px] w-full">
                  <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Phone</p>
                  <p className="text-[rgb(5,96,50)] font-sans text-sm leading-[19.6px]">
                    +44-7730-280670
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col w-fit">
                <p className="text-[rgb(0,74,37)] font-sans leading-[22.4px]">Follow us on</p>
                <div className="flex gap-6 justify-end pt-3 text-right w-fit">
                  {[
                    { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                    { name: 'Notion', icon: 'M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z' },
                    { name: 'Telegram', icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
                    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                    { name: 'Discord', icon: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0003 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z' },
                    { name: 'X', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' }
                  ].map((social, index) => (
                    <button
                      key={social.name}
                      className="bg-[rgb(5,96,50)] text-white border border-white cursor-pointer flex items-center justify-center w-9 h-9 transition-colors duration-200"
                    >
                      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                        <path d={social.icon} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-row-reverse flex-wrap justify-between gap-4 pt-[78px] w-full max-w-[1920px]">
          <div className="flex gap-[18px]">
            <Link href="https://fedrok.com/privacy-policy" className="text-[rgb(105,160,132)] font-sans leading-[22.4px] underline cursor-pointer">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-2">
            <p className="text-[rgb(105,160,132)] font-sans leading-[22.4px]">
              ©Fedrok 2024. All rights reserved by Fedrok.
            </p>
            <p className="text-[rgb(105,160,132)] font-sans leading-[22.4px]">
              v 1.8.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
