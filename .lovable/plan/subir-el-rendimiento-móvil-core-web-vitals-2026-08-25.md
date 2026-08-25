# Subir el rendimiento móvil (Core Web Vitals)

Hoy: Rendimiento 74 en móvil. FCP 3.0 s y LCP 5.4 s en rojo; TBT 0 ms y CLS 0 ya están perfectos. Todo el problema está en el peso de la carga inicial, no en JavaScript.

## Causas confirmadas

1. La imagen del hero (`hero-image.png`) pesa **821 KB en PNG** y es el elemento LCP. Además no tiene prioridad de carga.
2. La foto de "Sobre mí" pesa **2.5 MB en PNG**; aunque es lazy, compite por ancho de banda y empeora la experiencia real.
3. La hoja de estilos de Google Fonts (Fraunces + Inter) es **render-blocking**, lo que empuja el FCP a 3 s.
4. Google Analytics se carga durante el arranque, restando ancho de banda a la primera pintura.

## Qué haré

**Imágenes**
- Generar versiones optimizadas WebP (calidad ~82, ancho máximo adecuado al diseño) de la foto del hero y de la foto de "Sobre mí", y publicarlas como assets nuevos. Esperado: hero de ~820 KB a ~60-90 KB; about de 2.5 MB a ~120 KB.
- En el hero: `fetchpriority="high"`, `decoding="async"`, sin lazy, y `<link rel="preload" as="image">` en el `head()` de la home apuntando al hero.
- Comprimir también las imágenes locales de talleres / CTA final a WebP.

**Fuentes**
- Reducir a los pesos realmente usados y cargar la hoja de Google Fonts sin bloquear el render (preload + `media="print"` con swap a `all`), manteniendo `preconnect` y `display=swap`. El texto aparece de inmediato con fuente de sistema y cambia sin salto perceptible.

**Analítica**
- Retrasar la carga de gtag.js hasta que el navegador esté inactivo (`requestIdleCallback`, con respaldo por temporizador) o hasta la primera interacción. Se siguen registrando `page_view` y los clics de WhatsApp igual que ahora.

**Mapa**
- El iframe de Google Maps ya es lazy; lo dejo así y verifico que no se cargue hasta acercarse a la sección.

## Verificación

Ejecuto Lighthouse móvil en la preview antes y después y comparo FCP / LCP / puntuación. Objetivo realista: LCP por debajo de 2.5 s y puntuación de 90-100. El 100 exacto depende también de la red al medir; si algo queda corto, te digo qué falta y por qué.

## Notas técnicas

- Conversión de imágenes con Pillow en el sandbox y publicación vía `lovable-assets create`; los componentes importan el nuevo pointer JSON.
- No cambio contenido, textos, SEO, schema ni el CRM.
