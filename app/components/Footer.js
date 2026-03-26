"use client";

const contactDetails = [
  // { label: "Head Office (Pimpri)", value: "+91 98231 00001" },
  // { label: "Branch (Nashik)", value: "+91 98231 00002" },
  // { label: "Workshop Line", value: "+91 98231 00003" },
  { label: "Service Email", value: "service@markgermany.com" },
  { label: "Sales Email", value: "sales@markgermany.com" },
];

export default function Footer({ id }) {
  return (
    <footer
      id={id}
      className="bg-black text-white mt-auto border-t border-red-600/40"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {/* About Us Section */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-wide">
                  MARK GERMANY 🇩🇪
                </h3>
                <p className="text-xs uppercase tracking-wider text-muted">
                  Precision Engineered for the Future
                </p>
              </div>
            </div>
            
            <p className="text-sm text-muted leading-relaxed">
              Welcome to Mark Germany, where German-inspired engineering meets modern automotive 
              excellence. We don’t just manufacture parts; we curate Durability and Innovation.
            </p>

            {/* E20 Revolution */}
            <div>
              <h4 className="text-md font-semibold text-red-500">🧪 The E20 Revolution</h4>
              <p className="text-sm text-muted leading-relaxed mt-1">
                As engines shift to E20 Petrol (20% Ethanol), they face new risks of moisture and 
                internal corrosion. At Mark Germany, we have mastered this change. Our products are 
                specifically engineered to neutralize the chemical impact of E20 fuel, keeping your 
                engine at peak performance.
              </p>
            </div>

            {/* Advanced Thermal Coating */}
            <div>
              <h4 className="text-md font-semibold text-red-500">🛡️ Signature Advanced Thermal Coating</h4>
              <p className="text-sm text-muted leading-relaxed mt-1">
                To combat extreme heat and friction, we introduced our proprietary Advanced Thermal Coating:
              </p>
              <ul className="list-disc list-inside text-sm text-muted space-y-1 mt-2">
                <li>Corrosion Shield: Permanent protection against ethanol-blended petrol.</li>
                <li>Extended Life: Controls thermal expansion for maximum durability.</li>
                <li>Friction Reduction: Smoother performance in critical engine zones.</li>
              </ul>
            </div>

            {/* Why MARK GERMANY */}
            <div>
              <h4 className="text-md font-semibold text-red-500">🌟 Why MARK GERMANY?</h4>
              <ul className="list-disc list-inside text-sm text-muted space-y-1 mt-2">
                <li>⚙️ Precision Fit: Seamless installation for every Splendor Rod Kit.</li>
                <li>💎 Pressure Resistant: Built to survive extreme stress without losing strength.</li>
                <li>🇩🇪 German Tech: World-class standards delivered to your doorstep.</li>
              </ul>
            </div>

            {/* Address Details - Kept from original */}
            {/* <div className="space-y-4 text-sm mt-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Branch 1
                </p>
                <address className="not-italic text-white leading-relaxed">
                  Plot 42, Sector 5, Pimpri Industrial Estate, Pune 411018
                </address>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Branch 2
                </p>
                <address className="not-italic text-white leading-relaxed">
                  Unit 7C, Midtown Industrial Park, Nashik 422010
                </address>
              </div>
            </div> */}
          </div>

          {/* Contact Section - Unchanged */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4 shadow-lg">
            <h4 className="text-lg font-semibold uppercase tracking-[0.25em] text-white">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              {contactDetails.map((contact) => (
                <div key={contact.label} className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {contact.label}
                  </p>
                  <p className="text-white">{contact.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted">
              Reach out for bespoke builds, servicing, or dealer partnerships.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-muted">
            © 2026 MarkGermany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}