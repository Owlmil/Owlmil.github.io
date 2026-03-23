function Hero() {
  return (
    <section className="min-h-screen bg-[#8cb561] flex items-center px-8 pt-24 pb-16">
      <div className="w-full max-w-6xl mx-auto">
        {/* Single big yellow card with green border */}
        <div className="bg-[#E8C547] p-10 shadow-[8px_8px_0px_#3D5C28] grid grid-cols-2 gap-8 items-center min-h-[480px]">
          {/* Left — text content */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-black mb-4">
                ML · Biostatistics · Data Engineering
              </p>
              <h1 className="font-mono font-black text-7xl uppercase leading-none tracking-tight text-black mb-4">
                Manya
                <br />
                <span className="text-[#3D5C28]">Goel</span>
              </h1>
              <p className="font-mono text-sm text-black leading-relaxed max-w-md">
                I build at the intersection of machine learning, biostatistics,
                and data engineering — turning messy real-world data into
                something that actually means something.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="#projects"
                className="font-mono font-bold text-sm uppercase tracking-widest bg-black text-[#E8C547] 
                border-4 border-black px-6 py-3 shadow-none 
                hover:shadow-[4px_4px_0px_#3D5C28] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                View Projects
              </a>

              <a
                href="#about"
                className="font-mono font-bold text-sm uppercase tracking-widest bg-[#ff7df2] text-black 
                border-4 border-[#454411] px-6 py-3 shadow-none hover:shadow-[4px_4px_0px_#3D5C28]
                hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right — illustration placeholder */}
          <div className="border-4 border-black bg-[#F5F0E8] flex items-center justify-center h-[380px] shadow-[6px_6px_0px_#000]">
            <div className="text-center">
              <p className="font-mono font-bold text-black text-sm uppercase tracking-widest">
                Illustration
              </p>
              <p className="font-mono text-black text-xs mt-2 opacity-40">
                coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
