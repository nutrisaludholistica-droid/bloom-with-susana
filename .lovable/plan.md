### Meta de verificación de Google Search Console

**Objetivo:** Agregar la meta tag de verificación de Google Search Console al sitio.

El usuario ya posee el token de verificación: `vHBjtVrI93psm_AlDbLID0HsELH4UsR1Imv3X78tRtI`

### Cambios a realizar

1. **Agregar la meta tag** en `src/routes/__root.tsx` dentro del array `meta` del `head()`:
   ```html
   <meta name="google-site-verification" content="vHBjtVrI93psm_AlDbLID0HsELH4UsR1Imv3X78tRtI" />
   ```

2. **Verificar que el build pase** correctamente tras el cambio.

No se requieren otros archivos ni cambios de diseño.