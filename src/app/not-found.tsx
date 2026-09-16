import Link from "next/link";
import { Compass, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground mb-4">
        <HelpCircle className="size-8" />
      </div>
      <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
        404 — Locul nu a fost găsit
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Pagina căutată nu există sau a fost mutată. Explorează locurile de weekend disponibile în Chișinău.
      </p>
      <Link href="/" className="mt-6">
        <Button className="gap-2 text-xs font-semibold">
          <Compass className="size-4" />
          <span>Înapoi la pagina principală</span>
        </Button>
      </Link>
    </div>
  );
}
