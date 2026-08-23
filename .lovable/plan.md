# Plan: SEO 10/10 — entrega acotada

Nos enfocamos solo en la página que más impacto tendrá ahora: `/nutriologa-playa-del-carmen`. Dejamos el crecimiento a más páginas, precios y reseñas para después.

## 1. Correcciones técnicas rápidas (afectan todo el sitio)
- **Canonical y og:url** en la home: agregar `<link rel="canonical" href="https://susanawignall.com/">` y `property="og:url" content="https://susanawignall.com/"`.
- **Idioma**: cambiar `<html lang="en">` a `lang="es-MX"` en `src/routes/__root.tsx`.
- **404 en español**: traducir el título, texto y botón de la página `NotFoundComponent`.
- **og:image**: dejar el preview actual temporalmente; cuando tengas un asset social propio lo cambiamos.

## 2. Nueva página: `/nutriologa-playa-del-carmen`
- Crear `src/routes/nutriologa-playa-del-carmen.tsx`.
- `head()` con:
  - Title: `Nutrióloga en Playa del Carmen · Susana Wignall` (50-60 caracteres).
  - Description: ~155 caracteres con keyword principal.
  - `og:title`, `og:description`, `og:url`, `og:type`, `canonical`.
- Contenido propio y local:
  - H1: `Nutrióloga en Playa del Carmen`.
  - Subtítulo con CTA a WhatsApp.
  - Breve explicación de la consulta presencial.
  - Dirección real (Av. Paseo Central, Humana Works Center).
  - Preguntas frecuentes específicas (3-5) para activar `FAQPage` en esta página.
  - CTA final de WhatsApp.
- JSON-LD: `MedicalBusiness` + `Service` + `FAQPage` + `BreadcrumbList`.
- No inventamos precios ni reseñas.

## 3. Sitemap
- Ampliar `src/routes/sitemap[.]xml.ts` para incluir `/nutriologa-playa-del-carmen`.

## 4. Medición de clics
- El sitio ya dispara eventos `whatsapp_click_*`. Conectar Google Analytics como connector para escucharlos. Pasos para crear el ID de medición:
  1. Entra a [analytics.google.com](https://analytics.google.com).
  2. Crea una **cuenta** y dentro una **propiedad** (por ejemplo "NutriSalud Holística").
  3. Elige **Plataforma Web** e introduce `https://susanawignall.com`.
  4. Al finalizar, copia el ID de medición que empieza con `G-` (p. ej. `G-ABC123XYZ`).
  5. Pégamelo aquí y lo conecto como App connector en Lovable.

## 5. No incluye este plan
- Páginas `/nutriologa-en-linea`, `/recomposicion-corporal`, `/salud-digestiva` (para después).
- Optimización de imágenes a WebP (se puede hacer en otro momento si no bloquea el build).
- Review/AggregateRating (negocio nuevo, sin reseñas reales).

## Resultado esperado
El sitio tendrá home + 1 página de servicio bien indexable, canonical correcto, JSON-LD duplicado por página, sitemap actualizado y GA4 listo para medir clics.
