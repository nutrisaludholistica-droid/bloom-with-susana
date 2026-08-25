# Cambios del documento: precios, talleres y testimonios

## 1. Precios visibles (nuevo)

- Consulta inicial: **$1,200 MXN** · Consulta de seguimiento: **$1,000 MXN** — se muestran en la sección de Servicios.
- Paquetes de acompañamiento con precio en la tarjeta:
  - Básico · 3 meses — **$4,000 MXN**
  - Transformación · 6 meses — **$7,500 MXN**
  - Reconexión · 9 meses — **$10,000 MXN**
- Se retira el texto "los precios se confirman por WhatsApp" y se sustituye por una nota corta (precios en MXN, pago por mes o por programa según acuerdo).
- Los mismos precios se agregan al marcado estructurado de las ofertas (`priceCurrency: MXN` + `price`), lo que ayuda en resultados de búsqueda.

## 2. Quitar los talleres de los paquetes

- Se elimina "1 taller al mes" del paquete Básico y "Taller de elaboración de fermentos" del paquete Reconexión.
- Los talleres siguen existiendo como sección propia e independiente de la página (no se toca).

## 3. Testimonios: no inventar

Como la práctica acaba de abrir y no hay casos reales, se retira la sección de testimonios inventados. En su lugar queda un bloque honesto y útil: cómo es el acompañamiento (qué incluye la primera consulta, qué se mide, cómo es el seguimiento) sin afirmaciones de resultados ni testimonios. También se quita el `Casos reales` como encabezado. Cuando tengas pacientes con permiso para citarlos, los agregamos con nombre o inicial y fecha.

## 4. Mejoras visuales pendientes de confirmar

En el documento marcaste dos capturas con "no se ve más, mejorarlo" y "me gusta pero casi no se entiende, mejora visual", pero las imágenes vienen incrustadas y no puedo abrirlas desde aquí. Dime a qué secciones se refieren (por ejemplo: promoción de lanzamiento, "¿Qué pasa cuando escribes por WhatsApp?", beneficios, bloque de confianza) y en la misma entrega les subo contraste y tamaño de texto para que se lean bien en móvil.

## Detalles técnicos

- `src/components/landing/Packages.tsx`: campo `price` por paquete, se quitan los ítems de taller.
- `src/components/landing/Services.tsx`: precios de consulta inicial y seguimiento.
- `src/components/landing/Testimonials.tsx`: se reemplaza por un bloque de "cómo trabajamos" sin testimonios ficticios (o se elimina de `src/routes/index.tsx` si prefieres no tener nada ahí).
- `src/routes/index.tsx`: precios en el `hasOfferCatalog` del marcado `MedicalBusiness`.
