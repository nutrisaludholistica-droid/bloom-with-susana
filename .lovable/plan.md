# Plan: Conectar GA4 y medir clics en WhatsApp

## 1. Conectar GA4
- Vincular el conector de Google Analytics al proyecto usando el ID de medición `G-J5PM6WYZ9F` que proporcionaste. Lovable sincronizará el ID como variable de entorno (`VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY`).

## 2. Cargar gtag.js
- Crear un módulo de inicialización de GA4 (`src/lib/ga4.ts`) que cargue el script de `googletagmanager.com` solo en el navegador, ejecute `gtag('js')` y `gtag('config', ID)` una vez.
- Montarlo desde `src/routes/__root.tsx`, reemplazando el placeholder actual, con guardas para SSR y para cuando no haya ID configurado.

## 3. Enviar page_view en cada ruta
- Añadir un efecto en `__root.tsx` (usando `useRouter`) que dispare `gtag('event', 'page_view', { page_path: location.pathname })` en cada cambio de ruta del SPA.

## 4. Eventos de WhatsApp
- Ajustar `src/lib/analytics.ts` para que `trackWaClick` envíe el evento `whatsapp_click` con parámetros `section` y `page_path`, además del `event_id`.
- Añadir `trackWaClick` al botón de **Talleres** (`src/components/landing/Workshops.tsx`), que hoy abre WhatsApp sin tracking.
- Verificar que todos los demás botones (hero, promo, paquetes, FAQ, CTA final, etc.) ya usan `trackWaClick`.

## 5. Verificación
- En preview, confirmar que `window.gtag` existe y que el dataLayer recibe el evento `whatsapp_click` con la sección al hacer clic.
- Indicar cómo revisar en GA4 (DebugView / Tiempo real) y que los datos pueden tardar minutos en aparecer.

## Detalles técnicos
- ID vía `import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY`.
- Archivos a editar/crear: `src/lib/ga4.ts` (nuevo), `src/lib/analytics.ts`, `src/routes/__root.tsx`, `src/components/landing/Workshops.tsx`.
- No se modifica contenido visible ni diseño.
