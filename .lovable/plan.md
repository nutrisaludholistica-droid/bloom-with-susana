## Cambios técnicos SEO

### 1. `public/robots.txt` (crear)
```
User-agent: *
Allow: /
Sitemap: https://susanawignall.com/sitemap.xml
```

### 2. Sitemap dinámico
Crear `src/routes/sitemap[.]xml.ts` como server route TanStack (siguiendo el patrón del proyecto) sirviendo `https://susanawignall.com/` con `changefreq=weekly`, `priority=1.0`. Preferido sobre un archivo estático para mantenerse sincronizado con rutas futuras.

### 3. JSON-LD ampliado en `src/routes/index.tsx`

Ya existe un bloque `@graph` con `LocalBusiness`, `Person` y `FAQPage` (3 preguntas). Se ampliará:

- **LocalBusiness**: añadir `@type: ["LocalBusiness", "MedicalBusiness"]`, `medicalSpecialty` (Nutriología clínica, recomposición corporal, salud digestiva). Mantener nombre, url, teléfono, dirección existentes (ya coinciden).
- **Person**: mantener (ya incluye nombre, jobTitle "Licenciada en Nutrición", identifier 156228944, url). Confirmar campos requeridos presentes.
- **FAQPage**: reemplazar las 3 preguntas actuales por las 11 preguntas/respuestas completas de `src/components/landing/FAQ.tsx` para que coincidan 1:1 con el HTML visible.

### Fuera de alcance
- Sin cambios de diseño ni de copy visible.
- Sin tocar `__root.tsx` meta tags (ya correctos).

### Detalles técnicos
- Sitemap: `createFileRoute("/sitemap.xml")` con handler GET devolviendo XML (`Content-Type: application/xml`, cache 1h).
- FAQ JSON-LD: importar/reusar el array `FAQS` — se extraerá a un módulo compartido (`src/components/landing/faq-data.ts`) para que tanto `FAQ.tsx` como `index.tsx` consuman la misma fuente, evitando desincronización.
