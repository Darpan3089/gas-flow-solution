# Client logos

Files dropped here are picked up by `src/components/ui/ClientLogoSlider.tsx`.

Expected filenames (must match the `logo` paths in that component):

- `tata-steel.svg`
- `reliance-industries.svg`
- `indian-oil.svg`
- `bharat-petroleum.svg`
- `gail-india.svg`
- `adani-gas.svg`
- `jindal-steel.svg`
- `lt-hydrocarbon.svg`
- `hindalco.svg`

Any file that is missing falls back to the plain text wordmark, so the strip
never breaks while logos are still being collected.

Guidelines:

- **SVG preferred** (stays sharp at any size). PNG works too — use a transparent
  background and at least 2x the display size, i.e. ~400x128.
- Trim surrounding whitespace so every logo optically fills the same 48px-tall slot.
- The slider renders logos `grayscale`; a full-color source file is fine.
