import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Server, ShieldCheck, Database, Terminal as TerminalIcon, Network, Activity, ChevronRight } from 'lucide-react';

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
         <p className="flex items-center gap-2"><ChevronRight className="w-4 h-4"/> ./start_portfolio.sh</p>
         <p className="text-zinc-500">Loading modules...</p>
         <p>[OK] AWS Architecture Core Initialized</p>
         <p>[OK] Security Protocols Active</p>
         <p>[OK] Zero Trust Validation Passed</p>
         <br/>
         <p className="font-bold text-white text-xl"># ANTHONY VANEGAS</p>
         <p className="text-green-400"># Security Engineer | Cloud Architect</p>
         <br/>
         <p className="text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-2">-- Core Infrastructure --</p>
         <p>{'>'} AWS Cloud, Terraform, Python, React, WAF, Zero Trust, Node.js</p>
         <br/>
         <p className="text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-2">-- Recent Operations --</p>
         <p className="text-white mt-2">{'>'} Gerson Lehrman Group (Security Engineer)</p>
         <p className="text-zinc-300">- Deployed AWS Web Application Firewall (WAF) using Terraform</p>
         <p className="text-zinc-300">- Created Python automation for legacy app modernization to cloud</p>
         <p className="text-zinc-300">- Built custom Mocha JS penetration automation tools</p>
         <br/>
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

const ThreatMap = () => {
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    const rawLogs = [
      "[WARN] Blocked port scanning from 185.15.x.x",
      "[OK] AWS WAF rules successfully updated.",
      "[INFO] Routing traffic via Cloudfront Edge.",
      "[WARN] DDoS mitigation triggered on eu-central.",
      "[OK] Malicious payload dropped at Gateway.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [rawLogs[i % rawLogs.length], ...prev].slice(0, 4));
      i++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6 relative overflow-hidden flex flex-col h-[350px]">
      <div className="flex items-center gap-3 mb-4 text-[#0ea5e9]">
        <Activity className="w-5 h-5 animate-pulse" />
        <h3 className="font-bold text-white tracking-widest text-sm">LIVE THREAT MAP</h3>
      </div>
      <div className="flex-1 relative border border-zinc-900 rounded-lg bg-[#050505] overflow-hidden mb-4 p-2 shadow-inner">
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
         {/* Blips simulating network blocks */}
         <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75" />
         <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }} />
         <div className="absolute top-1/2 left-[60%] w-4 h-4 bg-red-500 rounded-full animate-ping opacity-80" style={{ animationDelay: '0.5s' }} />
         <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-[#0ea5e9] rounded-full animate-pulse opacity-100" />
      </div>
      <div className="h-20 overflow-hidden text-xs font-mono space-y-1.5 flex flex-col justify-end">
        {logs.map((log, i) => (
          <p key={i} className={`truncate ${log.includes('[WARN]') ? 'text-red-400' : 'text-zinc-400'}`} style={{ opacity: 1 - (i * 0.25) }}>
            {`> ${log}`}
          </p>
        ))}
      </div>
    </div>
  );
};

const CloudArchitecture = () => {
  return (
    <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6 relative overflow-hidden flex flex-col h-[350px]">
      <div className="flex items-center gap-3 mb-4 text-[#2563eb]">
        <Network className="w-5 h-5" />
        <h3 className="font-bold text-white tracking-widest text-sm">SECURE ARCHITECTURE</h3>
      </div>
      <div className="flex-1 relative flex items-center justify-between px-6 text-white text-xs font-bold border border-zinc-900 bg-zinc-950 rounded-lg">
         
         {/* WAF Node */}
         <div className="z-10 flex flex-col items-center gap-2">
           <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)] relative">
             <ShieldCheck className="w-5 h-5 text-[#0ea5e9]" />
           </div>
           <span className="text-zinc-400 text-[10px]">WAF</span>
         </div>
         
         {/* Flow Line 1 */}
         <div className="h-[2px] flex-1 bg-zinc-800 relative mx-2">
            <div className="animate-data-flow" />
         </div>
         
         {/* ALB Node */}
         <div className="z-10 flex flex-col items-center gap-2">
           <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center">
             ALB
           </div>
           <span className="text-zinc-400 text-[10px]">Balancer</span>
         </div>

         {/* Flow Line 2 */}
         <div className="h-[2px] flex-1 bg-zinc-800 relative mx-2">
            <div className="animate-data-flow" style={{ animationDelay: '1s'}} />
         </div>
         
         {/* Compute & DB Nodes */}
         <div className="z-10 flex flex-col gap-6">
           <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9] flex items-center justify-center text-[#0ea5e9] relative">
               <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
               EC2
             </div>
           </div>
           <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300">
               <Database className="w-5 h-5" />
             </div>
           </div>
         </div>
      </div>
      <p className="text-zinc-500 text-xs mt-4 leading-relaxed">
        Live simulation: External traffic routing through a Web Application Firewall, balancing load securely into private subnets.
      </p>
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
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-[#050505] to-[#050505] z-0"></div>
          <svg className="absolute w-full h-full text-white/10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <circle cx="20" cy="30" r="0.5" fill="currentColor" />
             <circle cx="80" cy="40" r="0.5" fill="currentColor" />
             <circle cx="50" cy="80" r="0.5" fill="currentColor" />
             <line x1="20" y1="30" x2="80" y2="40" stroke="currentColor" strokeWidth="0.1" />
             <line x1="20" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="0.1" />
          </svg>
        </div>
        
        <Navbar onTerminalToggle={() => setIsTerminalMode(true)} />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-sm md:text-sm tracking-[0.3em] font-semibold text-white/70">WELCOME TO MY WEBSITE</p>
          <div className="text-4xl md:text-7xl font-bold text-white tracking-tight h-24">
            <Typewriter phrases={['Security Engineer', 'Web Developer', 'Cloud Architect']} />
          </div>
          
          <Button className="rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:from-[#0284c7] hover:to-[#1d4ed8] text-white px-8 py-6 text-sm tracking-widest font-bold uppercase shadow-lg shadow-[#0ea5e9]/20 border-0 transition-transform hover:scale-105 mt-8">
            Contact Me
          </Button>
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

            <div className="grid lg:grid-cols-2 gap-12 text-left">
              <CloudArchitecture />
              <ThreatMap />
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
