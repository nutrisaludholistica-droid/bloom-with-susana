# Rediseño visual: identidad editorial minimal

Objetivo: que el sitio deje de parecer "hecho por IA" y se sienta como una marca real de nutrición — cercano a tu moodboard: salvia suave, mucho aire, tipografía con carácter y composición editorial.

## Tipografía (el cambio más notorio)

Las parejas que te mostré eran demasiado vistas. Propongo una combinación menos común y con personalidad de marca:

- **Títulos y logo: Marcellus** — serif romana de proporciones clásicas, elegante y muy poco usada en webs genéricas. Es la que da ese aire de "identidad de marca" de tus referencias (Valerie Phan, Camila Lacorte).
- **Cuerpo e interfaz: Hanken Grotesk** — sans humanista, cálida y legible, sin el look Inter/Poppins.
- **Detalles y etiquetas: Marcellus en versalitas** (mayúsculas con tracking amplio) para secciones tipo "01 · Servicios", que es el gesto editorial clave.

Alternativas si quieres otro carácter (dime y las cambio antes de construir):
- Más alto contraste y lujoso: **Gloock** + Hanken Grotesk.
- Más moderno y geométrico: **Fraunces** (variable, opsz) + **Jost**.

## Paleta: Salvia Suave

Reemplazo total de los tokens actuales por una escala aireada y de bajo contraste:

- Fondo: `#FBFAF6` (hueso cálido)
- Superficies/tarjetas: `#F3F2EC` y blanco puro
- Salvia clara (bordes, fondos suaves): `#DFE4D6`
- Salvia media (acentos, iconos): `#9AA88C`
- Verde profundo (texto, botones): `#5A6350`
- Texto principal: verde muy oscuro casi negro para legibilidad AA
- Un único acento cálido muy discreto (arena `#E7DDCB`) para badges de promo

Todo en OKLCH y solo vía tokens semánticos; sin colores fijos en componentes.

## Composición editorial

- **Reglas globales:** más aire vertical (secciones altas), medida de texto estrecha, esquinas menos redondeadas (radios ~0.375rem en lugar de 1rem), bordes finos de 1px en vez de sombras, cero gradientes.
- **Numeración de secciones** (`01 — Servicios`) con línea fina, encabezados grandes en Marcellus alineados a la izquierda.
- **Hero:** partido asimétrico — texto en columna izquierda con título muy grande y sobrio, foto vertical con recorte alto a la derecha; se quitan blurs y badges decorativos.
- **Beneficios / Cómo funciona:** filas numeradas separadas por líneas finas, no tarjetas con sombra.
- **Servicios y Paquetes:** rejilla asimétrica tipo revista (un bloque destacado + dos menores), bordes finos y precios en tipografía display.
- **Sobre mí:** bloque editorial de dos columnas con cita destacada y foto grande.
- **Testimonios:** citas grandes en serif, sin tarjetas.
- **Promo de lanzamiento:** banda a todo el ancho en verde profundo, tipografía sobria (se conserva el mensaje y el CTA actual).
- **Header:** monograma tipográfico "SW" en Marcellus + nombre en versalitas, fondo casi transparente, un solo CTA.
- **Footer:** editorial, tres columnas, líneas finas.

Se conservan todos los textos, CTAs de WhatsApp, mensajes precargados, eventos GA4, Schema.org y metadatos tal como están.

## CRM

Se aplica la misma identidad a las pantallas internas: misma tipografía y paleta, tablas y formularios con bordes finos, encabezados en Marcellus, densidad mayor que la landing (es herramienta de trabajo, no marketing). Sin cambios en lógica, consultas ni permisos.

## Detalles técnicos

- Fuentes cargadas con `<link>` a Google Fonts en `src/routes/__root.tsx` (`preconnect` + `display=swap`), nunca `@import` en CSS.
- Tokens de color, radios y fuentes redefinidos en `src/styles.css` (`:root` + `@theme inline`), incluido el modo oscuro del CRM.
- Nuevas utilidades: `container-prose` más estrecho, `eyebrow` (versalitas con tracking), `rule` (línea fina de sección).
- Refactor de presentación en `src/components/landing/*` (Header, Hero, Benefits, Services, HowItWorks, Packages, TrustBlock, About, Workshops, Testimonials, FAQ, Location, FinalCTA, Footer, LaunchPromo) y en las pantallas de `src/routes/_authenticated/*` + `src/routes/auth.tsx`.
- Sin cambios en `src/lib/*` (WhatsApp, analytics, GA4) ni en el backend.
- Se mantiene el `srcSet` del hero y la carga diferida de imágenes ya optimizadas para no perder rendimiento; las nuevas fuentes usan `display=swap` y solo los pesos necesarios.
- Contraste verificado AA para texto sobre fondos claros de salvia.

## Fuera de alcance

Rendimiento / Core Web Vitals (lo dejamos para después, como pediste) y logo definitivo (queda monograma tipográfico hasta que subas el tuyo).
