# Plan: Mejorar el marcado Schema.org de la página principal

La home ya tiene tres bloques JSON-LD (MedicalBusiness, Person, FAQPage), pero son más pobres que los de `/nutriologa-playa-del-carmen`, que ya usa `@id`, `areaServed`, `openingHoursSpecification`, `sameAs` y `PropertyValue` para la cédula. Vamos a nivelar y conectar todo.

## 1. MedicalBusiness de la home (`src/routes/index.tsx`)
- Añadir `@id: "https://susanawignall.com/#negocio"` para que sea la entidad canónica del sitio y las demás la referencien.
- Reemplazar `openingHours` (texto plano) por `openingHoursSpecification` estructurado, igual que en la página local.
- Añadir `areaServed` (Playa del Carmen, Quintana Roo, MX) y `medicalSpecialty: "Nutrition"` validado.
- Añadir `hasOfferCatalog` con los servicios reales que ya aparecen en la página (consulta inicial, seguimiento, paquetes, talleres) sin inventar precios.
- Añadir `sameAs` con los perfiles públicos que ya usemos (si no hay ninguno confirmado, se omite).

## 2. Person (Susana)
- Añadir `@id: "https://susanawignall.com/#susana"` y `worksFor: { "@id": "...#negocio" }` para vincular ambas entidades.
- Mantener la cédula profesional como `PropertyValue` (formato que Google entiende mejor).

## 3. WebSite/Organization en `src/routes/__root.tsx`
- Agregar un bloque `WebSite` sitewide con `name`, `url`, `inLanguage: "es-MX"` y `publisher` apuntando a `#negocio`.
- Es el único JSON-LD que va en el root; los específicos de página se quedan en sus rutas.

## 4. Página local `/nutriologa-playa-del-carmen`
- Solo se ajusta para reutilizar los mismos `@id`, evitando dos negocios distintos a ojos de Google.
- El `FAQPage` existente se mantiene tal cual.

## Detalles técnicos
- Archivos a editar: `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/nutriologa-playa-del-carmen.tsx`.
- Cada esquema sigue en su propio `<script type="application/ld+json">` dentro del array `scripts` de `head()`.
- No se toca contenido visible, imágenes ni CSS.
- Sin reseñas ni `aggregateRating`: no hay reseñas reales y Google penaliza marcado inventado.

## Resultado esperado
Un grafo de entidades coherente (negocio + profesional + sitio + FAQ) que mejora la elegibilidad para resultados enriquecidos y el panel de conocimiento local. Google puede tardar días o semanas en reflejarlo.
