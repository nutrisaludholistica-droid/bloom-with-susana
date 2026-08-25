# Plan: Header completo y mover CRM al footer

El usuario quiere que el apellido "Wignall" se lea completo en el logo del header, eliminar el enlace "CRM" del menú de navegación y dejar ese acceso únicamente en el footer.

## 1. Header: mostrar "Wignall" completo

Actualmente el wordmark usa `truncate` y el header usa un grid muy justo, por lo que en viewports intermedios el apellido se corta. Las acciones son:

- Quitar `truncate` del span "Susana Wignall" o reemplazarlo por una estrategia que nunca oculte el apellido.
- Reducir ligeramente el `tracking-[0.3em]` o el tamaño de texto en viewports donde el corte ocurra (md/lg), para que el logo completo quepa junto a la navegación.
- Aprovechar el espacio liberado al quitar el enlace "CRM" del header para dar más ancho al logo.
- Mantener el acento manuscrito "nutrición" y el estilo editorial actual; no cambiar la paleta.

## 2. Quitar CRM del header

En `src/components/landing/Header.tsx`:

- Eliminar el enlace "CRM" del menú desktop (`<nav className="hidden lg:flex ...">`).
- Eliminar el enlace "Acceso CRM" del menú móvil.
- No tocar el botón "Agendar" ni el resto de la navegación.

## 3. Mover/dejar CRM en el footer

En `src/components/landing/Footer.tsx`:

- El enlace de "Acceso CRM" ya existe en la fila inferior de copyright. Se mantendrá allí, pero se le dará más visibilidad moviéndolo a la columna de "Navegación" como un ítem de lista llamado "Acceso CRM" o "Admin".
- Esto lo hace fácil de encontrar para la propietaria sin competir visualmente con la navegación principal de conversión.

## Detalles técnicos

- Archivos a editar: `src/components/landing/Header.tsx`, `src/components/landing/Footer.tsx`.
- No se tocan rutas, auth, datos estructurados ni contenido de otras secciones.
- Se mantiene mobile-first y el diseño minimalista actual.

## Resultado esperado

- El header muestra "nutrición Susana Wignall" completo sin truncar el apellido en la mayoría de viewports de escritorio.
- El CRM desaparece del header y queda disponible en el footer.
- Menor distracción en la navegación principal y más foco en WhatsApp/CTAs.
