export default function FallbackImage({ fallback, alt, ...props }) {
  return (
    <img
      {...props}
      alt={alt}
      onError={(event) => {
        const image = event.currentTarget
        if (!fallback || image.dataset.fallbackLoaded) return
        image.dataset.fallbackLoaded = 'true'
        image.src = fallback
      }}
    />
  )
}
