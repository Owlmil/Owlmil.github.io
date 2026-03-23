function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black px-8 py-12 border-t-4 border-[#5C7A3E]"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-8">
        <div>
          <p className="font-mono font-black text-2xl uppercase text-[#E8C547] mb-1">
            Owlmil
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-[#F5F0E8] opacity-40">
            © 2025 Manya Goel
          </p>
        </div>

        <ul className="flex gap-6 list-none">
          {[
            { label: "GitHub", href: "https://github.com/Owlmil" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Email", href: "mailto:you@email.com" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-widest text-[#F5F0E8]
                border-b-2 border-transparent
                hover:border-[#E8C547] hover:text-[#E8C547]
                transition-all duration-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-[#F5F0E8] opacity-30 uppercase tracking-widest">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;
