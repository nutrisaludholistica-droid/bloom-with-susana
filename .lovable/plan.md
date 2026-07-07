# Conectar Google Search Console

Objetivo: que yo pueda consultar directamente tus métricas de Search Console (clics, impresiones, posición promedio, keywords, páginas top) desde el chat, sin construir UI en tu app.

## Pasos

1. **Verificar el sitio en Google Search Console**
   - En GSC, cambiar del método "Archivo HTML" al método **"Etiqueta HTML"**.
   - La meta tag ya está publicada en `src/routes/__root.tsx` con el token `vHBjtVrI93psm_AlDbLID0HsELH4UsR1Imv3X78tRtI`.
   - Hacer clic en **Verificar**. Debería pasar en segundos.

2. **Conectar el connector de Google Search Console**
   - Lanzo el diálogo de conexión (te pedirá iniciar sesión con la cuenta de Google que administra `susanawignall.com` en GSC y autorizar acceso de solo lectura a tus datos).
   - Esto habilita el gateway para que yo consulte la API de Search Console con tu cuenta.

3. **Primera consulta de prueba**
   Una vez verificado y conectado, corro estas consultas para confirmar que funciona:
   - Lista de sitios verificados en tu cuenta
   - Top 10 keywords por clics (últimos 28 días) para `susanawignall.com`
   - Top 10 páginas por impresiones
   - CTR promedio y posición promedio del sitio

## Qué NO incluye este plan

- No se construye dashboard ni UI dentro de tu app.
- No se guardan métricas en base de datos.
- No se toca el CRM de leads (lo dejamos para otro plan si lo quieres después).

## Detalles técnicos

- Uso el connector estándar `google_search_console` (gateway-backed, OAuth). No se guardan API keys en tu código.
- Las llamadas van vía el connector gateway de Lovable; tu token OAuth vive en el workspace, no en el repo.
- Endpoints que usaré: `/webmasters/v3/sites` (lista de sitios) y `/webmasters/v3/sites/{siteUrl}/searchAnalytics/query` (métricas).

## Nota sobre teléfono/email para CRM

Mencionaste "mail y teléfono" para el CRM. Ese es otro alcance (construir tabla + UI en la app). Lo dejo fuera de este plan; cuando quieras lo abordamos por separado.
