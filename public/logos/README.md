# Client logos

Rendered by `src/components/ui/ClientLogoSlider.tsx`. The strip is **logos only**
— there is no text fallback, so a missing or renamed file shows as a broken
image rather than degrading gracefully. Keep the filenames below in sync with the
`logo` paths in that component, and update the `width`/`height` alongside them.

| Customer | File |
| --- | --- |
| IRM Energy | `irm-energy.svg` |
| IOCL | `iocl.jpg` |
| IOAGPL | `ioagpl.png` |
| Megha City Gas Distribution Pvt Ltd | `megha-city-gas.png` |
| HCG Distribution Pvt Ltd | `hcg-distribution.jpg` |
| GNGPL | `gngpl.png` |
| HPOIL | `hpoil.png` |
| VGL (Vadodara Gas Limited) | `vgl.png` |
| Paharpur Cooling Towers | `paharpur-cooling-towers.png` |
| Haridwar Natural Gas | `haridwar-natural-gas.png` |
| KEC International | `kec-international.png` |
| Naveriya Gas Pvt Ltd | `naveriya-gas.png` |
| L&T Special Steel and Heavy Forging | `lt-special-steel.png` |

Guidelines for replacements:

- **SVG preferred** (stays sharp at any size). PNG works too — transparent
  background, at least 2x the display size, so ~320x112 for the 160x64 slot.
- Trim surrounding whitespace so every logo optically fills its slot.
- The slider renders logos `grayscale` and reveals full colour on hover, so a
  full-colour source file is correct.
- Use each customer's own artwork. Do not redraw or approximate a mark.

Known low-resolution sources worth replacing when better artwork is available:
`hpoil.png` (70x79) and `haridwar-natural-gas.png` (120x120) — both are favicon-
sized and will look soft on high-DPI screens.
