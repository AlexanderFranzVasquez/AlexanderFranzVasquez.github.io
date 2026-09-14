# Alexander F. Vasquez — sitio personal

Este sitio fue elaborado con [Claude Code](https://claude.com/claude-code): HTML/CSS/JS plano, sin framework ni paso de compilación, pensado para cargar rápido y ser fácil de mantener.

## Estructura

```
site/
  index.html            → Home
  projects/
    index.html          → listado de proyectos (incluye el personaje que se asoma en cada fila)
    atmo.html            → una página por proyecto
    bicopter.html
    studies.html
    caltech-surf.html
    _template.html       → copiar para un proyecto nuevo
  cv/
    index.html           → CV
  blog/
    index.html           → listado del blog
    _template.html       → copiar para un post nuevo
  css/style.css          → estilos compartidos (todas las páginas)
  js/main.js             → tema claro/oscuro + personaje animado (solo en Home)
  assets/
    img/
      site/               → imágenes de la home (foto de perfil, etc.)
      projects/
        <nombre>/          → imágenes solo de ese proyecto
      blog/
        <nombre-post>/     → imágenes solo de ese post
    video/
      projects/<nombre>/   → videos solo de ese proyecto
    pdf/                  → reportes descargables
```

## Si usas esto como plantilla (o le sigues pidiendo a Claude Code)

Si le vas a pedir a una IA que agregue contenido nuevo, lo más rápido es darle la info ya organizada así, en vez de dejar que adivine:

### Para un proyecto nuevo, dale:
- **Imagen principal** (la que va en la tarjeta del listado y sirve de portada).
- **La pregunta del personaje**: una pregunta corta, tipo "How can we...?", relacionada al proyecto (aparece en la nube cuando el mono se asoma al pasar el mouse por la fila).
- **La info**: título, una línea de resumen, y el contenido/texto real del proyecto (secciones, resultados, referencias si las hay).

Con eso, agregar el proyecto es: copiar `projects/_template.html`, llenarlo, crear su carpeta de imágenes en `assets/img/projects/`, y agregar su fila (imagen + pregunta del mono + texto) en `projects/index.html`.

### Para un post de blog nuevo, dale:
- **Título** y una línea de resumen.
- **Una etiqueta** (ej. RESOURCES, OPINION).
- **El contenido** del post.

Con eso: copiar `blog/_template.html`, llenarlo, y agregar el link en `blog/index.html`.

## Cómo ver el sitio localmente

Abre `index.html` directamente en el navegador (doble clic). No necesita servidor.
