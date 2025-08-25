'use client';

export default function SustainabilityHeader() {
  return (
    <div className="bg-primary-800 py-32 px-10 relative overflow-hidden">
      {/* Background decorative elements can be added here if needed */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-white font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Join Us in Building a Sustainable Future
        </h1>
        <h2 className="text-white/90 font-sans text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed max-w-4xl mx-auto animate-fade-in">
          Fedrok is more than a blockchain; it's a commitment to environmental
          responsibility and a better tomorrow. Be part of the change.
        </h2>
      </div>
    </div>
  );
}
