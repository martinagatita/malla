"use strict";

// ==============================
//  MALLA CURRICULAR INTERACTIVA
//  Carrera de salud (ramos en verdes)
// ==============================

// ----- 1. Definición de semestres y ramos -----
const semestres = [
  {
    nombre: "Semestre 1",
    ramos: [
      { id: "destrezas-i", nombre: "Destrezas I" },
      { id: "biocel", nombre: "Biocel" },
      { id: "anato-i", nombre: "Anato I" },
      { id: "fisica-i", nombre: "Física I" },
      { id: "quimica-i", nombre: "Química I" },
      { id: "histo-i", nombre: "Histo I" },
      { id: "ingles-i", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Semestre 2",
    ramos: [
      { id: "destrezas-ii", nombre: "Destrezas II" },
      { id: "anato-ii", nombre: "Anato II" },
      { id: "histo-ii", nombre: "Histo II" },
      { id: "fisica-ii", nombre: "Física II" },
      { id: "quimica-ii", nombre: "Química II" },
      { id: "ingles-ii", nombre: "Inglés II" },
      { id: "cfg-1", nombre: "CFG" }
    ]
  },
  {
    nombre: "Semestre 3",
    ramos: [
      { id: "simu-i", nombre: "Simu I" },
      { id: "pato", nombre: "Pato" },
      { id: "fisiobioq-i", nombre: "Fisiobioq I" },
      { id: "antropo-i", nombre: "Antropo I" },
      { id: "promo-i", nombre: "Promo I" },
      { id: "ingles-iii", nombre: "Inglés III" },
      { id: "cfg-2", nombre: "CFG" }
    ]
  },
  {
    nombre: "Semestre 4",
    ramos: [
      { id: "simu-ii", nombre: "Simu II" },
      { id: "semio", nombre: "Semio" },
      { id: "fisiobioq-ii", nombre: "Fisiobioq II" },
      { id: "antropo-ii", nombre: "Antropo II" },
      { id: "promo-ii", nombre: "Promo II" },
      { id: "ingles-vi", nombre: "Inglés VI" },
      { id: "cfg-3", nombre: "CFG" }
    ]
  },
  {
    nombre: "Semestre 5",
    ramos: [
      { id: "adulto-i", nombre: "Adulto I" },
      { id: "nino-i", nombre: "Niño I" },
      { id: "am-i", nombre: "AM I" },
      { id: "fundamentos-i", nombre: "Fundamentos I" },
      { id: "intervencion-i", nombre: "Intervención I" },
      { id: "gestion", nombre: "Gestión" }
    ]
  },
  {
    nombre: "Semestre 6",
    ramos: [
      { id: "adulto-ii", nombre: "Adulto II" },
      { id: "nino-ii", nombre: "Niño II" },
      { id: "am-ii", nombre: "AM II" },
      { id: "fundamentos-ii", nombre: "Fundamentos II" },
      { id: "farmaco", nombre: "Fármaco" },
      { id: "intervencion-ii", nombre: "Intervención II" }
    ]
  },
  {
    nombre: "Semestre 7",
    ramos: [
      { id: "adulto-iii", nombre: "Adulto III" }, // anual (no se muestra el texto)
      { id: "nino-iii", nombre: "Niño III" },    // anual
      { id: "am-iii", nombre: "AM III" },        // anual
      { id: "mantencion-i", nombre: "Mantención I" },
      { id: "urgencias-i", nombre: "Urgencias I" },
      {
        id: "proy-investigacion-i",
        nombre: "Proyecto de investigación I"
      }
    ]
  },
  {
    nombre: "Semestre 8",
    ramos: [
      {
        id: "proy-investigacion-ii",
        nombre: "Proyecto de investigación II"
      },
      { id: "mantencion-ii", nombre: "Mantención II" },
      { id: "urgencias-ii", nombre: "Urgencias II" }
    ]
  },
  {
    nombre: "Semestre 9",
    ramos: [
      { id: "adulto-iv", nombre: "Adulto IV" }, // anual
      { id: "nino-iv", nombre: "Niño IV" },     // anual
      { id: "am-iv", nombre: "AM IV" },         // anual
      {
        id: "proy-investigacion-iii",
        nombre: "Proyecto de investigación III"
      },
      {
        id: "clinica-integral-i",
        nombre: "Clínica integral I"
      },
      { id: "mantencion-iii", nombre: "Mantención III" },
      {
        id: "urgencias-multidisciplinarias",
        nombre: "Urgencias multidisciplinarias"
      },
      { id: "urgencias-medicas", nombre: "Urgencias médicas" }
    ]
  },
  {
    nombre: "Semestre 10",
    ramos: [
      {
        id: "proy-investigacion-iv",
        nombre: "Proyecto de investigación IV"
      },
      {
        id: "clinica-integral-ii",
        nombre: "Clínica integral II"
      },
      { id: "mantencion-iv", nombre: "Mantención IV" }
    ]
  },
  {
    nombre: "Semestre 11",
    ramos: [
      { id: "internado", nombre: "Internado" }
    ]
  },
  {
    nombre: "Semestre 12",
    ramos: [
      { id: "tesis-grado", nombre: "Tesis de grado" }
    ]
  }
];

// ----- 2. Requisitos por ramo (AND lógico) -----
// Si un ramo NO aparece en este objeto, se asume "sin requisitos".
const requisitos = {
  // Semestre 2
  "destrezas-ii": ["destrezas-i"],
  "anato-ii": ["biocel", "histo-i", "anato-i"],
  "histo-ii": ["biocel", "histo-i", "anato-i"],
  "fisica-ii": ["fisica-i"],
  "quimica-ii": ["quimica-i"],
  "ingles-ii": ["ingles-i"],
  // cfg-1 sin requisitos

  // Semestre 3
  "simu-i": ["destrezas-ii", "quimica-ii"],
  "pato": ["fisica-ii", "histo-ii", "anato-ii"],
  "fisiobioq-i": ["fisica-ii", "anato-ii", "histo-ii"],
  // antropo-i sin requisitos
  // promo-i sin requisitos
  "ingles-iii": ["ingles-ii"],
  // cfg-2 sin requisitos

  // Semestre 4
  "simu-ii": ["simu-i"],
  "semio": ["pato", "fisiobioq-i"],
  "fisiobioq-ii": ["pato", "fisiobioq-i"],
  "antropo-ii": ["antropo-i"],
  "promo-ii": ["promo-i", "antropo-i"],
  "ingles-vi": ["ingles-iii"],
  // cfg-3 sin requisitos

  // Semestre 5
  "adulto-i": ["simu-ii", "semio"],
  "nino-i": ["simu-ii", "semio"],
  "am-i": ["simu-ii", "semio"],
  "fundamentos-i": ["fisiobioq-ii"],
  "intervencion-i": ["antropo-ii", "promo-ii"],
  "gestion": ["promo-ii"],

  // Semestre 6
  "adulto-ii": ["adulto-i", "am-i"],
  "nino-ii": ["nino-i"],
  "am-ii": ["am-i", "adulto-i"],
  "fundamentos-ii": ["fundamentos-i"],
  "farmaco": ["fundamentos-i"],
  "intervencion-ii": ["intervencion-i"],

  // Semestre 7
  "adulto-iii": ["adulto-ii", "am-ii", "fundamentos-ii"],
  "nino-iii": ["nino-ii"],
  "am-iii": ["am-ii", "adulto-ii", "fundamentos-ii"],
  "proy-investigacion-i": [],
  "mantencion-i": ["intervencion-ii"],
  "urgencias-i": [
    "nino-ii",
    "adulto-ii",
    "am-ii",
    "fundamentos-ii",
    "farmaco"
  ],

  // Semestre 8
  "proy-investigacion-ii": ["proy-investigacion-i"],
  "mantencion-ii": ["mantencion-i"],
  "urgencias-ii": ["urgencias-i"],

  // Semestre 9
  "adulto-iv": ["adulto-iii", "am-iii"],
  "nino-iv": ["nino-iii"],
  "am-iv": ["am-iii", "adulto-iii"],
  "proy-investigacion-iii": ["proy-investigacion-ii"],
  "clinica-integral-i": [
    "urgencias-ii",
    "nino-iii",
    "am-iii",
    "adulto-iii"
  ],
  "mantencion-iii": ["mantencion-ii", "adulto-iii", "am-iii"],
  "urgencias-multidisciplinarias": ["urgencias-ii"],
  "urgencias-medicas": ["urgencias-ii"],

  // Semestre 10
  "proy-investigacion-iv": ["proy-investigacion-iii"],
  "clinica-integral-ii": ["clinica-integral-i"],
  "mantencion-iv": ["mantencion-iii"],

  // Semestre 11 y 12
  // internado y tesis se definen abajo con un chequeo especial
  "internado": [
    "urgencias-multidisciplinarias",
    "urgencias-medicas",
    "nino-iv",
    "adulto-iv",
    "am-iv",
    "mantencion-iv",
    "clinica-integral-ii",
    "proy-investigacion-iv"
  ],
  "tesis-grado": [
    "urgencias-multidisciplinarias",
    "urgencias-medicas",
    "nino-iv",
    "adulto-iv",
    "am-iv",
    "mantencion-iv",
    "clinica-integral-ii",
    "proy-investigacion-iv"
  ]
};

// ----- 3. Estado en memoria -----
let aprobados = new Set();  // IDs de ramos aprobados
let mapaRamos = {};         // id -> nombre (para mensajes)
let mensajeTimeoutId = null;
const STORAGE_KEY = "malla-salud-aprobados-v1";

// ==============================
//  INICIALIZACIÓN
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const contenedorMalla = document.getElementById("malla");
  if (!contenedorMalla) return;

  // Construimos mapa id -> nombre
  semestres.forEach(function (semestre) {
    semestre.ramos.forEach(function (ramo) {
      mapaRamos[ramo.id] = ramo.nombre;
    });
  });

  // Cargamos estado desde localStorage
  cargarEstadoDesdeStorage();

  // Renderizamos la malla
  semestres.forEach(function (semestre) {
    const columna = document.createElement("section");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.className = "semestre__titulo";
    titulo.textContent = semestre.nombre;
    columna.appendChild(titulo);

    const contRamos = document.createElement("div");
    contRamos.className = "semestre__ramos";

    semestre.ramos.forEach(function (ramo) {
      const item = document.createElement("div");
      item.className = "ramo";
      item.dataset.id = ramo.id;
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");

      // Tooltip con requisitos
      const reqs = requisitos[ramo.id] || [];
      if (reqs.length > 0) {
        const nombresReq = reqs.map(function (idReq) {
          return mapaRamos[idReq] || idReq;
        });
        item.title = "Requisitos: " + nombresReq.join(", ");
      } else {
        item.title = "Sin requisitos";
      }

      const spanNombre = document.createElement("span");
      spanNombre.className = "ramo__nombre";
      spanNombre.textContent = ramo.nombre;
      item.appendChild(spanNombre);

      // Restaurar estado aprobado
      if (aprobados.has(ramo.id)) {
        item.classList.add("aprobado");
        item.setAttribute("aria-pressed", "true");
      } else {
        item.setAttribute("aria-pressed", "false");
      }

      // Click / teclado
      item.addEventListener("click", manejarClickRamo);
      item.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          manejarClickRamo.call(item, evento);
        }
      });

      contRamos.appendChild(item);
    });

    columna.appendChild(contRamos);
    contenedorMalla.appendChild(columna);
  });

  actualizarBloqueos();
});

// ==============================
//  LÓGICA PRINCIPAL
// ==============================

/**
 * Maneja el clic en un ramo: toggle aprobado
 * con verificación de requisitos.
 */
function manejarClickRamo() {
  const idRamo = this.dataset.id;
  const yaAprobado = aprobados.has(idRamo);

  // Si ya estaba aprobado, lo desmarcamos
  if (yaAprobado) {
    aprobados.delete(idRamo);
    this.classList.remove("aprobado");
    this.setAttribute("aria-pressed", "false");
    guardarEstadoEnStorage();
    actualizarBloqueos();
    return;
  }

  // Verificamos requisitos
  const faltantes = obtenerRequisitosFaltantes(idRamo);

  if (faltantes.length > 0) {
    const nombresFaltantes = faltantes.map(function (id) {
      return mapaRamos[id] || id;
    });
    const nombreRamo = mapaRamos[idRamo] || idRamo;

    mostrarMensaje(
      'No puedes aprobar "' +
        nombreRamo +
        '" porque te faltan: ' +
        nombresFaltantes.join(", ") +
        "."
    );
    return;
  }

  // Requisitos OK: aprobar
  aprobados.add(idRamo);
  this.classList.add("aprobado");
  this.setAttribute("aria-pressed", "true");
  guardarEstadoEnStorage();
  actualizarBloqueos();
}

/**
 * Devuelve lista de IDs de requisitos que aún faltan
 * para aprobar un ramo determinado.
 */
function obtenerRequisitosFaltantes(idRamo) {
  const reqs = requisitos[idRamo] || [];

  // Regla especial (si hiciera falta en el futuro) se puede manejar aquí.
  // Actualmente usamos AND puro: todos los requisitos deben estar aprobados.

  const faltantes = reqs.filter(function (idReq) {
    return !aprobados.has(idReq);
  });

  return faltantes;
}

/**
 * Actualiza visualmente qué ramos están bloqueados
 * en función de los requisitos aprobados.
 */
function actualizarBloqueos() {
  const elementosRamos = document.querySelectorAll(".ramo");

  elementosRamos.forEach(function (elem) {
    const idRamo = elem.dataset.id;

    if (aprobados.has(idRamo)) {
      elem.classList.remove("bloqueado");
      return;
    }

    const faltantes = obtenerRequisitosFaltantes(idRamo);

    if (faltantes.length > 0) {
      elem.classList.add("bloqueado");
    } else {
      elem.classList.remove("bloqueado");
    }
  });
}

/**
 * Muestra un mensaje flotante (toast) en la parte inferior.
 */
function mostrarMensaje(texto) {
  const contMensaje = document.getElementById("mensaje");
  if (!contMensaje) return;

  contMensaje.textContent = texto;
  contMensaje.classList.add("mensaje--visible");

  if (mensajeTimeoutId !== null) {
    clearTimeout(mensajeTimeoutId);
  }

  mensajeTimeoutId = setTimeout(function () {
    contMensaje.classList.remove("mensaje--visible");
    mensajeTimeoutId = null;
  }, 4500);
}

/**
 * Carga estado de ramos aprobados desde localStorage.
 */
function cargarEstadoDesdeStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      aprobados = new Set();
      return;
    }
    const arregloIds = JSON.parse(data);
    if (Array.isArray(arregloIds)) {
      aprobados = new Set(arregloIds);
    } else {
      aprobados = new Set();
    }
  } catch (err) {
    console.error("Error al leer localStorage:", err);
    aprobados = new Set();
  }
}

/**
 * Guarda el estado actual de ramos aprobados en localStorage.
 */
function guardarEstadoEnStorage() {
  try {
    const arreglo = Array.from(aprobados);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arreglo));
  } catch (err) {
    console.error("Error al guardar en localStorage:", err);
  }
}
