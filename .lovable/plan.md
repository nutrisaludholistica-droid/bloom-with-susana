# Actualizar promo mensual y cerrar pendientes SEO técnicos

## Objetivo
Cambiar la promo del mes a "Consulta informativa en línea gratis" y corregir los pendientes SEO técnicos abiertos, sin generar nueva imagen de marca todavía.

## Cambios propuestos

### 1. Promo mensual: Consulta informativa en línea gratis
- Cambiar el titular principal de la promo a "Consulta informativa", con el acento manuscrito "en línea gratis".
- Reemplazar "Primera consulta sin costo" por "Consulta informativa en línea gratis" en:
  - Hero.
  - Bloque grande de promoción.
  - Badges de páginas de servicio.
  - Banda final de contacto.
  - Preguntas frecuentes y landing de Playa del Carmen.
  - Títulos, descripciones y schema que hoy mencionan la promo de agosto.
- Actualizar los mensajes precargados de WhatsApp para que digan "consulta informativa en línea gratis" en lugar de "consulta gratis de agosto".
- Si no me indicas otra disponibilidad, se mantiene "10 lugares" y se cambia "Agosto" a "Octubre 2026".

### 2. Dirección y mapa canónicos en toda la web pública
- Definir una única dirección a partir del enlace de Google Maps verificado: https://maps.app.goo.gl/zGHMo1Fk4cwcMbUJ6.
- Actualizar la misma dirección y coordenadas en:
  - `src/routes/index.tsx` (schema `LocalBusiness` / `MedicalBusiness`).
  - `src/routes/nutriologa-playa-del-carmen.tsx` (objeto `address`, schema y iframe embebido).
  - `src/components/landing/Location.tsx` (texto visible, link y embed).
  - `src/components/landing/faq-data.ts` (respuesta de ubicación).
- Reemplazar el iframe genérico de "Playa del Carmen" por el embed del lugar verificado con marcador específico, usando el `place_id` y coordenadas del enlace.
- Eliminar "LN" del `alternateName` del schema en `index.tsx`.

### 3. Limpieza de referencias a "LN" en rutas privadas
- `src/routes/auth.tsx`: actualizar meta descripción y texto visible para que digan "Susana Wignall" en lugar de "LN Susana Wignall".
- `src/routes/_authenticated/crm.tsx`: actualizar el subtítulo del header.

### 4. Corrección del sitemap
- En `src/routes/sitemap[.]xml.ts` eliminar el campo `lastmod` calculado con `new Date().toISOString()`, porque es una fecha no autorizada que se regenera en cada petición. Si no hay fechas de modificación reales por página, omitir el campo por completo.

### 5. Metadatos de rutas privadas
- Añadir `og:title` y `og:description` propios en `/auth` y `/crm`, aunque mantengan `robots: noindex,nofollow`, para evitar que hereden metadatos públicos si alguien comparte el enlace.

### 6. Verificación
- Validar con el build del proyecto.
- Revisar visualmente el hero y el bloque de promo en la preview.
- Una vez publicado, ofrecer lanzar un nuevo scan SEO y revisar Google Search Console para confirmar que el título y la dirección actualizados se reflejen en los resultados.

## Nota
La imagen social (`og:image`) se deja para la siguiente iteración, cuando el logo de marca esté listo.

## Detalles técnicos
- Archivos a editar:
  - `src/components/landing/LaunchPromo.tsx`
  - `src/components/landing/Hero.tsx`
  - `src/components/landing/FinalCTA.tsx`
  - `src/components/landing/faq-data.ts`
  - `src/routes/index.tsx`
  - `src/routes/nutriologa-playa-del-carmen.tsx`
  - `src/routes/consulta-nutricional.tsx`
  - `src/routes/nutriologa-en-linea.tsx`
  - `src/lib/whatsapp.ts`
  - `src/components/landing/Location.tsx`
  - `src/routes/auth.tsx`
  - `src/routes/_authenticated/crm.tsx`
  - `src/routes/sitemap[.]xml.ts`
- No se crearán ni eliminarán rutas.
- No se tocará el CRM funcional ni la base de datos.
