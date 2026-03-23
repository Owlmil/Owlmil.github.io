const projects = [
  {
    number: "01",
    name: "Roll for Stats",
    subtitle: "D&D 5e Combat Probability Simulator",
    desc: "A Monte Carlo simulation engine for D&D 5e combat. Models damage distributions across weapons and spells, calculates win probabilities for any encounter, and visualizes how small stat changes cascade through hundreds of simulated battles.",
    tags: ["Monte Carlo", "probability", "Python", "Plotly", "React"],
    status: "In Progress",
    featured: true,
  },
  {
    number: "02",
    name: "Predictive Diagnosis",
    subtitle: "ML Classification on Clinical Data",
    desc: "End-to-end ML pipeline on a biomedical dataset — feature selection, model comparison, ROC analysis, and interpretability via SHAP values.",
    tags: ["scikit-learn", "SHAP", "ROC/AUC", "classification"],
    status: "Planned",
    featured: false,
  },
  {
    number: "03",
    name: "The Hypothesis Forge",
    subtitle: "Interactive Biostatistics Dashboard",
    desc: "Upload any dataset and run t-tests, ANOVA, chi-square, and Mann-Whitney U — with live visualizations of p-values, effect sizes, and confidence intervals.",
    tags: ["hypothesis testing", "scipy", "Plotly", "R"],
    status: "Planned",
    featured: false,
  },
  {
    number: "04",
    name: "Data Oracle",
    subtitle: "AI-Powered Analysis Assistant",
    desc: "Natural language interface for dataset exploration. Ask questions, get automated EDA, chart generation, and statistical summaries powered by an LLM backend.",
    tags: ["LLM API", "pandas", "RAG", "FastAPI"],
    status: "Planned",
    featured: false,
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-[#5C7A3E] px-8 py-24 border-t-4 border-black">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#E8C547] mb-2">
            — Work
          </p>
          <h2 className="font-mono font-black text-5xl uppercase text-[#F5F0E8]">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-4">

          {/* Featured project */}
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.name}
              className="border-4 border-black bg-[#E8C547] p-8 
              shadow-none hover:shadow-[8px_8px_0px_#000]
              hover:translate-x-[-2px] hover:translate-y-[-2px]
              transition-all duration-100 cursor-pointer
              grid grid-cols-3 gap-8 items-center"
            >
              <div className="col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-black opacity-40">
                    {project.number}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest border-2 border-black text-black px-2 py-0.5">
                    ● {project.status}
                  </span>
                </div>
                <h3 className="font-mono font-black text-4xl uppercase text-black mb-1">
                  {project.name}
                </h3>
                <p className="font-mono text-sm text-black mb-4 opacity-60">
                  {project.subtitle}
                </p>
                <p className="font-sans text-sm text-black leading-relaxed mb-6 opacity-80">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs border-2 border-black text-black px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-4 border-black bg-[#F5F0E8] h-48 flex items-center justify-center">
                <p className="font-mono text-xs uppercase tracking-widest text-black opacity-40">
                  Preview
                </p>
              </div>
            </div>
          ))}

          {/* Regular projects grid */}
          <div className="grid grid-cols-3 gap-4">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.name}
                className="border-4 border-black bg-[#E8C547] p-6
                shadow-none hover:shadow-[6px_6px_0px_#000]
                hover:translate-x-[-2px] hover:translate-y-[-2px]
                transition-all duration-100 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-black opacity-40">
                    {project.number}
                  </span>
                  <span className="font-mono text-xs border-2 border-black text-black px-2 py-0.5 uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-mono font-black text-xl uppercase text-black mb-1">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-black mb-3 opacity-60">
                  {project.subtitle}
                </p>
                <p className="font-sans text-sm text-black leading-relaxed mb-4 opacity-80">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs border-2 border-black text-black px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects