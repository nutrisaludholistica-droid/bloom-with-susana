# Plan: eliminar sección "Cómo empezar" y banda berenjena decorativa

## Objetivo
Eliminar la sección "Cómo empezar / ¿Qué pasa cuando escribes por WhatsApp?" de la landing y compensar visualmente con una banda decorativa color berenjena en el flujo de la página, manteniendo el estilo minimal.

## Cambios propuestos

1. **Eliminar la sección "Cómo empezar"**
   - Quitar el import y la instancia `<HowItWorks />` de `src/routes/index.tsx`.
   - Eliminar el archivo `src/components/landing/HowItWorks.tsx`.

2. **Agregar una banda decorativa berenjena**
   - Colocar una línea/banda horizontal de 4 px de alto en color `eggplant` justo antes de la sección de paquetes (`Packages`), donde antes iniciaba la sección removida.
   - La banda será un elemento decorativo sutil, sin texto ni interacción, para dar el toque de color y marcar la transición entre promoción y paquetes.

3. **Revisar espaciado y flujo**
   - Ajustar el espaciado entre `LaunchPromo` y `Packages` para que la transición se sienta equilibrada sin la sección intermedia.

## Archivos a modificar
- `src/routes/index.tsx`
- `src/components/landing/HowItWorks.tsx` (eliminación)

## Nota
Si prefieres que la banda berenjena vaya en otro punto (por ejemplo, sobre el fondo de la sección "Para ti" o como borde superior del Hero), puedes indicarlo antes de aprobar o lo ajustamos después.
