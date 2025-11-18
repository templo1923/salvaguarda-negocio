Claro que sí. Entiendo perfectamente, a veces al copiar y pegar por partes se pueden perder llaves de cierre `}` o importaciones, lo que rompe el código.

Aquí tienes el **archivo completo** `src/pages/Index.tsx`.

Este código ya incluye:

1.  Todas las **importaciones de íconos** necesarias (no falta ninguna).
2.  La configuración de **SOLEX**.
3.  Todas las **secciones nuevas** en el orden correcto (Hero, Nosotros, Servicios, Requisitos, Riesgos, 24/7, Espacio Público, Footer).
4.  La estructura correcta de cierre de componentes.

Simplemente copia **todo** el siguiente bloque y reemplaza **todo** el contenido de tu archivo `src/pages/Index.tsx`:

```tsx
import { 
  ShieldCheck, 
  FileText, 
  Clock, 
  Phone, 
  MapPin, 
  Mail, 
  Scale, 
  Building2, 
  Users,
  FileCheck,
  AlertCircle,
  Briefcase, 
  Shield, 
  MousePointerClick, 
  Gavel, 
  FileSearch,
  CheckCircle2,
  AlertTriangle,
  Store,
  Coffee,
  PhoneCall,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroImage from "@/assets/hero-lawyer.jpg";
import attorneyPhoto from "@/assets/attorney-photo.jpg";

// --- CONFIGURACIÓN SOLEX ---
const WHATSAPP_NUMBER = "573004085041"; 
const BRAND_NAME = "SOLEX";
const ADDRESS = "Oficina 301, C.C. Parque Bello"; // Ajustar según la dirección real si cambia
const EMAIL = "contacto@solexempresarial.com"; // Ajustar correo real

const Index = () => {
  const openWhatsApp = () => {
    // Mensaje profesional de inicio para WhatsApp
    const message = encodeURIComponent(
      "Hola SOLEX, requiero asesoría empresarial para mi establecimiento."
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-slate-800">
      {/* Header */}
      <Header onWhatsAppClick={openWhatsApp} />

      {/* --- SECCIÓN 1: HERO (ENCABEZADO PRINCIPAL) --- */}
      <section
        id="inicio"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      >
        {/* Imagen de fondo con superposición profesional */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Asesoría legal empresarial SOLEX"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradiente azul oscuro corporativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/80"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            
            {/* Badge de autoridad */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium tracking-wide uppercase">Soluciones Empresariales Expertas</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Soluciones Empresariales para la <span className="text-blue-400">Continuidad de tu Actividad Económica</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed font-light">
              Asesoría jurídica, gestión documental y acompañamiento inmediato para que tu establecimiento opere en orden y con plena tranquilidad.
            </p>

            {/* Botones de Acción (CTAs) */}
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg hover:shadow-blue-900/20 transition-all duration-300 text-base px-8 py-6 h-auto w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Asesoría
              </Button>
              
              <Button
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-medium rounded-md text-base px-8 py-6 h-auto w-full sm:w-auto backdrop-blur-sm"
              >
                Conocer Servicios
              </Button>
            </div>

            {/* Fila de confianza */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-8 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <Scale className="text-blue-400 h-5 w-5" />
                <span>Cumplimiento Normativo</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="text-blue-400 h-5 w-5" />
                <span>Organización Empresarial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-blue-400 h-5 w-5" />
                <span>Atención Inmediata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: PRESENTACIÓN INSTITUCIONAL --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Respaldo Profesional y Claridad Jurídica
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <span className="font-bold text-blue-900">SOLEX</span> es una firma especializada en soluciones empresariales orientadas al cumplimiento riguroso de los requisitos exigidos para el funcionamiento de establecimientos abiertos al público.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Nuestro propósito es fortalecer y proteger la operación del comerciante mediante asesoría jurídica confiable, acompañamiento empresarial permanente, gestión documental completa y una atención inmediata ante situaciones que requieren respuesta técnica en tiempo real.
              </p>
            </div>

            {/* Tarjeta destacada de valores */}
            <Card className="bg-slate-50 border-none shadow-inner p-8 md:p-10 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm shrink-0">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center md:text-left">
                    Nuestro Compromiso
                  </h3>
                  <p className="text-slate-600 text-center md:text-left">
                    Actuamos con total respeto por las autoridades y las entidades de control, brindando al comerciante claridad, respaldo profesional y una ruta de acción segura y responsable.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: QUÉ HACEMOS (SERVICIOS) --- */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Nuestra Propuesta de Valor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Soluciones Integrales para tu Negocio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              En <span className="font-semibold text-blue-800">SOLEX</span> acompañamos al comerciante en todas las etapas de su actividad económica, integrando asesoría jurídica y gestión estratégica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Servicio 1 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Briefcase className="text-blue-600 h-7 w-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Asesoría Jurídica</h3>
              <p className="text-slate-600 leading-relaxed">
                Orientación empresarial completa para operar en estricto cumplimiento de la normativa vigente.
              </p>
            </Card>

            {/* Servicio 2 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <FileText className="text-blue-600 h-7 w-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gestión Documental</h3>
              <p className="text-slate-600 leading-relaxed">
                Organización, revisión y auditoría de toda la documentación requerida por las autoridades.
              </p>
            </Card>

            {/* Servicio 3 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Shield className="text-blue-600 h-7 w-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Blindaje Preventivo</h3>
              <p className="text-slate-600 leading-relaxed">
                Acompañamiento estratégico para reducir riesgos legales en cualquier procedimiento oficial.
              </p>
            </Card>

            {/* Servicio 4 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <MousePointerClick className="text-blue-600 h-7 w-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Asistencia Inmediata</h3>
              <p className="text-slate-600 leading-relaxed">
                Respuesta técnica en tiempo real ante situaciones urgentes o actuaciones administrativas.
              </p>
            </Card>

            {/* Servicio 5 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Gavel className="text-blue-600 h-7 w-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Defensa Técnica</h3>
              <p className="text-slate-600 leading-relaxed">
                Preparación profesional de descargos, recursos y sustentaciones ante entidades públicas.
              </p>
            </Card>

            {/* Servicio 6 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <FileSearch className="text-blue-600 h-7 w-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seguimiento a Radicados</h3>
              <p className="text-slate-600 leading-relaxed">
                Vigilancia estricta a solicitudes presentadas para garantizar respuesta en los plazos legales.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: REQUISITOS LEGALES --- */}
      <section id="requisitos" className="py-20 bg-white relative overflow-hidden">
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Columna Izquierda */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Requisitos para el Ejercicio de Actividades Económicas
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Todo establecimiento debe cumplir con condiciones específicas para su correcto funcionamiento. SOLEX orienta y gestiona estos requisitos para que tu negocio opere con seguridad jurídica.
                </p>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">1</span>
                    Requisitos Previos al Inicio
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Definición adecuada de destinación y uso del suelo.",
                      "Matrícula mercantil vigente.",
                      "Comunicación formal de apertura ante autoridad.",
                      "Permisos especiales según actividad."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-600 h-5 w-5 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="space-y-8">
                 <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 lg:mt-12">
                  <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">2</span>
                    Requisitos Permanentes de Operación
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Condiciones de seguridad, salubridad y ambiente.",
                      "Cumplimiento estricto de horarios autorizados.",
                      "Coincidencia entre actividad ejercida y objeto registrado.",
                      "Certificados, conceptos y comprobantes al día."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-600 h-5 w-5 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
                  <h4 className="text-xl font-bold mb-4">¿Tu documentación está al día?</h4>
                  <p className="text-blue-100 mb-6">
                    SOLEX te acompaña para que cada uno de estos aspectos se encuentre completo, actualizado y organizado.
                  </p>
                  <Button 
                    onClick={openWhatsApp}
                    className="bg-white text-blue-900 hover:bg-blue-50 font-bold w-full py-6 text-lg"
                  >
                    Consultar con un Especialista
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 5: GESTIÓN DE RIESGOS --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Gestión Preventiva de Riesgos
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Identificamos y corregimos situaciones que podrían comprometer la continuidad de tu operación. SOLEX ofrece orientación profesional para responder de forma correcta y segura.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-l-4 border-l-amber-500 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="text-amber-500 h-8 w-8 shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">Situaciones de Atención</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Desarrollo de actividades sin requisitos vigentes.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Ausencia de documentación física organizada.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Diferencias entre actividad real y matrícula.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Uso no autorizado del espacio público.
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-l-4 border-l-blue-600 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <ShieldCheck className="text-blue-600 h-8 w-8 shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">El Acompañamiento SOLEX</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Las autoridades realizan verificaciones constantes para garantizar la convivencia. Nosotros te acompañamos para:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 h-5 w-5 shrink-0" />
                    Cumplir con todas las exigencias aplicables.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 h-5 w-5 shrink-0" />
                    Mantener tu carpeta legal lista para revisión.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-600 h-5 w-5 shrink-0" />
                    Afrontar procedimientos con claridad y confianza.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 6: ASISTENCIA 24/7 --- */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800 text-blue-200 text-sm font-medium mb-6 border border-blue-700">
                <Clock className="w-4 h-4" />
                <span>Disponibilidad Permanente</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Asistencia Inmediata <span className="text-blue-400">24/7</span>
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Disponemos de una línea de atención inmediata para orientarte en tiempo real durante procedimientos oficiales o situaciones urgentes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <PhoneCall className="text-blue-400 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Soporte en Tiempo Real</h4>
                    <p className="text-blue-200 text-sm">Te indicamos cómo responder y actuar al instante.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <FileText className="text-blue-400 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Garantía Documental</h4>
                    <p className="text-blue-200 text-sm">Aseguramos que las actas reflejen fielmente los hechos.</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold border-none shadow-lg shadow-green-900/20 px-8 py-6 h-auto w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contactar Línea de Urgencias
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl"></div>
              <Card className="relative bg-white/5 backdrop-blur-md border-white/10 p-8 text-white">
                <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
                  Alcance del Acompañamiento
                </h3>
                <ul className="space-y-4">
                  {[
                    "Entendimiento claro de la situación en curso.",
                    "Manejo correcto de interrogantes de la autoridad.",
                    "Elaboración técnica de descargos en el acta.",
                    "Preparación de base para recursos legales."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-400 h-5 w-5 shrink-0 mt-1" />
                      <span className="text-blue-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 7: ESPACIO PÚBLICO --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 bg-white shadow-sm text-center">
                    <Store className="mx-auto h-10 w-10 text-blue-600 mb-3" />
                    <h4 className="font-bold text-slate-900">Uso Comercial</h4>
                  </Card>
                  <Card className="p-6 bg-white shadow-sm text-center">
                    <Coffee className="mx-auto h-10 w-10 text-blue-600 mb-3" />
                    <h4 className="font-bold text-slate-900">Mesas y Sillas</h4>
                  </Card>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Aprovechamiento Económico del Espacio Público
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  ¿Sabías que puedes solicitar autorización para utilizar de manera regulada el área frente a tu establecimiento? El municipio de Bello cuenta con un programa específico para ello.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  <span className="font-bold text-blue-800">SOLEX</span> te asesora en la correcta diligencia de este trámite y en la preparación de los documentos, asegurando el cumplimiento de condiciones y evitando sanciones.
                </p>
                <Button 
                  onClick={openWhatsApp}
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Consultar sobre este trámite <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 8: CONTACTO Y FOOTER --- */}
      <footer id="contacto" className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Columna 1: Marca */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{BRAND_NAME}</h3>
              <p className="mb-6 text-slate-400 leading-relaxed">
                Soluciones Empresariales con Respaldo Jurídico Permanente. Acompañamiento profesional para fortalecer la continuidad de tu actividad económica.
              </p>
            </div>

            {/* Columna 2: Contacto Directo */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Canales de Atención</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="text-blue-500 h-5 w-5" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-blue-500 h-5 w-5" />
                  <span>{EMAIL}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-blue-500 h-5 w-5" />
                  <span>Atención Urgente 24 Horas</span>
                </li>
              </ul>
            </div>

            {/* Columna 3: CTA Final */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Estamos para ayudarte</h4>
              <p className="mb-6 text-slate-400 text-sm">
                Recibe orientación inmediata y profesional sobre cualquier aspecto de tu establecimiento.
              </p>
              <Button
                onClick={openWhatsApp}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6"
              >
                Hablar con un Consultor
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {BRAND_NAME}. Todos los derechos reservados.</p>
            <p className="mt-2">Especialistas en Derecho Comercial y Administrativo.</p>
          </div>
        </div>
      </footer>

      {/* Botón Flotante */}
      <WhatsAppFloat onClick={openWhatsApp} />
    </div>
  );
};

export default Index;
```
