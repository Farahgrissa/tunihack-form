import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertCircle, CreditCard } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Style d'input réutilisable
  const inputStyle = "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600";

  const [formData, setFormData] = useState({
    teamName: "",
    competition: "pitchhack",
    memberCount: 1,
    membres: Array(4).fill().map(() => ({
      fullName: "", phone: "", email: "", facebook: "", github: "", hackathonExp: "", school: ""
    })),
  });

  // Gestion automatique des limites de membres
  useEffect(() => {
    if (formData.competition === "pitchhack" && formData.memberCount > 2) {
      setFormData(prev => ({ ...prev, memberCount: 1 }));
    } else if (formData.competition === "tunihack" && formData.memberCount < 3) {
      setFormData(prev => ({ ...prev, memberCount: 3 }));
    }
  }, [formData.competition]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMembreChange = (index, field, value) => {
    const newMembres = [...formData.membres];
    newMembres[index] = { ...newMembres[index], [field]: value };
    setFormData(prev => ({ ...prev, membres: newMembres }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxT3TCz_MgCBoMVzRSW1THaKb1GsnlBlYkmvSEh_pP-q89Fdder7yylWOnCjlxU_sbv/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setTimeout(() => navigate("/"), 4000);
    } catch (err) {
      alert("Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-gradient-to-b from-slate-950 via-blue-900/10 to-slate-950 text-white py-12 px-4 selection:bg-cyan-500/30">
      
      {/* Bouton Retour */}
      <div className="max-w-4xl mx-auto mb-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="font-bold text-sm uppercase tracking-widest">Retour au site</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
          
          {/* Décoration de fond */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            <header className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-3 uppercase italic tracking-tighter">
                Inscription <span className="text-cyan-500">TuniHack 11</span>
              </h2>
              <div className="flex items-center justify-center gap-3 text-slate-400">
                <div className="h-px w-8 bg-white/10"></div>
                <p className="text-sm font-medium uppercase tracking-[0.3em]">Join the OSSEC Squad</p>
                <div className="h-px w-8 bg-white/10"></div>
              </div>
            </header>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* SECTION : ÉQUIPE */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 size={20} className="text-cyan-500" />
                  <h3 className="text-lg font-bold uppercase tracking-wider">L'Équipe</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Nom de l'équipe *</label>
                    <input required type="text" name="teamName" value={formData.teamName} onChange={handleChange} className={inputStyle} placeholder="Ex: CyberTitans" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Membres *</label>
                    <select value={formData.memberCount} onChange={(e) => setFormData({ ...formData, memberCount: Number(e.target.value) })} className={inputStyle}>
                      {(formData.competition === "pitchhack" ? [1, 2] : [3, 4]).map((n) => (
                        <option key={n} value={n} className="bg-slate-900">{n} Personne{n > 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`flex items-start p-5 rounded-2xl border transition-all cursor-pointer ${formData.competition === "pitchhack" ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]" : "bg-slate-950/50 border-white/5 hover:border-white/20"}`}>
                    <input type="radio" name="competition" value="pitchhack" checked={formData.competition === "pitchhack"} onChange={handleChange} className="mt-1 mr-4 accent-cyan-500" />
                    <div>
                      <div className="text-white font-bold uppercase text-sm">PitchHack</div>
                      <div className="text-slate-500 text-xs mt-1 italic font-medium">Idée & Innovation</div>
                    </div>
                  </label>
                  <label className={`flex items-start p-5 rounded-2xl border transition-all cursor-pointer ${formData.competition === "tunihack" ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]" : "bg-slate-950/50 border-white/5 hover:border-white/20"}`}>
                    <input type="radio" name="competition" value="tunihack" checked={formData.competition === "tunihack"} onChange={handleChange} className="mt-1 mr-4 accent-cyan-500" />
                    <div>
                      <div className="text-white font-bold uppercase text-sm">TuniHack</div>
                      <div className="text-slate-500 text-xs mt-1 italic font-medium">Hackathon 24h</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* TICKET DE PAIEMENT DYNAMIQUE */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
                <div className="relative bg-slate-950 border border-white/10 rounded-[2rem] p-8 overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mb-2">Total Inscription</p>
                      <div className="flex items-baseline gap-2 justify-center md:justify-start">
                        <span className="text-6xl font-black text-white tracking-tighter">
                          {formData.competition === "pitchhack" ? "20" : "30"}
                        </span>
                        <span className="text-2xl font-black text-cyan-500">DT</span>
                      </div>
                      <p className="text-slate-500 text-[10px] mt-2 font-bold uppercase tracking-widest italic">Paiement unique par équipe</p>
                    </div>

                    <div className="hidden md:block w-px h-20 bg-white/10"></div>

                    <div className="text-center md:text-left flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-3">
                        <CreditCard size={12} className="text-cyan-400" />
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">D17 Transfert</span>
                      </div>
<p className="text-[6.5vw] xs:text-2xl md:text-4xl font-mono font-black text-white whitespace-nowrap tracking-tight md:tracking-[0.2em]">
  26&nbsp;634&nbsp;066
</p>                <p className="text-xs text-slate-400 font-medium">Destinataire : OSSEC Finance</p>
                    </div>

                  
                  </div>
{/* BLOC D'INSTRUCTION AGRANDI */}
<div className="mt-8 pt-6 border-t border-white/10">
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
    {/* Icône plus grande */}
    <AlertCircle size={28} className="text-red-500 shrink-0" />
    
    <div className="text-center md:text-left">
      <p className="text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-1">
        Action Requise (Validation)
      </p>
      <p className="text-sm md:text-base text-slate-200 font-medium">
        Envoyez la capture D17 + CVs à :{' '}
        <a 
          href="mailto:ossec@ensi-uma.tn" 
          className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors underline decoration-cyan-500/30 underline-offset-4"
        >
          ossec@ensi-uma.tn
        </a>
      </p>
    </div>
  </div>
</div>
                </div>
              </div>

              {/* SECTION : MEMBRES */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-500" />
                  <h3 className="text-lg font-bold uppercase tracking-wider">Composition de l'équipe</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {Array.from({ length: formData.memberCount }).map((_, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-cyan-400 font-black text-xl shadow-inner">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="text-white font-black uppercase tracking-tight">
                              {index === 0 ? "Chef d'équipe" : `Co-équipier #${index + 1}`}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Informations personnelles</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input required placeholder="Nom complet *" className={inputStyle} value={formData.membres[index].fullName} onChange={(e) => handleMembreChange(index, "fullName", e.target.value)} />
                          <input required type="email" placeholder="Email personnel *" className={inputStyle} value={formData.membres[index].email} onChange={(e) => handleMembreChange(index, "email", e.target.value)} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input required type="tel" placeholder="Téléphone *" className={inputStyle} value={formData.membres[index].phone} onChange={(e) => handleMembreChange(index, "phone", e.target.value)} />
                          <input placeholder="Université / École" className={inputStyle} value={formData.membres[index].school} onChange={(e) => handleMembreChange(index, "school", e.target.value)} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input placeholder="Lien Facebook (URL)" className={inputStyle} value={formData.membres[index].facebook} onChange={(e) => handleMembreChange(index, "facebook", e.target.value)} />
                          <input placeholder="Lien GitHub / Portfolio" className={inputStyle} value={formData.membres[index].github} onChange={(e) => handleMembreChange(index, "github", e.target.value)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOUTON SOUMISSION */}
              <div className="pt-8">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full relative group overflow-hidden bg-white text-slate-950 font-black py-5 rounded-2xl transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-lg">
                    {loading ? "Traitement en cours..." : "Valider l'inscription"}
                  </span>
                </button>

                {submitted && (
                  <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/50 text-green-400 text-center font-bold animate-bounce">
                    🚀 Inscription enregistrée ! Redirection...
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}