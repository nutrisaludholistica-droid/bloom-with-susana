# Integrar la paleta Milpa · Maíz azul · Ámbar · Grano · Fondo

Adoptar la paleta de la imagen como sistema de color global del sitio (landing + CRM), manteniendo la estética editorial y el estilo minimalista actual.

## Cómo se usa cada color

- **Milpa (verde profundo #4E5B37)** — color principal: botones, títulos, enlaces, bandas oscuras (promoción, footer).
- **Maíz azul (morado apagado #6B4F63)** — acento secundario y detalles manuscritos, badges, subrayados decorativos. Uso medido para que no compita con el verde.
- **Ámbar (#D2A94F)** — acento cálido para destacar precios, íconos, estrellas y llamadas de atención pequeñas.
- **Grano (#E9E2CE)** — fondos de tarjetas, secciones alternas, bordes suaves.
- **Fondo (#F4F2ED)** — fondo base del sitio, más cálido y limpio que el actual.

WhatsApp mantiene su verde propio para reconocimiento del canal.

## Cambios

1. Redefinir los tokens de color en el sistema de diseño (crema, salvia, oliva, clay, sand, accent, promo) a los valores de la paleta, en oklch.
2. Reasignar el acento: hoy `accent` es terracota; pasa a ámbar, y se agrega un token para maíz azul.
3. Revisar contraste de texto sobre grano/ámbar/maíz azul para accesibilidad (mínimo AA).
4. Ajustar el modo oscuro del CRM con los mismos matices (milpa oscuro como base, ámbar como acento).
5. Revisión visual de hero, paquetes, promoción de lanzamiento, FAQs, ubicación y footer para corregir combinaciones que queden apagadas.

## Detalles técnicos

- Todo se edita en `src/styles.css` (`:root`, `.dark` y `@theme inline`); no se tocan clases de color en componentes salvo donde haga falta cambiar de token (p. ej. terracota → ámbar o maíz azul).
- Se agrega `--color-cornflower`/`--color-amber` (nombres semánticos: `--color-plum`, `--color-amber`) para poder usar `text-amber` / `bg-plum`.
- Sin cambios de contenido, SEO ni lógica.
