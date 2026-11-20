export function Brand({ footer = false }: { footer?: boolean }) {
  return <span className="brand" aria-label="Foodsify">
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={footer ? "text-primary" : "text-foreground"}>
      <path d="M10 32V18C10 10.8 15.8 5 23 5H33V13H23C20.2 13 18 15.2 18 18V32H10Z" fill="currentColor" />
      <path d="M18 18H30V26H18V18Z" fill="currentColor" />
      <circle cx="7" cy="7" r="4" className="fill-primary" />
    </svg>
    foodsify<span className="sr-only"> home</span>
  </span>;
}