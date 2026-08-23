# Plan: GA4 y eventos de clic en WhatsApp

## 1. Conectar GA4
- Abrir la tarjeta de conexión de Google Analytics para vincular tu cuenta y tu ID de medición (`G-...`). El ID queda disponible en la app como variable de entorno; no se pega a mano en el código.

## 2. Cargar gtag.js en el sitio
- Nuevo módulo de inicialización que carga `https://www.googletagmanager.com/gtag/js?id=<ID>` solo en el navegador y ejecuta `gtag('js')` + `gtag('config', ID)` una vez.
- Se monta desde `src/routes/__root.tsx` (reemplazando el comentario placeholder de analítica que hay hoy en el `<head>`), con guardas para SSR y para cuando no haya ID configurado.
- Enviar `page_view` en cada cambio de ruta del router, ya que gtag solo mide la carga inicial.

## 3. Eventos de WhatsApp por sección
Ya existe `src/lib/analytics.ts` con `trackWaClick`, y casi todos los botones lo llaman: hero, promo, cómo funciona, paquetes (con nombre del paquete), confianza, FAQ, CTA final, footer, botón flotante, header de servicio y los 3 CTAs de la página de Playa del Carmen.

Falta un caso: el CTA de **Talleres** (`src/components/landing/Workshops.tsx`) abre WhatsApp sin registrar el evento. Se le agrega `trackWaClick("whatsapp_click_workshops")`.

Además, `trackWaClick` hoy manda siempre el evento `whatsapp_click` con `event_id`. Se ajusta para enviar también la sección como parámetro (`section`) y la ruta de origen, de modo que en GA4 puedas segmentar por sección sin crear un evento distinto por botón.

## 4. Verificación
- Comprobar en la preview que `gtag` existe, que la petición a Google Analytics sale al hacer clic y que el `dataLayer` recibe el evento con su sección.
- Indicarte cómo confirmarlo en GA4 (Informes > Tiempo real / DebugView), teniendo en cuenta que GA4 puede tardar unos minutos en mostrar eventos nuevos y que el sitio publicado debe actualizarse para medir tráfico real.

## Detalles técnicos
- ID vía `import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY` (frontend, sin gateway).
- Archivos a editar/crear: nuevo inicializador de GA, `src/lib/analytics.ts`, `src/routes/__root.tsx`, `src/components/landing/Workshops.tsx`.
- No se cambia contenido visible ni diseño.
