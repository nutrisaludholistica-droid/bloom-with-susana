Ajustar el tono berenjena del sitio

Actualmente el color `--eggplant` está definido en `src/styles.css` como `oklch(0.38 0.06 335)`, lo que se percibe como un berenjena muy profundo. El objetivo es aclararlo manteniendo la familia morada/berenjena para que el fondo de la sección de servicios (y cualquier otro uso futuro) se sienta más luminoso y menos pesado.

Cambios a realizar

1. Aclarar el token `--eggplant` en `src/styles.css` subiendo la luminosidad (`L`) de aproximadamente `0.38` a un valor cercano a `0.50` sin cambiar el matiz (hue ~335). Esto conserva el carácter berenjena pero lo vuelve más claro y amable.
2. Mantener la cromaticidad (`C`) en un nivel similar para que no se vea deslavado o gris.
3. Verificar el contraste: el texto crema (`--cream`) debe seguir siendo legible sobre el nuevo fondo berenjena.
4. Revisar que el color siga funcionando bien en todos los lugares donde se usa `text-eggplant` (números de sección, acentos manuscritos, badge "Más elegido") y ajustar si alguno queda demasiado claro contra el fondo crema general.

Implementación

- Archivo principal: `src/styles.css`.
- Líneas a modificar: 108 en el tema claro y 144 en el tema oscuro (si aplica mantener coherencia entre ambos modos).
- No se requiere cambiar componentes ni JSX, salvo que el contraste en algún uso específico lo demande tras el ajuste.
