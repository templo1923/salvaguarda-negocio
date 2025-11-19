import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onWhatsAppClick: () => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            {/* Puedes mantener un ícono si quieres, o solo texto */}
            <span className="text-xl md:text-2xl font-bold text-primary">
              SOLEX
            </span>
            <span className="hidden md:inline-block text-sm text-muted-foreground border-l pl-2 ml-2 border-gray-300">
              Soluciones Empresariales
              </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("requisitos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Requisitos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={onWhatsAppClick}
              className="bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold"
              aria-label="Consultar por WhatsApp"
            >
              Consultar por WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("requisitos")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Requisitos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Contacto
            </button>
            <Button
              onClick={onWhatsAppClick}
              className="bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold w-full"
            >
              Consultar por WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;