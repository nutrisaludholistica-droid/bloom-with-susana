Plan: 3 correcciones SEO urgentes

---

## 1. Twitter Card (meta tag)

En `src/routes/__root.tsx` hay entradas duplicadas de description. Reemplazar la entrada `twitter:description` actual (en inglés) por:

> "Nutrióloga en Playa del Carmen y en línea. Acompañamiento personalizado en recomposición corporal, salud digestiva y hábitos sostenibles. Cédula profesional 156228944."

También limpiar las entradas duplicadas de `description` y `og:description` en inglés para evitar que anulen las versiones en español.

## 2. H1 principal del Hero

En `src/components/landing/Hero.tsx`:
- Reemplazar el `<h1>` actual por: "Nutrióloga en Playa del Carmen y en línea — Susana Wignall"
- Actualizar el subtítulo (párrafo descriptivo) agregando al inicio: "Acompañamiento nutricional personalizado para mejorar tu composición corporal, salud digestiva y calidad de vida sin dietas extremas."

## 3. Schema Markup (JSON-LD)

Agregar en `src/routes/index.tsx` dentro de la función `head()` el bloque `scripts` con el JSON-LD exacto proporcionado:

- `LocalBusiness` con datos de contacto, dirección e imagen
- `Person` con datos de Susana Wignall
- `FAQPage` con las 3 preguntas frecuentes

El script se inyectará como `type: "application/ld+json"` en el array `scripts` del `head()` de la ruta raíz.

---

**Nota técnica:** En `__root.tsx` se detectaron duplicados de meta tags (description, og:description, twitter:description en inglés sobreescribiendo los españoles). El plan incluye limpiar esos duplicados para que los tags en español sean los únicos presentes.