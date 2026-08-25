# Plan: Conectar redes sociales de Susana y Maíz y Sal / Best Bio

El usuario quiere vincular los perfiles reales de Instagram y Facebook de dos entidades: su perfil profesional como nutrióloga y el negocio físico Maíz y Sal (Best Bio PDC). Se mostrarán iconos visibles en la landing y se integrarán en los datos estructurados Schema.org.

## Supuestos por defecto (revisables)

Dado que el usuario pidió que decida, asignaré los enlaces así:

- **Perfil personal de nutrióloga (Susana Wignall):** https://www.facebook.com/share/19acVYT2HV/
- **Instagram de Maíz y Sal / Best Bio PDC:** https://www.instagram.com/best_bio_pdc
- **Facebook de Maíz y Sal / Best Bio PDC:** https://www.facebook.com/share/1LnaeSmGL5/

Si al revisar el plan alguno está invertido, se cambia con una sola línea de configuración.

## 1. Configuración central de redes sociales

Crear `src/lib/social.ts` con constantes tipadas para cada perfil:

```text
SOCIAL = {
  nutrilogas: {
    facebook: "https://www.facebook.com/share/19acVYT2HV/",
    label: "Susana Wignall · Nutrióloga",
  },
  maizSal: {
    instagram: "https://www.instagram.com/best_bio_pdc",
    facebook: "https://www.facebook.com/share/1LnaeSmGL5/",
    label: "Maíz y Sal · Best Bio PDC",
  },
}
```

Este archivo será la única fuente de verdad para los enlaces visibles y el JSON-LD.

## 2. Datos estructurados Schema.org

### `src/routes/index.tsx`

- Reemplazar el `sameAs` del `MedicalBusiness` (#negocio) para que incluya Facebook de Susana y los perfiles de Maíz y Sal.
- Reemplazar el `sameAs` del `Person` (#susana) para que apunte al Facebook personal de Susana.
- Agregar un tercer bloque JSON-LD con una `Organization` para Maíz y Sal / Best Bio PDC:
  - `@id`: `https://susanawignall.com/#maiz-y-sal`
  - `name`: `Maíz y Sal · Best Bio PDC`
  - `alternateName`: `Best Bio PDC`
  - `url`: enlace de Facebook o Instagram principal
  - `sameAs`: [Instagram, Facebook]
  - `department`: `{ "@id": "https://susanawignall.com/#negocio" }` para vincularlo con la consulta de nutrición

### `src/routes/nutriologa-playa-del-carmen.tsx`

- Reemplazar el `sameAs` del `Person` por el Facebook personal de Susana.
- Agregar el bloque `Organization` de Maíz y Sal / Best Bio PDC con `department` apuntando a #negocio.

No se tocan los bloques `FAQPage`, `BreadcrumbList` ni `WebSite` de `__root.tsx`.

## 3. Iconos visibles en el footer

Actualizar `src/components/landing/Footer.tsx` para mostrar:

- En la columna "Contacto" o en una nueva fila inferior, iconos de Instagram y Facebook con etiquetas de accesibilidad.
- Cada icono enlaza a su URL real, abre en nueva pestaña con `rel="noopener noreferrer"`.
- Estilo minimalista acorde al diseño actual: iconos lineales en color `text-foreground/70` con hover `text-sage`.
- Se usa el icono de Instagram de `lucide-react` (ya es dependencia del proyecto). Para Facebook, como `lucide-react` no tiene icono de Facebook, se usa un SVG inline simple.
- Agregar eventos de GA4 propios para rastrear clics en redes sociales (`social_click_instagram`, `social_click_facebook_personal`, `social_click_facebook_maiz_sal`).

## 4. Metadatos Open Graph / Twitter

No se requieren cambios mayores. Opcionalmente se puede añadir `profile:username` o mantener los `og:*` actuales centrados en nutrición.

## Detalles técnicos

- Archivos a editar: `src/lib/social.ts` (nuevo), `src/routes/index.tsx`, `src/routes/nutriologa-playa-del-carmen.tsx`, `src/components/landing/Footer.tsx`.
- No se toca contenido visible del Hero, paquetes, testimonios ni CSS global.
- Se mantiene el acento verde salvia actual.
- Se reutiliza `trackWaClick` solo para WhatsApp; para redes sociales se añade un nuevo helper `trackSocialClick` en `src/lib/analytics.ts`.

## Resultado esperado

- Google recibe un grafo de entidades coherente: sitio web → nutrióloga → negocio de nutrición → empresa física Maíz y Sal, cada una con sus perfiles sociales.
- Los visitantes pueden seguir a Susana y a Maíz y Sal directamente desde el footer.
- Se mejora la autoridad de marca y la señal E-E-A-T (especialmente, experiencia y presencia real en la ubicación).
