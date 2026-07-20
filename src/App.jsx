import React, { useState } from 'react';
import profileimage from './assets/MMary.png';
import BigData from './assets/BigData.png';
import HealthApp from './assets/HealthApp.png';
import ProductAnalytics from './assets/ProductAnalytics.png';

// --- Utility Icons ---
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
);

const X = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

// --- Strategic Service Icons ---
const DiscoveryIcon = () => <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
const StrategyIcon = () => <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
const MetricsIcon = () => <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
const MentorshipIcon = () => <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 3h-6v6" /><path d="M16 3l5.5 5.5" /></svg>;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("https://formspree.io/f/xwvgvzbz", {
        method: "POST",
        body: new FormData(e.target),
        headers: { "Accept": "application/json" }
      });
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const services = [
    { Icon: DiscoveryIcon, title: "Product Discovery", desc: "I facilitate deep-dive research to uncover latent customer needs, ensuring high-impact validation before engineering begins." },
    { Icon: StrategyIcon, title: "Strategy & Dev", desc: "Translating business goals into a coherent vision, I oversee the end-to-end lifecycle to ensure high-quality execution." },
    { Icon: MetricsIcon, title: "Metrics & Growth", desc: "Building tracking frameworks that look beyond vanity metrics to identify real engagement loops and drive sustainable value." },
    { Icon: MentorshipIcon, title: "Product Mentorship", desc: "Guiding diverse professionals into mastering product strategy, user-centric development, and high-impact problem-solving." }
  ];

  const workCaseStudies = [
    { title: "Scaling Health App Access", image: HealthApp, content: "Optimized a digital health platform for low-connectivity environments to drive higher engagement. Through user-led research and the integration of a strategic USSD feature, I helped remove significant access barriers and aligned product performance with actual user requirements.", results: ["Successfully launched USSD feature", "10% increase in app content engagement", "Significant increase in total active users"] },
    { title: "Big Data Analysis Platform", image: BigData, content: "Spearheaded a Big Data analytics platform that transforms fragmented data streams into actionable intelligence. Key capabilities include user profiling, link analysis, and automated reporting, providing critical insights for high-stakes environments.", results: ["Delivered 3 analytics modules from research to launch", "Scaled our user base 5x from 4 to 20 clients", "Reduced analysis time by 50%"] },
    { title: "Product Analytics & Reportings", image: ProductAnalytics, content: "Standardized performance metrics via Looker Studio to improve organizational visibility. Developed a 'Beyond Bias' dashboard to track service equity, ensuring transparency for donors and streamlining future implementation planning and program expansion.", results: ["Standardized reporting frameworks across portfolios", "Enhanced donor and stakeholder transparency", "Reduced time spent on quality-of-service analysis"] },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-[#0f172a] font-sans antialiased overflow-x-hidden selection:bg-[#258c88] selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Nav Section */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-white">Miss Mbuvi</a>
          <div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-300">
            <a href="#about" className="hover:text-[#258c88]">About</a>
            <a href="#toolkit" className="hover:text-[#258c88]">How I Help</a>
            <a href="#work" className="hover:text-[#258c88]">Featured Projects</a>
            <a href="#contact" className="px-6 py-2.5 bg-[#258c88] text-white rounded-full hover:bg-[#1a6460]">Let's Connect</a>
          </div>
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {/* Fixed Small-Text Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#0f172a] p-6 flex flex-col gap-4 md:hidden animate-in fade-in duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg text-white font-medium border-b border-white/10 pb-3">About</a>
            <a href="#toolkit" onClick={() => setIsMenuOpen(false)} className="text-lg text-white font-medium border-b border-white/10 pb-3">How I Help</a>
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-lg text-white font-medium border-b border-white/10 pb-3">Featured Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-auto px-6 py-3 bg-[#258c88] text-center text-white rounded-xl text-lg font-bold">Let's Connect</a>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="pt-24 md:pt-32 pb-12 bg-[#0f172a] text-white">
        <div className="px-6 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center min-h-[60vh]">
          <div className="space-y-6 md:space-y-10 order-2 md:order-1 pt-6 md:pt-0">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-teal-400 font-medium text-sm tracking-wide">Hello! I'm miss Mbuvi</div>
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-serif font-bold leading-[0.9]">I turn product chaos into <span className="text-[#258c88]">measurable growth.</span></h1>
            <p className="text-lg md:text-2xl text-slate-300 font-light">As a Data-driven Product Leader, I investigate metrics to uncover the "why" behind the numbers, building products that truly resonate with users.</p>
          </div>
          <div className="relative order-1 md:order-2 flex flex-col items-center mt-12 md:mt-0">
            <div className="relative group w-72 md:w-96">
              <div className="absolute -inset-x-10 -top-10 h-140 bg-teal-500/20 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-2xl"></div>
              <div className="relative p-2 bg-slate-900 rounded-[2rem] shadow-2xl rotate-3">
                <div className="overflow-hidden rounded-[1.8rem] border-2 border-slate-700/50">
                  <img src={profileimage} alt="Miss Mbuvi" className="w-full aspect-[4/5] object-cover" />
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-8 z-10">
              <a href="https://linkedin.com/in/mary-mbuvi-596255126" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:border-[#258c88] hover:text-[#258c88] transition-all"><LinkedinIcon /></a>
              <a href="https://github.com/MaryMbuvi" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:border-[#258c88] hover:text-[#258c88] transition-all"><GithubIcon /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="toolkit" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <header className="mb-8"><h3 className="text-2xl md:text-5xl font-serif font-bold text-slate-900">How I Help</h3></header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-slate-100">
              <div className="text-[#258c88] mb-6"><item.Icon /></div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="overflow-hidden bg-[#258c88] py-4 whitespace-nowrap">
        <div className="animate-marquee flex gap-16 text-white text-sm font-medium">
            {["Kobo", "Typeform", "Figma", "Mural", "Lucidchart", "Jira", "ClickUp", "Trello", "Microsoft Clarity", "Google Analytics", "SQL", "Looker Studio", "Tableau", "Mixed Panel", "Confluence", "Notion", "AWS", "Git", "GitHub", "Doppler", "MongoDB"].map((t, i) => (
                <span key={i} className="hover:text-slate-900 cursor-pointer">{t}</span>
            ))}
             {["Kobo", "Typeform", "Figma", "Mural", "Lucidchart", "Jira", "ClickUp", "Trello", "Microsoft Clarity", "Google Analytics", "SQL", "Looker Studio", "Tableau", "Mixed Panel", "Confluence", "Notion", "AWS", "Git", "GitHub", "Doppler", "MongoDB"].map((t, i) => (
                <span key={i + 100} className="hover:text-slate-900 cursor-pointer">{t}</span>
            ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <section id="work" className="py-12 bg-slate-100">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Featured Projects</h3>
          
          {/* Mobile Swipeable Carousel */}
          <div className="md:hidden">
            <p className="text-slate-500 italic mb-6">Swipe to see more →</p>
            <div 
                onScroll={(e) => {
                  const container = e.currentTarget;
                  const index = Math.round(container.scrollLeft / container.offsetWidth);
                  setCurrentIndex(index);
                }}
                className="hide-scrollbar flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory touch-pan-x touch-pan-y"
            >
                {workCaseStudies.map((work, idx) => (
                <div key={idx} className="snap-center w-[85vw] flex-shrink-0 bg-white p-6 rounded-[2rem] shadow-lg">
                    <img src={work.image} alt={work.title} className="w-full h-40 object-cover rounded-2xl mb-6 shadow-inner" />
                    <h4 className="text-xl font-bold font-serif text-[#258c88] mb-2">{work.title}</h4>
                    <p className="text-base text-slate-700 mb-4">{work.content}</p>
                    <div className="grid grid-cols-1 gap-2">
                        {work.results.map((res, i) => (
                            <div key={i} className="flex items-center gap-2 p-2 bg-teal-50/50 border border-teal-100 rounded-lg">
                                <span className="text-[#258c88] font-bold text-xs">↗</span>
                                <span className="text-slate-800 text-[13px] font-medium">{res}</span>
                            </div>
                        ))}
                    </div>
                </div>
                ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mb-8">
                {workCaseStudies.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[#258c88]' : 'w-2 bg-slate-300'}`}
                />
                ))}
            </div>
          </div>

          {/* Desktop Top-Down List */}
          <div className="hidden md:flex flex-col gap-12">
            {workCaseStudies.map((work, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm flex gap-8">
                <div className="w-1/3 h-48 bg-slate-100 rounded-2xl flex-shrink-0">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-2/3">
                    <h4 className="text-3xl font-bold font-serif text-[#258c88] mb-4">{work.title}</h4>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">{work.content}</p>
                    <div className="grid grid-cols-3 gap-3">
                        {work.results.map((res, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-teal-50/50 border border-teal-100 rounded-xl">
                                <span className="text-[#258c88] font-bold">↗</span>
                                <span className="text-slate-800 text-sm font-medium">{res}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="py-16 md:py-24 px-4 bg-[#0f172a] text-white rounded-t-[2.5rem] md:rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-5xl font-serif font-bold mb-4 italic">Ready for your next challenge?</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10">
            <div className="grid sm:grid-cols-2 gap-6">
              <input required name="name" type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#258c88]" />
              <input required name="email" type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#258c88]" />
            </div>
            <select required name="service" className="w-full bg-slate-800 border border-white/10 p-4 rounded-xl outline-none text-white focus:border-[#258c88] cursor-pointer">
                <option value="">Select a focus area...</option>
                <option value="Product Discovery & Validation">Product Discovery & Validation</option>
                <option value="Strategy & Development">Strategy & Development</option>
                <option value="Metrics & Growth">Metrics & Growth</option>
                <option value="Mentorship & Coaching">Mentorship & Coaching</option>
            </select>
            <textarea required name="message" rows={4} placeholder="Message" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#258c88]"></textarea>
            <button disabled={submitting} className="w-full py-4 bg-[#258c88] text-white rounded-xl font-bold hover:bg-[#1a6460] transition-all">
              {submitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl text-center font-bold">
              Thanks for reaching out! I'll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-center font-bold">
              Oops! Something went wrong. Please check your internet connection and try again.
            </div>
          )}
        </div>

        <footer className="mt-16 text-center border-t border-white/10 pt-8 text-slate-500 text-sm">
          © 2026 Miss Mbuvi. Built for outcomes.
        </footer>
      </section>

    </div>
  );
}