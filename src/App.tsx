import React, { useState, useEffect } from 'react';
import { Server, ShieldCheck, Database, Terminal as TerminalIcon, Network, ChevronRight, Globe, Cloud, HardDrive, ShieldX, Route } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Typewriter = ({ phrases }: { phrases: string[] }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 0 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const delta = isDeleting ? -1 : 1;
        setText(currentPhrase.substring(0, text.length + delta));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <span className="font-semibold gradient-text">
      {text}<span className="inline-block w-[3px] h-[1em] bg-current ml-1 animate-blink align-middle" style={{ backgroundColor: '#0ea5e9' }} />
    </span>
  );
};

const TerminalPortfolio = ({ onExit }: { onExit: () => void }) => {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8 selection:bg-green-500 selection:text-black">
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> ./start_portfolio.sh</p>
        <p className="text-zinc-500">Loading modules...</p>
        <p>[OK] AWS Architecture Core Initialized</p>
        <p>[OK] Security Protocols Active</p>
        <p>[OK] Zero Trust Validation Passed</p>
        <br />
        <p className="font-bold text-white text-xl"># ANTHONY VANEGAS</p>
        <p className="text-green-400"># Security Engineer | Web Developer | Cloud Architect</p>
        <br />
        <p className="text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-2">-- Core Infrastructure --</p>
        <p>{'>'} AWS Cloud, Terraform, Python, React, WAF, Zero Trust, Node.js</p>
        <br />
        <p className="text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-2">-- Recent Operations --</p>
        <p className="text-white mt-2">{'>'} Gerson Lehrman Group (Security Engineer)</p>
        <p className="text-zinc-300">- Deployed AWS Web Application Firewall (WAF) using Terraform</p>
        <p className="text-zinc-300">- Created Python automation for legacy app modernization to cloud</p>
        <p className="text-zinc-300">- Built custom Mocha JS penetration automation tools</p>
        <br />
        <div className="flex items-center gap-4 mt-12 bg-zinc-900/50 p-4 border border-zinc-800">
          <p>Access Level: <span className="text-red-500 font-bold">GUEST</span></p>
          <button onClick={onExit} className="border border-green-500 px-6 py-2 hover:bg-green-500 hover:text-black transition-colors font-bold tracking-widest uppercase text-sm ml-auto">
            Exit Terminal
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-[#050505] to-[#050505] z-0 opacity-40"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      {/* Animated Blips / Network nodes */}
      <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-red-500 rounded-full animate-ping opacity-60" />
      <div className="absolute top-[60%] left-[80%] md:left-[85%] w-4 h-4 bg-[#0ea5e9] rounded-full animate-pulse shadow-[0_0_15px_#0ea5e9] opacity-80" />
      <div className="absolute top-[80%] left-[30%] w-2 h-2 bg-yellow-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] left-[70%] w-2 h-2 bg-red-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-[45%] left-[40%] w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6] opacity-90" style={{ animationDelay: '0.8s' }} />

      {/* New Edge Nodes */}
      <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-green-500 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-[85%] left-[10%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[15%] right-[5%] w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[10%] right-[15%] w-3 h-3 bg-red-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '1.8s' }} />
      <div className="hidden md:block absolute top-[50%] right-[5%] w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-80" style={{ animationDelay: '2.2s' }} />

      {/* Abstract connecting lines (SVG) */}
      <svg className="absolute w-full h-full text-[#0ea5e9]/10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="15" y1="20" x2="40" y2="45" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.5,0.5" className="animate-pulse" />
        <line x1="40" y1="45" x2="80" y2="60" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1,1" style={{ animationDelay: '1s' }} className="animate-pulse" />
        <line x1="30" y1="80" x2="40" y2="45" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.5,0.5" style={{ animationDelay: '2s' }} className="animate-pulse" />
        <line x1="70" y1="30" x2="80" y2="60" stroke="currentColor" strokeWidth="0.05" />
        <line x1="5" y1="10" x2="15" y2="20" stroke="currentColor" strokeWidth="0.05" strokeDasharray="0.5,0.5" style={{ animationDelay: '1.5s' }} className="animate-pulse" />
        <line x1="95" y1="15" x2="80" y2="60" stroke="currentColor" strokeWidth="0.1" style={{ animationDelay: '0.8s' }} className="animate-pulse hidden md:block" />
        <line x1="85" y1="90" x2="30" y2="80" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1,1" style={{ animationDelay: '2.5s' }} className="animate-pulse" />
      </svg>
    </div>
  );
};

const CloudArchitecture = () => {
  return (
    <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6 md:p-10 relative overflow-hidden flex flex-col min-h-[450px]">
      <div className="flex items-center gap-3 mb-8 text-[#2563eb]">
        <Network className="w-5 h-5" />
        <h3 className="font-bold text-white tracking-widest text-sm">SECURE ORIGIN ARCHITECTURE</h3>
      </div>

      <div className="flex-1 relative flex flex-col md:flex-row items-center justify-center md:justify-between px-2 md:px-6 text-white text-xs font-bold border border-zinc-900 bg-zinc-950 rounded-lg py-10 md:pt-16 md:pb-24 gap-4 md:gap-0">

        {/* Left Column: Route 53 + Browser */}
        <div className="flex flex-col items-center relative z-10 md:mr-4">
          {/* Route 53 Node */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.1)] relative">
              <Route className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-white text-[9px] tracking-wider uppercase text-center leading-tight">Amazon<br /><span className="text-purple-400 font-normal">Route 53</span></span>
          </div>

          {/* Vertical Flow (Browser <-> Route53) */}
          <div className="w-[2px] h-8 md:h-12 bg-zinc-800 relative mb-4 flex justify-center">
            {/* DNS Query up */}
            <div className="absolute w-[6px] h-3 left-1/2 -ml-[3px] bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" style={{ animation: 'flow-vertical-up 1.5s infinite' }} />
            {/* DNS Response down */}
            <div className="absolute w-[6px] h-3 left-1/2 -ml-[3px] bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]" style={{ animation: 'flow-vertical 1.5s infinite 0.75s' }} />
          </div>

          {/* User Browser Node */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] relative">
              <Globe className="w-6 h-6 text-zinc-400" />
            </div>
            <span className="text-zinc-400 text-[10px] tracking-wider uppercase text-center leading-tight">User<br />Browser</span>
          </div>
        </div>

        {/* Flow Line (Browser -> CloudFront) */}
        <div className="h-[40px] w-[2px] md:h-[2px] md:w-16 lg:w-32 flex-1 bg-zinc-800 relative mx-auto md:mx-4 mt-2 md:mt-auto md:mb-10 flex items-center justify-center">
          <div className="animate-data-flow hidden md:block" />
          <div className="animate-data-flow-vertical md:hidden" />
        </div>

        {/* Middle Column: CloudFront */}
        <div className="z-10 flex flex-col items-center gap-3 mx-auto md:mx-0 relative mt-2 md:mt-auto">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)] relative z-20">
            <Cloud className="w-7 h-7 text-white" />
            <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
            </div>
          </div>
          <span className="text-white text-[10px] tracking-wider uppercase text-center z-20">AWS CloudFront<br /><span className="text-zinc-500 font-normal">+ AWS WAF</span></span>

          {/* Desktop Blocked Traffic Visualization */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex-col items-center opacity-80 z-10 hidden md:flex">
            <div className="w-[2px] h-10 bg-red-500/30 mb-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 text-red-500 bg-red-500/10 px-2 py-1 rounded border border-red-500/20 whitespace-nowrap">
              <ShieldX className="w-3 h-3" />
              <span className="text-[9px] tracking-widest font-bold">BLOCKED</span>
            </div>
          </div>

          {/* Mobile Blocked visualization */}
          <div className="md:hidden flex flex-col items-center my-1">
            <div className="h-6 w-[2px] bg-red-500/30 mb-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 text-red-500 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
              <ShieldX className="w-3 h-3" />
              <span className="text-[9px] tracking-widest font-bold">BLOCKED</span>
            </div>
          </div>
        </div>

        {/* Flow Line (CloudFront -> S3) */}
        <div className="h-[40px] w-[2px] md:h-[2px] md:w-16 lg:w-32 flex-1 bg-zinc-800 relative mx-auto md:mx-4 mt-2 md:mt-auto md:mb-10 flex items-center justify-center">
          <div className="animate-data-flow hidden md:block" style={{ animationDelay: '0.8s' }} />
          <div className="animate-data-flow-vertical md:hidden" style={{ animationDelay: '0.8s' }} />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-950 px-2 py-0.5 text-[8px] text-green-500 tracking-widest border border-zinc-800 rounded whitespace-nowrap z-10">CLEAN</div>
        </div>

        {/* Right Column: S3 Origin */}
        <div className="z-10 flex flex-col items-center gap-3 mx-auto md:mx-0 mt-2 md:mt-auto">
          <div className="w-16 h-16 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/50 flex items-center justify-center relative shadow-[0_0_25px_rgba(14,165,233,0.15)]">
            <HardDrive className="w-7 h-7 text-[#0ea5e9]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          </div>
          <span className="text-[#0ea5e9] text-[10px] tracking-wider uppercase text-center">Amazon S3<br /><span className="text-[#0ea5e9]/60 font-normal">(Origin)</span></span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-zinc-800/50 relative z-20">
        <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
          <strong>Simulation:</strong> Traffic is resolved via <span className="text-purple-400">Amazon Route 53</span> and routed to <span className="text-zinc-300">AWS CloudFront</span> for global edge caching. <span className="text-zinc-300">AWS WAF</span> inspects requests in real-time, dropping malicious payloads before clean traffic safely reaches the <span className="text-[#0ea5e9]">Amazon S3</span> bucket.
        </p>
      </div>
    </div>
  );
};

const Navbar = ({ onTerminalToggle }: { onTerminalToggle: () => void }) => (
  <nav className="absolute top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center text-white/90">
    <div className="text-xl md:text-2xl font-bold tracking-[0.2em] flex items-center gap-4">
      AVANEGAS
      <button onClick={onTerminalToggle} className="text-[#0ea5e9] bg-[#0ea5e9]/10 p-2 rounded hover:bg-[#0ea5e9]/20 hover:text-white transition-colors border border-[#0ea5e9]/20" title="Toggle Terminal Mode">
        <TerminalIcon className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
    <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
      <a href="#home" className="hover:text-[#0ea5e9] transition-colors">Home</a>
      <a href="#about" className="hover:text-[#0ea5e9] transition-colors">About</a>
      <a href="#expertise" className="hover:text-[#0ea5e9] transition-colors">Expertise</a>
      <a href="#insights" className="hover:text-[#0ea5e9] transition-colors">Insights</a>
    </div>
  </nav>
);

export default function App() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  if (isTerminalMode) {
    return <TerminalPortfolio onExit={() => setIsTerminalMode(false)} />;
  }

  const topSkills = [
    { name: 'AWS Cloud', percent: 95 },
    { name: 'Terraform / IaC', percent: 90 },
    { name: 'Python / Powershell', percent: 85 },
    { name: 'Node / React', percent: 80 },
  ];

  const services = [
    {
      title: 'Cloud Architecture',
      icon: <Server className="w-8 h-8 mb-4 text-[#2563eb]" />,
      desc: 'Designing highly scalable and reliable cloud infrastructures on AWS and Azure with a focus on automation.'
    },
    {
      title: 'Security Engineering',
      icon: <ShieldCheck className="w-8 h-8 mb-4 text-[#0ea5e9]" />,
      desc: 'Implementing WAFs, automated penetration tools, and ensuring compliance with zero trust architectures.'
    },
    {
      title: 'Systems & Data',
      icon: <Database className="w-8 h-8 mb-4 text-[#0ea5e9]" />,
      desc: 'Automating backend processes, building robust disaster recovery plans, and testing SQL server operations seamlessly.'
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#0ea5e9]/30">

      {/* Full Screen Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden bg-[#050505]">
        <HeroBackground />

        <Navbar onTerminalToggle={() => setIsTerminalMode(true)} />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-sm md:text-sm tracking-[0.3em] font-semibold text-white/70">WELCOME TO MY WEBSITE</p>
          <div className="text-4xl md:text-7xl font-bold text-white tracking-tight h-24">
            <Typewriter phrases={['Security Engineer', 'Web Developer', 'Cloud Architect']} />
          </div>

          <div className="flex items-center gap-6 mt-10 z-20">
            <a href="https://github.com/tkepassport39" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/20 hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] transition-all duration-300 group">
              <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-vanegas-32956227/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#2563eb] hover:bg-[#2563eb]/20 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300 group">
              <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 w-full flex justify-center z-10 animate-bounce">
          <div className="border-2 border-white/40 rounded-full p-1 opacity-70">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse mx-1 my-1" />
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="bg-[#fafafa] text-zinc-900 py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative flex justify-center lg:justify-start">
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9] to-[#2563eb] rounded-full blur-2xl opacity-20 -z-10 translate-y-4 translate-x-4" />
              <img
                src="/avatar.png"
                alt="Anthony Vanegas"
                className="w-full h-full object-cover brush-mask shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-2 text-black">Anthony Vanegas</h2>
              <p className="text-sm font-bold tracking-[0.2em] text-[#0ea5e9] uppercase mb-6">Security & Cloud Professional</p>
              <p className="text-zinc-600 leading-relaxed">
                A Certified AWS Solutions Architect and passionate Information Security Engineer with proven ability in securing Cloud Infrastructure, optimizing back-end automated workflows, and collaborating with cross-functional teams to remediate complex security risks.
              </p>
            </div>

            <div className="space-y-6">
              {topSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs font-bold tracking-wider mb-2 text-zinc-800">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services / Expertise Section */}
      <section id="expertise" className="bg-zinc-100 py-24 text-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-extrabold text-black mb-4">Core Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto mb-6" />
          <p className="text-zinc-500 max-w-2xl mx-auto mb-16">
            Building resilient systems and deploying secure full-stack applications with an emphasis on modern cloud standards.
          </p>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {services.map((svc, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-zinc-100 group">
                <div className="transform group-hover:-translate-y-2 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{svc.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Labs / Visualizations */}
      <section id="insights" className="bg-[#050505] py-24 text-center border-t border-zinc-900 border-b">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-extrabold text-white mb-4">Live Insights</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto mb-6" />
          <p className="text-zinc-500 max-w-2xl mx-auto mb-16">
            A demonstration of architectural and security visualization concepts.
          </p>

          <div className="grid grid-cols-1 gap-12 text-left">
            <CloudArchitecture />
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <section id="contact" className="bg-[#050505] pt-16 pb-12 text-center text-white">
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Anthony Vanegas. All Rights Reserved.</p>
      </section>

    </div>
  );
}
