# Activar Microsoft Clarity

Agregar el código de Clarity (ID `z71ntgfspf`) al sitio para ver grabaciones de visitas y mapas de calor.

## Qué se hará
- Clarity se carga en todas las páginas públicas del sitio.
- No se carga en el CRM ni en la pantalla de acceso, para no grabar datos de tus pacientes.
- Se carga después de que la página ya se mostró, para no afectar la velocidad en celular (igual que Google Analytics).

## Detalles técnicos
- Nuevo `src/lib/clarity.ts` con `initClarity()` que inyecta el snippet una sola vez (solo navegador).
- En `__root.tsx`, dentro del `useEffect` de `GoogleAnalytics`, llamar `initClarity()` con `requestIdleCallback`/timeout, omitiendo rutas que empiecen con `/crm` o `/auth`.
