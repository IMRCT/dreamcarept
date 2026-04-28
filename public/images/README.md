# Photo assets

Drop the five DreamCare photos into this folder using exactly these filenames:

| File                       | Used on                                                      | Source you uploaded                                       |
| -------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| `logo.png`                 | Site header and mobile drawer (the official DreamCare logo)  | "dream care · physical therapy, sport & wellness" mark    |
| `logo-light.png`           | Site footer on the dark green background (light/white variant; if you only have one color version, copy the same `logo.png` here and we will invert it via CSS) | Same logo, ideally in white / cream      |
| `hero-care.jpg`            | Homepage hero (doctor + elderly client on couch)             | Doctor + elderly woman on grey couch                      |
| `doctor.jpg`               | About hero, homepage doctor block, footer credit             | Headshot of Dr. Ashkan Ashkani                            |
| `manual-therapy.jpg`       | Services page, condition pages (shoulder/knee/hip)           | Hands-on knee/leg manual therapy close-up                 |
| `wellness-stretch.jpg`     | Sport & wellness band on the homepage                        | Woman in pink athletic wear stretching forward fold       |
| `movement-run.jpg`         | Full-bleed "Move again" band on the homepage                 | Runner's calves through a grassy field                    |

The site references these paths as `/images/<filename>` (Vite serves anything in
`public/` from the site root). Once the five files are dropped in, every photo
slot on the site fills automatically — no code changes required.

JPG or PNG both work. Recommended sizes:

- `hero-care.jpg`        ~ 1600 × 1100 (landscape)
- `doctor.jpg`           ~ 1000 × 1200 (portrait)
- `manual-therapy.jpg`   ~ 1600 × 900 (landscape)
- `wellness-stretch.jpg` ~ 1900 × 1000 (wide)
- `movement-run.jpg`     ~ 1900 × 900 (wide)
