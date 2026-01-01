
import React, { useState, useEffect } from "react";

import ossecLogo from "./assets/logos/ossec.png";
import img1 from "./assets/gallery/edition.jpg";
import img2 from "./assets/gallery/jury.jpg";
import img3 from "./assets/gallery/win1.jpg";
import img4 from "./assets/gallery/win2.jpg";
import img11 from "./assets/gallery/0.jpg";
import img22 from "./assets/gallery/1.jpg";
import img33 from "./assets/gallery/2.jpg";
import img44 from "./assets/gallery/3.jpg";
import img55 from "./assets/gallery/4.jpg";

import hoodieImg from "./assets/hoodie/hoodie.jpg";



import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const SOCIALS = {
  instagram: "https://www.instagram.com/open.source.software.ensi.club/",
  facebook: "https://www.facebook.com/ossec.tn?locale=fr_FR",
  linkedin: "https://www.linkedin.com/company/ossec-ensi/",
};

export default function ossec() {
  const [formData, setFormData] = useState({
    teamName: "",
    competition: "",
    memberCount: 1,
    membres: [
      { fullName: "", phone: "", email: "", facebook: "", github: "", hackathonExp: "", school: "" },
      { fullName: "", phone: "", email: "", facebook: "", github: "", hackathonExp: "", school: "" },
      { fullName: "", phone: "", email: "", facebook: "", github: "", hackathonExp: "", school: "" },
      { fullName: "", phone: "", email: "", facebook: "", github: "", hackathonExp: "", school: "" },
    ],
  });

 const [showTuniHackGallery, setShowTuniHackGallery] = useState(false);
const [showInstallPartyGallery, setShowInstallPartyGallery] = useState(false);

  const [submitted, setSubmitted] = useState(false);
useEffect(() => {
  setFormData((prev) => {
    if (prev.competition === "pitchhack" && prev.memberCount > 3) {
      return { ...prev, memberCount: 3 };
    }

    if (prev.competition === "tunihack" && prev.memberCount > 4) {
      return { ...prev, memberCount: 4 };
    }

    return prev;
  });
}, [formData.competition]);

const ossecText =
  " est un club étudiant de l’ENSI qui promeut la culture open source à travers l’échange, l’entraide et l’organisation d’événements technologiques.";

const [displayedText, setDisplayedText] = useState("");
const [index, setIndex] = useState(0);

useEffect(() => {
  if (index < ossecText.length) {
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + ossecText[index]);
      setIndex(index + 1);
    }, 30); // vitesse de frappe

    return () => clearTimeout(timeout);
  }
}, [index]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMembreChange = (index, field, value) => {
    const newMembres = [...formData.membres];
    newMembres[index][field] = value;
    setFormData({ ...formData, membres: newMembres });
  };
const handleSubmit = async () => {
  // Vérification équipe
  if (!formData.teamName || !formData.competition) {
    alert("Veuillez remplir le nom de l'équipe et choisir une compétition");
    return;
  }

  // Vérification dynamique des membres
  for (let i = 0; i < formData.memberCount; i++) {
    const membre = formData.membres[i];

    if (!membre.fullName || !membre.phone || !membre.email) {
      alert(
        `Veuillez remplir toutes les informations obligatoires du membre ${i + 1}`
      );
      return;
    }
  }

  try {
    setSubmitted(true);

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxT3TCz_MgCBoMVzRSW1THaKb1GsnlBlYkmvSEh_pP-q89Fdder7yylWOnCjlxU_sbv/exec";

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert(
      "✅ Inscription enregistrée avec succès ! N'oubliez pas d'envoyer les CV à ossec@ensi-uma.tn"
    );

    setTimeout(() => setSubmitted(false), 2000);
  } catch (err) {
    console.error(err);
    alert(
      "❌ Erreur lors de l'envoi. Veuillez réessayer ou contacter ossec@ensi-uma.tn"
    );
    setSubmitted(false);
  }
};


  const input =
    "w-full px-4 py-2 bg-slate-950/50 border border-blue-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950">
      <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-blue-800">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

    {/* Logos */}
    <div className="flex items-center gap-4">
      <img src={ossecLogo} alt="OSSEC" className="w-16 h-16 object-contain" />
     
    </div>

    {/* Navigation */}
    <nav className="flex items-center gap-6 text-blue-200 font-medium">
      <a href="#events" className="hover:text-cyan-400 transition">
        Événements
      </a>
      <a href="#products" className="hover:text-cyan-400 transition">
        Produits
      </a>
      <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>
      <a
        href="#form"
        className="px-4 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white transition"
      >
        Formulaire
      </a>
    </nav>

  </div>
</header>



{/* OSSEC – Bloc de présentation */}
<div className="max-w-4xl mx-auto mt-12 mb-16 px-4">
  <div className="bg-slate-800/40 backdrop-blur-md border border-blue-800 rounded-2xl p-8 shadow-xl text-center">

    {/* Titre */}
    <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-4">
      OSSEC <span className="text-white">(Open Source Software ENSI Club)</span>
    </h2>

    {/* Description animée */}
    <p className="text-lg md:text-xl leading-relaxed font-mono">
      <span className="text-white">{displayedText}</span>
      <span className="animate-pulse text-cyan-400 ml-1">|</span>
    </p>

  </div>
</div>
{/* ===== EVENTS SECTION ===== */}
<div id="events" className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-extrabold text-cyan-400 text-center mb-12">
    Nos Événements
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

    {/* ===== INSTALL PARTY ===== */}
    <div className="bg-slate-800/40 backdrop-blur-md border border-blue-800 rounded-2xl p-8 text-center shadow-xl">
      <h3 className="text-3xl font-bold text-cyan-400 mb-2">
        Install Party
      </h3>

      <p className="text-blue-300 mb-4">
        Atelier d’installation Linux & outils open source
      </p>

      <div className="flex items-center justify-center gap-2 text-blue-200 mb-3">
        <Calendar className="w-5 h-5" />
        <span>Octobre 2025</span>
      </div>

      <div className="flex items-center justify-center gap-2 text-blue-300 mb-6">
        <MapPin className="w-5 h-5" />
        <span>ENSI</span>
      </div>

      <button
        onClick={() => setShowInstallPartyGallery(!showInstallPartyGallery)}
        className="bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto transition"
      >
        {showInstallPartyGallery ? <ChevronUp /> : <ChevronDown />}
        {showInstallPartyGallery ? "Masquer" : "Voir"} cette édition
      </button>

      {showInstallPartyGallery && (
        <div className="mt-6 flex gap-4 overflow-x-auto no-scrollbar">
          {[img11, img22, img33, img44, img55].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Install Party ${i + 1}`}
              className="h-40 w-64 object-cover rounded-lg border border-blue-800"
            />
          ))}
        </div>
      )}
    </div>

    {/* ===== TUNIHACK ===== */}
    <div className="bg-slate-800/40 backdrop-blur-md border border-blue-800 rounded-2xl p-8 text-center shadow-xl">
      <h3 className="text-3xl font-bold text-cyan-400 mb-2">
        TuniHack
      </h3>

      <p className="text-blue-300 mb-4">
        Hackathon national open source
      </p>

      <div className="flex items-center justify-center gap-2 text-blue-200 mb-3">
        <Calendar className="w-5 h-5" />
        <span>24–25 Janvier 2026</span>
      </div>

      <div className="flex items-center justify-center gap-2 text-blue-300 mb-6">
        <MapPin className="w-5 h-5" />
        <span>ENSI</span>
      </div>

      <button
        onClick={() => setShowTuniHackGallery(!showTuniHackGallery)}
        className="bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto transition"
      >
        {showTuniHackGallery ? <ChevronUp /> : <ChevronDown />}
        {showTuniHackGallery ? "Masquer" : "Voir"} l’édition précédente
      </button>

      {showTuniHackGallery && (
        <div className="mt-6">
          <iframe
            src="https://www.youtube.com/embed/2oKEhr4HhbM"
            title="TuniHack édition précédente"
            className="w-full h-48 rounded-lg border border-blue-800 mb-4"
            allowFullScreen
          />

          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {[img1, img2, img3, img4].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`TuniHack ${i + 1}`}
                className="h-40 w-64 object-cover rounded-lg border border-blue-800"
              />
            ))}
          </div>
        </div>
      )}
    </div>

  </div>
</div>

  
{/* Form Section */}
      <div id="form" className="max-w-5xl mx-auto px-4 py-12">
        <div  className="bg-slate-800/30 backdrop-blur-sm border border-blue-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-cyan-400 mb-2 text-center">Formulaire d'Inscription</h2>
          <p className="text-blue-300 text-center mb-6">TuniHack 11 - OSSEC</p>

          <div className="bg-slate-900/40 rounded-lg p-4 border border-blue-900 mb-8 text-center">
            <p className="text-blue-200">
              📧 Chaque équipe doit envoyer les CV par email à{" "}
              <a href="mailto:ossec@ensi-uma.tn" className="text-cyan-400 hover:underline font-semibold">
                ossec@ensi-uma.tn
              </a>
            </p>
          </div>

          <div className="space-y-8">
            {/* Team Information */}
            <div className="bg-slate-900/40 rounded-lg p-6 border border-blue-900">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Informations de l'Équipe</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-blue-300 mb-2">Nom de l'équipe *</label>
                  <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} className={input} placeholder="Nom de votre équipe" />
                </div>

                <div>
                  <label className="block text-blue-300 mb-2">Type de compétition *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-start p-4 bg-slate-950/50 border border-blue-800 rounded-lg cursor-pointer hover:bg-slate-900/50 transition-all">
                      <input
                        type="radio"
                        name="competition"
                        value="pitchhack"
                        checked={formData.competition === "pitchhack"}
                        onChange={handleChange}
                        className="mr-3 mt-1"
                      />
                      <div>
                        <div className="text-white font-semibold">Pitch Hack</div>
                        <div className="text-blue-400 text-sm">Présentez votre idée innovante</div>
                      </div>
                    </label>

                    <label className="flex items-start p-4 bg-slate-950/50 border border-blue-800 rounded-lg cursor-pointer hover:bg-slate-900/50 transition-all">
                      <input
                        type="radio"
                        name="competition"
                        value="tunihack"
                        checked={formData.competition === "tunihack"}
                        onChange={handleChange}
                        className="mr-3 mt-1"
                      />
                      <div>
                        <div className="text-white font-semibold">TuniHack</div>
                        <div className="text-blue-400 text-sm">Hackathon de 24h</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>


<div>
  <div className="mt-4 bg-slate-900/40 border border-blue-800 rounded-lg p-4 text-center">
  <p className="text-cyan-400 font-semibold">
     Frais d'inscription
  </p>
  <p className="text-blue-300 mt-1">
    Pitch Hack : <span className="font-semibold text-white">20 DT</span>
  </p>
  <p className="text-blue-300">
    TuniHack : <span className="font-semibold text-white">30 DT</span>
  </p>
  <p className="text-blue-400 text-sm mt-2">
    Paiement sur place le jour de l'événement
  </p>
</div>

  <label className="block text-blue-300 mb-2">
    Nombre de membres *
  </label>
<select
  value={formData.memberCount}
  onChange={(e) =>
    setFormData({ ...formData, memberCount: Number(e.target.value) })
  }
  className={input}
>
  {(formData.competition === "pitchhack"
    ? [1, 2, 3]
    : formData.competition === "tunihack"
    ? [1, 2, 3, 4]
    : [1]
  ).map((n) => (
    <option key={n} value={n}>
      {n} membre{n > 1 ? "s" : ""}
    </option>
  ))}
</select>
</div>

            {/* Team Members */}
            {Array.from({ length: formData.memberCount }).map((_, index) => (

              <div key={index} className="bg-slate-900/40 rounded-lg p-6 border border-blue-900">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {index === 0 ? "Premier membre" : index === 1 ? "Deuxième membre" : index === 2 ? "Troisième membre" : "Quatrième membre"}
                  {index === 0 && <span className="text-red-400"> *</span>}
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-blue-300 mb-2">Nom complet {index === 0 && "*"}</label>
                    <input
                      type="text"
                      value={formData.membres[index].fullName}
                      onChange={(e) => handleMembreChange(index, "fullName", e.target.value)}
                      className={input}
                      placeholder="Prénom et nom"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-blue-300 mb-2">Numéro de téléphone {index === 0 && "*"}</label>
                      <input
                        type="tel"
                        value={formData.membres[index].phone}
                        onChange={(e) => handleMembreChange(index, "phone", e.target.value)}
                        className={input}
                        placeholder="XX XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-300 mb-2">Email {index === 0 && "*"}</label>
                      <input
                        type="email"
                        value={formData.membres[index].email}
                        onChange={(e) => handleMembreChange(index, "email", e.target.value)}
                        className={input}
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-blue-300 mb-2">Lien Facebook (optionnel)</label>
                      <input
                        type="url"
                        value={formData.membres[index].facebook}
                        onChange={(e) => handleMembreChange(index, "facebook", e.target.value)}
                        className={input}
                        placeholder="https://facebook.com/..."
                      />
                    </div>

                    <div>
                      <label className="block text-blue-300 mb-2">Lien GitHub (optionnel)</label>
                      <input
                        type="url"
                        value={formData.membres[index].github}
                        onChange={(e) => handleMembreChange(index, "github", e.target.value)}
                        className={input}
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-blue-300 mb-2">Hackathon avant ? Si oui, mentionnez-le</label>
                    <textarea
                      value={formData.membres[index].hackathonExp}
                      onChange={(e) => handleMembreChange(index, "hackathonExp", e.target.value)}
                      rows={2}
                      className={input}
                      placeholder="Ex: TuniHack 2024, Hackathon XYZ..."
                    />
                  </div>

                  <div>
                    <label className="block text-blue-300 mb-2">École/Université</label>
                    <input
                      type="text"
                      value={formData.membres[index].school}
                      onChange={(e) => handleMembreChange(index, "school", e.target.value)}
                      className={input}
                      placeholder="Ex: ENSI..."
                    />
                  </div>
                </div>
              </div>
            ))}

<button
  onClick={handleSubmit}
  className="w-full bg-gradient-to-r from-cyan-700 to-blue-800 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
>
  Soumettre l'inscription
</button>

{submitted && (
  <div className="bg-green-900/20 border border-green-600 text-green-400 px-6 py-4 rounded-lg text-center mt-4">
    ✓ Inscription soumise avec succès !
  </div>
)}

        </div>
      </div>




{/* Hoodie Section */}
<div id="products" className="max-w-5xl mx-auto px-4 mt-16">
  <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-800 rounded-2xl p-8 shadow-2xl text-center">
    
    <h2 className="text-3xl font-bold text-cyan-400 mb-6">
      Hoodie TuniHack 11
    </h2>

    <img
      src={hoodieImg}
      alt="Hoodie TuniHack 11"
      className="mx-auto w-64 md:w-80 rounded-xl border border-blue-800 mb-6"
    />

    <p className="text-blue-200 mb-4">
      Hoodie officiel de la <span className="font-semibold text-cyan-400">11ème édition de TuniHack</span>.
    </p>

    <p className="text-xl text-white font-semibold mb-3">
      Prix : <span className="text-cyan-400">40 DT</span>
    </p>

    {/* Texte ajouté */}
    <p className="text-blue-300 text-sm">
      Si vous souhaitez l’acheter, veuillez nous contacter via nos réseaux sociaux.
    </p>

  </div>
</div>
<footer className="w-full bg-slate-900/70 backdrop-blur-md border-t border-blue-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">OSSEC</h3>
              <p className="text-blue-300 text-sm leading-relaxed">
                Open Source Software ENSI Club - Le club dédié à l'innovation technologique et au partage des connaissances.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Contact</h3>
              <a href="mailto:ossec@ensi-uma.tn" className="flex items-center gap-2 text-blue-300 hover:text-cyan-400 transition-colors text-sm">
                <Mail className="w-4 h-4" /> ossec@ensi-uma.tn
              </a>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Suivez-nous</h3>
              <div className="flex flex-wrap gap-3">
                <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-blue-800 hover:border-cyan-400 hover:bg-slate-700/50 text-blue-300 hover:text-cyan-400 transition-all text-sm">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-blue-800 hover:border-cyan-400 hover:bg-slate-700/50 text-blue-300 hover:text-cyan-400 transition-all text-sm">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
                <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-blue-800 hover:border-cyan-400 hover:bg-slate-700/50 text-blue-300 hover:text-cyan-400 transition-all text-sm">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800/50 pt-6">
            <p className="text-center text-blue-500 text-sm">
              © 2026 OSSEC - Open Source Software ENSI Club. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
    
            
  


  );
}




