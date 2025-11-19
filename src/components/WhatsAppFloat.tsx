import { Shield, Clock } from "lucide-react";

interface WhatsAppFloatProps {
  onClick: () => void;
}

const WhatsAppFloat = ({ onClick }: WhatsAppFloatProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <div className="absolute inset-0 bg-green-500 rounded-2xl animate-ping opacity-30"></div>
        
        {/* Tooltip (Texto de Hover) - Actualizado al tono corporativo */}
        <div className="absolute bottom-full right-0 mb-4 hidden group-hover:block">
          <div className="bg-white text-gray-800 text-sm font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-green-200 max-w-xs">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Shield className="h-4 w-4" />
              <span className="font-bold">Asistencia Jurídica SOLEX</span>
            </div>
            <div className="text-gray-600 text-left mb-2">
              Acompañamiento inmediato para la continuidad de tu negocio.
            </div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <Clock className="h-3 w-3" />
              Línea Digital (Respuesta Inmediata)
            </div>
          </div>
          <div className="w-3 h-3 bg-white transform rotate-45 -mt-2 ml-auto mr-4 border-r border-b border-green-200"></div>
        </div>

        {/* Main Button */}
        <button
          onClick={onClick}
          className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group-hover:rotate-12 border-2 border-white/20 hover:border-white/40"
        >
          {/* ICONO OFICIAL DE WHATSAPP - SVG exacto */}
          <svg 
            className="h-8 w-8" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
          </svg>
          
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        </button>

        {/* Mobile Floating Text - CORREGIDO */}
        <div className="md:hidden absolute -left-48 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap animate-pulse">
          Asistencia Por Whatsapp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;