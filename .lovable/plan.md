# Plan: llegar a 10/10 en SEO

Revisé el sitio contra el checklist que enviaste. Ya está bien resuelto: robots.txt, sitemap enviado a Search Console, 1 solo H1, JSON-LD de MedicalBusiness + Person + FAQPage, WhatsApp visible arriba del fold y flotante, lazy load en imágenes secundarias.

Lo que falta para el 10 son 5 bloques.

## 1. Indexación y canonical (rápido, alto impacto)
- Agregar `<link rel="canonical">` y `og:url` autorreferenciales en la home (hoy no existen, riesgo de duplicado www / no-www).
- Cambiar `<html lang="en">` a `lang="es-MX"`.
- Traducir la página 404 al español y con enlace de WhatsApp.
- `og:image` y `twitter:image` hoy apuntan a una captura de la preview. Reemplazarlos por una imagen propia y estable del dominio (retrato + nombre + "Nutrióloga en Playa del Carmen").

## 2. Páginas por servicio con URLs limpias (lo que más mueve la aguja)
Hoy todo vive en una sola página, así que solo puedes rankear para una consulta. Propongo 4 páginas nuevas, cada una con su título, meta description, H1 y schema `Service`:

- `/nutriologa-playa-del-carmen`
- `/nutriologa-en-linea`
- `/recomposicion-corporal`
- `/salud-digestiva`

Cada una: contenido real (para quién es, qué incluye, cómo es la primera consulta, precio o rango, FAQs propias), CTA de WhatsApp con mensaje precargado propio, y enlace desde la home. Se agregan al sitemap.

## 3. Velocidad / Core Web Vitals
- Convertir las imágenes grandes (hoy PNG de hasta 1086×1448) a WebP y servir tamaños responsivos con `srcset`.
- La imagen del hero debe cargar con `fetchPriority="high"` y sin lazy (es el LCP); las demás quedan lazy.
- Cargar el iframe de Google Maps solo al hacer scroll/clic (hoy bloquea recursos en móvil).
- Medir con PageSpeed antes/después y ajustar.

## 4. Datos estructurados que faltan
- `Service` en cada página nueva.
- `BreadcrumbList` en las páginas internas.
- `AggregateRating` / `Review` **solo si** hay reseñas reales verificables (Google Business). Si no las hay, no se agrega: Google penaliza reseñas inventadas.

## 5. Medición
El código ya dispara eventos `whatsapp_click_*`, pero no hay ninguna herramienta escuchándolos. Falta pegar el ID de GA4 (`G-XXXXXXX`) para que se registren los clics y puedas ver qué sección convierte.

## Lo que necesito de ti
1. **ID de GA4** (o si prefieres que use otra analítica).
2. **Reseñas reales**: ¿tienes perfil de Google Business con reseñas? Si sí, las usamos para `Review`.
3. **Precios / rangos** de cada servicio, si quieres mostrarlos en las páginas nuevas (ayuda mucho a rankear y a filtrar pacientes).
4. Confirmar los 4 temas de páginas nuevas o cambiarlos por los servicios que más quieras vender.

## Detalles técnicos
- Canonical en `links` de cada ruta hoja (nunca en `__root.tsx`, se duplicaría).
- Páginas nuevas como archivos en `src/routes/*.tsx` con su propio `head()` (title 50-60 car., description 150-160 car.).
- `src/routes/sitemap[.]xml.ts`: ampliar el array `entries` con las rutas nuevas.
- Contenido de FAQs por página en archivos `*-faq-data.ts` para reusarlos en el JSON-LD.
- Imágenes vía Lovable Assets en WebP; sin tocar el CRM ni la lógica de negocio.

Puedo empezar por los bloques 1 y 3 (que no dependen de tus datos) y seguir con las páginas nuevas cuando confirmes.
