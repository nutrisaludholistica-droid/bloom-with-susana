# Cambio visual: color del acento "WhatsApp" en HowItWorks

## Contexto
El span con el texto "WhatsApp" dentro del título de la sección **¿Qué pasa cuando escribes por WhatsApp?** usa actualmente la clase `text-clay` (tono terracota/café). En el preview seleccionado se ve el elemento en `/src/components/landing/HowItWorks.tsx` línea 27.

## Propuesta
Cambiar el color del acento manuscrito "WhatsApp" a un verde de la paleta existente para armonizar con el resto de la sección, que ya usa fondo `sage-soft/40` y títulos `olive`.

## Cambio concreto
- En `src/components/landing/HowItWorks.tsx`, línea 27:
  - Reemplazar `text-clay` por `text-olive`.
  - Mantener `font-script` y el tamaño relativo.

## Alcance
Solo el color del span seleccionado. No se tocan tipografías, layouts ni otros componentes.
