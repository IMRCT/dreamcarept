# Design System Strategy: Neon Medical Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Luminescent Authority."** 

Standard healthcare platforms often lean on "Clinical Sterile" aesthetics—flat blues and white grids that feel functional but uninspired. This system breaks that template by merging the precision of medical professionalism with the high-energy, cutting-edge vibrance of neon-tech. We achieve this through "The Luminescent Authority" by utilizing deep, dark canvases that allow vibrant light-leaks and glowing boundaries to guide the user's eye.

The experience is defined by **Intentional Asymmetry** and **Atmospheric Depth**. By overlapping editorial-scale typography with glassmorphic cards, we create a sense of three-dimensional space that feels like a premium digital cockpit for medical professionals.

---

## 2. Colors & Surface Architecture

### The Palette
*   **Primary (Luminescent Rose):** `#ffb1c4` / `#bd005c`. Used for high-priority calls to action and signature glows.
*   **Secondary (Electric Ultraviolet):** `#dfb7ff` / `#9d05ff`. Used for secondary actions and gradient transitions.
*   **Tertiary (Cyan Medical):** `#00dbe7` / `#00f2ff`. Represents "Innovation" and "Trust." Used for data visualization and status indicators.
*   **Neutral (Midnight Base):** `#111318`. A deep, low-light background that makes the neon accents pop without causing eye strain.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined through:
1.  **Background Color Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Luminescent Glows:** Using box-shadows to define the "edge" of a container rather than a line.
3.  **Tonal Transitions:** Subtle gradients that imply a change in content area.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of frosted glass.
*   **Base:** `surface` (`#111318`).
*   **Sections:** `surface-container-low` (`#1a1c20`).
*   **Interactive Cards:** `surface-container-high` (`#282a2e`) or `surface-container-highest` (`#333539`).

### The "Glass & Gradient" Rule
Floating elements (Modals, Tooltips, Navigation Bars) must utilize **Glassmorphism**:
*   **Background:** `surface-variant` at 60% opacity.
*   **Backdrop Filter:** `blur(20px)`.
*   **Signature Texture:** Main CTAs should use a linear gradient from `primary` to `secondary` at a 135-degree angle to provide a "living" energy to the interface.

---

## 3. Typography
We use a high-contrast pairing to balance technical precision with modern editorial flair.

*   **Display & Headlines (Space Grotesk):** A geometric, tech-leaning sans-serif. Use `display-lg` (3.5rem) for hero statements to command authority. The wide apertures reflect innovation.
*   **Body & Titles (Manrope):** A highly legible, modern sans-serif. `body-lg` (1rem) ensures that dense medical staffing data remains accessible and trustworthy.
*   **The Editorial Hook:** Headlines should often be "broken" across layers—partially overlapping a neon-bordered image to create a custom, magazine-style feel.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering**. Instead of using shadows to lift everything, place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" look, or a `surface-container-highest` card on `surface` to create a "raised" look.

### Neon Ambient Shadows
When a "floating" effect is required, shadows must be colored and diffused:
*   **Shadow Color:** Use 15% opacity of the `primary` or `secondary` token.
*   **Blur:** 40px to 60px.
*   **Spread:** -5px.
*   This creates a "neon underglow" rather than a grey drop shadow.

### The "Ghost Border" Fallback
If a container requires a defined edge for accessibility, use a **Ghost Border**:
*   **Stroke:** 1px.
*   **Color:** `outline-variant` at 20% opacity.
*   **Effect:** Only visible enough to contain the eye, never enough to distract from the content.

---

## 5. Components

### Cards with Glowing Borders
The signature element of the system.
*   **Style:** `surface-container-high` background.
*   **Border:** Use a CSS `border-image` gradient from `primary` to `secondary`. 
*   **Glow:** On hover, increase the `box-shadow` spread of the theme color (Cyan or Pink) to create a "pulsing" heartbeat effect.

### Buttons
*   **Primary:** Gradient background (`primary` to `secondary`) with `on-primary` text. No border.
*   **Secondary:** Ghost border with `secondary` text. Hover state triggers a full `secondary_container` fill.
*   **Hover State:** All buttons must emit a subtle outer glow matching their primary accent color.

### Input Fields
*   **Style:** `surface-container-lowest` background. 
*   **Active State:** The bottom border transforms into a 2px neon cyan (`tertiary`) line with a 4px blur glow.

### Chips & Badges
*   **Visuals:** Pill-shaped (`rounded-full`). Use `secondary-container` for backgrounds to ensure "Medical Blue/Purple" tones are present in metadata.

### Cards & Lists (The Spacing Rule)
Forbid the use of divider lines between list items. Use 24px of vertical white space (Spacing Scale) or alternating `surface-container` shifts to separate staffing entries.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use intentional asymmetry. Offset text from images to create a bespoke, high-end editorial layout.
*   **Do** use "Cyan/Medical Blue" (`tertiary`) for all success states and trust-related data points.
*   **Do** keep typography high-contrast. White text on dark backgrounds must be `on-background` (`#e2e2e8`) for maximum readability.

### Don't:
*   **Don't** use 100% opaque, 1px solid grey borders. This flattens the design and makes it look "off-the-shelf."
*   **Don't** use generic drop shadows (`#000000`). Always tint shadows with the surface or accent color.
*   **Don't** overcrowd the neon. If every element glows, nothing is important. Reserve glows for the "Pulse" (interactive elements) and the "Frame" (primary containers).

---

## 7. App-Specific Components: "The Staffing Pulse"
*   **Availability Tracker:** A horizontal timeline using `tertiary_container` glows to show open shifts.
*   **Credential Badge:** A glassmorphic hex-icon with a `primary` glow, signifying a "Verified" medical professional.
*   **Shift Cards:** Overlapping elements where the "Pay Rate" sits on a `secondary` gradient chip, partially breaking the top boundary of the card.