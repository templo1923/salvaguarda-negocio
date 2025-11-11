// --- CAMBIO: Se añaden los íconos que faltaban ---
import { Shield, FileCheck, Clock, Phone, Mail, MapPin, AlertTriangle, Search, FileSignature, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RequirementItem from "@/components/RequirementItem";
import heroImage from "@/assets/hero-lawyer.jpg";
import sealedImage from "@/assets/sealed-business.jpg";
import attorneyPhoto from "@/assets/attorney-photo.jpg";
// --- CAMBIO: Se elimina 'inspectionImage' porque usaremos tu GIF/video ---
// import inspectionImage from "@/assets/inspection.jpg";

// --- CAMBIO: Se actualizan los datos para generar confianza ---
// ⚠️ CONFIGURACIÓN - ¡RECUERDA CAMBIAR EL WHATSAPP_NUMBER!
const WHATSAPP_NUMBER = "573XXXXXXXXX"; // 👈 ¡REEMPLAZA ESTE NÚMERO!
const ATTORNEY_NAME = "Dr. Juan Pérez";
const YEARS_EXPERIENCE = "12";
const ADDRESS = "Oficina 301, C.C. Parque Bello";
const EMAIL = "dr.juanperez@abogadosbello.com";

const Index = () => {
  const openWhatsApp = () => {
    // --- CAMBIO: Mensaje de WhatsApp más simple y directo ---
    const message = encodeURIComponent(
      "Hola, necesito asesoría legal urgente para mi negocio en Bello."
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const requirements = [
    {
      title: "Registro de Información Tributaria (RIT)",
      description: "Documento esencial para operar legalmente y cumplir con obligaciones fiscales.",
    },
    {
      title: "Concepto Sanitario Vigente",
      description: "Certificado de cumplimiento de normas sanitarias expedido por la Secretaría de Salud.",
    },
    {
      title: "Concepto Técnico de Bomberos",
      description: "Verificación de medidas de seguridad y prevención de incendios en tu establecimiento.",
    },
    {
      title: "Certificado de Uso del Suelo",
      description: "Confirma que tu local puede operar comercialmente en esa ubicación específica.",
    },
    {
      title: "Matrícula Mercantil Vigente",
      description: "Inscripción actualizada en la Cámara de Comercio de tu jurisdicción.",
    },
    {
      title: "Comunicación a la Policía Nacional",
      description: "Notificación obligatoria sobre la operación de tu establecimiento comercial.",
    },
    {
      title: "Permisos Especiales",
      description: "Según tu actividad: música, venta de licor, manipulación de alimentos, etc.",
    },
    {
      title: "Pago de Industria y Comercio",
      description: "Certificado al día del impuesto municipal por tu actividad comercial.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onWhatsAppClick={openWhatsApp} />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Asesoría legal comercial en Bello"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* --- CAMBIO: H1 (Gancho) mejorado --- */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              ¿Operativos de la Alcaldía en Bello y Niquía?{" "}
              <span className="text-warning">¡Evita el Sello de 'CERRADO' en tu negocio!</span>
            </h1>
            {/* --- CAMBIO: Subtítulo mejorado --- */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Gestionamos los 8 requisitos legales por ti. Habla con un abogado especialista
              <span className="font-bold"> ahora</span> por WhatsApp y opera con tranquilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                ¡QUIERO MI ASESORÍA AHORA!
              </Button>
            </div>
            {/* --- CAMBIO: Texto CTA para bot --- */}
            <p className="text-white/80 text-sm md:text-base">
              <Clock className="inline mr-2" size={18} />
              Respuesta inmediata 24/7 (Inicia con nuestro asistente virtual)
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section - El Riesgo */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Las Inspecciones Son Reales y las Sanciones También
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                La Alcaldía está realizando operativos sorpresa en Bello (ej. Niquía).{" "}
                <span className="font-semibold text-destructive">
                  Un solo documento faltante puede significar el cierre temporal de tu establecimiento,
                  multas y la pérdida de tus ventas.
                </span>
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              No dejes que esto te pase:
            </h3>

            {/* --- CAMBIO: Reorganización de la cuadrícula --- */}
            <div className="grid md:grid-cols-3 gap-6 items-stretch"> {/* <-- CAMBIO: items-stretch */}
              
              {/* Columna 1: Video */}
              <Card className="overflow-hidden shadow-lg flex flex-col"> {/* <-- CAMBIO: flex flex-col */}
                <div className="flex-1"> {/* <-- CAMBIO: Contenedor para que el video crezca */}
                  <video
                    className="w-full h-full object-cover" // <-- CAMBIO: h-full object-cover
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    poster={sealedImage} 
                    preload="auto"
                  >
                    <source src="https://res.cloudinary.com/dz9ktwtyo/video/upload/v1762886362/operativo-niquia_vocctj.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
                <div className="p-4 bg-card">
                  <p className="font-semibold text-center text-foreground">Operativos reales en Bello</p>
                </div>
              </Card>

              {/* Columna 2: TU NUEVO VIDEO/GIF */}
              <Card className="overflow-hidden shadow-lg flex flex-col"> 
                <div className="flex-1"> 
                  {/* --- AQUÍ ESTÁ LA CORRECCIÓN --- */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="auto"
                  >
                    {/* Esta es la URL de tu nuevo video. Fíjate que está entre comillas "" */}
                    <source src="https://res.cloudinary.com/dz9ktwtyo/video/upload/v1762900561/Dise%C3%B1o_sin_t%C3%ADtulo_jis8c5.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
                <div className="p-4 bg-card">
                  <p className="font-semibold text-center text-foreground">Revisión de documentos</p>
                </div>
              </Card>

              {/* Columna 3: Alerta */}
              <Card className="p-6 flex flex-col justify-center bg-destructive/10 border-destructive/20 h-full"> {/* <-- CAMBIO: h-full y flex-col */}
                <AlertTriangle className="text-destructive mb-4" size={48} />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  No Arriesgues Tu Inversión
                </h4>
                {/* --- CAMBIO: Copy mejorado (Cientos es más creíble) --- */}
                <p className="text-foreground/70 mb-6">
                  Cientos de comerciantes en Bello ya han enfrentado sanciones por documentación incompleta.
                  No seas el siguiente.
                </p>
                <Button
                  onClick={openWhatsApp}
                  variant="destructive"
                  className="font-semibold w-full"
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  ¡Necesito ayuda urgente!
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Los 8 Requisitos */}
      <section id="requisitos" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className
