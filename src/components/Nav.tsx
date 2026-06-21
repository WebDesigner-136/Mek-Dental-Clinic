import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Smile Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {(() => {
        const darkHeroRoute =
          pathname === "/about" ||
          pathname === "/gallery" ||
          pathname.startsWith("/services");
        const onDark = darkHeroRoute && !scrolled;
        const textCls = onDark ? "text-[#FAFAF8]" : "text-[#323232]";
        return (
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-md shadow-warm-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between h-16 md:h-[72px]">
          <Link to="/" className={`font-display text-[1.25rem] font-semibold tracking-tight ${textCls}`}>
            Mek Dental Clinic
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) => {
              const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative text-[0.9375rem] font-medium transition-opacity hover:opacity-70 py-2 ${textCls}`}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute left-0 right-0 -bottom-0.5 h-[2px] ${onDark ? "bg-[#FAFAF8]" : "bg-[#323232]"}`}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="tel:+96171349369"
              className={`hidden xl:inline-flex items-center gap-1.5 text-[0.875rem] transition-colors ${onDark ? "text-[#FAFAF8]/80 hover:text-[#FAFAF8]" : "text-[#6D767D] hover:text-[#323232]"}`}
            >
              <Phone size={15} strokeWidth={1.5} /> +961 71 349 369
            </a>
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-warm-md ${
                onDark ? "bg-[#FAFAF8] text-[#323232]" : "bg-[#323232] text-[#FAFAF8]"
              }`}
            >
              Book Appointment
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className={`lg:hidden p-2 -mr-2 ${textCls}`}
              onClick={() => setOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>
        );
      })()}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#FAFAF8] lg:hidden flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-x flex items-center justify-between h-16">
              <Link to="/" className="font-display text-[1.25rem] font-semibold">
                Mek Dental Clinic
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 -mr-2"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center gap-7 flex-1">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-display text-3xl text-[#323232]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="container-x flex flex-col gap-3 pb-10">
              <a href="tel:+96171349369" className="btn-outline justify-center">
                <Phone size={16} strokeWidth={1.5} /> +961 71 349 369
              </a>
              <Link to="/contact" className="btn-primary justify-center">
                Book Your Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
