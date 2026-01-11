import React from 'react';
import { Check, X, ExternalLink, Zap, Shield, Info } from 'lucide-react';

function BrokerCard({ data }) {
  const { 
    name, 
    logo, 
    type, 
    badge, 
    badgeColor, 
    charges, 
    pros, 
    cons, 
    recommendation, 
    link 
  } = data;

  // Extract color theme from badgeColor for hover effects (e.g., "blue", "green")
  const themeColor = badgeColor.split('-')[1] || 'blue';

  return (
    // 🌙 FIX 1: Main Container Background & Border (Dark Mode Support)
    <div className={`group relative bg-white dark:bg-gray-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-gray-800 overflow-hidden transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-${themeColor}-100/50 dark:hover:shadow-${themeColor}-900/20 hover:border-${themeColor}-200 dark:hover:border-${themeColor}-800`}>
      
      {/* =======================
          1. HEADER (Premium & Spacious)
      ======================= */}
      {/* 🌙 FIX 2: Header Gradient & Border */}
      <div className="relative p-8 pt-10 border-b border-slate-100 dark:border-gray-800 bg-gradient-to-b from-slate-50/80 to-white dark:from-gray-800/80 dark:to-gray-900 overflow-hidden">
        
        {/* Subtle Background Blob - Adapted for Dark Mode */}
        <div className={`absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-${themeColor}-50 dark:bg-${themeColor}-900/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}></div>

        {/* Badge Pill */}
        <div className="relative z-10 mb-8">
          <span className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest shadow-sm border border-white/50 dark:border-black/50 backdrop-blur-md ${badgeColor}`}>
            {badge}
          </span>
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* 🖼️ MEGA LOGO BOX - Dark Background */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-gray-700 p-4 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500 relative">
             {/* Image with Fallback */}
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="w-full h-full object-contain drop-shadow-sm"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=128&font-size=0.5`;
              }}
            />
          </div>
          
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {name}
            </h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 font-bold tracking-wide uppercase">{type}</p>
          </div>
        </div>
      </div>

      {/* =======================
          2. FEES GRID (High Contrast)
      ======================= */}
      {/* 🌙 FIX 3: Fees Grid Background */}
      <div className="p-8 bg-slate-50/30 dark:bg-gray-800/30 border-b border-slate-100 dark:border-gray-800 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
          
          {/* Account Opening */}
          <div>
            <p className="text-slate-400 dark:text-gray-500 text-[10px] font-extrabold uppercase tracking-widest mb-2">
              Account Open
            </p>
            <p className="text-xl font-black text-slate-900 dark:text-gray-100 tracking-tight">{charges.accountOpening}</p>
          </div>

          {/* AMC */}
          <div>
            <p className="text-slate-400 dark:text-gray-500 text-[10px] font-extrabold uppercase tracking-widest mb-2">
              AMC (Yearly)
            </p>
            <p className="text-xl font-black text-slate-900 dark:text-gray-100 tracking-tight">{charges.maintenance}</p>
          </div>

          {/* Delivery Charges */}
          <div>
            <p className="text-slate-400 dark:text-gray-500 text-[10px] font-extrabold uppercase tracking-widest mb-2">
              Delivery
            </p>
            <p className={`text-xl font-black tracking-tight ${charges.delivery.includes('0') || charges.delivery.includes('Free') ? 'text-green-600 dark:text-green-400' : 'text-slate-900 dark:text-gray-100'}`}>
              {charges.delivery}
            </p>
          </div>

          {/* Intraday Charges */}
          <div>
            <p className="text-slate-400 dark:text-gray-500 text-[10px] font-extrabold uppercase tracking-widest mb-2">
              Intraday
            </p>
            <p className="text-xl font-black text-slate-900 dark:text-gray-100 tracking-tight">{charges.intraday}</p>
          </div>

        </div>
      </div>

      {/* =======================
          3. PROS & CONS (Stylish Lists)
      ======================= */}
      <div className="p-8 flex-1 space-y-8">
        
        {/* Pros */}
        <div>
          <h4 className="text-xs font-bold text-green-800 dark:text-green-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-lg"><Zap className="w-3.5 h-3.5 fill-green-600 dark:fill-green-400 text-green-600 dark:text-green-400" /></span>
            The Good Stuff
          </h4>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3 text-sm font-semibold text-slate-700 dark:text-gray-300 leading-relaxed">
                <Check className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5 drop-shadow-sm" strokeWidth={3} />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <h4 className="text-xs font-bold text-red-800 dark:text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
             <span className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded-lg"><Shield className="w-3.5 h-3.5 fill-red-600 dark:fill-red-400 text-red-600 dark:text-red-400" /></span>
            The Bad Stuff
          </h4>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-3 text-sm font-semibold text-slate-700 dark:text-gray-300 leading-relaxed">
                <X className="w-5 h-5 text-red-400 dark:text-red-400 flex-shrink-0 mt-0.5 drop-shadow-sm" strokeWidth={3} />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* =======================
          4. ACTION FOOTER (Shiny Button)
      ======================= */}
      <div className="p-8 pt-0 mt-auto">
        {/* Recommendation Box */}
        {/* 🌙 FIX 4: Dark Mode Recommendation */}
        <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl p-5 mb-6 flex gap-4 relative overflow-hidden group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
           <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 rounded-l-full"></div>
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
             <span className="font-extrabold text-blue-900 dark:text-blue-200 block mb-1 text-xs uppercase tracking-widest">Our Verdict</span>
             <p className="text-sm text-blue-800 dark:text-blue-100 font-medium leading-relaxed">
              {recommendation}
            </p>
          </div>
        </div>

        {/* Gradient Action Button */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/btn relative w-full py-4.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/20 dark:shadow-blue-900/40 transition-all active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2 tracking-tight">
            Open FREE Account 
            <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" strokeWidth={2.5} />
          </span>
           {/* Shine effect on hover */}
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-500 group-hover/btn:scale-100 group-hover/btn:bg-white/10 origin-bottom-left"></div>
        </a>
        
        <p className="text-[10px] font-bold text-center text-slate-300 dark:text-gray-600 mt-4 tracking-widest uppercase flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          Official & Secure Link
        </p>
      </div>

    </div>
  );
}

export default BrokerCard;