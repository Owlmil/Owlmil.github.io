const skills = [
  {
    icon: "🧠",
    name: "Machine Learning",
    desc: "Predictive modeling, feature engineering, cross-validation, and model evaluation end to end.",
    tags: ["scikit-learn", "PyTorch", "XGBoost", "SHAP"],
  },
  {
    icon: "🧬",
    name: "Biostatistics",
    desc: "Hypothesis testing, effect sizes, clinical data analysis, and statistical inference.",
    tags: ["t-tests", "ANOVA", "R", "scipy"],
  },
  {
    icon: "📊",
    name: "Data Analysis",
    desc: "Exploratory analysis, data wrangling, and visual storytelling from raw messy datasets.",
    tags: ["pandas", "numpy", "Plotly", "SQL"],
  },
  {
    icon: "🤖",
    name: "AI Integration",
    desc: "Building applications powered by LLMs. Prompt engineering, RAG pipelines, API integration.",
    tags: ["Claude API", "OpenAI", "RAG", "LangChain"],
  },
  {
    icon: "🌐",
    name: "Frontend & Backend",
    desc: "Full-stack development for data products, interactive dashboards, and demo applications.",
    tags: ["React", "Tailwind", "FastAPI", "PostgreSQL"],
  },
  {
    icon: "🎲",
    name: "Simulation & Probability",
    desc: "Monte Carlo methods, probability distributions, and stochastic modeling for real-world uncertainty.",
    tags: ["Monte Carlo", "distributions", "Bayesian", "simulation"],
  },
]

function Skills() {
  return (
    <section id="skills" className="bg-[#8cb561] px-8 py-24 border-t-4 border-black">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#5C7A3E] mb-2">
            — What I Work With
          </p>
          <h2 className="font-mono font-black text-5xl uppercase text-black">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-4 border-black bg-[#E8C547] p-6 
              shadow-none hover:shadow-[6px_6px_0px_#000] 
              hover:translate-x-[-2px] hover:translate-y-[-2px] 
              transition-all duration-100 cursor-default"
            >
              <span className="text-3xl mb-4 block">{skill.icon}</span>
              <h3 className="font-mono font-black text-lg uppercase text-black mb-2">
                {skill.name}
              </h3>
              <p className="font-sans text-sm text-black leading-relaxed mb-4 opacity-70">
                {skill.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs border-2 border-[#5C7A3E] text-[#5C7A3E] px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills