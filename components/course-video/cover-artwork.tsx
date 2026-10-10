import { useId } from "react"
import type { LessonCoverData } from "./cover-data"
import styles from "./cover.module.css"

function Label({
  x,
  y,
  children,
  size = 10,
}: {
  x: number
  y: number
  children: React.ReactNode
  size?: number
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontSize={size}
      letterSpacing="1.5"
    >
      {children}
    </text>
  )
}

function Node({
  x,
  y,
  label,
  active = false,
}: {
  x: number
  y: number
  label: string
  active?: boolean
}) {
  return (
    <g opacity={active ? 1 : 0.5}>
      <rect
        x={x - 43}
        y={y - 17}
        width="86"
        height="34"
        rx="7"
        fill="var(--cover-panel)"
      />
      {active && (
        <rect
          x={x - 40}
          y={y - 14}
          width="80"
          height="28"
          rx="5"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="none"
        />
      )}
      <Label x={x} y={y + 3} size={9}>
        {label}
      </Label>
    </g>
  )
}

function Window({
  focus,
  variant,
  id,
}: {
  focus: string
  variant: number
  id: string
}) {
  return (
    <g>
      <rect
        x="136"
        y="97"
        width="248"
        height="195"
        rx="12"
        fill="var(--cover-panel)"
      />
      <path d="M136 132H384" opacity="0.4" />
      {[151, 164, 177].map((x) => (
        <circle
          key={x}
          cx={x}
          cy="114"
          r="2.5"
          fill="currentColor"
          stroke="none"
          opacity="0.65"
        />
      ))}
      <Label x={281} y={117} size={9}>
        {focus}
      </Label>
      <rect
        x="152"
        y="149"
        width="51"
        height="124"
        rx="4"
        fill={`url(#${id}-glass)`}
        strokeOpacity="0.25"
      />
      {[163, 179, 195, 211].map((y, i) => (
        <path
          key={y}
          d={`M163 ${y}h${i === variant % 4 ? 26 : 18}`}
          strokeWidth={i === variant % 4 ? 3 : 2}
          opacity={i === variant % 4 ? 0.9 : 0.25}
        />
      ))}
      {variant % 3 === 0 ? (
        <g>
          <rect
            x="218"
            y="149"
            width="150"
            height="27"
            rx="4"
            fill={`url(#${id}-glass)`}
            strokeOpacity="0.6"
          />
          <circle cx="230" cy="161" r="4" opacity="0.7" />
          <path d="m233 164 4 4M246 162h60" opacity="0.4" />
          {[192, 218, 244].map((y) => (
            <g key={y}>
              <path d={`M218 ${y}h150`} opacity="0.25" />
              <path d={`M222 ${y + 11}h45m18 0h29m18 0h30`} opacity="0.5" />
            </g>
          ))}
        </g>
      ) : variant % 3 === 1 ? (
        <g>
          {[151, 185, 219].map((y, i) => (
            <g key={y}>
              <rect
                x="218"
                y={y}
                width="150"
                height="24"
                rx="4"
                strokeOpacity="0.3"
              />
              <path d={`M228 ${y + 12}h${40 + i * 15}`} opacity="0.5" />
            </g>
          ))}
          <rect
            x="312"
            y="252"
            width="56"
            height="17"
            rx="4"
            fill="currentColor"
            fillOpacity="0.25"
          />
        </g>
      ) : (
        <g>
          <rect
            x="218"
            y="151"
            width="150"
            height="40"
            rx="4"
            fill={`url(#${id}-glass)`}
            strokeOpacity="0.4"
          />
          <path d="M230 163h70m-70 13h110" opacity="0.5" />
          {[207, 229, 251].map((y) => (
            <path key={y} d={`M220 ${y}h42m20 0h84`} opacity="0.4" />
          ))}
        </g>
      )}
    </g>
  )
}

export function CoverArtwork({ cover }: { cover: LessonCoverData }) {
  const id = useId()
  const variant = cover.lessonNumber - 1
  const focusSize = cover.focus.length > 10 ? 13 : 18

  return (
    <svg
      className={styles.artwork}
      viewBox="0 0 440 360"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id={`${id}-halo`}>
          <stop stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle
        cx="255"
        cy="185"
        r="172"
        fill={`url(#${id}-halo)`}
        stroke="none"
      />

      {cover.artwork === "orbit" && (
        <g>
          {[69, 107, 144].map((r) => (
            <circle
              key={r}
              cx="247"
              cy="183"
              r={r}
              strokeOpacity={r === 107 ? 0.6 : 0.2}
              strokeDasharray={r === 144 ? "2 9" : undefined}
            />
          ))}
          <ellipse
            cx="247"
            cy="183"
            rx="171"
            ry="58"
            transform={`rotate(${-32 + variant * 9} 247 183)`}
            strokeOpacity="0.4"
          />
          <path
            d="M247 34V68M247 298V332M98 183H132M362 183H398"
            opacity="0.35"
          />
          <g className={styles.floating}>
            <path d="m247 134 39 49-39 49-39-49Z" fill={`url(#${id}-glass)`} />
            <path d="M247 134v98m-39-49h78" opacity="0.5" />
          </g>
          <circle
            cx={247 + Math.cos(variant * 0.8 - 0.8) * 107}
            cy={183 + Math.sin(variant * 0.8 - 0.8) * 107}
            r="7"
            fill="currentColor"
            stroke="var(--cover-background)"
            strokeWidth="4"
          />
          <Label x={247} y={274} size={16}>
            {cover.focus}
          </Label>
          <Label x={362} y={84} size={9}>
            A NEW PERSPECTIVE
          </Label>
        </g>
      )}

      {cover.artwork === "discovery" && (
        <g>
          {[93, 177, 261].map((y, i) => (
            <g key={y}>
              <path d={`M114 ${y}H155Q175 ${y} 175 177H230`} opacity="0.4" />
              <Node
                x={85}
                y={y}
                label={["REPEAT", "COMPLEX", "BUSINESS"][i]}
                active={i === variant % 3}
              />
            </g>
          ))}
          <path d="m240 107 70 70-70 70-70-70Z" fill={`url(#${id}-glass)`} />
          <path d="m240 126 51 51-51 51-51-51Z" opacity="0.25" />
          <Label x={240} y={181} size={13}>
            {cover.focus}
          </Label>
          <path
            className={styles.signal}
            d="M310 177h53v-59M310 177h53v59"
            strokeDasharray="4 5"
          />
          <Node x={362} y={95} label="MODEL" active />
          <Node x={362} y={259} label="REUSE" active />
          <Label x={241} y={311} size={9}>
            FROM NEEDS TO A FRAMEWORK
          </Label>
        </g>
      )}

      {cover.artwork === "architecture" && (
        <g>
          <path
            d="M247 43v270M104 146v99M390 146v99"
            strokeDasharray="4 6"
            opacity="0.2"
          />
          {[223, 161, 99].map((y, i) => (
            <g
              key={y}
              className={i === variant % 3 ? styles.floating : undefined}
            >
              <path
                d={`m247 ${y - 46} 138 65-138 65-138-65Z`}
                fill="var(--cover-background)"
                strokeOpacity="0.55"
              />
              <path
                d={`m247 ${y - 46} 138 65-138 65-138-65Z`}
                fill={`url(#${id}-glass)`}
                opacity={i === variant % 3 ? 1 : 0.35}
              />
              <path
                d={`m109 ${y + 19}v15l138 65 138-65v-15M247 ${y + 84}v15`}
                opacity="0.4"
              />
              <Label x={247} y={y + 24} size={13}>
                {["SERVICE", "BFF", "FRONTEND"][i]}
              </Label>
            </g>
          ))}
          <Label x={246} y={340} size={13}>
            {cover.focus}
          </Label>
        </g>
      )}

      {cover.artwork === "core" && (
        <g>
          <rect
            x="138"
            y="78"
            width="214"
            height="214"
            rx="25"
            strokeOpacity="0.17"
          />
          {[161, 184, 207, 230, 253, 276, 299, 322].map((x, i) => (
            <g key={x} opacity={i === variant % 8 ? 1 : 0.35}>
              <path
                d={`M${x} 112V${55 - (i % 3) * 10}M${x} 258v${32 + (i % 3) * 10}`}
              />
              <circle cx={x} cy={53 - (i % 3) * 10} r="2" fill="currentColor" />
              <path
                d={`M172 ${x - 59}H${90 - (i % 2) * 20}M318 ${x - 59}h${37 + (i % 2) * 20}`}
              />
            </g>
          ))}
          <rect
            x="168"
            y="108"
            width="154"
            height="154"
            rx="16"
            fill="var(--cover-panel)"
          />
          <rect
            x="180"
            y="120"
            width="130"
            height="130"
            rx="10"
            fill={`url(#${id}-glass)`}
            strokeOpacity="0.45"
          />
          <path d="M195 138h18M195 138v18m100 76h-18m18 0v-18" opacity="0.7" />
          <Label x={245} y={171} size={9}>
            ELPIS CORE
          </Label>
          <Label x={245} y={198} size={focusSize}>
            {cover.focus}
          </Label>
          <circle cx="245" cy="221" r="3" fill="currentColor" />
          <Node x={370} y={67} label="REQUEST" active={variant % 2 === 0} />
          <Node x={93} y={291} label="RESPONSE" active={variant % 2 === 1} />
          <path
            className={styles.signal}
            d="M327 67h-9v41M136 291h32v-29"
            strokeDasharray="4 5"
          />
        </g>
      )}

      {cover.artwork === "build" && (
        <g>
          {[85, 154, 223].map((y, i) => (
            <g key={y}>
              <rect
                x="68"
                y={y}
                width="58"
                height="44"
                rx="6"
                fill="var(--cover-panel)"
                strokeOpacity="0.5"
              />
              <Label x={97} y={y + 26} size={11}>
                {[".vue", ".js", ".css"][i]}
              </Label>
              <path d={`M126 ${y + 22}h28l51 ${177 - y - 22}`} opacity="0.4" />
            </g>
          ))}
          <g className={styles.floating}>
            <path
              d="m256 101 71 42v82l-71 42-71-42v-82Z"
              fill={`url(#${id}-glass)`}
            />
            <path
              d="m185 143 71 43 71-43M256 186v81M220 122l71 42v82"
              opacity="0.6"
            />
            <path
              d="m230 152 26-15 27 15-27 16Z"
              fill="currentColor"
              fillOpacity="0.3"
            />
          </g>
          <path
            className={styles.signal}
            d="M328 182h39v-74m-39 74h39v70"
            strokeDasharray="5 6"
          />
          <Node x={371} y={87} label="DIST /" active />
          <Node x={371} y={272} label="ASSETS" />
          <Label x={256} y={318} size={15}>
            {cover.focus}
          </Label>
        </g>
      )}

      {cover.artwork === "schema" && (
        <g>
          <path d="M82 83v-23h252v20" strokeDasharray="4 5" opacity="0.3" />
          <Window
            focus={cover.focus}
            variant={
              /TABLE|SEARCH/.test(cover.focus)
                ? 0
                : /HEADER|SIDER|DASHBOARD/.test(cover.focus)
                  ? 2
                  : 1
            }
            id={id}
          />
          <g className={styles.floating}>
            <rect
              x="45"
              y="108"
              width="104"
              height="142"
              rx="8"
              fill="var(--cover-background)"
            />
            <rect
              x="45"
              y="108"
              width="104"
              height="142"
              rx="8"
              fill={`url(#${id}-glass)`}
            />
            <Label x={97} y={151} size={28}>
              {"{ }"}
            </Label>
            <path d="M66 174h62m-52 14h42m-42 14h51m-61 14h37" opacity="0.5" />
          </g>
          <path
            className={styles.signal}
            d="M149 230h29v69h113"
            strokeDasharray="4 5"
          />
          <circle cx="294" cy="299" r="3" fill="currentColor" />
          <Label x={96} y={275} size={9}>
            SCHEMA
          </Label>
          <Label x={301} y={327} size={9}>
            RENDERED VIEW
          </Label>
        </g>
      )}

      {cover.artwork === "components" && (
        <g>
          <rect
            x="105"
            y="58"
            width="241"
            height="216"
            rx="14"
            transform="rotate(-9 226 166)"
            fill={`url(#${id}-glass)`}
            strokeOpacity="0.3"
          />
          <Window
            focus={cover.focus}
            variant={cover.focus === "DETAIL" ? 2 : 1}
            id={id}
          />
          <g className={styles.floating}>
            <rect
              x="73"
              y="196"
              width="99"
              height="102"
              rx="10"
              fill="var(--cover-background)"
            />
            <rect
              x="73"
              y="196"
              width="99"
              height="102"
              rx="10"
              fill={`url(#${id}-glass)`}
            />
            <path
              d="m106 220-10 10 10 10m30-20 10 10-10 10m-9-24-10 29"
              strokeWidth="1.5"
            />
            <Label x={122} y={274} size={9}>
              COMPONENT
            </Label>
          </g>
          <path
            className={styles.signal}
            d="M175 307h138v-15"
            strokeDasharray="4 5"
          />
          <Label x={280} y={331} size={9}>
            CONFIGURE · COMPOSE · REUSE
          </Label>
        </g>
      )}

      {cover.artwork === "package" && (
        <g>
          <path
            d="m252 127 92 49v108l-92 48-92-48V176Z"
            fill={`url(#${id}-glass)`}
          />
          <path d="m160 176 92 49 92-49M252 225v107" opacity="0.8" />
          <path
            className={styles.floating}
            d="m252 63 92 49-92 49-92-49Z"
            fill="var(--cover-panel)"
          />
          <path d="m252 83 53 29-53 28-53-28Z" strokeOpacity="0.4" />
          <path
            d="M160 112v43M344 112v43M252 161v38"
            strokeDasharray="3 6"
            opacity="0.4"
          />
          <path
            d="m282 240 36-19v32l-36 19Z"
            fill="currentColor"
            fillOpacity="0.18"
            strokeOpacity="0.4"
          />
          <Label x={243} y={188} size={12}>
            @elpis/core
          </Label>
          <Node x={90} y={80} label="SOURCE" active={variant < 3} />
          <Node x={364} y={53} label="NPM" active={variant >= 3} />
          <path
            className={styles.signal}
            d="M133 80h26M295 53h26"
            strokeDasharray="3 5"
          />
          <Label x={244} y={355} size={12}>
            {cover.focus}
          </Label>
        </g>
      )}

      {cover.artwork === "deployment" && (
        <g>
          <path d="M104 90h258" strokeOpacity="0.3" />
          {[104, 190, 276, 362].map((x, i) => (
            <g key={x}>
              <circle
                cx={x}
                cy="90"
                r="17"
                fill="var(--cover-panel)"
                strokeOpacity={i <= variant % 4 ? 1 : 0.35}
              />
              <path
                d={`m${x - 5} 90 4 4 7-8`}
                strokeWidth="1.5"
                opacity={i <= variant % 4 ? 1 : 0.25}
              />
              <Label x={x} y={62} size={9}>
                {["GIT", "BUILD", "TEST", "SHIP"][i]}
              </Label>
            </g>
          ))}
          <path
            className={styles.signal}
            d="M362 108v47h-83"
            strokeDasharray="4 5"
          />
          <rect
            x="141"
            y="151"
            width="219"
            height="144"
            rx="11"
            fill={`url(#${id}-glass)`}
          />
          <path d="M141 181h219" strokeOpacity="0.4" />
          <circle cx="157" cy="166" r="3" fill="currentColor" />
          <Label x={276} y={169} size={8}>
            ELPIS APPLICATION
          </Label>
          <circle cx="250" cy="225" r="23" strokeOpacity="0.4" />
          <path d="m239 224 8 8 16-17" strokeWidth="2" />
          <Label x={250} y={272} size={15}>
            {cover.focus}
          </Label>
          <Label x={250} y={326} size={9}>
            READY FOR THE REAL WORLD
          </Label>
        </g>
      )}
    </svg>
  )
}
