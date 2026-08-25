# Revisión y corrección del marcado Schema.org

Objetivo: dejar los bloques JSON-LD sin errores ni advertencias en Google Rich Results Test / Validador de Schema.org.

## Hallazgos verificados en el código

Bloques actuales: `WebSite` (raíz), `MedicalBusiness` + `Person` + `FAQPage` (home) y `MedicalBusiness` + `Person` + `FAQPage` + `BreadcrumbList` (página local de Playa del Carmen).

Problemas detectados:

1. `medicalSpecialty: "Nutrition"` no es un valor válido del enumerado de Schema.org (en home y página local). El valor correcto es `DietNutrition`.
2. `logo: "https://susanawignall.com/favicon.ico"` apunta a un archivo que no existe en `public/` y además `.ico` no es un formato aceptado por Google para logo/imagen. Genera advertencia de imagen no accesible.
3. `geo.latitude` / `geo.longitude` están como texto ("20.6296"); deben ser números.
4. La `MedicalBusiness` de la página local no incluye `image`, que Google marca como campo recomendado faltante para negocios locales.
5. Los `Offer` del `hasOfferCatalog` no llevan `priceCurrency` ni indicación de precio, lo que produce advertencias de campos recomendados en las ofertas.
6. `sameAs` incluye el propio dominio del sitio (`https://www.susanawignall.com`), que no aporta y puede señalarse como referencia circular; conviene dejar solo perfiles externos reales.
7. La `Person` de la home y la de la página local no están descritas de forma idéntica (una tiene `hasCredential` y `knowsAbout`, la otra no), lo que puede dar señales inconsistentes para el mismo `@id`.

## Cambios propuestos

- Corregir `medicalSpecialty` a la URL del enumerado válido en ambas páginas.
- Reemplazar `logo` por una imagen real del proyecto (usar el mismo WebP absoluto que ya se usa en `image`) y añadir `image` a la `MedicalBusiness` de la página local.
- Convertir `latitude`/`longitude` a números.
- Añadir `priceCurrency: "MXN"` y `availability` a cada `Offer` del catálogo de servicios.
- Limpiar `sameAs`, dejando únicamente el perfil de Facebook.
- Homogeneizar la `Person` (mismos campos base: `url`, `telephone`, `identifier`, `hasCredential`) en home y página local.
- Mantener `FAQPage` y `BreadcrumbList` tal como están (válidos; las FAQ ya no muestran resultados enriquecidos pero no generan error).

## Verificación

- Extraer los bloques JSON-LD del HTML servido y validarlos con un script local (parseo JSON + comprobación de tipos, `@id` y campos requeridos por Google para LocalBusiness, Person y FAQPage).
- Confirmar que las URLs de imagen/logo responden 200.
- Después de publicar, revisar en Rich Results Test la home y `/nutriologa-playa-del-carmen` para confirmar cero errores.

## Detalle técnico

Archivos a editar: `src/routes/index.tsx`, `src/routes/nutriologa-playa-del-carmen.tsx` (bloques `scripts` de `head()`), y `src/routes/__root.tsx` solo si se ajusta el `publisher`/`WebSite`. Sin cambios en componentes ni en el CRM.
