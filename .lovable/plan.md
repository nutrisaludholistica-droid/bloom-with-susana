## Actualizar JSON-LD en `src/routes/index.tsx`

Reemplazar el `@graph` actual con los tres bloques exactos que pediste, manteniéndolos como scripts JSON-LD separados en `head().scripts` (patrón ya usado en el proyecto). Sin cambios visuales.

### Cambios

**Archivo:** `src/routes/index.tsx`

Reemplazar el array `scripts` actual (que contiene un único script con `@graph`) por tres scripts JSON-LD independientes:

1. **MedicalBusiness** — copiar tu JSON tal cual (incluye `telephone`, `image` de about-susana-new, `geo`, `openingHours`, `priceRange`, `medicalSpecialty: "Nutrition"`).
2. **Person** — copiar tal cual (con `hasCredential` como `EducationalOccupationalCredential` reconocido por SEP México, y `knowsAbout`).
3. **FAQPage** — generado dinámicamente desde `FAQS` (ya importado desde `@/components/landing/faq-data`), mapeando las 11 preguntas actuales al formato `Question`/`acceptedAnswer`.

### Notas técnicas

- Se eliminan campos del `@graph` anterior que ya no aplican: `@id`, `areaServed`, `openingHoursSpecification` (reemplazado por `openingHours` string), `award`, `worksFor` por `@id`, `knowsAbout` en LocalBusiness. Queda exactamente lo que enviaste.
- El `image` del MedicalBusiness usará la URL `susanawignall.com/__l5e/...` que enviaste. Nota: esa ruta es un asset servido desde el dominio de preview/producción de Lovable; si el dominio final rota, la URL puede romper. Se deja tal cual como pediste.
- FAQPage sigue leyendo desde `FAQS` para que el JSON-LD siempre refleje lo visible en la página (requerido por Google).
- No se toca `__root.tsx`, ni componentes, ni estilos, ni `sitemap`, ni `robots.txt`.

### Fuera de alcance

- No se modifica diseño ni contenido visible.
- No se cambian meta tags en `__root.tsx`.
