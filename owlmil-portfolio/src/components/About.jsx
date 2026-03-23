function About() {
  return (
    <section id="about" className="bg-[#F5F0E8] px-8 py-24 border-t-4 border-black">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#5C7A3E] mb-2">
            — Background
          </p>
          <h2 className="font-mono font-black text-5xl uppercase text-black">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 items-start">

          {/* Left — bio */}
          <div className="border-4 border-black bg-[#E8C547] p-8 shadow-[6px_6px_0px_#000]">
            <p className="font-sans text-sm text-black leading-relaxed mb-4">
              I'm working toward a career in machine learning engineering or biostatistics —
              two fields that share a deep respect for uncertainty and the discipline of letting
              data actually tell you something, rather than telling it what to say.
            </p>
            <p className="font-sans text-sm text-black leading-relaxed mb-4">
              Along the way I'm building full-stack data products: things that not only analyze,
              but communicate — interactive, honest, and built to be understood by more than
              just the person who made them.
            </p>
            <p className="font-sans text-sm text-black leading-relaxed mb-8">
              Outside the work, I play Dungeons & Dragons, which turns out to be an excellent
              crash course in probability, expected value, and the art of making decisions
              under uncertainty.
            </p>
            
            <a  href="#contact"
              className="font-mono font-bold text-sm uppercase tracking-widest bg-black text-[#E8C547]
              border-4 border-black px-6 py-3
              shadow-none hover:shadow-[4px_4px_0px_#3D5C28]
              hover:translate-x-[-1px] hover:translate-y-[-1px]
              transition-all duration-100 inline-block"
            >
              Get In Touch
            </a>
          </div>

          {/* Right — info table */}
          <div className="border-4 border-black bg-[#F5F0E8] shadow-[6px_6px_0px_#000]">
            <div className="bg-black px-6 py-3">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8C547]">
                Quick Info
              </p>
            </div>
            {[
              { key: "Focus", val: "ML Engineering, Biostatistics" },
              { key: "Languages", val: "Python, R, SQL" },
              { key: "Frameworks", val: "PyTorch, scikit-learn, React" },
              { key: "Interests", val: "Data products, simulation, D&D" },
              { key: "Currently", val: "Building this portfolio" },
              { key: "Open To", val: "Opportunities" },
            ].map((row, i) => (
              <div
                key={row.key}
                className={`flex justify-between items-center px-6 py-4 border-b-2 border-black last:border-b-0 ${i % 2 === 0 ? 'bg-[#F5F0E8]' : 'bg-[#E8E3D5]'}`}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-black opacity-50">
                  {row.key}
                </span>
                <span className="font-mono text-sm text-black font-bold">
                  {row.val}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About