export default function Logo({ size = 'md', tagline = false, className = '' }) {
  const sizes = {
    sm: { num: 'text-2xl', tag: 'text-[7px]' },
    md: { num: 'text-3xl', tag: 'text-[8px]' },
    lg: { num: 'text-5xl md:text-6xl', tag: 'text-[10px] md:text-xs' },
  }
  const s = sizes[size]

  return (
    <div className={`inline-flex flex-col items-start leading-none ${className}`}>
      <div className={`font-display flex items-center gap-1 ${s.num}`}>
        <span className="text-ember drop-shadow-[0_2px_0_rgba(0,0,0,0.4)]">1</span>
        <span className="relative text-flame">
          0
          <svg
            viewBox="0 0 24 24"
            className="absolute -top-[62%] left-1/2 -translate-x-1/2 w-[70%] text-flame animate-flicker"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2c.6 2.2-1.8 3.4-1.8 5.6 0 1 .6 1.7 1.4 1.7.9 0 1.4-.8 1.2-1.7 1.6.9 2.7 2.7 2.7 4.7A5.5 5.5 0 0 1 9 17.5 5.5 5.5 0 0 1 6.5 8c.3 1.6 1.2 2.3 1.9 2.3.6 0 1-.5.8-1.2C8.4 6.8 10.4 4.2 12 2z" />
          </svg>
        </span>
        <span className="text-ember drop-shadow-[0_2px_0_rgba(0,0,0,0.4)]">1</span>
      </div>
      <div className={`font-display text-ember tracking-wide -mt-1 ${s.num}`}>GRILLZ</div>
      {tagline && (
        <div className={`font-body font-semibold text-bone/80 tracking-[0.25em] uppercase ${s.tag} -mt-0.5`}>
          Shawarma &amp; More
        </div>
      )}
    </div>
  )
}
