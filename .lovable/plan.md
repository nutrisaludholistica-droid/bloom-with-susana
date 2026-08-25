# Plan para recuperar rendimiento móvil y dejar Schema.org limpio

Objetivo: subir el rendimiento móvil lo más cerca posible de 100 sin sacrificar la conversión de la landing, y corregir el marcado Schema.org para que no genere advertencias evitables.

## Diagnóstico confirmado

Según la captura, Google PageSpeed marca:

- Rendimiento móvil: 63
- FCP alto
- LCP alto
- Accesibilidad, buenas prácticas y SEO ya están en verde

En el código actual verifiqué estos puntos relevantes:

- La home carga la imagen principal desde un asset CDN (`hero-susana.webp.asset.json`) y además la precarga en `src/routes/index.tsx`.
- La imagen del hero tiene `fetchPriority="high"`, pero se está pintando dentro de un layout con decoraciones, sombras, bordes y blur de fondo.
- Google Fonts se cargan desde Google Fonts en `src/routes/__root.tsx`; aunque están diferidas, siguen agregando solicitudes externas.
- Google Analytics está diferido, pero existe en la raíz y debe mantenerse sin competir con el primer render.
- Las imágenes locales `produce.webp` y `workshops.webp` son ligeras; el problema principal parece estar en el primer viewport, no en imágenes inferiores.
- El marcado Schema.org actual tiene detalles mejorables: `medicalSpecialty` usa `Nutrition`, `logo` apunta a `favicon.ico`, coordenadas como texto y datos inconsistentes entre la home y la página local.

## Cambios propuestos de rendimiento

1. **Reducir el costo visual del primer viewport**
   - Quitar o simplificar los blur grandes del hero en móvil.
   - Reducir sombras y capas decorativas alrededor de la imagen principal.
   - Mantener el diseño premium, pero con menos trabajo de pintura para Chrome móvil.

2. **Optimizar la imagen LCP real**
   - Revisar el asset final usado por `hero-susana.webp.asset.json` y generar una versión más pequeña para móvil si el CDN está sirviendo una imagen demasiado grande.
   - Usar `srcSet`/`sizes` o una variante móvil para evitar descargar una imagen mayor a la necesaria.
   - Mantener `fetchPriority="high"` solo en la imagen que realmente sea LCP.

3. **Evitar que fuentes externas afecten la primera pintura**
   - Cambiar la experiencia inicial a fuentes del sistema o cargar Fraunces/Inter todavía más tarde.
   - Conservar la estética, pero priorizar FCP/LCP móvil.

4. **Reducir JavaScript inicial de la home**
   - Revisar componentes debajo del fold y diferir lo que no sea visible al inicio.
   - Mantener WhatsApp y CTA activos inmediatamente.
   - Evitar cargar lógica de secciones inferiores antes de que el hero pinte.

5. **Revisar el mapa**
   - Confirmar que el iframe de Google Maps está lazy y no aparece antes de tiempo.
   - Si PageSpeed lo penaliza, reemplazarlo por un placeholder visual con carga al tocar “Ver ubicación”, manteniendo la intención original de tener mapa embebido.

## Cambios propuestos de Schema.org

- Cambiar `medicalSpecialty` a un valor válido (`DietNutrition`).
- Reemplazar `logo` por una imagen válida en formato aceptado por Google o quitarlo si no hay logo real todavía.
- Convertir `latitude` y `longitude` a números.
- Añadir `image` a la entidad local donde falta.
- Homologar la entidad `Person` entre home y página local.
- Mantener `FAQPage` y `BreadcrumbList` válidos.

## Verificación

- Medir la home localmente con Lighthouse móvil después de los cambios.
- Verificar que el hero conserva diseño y CTA visible en móvil.
- Confirmar que no hay errores de consola.
- Validar que los JSON-LD sean JSON correcto y que las URLs de imágenes respondan correctamente.
- Después de publicar, volver a correr PageSpeed/Rich Results Test en la URL pública.

## Nota importante

PageSpeed mide la versión publicada y puede variar entre corridas. Para que Google refleje los cambios, habrá que publicar después de aplicar la optimización y volver a correr el test sobre `https://susanawignall.com`.
