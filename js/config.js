/* ==========================================================
   CONFIGURACIÓN DE LA COTIZACIÓN
   Todo lo editable vive aquí: precios, textos e imágenes.
   ========================================================== */

window.CONFIG = {
  moneda: "MXN",

  /* IVA que se suma en el resumen (0.16 = 16%). Los precios de abajo van SIN IVA. */
  iva: 0.16,

  /* WhatsApp de AC Letreros (solo dígitos, con lada de país). CÁMBIALO. */
  whatsapp: "529931753531",

  /* Nota al pie del resumen. Ajústala a tus condiciones reales. */
  notaPrecios: "Precios en pesos mexicanos (MXN). Los precios por opción se muestran antes de IVA; el total del resumen ya incluye IVA. Consulta vigencia con tu asesor.",

  /* ---------- IMÁGENES ----------
     Para reemplazar una imagen: sustituye el archivo en assets/img/
     con el mismo nombre, o cambia la ruta aquí. */
  imagenes: {
    hero:          "assets/img/fachada-0.jpg",   // imagen principal
    letras:        "assets/img/fachada-0.jpg",   // sección de letras 3D
    muro:          "assets/img/fachada-0.jpg",   // instalación directo a muro
    bastidor:      "assets/img/fachada-1.jpg",   // bastidor metálico
    bastidorPanel: "assets/img/fachada-2.jpg",   // bastidor + panel compuesto
    estructura:    "assets/img/fachada-3.jpg",   // estructura en toda el área superior
    acrilico:      "assets/img/fachada-4.jpg"    // set de letreros de acrílico
  },

  /* ---------- LETRAS 3D ---------- */
  letras: {
    precio: 21550,
    incisos: [
      {
        letra: "a",
        marca: "Químicos Maldonado",
        detalle: "Fabricación de letras 3D + isotipo + letras 2D",
        medidas: "85 × 270 cm"
      },
      {
        letra: "b",
        marca: "TamizMás",
        detalle: "Fabricación de letras 3D + letras 2D",
        medidas: "85 × 280 cm"
      },
      {
        letra: "c",
        marca: "DQMédica Integral",
        detalle: "Fabricación de letras 3D + letras 2D",
        medidas: "90 × 200 cm"
      }
    ]
  },

  /* ---------- ILUMINACIÓN (opcional) ---------- */
  iluminacion: {
    precio: 6000,
    titulo: "Iluminación en letras 3D e isotipo",
    descripcion: "Que tu marca destaque también de noche."
  },

  /* ---------- LETREROS DE ACRÍLICO (set adicional, opcional) ---------- */
  acrilico: {
    descripcion: "Base de acrílico transparente de 6 mm con letras semi planas de Alucobond en aluminio cepillado.",
    items: [
      { id: "acr-iso",      nombre: "Isotipo Químicos Maldonado", medidas: "87 × 87 cm",  precio: 6500 },
      { id: "acr-tamiz",    nombre: "TamizMás",                   medidas: "77 × 215 cm", precio: 10800 },
      { id: "acr-domedica", nombre: "DoMédica Integral",          medidas: "85 × 175 cm", precio: 10800 }
    ],
    iluminacion: {
      precio: 3800,
      titulo: "Iluminación en letreros de acrílico",
      descripcion: "Se aplica a los letreros de acrílico que elijas."
    }
  },

  /* ---------- OPCIONES DE INSTALACIÓN ---------- */
  instalacion: [
    {
      id: "muro",
      nombre: "Directo a muro",
      precio: 6500,
      descripcion: "Las letras se fijan directamente sobre la fachada. Limpio, directo y la opción más accesible.",
      imagen: "muro"
    },
    {
      id: "bastidor",
      nombre: "Bastidor metálico",
      precio: 10500,
      descripcion: "Bastidor metálico con tratamiento anticorrosivo y acabado gris mate.",
      imagen: "bastidor"
    },
    {
      id: "bastidor-panel",
      nombre: "Bastidor con panel compuesto",
      precio: 25500,
      descripcion: "Bastidor metálico con tratamiento anticorrosivo, forrado en panel de aluminio compuesto con acabado gris mate.",
      imagen: "bastidorPanel"
    },
    {
      id: "estructura",
      nombre: "Estructura en toda el área superior",
      precio: 50000,
      descripcion: "Estructura metálica forrada de panel compuesto en acabado gris mate en toda el área superior de la fachada.",
      imagen: "estructura"
    }
  ]
};
