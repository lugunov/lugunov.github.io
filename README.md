# Andrey Lugunov — personal website

A small static personal website built with semantic HTML, CSS and vanilla JavaScript. There is no framework, package installation or build step.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

## GitHub Pages

The repository is ready to be served directly from its root:

1. Push the `main` branch to GitHub.
2. Open **Settings → Pages** in the repository.
3. Choose **Deploy from a branch**.
4. Select `main` and `/(root)`.

The `.nojekyll` file keeps deployment as plain static hosting. Journal filtering runs entirely in the browser through `assets/js/journal.js`.
