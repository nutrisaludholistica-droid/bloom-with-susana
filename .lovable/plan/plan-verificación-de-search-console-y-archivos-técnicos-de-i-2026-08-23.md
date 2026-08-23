# Plan: verificación de Search Console y archivos técnicos de indexación

Sin contenido nuevo: solo verificación, robots y meta tags técnicos.

## 1. Verificación de Search Console
- La meta `google-site-verification` (`vHBjtVrI93psm_AlDbLID0HsELH4UsR1Imv3X78tRtI`) ya está en el `<head>` global (`src/routes/__root.tsx`), así que se conserva tal cual.
- Confirmar con la API de Search Console que la propiedad `https://susanawignall.com/` sigue verificada y aparece en la lista de propiedades; si no, pedir un token nuevo, dejarlo en el mismo `<head>` y reintentar la verificación.
- Consultar el estado del sitemap ya enviado (`https://susanawignall.com/sitemap.xml`) y reenviarlo solo si Google reporta que no está registrado.

## 2. robots.txt
Archivo actual: `User-agent: *`, `Allow: /`, `Sitemap: .../sitemap.xml`. Se mantiene y se añade el bloqueo de las rutas privadas (área de CRM y login), que hoy son rastreables:

```text
User-agent: *
Allow: /
Disallow: /crm
Disallow: /auth
Sitemap: https://susanawignall.com/sitemap.xml
```

## 3. Meta tags técnicos
- `src/routes/auth.tsx` y `src/routes/_authenticated/crm.tsx`: agregar `head()` con `robots: noindex, nofollow` (y título propio) para que el CRM y el login no compitan por indexación.
- Home y `/nutriologa-playa-del-carmen`: ya tienen title, description, canonical, og:url, og:type y twitter:card. Solo se revisa que no haya duplicados ni canonicals faltantes.

## 4. Sitemap
- `src/routes/sitemap[.]xml.ts` ya lista `/` y `/nutriologa-playa-del-carmen`, ambas indexables. Sin cambios; se verifica que no incluya rutas privadas ni `lastmod` inventado.

## Detalles técnicos
- Archivos a editar: `public/robots.txt`, `src/routes/auth.tsx`, `src/routes/_authenticated/crm.tsx`.
- Las llamadas a Search Console se hacen vía el conector ya vinculado (cuenta `nutrisalud.holistica@gmail.com`), listando primero las propiedades verificadas.
- No se toca el contenido visible, ni imágenes, ni JSON-LD existente.
