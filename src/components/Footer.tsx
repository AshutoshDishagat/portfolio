export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter uppercase">
            Ashutosh Dishagat
          </div>
          
          <div className="flex space-x-8">
            <a href="https://github.com/AshutoshDishagat" target="_blank" rel="noopener noreferrer" className="text-sm font-black uppercase tracking-widest hover:text-muted transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ashutosh-dishagat-10343625a/" target="_blank" rel="noopener noreferrer" className="text-sm font-black uppercase tracking-widest hover:text-muted transition-colors">LinkedIn</a>
            <a href="https://www.fiverr.com/ashutosh_tech1?public_mode=true" target="_blank" rel="noopener noreferrer" className="text-sm font-black uppercase tracking-widest hover:text-muted transition-colors">Fiverr</a>
          </div>

          <div className="text-xs font-bold uppercase tracking-[4px] text-muted-foreground/30">
            Digital Experiences Hub
          </div>
        </div>
      </div>
    </footer>
  );
}
