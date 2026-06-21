import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.355.617 4.654 1.79 6.683L2.667 29.333l6.84-1.79a13.291 13.291 0 0 0 6.493 1.673h.006c7.36 0 13.33-5.97 13.331-13.333.001-3.563-1.385-6.913-3.903-9.434C22.917 4.053 19.566 2.667 16.001 2.667zm0 24.227h-.005a11.066 11.066 0 0 1-5.638-1.544l-.404-.24-4.183 1.095 1.116-4.077-.263-.418a11.06 11.06 0 0 1-1.696-5.91c.002-6.124 4.985-11.107 11.111-11.107 2.967.001 5.755 1.158 7.853 3.258a11.027 11.027 0 0 1 3.252 7.856c-.003 6.124-4.985 11.087-11.143 11.087zm6.092-8.301c-.334-.167-1.974-.974-2.28-1.085-.305-.111-.527-.167-.749.167-.222.334-.86 1.085-1.054 1.307-.194.222-.388.25-.722.083-.334-.167-1.41-.52-2.685-1.658-.992-.886-1.66-1.978-1.855-2.312-.194-.334-.02-.514.147-.68.151-.149.334-.39.5-.585.167-.194.222-.334.334-.556.111-.222.056-.417-.028-.584-.083-.167-.749-1.81-1.027-2.479-.27-.65-.545-.562-.75-.572-.193-.009-.416-.011-.638-.011-.222 0-.583.083-.888.417-.305.334-1.165 1.138-1.165 2.775s1.193 3.22 1.36 3.442c.167.222 2.348 3.588 5.694 5.029.795.343 1.416.547 1.9.7.798.254 1.524.218 2.099.132.64-.096 1.974-.808 2.252-1.587.278-.78.278-1.448.194-1.587-.083-.139-.305-.222-.639-.389z"/>
    </svg>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-[5.5rem] z-[49] size-11 rounded-full bg-[#323232] text-white grid place-items-center shadow-warm-sm hover:shadow-warm-md hover:scale-105 transition-transform"
          >
            <ChevronUp size={20} strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/96171349369"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className="group fixed right-6 bottom-6 z-50 size-14 rounded-full bg-[#25D366] text-white grid place-items-center whatsapp-pulse hover:scale-110 transition-transform shadow-warm-md"
      >
        <WhatsAppIcon />
        <span className="absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#323232] text-white text-xs px-3 py-1.5 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
}
