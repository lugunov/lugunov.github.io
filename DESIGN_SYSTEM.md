# Andrey UI Foundation

This is the shared visual foundation for Andrey's personal and product websites.
It keeps typography, colour, spacing and accessibility consistent while allowing
each site to retain its own character.

The canonical foundation file is:

```text
assets/css/foundation.css
```

Looply keeps an identical copy at `looply-site/foundation.css`. When foundation
tokens change, update both copies together and verify that they remain identical.

## Starting a new site

1. Copy `assets/css/foundation.css` into the new site's CSS directory.
2. Create a small site-specific stylesheet for layout and components.
3. Load Inter explicitly, then load the foundation before the site stylesheet.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap"
  rel="stylesheet"
>
<link rel="stylesheet" href="assets/css/foundation.css">
<link rel="stylesheet" href="assets/css/site.css">
```

Add Source Serif 4 to the Google Fonts URL only when the site contains genuine
editorial or long-form content.

## Shared visual language

### Typography

- Inter is the primary typeface for headings, navigation, labels, buttons and
  product copy.
- Source Serif 4 is the optional editorial typeface for articles, stories and
  quotations.
- Use the shared `--text-*` tokens instead of creating near-duplicate sizes.
- Prefer font weights `400`, `500`, `600`, `700` and `800`.

### Colour

- `--color-canvas`: warm page background.
- `--color-surface`: raised white surface.
- `--color-surface-soft`: quiet mint-tinted section or selected state.
- `--color-ink`: primary text.
- `--color-muted`: secondary text.
- `--color-primary`: links, active states, headings and primary buttons.
- `--color-primary-soft`: restrained product accent.
- `--color-warm`: dates, sequence numbers and editorial details.
- `--color-border`: separators and component outlines.

The shared combinations are chosen to meet WCAG AA for normal text. Do not place
white text directly on `--color-primary-soft`.

### Layout

- Maximum content width: `--layout-container` (`1120px`).
- Default horizontal gutter: `32px`; mobile gutter: `24px`.
- Use the shared spacing steps instead of one-off values where practical.
- Keep controls at least `44px` high; primary buttons should normally be `48px`
  or taller.

## Two supported site modes

### Editorial

Use for a personal site, journal or story archive.

```css
body {
  font-family: var(--font-editorial);
}

h1,
h2,
h3,
nav,
button {
  font-family: var(--font-sans);
}
```

Prefer open layouts, rules and typography. Use cards and shadows only when they
clarify hierarchy.

### Product

Use for an app or focused product website.

```css
body {
  font-family: var(--font-sans);
}
```

Product sites may use soft surfaces, cards, pill buttons and product imagery,
but should keep shadows restrained and avoid decorative effects without a clear
purpose.

## Required accessibility baseline

Every page should include a skip link and a focusable main region:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>

<main id="main-content" tabindex="-1">
  <!-- Page content -->
</main>
```

Use semantic headings in order, visible `:focus-visible` styling, meaningful alt
text and `aria-current="page"` for the active navigation item.

## Verification checklist

Before publishing a new site or changing the foundation:

1. Check all relative links and local assets.
2. Check desktop (`1440px`), tablet (`820px`) and mobile (`390px`).
3. Confirm there is no horizontal overflow.
4. Navigate with Tab and verify that the skip link and all interactive elements
   have visible focus.
5. Inspect the home page and at least one inner or long-form page.
6. Keep foundation changes and site-specific changes in separate Git commits so
   either layer can be reverted independently.
