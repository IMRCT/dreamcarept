// Inline SVG icon library — single source for all icons across the site.
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
  phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 014 6a2 2 0 011-2z" {...STROKE} />,
  mail: <g {...STROKE}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>,
  pin: <g {...STROKE}><path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></g>,
  clock: <g {...STROKE}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
  star: <path d="M12 3l2.7 6 6.3.6-4.8 4.4 1.5 6.5L12 17l-5.7 3.5L7.8 14 3 9.6l6.3-.6z" {...STROKE} />,
  heart: <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" {...STROKE} />,
  help: <g {...STROKE}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4M12 17.5h.01" /></g>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" {...STROKE} />,
  close: <path d="M6 6l12 12M18 6L6 18" {...STROKE} />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" {...STROKE} />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" {...STROKE} />,
  hands: <g {...STROKE}><path d="M6 12V8a2 2 0 014 0v4M10 12V6a2 2 0 014 0v6M14 12V8a2 2 0 014 0v6c0 4-3 6-6 6s-6-2-6-6v-2" /></g>,
  home: <path d="M4 11l8-7 8 7v8a2 2 0 01-2 2h-3v-6h-6v6H6a2 2 0 01-2-2v-8z" {...STROKE} />,
  user: <g {...STROKE}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></g>,
  trophy: <g {...STROKE}><path d="M8 4h8v6a4 4 0 01-8 0V4z" /><path d="M5 5H3v3a3 3 0 003 3M19 5h2v3a3 3 0 01-3 3M9 16h6v3H9zM8 19h8" /></g>,
  brain: <g {...STROKE}><path d="M9 5a3 3 0 013 0 3 3 0 013 0 3 3 0 012.5 4.5A3 3 0 0117 14a3 3 0 01-2 3 3 3 0 01-3 1 3 3 0 01-3-1 3 3 0 01-2-3 3 3 0 01-.5-4.5A3 3 0 019 5z" /><path d="M12 5v14M9 8h.01M15 8h.01M9 14h.01M15 14h.01" /></g>,
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" {...STROKE} />,
  sparkles: <g {...STROKE}><path d="M5 5l1.5 4L11 10l-4.5 1L5 15l-1.5-4L-1 10l4.5-1z" transform="translate(5 0)" /><path d="M16 13l1 2.5L19.5 16 17 17l-1 2-1-2-2.5-1L15 15.5z" /></g>,
  tools: <g {...STROKE}><path d="M14 7l3-3 3 3-3 3z" /><path d="M9 11l-5 5v4h4l5-5" /><path d="M11 9l4 4" /></g>,
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
