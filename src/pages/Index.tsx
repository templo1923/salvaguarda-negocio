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
const ATTORNEY_NAME = "Dr. Mario Pérez";
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
              ¿Operativos De La Alcaldía En Bello?{" "}
              <span className="text-warning">¡Evita El Sello De 'CERRADO' En Tu Negocio!</span>
            </h1>
            {/* --- CAMBIO: Subtítulo mejorado --- */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Gestionamos los 8 requisitos legales por ti. Habla con un abogado especialista
            	<span className="font-bold"> ahora</span> por WhatsApp y opera con tranquilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
            	onClick={openWhatsApp}
            	className="bg-whatsapp hover:bg-whatsapp-hover text-white font-bold rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-6 py-4 md:text-lg md:px-8"
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

    <!- Problem Section - El Riesgo -->
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
    	<div className="max-w-6xl mx-auto">
    	  <div className="text-center mb-12">
    		<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
    		  Las Inspecciones Son Reales y las Sanciones También
    		</h2>
    		<p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
    		  La Alcaldía está realizando operativos sorpresa en el Municipio de Bello Antioquia.{" "}
    		  <span className="font-semibold text-destructive">
    			Un solo documento faltante puede significar el cierre temporal de tu establecimiento,
    			multas significativas y la pérdida de tus ventas.
    		  </span>
    		</p>
    	  </div>

    	  <h3 className="text-2xl font-bold text-center text-foreground mb-8">
    		NO DEJES QUE ESTO TE PASE 
    	  </h3>

    	  {/* Div para limitar el ancho en escritorio y centrarlo */}
    	  <div className="md:max-w-5xl mx-auto">
    		<div className="grid md:grid-cols-2 gap-6 items-start justify-items-center">
    		  
    		  {/* --- ⚠️ CAMBIO: Se reemplaza "md:max-w-md" por "max-w-sm" --- */}
    		  <Card className="overflow-hidden shadow-lg flex flex-col w-full max-w-sm">
    			{/* --- CAMBIO AQUÍ: Añadida 'aspect-video' para forzar formato 16:9 --- */}
    			<div className="aspect-video">
    			  <video
    				// --- CAMBIO AQUÍ: Añadido 'h-full' para que el video llene el div ---
    				className="w-full h-full object-cover"
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
    			  <p className="font-semibold text-center text-foreground">OPERATIVOS REALES EN BELLO</p>
    			</div>
    		  </Card>

    		  {/* --- ⚠️ CAMBIO: Se reemplaza "md:max-w-md" por "max-w-sm" --- */}
    		  <Card className="overflow-hidden shadow-lg flex flex-col w-full max-w-sm"> 
    			{/* --- CAMBIO AQUÍ: Añadida 'aspect-video' para forzar formato 16:9 --- */}
    			<div className="aspect-video"> 
    			  <video
    				// --- CAMBIO AQUÍ: Añadido 'h-full' para que el video llene el div ---
    				className="w-full h-full object-cover"
    				autoPlay
    				muted
    				loop
    				playsInline
    				controls
    				preload="auto"
    			  >
    				<source src="https://res.cloudinary.com/dz9ktwtyo/video/upload/v1762900561/Dise%C3%B1o_sin_t%C3%ADtulo_jis8c5.mp4" type="video/mp4" />
    				Tu navegador no soporta el video.
    			  </video>
    			</div>
    			<div className="p-4 bg-card">
    			  <p className="font-semibold text-center text-foreground">CIERRE DE ESTABLECIMIENTOS</p>
    			</div>
    		  </Card>

    		  {/* Columna 3: Alerta */}
    		  <Card className="p-6 flex flex-col justify-center bg-destructive/10 border-destructive/20 h-full md:col-span-2 md:max-w-xl md:mx-auto w-full">
    			<AlertTriangle className="text-destructive mb-4 mx-auto" size={48} />
    			<h4 className="text-xl font-bold text-foreground mb-2 text-center">
    			  NO TE ARRIESGUES TU INVERSIÓN
    			</h4>
    			<p className="text-foreground/70 mb-6 text-center">
    			  Cientos de comerciantes en Bello y alrededores ya han enfrentado sanciones por su documentación incompleta.
    			  No seas el siguiente.
    			</p>
    			<Button
    			  onClick={openWhatsApp}
    			  variant="destructive"
    			  className="font-semibold w-full"
    			>
    			  <AlertTriangle className="mr-2 h-4 w-4" />
    			  ¡Necesito ayuda!
    			</Button>
    		  </Card>
    		</div>
    	  </div>
    	</div>
      </div>
    </section>

    <!- Solution Section - Los 8 Requisitos -->
    <section id="requisitos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
    	<div className="max-w-6xl mx-auto">
    	  <div className="text-center mb-12">
    		<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
    		  Nosotros nos encargamos de <span className="text-primary">TODO el papeleo</span>
    		</h2>
    		<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
    		  No pierdas tiempo en filas ni te enredes con trámites. Nuestro equipo legal gestiona por ti:
    		</p>
    	  </div>

    	  <div className="grid md:grid-cols-2 gap-6">
    		{requirements.map((req, index) => (
    		  <RequirementItem key={index} title={req.title} description={req.description} />
    		))}
    	  </div>
    	</div>
      </div>
    </section>

    <!- How It Works Section -->
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
    	<div className="max-w-5xl mx-auto">
    	  <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
    		Empieza en 3 Pasos Simples
    	  </h2>

    	  <div className="grid md:grid-cols-3 gap-8">
    		{/* --- CAMBIO: Se mejoran los pasos con íconos --- */}
    		<Card className="p-8 text-center">
    		  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
    			<Search className="h-8 w-8" />
    		  </div>
    		  <h3 className="text-xl font-bold text-foreground mb-3">1. Contáctanos por WhatsApp</h3>
    		  <p className="text-muted-foreground">
    			Haz clic y envíanos un mensaje. La consulta inicial es rápida.
    		  </p>
    		</Card>

    		<Card className="p-8 text-center">
    		  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
    			<FileSignature className="h-8 w-8" />
    		  </div>
    		  <h3 className="text-xl font-bold text-foreground mb-3">2. Auditamos tu Caso</h3>
    		  <p className="text-muted-foreground">
    			Revisamos qué documentos tienes y cuáles faltan.
    		  </p>
    		</Card>

    		<Card className="p-8 text-center">
    		  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
    			<ShieldCheck className="h-8 w-8" />
    		  </div>
    		  <h3 className="text-xl font-bold text-foreground mb-3">3. Gestionamos y Entregamos</h3>
    		  <p className="text-muted-foreground">
    			Nos movemos rápido para obtener tus permisos y que puedas trabajar sin miedo.
    		  </p>
    		</Card>
    	  </div>

    	  <div className="text-center mt-12">
    		<Button
    		  onClick={openWhatsApp}
    		  size="lg"
    		  className="bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold"
    		>
    		  <Phone className="mr-2 h-5 w-5" />
    		  Enviar mensaje ahora
    		</Button>
    	  </div>
    	</div>
      </div>
    </section>

    <!- About Section -->
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
    	<div className="max-w-5xl mx-auto">
    	  <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
    		Asesoría Experta en Derecho Comercial
    	  </h2>

    	  <div className="grid md:grid-cols-2 gap-12 items-center">
    		<div className="order-2 md:order-1">
    		  <img
    			src={attorneyPhoto}
    			alt={ATTORNEY_NAME}
    			className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
    			loading="lazy"
    		  />
    		</div>

    		<div className="order-1 md:order-2 space-y-6">
    		  <p className="text-lg text-foreground/90 leading-relaxed">
    			Soy <span className="font-bold text-primary">{ATTORNEY_NAME}</span>, abogado
    			especialista en derecho comercial y administrativo. Entiendo la frustración del
    			comerciante. Mi trabajo es ser tu aliado para que la burocracia no detenga tu éxito.
    		  </p>
    		  <p className="text-lg text-foreground/90 leading-relaxed">
    			Llevamos <span className="font-bold">{YEARS_EXPERIENCE} años</span> ayudando a
    			negocios como el tuyo en Bello y áreas cercanas.
    		  </p>

    		  <div className="flex flex-wrap gap-4 pt-4">
    			<div className="flex items-center gap-2 text-muted-foreground">
    			  <Shield className="text-primary" size={24} />
    			  <span>Especialista certificado</span>
    			</div>
    			<div className="flex items-center gap-2 text-muted-foreground">
    			  <FileCheck className="text-primary" size={24} />
    			  <span>Casos exitosos</span>
    			</div>
    		  </div>
    		</div>
    	  </div>
    	</div>
      </div>
    </section>

    <!- Final CTA Section -->
    <section className="py-16 md:py-24 hero-gradient text-white">
      <div className="container mx-auto px-4 text-center">
    	<div className="max-w-4xl mx-auto space-y-8">
    	  <h2 className="text-3xl md:text-5xl font-bold">
    		¿Vas a esperar a que lleguen a tu local?
    	  </h2>
    	  <p className="text-xl md:text-2xl text-white/90">
    		No arriesgues tu inversión y el trabajo de tantos años. Asegura tu tranquilidad hoy
    		mismo.
    	  </p>
    	  <Button
    		onClick={openWhatsApp}
    		className="bg-whatsapp hover:bg-whatsapp-hover text-white font-bold rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-6 py-4 md:text-lg md:px-8"
    	  >
    		<Phone className="mr-2 h-5 w-5" />
    		HABLAR CON EL ABOGADO AHORA
    	  </Button>
    	   {/* --- CAMBIO: Texto CTA para bot --- */}
    	  <p className="text-white/80 text-sm md:text-base">
    		<Clock className="inline mr-2" size={18} />
    		Respuesta inmediata 24/7 (Inicia con nuestro asistente virtual)
    	  </p>
    	</div>
      </div>
    </section>

    <!- Footer -->
    <footer id="contacto" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
    	<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    	  <div>
    		<h3 className="text-xl font-bold mb-4">Asesoría Legal Comercial</h3>
    		<p className="text-primary-foreground/80">
    		  Evitamos el cierre de tu negocio en Bello y zonas cercanas
    		</p>
    	  </div>

    	  <div>
    		<h3 className="text-xl font-bold mb-4">Contacto</h3>
    		<div className="space-y-2 text-primary-foreground/80">
    		  <p className="flex items-center gap-2">
    			<MapPin size={18} />
    			{ADDRESS}
    		  </p>
  _ 		  <p className="flex items-center gap-2">
    			<Phone size={18} />
    			{/* --- CAMBIO: Se usa el número de WhatsApp (o puedes poner uno fijo) --- */}
    			+57 3XX XXX XXXX
    		  </p>
    		  <p className="flex items-center gap-2">
    			<Mail size={18} />
    			{EMAIL}
    		  </p>
    		</div>
    	  </div>

    	  <div>
    		<h3 className="text-xl font-bold mb-4">Horario</h3>
    		<p className="text-primary-foreground/80">
    		  Lunes a Domingo
    		  <br />
    		  8:00 AM - 8:00 PM
    		  <br />
    		  <span className="text-sm">Atención de emergencias 24/7</span>
    		</p>
    	  </div>
    	</div>

    	<div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
    	  <p>La información aquí provista no sustituye asesoría personalizada.</p>
    	  <p className="mt-2">
    		© {new Date().getFullYear()} {ATTORNEY_NAME}. Todos los derechos reservados.
    	  </p>
    	</div>
      </div>
    </footer>

    {/* Floating WhatsApp Button */}
    <WhatsAppFloat onClick={openWhatsApp} />
  </div>
  );
};

export default Index;
