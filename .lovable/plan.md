# Jerarquía visual + mejoras SEO

## Parte 1 — Jerarquía visual (hero y secciones)

Objetivo: que se sienta editorial y profesional, no genérico. Sin cambiar contenido ni colores.

- **Hero:** un solo bloque de aire arriba (más respiro superior en desktop), H1 más grande y con líneas más apretadas, y el acento manuscrito ligeramente mayor y mejor alineado a la línea base. El párrafo de apoyo pasa a un tamaño más pequeño y gris más suave para que el título domine claramente.
- **Fila de credenciales del hero:** valores (Agosto, Cédula, FECII) en tamaño uniforme con etiquetas realmente secundarias, separadores verticales finos en desktop en vez de solo una línea superior.
- **Botones:** misma altura y peso tipográfico en ambos, con el secundario más callado (borde más tenue, sin fondo).
- **Ritmo entre secciones:** una sola escala de espaciado vertical para todas las secciones de la home (más aire en desktop, más compacto en móvil) para que dejen de sentirse "apiladas" con medidas distintas.
- **Títulos de sección:** una escala consistente — eyebrow pequeño en mayúsculas, H2 grande y ligero, línea introductoria corta. Se aplica igual en Beneficios, Servicios, Paquetes, Sobre mí, Talleres, Testimonios, FAQ y CTA final.
- **Contraste:** subir un poco el contraste del texto de cuerpo sobre crema (accesibilidad) y bajar el de los detalles decorativos, para una jerarquía de tres niveles clara.

## Parte 2 — SEO

Basado en los hallazgos actuales del escáner:

1. **Direcciones contradictorias (impacto local real):** la página `/nutriologa-playa-del-carmen` usa una dirección distinta a la de la home y su marcado. Se unifica a la dirección de la home (Hea'n Clinic, Av. Paseo Central, Humana Works Center), tanto en el texto visible como en el `MedicalBusiness`, y el iframe de mapa apunta al mismo lugar en vez de una vista genérica de la ciudad.
2. **Imagen de previsualización social:** hoy es un placeholder de plataforma. Se crea una imagen de marca 1200x630 y se usa como `og:image`/`twitter:image` en la home y en la página local.
3. **Metadatos propios en rutas internas:** `og:title`/`og:description` específicos para `/auth` (manteniendo `noindex`).
4. **Sitemap:** añadir `lastmod` a las entradas para señalar frescura.

Nota: las previsualizaciones sociales tardan en actualizarse porque las redes guardan en caché la última versión que leyeron.

## Detalles técnicos

- Espaciado y escalas tipográficas centralizadas en `src/styles.css` (utilidades de sección y de encabezado) y aplicadas en `src/components/landing/*` — sin colores hardcodeados, solo tokens.
- SEO en `src/routes/index.tsx`, `src/routes/nutriologa-playa-del-carmen.tsx`, `src/routes/__root.tsx`, `src/routes/auth.tsx` y `src/routes/sitemap[.]xml.ts`.
- Al terminar, se revisa la home renderizada en móvil y escritorio y se marcan como corregidos los hallazgos SEO atendidos.

## Lo que necesito de ti (opcional, mejora el resultado)

Dirección exacta con número, horarios definitivos y teléfono público, si quieres que queden idénticos en toda la web y en el marcado.
