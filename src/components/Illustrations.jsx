// Hand-built inline SVG illustrations used across the site as motion-graphic art.
// All are responsive (preserveAspectRatio) and use CSS variables for theming.

export function HeroTherapy() {
  return (
    <svg viewBox="0 0 600 620" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5DDF0" />
          <stop offset="100%" stopColor="#E2A4D8" />
        </linearGradient>
        <linearGradient id="heroFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCC6EE" />
          <stop offset="100%" stopColor="#B89DE0" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FBE7B8" />
          <stop offset="100%" stopColor="#F5C56A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="620" fill="url(#heroSky)" />
      <circle cx="470" cy="150" r="120" fill="url(#sun)" />
      <ellipse cx="300" cy="560" rx="320" ry="120" fill="url(#heroFloor)" />

      {/* Therapist (back, standing, hands on patient back) */}
      <g transform="translate(170 200)">
        {/* Patient lying on table */}
        <rect x="20" y="220" width="320" height="40" rx="14" fill="#A24BCC" />
        <rect x="40" y="200" width="260" height="32" rx="14" fill="#FFFFFF" />
        {/* Patient body */}
        <ellipse cx="80" cy="195" rx="28" ry="22" fill="#F5C9A8" />
        <rect x="100" y="175" width="180" height="50" rx="22" fill="#ED7AAF" />
        <rect x="270" y="180" width="60" height="40" rx="18" fill="#F5C9A8" />

        {/* Therapist standing */}
        <g transform="translate(140 0)">
          <ellipse cx="0" cy="40" rx="26" ry="28" fill="#F5C9A8" />
          <path d="M-22 60 Q-30 30 0 28 Q30 30 22 60 Z" fill="#0E1F1B" />
          <path d="M-40 80 Q-30 70 -10 68 L40 68 Q60 70 60 90 L60 170 Q40 200 -10 200 L-30 200 Q-50 180 -50 160 Z" fill="#A24BCC" />
          {/* Arms doing manual therapy */}
          <path d="M50 130 Q90 150 110 175" stroke="#F5C9A8" strokeWidth="22" strokeLinecap="round" fill="none" />
          <path d="M-30 140 Q-10 165 30 180" stroke="#F5C9A8" strokeWidth="22" strokeLinecap="round" fill="none" />
        </g>
      </g>

      {/* Floating elements: leaf + dot decoration */}
      <g opacity="0.85">
        <path d="M80 120 Q100 100 130 110 Q120 140 90 140 Z" fill="#A24BCC" />
        <circle cx="540" cy="320" r="6" fill="#E04E8B" />
        <circle cx="60" cy="300" r="8" fill="#F5C56A" />
        <circle cx="520" cy="80" r="4" fill="#8B2FB7" />
      </g>
    </svg>
  )
}

export function PortraitDoctor() {
  return (
    <svg viewBox="0 0 480 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bgPort" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DCC6EE" />
          <stop offset="100%" stopColor="#FBE7B8" />
        </linearGradient>
      </defs>
      <rect width="480" height="600" fill="url(#bgPort)" />
      <circle cx="100" cy="80" r="40" fill="#FFFFFF" opacity="0.4" />
      <circle cx="380" cy="520" r="60" fill="#FFFFFF" opacity="0.25" />

      {/* Body */}
      <g transform="translate(90 120)">
        {/* Coat */}
        <path d="M30 320 Q30 220 80 200 L130 180 Q150 175 170 180 L220 200 Q270 220 270 320 L260 460 L40 460 Z" fill="#FFFFFF" />
        <path d="M150 180 L150 320" stroke="#8B2FB7" strokeWidth="2" />
        {/* Stethoscope */}
        <path d="M120 220 Q120 280 180 280 Q210 280 210 320" stroke="#8B2FB7" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="210" cy="330" r="14" fill="#8B2FB7" />
        <circle cx="210" cy="330" r="6" fill="#F5C56A" />

        {/* Neck */}
        <rect x="130" y="150" width="40" height="50" rx="10" fill="#E5B894" />
        {/* Head */}
        <ellipse cx="150" cy="110" rx="56" ry="64" fill="#F5C9A8" />
        {/* Hair */}
        <path d="M94 100 Q90 50 150 40 Q210 50 206 100 Q200 70 150 70 Q100 70 94 100 Z" fill="#1A2E29" />
        {/* Eyes */}
        <circle cx="130" cy="115" r="3" fill="#0E1F1B" />
        <circle cx="170" cy="115" r="3" fill="#0E1F1B" />
        {/* Smile */}
        <path d="M138 140 Q150 150 162 140" stroke="#0E1F1B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Brows */}
        <path d="M122 100 Q132 96 142 100" stroke="#1A2E29" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M158 100 Q168 96 178 100" stroke="#1A2E29" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function ConditionArt({ kind = 'spine' }) {
  // Abstract anatomical illustrations per condition
  switch (kind) {
    case 'shoulder':
      return (
        <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#DCC6EE" /><stop offset="1" stopColor="#F5DDF0" /></linearGradient></defs>
          <rect width="400" height="320" fill="url(#sg)" />
          <circle cx="80" cy="60" r="28" fill="#fff" opacity="0.5" />
          <g transform="translate(80 60)" stroke="#8B2FB7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="120" cy="120" r="38" fill="#FFFFFF" />
            <path d="M158 120 Q240 130 250 200 Q260 240 200 240" />
            <path d="M120 160 Q60 180 50 240" />
            <circle cx="120" cy="120" r="10" fill="#E04E8B" stroke="none" />
            <path d="M120 120 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0" strokeDasharray="4 6" />
          </g>
        </svg>
      )
    case 'knee':
      return (
        <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5DDF0" /><stop offset="1" stopColor="#DCC6EE" /></linearGradient></defs>
          <rect width="400" height="320" fill="url(#kg)" />
          <g stroke="#8B2FB7" strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M180 30 L180 140 Q180 160 200 175 Q220 190 220 220 L220 290" />
            <path d="M150 30 L150 140 Q140 160 140 180 Q140 210 170 230 L170 290" />
            <ellipse cx="180" cy="170" rx="36" ry="22" fill="#FFFFFF" />
            <ellipse cx="180" cy="170" rx="14" ry="8" fill="#E04E8B" stroke="none" />
          </g>
        </svg>
      )
    case 'ankle':
      return (
        <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#DCC6EE" /><stop offset="1" stopColor="#FBE7B8" /></linearGradient></defs>
          <rect width="400" height="320" fill="url(#ag)" />
          <g stroke="#8B2FB7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M170 40 L170 170 Q160 200 130 220 L100 240 L100 280 L290 280 L290 250 L240 220 Q220 210 220 180 L220 40" />
            <circle cx="195" cy="195" r="14" fill="#E04E8B" stroke="none" />
            <path d="M195 195 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0" strokeDasharray="4 6" />
          </g>
        </svg>
      )
    case 'vestibular':
      return (
        <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs><radialGradient id="vg" cx="0.5" cy="0.5" r="0.7"><stop stopColor="#FBE7B8" /><stop offset="1" stopColor="#DCC6EE" /></radialGradient></defs>
          <rect width="400" height="320" fill="url(#vg)" />
          <g transform="translate(200 160)" stroke="#8B2FB7" fill="none" strokeWidth="2.5" strokeLinecap="round">
            <circle r="22" fill="#E04E8B" stroke="none" />
            <circle r="50" strokeDasharray="6 6">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite" />
            </circle>
            <ellipse rx="80" ry="50" />
            <ellipse rx="80" ry="50" transform="rotate(60)" />
            <ellipse rx="80" ry="50" transform="rotate(-60)" />
            <circle r="3" fill="#8B2FB7" cx="80" />
            <circle r="3" fill="#8B2FB7" cx="-80" />
            <circle r="3" fill="#8B2FB7" cy="50" />
          </g>
        </svg>
      )
    case 'hip':
      return (
        <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#DCC6EE" /><stop offset="1" stopColor="#F5DDF0" /></linearGradient></defs>
          <rect width="400" height="320" fill="url(#hg)" />
          <g stroke="#8B2FB7" strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M120 90 Q200 70 280 90 Q300 130 280 170 L240 200 Q220 215 220 240 L220 290" />
            <path d="M180 200 Q160 215 160 240 L160 290" />
            <circle cx="200" cy="140" r="20" fill="#FFFFFF" />
            <circle cx="200" cy="140" r="8" fill="#E04E8B" stroke="none" />
          </g>
        </svg>
      )
    case 'spine':
    default:
      return (
        <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5DDF0" /><stop offset="1" stopColor="#DCC6EE" /></linearGradient></defs>
          <rect width="400" height="320" fill="url(#bg1)" />
          <g stroke="#8B2FB7" strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M200 30 Q220 90 200 150 Q180 210 200 290" />
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse key={i} cx="200" cy={50 + i * 28} rx={26 - i * 1} ry="9" fill="#FFFFFF" />
            ))}
            <circle cx="200" cy="190" r="9" fill="#E04E8B" stroke="none" />
          </g>
        </svg>
      )
  }
}

export function CTAArt() {
  return (
    <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="ctaSoftBg" x1="30" y1="18" x2="335" y2="306" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF8FC" />
          <stop offset="0.55" stopColor="#F7DDF1" />
          <stop offset="1" stopColor="#FBE7B8" />
        </linearGradient>
        <linearGradient id="ctaBody" x1="124" y1="102" x2="248" y2="236" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E887B9" />
          <stop offset="1" stopColor="#9C46D1" />
        </linearGradient>
        <filter id="ctaShadow" x="40" y="178" width="280" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#8B2FB7" floodOpacity="0.18" />
        </filter>
      </defs>
      <rect x="18" y="14" width="324" height="292" rx="46" fill="url(#ctaSoftBg)" />
      <circle cx="260" cy="92" r="58" fill="#E9D8F4" opacity="0.72" />
      <circle cx="74" cy="232" r="80" fill="#DCC6EE" opacity="0.58" />
      <circle cx="300" cy="196" r="7" fill="#E04E8B" />
      <circle cx="63" cy="122" r="7" fill="#F5C56A" />
      <path d="M76 58c20-16 41-18 63-8-10 22-28 31-52 26Z" fill="#A24BCC" opacity="0.9" />
      <g transform="translate(121 74)">
        <circle cx="70" cy="54" r="37" fill="#F7B8D0" />
        <path d="M35 54c12-44 70-58 98-14 7-46-20-75-62-75-43 0-70 32-36 89Z" fill="#17233D" />
        <path d="M27 116c0-36 26-65 62-65s62 29 62 65v48H27Z" fill="url(#ctaBody)" />
        <path d="M71 86c38 18 68 40 91 69" stroke="#F7B8D0" strokeWidth="18" strokeLinecap="round" fill="none" />
        <circle cx="157" cy="160" r="25" fill="#F05C9C" />
        <circle cx="157" cy="160" r="45" fill="none" stroke="#F7A4C6" strokeWidth="8" opacity="0.7" />
        <circle cx="157" cy="160" r="63" fill="none" stroke="#F7A4C6" strokeWidth="7" opacity="0.35" />
      </g>
      <g filter="url(#ctaShadow)">
        <rect x="58" y="200" width="244" height="58" rx="22" fill="#fff" opacity="0.96" />
        <rect x="76" y="213" width="34" height="34" rx="12" fill="#F0E1F8" />
        <path d="M90 232l8 8 17-20" stroke="#A24BCC" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="128" y="236" fill="#0F1B33" fontFamily="Inter, Arial, sans-serif" fontSize="18" fontWeight="800">Doctor-led care</text>
      </g>
    </svg>
  )
}

export function ServicePattern() {
  return (
    <svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 'auto -20px -20px auto', width: 220, opacity: 0.16, pointerEvents: 'none' }}>
      <g stroke="#8B2FB7" fill="none" strokeWidth="1.2">
        <circle cx="60" cy="80" r="52" />
        <circle cx="120" cy="80" r="52" />
        <circle cx="180" cy="80" r="52" />
      </g>
    </svg>
  )
}

export function StoryArt({ tone = 'mint' }) {
  const palettes = {
    mint:  { a: '#FFF8FC', b: '#DCC6EE', c: '#A24BCC' },
    sun:   { a: '#FFF8F1', b: '#FBE7B8', c: '#E04E8B' },
    coral: { a: '#FFF6FB', b: '#FAD9E8', c: '#ED7AAF' },
  }
  const c = palettes[tone] || palettes.mint
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`storyBg-${tone}`} x1="20" y1="10" x2="380" y2="288" gradientUnits="userSpaceOnUse">
          <stop stopColor={c.a} />
          <stop offset="0.62" stopColor={c.b} />
          <stop offset="1" stopColor="#FBE7B8" />
        </linearGradient>
        <linearGradient id={`storyBody-${tone}`} x1="128" y1="94" x2="276" y2="242" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ED7AAF" />
          <stop offset="1" stopColor={c.c} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="34" fill={`url(#storyBg-${tone})`} />
      <circle cx="318" cy="85" r="72" fill="#fff" opacity="0.32" />
      <circle cx="72" cy="230" r="82" fill="#E8D5F5" opacity="0.68" />
      <path d="M64 52c22-17 43-19 64-8-9 21-27 30-51 25Z" fill="#A24BCC" opacity="0.88" />
      <circle cx="340" cy="206" r="7" fill="#E04E8B" />
      <circle cx="55" cy="140" r="7" fill="#F5C56A" />
      <g transform="translate(120 54)">
        <circle cx="84" cy="58" r="43" fill="#F8B8D1" />
        <path d="M45 54c24-47 95-47 118 2 6-56-27-89-79-89-53 0-87 35-39 87Z" fill="#16223A" />
        <path d="M31 129c0-43 31-78 75-78h4c44 0 75 35 75 78v88H31Z" fill={`url(#storyBody-${tone})`} />
        <path d="M48 138c32 28 73 45 124 51" stroke="#F8B8D1" strokeWidth="20" strokeLinecap="round" fill="none" opacity="0.9" />
        <circle cx="178" cy="190" r="26" fill="#F05C9C" />
        <circle cx="178" cy="190" r="43" fill="none" stroke="#F7A4C6" strokeWidth="8" opacity="0.7" />
      </g>
    </svg>
  )
}
