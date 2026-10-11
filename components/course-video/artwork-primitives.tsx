import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

export type ArtworkPalette = { paper: string; ink: string }
export const LINE = "var(--art-line)"
export const DETAIL = "var(--art-detail)"
export const SIDE = "var(--art-side)"
export const INVERSE = "var(--art-inverse)"

export function Glyph({
  icon: Icon,
  x,
  y,
  size = 38,
  inverse = false,
}: {
  icon: LucideIcon
  x: number
  y: number
  size?: number
  inverse?: boolean
}) {
  return (
    <Icon
      x={x - size / 2}
      y={y - size / 2}
      width={size}
      height={size}
      stroke={inverse ? INVERSE : "var(--art-ink)"}
      strokeWidth={1.5}
      fill="none"
    />
  )
}

export function Tile({
  x,
  y,
  icon,
  fill,
  active = false,
  width = 76,
  height = 68,
}: {
  x: number
  y: number
  icon: LucideIcon
  fill: string
  active?: boolean
  width?: number
  height?: number
}) {
  return (
    <g>
      <rect
        x={x - width / 2 + 5}
        y={y - height / 2 + 7}
        width={width}
        height={height}
        rx="9"
        fill={SIDE}
      />
      <rect
        x={x - width / 2}
        y={y - height / 2}
        width={width}
        height={height}
        rx="9"
        fill={fill}
      />
      <Glyph
        icon={icon}
        x={x}
        y={y}
        size={Math.min(width, height) * 0.48}
        inverse={active}
      />
    </g>
  )
}

export function Slab({
  x = 240,
  y,
  width = 250,
  height = 112,
  depth = 14,
  fill,
}: {
  x?: number
  y: number
  width?: number
  height?: number
  depth?: number
  fill: string
}) {
  const l = x - width / 2,
    r = x + width / 2,
    t = y - height / 2,
    b = y + height / 2
  return (
    <g>
      <path
        d={`M${l} ${y}v${depth}l${width / 2} ${height / 2} ${width / 2} -${height / 2}v-${depth}`}
        fill={SIDE}
      />
      <path d={`M${x} ${t} ${r} ${y} ${x} ${b} ${l} ${y}Z`} fill={fill} />
      <path d={`M${x} ${b}v${depth}`} />
    </g>
  )
}

export function Cube({
  x,
  y,
  size = 50,
  fill,
}: {
  x: number
  y: number
  size?: number
  fill: string
}) {
  return (
    <g>
      <path
        d={`M${x} ${y}l${size} ${size / 2}v${size}l-${size} ${size / 2}-${size}-${size / 2}v-${size}Z`}
        fill={SIDE}
      />
      <path
        d={`M${x} ${y}l${size} ${size / 2}-${size} ${size / 2}-${size}-${size / 2}Z`}
        fill={fill}
      />
      <path d={`M${x} ${y + size}v${size}m0-${size} ${size}-${size / 2}`} />
    </g>
  )
}

export function Iso({
  x = 240,
  y = 140,
  children,
}: {
  x?: number
  y?: number
  children: ReactNode
}) {
  return <g transform={`matrix(1 .48 -1 .48 ${x} ${y})`}>{children}</g>
}

export function Sheet({
  x = 146,
  y = 64,
  width = 188,
  height = 230,
  fill,
  children,
}: {
  x?: number
  y?: number
  width?: number
  height?: number
  fill: string
  children?: ReactNode
}) {
  return (
    <g>
      <rect
        x={x - 10}
        y={y + 9}
        width={width}
        height={height}
        rx="9"
        fill={SIDE}
      />
      <rect x={x} y={y} width={width} height={height} rx="9" fill={fill} />
      <path
        d={`M${x + 18} ${y + 23}h${width * 0.36}`}
        stroke={DETAIL}
        strokeWidth="3"
      />
      {children}
    </g>
  )
}

export function Frame({
  x = 100,
  y = 72,
  width = 280,
  height = 200,
  fill,
  children,
}: {
  x?: number
  y?: number
  width?: number
  height?: number
  fill: string
  children?: ReactNode
}) {
  return (
    <g>
      <rect
        x={x + 6}
        y={y + 8}
        width={width}
        height={height}
        rx="10"
        fill={SIDE}
      />
      <rect x={x} y={y} width={width} height={height} rx="10" fill={fill} />
      <path d={`M${x} ${y + 30}h${width}`} stroke={DETAIL} />
      {[17, 27, 37].map((dx) => (
        <circle
          key={dx}
          cx={x + dx}
          cy={y + 15}
          r="2.5"
          fill={DETAIL}
          stroke="none"
        />
      ))}
      {children}
    </g>
  )
}

export function Rows({
  x,
  y,
  width = 108,
  count = 4,
  gap = 22,
}: {
  x: number
  y: number
  width?: number
  count?: number
  gap?: number
}) {
  return (
    <g stroke={DETAIL}>
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={`M${x} ${y + i * gap}h${i === count - 1 ? width * 0.65 : width}`}
        />
      ))}
    </g>
  )
}

export function Database({
  x,
  y,
  width = 84,
  height = 100,
  fill,
}: {
  x: number
  y: number
  width?: number
  height?: number
  fill: string
}) {
  const r = width / 2
  return (
    <g>
      <path
        d={`M${x - r} ${y}v${height}a${r} 13 0 0 0 ${width} 0V${y}`}
        fill={fill}
      />
      <ellipse cx={x} cy={y} rx={r} ry="13" fill={fill} />
      <path
        d={`M${x - r} ${y + height * 0.42}a${r} 13 0 0 0 ${width} 0M${x - r} ${y + height * 0.72}a${r} 13 0 0 0 ${width} 0`}
        stroke={DETAIL}
      />
    </g>
  )
}

export function GridTable({
  x = 126,
  y = 125,
  width = 224,
  height = 120,
  columns = 3,
  rows = 4,
  selectedRow = -1,
  selectedColumn = -1,
  paper,
  ink,
}: {
  x?: number
  y?: number
  width?: number
  height?: number
  columns?: number
  rows?: number
  selectedRow?: number
  selectedColumn?: number
} & ArtworkPalette) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx="5" fill={paper} />
      <rect
        x={x + 1}
        y={y + 1}
        width={width - 2}
        height={height / rows - 1}
        rx="4"
        fill={SIDE}
        stroke="none"
      />
      {selectedRow >= 0 && (
        <rect
          x={x + 1}
          y={y + (selectedRow * height) / rows}
          width={width - 2}
          height={height / rows}
          fill={ink}
          stroke="none"
        />
      )}
      {selectedColumn >= 0 && (
        <rect
          x={x + (selectedColumn * width) / columns}
          y={y + 1}
          width={width / columns}
          height={height - 2}
          fill={ink}
          stroke="none"
        />
      )}
      {Array.from({ length: rows - 1 }, (_, i) => (
        <path
          key={i}
          d={`M${x} ${y + ((i + 1) * height) / rows}h${width}`}
          stroke={DETAIL}
        />
      ))}
      {Array.from({ length: columns - 1 }, (_, i) => (
        <path
          key={i}
          d={`M${x + ((i + 1) * width) / columns} ${y}v${height}`}
          stroke={DETAIL}
        />
      ))}
    </g>
  )
}

export function FormFields({
  x = 178,
  y = 120,
  width = 120,
  filled = false,
  count = 3,
}: {
  x?: number
  y?: number
  width?: number
  filled?: boolean
  count?: number
}) {
  return (
    <g>
      {Array.from({ length: count }, (_, i) => (
        <g key={i}>
          <path d={`M${x} ${y + i * 42}h34`} stroke={DETAIL} strokeWidth="2" />
          <rect
            x={x}
            y={y + i * 42 + 9}
            width={width}
            height="24"
            rx="4"
            fill="var(--art-paper)"
          />
          {filled && (
            <path
              d={`M${x + 10} ${y + i * 42 + 21}h${width * (0.6 - i * 0.1)}`}
              stroke={DETAIL}
            />
          )}
        </g>
      ))}
    </g>
  )
}

export function Arrow({ d }: { d: string }) {
  return <path d={d} stroke={LINE} strokeWidth="1.6" />
}
