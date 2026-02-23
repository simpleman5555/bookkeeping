import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Briefcase, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  User, 
  Clock, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Underline
} from 'lucide-react';

// Szolgáltatások listája az adatbázisból (a prompt alapján)
const services = [
  {
    title: "Vállalkozás Indítása",
    description: "Egyéni vállalkozás indítása, dokumentációk összeállítása és benyújtása.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Napi Ügyvitel & Könyvelés",
    description: "Aktív vállalkozás teljeskörű ügyvitele, bevallások leadása, folyamatos kapcsolattartás.",
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Adóbevallások & ÁFA",
    description: "SZJA, ÁFA, Éves összesítő, Iparűzési adó bevallások precíz elkészítése.",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Tanácsadás & Optimalizálás",
    description: "Adózási szaktanácsadás, hatékonyság javítása, kedvezőbb adózási lehetőségek figyelése.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Hatósági Képviselet",
    description: "NAV folyószámla egyeztetése, hatósági ellenőrzés esetén szakmai képviselet.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Adminisztráció & Egyéb",
    description: "Táppénzigénylés, szüneteltetés/újraaktiválás, folyamatos tájékoztatás a változásokról.",
    icon: <User className="w-6 h-6" />,
    color: "bg-teal-50 text-teal-600"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-slate-800 tracking-tight">
              Danyiné Bíró<span className="text-emerald-600"> Éva</span>
            </span>
            <span className="ml-2 text-xs font-medium text-slate-500 uppercase tracking-widest hidden sm:block">
              Mérlegképes Könyvelő
            </span>
            <span className="ml-2 text-xs font-mobile text-slate-500 uppercase tracking-widest hidden sm:block"> | +36-20/317-1747</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Rólam</a>
            <a href="#services" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Szolgáltatások</a>
            <a href="#contact" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 font-medium">
              Kapcsolatfelvétel
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-emerald-600 font-medium block py-2">Főoldal</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-emerald-600 font-medium block py-2">Rólam</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-emerald-600 font-medium block py-2">Szolgáltatások</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-emerald-600 font-bold block py-2">Kapcsolatfelvétel</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-6">
              Kizárólag Egyéni Vállalkozóknak
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Megbízható könyvelés, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                személyre szabva.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Több éves szakmai tapasztalattal vállalom egyéni vállalkozások teljeskörű ügyvitelét, az alapítástól az adóoptimalizálásig. Koncentráljon üzletére, a papírmunkát pedig bízza rám.
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">Már <strong>havi 10-15.000 Ft-tól</strong>!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                Időpontot kérek
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
                Szolgáltatások
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Placeholder image for a professional accountant */}
              <img 
                src="https://images.pexels.com/photos/6863175/pexels-photo-6863175.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professzionális Könyvelő" 
                className="object-cover h-[500px] w-full lg:w-[450px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <p className="text-white font-medium">"A pontosság és a bizalom a legfontosabb értékem."</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
  >
    <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
    <p className="text-slate-600 leading-relaxed">{service.description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Miben tudok segíteni?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Teljeskörű szolgáltatás egyéni vállalkozók számára. Legyen szó indításról vagy napi ügyvitelről, minden terhet leveszek a válláról.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} service={s} index={idx} />
          ))}
        </div>

        {/* Detailed List */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Részletes feladatlista</h3>
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
            {[
              "Magánszemélyek SZJA-bevallásának elkészítése",
              "Adózási szaktanácsadás & Optimalizálás",
              "Egyéni vállalkozás indítása & dokumentáció",
              "Aktív vállalkozás teljes ügyvitele",
              "ÁFA-bevallás & Éves összesítő elkészítése",
              "Iparűzési adó bevallás (IPA)",
              "Táppénzigénylés benyújtása",
              "NAV folyószámla folyamatos egyeztetése",
              "Szüneteltetés & Újraaktiválás ügyintézése",
              "Hatósági ellenőrzés esetén szakmai képviselet"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Készen áll a közös munkára?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Vegye fel velem a kapcsolatot még ma, és beszéljük át vállalkozása igényeit. Az első konzultáció során feltérképezzük a lehetőségeket. Várom érdeklődését <strong>országosan</strong>!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Telefonszám</p>
                  <p className="font-semibold text-lg">+36 - 20 / 317 - 1747</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email cím</p>
                  <p className="font-semibold text-lg">eva@hellovallalkozo.hu</p>
                </div>
              </div>

             
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Iroda</p>
                  <p className="font-semibold text-lg">5000 Szolnok, Szapáry út 19.</p>
                </div>
              </div>
            </div>
          </div>

          {/** Contact Form 
          <form className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Üzenet küldése</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Név</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-slate-900" placeholder="Az Ön neve" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email cím</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-slate-900" placeholder="email@pelda.hu" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Üzenet</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-slate-900" placeholder="Miben segíthetek?"></textarea>
              </div>
              <button type="button" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg">
                Üzenet elküldése
              </button>
            </div>
          </form>*/}

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.pexels.com/photos/7034807/pexels-photo-7034807.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professzionális Könyvelő" 
              className="object-cover h-[500px] w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
              <p className="text-white font-medium text-center">"Tudja biztonságban vállalkozása könyvelését!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <span className="text-2xl font-bold text-white tracking-tight">
          Danyiné Bíró<span className="text-emerald-600"> Éva</span>
        </span>
        <p className="mt-2 text-sm">Megbízható könyvelés egyéni vállalkozóknak.</p>
      </div>
      <div className="flex gap-6 text-sm nodisplay">
        <a href="#" className="hover:text-white transition-colors">Adatvédelmi tájékoztató</a>
        <a href="#" className="hover:text-white transition-colors">ÁSZF</a>
      </div>
      <p className="text-sm">© 2026 Minden jog fenntartva.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
