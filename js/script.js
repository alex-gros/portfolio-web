(function () {
  var dict = {
    "hero.label": { es: "EXPEDIENTE PROFESIONAL", en: "PROFESSIONAL PROFILE" },
    "hero.role": { es: "Analista de Transformación de Procesos en Marlex · Técnico en Desarrollo de Aplicaciones Multiplataforma (DAM)", en: "Process Transformation Analyst at Marlex · Multiplatform App Development graduate" },
    "hero.intro": { es: "Trabajo en el punto de encuentro entre la mejora de procesos y el desarrollo de software: analizo cómo funcionan los sistemas y construyo las herramientas para hacerlos mejores.", en: "I work where process improvement meets software development: I analyze how systems work and build the tools to make them better." },
    "hero.cta.contact": { es: "Contactar", en: "Get in touch" },

    "about.title": { es: "Sobre mí", en: "About" },
    "about.p1": { es: "Combino mi trabajo como Analista de Transformación de Procesos en Marlex con la formación técnica en Desarrollo de Aplicaciones Multiplataforma (DAM) que completé en el Institut Montilivi. Esta combinación me permite mirar los problemas desde dos ángulos: el del negocio, que necesita procesos más claros y eficientes, y el técnico, que los convierte en soluciones reales.", en: "I combine my work as Process Transformation Analyst at Marlex with the technical background in Multiplatform App Development (DAM) I completed at Institut Montilivi. This combination lets me look at problems from two angles: the business side, which needs clearer and more efficient processes, and the technical side, which turns them into real solutions." },
    "about.p2": { es: "Antes de esto pasé varios años como repartidor en Pizzería Ñam Ñam, una etapa que me enseñó el valor de la organización, la rapidez de reacción y el trato con las personas — cualidades que hoy aplico de otra forma, pero con la misma exigencia.", en: "Before this I spent several years as a delivery driver at Pizzería Ñam Ñam, a stage that taught me the value of organization, quick thinking and dealing with people — qualities I apply differently today, but with the same rigor." },
    "about.lang.ca": { es: "Catalán — nativo", en: "Catalan — native" },
    "about.lang.es": { es: "Español — nativo", en: "Spanish — native" },
    "about.lang.en": { es: "Inglés — intermedio", en: "English — intermediate" },

    "exp.title": { es: "Experiencia profesional", en: "Professional experience" },
    "exp.1.role": { es: "Analista de Transformación de Procesos", en: "Process Transformation Analyst" },
    "exp.1.meta": { es: "MAYO 2026 — ACTUALIDAD", en: "MAY 2026 — PRESENT" },
    "exp.1.desc": { es: "Análisis y mejora de procesos internos, identificando ineficiencias y proponiendo soluciones que combinan cambio organizativo y herramientas digitales.", en: "Analysis and improvement of internal processes, identifying inefficiencies and proposing solutions that combine organizational change and digital tools." },
    "exp.2.role": { es: "Process Transformation Interim", en: "Process Transformation Interim" },
    "exp.2.meta": { es: "DICIEMBRE 2025 — MAYO 2026", en: "DECEMBER 2025 — MAY 2026" },
    "exp.2.desc": { es: "Incorporación al equipo de transformación de procesos, dando soporte en el análisis y documentación de flujos de trabajo.", en: "Joined the process transformation team, supporting the analysis and documentation of workflows." },
    "exp.3.role": { es: "Repartidor", en: "Delivery driver" },
    "exp.3.meta": { es: "2021 — 2025", en: "2021 — 2025" },
    "exp.3.desc": { es: "Gestión de rutas y entregas, atención al cliente y trabajo bajo presión en horas punta.", en: "Route and delivery management, customer service and working under pressure during peak hours." },

    "edu.title": { es: "Educación", en: "Education" },
    "edu.1.role": { es: "CFGS Desarrollo de Aplicaciones Multiplataforma", en: "Vocational degree in Multiplatform App Development" },
    "edu.1.meta": { es: "2024 — 2026 · TITULADO", en: "2024 — 2026 · GRADUATED" },
    "edu.1.desc": { es: "Formación técnica en programación, bases de datos y desarrollo de aplicaciones para múltiples plataformas.", en: "Technical training in programming, databases and application development across multiple platforms." },
    "edu.2.role": { es: "Bachillerato Tecnológico", en: "Technological Baccalaureate" },
    "edu.2.meta": { es: "2021 — 2024", en: "2021 — 2024" },
    "edu.3.role": { es: "Educación Secundaria Obligatoria (ESO)", en: "Secondary Education (ESO)" },
    "edu.3.meta": { es: "2017 — 2021", en: "2017 — 2021" },

    "skills.title": { es: "Dos maneras de resolver problemas", en: "Two ways of solving problems" },
    "skills.dev.title": { es: "Código", en: "Code" },
    "skills.proc.title": { es: "Procesos", en: "Process" },
    "skills.proc.1": { es: "Análisis de procesos", en: "Process analysis" },
    "skills.proc.2": { es: "Mejora continua", en: "Continuous improvement" },
    "skills.proc.3": { es: "Documentación de flujos", en: "Workflow documentation" },
    "skills.proc.4": { es: "Excel avanzado", en: "Advanced Excel" },
    "skills.proc.5": { es: "Automatización de tareas", en: "Task automation" },
    "skills.note": { es: "Listado en crecimiento con cada proyecto en Marlex.", en: "Growing with every project at Marlex." },

    "proj.title": { es: "Proyectos", en: "Projects" },
    "proj.empty.label": { es: "EN CONSTRUCCIÓN", en: "UNDER CONSTRUCTION" },
    "proj.empty.text": { es: "Todavía no hay proyectos públicos que mostrar aquí. Iré publicando código en GitHub y enlazándolo desde esta sección.", en: "No public projects to show here yet. I'll publish code on GitHub and link it from this section." },

    "footer.title": { es: "Hablemos", en: "Let's talk" },
    "footer.sub": { es: "Abierto a oportunidades donde el desarrollo de software y la mejora de procesos se crucen.", en: "Open to opportunities where software development and process improvement meet." },
    "footer.email.label": { es: "EMAIL", en: "EMAIL" },
    "footer.meta": { es: "GIRONA, ESPAÑA", en: "GIRONA, SPAIN" }
  };

  var root = document.documentElement;
  var buttons = document.querySelectorAll(".langtoggle button");

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] && dict[key][lang]) el.textContent = dict[key][lang];
    });
    root.setAttribute("lang", lang);
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  }

  var stored = "es";
  try { stored = localStorage.getItem("portfolio-lang") || "es"; } catch (e) {}
  applyLang(stored);

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });
})();
