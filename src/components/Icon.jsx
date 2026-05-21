// Inline SVG icon library, single source for all icons across the site.
// All icons render at currentColor, sized via width/height props.

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ICONS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" {...STROKE} />,
  arrowUpRight: <path d="M7 17L17 7M9 7h8v8" {...STROKE} />,
  plus: <path d="M12 5v14M5 12h14" {...STROKE} />,
  chev: <path d="M6 9l6 6 6-6" {...STROKE} />,
  check: <path d="M5 12.5l4 4 10-10" {...STROKE} />,
  calendar: <g {...STROKE}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01M16 14h.01" /></g>,
  phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 014 6a2 2 0 011-2z" {...STROKE} />,
  mail: <g {...STROKE}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>,
  pin: <g {...STROKE}><path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></g>,
  clock: <g {...STROKE}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
  clipboard: <g {...STROKE}><path d="M9 4h6l1 2h3v15H5V6h3z" /><path d="M9 4v3h6V4M8 12h5M8 16h8" /></g>,
  dollar: <g {...STROKE}><circle cx="12" cy="12" r="9" /><path d="M12 6v12M15 8.5c-.8-.8-1.8-1.2-3-1.2-1.7 0-3 1-3 2.4 0 3.2 6 1.6 6 4.8 0 1.4-1.3 2.4-3 2.4-1.3 0-2.5-.5-3.4-1.4" /></g>,
  globe: <g {...STROKE}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12S9.8 18.6 12 21" /></g>,
  star: <path d="M12 3l2.7 6 6.3.6-4.8 4.4 1.5 6.5L12 17l-5.7 3.5L7.8 14 3 9.6l6.3-.6z" {...STROKE} />,
  heart: <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" {...STROKE} />,
  help: <g {...STROKE}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4M12 17.5h.01" /></g>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" {...STROKE} />,
  close: <path d="M6 6l12 12M18 6L6 18" {...STROKE} />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" {...STROKE} />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" {...STROKE} />,
  briefcase: <g {...STROKE}><rect x="4" y="7" width="16" height="12" rx="2" /><path d="M9 7V5h6v2M4 12h16M10 12v2h4v-2" /></g>,
  car: <g {...STROKE}><path d="M5 15h14l-1.5-5.2A3 3 0 0014.6 8H9.4a3 3 0 00-2.9 1.8L5 15z" /><path d="M6 15v3M18 15v3M7.5 18h.01M16.5 18h.01M8 12h8" /></g>,
  hands: <g {...STROKE}><path d="M6 12V8a2 2 0 014 0v4M10 12V6a2 2 0 014 0v6M14 12V8a2 2 0 014 0v6c0 4-3 6-6 6s-6-2-6-6v-2" /></g>,
  home: <path d="M4 11l8-7 8 7v8a2 2 0 01-2 2h-3v-6h-6v6H6a2 2 0 01-2-2v-8z" {...STROKE} />,
  user: <g {...STROKE}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></g>,
  rehab: <g {...STROKE}><circle cx="12" cy="5" r="2" /><path d="M12 7.5v4.5M8.5 10.5L12 8l3.5 2.5M12 12l-3 5M12 12l3 5M6 20h12" /></g>,
  careHands: <g {...STROKE}><path d="M12 10.5s-3-1.9-3-4a2 2 0 013-1.7 2 2 0 013 1.7c0 2.1-3 4-3 4z" /><path d="M5 13l4.2 4.2c.8.8 1.8 1.2 2.8 1.2h1.5" /><path d="M19 13l-4.2 4.2" /><path d="M4 17l3 3M20 17l-3 3" /></g>,
  trophy: <g {...STROKE}><path d="M8 4h8v6a4 4 0 01-8 0V4z" /><path d="M5 5H3v3a3 3 0 003 3M19 5h2v3a3 3 0 01-3 3M9 16h6v3H9zM8 19h8" /></g>,
  brain: <g {...STROKE}><path d="M9 5a3 3 0 013 0 3 3 0 013 0 3 3 0 012.5 4.5A3 3 0 0117 14a3 3 0 01-2 3 3 3 0 01-3 1 3 3 0 01-3-1 3 3 0 01-2-3 3 3 0 01-.5-4.5A3 3 0 019 5z" /><path d="M12 5v14M9 8h.01M15 8h.01M9 14h.01M15 14h.01" /></g>,
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" {...STROKE} />,
  sparkles: <g {...STROKE}><path d="M5 5l1.5 4L11 10l-4.5 1L5 15l-1.5-4L-1 10l4.5-1z" transform="translate(5 0)" /><path d="M16 13l1 2.5L19.5 16 17 17l-1 2-1-2-2.5-1L15 15.5z" /></g>,
  tools: <g {...STROKE}><path d="M14 7l3-3 3 3-3 3z" /><path d="M9 11l-5 5v4h4l5-5" /><path d="M11 9l4 4" /></g>,
  palm: <g {...STROKE}><path d="M12 21c.8-4.8.8-8.5 0-11" /><path d="M12 10c-2.8-.2-5.2 1-7 3M12 10c-1.3-2.7-3.5-4.1-6.4-4.3M12 10c1.4-2.7 3.7-4.1 6.8-4.2M12 10c2.7-.2 5 .9 7 3" /><path d="M8 21h8" /></g>,
  coast: <g {...STROKE}><path d="M4 15c2-1.5 4-1.5 6 0s4 1.5 6 0 3.2-1.4 4 0" /><path d="M4 19c2-1.5 4-1.5 6 0s4 1.5 6 0 3.2-1.4 4 0" /><path d="M7 11a5 5 0 018-4M17 7h3M14 4l1-2M10 5L8 3" /></g>,
  bridge: <g {...STROKE}><path d="M4 18h16M6 18V9M18 18V9M6 9l6-5 6 5M9 18v-5M12 18v-7M15 18v-5" /><path d="M6 12h12" /></g>,
  // Body part icons (stylized, abstract)
  spine: (
    <g {...STROKE}>
      <path d="M12 3v18" />
      <path d="M9 6h6M8 9h8M9 12h6M8 15h8M9 18h6" />
    </g>
  ),
  shoulder: (
    <g {...STROKE}>
      <circle cx="9" cy="9" r="3" />
      <path d="M12 10c4 1 7 4 7 9M9 12c-3 1-5 4-5 8" />
    </g>
  ),
  knee: (
    <g {...STROKE}>
      <path d="M9 4v6c0 2-2 4-2 6s2 4 5 4M14 6v8c0 1 1 2 2 4" />
      <circle cx="11.5" cy="13" r="2.5" />
    </g>
  ),
  ankle: (
    <g {...STROKE}>
      <path d="M9 4v8c0 1-1 2-2 3l-2 2v3h12v-3l-3-2c-1-1-2-2-2-3V4" />
    </g>
  ),
  vestibular: (
    <g {...STROKE}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4a8 8 0 018 8M12 20a8 8 0 01-8-8M19 6l-2 2M5 18l2-2" />
    </g>
  ),
  hip: (
    <g {...STROKE}>
      <circle cx="9" cy="9" r="2.5" />
      <path d="M11 10c4 0 7 2 7 6v4M9 12c-2 1-4 3-4 7v1" />
    </g>
  ),
  treatmentTable: (
    <g {...STROKE}>
      <path d="M5 12h14M7 12v7M17 12v7M9 12V9a3 3 0 016 0v3" />
      <circle cx="12" cy="6" r="2" />
      <path d="M8 19h8" />
    </g>
  ),
  soundwave: (
    <g {...STROKE}>
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M7 7a7 7 0 000 10M17 7a7 7 0 010 10M4.5 4.5a10.5 10.5 0 000 15M19.5 4.5a10.5 10.5 0 010 15" />
    </g>
  ),
  headProfile: (
    <g {...STROKE}>
      <path d="M10 20v-3H8a3 3 0 01-3-3v-2.5A7 7 0 0112 4a7 7 0 016.7 9" />
      <path d="M13 20v-2.5c0-1.2.5-2.1 1.5-2.8l1.5-1" />
      <circle cx="12" cy="11" r="2.2" />
    </g>
  ),
  massage: (
    <g {...STROKE}>
      <path d="M7 5c0 3.5-2.5 4.2-2.5 7.3 0 2.4 1.6 4.3 4.2 4.3 1.7 0 2.9-.8 3.8-2" />
      <path d="M17 5c0 3.5 2.5 4.2 2.5 7.3 0 2.4-1.6 4.3-4.2 4.3-1.7 0-2.9-.8-3.8-2" />
      <path d="M8.5 20c2.2-1.4 4.8-1.4 7 0M9 8h.01M15 8h.01M11 11h2" />
    </g>
  ),
  laptop: (
    <g {...STROKE}>
      <rect x="6" y="5" width="12" height="9" rx="1.5" />
      <path d="M4 18h16l-2-4H6zM10 9l2 2 3-3" />
    </g>
  ),
}

export default function Icon({ name, size = 22, className = '', strokeWidth }) {
  const node = ICONS[name]
  if (!node) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={strokeWidth ? { strokeWidth } : undefined}
      aria-hidden="true"
    >
      {node}
    </svg>
  )
}
