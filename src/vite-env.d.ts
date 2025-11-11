/// <reference types="vite/client" />

// --- INICIO DE LA MODIFICACIÓN ---
// Esto le dice a TypeScript cómo manejar la importación de archivos de medios

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
// --- FIN DE LA MODIFICACIÓN ---/// <reference types="vite/client" />
