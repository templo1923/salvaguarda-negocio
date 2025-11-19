import { Shield, FileCheck, Clock, Phone, Mail, MapPin, Building, Users, Target, CheckCircle, FileText, HeadphonesIcon, ShieldAlert, Calendar, Zap, Scale, Briefcase, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
// Importaciones de imágenes
import meetingImage from "@/assets/hero-lawyer.jpg";
import complianceImage from "@/assets/inspection.jpg"; 
//import attorneyPhoto from "@/assets/attorney-photo.jpg"; 
import attorneyPhoto from "@/assets/inspection.jpg"

// --- CONFIGURACIÓN SOLEX ---
const WHATSAPP_NUMBER = "573004085041";
const COMPANY_NAME = "SOLEX";
const ADDRESS = "Domicilio Legal en Bello, Antioquia"; // Refuerza la naturaleza legal/administrativa
const EMAIL = "contacto@solexconsultoria.com";

// URL del Video MP4 para la Sección 2 (Asistencia/Cumplimiento) - ACTUALIZADO PARA REELS
const COMPLIANCE_VIDEO_URL = "https://res.cloudinary.com/dz9ktwtyo/video/upload/v1762886362/operativo-niquia_vocctj.mp4";

// Componente WhatsAppIcon reutilizable
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
  </svg>
);

const Index = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola SOLEX, estoy interesado en los servicios de consultoría para la continuidad de mi actividad económica. ¿Podrían brindarme más información?"
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const services = [
    {
      icon: Briefcase,
      title: "Asesoría jurídica y empresarial integral",
      description: "Orientación completa para el funcionamiento adecuado del establecimiento.",
    },
    {
      icon: FileText,
      title: "Gestión documental",
      description: "Organización, solicitud y actualización de todos los documentos exigidos para operar.",
    },
    {
      icon: Users,
      title: "Acompañamiento en verificaciones oficiales",
      description: "Asistencia inmediata durante visitas de verificación.",
    },
    {
      icon: Zap,
      title: "Atención de urgencias 24/7",
      description: "Asesoría técnica en tiempo real en situaciones que requieren respuesta inmediata.",
    },
    {
      icon: FileCheck,
      title: "Preparación de descargos y recursos",
      description: "Sustentación profesional conforme a los procedimientos establecidos.",
    },
    {
      icon: Target,
      title: "Asesoría en matrícula mercantil y CIIU",
      description: "Estructuración correcta del objeto social y de los códigos de actividad.",
    },
    {
      icon: Calendar,
      title: "Seguimiento a radicados",
      description: "Acompañamiento permanente para verificar respuestas dentro de plazos legales.",
    },
    {
      icon: HeadphonesIcon,
      title: "Asistencia Técnica 24/7",
      description: "Línea de atención digital disponible todos los días, a cualquier hora para emergencias.",
    },
  ];

  const requirements = [
    {
      title: "Definición de destinación y uso",
      description: "Adecuada definición de la destinación y uso del establecimiento.",
    },
    {
      title: "Matrícula mercantil vigente",
      description: "Contar con la matrícula mercantil vigente y actualizada.",
    },
    {
      title: "Comunicación formal de apertura",
      description: "Realización de la comunicación formal de apertura ante la autoridad correspondiente.",
    },
    {
      title: "Permisos especiales",
      description: "Gestión de permisos especiales cuando la actividad lo exija.",
    },
    {
      title: "Condiciones de seguridad y salubridad",
      description: "Mantenimiento de condiciones de seguridad, salubridad y ambiente.",
    },
    {
      title: "Cumplimiento de horarios autorizados",
      description: "Respeto estricto de los horarios autorizados de operación.",
    },
    {
      title: "Coincidencia de actividad registrada",
      description: "Garantizar que la actividad ejercida coincida con el objeto registrado.",
    },
    {
      title: "Certificados y conceptos al día",
      description: "Conservación de certificados, conceptos y comprobantes actualizados.",
    },
  ];

  const riskBehaviors = [
    "Desarrollar actividades económicas sin cumplir requisitos normativos",
    "No contar con documentación requerida en físico y organizada",
    "Ejercer actividades distintas a las registradas en la matrícula mercantil",
    "Ocupar indebidamente el espacio público",
    "Superar el aforo permitido",
    "Tener instalaciones sin autorización correspondiente",
    "Situaciones que comprometan integridad de menores de edad",
    "Incumplir condiciones de seguridad, salubridad o uso adecuado",
  ];

  const whatWeDoPoints = [
    "Asesoría jurídica y empresarial para operar en cumplimiento",
    "Gestión, organización y revisión de toda la documentación requerida",
    "Acompañamiento preventivo para reducir riesgos en procedimientos oficiales",
    "Asistencia inmediata en situaciones urgentes o actuaciones administrativas",
    "Preparación técnica de descargos y recursos",
    "Seguimiento estricto a solicitudes y radicados presentados ante entidades públicas",
    "Acompañamiento en verificaciones y revisiones oficiales",
    "Asesoría en matrícula mercantil y CIIU",
  ];

  const spaceUseSteps = [
    "Medición y Levantamiento topográfico",
    "Análisis de requisitos normativos",
    "Elaboración de planos y solicitud",
    "Seguimiento y obtención de la autorización",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onWhatsAppClick={openWhatsApp} />

      {/* Hero Section - Centrado y Visual */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={meetingImage}
            alt="Consultoría empresarial SOLEX"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-800/85"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <Shield className="text-white h-5 w-5" />
                <span className="text-white font-semibold">Soluciones Empresariales con Respaldo Jurídico</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {COMPANY_NAME}: <span className="text-blue-200">Soluciones Empresariales</span> para la Continuidad de tu Actividad Económica
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Asesoría jurídica, gestión documental y acompañamiento inmediato para que tu establecimiento opere en orden y con plena tranquilidad.
              </p>
              
              <p className="text-xl md:text-2xl text-white/90 font-semibold pt-4">
                Profesionales en:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 py-4 max-w-lg mx-auto">
                <div className="flex items-center justify-start sm:justify-center gap-3">
                  <CheckCircle className="text-green-400 h-5 w-5 flex-shrink-0" />
                  <span className="text-white font-medium">Cumplimiento Normativo</span>
                </div>
                <div className="flex items-center justify-start sm:justify-center gap-3">
                  <CheckCircle className="text-green-400 h-5 w-5 flex-shrink-0" />
                  <span className="text-white font-medium">Atención Inmediata </span>
                </div>
                <div className="flex items-center justify-start sm:justify-center gap-3">
                  <CheckCircle className="text-green-400 h-5 w-5 flex-shrink-0" />
                  <span className="text-white font-medium">Gestión 100% Digital</span>
                </div>
                <div className="flex items-center justify-start sm:justify-center gap-3">
                  <CheckCircle className="text-green-400 h-5 w-5 flex-shrink-0" />
                  <span className="text-white font-medium">Respaldo Jurídico</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8 py-4 md:text-lg"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Consultoría Inmediata
                </Button>
                <Button
                  onClick={() => document.getElementById('enfoque')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold rounded-lg transition-all duration-300 text-base px-8 py-4 md:text-lg"
                >
                  <Scale className="mr-2 h-5 w-5" />
                  Conocer Metodología
                </Button>
              </div>

              <p className="text-white/80 text-sm md:text-base pt-4">
                <Clock className="inline mr-2" size={18} />
                Respuesta inmediata - Profesionales especializados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Presentación Institucional (MODIFICADA CON VIDEO) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenedor de Video (Responsive y AutoPlay) */}
            <div className="rounded-2xl overflow-hidden shadow-2xl lg:order-1 relative group w-full h-[400px] lg:h-[550px]">
              <video
                src={COMPLIANCE_VIDEO_URL} 
                alt="Video de cumplimiento normativo"
                className="w-full h-full object-contain rounded-2xl" // Cambiado a object-contain
                autoPlay
                muted
                loop
                playsInline 
                preload="auto"
              />
              {/* Overlay para mantener la estética corporativa */}
              <div className="absolute inset-0 bg-blue-900/10 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Contenido Institucional */}
            <div className="space-y-8 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Especialistas en Continuidad Empresarial
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 rounded-full"></div>

              <p className="text-xl text-gray-800 leading-relaxed pt-4">
                <span className="font-bold text-blue-700">{COMPANY_NAME}</span> es una firma especializada en soluciones empresariales orientadas al cumplimiento riguroso de los requisitos exigidos para el funcionamiento de establecimientos abiertos al público.
              </p>
              
              <Card className="bg-white border-l-4 border-l-blue-600 p-6 shadow-xl italic text-xl">
                Nuestro propósito es <span className="font-extrabold text-blue-700">fortalecer y proteger la operación del comerciante</span> mediante asesoría jurídica confiable, acompañamiento empresarial permanente, gestión documental completa y una atención inmediata ante situaciones que requieren respuesta técnica en tiempo real.
              </Card>

              <Card className="bg-blue-50 border-blue-200 p-6 shadow-sm">
                <p className="text-lg text-gray-800 font-medium flex items-center justify-center lg:justify-start gap-3">
                  <Scale className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  Actuamos con total respeto por las autoridades y las entidades de control, brindando claridad, respaldo profesional y una ruta de acción segura y responsable.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Qué Hacemos (Nuestro Enfoque) */}
      <section id="enfoque" className="py-16 md:py-24 relative overflow-hidden bg-blue-50">
        {/* FONDO TIPO IMAGEN DE SECCIÓN 1, CON MAYOR OPACIDAD Y MEJOR GRADIENTE */}
        <div className="absolute inset-0 z-0">
          <img
            src={meetingImage} // Usamos la imagen del Hero como fondo
            alt="Equipo de consultores"
            className="w-full h-full object-cover opacity-[0.25]" // Opacidad aumentada
            loading="lazy"
          />
          {/* Ajustamos el gradiente para unificar y saturar con azul claro */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-blue-100/80 to-blue-100/50 pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6 border border-blue-200">
              <Target className="text-blue-600 h-5 w-5" />
              <span className="text-blue-600 font-semibold">Nuestro Enfoque</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qué Hacemos por tu Actividad Económica
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
              En <span className="font-bold text-blue-700">{COMPANY_NAME}</span> acompañamos al comerciante en todas las etapas de su actividad económica. Nuestro servicio integra:
            </p>

            <div className="grid lg:grid-cols-2 gap-x-8 gap-y-6 text-left mb-12 max-w-5xl mx-auto">
              {whatWeDoPoints.map((point, index) => (
                <div key={index} className="p-4 flex items-start gap-4 border border-blue-200 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 h-4 w-4 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    <strong className="font-extrabold text-blue-800">{point.split(' ')[0]}</strong> {point.substring(point.split(' ')[0].length)}
                  </span>
                </div>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Nuestro Objetivo: Plena Continuidad
              </h3>
              <p className="text-lg text-gray-700 text-center font-semibold">
                Que tu negocio se mantenga sólido, ordenado y con plena continuidad.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 4: Todos los Servicios (Detalle) */}
      <section id="servicios" className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6 border border-blue-200">
                <Users className="text-blue-600 h-5 w-5" />
                <span className="text-blue-600 font-semibold">Nuestros Servicios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Portafolio {COMPANY_NAME} para el Comerciante
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones integrales diseñadas para garantizar el cumplimiento normativo y la continuidad de tu actividad económica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  // Añadimos borde dinámico para darle color
                  className={`p-6 group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 text-center border-b-4 
                            ${index % 2 === 0 ? 'border-blue-600 hover:border-blue-800' : 'border-green-600 hover:border-green-800'} 
                            bg-white hover:bg-white/90`
                  }
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="text-blue-600 group-hover:text-white h-6 w-6 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Requisitos (Listas claras) */}
      <section id="requisitos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6 border border-blue-200">
                <FileCheck className="text-blue-600 h-5 w-5" />
                <span className="text-blue-600 font-semibold">Gestión Normativa</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Requisitos para Ejercer Actividades Económicas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {COMPANY_NAME} orienta y gestiona estos requisitos para que tu negocio opere con seguridad jurídica y sin contratiempos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-blue-200 text-center shadow-lg bg-blue-50/50">
                <h3 className="text-3xl font-extrabold text-blue-800 mb-8">Requisitos Previos</h3>
                <div className="space-y-4">
                  {requirements.slice(0, 4).map((req, index) => (
                    <div key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-400 text-left">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-extrabold text-blue-700 mb-1">{req.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{req.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-2 border-green-200 text-center shadow-lg bg-green-50/50">
                <h3 className="text-3xl font-extrabold text-green-800 mb-8">Requisitos Permanentes</h3>
                <div className="space-y-4">
                  {requirements.slice(4).map((req, index) => (
                    <div key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-400 text-left">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white font-bold text-sm">{index + 5}</span>
                        </div>
                        <div>
                          <h4 className="font-extrabold text-green-800 mb-1">{req.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{req.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {COMPANY_NAME} te acompaña para que cada uno de estos aspectos se encuentre completo, actualizado y organizado.
                </h3>
                <Button
                  onClick={openWhatsApp}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Evaluar Mis Requisitos
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6: Conductas de Riesgo y Acompañamiento (Visual 2) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="rounded-xl overflow-hidden shadow-2xl relative order-2 lg:order-1 group">
              <img
                src={attorneyPhoto} 
                alt="Abogado especialista SOLEX"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            
            <Card className="p-8 shadow-xl border-t-4 border-t-red-500 lg:order-2 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-red-100 px-6 py-3 rounded-full mb-6 border border-red-200 mx-auto lg:mx-0">
                <ShieldAlert className="text-red-600 h-5 w-5" />
                <span className="text-red-600 font-semibold">Prevención de Riesgos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Conductas que Pueden Afectar la Actividad Económica
              </h2>
              
              <div className="bg-gray-50 border border-red-200 p-6 rounded-lg space-y-4">
                <p className="text-lg text-gray-700 font-semibold mb-4">
                  Existen diferentes situaciones que pueden generar medidas que afecten la continuidad de un establecimiento:
                </p>
                <div className="grid sm:grid-cols-1 gap-3 text-sm">
                  {riskBehaviors.map((behavior, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ShieldAlert className="text-red-600 h-4 w-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-left">{behavior}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button
                onClick={openWhatsApp}
                className="bg-red-600 hover:bg-red-700 text-white font-bold w-full sm:w-auto"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Auditoría de Riesgos {COMPANY_NAME}
              </Button>
              <p className="text-gray-600 text-sm">
                {COMPANY_NAME} ofrece orientación preventiva y acompañamiento profesional para una respuesta correcta y oportuna.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 7: Asistencia Inmediata 24/7 (Digital Advantage) */}
      <section className="py-16 md:py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="h-12 w-12 mb-4 text-yellow-300 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Asistencia Inmediata <span className="text-blue-400">24/7</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              <span className="font-extrabold text-white">Nuestra sede es digital, nuestro servicio es inmediato.</span> {COMPANY_NAME} dispone de una línea de atención digital disponible todos los días, a cualquier hora, para orientar al comerciante durante procedimientos oficiales o situaciones urgentes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8 text-left">
              {/* Item 1: Entender */}
              <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-300 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-blue-100"><strong className="text-white">Entender claramente</strong> la situación que está ocurriendo</span>
                </div>
              </Card>
              {/* Item 2: Responder */}
              <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-300 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-blue-100"><strong className="text-white">Saber cómo responder</strong> correctamente a las preguntas de la autoridad</span>
                </div>
              </Card>
              {/* Item 3: Elaborar */}
              <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-300 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-blue-100"><strong className="text-white">Elaborar descargos precisos</strong> y claros para el acta</span>
                </div>
              </Card>
              {/* Item 4: Preparar */}
              <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-300 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-blue-100"><strong className="text-white">Preparar la base jurídica</strong> para recursos correspondientes</span>
                </div>
              </Card>
            </div>

            <Button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Activar Asistencia
            </Button>
          </div>
        </div>
      </section>

      {/* Sección 8: Espacio Público */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full mb-6 border border-green-200">
              <MapPin className="text-green-600 h-5 w-5" />
              <span className="text-green-600 font-semibold">Oportunidad de Negocio</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aprovechamiento Económico del Espacio Público
            </h2>
            
            <Card className="p-8 bg-gray-50 border border-green-200">
              <p className="text-lg text-gray-700 mb-6 font-bold">
                ¿Sabías que puedes solicitar una autorización para utilizar de manera regulada el espacio público frente a tu establecimiento?
              </p>
              
              <p className="text-gray-700 mb-6">
                El municipio de Bello cuenta con un programa que permite ubicar mesas, sillas u otros elementos en áreas delimitadas, bajo condiciones específicas y mediante una tarifa asociada al metraje solicitado.
              </p>

              {/* Contenedor de Medición/Pasos Estilizado */}
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {spaceUseSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 text-left p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-400 transition-all duration-300">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-bold">{step.split(':')[0]}</h4>
                      <span className="text-gray-600 text-sm">{step.split(':')[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Fin Contenedor de Medición/Pasos */}

              <div className="bg-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3">SOLEX te asesora en:</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-start sm:justify-center gap-2">
                    <CheckCircle className="text-green-500 h-4 w-4 flex-shrink-0" />
                    <span>Correcta diligencia del trámite</span>
                  </div>
                  <div className="flex items-center justify-start sm:justify-center gap-2">
                    <CheckCircle className="text-green-500 h-4 w-4 flex-shrink-0" />
                    <span>Preparación de documentos requeridos</span>
                  </div>
                  <div className="flex items-center justify-start sm:justify-center gap-2">
                    <CheckCircle className="text-green-500 h-4 w-4 flex-shrink-0" />
                    <span>Cumplimiento de condiciones</span>
                  </div>
                  <div className="flex items-center justify-start sm:justify-center gap-2">
                    <CheckCircle className="text-green-500 h-4 w-4 flex-shrink-0" />
                    <span>Prevención de inconvenientes</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Consultar sobre Uso de Espacio Público
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 9: Footer y Contacto */}
      <footer id="contacto" className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-5xl mx-auto text-center">
            
            {/* Columna 1: Contacto Principal (WhatsApp) */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <WhatsAppIcon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp Digital</h3>
              <p className="text-green-200">{WHATSAPP_NUMBER}</p>
              <p className="text-green-200 text-sm font-semibold">Línea de Asistencia </p>
            </div>

            {/* Columna 2: Email Corporativo */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Corporativo</h3>
              <p className="text-blue-200">{EMAIL}</p>
              <p className="text-blue-200 text-sm">Respuesta en 24 horas</p>
            </div>

            {/* Columna 3: Sede Administrativa / Digital */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Atención Online Digital</h3>
              <p className="text-slate-400">{ADDRESS}</p>
              <p className="text-red-400 text-sm font-semibold">Servicio 100% Remoto</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Estamos para ayudarte</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
              {/* Nuevo Botón para Contacto por Correo / Formulario */}
              <Button
                onClick={() => window.location.href = `mailto:${EMAIL}`} // Simula la apertura del formulario/correo
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Formulario de Contacto
              </Button>
            </div>
          </div>

          {/* Legal Bar */}
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p className="mt-2">
              © {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.
            </p>
            <p className="mt-2">Especialistas en Derecho Comercial y Administrativo.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat onClick={openWhatsApp} />
    </div>
  );
};

export default Index;