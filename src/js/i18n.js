/**
 * ScienceBatch Web - Internationalization (i18n) Module
 * English & Spanish Support with LocalStorage persistence and browser auto-detection
 */

export const translations = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.showcase": "Showcase",
    "nav.comparison": "Comparison",
    "nav.install": "Install",
    "nav.architecture": "Architecture",
    "nav.faq": "FAQ",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "High-Performance Desktop LaTeX & Typst Studio",
    "hero.title_start": "The Ultra-Fast,",
    "hero.title_highlight": "100% Offline",
    "hero.title_end": "LaTeX & Typst Editor",
    "hero.description": "Say goodbye to 5GB TeX Live installs and slow cloud queues. Powered by in-memory VFS compilation with Tectonic and Typst, Monaco IntelliSense, and sub-40ms builds with zero disk pollution.",
    "hero.cta_download": "Download for",
    "hero.cta_prerelease": "View on GitHub (v0.1.0 Beta)",
    "hero.cta_subtext_active": "Free & Open Source · Apache 2.0 License",
    "hero.cta_subtext_prerelease": "Releases rolling out · Clone & build locally or star repo",
    "hero.dropdown_title": "Choose platform package",
    "hero.other_platforms": "All platforms",
    "hero.btn_source": "Source Code",

    // Stats Bar
    "stats.ram_disk": "0 Bytes Disk Pollution",
    "stats.ram_disk_sub": "All compilation in RAM VFS",
    "stats.compile_time": "< 50ms Compilation",
    "stats.compile_time_sub": "Typst & Tectonic native speed",
    "stats.offline": "100% Offline & Private",
    "stats.offline_sub": "Your manuscripts never leave your machine",
    "stats.memory": "< 90 MB RAM Footprint",
    "stats.memory_sub": "Built with Tauri v2 & Rust",

    // Showcase
    "showcase.badge": "Interface Experience",
    "showcase.title": "Engineered for speed, precision, and zero clutter",
    "showcase.subtitle": "A distraction-free dual panel workspace: Contextual Monaco IntelliSense on the left, hardware-accelerated PDF viewer on the right.",
    "showcase.tab_latex": "paper.tex (LaTeX IEEEtran)",
    "showcase.tab_typst": "document.typ (Modern Typst)",
    "showcase.status_ready": "RAM VFS Compilation: Ready",
    "showcase.status_perf": "Time: 34ms · Auxiliary disk files: 0",
    "showcase.editor_caption": "Monaco Editor with custom citation suggestions and label resolvers",
    "showcase.pdf_caption": "Hardware-accelerated PDF.js canvas with persistent zoom and sub-pixel text",

    // Features
    "features.badge": "Why ScienceBatch?",
    "features.title": "Everything you need to write world-class scientific papers",
    "features.subtitle": "Designed from the ground up to solve the real frustrations of both traditional TeX distributions and cloud-based editors.",
    
    "feature.vfs.title": "In-Memory RAM Compilation",
    "feature.vfs.desc": "Zero `.aux`, `.log`, `.synctex`, or `.out` clutter left on your drive. Tectonic and Typst compile in an isolated RAM virtual file system, streaming binary PDF bytes straight to the viewer.",
    
    "feature.polyglot.title": "Polyglot LaTeX & Typst",
    "feature.polyglot.desc": "Seamlessly switch between XeTeX/Tectonic for LaTeX and modern Typst in the same workspace. Full support for document classes, macros, and math numbering.",

    "feature.worker.title": "Zero-Crash Worker Subprocess",
    "feature.worker.desc": "Compilation tasks run inside an isolated child worker (`sciencebatch --compile-worker`). TeX syntax crashes or C-level panics will never freeze or kill your editor.",

    "feature.academic.title": "Academic Document Parity",
    "feature.academic.desc": "Built-in offline support for IEEEtran, ACM art, Springer llncs, and CurVe CV. Full icon namespaces: FontAwesome 5, SimpleIcons, and Academicons.",

    "feature.intellisense.title": "Smart Monaco IntelliSense",
    "feature.intellisense.desc": "Contextual autocomplete for 120+ LaTeX commands, instant auto-scanned `\\cite{` keys from `.bib` files, and dynamic `\\ref{` anchors.",

    "feature.privacy.title": "100% Private & Autonomous",
    "feature.privacy.desc": "No cloud subscriptions, no downtime during conferences, and zero corporate telemetry. Your confidential manuscripts and thesis data stay strictly on your local disk.",

    // Comparison Table
    "comparison.badge": "Feature Comparison",
    "comparison.title": "How ScienceBatch Compares",
    "comparison.subtitle": "See how a lightweight Rust-powered desktop studio stacks up against the alternatives.",
    "table.feature": "Feature",
    "table.sb": "ScienceBatch",
    "table.overleaf": "Overleaf (Cloud)",
    "table.texstudio": "TeXstudio / VS Code",
    "row.offline": "100% Offline Capability",
    "row.disk": "Zero Auxiliary Disk Pollution",
    "row.typst": "Native Typst + LaTeX in One",
    "row.ram": "Lightweight RAM Usage",
    "row.packages": "On-Demand Package Resolution",
    "row.crash": "Isolated Subprocess Worker",
    "row.cost": "Cost & Licensing",
    "cost.sb": "Free & Open Source",
    "cost.overleaf": "Freemium / Monthly Fee",
    "cost.texstudio": "Free / Manual Setup",

    // Installation
    "install.badge": "Installation & Setup",
    "install.title": "Get up and running in seconds",
    "install.subtitle": "Available for Linux, Windows, and macOS. Grab the pre-built installer or compile directly with Cargo and Tauri.",
    "install.tab_linux": "Linux (Debian / Ubuntu / Arch)",
    "install.tab_windows": "Windows",
    "install.tab_macos": "macOS",
    "install.tab_source": "Build from Source",
    "install.btn_copy": "Copy",
    "install.copied": "Copied to clipboard!",

    // Architecture
    "arch.badge": "System Architecture",
    "arch.title": "High performance through modern systems design",
    "arch.subtitle": "Built on Rust and Tauri v2 for microscopic resource consumption and native binary execution.",
    "arch.layer_frontend": "Frontend Studio",
    "arch.layer_frontend_desc": "React 18 + Monaco Editor + PDF.js canvas running inside an ultra-lean OS Webview with minimal overhead.",
    "arch.layer_ipc": "Tauri v2 IPC Gateway",
    "arch.layer_ipc_desc": "High-throughput binary streaming between the UI and backend with typed Rust commands and async progress events.",
    "arch.layer_worker": "Isolated Compile Worker",
    "arch.layer_worker_desc": "Subprocess running Tectonic and Typst with an in-memory VFS, ensuring GUI stability and instant zero-disk compilation.",

    // FAQ
    "faq.badge": "Frequently Asked Questions",
    "faq.title": "Everything you need to know",
    "faq.q1": "Do I need to download a 5 GB TeX Live distribution first?",
    "faq.a1": "No! ScienceBatch eliminates the need for massive TeX Live or MacTeX installations. It uses Tectonic's on-demand package resolver that automatically fetches and caches only the exact CTAN packages your document uses, directly in RAM.",
    "faq.q2": "Can I open and edit my existing Overleaf or local LaTeX projects?",
    "faq.a2": "Yes, absolutely. ScienceBatch has a native workspace folder scanner that automatically parses multi-file projects, subfolders (`figures/`, `sections/`), custom `.cls` / `.sty` class files, and `.bib` bibliography files.",
    "faq.q3": "How does in-memory RAM compilation work?",
    "faq.a3": "Traditional TeX compilers write numerous temporary files (`.aux`, `.log`, `.synctex.gz`, `.bbl`, `.blg`) directly to your project folder. ScienceBatch mounts an isolated Virtual File System (VFS) in RAM during compilation and pipes the resulting PDF binary directly to the GPU canvas.",
    "faq.q4": "Why did you build ScienceBatch with Tauri instead of Electron?",
    "faq.a4": "Electron bundles a full Chromium browser and Node.js runtime with each app, often consuming 1.5 GB to 2 GB of RAM. Tauri v2 leverages your operating system's native webview and high-performance Rust, resulting in an app that uses less than 90 MB of RAM.",
    "faq.q5": "Is ScienceBatch really free and open source?",
    "faq.a5": "Yes, ScienceBatch is released under the permissive Apache 2.0 License. You can inspect the code, compile it from source, contribute, and use it freely for personal, academic, or commercial research.",

    // Footer
    "footer.desc": "Ultra-fast, 100% offline desktop alternative for LaTeX and Typst typesetting. Zero disk pollution, pure performance.",
    "footer.links_title": "Project",
    "footer.community_title": "Community",
    "footer.legal_title": "Open Source",
    "footer.releases": "Releases & Binaries",
    "footer.issues": "Report an Issue",
    "footer.contributing": "Contributing Guide",
    "footer.license": "Apache 2.0 License",
    "footer.rights": "ScienceBatch. Created with Rust & TypeScript.",
    "footer.portfolio_link": "Developer Portfolio"
  },
  es: {
    // Navigation
    "nav.features": "Características",
    "nav.showcase": "Interfaz",
    "nav.comparison": "Comparativa",
    "nav.install": "Instalación",
    "nav.architecture": "Arquitectura",
    "nav.faq": "Preguntas",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "Estudio de Escritorio de Alto Rendimiento para LaTeX y Typst",
    "hero.title_start": "El Editor de LaTeX y Typst",
    "hero.title_highlight": "100% Offline",
    "hero.title_end": "Ultrarrápido",
    "hero.description": "Dile adiós a las instalaciones de 5GB de TeX Live y a las colas lentas en la nube. Compilación VFS en memoria RAM con Tectonic y Typst nativo, Monaco IntelliSense y compilaciones en menos de 40ms sin ensuciar tu disco.",
    "hero.cta_download": "Descargar para",
    "hero.cta_prerelease": "Ver en GitHub (v0.1.0 Beta)",
    "hero.cta_subtext_active": "Gratuito y de Código Abierto · Licencia Apache 2.0",
    "hero.cta_subtext_prerelease": "Versión en desarrollo · Compila localmente o apoya con una estrella",
    "hero.dropdown_title": "Elegir paquete de instalación",
    "hero.other_platforms": "Todas las plataformas",
    "hero.btn_source": "Código Fuente",

    // Stats Bar
    "stats.ram_disk": "0 Bytes de Basura en Disco",
    "stats.ram_disk_sub": "Toda la compilación en RAM VFS",
    "stats.compile_time": "< 50ms por Compilación",
    "stats.compile_time_sub": "Velocidad nativa Typst & Tectonic",
    "stats.offline": "100% Offline y Privado",
    "stats.offline_sub": "Tus manuscritos nunca salen de tu equipo",
    "stats.memory": "< 90 MB de RAM",
    "stats.memory_sub": "Desarrollado con Tauri v2 y Rust",

    // Showcase
    "showcase.badge": "Experiencia de Interfaz",
    "showcase.title": "Diseñado para velocidad, precisión y cero desorden",
    "showcase.subtitle": "Un espacio de trabajo dual sin distracciones: Monaco IntelliSense contextual a la izquierda, visor PDF acelerado por hardware a la derecha.",
    "showcase.tab_latex": "paper.tex (LaTeX IEEEtran)",
    "showcase.tab_typst": "document.typ (Modern Typst)",
    "showcase.status_ready": "Compilación RAM VFS: Lista",
    "showcase.status_perf": "Tiempo: 34ms · Archivos auxiliares en disco: 0",
    "showcase.editor_caption": "Editor Monaco con autocompletado inteligente de citas y anclas de etiquetas",
    "showcase.pdf_caption": "Canvas PDF.js acelerado por hardware con zoom persistente y texto subpíxel",

    // Features
    "features.badge": "¿Por qué ScienceBatch?",
    "features.title": "Todo lo que necesitas para redactar papers científicos de primer nivel",
    "features.subtitle": "Diseñado desde cero para resolver las frustraciones reales tanto de las distribuciones TeX tradicionales como de los editores en la nube.",
    
    "feature.vfs.title": "Compilación en Memoria RAM",
    "feature.vfs.desc": "Cero archivos `.aux`, `.log`, `.synctex` o `.out` ensuciando tu disco. Tectonic y Typst compilan en un sistema de archivos virtual en RAM, transmitiendo el PDF binario directamente al visor.",
    
    "feature.polyglot.title": "Estudio Políglota LaTeX & Typst",
    "feature.polyglot.desc": "Alterna fluidamente entre XeTeX/Tectonic para LaTeX y el moderno Typst en un solo espacio. Soporte completo para clases académicas, macros y numeración matemática.",

    "feature.worker.title": "Proceso Worker Anti-Cuelgues",
    "feature.worker.desc": "Las tareas de compilación corren en un subproceso hijo aislado (`sciencebatch --compile-worker`). Los errores de sintaxis TeX o panics en C jamás congelarán tu editor.",

    "feature.academic.title": "Paridad con Clases Académicas",
    "feature.academic.desc": "Soporte nativo offline para IEEEtran, ACM art, Springer llncs y CurVe CV. Familias completas de iconos: FontAwesome 5, SimpleIcons y Academicons.",

    "feature.intellisense.title": "Monaco IntelliSense Contextual",
    "feature.intellisense.desc": "Autocompletado instantáneo de más de 120 comandos LaTeX, claves de citas `\\cite{` extraídas en vivo de archivos `.bib`, y anclas `\\ref{` dinámicas.",

    "feature.privacy.title": "100% Privado y Autónomo",
    "feature.privacy.desc": "Sin suscripciones a la nube, sin caídas de servidor durante fechas límite y sin telemetría invasiva. Tus manuscritos confidenciales y tesis se quedan en tu máquina.",

    // Comparison Table
    "comparison.badge": "Tabla Comparativa",
    "comparison.title": "Comparativa de ScienceBatch",
    "comparison.subtitle": "Comprueba cómo un estudio de escritorio impulsado por Rust supera a las alternativas tradicionales.",
    "table.feature": "Característica",
    "table.sb": "ScienceBatch",
    "table.overleaf": "Overleaf (Nube)",
    "table.texstudio": "TeXstudio / VS Code",
    "row.offline": "Funcionamiento 100% Offline",
    "row.disk": "Cero Archivos Basura en Disco",
    "row.typst": "Soporte Typst + LaTeX Nativo",
    "row.ram": "Consumo de Memoria RAM",
    "row.packages": "Descarga de Paquetes On-Demand",
    "row.crash": "Subproceso Aislado Anti-Cuelgues",
    "row.cost": "Costo y Licenciamiento",
    "cost.sb": "Gratis y Open Source",
    "cost.overleaf": "Freemium / Cuota mensual",
    "cost.texstudio": "Gratis / Configuración manual",

    // Installation
    "install.badge": "Instalación y Configuración",
    "install.title": "Empieza a trabajar en cuestión de segundos",
    "install.subtitle": "Disponible para Linux, Windows y macOS. Descarga el instalador o compila directamente con Cargo y Tauri.",
    "install.tab_linux": "Linux (Debian / Ubuntu / Arch)",
    "install.tab_windows": "Windows",
    "install.tab_macos": "macOS",
    "install.tab_source": "Compilar desde Fuente",
    "install.btn_copy": "Copiar",
    "install.copied": "¡Copiado al portapapeles!",

    // Architecture
    "arch.badge": "Arquitectura de Sistemas",
    "arch.title": "Máximo rendimiento mediante diseño de sistemas moderno",
    "arch.subtitle": "Construido sobre Rust y Tauri v2 para un consumo de recursos microscópico y ejecución nativa.",
    "arch.layer_frontend": "Estudio Frontend",
    "arch.layer_frontend_desc": "React 18 + Editor Monaco + Canvas PDF.js ejecutándose en un Webview nativo ultra ligero sin sobrecostes.",
    "arch.layer_ipc": "Pasarela IPC de Tauri v2",
    "arch.layer_ipc_desc": "Transmisión binaria de alto flujo entre la interfaz y el backend mediante comandos tipados de Rust y eventos asíncronos.",
    "arch.layer_worker": "Worker Aislado de Compilación",
    "arch.layer_worker_desc": "Subproceso que ejecuta Tectonic y Typst con un VFS en memoria RAM, garantizando estabilidad total y cero archivos en disco.",

    // FAQ
    "faq.badge": "Preguntas Frecuentes",
    "faq.title": "Todo lo que necesitas saber",
    "faq.q1": "¿Necesito descargar una distribución de TeX Live de 5 GB primero?",
    "faq.a1": "¡No! ScienceBatch elimina la necesidad de instalaciones gigantescas de TeX Live o MacTeX. Utiliza el gestor dinámico de Tectonic que descarga y almacena en caché en memoria solo los paquetes CTAN específicos que tu documento utiliza.",
    "faq.q2": "¿Puedo abrir y editar mis proyectos existentes de Overleaf o LaTeX local?",
    "faq.a2": "Sí, totalmente. ScienceBatch incluye un explorador nativo que analiza proyectos multicarpetas (`figures/`, `sections/`), archivos de clase personalizados `.cls` / `.sty` y bibliografías `.bib` de forma instantánea.",
    "faq.q3": "¿Cómo funciona la compilación en memoria RAM sin ensuciar mi disco?",
    "faq.a3": "Los compiladores TeX clásicos escriben decenas de archivos temporales (`.aux`, `.log`, `.synctex.gz`, `.out`) en la carpeta de tu paper. ScienceBatch monta un sistema de archivos virtual (VFS) en memoria RAM y envía el PDF resultante directamente al lienzo de pantalla.",
    "faq.q4": "¿Por qué desarrollaron ScienceBatch con Tauri en lugar de Electron?",
    "faq.a4": "Electron empaqueta un navegador Chromium entero y un entorno Node.js, consumiendo habitualmente entre 1.5 y 2 GB de RAM. Tauri v2 aprovecha el motor web nativo de tu sistema operativo junto con Rust, manteniendo el consumo por debajo de 90 MB de RAM.",
    "faq.q5": "¿ScienceBatch es realmente gratis y de código abierto?",
    "faq.a5": "Sí, ScienceBatch se distribuye bajo la licencia permisiva Apache 2.0. Puedes auditar el código, compilarlo desde la fuente, contribuir y utilizarlo libremente para investigación personal, académica o comercial.",

    // Footer
    "footer.desc": "Alternativa de escritorio ultrarrápida y 100% offline para tipografía científica con LaTeX y Typst. Cero basura en disco, puro rendimiento.",
    "footer.links_title": "Proyecto",
    "footer.community_title": "Comunidad",
    "footer.legal_title": "Código Abierto",
    "footer.releases": "Versiones y Binarios",
    "footer.issues": "Reportar un Problema",
    "footer.contributing": "Guía de Contribución",
    "footer.license": "Licencia Apache 2.0",
    "footer.rights": "ScienceBatch. Creado con Rust y TypeScript.",
    "footer.portfolio_link": "Portafolio del Creador"
  }
};

let currentLanguage = 'en';

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'es') lang = 'en';
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('sb_lang', lang);
    } catch {}
    if (document.documentElement) {
      document.documentElement.lang = lang;
    }
    applyTranslations();
    updateLanguageUI();
  }
}

export function t(key) {
  return translations[currentLanguage]?.[key] || translations['en']?.[key] || key;
}

export function applyTranslations() {
  if (typeof document === 'undefined') return;
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text) {
      el.textContent = text;
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = t(key);
    if (text) {
      el.setAttribute('placeholder', text);
    }
  });

  const titles = document.querySelectorAll('[data-i18n-title]');
  titles.forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    const text = t(key);
    if (text) {
      el.setAttribute('title', text);
    }
  });
}

function updateLanguageUI() {
  if (typeof document === 'undefined') return;
  const btnEn = document.getElementById('lang-btn-en');
  const btnEs = document.getElementById('lang-btn-es');
  
  if (btnEn && btnEs) {
    if (currentLanguage === 'en') {
      btnEn.classList.add('bg-slate-700', 'text-white', 'shadow-sm');
      btnEn.classList.remove('text-slate-400');
      btnEs.classList.remove('bg-slate-700', 'text-white', 'shadow-sm');
      btnEs.classList.add('text-slate-400');
    } else {
      btnEs.classList.add('bg-slate-700', 'text-white', 'shadow-sm');
      btnEs.classList.remove('text-slate-400');
      btnEn.classList.remove('bg-slate-700', 'text-white', 'shadow-sm');
      btnEn.classList.add('text-slate-400');
    }
  }
}

export function initI18n() {
  if (typeof window === 'undefined') return;
  let saved = null;
  try {
    saved = localStorage.getItem('sb_lang');
  } catch {}

  if (saved === 'en' || saved === 'es') {
    currentLanguage = saved;
  } else {
    const browserLang = (navigator?.language || navigator?.userLanguage || '').toLowerCase();
    currentLanguage = browserLang.startsWith('es') ? 'es' : 'en';
  }
  
  if (document.documentElement) {
    document.documentElement.lang = currentLanguage;
  }
  applyTranslations();
  updateLanguageUI();

  // Attach button events
  const btnEn = document.getElementById('lang-btn-en');
  const btnEs = document.getElementById('lang-btn-es');
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnEs) btnEs.addEventListener('click', () => setLanguage('es'));
}
