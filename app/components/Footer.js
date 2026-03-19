"use client";

const contactDetails = [
  { label: "Head Office (Pimpri)", value: "+91 98231 00001" },
  { label: "Branch (Nashik)", value: "+91 98231 00002" },
  { label: "Workshop Line", value: "+91 98231 00003" },
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
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-wide">
                  About MarkGermany
                </h3>
                <p className="text-xs uppercase tracking-wider text-muted">
                  Lathe Craft Since 1995
                </p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Our lathe lines have been machining precision rods for two- and
              three-wheelers for over 30 years. We balance each piece, measure
              for concentricity, and finish in matte black and copper at our
              Pune and Nashik workshops before it reaches your garage.
            </p>
            <div className="space-y-4 text-sm">
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
            </div>
          </div>

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
