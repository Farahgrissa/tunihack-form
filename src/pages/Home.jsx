import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

// Assets
import ossecLogo from "../assets/logos/ossec.png";
import img1 from "../assets/gallery/edition.jpg";
import img2 from "../assets/gallery/jury.jpg";
import img3 from "../assets/gallery/win1.jpg";
import img4 from "../assets/gallery/win2.jpg";
import img11 from "../assets/gallery/0.jpg";
import img22 from "../assets/gallery/1.jpg";
import img33 from "../assets/gallery/2.jpg";
import img44 from "../assets/gallery/3.jpg";
import img55 from "../assets/gallery/4.jpg";
import hoodieImg from "../assets/hoodie/hoodie.jpg";

// Icons
import { 
  Mail, MapPin, Linkedin, Facebook, Instagram, ChevronUp, ChevronDown,
  UserPlus, Mic, Cpu, Coffee, Music, Utensils, 
  Code, Gamepad2, Moon, Users, Lightbulb, Rocket, Award ,Trophy
} from 'lucide-react';

const schedule = [
  { day: "Day 1", time: "08:00", event: "Reception", icon: <UserPlus />, color: "border-cyan-500" },
  { day: "Day 1", time: "09:00", event: "Opening Ceremony", icon: <Mic />, color: "border-cyan-500" },
  { day: "Day 1", time: "10:00", event: "Workshop", icon: <Cpu />, color: "border-cyan-500" },
  { day: "Day 1", time: "12:00", event: "Lunch Break", icon: <Coffee />, color: "border-cyan-500" },
  { day: "Day 1", time: "13:00", event: "Workshop", icon: <Cpu />, color: "border-cyan-500" },
  { day: "Day 1", time: "14:30", event: "Music", icon: <Music />, color: "border-cyan-500" },
   { day: "Day 1", time: "15:30", event: "Workshop", icon: <Cpu />, color: "border-cyan-500" },
  { day: "Day 1", time: "17:00", event: "Coffee Break", icon: <Coffee />, color: "border-cyan-500" },
   { day: "Day 1", time: "17:30", event: "Workshop", icon: <Cpu />, color: "border-cyan-500" },
   { day: "Day 1", time: "18:30", event: "Activities", icon: <Gamepad2 />, color: "border-cyan-500" },
  { day: "Day 1", time: "20:00", event: "Dinner", icon: <Utensils />, color: "border-cyan-500" },
  { day: "Day 1", time: "21:00", event: "CP-Contest", icon: <Code />, color: "border-cyan-500" },
  { day: "Day 1", time: "22:00", event: "Chess Tournament", icon: <Trophy />, color: "border-amber-500" },
  { day: "Day 1", time: "23:30", event: "LOL Competition", icon: <Gamepad2 />, color: "border-cyan-500" },
  { day: "Day 1", time: "00:00", event: "Music & Chill", icon: <Moon />, color: "border-indigo-500" },
  { day: "Day 2", time: "07:30", event: "Breakfast", icon: <Coffee />, color: "border-cyan-500" },
  { day: "Day 2", time: "09:00", event: "Round Table", icon: <Users />, color: "border-cyan-500" },
  { day: "Day 2", time: "10:00", event: "PitchHack", icon: <Lightbulb />, color: "border-cyan-500" },
  { day: "Day 2", time: "12:00", event: "Lunch Break", icon: <Coffee />, color: "border-cyan-500" },
  { day: "Day 2", time: "13:00", event: "TuniHack Presentation", icon: <Rocket />, color: "border-cyan-500" },
  { day: "Day 2", time: "16:00", event: "Coffee Break", icon: <Coffee />, color: "border-cyan-500" }, 
  { day: "Day 2", time: "16:30", event: "Closing Ceremony", icon: <Award />, color: "border-cyan-500" },
];

const SOCIALS = {
  instagram: "https://www.instagram.com/open.source.software.ensi.club/",
  facebook: "https://www.facebook.com/ossec.tn?locale=fr_FR",
  linkedin: "https://www.linkedin.com/company/ossec-ensi/",
};
const FAQ_DATA = [
{
    question: "Quels sont les frais d'inscription ?",
    answer: "L'inscription est fixée à ( 30 DT * nbre de membres ) pour le TuniHack et ( 20 DT * nbre de membres ) pour le PitchHack."
  },
  {
    question: "Si je ne participe pas à la compétition, puis-je quand même rejoindre ?",
    answer: "Absolument ! L'événement propose de nombreuses activités en dehors du hackathon : des workshops techniques, ainsi que des compétitions internes de CTS, Competitive Programming (CP), Échecs et League of Legends (LoL)."
  },
  {
    question: "Les workshops sont-ils certifiés ?",
    answer: "Oui, les workshops sont certifiés par nos partenaires technologiques. Attention : il est impératif de s'inscrire à l'avance pour garantir votre place et l'obtention de votre certificat."
  },
  {
    question: "Faut-il être étudiant à l'ENSI ?",
    answer: "Pas du tout ! TuniHack est ouvert aux étudiants de toutes les universités passionnés par la technologie et l'Open Source."
  },
  {
    question: "Quel est le matériel requis ?",
    answer: "Votre ordinateur portable, un chargeur, et surtout votre motivation ! Nous fournissons la connexion internet, les repas et les boissons pendant toute la durée du hackathon."
  }
];
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-black text-center mb-12 uppercase italic">
        Questions <span className="text-cyan-500">Fréquentes</span>
      </h2>

      <div className="space-y-4">
        {FAQ_DATA.map((item, i) => (
          <div 
            key={i} 
            className="border border-white/5 bg-slate-900/40 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button 
              onClick={() => toggleFaq(i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-slate-200">{item.question}</span>
              <div className={`text-cyan-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                <ChevronDown size={20} />
              </div>
            </button>

            {/* Contenu avec animation de glissement */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}>
              <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="planning" className="py-24 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900 overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
      <div className="px-4 mb-12 text-center relative z-10">
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Tunihack 11.0 <span className="text-cyan-400">Timeline</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
      </div>
      <div className="relative flex overflow-x-auto pb-20 pt-10 no-scrollbar cursor-grab active:cursor-grabbing">
        <div className="flex items-start px-10 min-w-max">
          <div className="absolute top-[115px] left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
          {schedule.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center w-64 group">
              <div className="mb-6 px-3 py-1 rounded-full border border-cyan-500 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
                {item.day}
              </div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 ${item.color} shadow-xl`}>
                  <div className="text-white group-hover:text-cyan-400 transition-colors">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                   <span className="font-mono font-bold text-cyan-400 text-sm">{item.time}</span>
                </div>
              </div>
              <div className="mt-16 text-center px-4">
                <h3 className="text-white font-bold text-lg uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {item.event}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  const [showTuniHackGallery, setShowTuniHackGallery] = useState(false);
  const [showInstallPartyGallery, setShowInstallPartyGallery] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const ossecSentence = "est un club étudiant de l’ENSI , actif depuis 2012 , qui promeut la culture open source à travers l’échange, l’entraide et l’organisation d’événements technologiques.";
  const words = ossecSentence.split(" ");

  useEffect(() => {
    const targetDate = new Date("2026-01-24T09:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Animation Mot par Mot
  useEffect(() => {
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + (prev ? " " : "") + words[wordIndex]);
        setWordIndex(wordIndex + 1);
      }, 150); // Vitesse de l'apparition des mots
      return () => clearTimeout(timeout);
    }
  }, [wordIndex]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    // Si on a scrollé plus de 20 pixels, on active l'effet
    setIsScrolled(window.scrollY > 20);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      
{/* HEADER - Toujours compact, transparence dynamique au scroll */}
<header className={`sticky top-0 z-50 transition-all duration-500 py-2 ${
  isScrolled 
    ? "bg-slate-950/40 backdrop-blur-xl border-b border-white/10" 
    : "bg-slate-950 border-b border-transparent"
}`}>
  {/* Largeur fixée à max-w-5xl en permanence */}
  <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
    
    {/* Logo fixé à w-16 (taille intermédiaire parfaite) */}
    <img 
      src={ossecLogo} 
      alt="OSSEC" 
      className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]" 
    />
    
    <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
      <a href="#events" className="hover:text-cyan-400 transition">Événements</a>
      <a href="#planning" className="hover:text-cyan-400 transition">Planning</a>
      <a href="#products" className="hover:text-cyan-400 transition">Produits</a>
      
      {/* Bouton fixé en taille compacte */}
      <Link 
        to="/register" 
        className="ml-4 px-5 py-2 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-lg shadow-cyan-500/20 scale-90"
      >
       Participer
      </Link>
    </nav>
  </div>
</header>
{/* --- ZONE PRÉSENTATION ET COUNTDOWN ILLUMINÉE --- */}
<div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-900/15 to-slate-950">
  
  {/* Lueurs d'arrière-plan (similaires à la Timeline) */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full -z-0"></div>
  <div className="absolute top-80 -right-20 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -z-0"></div>

  <div className="relative z-10">
    {/* HERO SECTION */}
    <section className="max-w-4xl mx-auto pt-20 pb-16 px-4">
      <div className="text-center space-y-8">
        <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
          Bienvenue dans le futur
        </div>

        <h1 className="font-black tracking-tighter leading-none">
          <span className="block text-6xl md:text-8xl text-white mb-2">
            OSSEC
          </span>
          <span className="block text-xl md:text-3xl text-cyan-400 font-bold uppercase tracking-wide">
            Open Source Software ENSI Club
          </span>
        </h1>

        <div className="relative group mt-8">
          {/* Halo subtil derrière le texte */}
          <div className="absolute -inset-1 bg-cyan-500 rounded-3xl blur opacity-10"></div>
          <div className="relative bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
            <p className="text-xl md:text-2xl font-mono leading-relaxed text-slate-200">
              <span className="text-cyan-400 font-bold">OSSEC</span>{' '}
              <span className="inline">
                {displayedText}
                <span 
                  className={`inline-block w-3 h-6 bg-cyan-500 ml-1 align-middle shadow-[0_0_8px_#22d3ee] transition-all ${
                    displayedText.length === ossecSentence.length ? "opacity-100" : "animate-pulse"
                  }`}
                  style={{ verticalAlign: 'baseline', marginBottom: '-2px' }}
                ></span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* COUNTDOWN */}
    <section className="max-w-5xl mx-auto px-4 pb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[{ label: "Jours", value: timeLeft.days }, { label: "Heures", value: timeLeft.hours }, { label: "Minutes", value: timeLeft.minutes }, { label: "Secondes", value: timeLeft.seconds }].map((item, i) => (
          <div key={i} className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center shadow-2xl hover:border-cyan-500/30 transition-colors group">
            <div className="text-5xl font-black text-white font-mono group-hover:text-cyan-400 transition-colors">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 mt-2 font-bold italic">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
</div>
      <section id="events" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-center mb-16 uppercase italic">Nos <span className="text-cyan-500">évenements</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 transition-hover hover:border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Install Party</h3>
            <button onClick={() => setShowInstallPartyGallery(!showInstallPartyGallery)} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition">
               {showInstallPartyGallery ? <ChevronUp size={18}/> : <ChevronDown size={18}/>} Galerie Photos
            </button>
            {showInstallPartyGallery && (
              <div className="mt-6 flex gap-4 overflow-x-auto no-scrollbar pb-4">
                {[img11, img22, img33, img44, img55].map((img, i) => <img key={i} src={img} className="h-40 rounded-xl" alt="gallery"/>)}
              </div>
            )}
          </div>
          <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 transition-hover hover:border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">TuniHack</h3>
            <button onClick={() => setShowTuniHackGallery(!showTuniHackGallery)} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition">
               {showTuniHackGallery ? <ChevronUp size={18}/> : <ChevronDown size={18}/>} Édition Précédente
            </button>
            {showTuniHackGallery && (
              <div className="mt-6 space-y-4">
                <iframe src="https://www.youtube.com/embed/2oKEhr4HhbM" className="w-full h-56 rounded-2xl border border-white/5" />
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                  {[img1, img2, img3, img4].map((img, i) => <img key={i} src={img} className="h-40 rounded-xl" alt="gallery"/>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <RoadmapSection />

      {/* HOODIE SECTION */}
      <section id="products" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900/20 border border-white/5 rounded-[40px] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <h2 className="text-3xl font-black text-white mb-8 uppercase">Hoodie <span className="text-cyan-400">TuniHack 11</span></h2>
          <img src={hoodieImg} alt="Hoodie Officiel" className="mx-auto w-72 md:w-96 rounded-3xl shadow-2xl border border-white/10 mb-8 transform hover:scale-105 transition duration-500" />
          <p className="text-slate-400 max-w-md mx-auto italic">Le hoodie officiel collector de cette édition.</p>
        </div>
      </section>
      <FaqSection />

      {/* CTA */}
      <section className="py-20 text-center">
        <Link to="/register" className="inline-block bg-white text-black font-black px-12 py-5 rounded-full text-xl hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
          REJOINDRE L'AVENTURE
        </Link>
      </section>

      {/* FOOTER - Crédits Agrandis */}
      <footer id="contact" className="border-t border-white/5 bg-slate-950 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <img src={ossecLogo} className="w-16" alt="logo" />
            <p className="text-slate-500 text-sm leading-relaxed">Promouvoir la culture Open Source au sein de l'ENSI depuis plus de 10 ans.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3"><Mail size={16} className="text-cyan-500"/> ossec@ensi-uma.tn</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-cyan-500"/> ENSI, Manouba, Tunisie</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Réseaux</h4>
            <div className="flex gap-4">
              <a href={SOCIALS.linkedin} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition"><Linkedin size={18}/></a>
              <a href={SOCIALS.facebook} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition"><Facebook size={18}/></a>
              <a href={SOCIALS.instagram} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition"><Instagram size={18}/></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center space-y-4">
          <p className="text-[10px] font-black text-slate-600 tracking-[0.5em] uppercase">
            © 2026 OSSEC ENSI — Tous droits réservés
          </p>
       
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className={`fixed bottom-8 right-8 p-4 rounded-full bg-cyan-600 text-white shadow-2xl transition-all duration-500 ${showBackToTop ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <ChevronUp />
      </button>
    </div>
  );
}