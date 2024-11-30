import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Barber Shop</h3>
            <p className="text-muted-foreground">
              Profesionalne frizerske storitve za sodobnega gospoda.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Delovni Čas</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Ponedeljek - Petek: 9:00 - 20:00</p>
              <p>Sobota: 9:00 - 15:00</p>
              <p>Nedelja: Zaprto</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Sledite Nam</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Barber Shop. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
