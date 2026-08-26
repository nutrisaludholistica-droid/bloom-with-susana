# Cierre de pendientes SEO técnicos

## Objetivo
Corregir los dos hallazgos SEO abiertos y alinear los detalles técnicos que quedaron desfasados tras el rebranding reciente, sin generar nueva imagen de marca (el logo se hará después).

## Cambios propuestos

### 1. Dirección y mapa canónicos en toda la web pública
- Definir una única dirección a partir del enlace de Google Maps verificado: https://maps.app.goo.gl/zGHMo1Fk4cwcMbUJ6.
- Actualizar la misma dirección y coordenadas en:
  - `src/routes/index.tsx` (schema `LocalBusiness` / `MedicalBusiness`).
  - `src/routes/nutriologa-playa-del-carmen.tsx` (objeto `address`, schema y iframe embebido).
  - `src/components/landing/Location.tsx` (texto visible, link y embed).
  - `src/components/landing/faq-data.ts` (respuesta de ubicación).
- Reemplazar el iframe genérico de "Playa del Carmen" por el embed del lugar verificado con marcador específico, usando el `place_id` y coordenadas del enlace.
- Eliminar "LN" del `alternateName` del schema en `index.tsx`.

### 2. Limpieza de referencias a "LN" en rutas privadas
- `src/routes/auth.tsx`: actualizar meta descripción y texto visible para que digan "Susana Wignall" en lugar de "LN Susana Wignall".
- `src/routes/_authenticated/crm.tsx`: actualizar el subtítulo del header.

### 3. Corrección del sitemap
- En `src/routes/sitemap[.]xml.ts` eliminar el campo `lastmod` calculado con `new Date().toISOString()`, porque es una fecha no autorizada que se regenera en cada petición. Si no hay fechas de modificación reales por página, omitir el campo por completo.

### 4. Metadatos de rutas privadas
- Añadir `og:title` y `og:description` propios en `/auth` y `/crm`, aunque mantengan `robots: noindex,nofollow`, para evitar que hereden metadatos públicos si alguien comparte el enlace.

### 5. Verificación
- Validar con el build del proyecto.
- Una vez publicado, ofrecer lanzar un nuevo scan SEO y revisar Google Search Console para confirmar que el título y la dirección actualizados se reflejen en los resultados.

## Nota
La imagen social (`og:image`) se deja para la siguiente iteración, cuando el logo de marca esté listo.

## Detalles técnicos
- Archivos a editar:
  - `src/routes/index.tsx`
  - `src/routes/nutriologa-playa-del-carmen.tsx`
  - `src/components/landing/Location.tsx`
  - `src/components/landing/faq-data.ts`
  - `src/routes/auth.tsx`
  - `src/routes/_authenticated/crm.tsx`
  - `src/routes/sitemap[.]xml.ts`
- No se crearán ni eliminarán rutas.
- No se tocará el CRM funcional ni la base de datos.
