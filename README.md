# Gemini Enterprise Math Fix (MV3)

Chrome MV3 extension that fixes math rendering glitches on `https://business.gemini.google/*`.

It hooks the page’s KaTeX (`window.katex`) at `document_start` and sanitizes LaTeX before rendering, plus runs a lightweight DOM pass to render any leftover raw delimiters like `$...$`, `\\(...\\)`, `\\[...\\]`.

## Install (Unpacked)

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select this folder: `gemini-enterprise-math-fix-mv3/`

## Notes

- Content script runs in the page **MAIN world** (required to hook `window.katex`).
- If Gemini updates break selectors, open an issue and include a screenshot + the raw LaTeX snippet from DevTools (`.katex-mathml annotation`).

