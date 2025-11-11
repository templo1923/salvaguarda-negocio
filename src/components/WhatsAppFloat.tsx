import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface WhatsAppFloatProps {
  onClick: () => void;
}

const WhatsAppFloat = ({ onClick }: WhatsAppFloatProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-16 h-16 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whatsapp-pulse"
        aria-label="Abrir chat de WhatsApp — Asesoría inmediata"
      >
        <MessageCircle size={32} className="text-white" />
        
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 whitespace-nowrap bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg transition-all duration-200 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          ¡Asesoría Inmediata!
          <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-8 border-transparent border-l-primary"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
