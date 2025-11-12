// components/WhatsAppFloat.tsx - Versión Minimalista
import { MessageCircle, Clock, Shield } from "lucide-react";

interface WhatsAppFloatProps {
  onClick: () => void;
}

const WhatsAppFloat = ({ onClick }: WhatsAppFloatProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contenedor principal con animación sutil */}
      <div className="relative group">
        {/* Efecto de pulso */}
        <div className="absolute inset-0 bg-green-500 rounded-2xl animate-ping opacity-30"></div>
        
        {/* Tooltip informativo */}
        <div className="absolute bottom-full right-0 mb-4 hidden group-hover:block animate-fade-in">
          <div className="bg-white text-gray-800 text-sm font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-green-200 max-w-xs">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Shield className="h-4 w-4" />
              <span className="font-bold">Asesoría Legal Urgente</span>
            </div>
            <div className="text-gray-600 text-left mb-2">
              Evita multas y cierres en tu negocio
            </div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <Clock className="h-3 w-3" />
              Respuesta 24/7 por abogado especialista
            </div>
          </div>
          {/* Flecha del tooltip */}
          <div className="w-3 h-3 bg-white transform rotate-45 -mt-2 ml-auto mr-4 border-r border-b border-green-200"></div>
        </div>

        {/* Botón principal */}
        <button
          onClick={onClick}
          className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group-hover:rotate-12 border-2 border-white/20 hover:border-white/40"
        >
          {/* Ícono con efecto */}
          <MessageCircle className="h-8 w-8" fill="currentColor" />
          
          {/* Indicador de actividad */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        </button>

        {/* Texto flotante para móvil */}
        <div className="md:hidden absolute -left-48 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap animate-pulse">
          ¡Habla con un abogado! 👨‍⚖️
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
