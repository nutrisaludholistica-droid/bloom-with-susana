# Plan: Reorganizar landing con promo después de Services (Opción A) + CRO

## Objetivo
Hero limpio y enfocado, promo visible tras generar valor, todos los CTAs precargados a WhatsApp con mensajes específicos, y eventos medibles.

## Cambios

### 1. Orden nuevo de secciones en `src/routes/index.tsx`
```
Hero
Benefits
Services
LaunchPromo        ← movida aquí (antes iba arriba)
HowItWorks (nuevo) ← "¿Qué pasa cuando escribes por WhatsApp?"
Packages
TrustBlock (nuevo) ← "Estás en manos de una profesional"
Testimonials
FAQ
FinalCTA
Footer
```

### 2. Hero (`Hero.tsx`)
- Badge: "Julio · Primera consulta GRATIS · 10 lugares disponibles"
- CTA primario: "Agendar mi consulta gratis por WhatsApp" → `WA_MSG.promoGratis`
- Microcopy: "Te responderé por WhatsApp para confirmar horario y modalidad (presencial u online)."

### 3. LaunchPromo (`LaunchPromo.tsx`)
- Reubicada tras Services.
- CTA: "Apartar mi lugar gratis por WhatsApp" → `WA_MSG.promoGratis`.

### 4. Nueva sección `HowItWorks.tsx`
3 pasos: escribes → agendamos → primera consulta. CTA al final.

### 5. Packages (`Packages.tsx`)
- Añadir "Para quién es" y "Resultado esperado" por paquete.
- CTA específico por paquete (`WA_MSG.basico`, `.transformacion`, `.reconexion`).
- Nota reemplazada: "Los precios se confirman por WhatsApp según tus objetivos, modalidad y nivel de acompañamiento. Puedes escribir sin compromiso."

### 6. Nueva sección `TrustBlock.tsx`
Cédula 156228944, FECII 2024, formación microbiota/salud digestiva, presencial Playa del Carmen u online.

### 7. Testimonials
- Título: "Casos y experiencias de acompañamiento"
- Nota: "Testimonios reales en proceso de actualización."

### 8. FinalCTA
- "Quiero reservar mi consulta gratis" → `WA_MSG.promoGratis`.

### 9. Mensajes WhatsApp centralizados (`src/lib/whatsapp.ts`)
Ampliar `WA_MSG` con: `promoGratis`, `basico`, `transformacion`, `reconexion`, `hero`, `howitworks`, `trust`, `faq`, `footer`, `float`, `generico`.

### 10. Analítica (`src/lib/analytics.ts` nuevo)
Helper `trackWaClick(eventId)` que dispara `dataLayer.push` / `gtag` si existen. IDs: `whatsapp_click_hero|promo|howitworks|paquete_basico|paquete_transformacion|paquete_reconexion|trust|faq|final_cta|float|footer`. Comentario en `__root.tsx` para pegar GA4/GTM.

## Archivos
Modificar: `src/routes/index.tsx`, `Hero.tsx`, `LaunchPromo.tsx`, `Packages.tsx`, `Testimonials.tsx`, `FinalCTA.tsx`, `WhatsappFloat.tsx`, `FAQ.tsx`, `Footer.tsx`, `src/lib/whatsapp.ts`, `src/routes/__root.tsx`.
Crear: `src/components/HowItWorks.tsx`, `src/components/TrustBlock.tsx`, `src/lib/analytics.ts`.

## Criterio de éxito
Hero limpio → visitante entiende valor (Benefits/Services) → ve la oferta (LaunchPromo) → sabe qué escribir (HowItWorks) → elige paquete → confía (TrustBlock) → contacta. Todos los clicks a WhatsApp trackeados.
