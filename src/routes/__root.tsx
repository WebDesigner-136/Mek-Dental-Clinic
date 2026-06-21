import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { getDentistJsonLd } from "../components/JsonLd";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#FAFAF8] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-[#323232]">404</h1>
        <h2 className="mt-3 font-display text-2xl text-[#323232]">Page not found</h2>
        <p className="mt-3 text-sm text-[#6D767D]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#FAFAF8] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-[#323232]">This page didn't load</h1>
        <p className="mt-3 text-sm text-[#6D767D]">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <Link to="/" className="btn-outline">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#FAFAF8" },
      { name: "robots", content: "index, follow" },
      { title: "Mek Dental Clinic — Confident Smiles in Hadath, Lebanon" },
      { name: "description", content: "Expert dental care in Hadath, Baabda. Led by Dr. Mariana Karam, Endodontist. Teeth whitening, Hollywood Smile, dental implants, braces & more. Book today." },
      { name: "author", content: "Mek Dental Clinic" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_LB" },
      { property: "og:site_name", content: "Mek Dental Clinic" },
      { property: "og:title", content: "Mek Dental Clinic — Confident Smiles in Hadath, Lebanon" },
      { property: "og:description", content: "Expert dental care in Hadath, Baabda. Led by Dr. Mariana Karam, Endodontist." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getDentistJsonLd()),
      } as any,
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
