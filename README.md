# Alexander F. Vasquez — personal website

This site was built with [Claude Code](https://claude.com/claude-code): plain HTML/CSS/JS, no framework, no build step, designed to load fast and stay easy to maintain.

## Structure

```
site/
  index.html            → Home
  projects/
    index.html          → project listing (includes the character that peeks out on each row)
    atmo.html            → one page per project
    bicopter.html
    studies.html
    caltech-surf.html
    _template.html       → copy this for a new project
  cv/
    index.html           → CV
  blog/
    index.html           → blog listing
    _template.html       → copy this for a new post
  css/style.css          → shared styles (every page)
  js/main.js             → light/dark theme + animated character (Home only)
  assets/
    img/
      site/               → home images (profile photo, etc.)
      projects/
        <name>/            → images for that project only
      blog/
        <post-name>/        → images for that post only
    video/
      projects/<name>/      → videos for that project only
    pdf/                  → downloadable reports
```

## If you're using this as a template (or keep asking Claude Code for changes)

If you're asking an AI to add new content, it's fastest to hand it the info already organized like this, instead of letting it guess:

### For a new project, provide:
- **Main image** (used as the listing card thumbnail / cover).
- **The character's question**: a short question, like "How can we...?", related to the project (shows up in the speech bubble when the character peeks out on hover in the project list).
- **The info**: title, one-line summary, and the real project content/text (sections, results, references if any).

With that, adding the project is: copy `projects/_template.html`, fill it in, create its image folder under `assets/img/projects/`, and add its row (image + character's question + text) to `projects/index.html`.

### For a new blog post, provide:
- **Title** and a one-line summary.
- **A tag** (e.g. RESOURCES, OPINION).
- **The post content**.

With that: copy `blog/_template.html`, fill it in, and add the link in `blog/index.html`.

## Viewing the site locally

Open `index.html` directly in a browser (double-click). No server needed.
