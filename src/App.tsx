import { useState, useEffect } from 'react';
import { menuData } from './data';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Decorative Botanical Component for reuse
const BotanicalBranch = ({ className, color = "#4a5f3e", fruitColor = "#8b2d2d" }: { className?: string, color?: string, fruitColor?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="currentColor">
    <path d="M40,160 C60,140 100,120 160,100 M160,100 C140,110 120,130 110,160 M160,100 C150,80 130,60 100,40 M100,40 C110,50 120,70 110,100" stroke={color} strokeWidth="2" fill="none" />
    <path d="M160,100 Q180,80 170,60 Q160,40 140,50 Q120,60 160,100" fill={color} />
    <path d="M100,40 Q80,20 60,30 Q40,40 50,60 Q60,80 100,40" fill={color} />
    <path d="M110,160 Q90,180 70,170 Q50,160 60,140 Q70,120 110,160" fill={color} />
    <circle cx="160" cy="100" r="10" fill={fruitColor} />
    <circle cx="100" cy="40" r="6" fill={fruitColor} opacity="0.6" />
  </svg>
);

const SingleLeaf = ({ className, color = "#4a5f3e" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color}>
    <path d="M50,10 Q70,40 50,90 Q30,40 50,10" />
  </svg>
);

const InstagramIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MapPinIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#2a3623] pt-6 pb-24 relative overflow-x-hidden flex flex-col items-center" dir="rtl">

      {/* --- MAXIMUM BOTANICAL ELEMENTS --- */}
      {/* Super Deep Layer (Background) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.08] z-0">
        <BotanicalBranch className="absolute top-[5%] left-[5%] w-96 h-96 -rotate-45" />
        <BotanicalBranch className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rotate-12" />
        <BotanicalBranch className="absolute bottom-[15%] left-[-10%] w-[400px] h-[400px] -rotate-90" />
        <BotanicalBranch className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] rotate-180" />
        <BotanicalBranch className="absolute top-1/2 left-[-100px] w-80 h-80 rotate-45" />
        <BotanicalBranch className="absolute top-1/2 right-[-100px] w-80 h-80 -rotate-45" />
        <BotanicalBranch className="absolute top-[20%] left-1/2 -translate-x-1/2 w-64 h-64 opacity-5" />
      </div>

      {/* Scattered Leaves Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] z-0">
        <SingleLeaf className="absolute top-[20%] left-[15%] w-12 h-12 rotate-12" />
        <SingleLeaf className="absolute top-[40%] right-[25%] w-10 h-10 -rotate-45" />
        <SingleLeaf className="absolute bottom-[30%] left-[20%] w-14 h-14 rotate-90" />
        <SingleLeaf className="absolute bottom-[10%] right-[30%] w-8 h-8 rotate-180" />
        <SingleLeaf className="absolute top-[60%] left-[5%] w-16 h-16 -rotate-12" />
        <SingleLeaf className="absolute top-[80%] right-[5%] w-12 h-12 rotate-45" />
      </div>

      {/* Foreground Corners (On top of everything) */}
      <div className="fixed inset-0 pointer-events-none opacity-50 z-0">
        <BotanicalBranch className="absolute top-[-50px] left-[-50px] w-[350px] h-[350px] -rotate-15" />
        <BotanicalBranch className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rotate-[100deg]" />
        <BotanicalBranch className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] rotate-[190deg]" />
        <BotanicalBranch className="absolute bottom-[-60px] left-[-60px] w-[380px] h-[380px] -rotate-[110deg]" />
      </div>

      {/* Middle Floating Branches (Side borders) */}
      <div className="fixed inset-y-0 w-full pointer-events-none opacity-20 z-0">
        <BotanicalBranch className="absolute top-1/4 left-[-80px] w-64 h-64 -rotate-12" />
        <BotanicalBranch className="absolute top-2/4 right-[-80px] w-64 h-64 rotate-12" />
        <BotanicalBranch className="absolute top-3/4 left-[-80px] w-64 h-64 rotate-45" />
      </div>

      {/* Hero Branding Section */}
      <header className="relative w-full py-8 text-center text-white mb-2 z-20 flex flex-col items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
          {/* Refined Classical Logo Container */}
          <div className="w-32 h-32 bg-[#E9DBC5] rounded-full p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-white/20 flex items-center justify-center mb-10 relative">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-[85%] h-[85%] object-contain drop-shadow-lg" />
          </div>

          <h1 className="text-4xl md:text-6xl font-arabic font-bold text-[#E9DBC5] mb-2 drop-shadow-sm">غصن الرمان</h1>
          <p className="text-[14px] md:text-[16px] font-sans font-black tracking-[0.5em] text-[#E9DBC5] opacity-80 uppercase">Ghusn Al-Rumaan</p>
        </motion.div>
      </header>

      {/* Ornamental Divider - Filling the 'Empty' space */}
      <div className="relative z-20 w-full max-w-lg mb-12 flex items-center justify-center px-6 opacity-60">
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/40"></div>
        <div className="mx-4 flex items-center space-x-3 space-x-reverse">
          <BotanicalBranch className="w-8 h-8 text-white rotate-12" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          <BotanicalBranch className="w-8 h-8 text-white -rotate-12 scale-x-[-1]" />
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/40"></div>
      </div>

      {/* Main Parchment Container - Now matching logo "shape" and theme */}
      <div className="relative z-20 w-[96%] md:w-[94%] max-w-5xl bg-[#E9DBC5] rounded-[40px] md:rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] p-3 md:p-14 min-h-screen overflow-hidden border border-white/30">

        {/* Fabric/Burlap Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}></div>

        {/* Densely Populated Botanical Watermarks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
          {/* Top Section */}
          <BotanicalBranch className="absolute top-[-5%] right-[-10%] w-[55%] h-auto rotate-[160deg] grayscale" />
          <BotanicalBranch className="absolute top-[5%] left-[-15%] w-[50%] h-auto rotate-[-30deg] grayscale scale-x-[-1]" />
          
          {/* Middle Section */}
          <BotanicalBranch className="absolute top-[25%] right-[-15%] w-[45%] h-auto rotate-[45deg] grayscale" />
          <BotanicalBranch className="absolute top-[35%] left-[-10%] w-[60%] h-auto rotate-[190deg] grayscale scale-x-[-1]" />
          <BotanicalBranch className="absolute top-[55%] right-[-5%] w-[50%] h-auto rotate-[-15deg] grayscale" />
          
          {/* Bottom Section */}
          <BotanicalBranch className="absolute bottom-[20%] left-[-20%] w-[65%] h-auto rotate-[10deg] grayscale" />
          <BotanicalBranch className="absolute bottom-[10%] right-[-15%] w-[55%] h-auto rotate-[220deg] grayscale scale-x-[-1]" />
          <BotanicalBranch className="absolute bottom-[-10%] left-[10%] w-[50%] h-auto rotate-[75deg] grayscale" />
          
          {/* Extra Fillers */}
          <BotanicalBranch className="absolute top-[75%] left-[-5%] w-[40%] h-auto rotate-[120deg] grayscale opacity-60" />
          <BotanicalBranch className="absolute top-[15%] left-[40%] w-[35%] h-auto rotate-[10deg] grayscale opacity-40" />
          
          {/* Dense Small Fillers */}
          <BotanicalBranch className="absolute top-[10%] right-[30%] w-[20%] h-auto rotate-[80deg] grayscale opacity-70" />
          <BotanicalBranch className="absolute top-[30%] left-[20%] w-[15%] h-auto rotate-[15deg] grayscale opacity-50" />
          <BotanicalBranch className="absolute top-[50%] right-[40%] w-[25%] h-auto rotate-[200deg] grayscale opacity-80" />
          <BotanicalBranch className="absolute top-[70%] left-[30%] w-[18%] h-auto rotate-[110deg] grayscale opacity-60" />
          <BotanicalBranch className="absolute bottom-[25%] right-[25%] w-[22%] h-auto rotate-[310deg] grayscale opacity-40" />
          <BotanicalBranch className="absolute bottom-[5%] left-[45%] w-[15%] h-auto rotate-[45deg] grayscale opacity-90" />
        </div>



        {/* Menu Sections */}
        <main className="space-y-16 md:space-y-32 relative z-1">
          {menuData.map((category) => (
            <section key={category.id} id={`section-${category.id}`} className="scroll-mt-12">
              {/* Category Header - Literally Copying the Design */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="border-[1.5px] border-[#8b1e28] rounded-lg p-6 relative bg-transparent flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-arabic font-bold text-[#8b1e28] mb-1">
                      {category.titleAr}
                    </h2>
                    <p className="text-[12px] font-sans font-black tracking-[0.3em] uppercase text-[#8b1e28] opacity-80">
                      {category.titleEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid of Sections */}
              <div className="grid grid-cols-1 gap-y-16">
                {category.subCategories.map((sub, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Dark Pill Header */}
                    <div className="bg-[#1c2215] text-[#E9DBC5] px-10 md:px-16 py-2 md:py-3 rounded-full mb-8 md:mb-10 shadow-lg border border-white/5">
                      <h3 className="text-xl md:text-3xl font-arabic font-bold">{sub.titleAr}</h3>
                    </div>

                    <div className="w-full max-w-2xl space-y-6 md:space-y-10 px-4">
                      {sub.items.map((item) => (
                        <div key={item.id} className="flex flex-col group">
                          <div className="flex items-center justify-between">
                            {/* Name on the Right in RTL (first child) */}
                            <div className="text-right">
                              <h4 className="text-base md:text-[22px] font-arabic font-bold text-[#1c2215] leading-none mb-1">
                                {item.nameAr}
                              </h4>
                            </div>

                            {/* Price on the Left in RTL (last child) */}
                            <div className="text-lg md:text-2xl font-bold text-[#1c2215] font-sans">
                              {item.price}
                            </div>
                          </div>
                          
                          {/* Description below Name (Right aligned) */}
                          {item.description && (
                            <div className="text-right mt-1 opacity-70">
                              <p className="text-[11px] md:text-[12px] text-black font-arabic italic leading-tight">
                                ({item.description})
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Background Illustrations inside Parchment */}
        <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none grayscale">
          <BotanicalBranch className="w-64 h-64 -rotate-12" />
        </div>
      </div>

      {/* Floating Action Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 left-8 w-14 h-14 bg-[#1c2215] text-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center justify-center z-50 border border-white/20"
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center py-16 px-6 text-[#E9DBC5] z-20">
        <div className="flex flex-col items-center gap-6 mb-10 w-full max-w-md">
          {/* Social & Contact */}
          <a href="https://www.instagram.com/gusn_alrumaan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100">
            <InstagramIcon size={20} />
            <span className="font-sans text-sm tracking-widest" dir="ltr">@gusn_alrumaan</span>
          </a>
          
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fmaps.app.goo.gl%2F5JrXC8feKzdf83fE6%3Fg_st%3Dcom.google.maps.preview.copy%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDUc4W36nNUdUehQxClohBKpDkyrhSdZwHRD1XF8xKnLRktdGtCfzs09yReg_aem_kRz9gGQwkFRoeyBbygnj-A&e=AT7mMkykp1uryPOaWI6KyUh151sSlrHMigMAz6Ls0V5D556AiMQQUWQ8MLOQFxFSkZt9-RRdGz0J6d5W_gV6QpY986OfPzQExVJ7-0M4VgtV1FBxklIGMpmm_A" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors text-center opacity-80 hover:opacity-100">
            <MapPinIcon size={20} className="flex-shrink-0" />
            <span className="font-arabic text-sm">الموقع على الخريطة</span>
          </a>

          <div className="flex flex-col items-center gap-2 mt-4 opacity-80">
            <div className="flex items-center gap-3 mb-1">
              <PhoneIcon size={18} />
              <span className="font-arabic text-sm">للحجز والاستفسار:</span>
            </div>
            <a href="tel:07739000707" className="font-sans text-sm tracking-widest hover:text-white transition-colors" dir="ltr">0773 900 0707</a>
            <a href="tel:07739000120" className="font-sans text-sm tracking-widest hover:text-white transition-colors" dir="ltr">0773 900 0120</a>
            <a href="tel:07739000140" className="font-sans text-sm tracking-widest hover:text-white transition-colors" dir="ltr">0773 900 0140</a>
          </div>
        </div>

        <div className="w-24 h-[1px] bg-[#E9DBC5]/20 mb-8"></div>

        <p className="font-arabic font-bold text-2xl tracking-[0.2em]">غصن الرمان</p>
        <p className="text-[12px] opacity-40 uppercase tracking-[0.8em] mt-2">Ghusn Al-Rumaan</p>
      </footer>
    </div>
  );
}

export default App;
