function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0E8] border-b-4 border-black px-8 py-4 flex justify-between items-center">
      <a
        href="#"
        className="font-mono font-bold text-xl tracking-tight text-black uppercase"
      >
        Manya Goel
      </a>

      <ul className="flex gap-6 list-none">
        {["Skills", "Projects", "About", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-mono text-sm font-bold uppercase tracking-widest text-black border-2 border-black px-3 py-1 
              hover:bg-black hover:text-[#F5F0E8] transition-colors duration-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
