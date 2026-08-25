# Rediseño visual: identidad editorial minimal

Objetivo: que el sitio deje de parecer "hecho por IA" y se sienta como una marca real de nutrición — salvia suave, mucho aire, tipografía con carácter y composición editorial tipo revista.

## Tipografía elegida (Opción A)

- **Títulos y logo: Josefin Sans** (300/400) — geométrica art-déco, fina y con tracking amplio. Es la que da el aire boutique de tus referencias.
- **Cuerpo e interfaz: Karla** (300/400/500) — sans humanista legible, sin el look Inter/Poppins.
- **Acento manuscrito: Nothing You Could Do** — solo para gestos puntuales: el "the"/firma junto al nombre en el header y footer, y alguna palabra destacada en el hero o en "Sobre mí". Nunca en párrafos ni en botones.
- **Etiquetas de sección:** Josefin Sans en mayúsculas con tracking `0.22em`, tamaño pequeño (`01 — Servicios`).

## Paleta: Salvia Suave

Se reemplazan los tokens actuales por una escala aireada y de bajo contraste:

- Fondo: `#FBFAF6` (hueso cálido)
- Superficies: `#F3F2EC` y blanco
- Salvia clara (bordes, fondos suaves): `#DFE4D6`
- Salvia media (acentos, iconos, texto secundario): `#9AA88C`
- Verde profundo (botones, texto fuerte): `#5A6350`
- Texto principal: verde muy oscuro `#2F3529` para cumplir contraste AA
- Acento cálido discreto (arena `#E7DDCB`) solo para la promo y badges

Todo en OKLCH y siempre vía tokens semánticos; ningún color fijo en componentes.

## Composición editorial

- **Reglas globales:** más aire vertical, medida de texto estrecha, radios casi rectos (~0.25rem en lugar de 1rem), líneas finas de 1px en lugar de sombras, cero gradientes ni blurs.
- **Header:** monograma "SW" en Josefin Sans + nombre en versalitas con la firma manuscrita, fondo casi transparente, un solo CTA.
- **Hero:** partido asimétrico — texto a la izquierda con título grande y ligero, foto vertical de recorte alto a la derecha; se quitan badges y adornos.
- **Beneficios / Cómo funciona:** filas numeradas separadas por líneas finas, sin tarjetas con sombra.
- **Servicios y Paquetes:** rejilla asimétrica tipo revista (un bloque destacado + dos menores), bordes finos, precios en tipografía display.
- **Sobre mí:** bloque editorial a dos columnas con cita destacada y foto grande.
- **Testimonios:** citas grandes en Josefin Sans ligera, sin tarjetas.
- **Promo de lanzamiento:** banda a todo el ancho en verde profundo, tipografía sobria; se conservan el mensaje y el CTA actuales.
- **FAQ / Ubicación / Footer:** acordeón y footer a base de líneas finas, footer en tres columnas.

Se conservan todos los textos, CTAs de WhatsApp, mensajes precargados, eventos GA4, Schema.org y metadatos tal como están.

## CRM

Misma identidad en las pantallas internas: mismas fuentes y paleta, tablas y formularios con bordes finos, encabezados en Josefin Sans, densidad mayor que la landing (es herramienta de trabajo). Sin acento manuscrito ahí. Cero cambios en lógica, consultas ni permisos.

## Detalles técnicos

- Fuentes por `<link>` a Google Fonts en `src/routes/__root.tsx` (`preconnect` + `display=swap`), solo los pesos usados; nunca `@import` en CSS.
- Tokens de color, radios y fuentes redefinidos en `src/styles.css` (`:root`, `.dark` y `@theme inline`).
- Nuevas utilidades: `container-prose` más estrecho, `eyebrow` (versalitas con tracking), `rule` (línea fina), `font-script`.
- Refactor de presentación en `src/components/landing/*` (Header, ServiceHeader, Hero, Benefits, Services, HowItWorks, Packages, TrustBlock, About, Workshops, Testimonials, FAQ, Location, FinalCTA, Footer, LaunchPromo, WhatsappFloat) y en `src/routes/_authenticated/*` + `src/routes/auth.tsx` + `src/routes/nutriologa-playa-del-carmen.tsx`.
- Sin cambios en `src/lib/*` (WhatsApp, analytics, GA4) ni en el backend.
- Se mantiene el `srcSet` del hero y el lazy-load de imágenes ya optimizadas.
- Contraste verificado AA para texto sobre los fondos claros de salvia.

## Fuera de alcance

Rendimiento / Core Web Vitals (queda para después) y logo definitivo (seguimos con monograma tipográfico hasta que subas el tuyo).
