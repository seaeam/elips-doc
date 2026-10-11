import {
  ArrowDownToLine,
  ArrowRightLeft,
  ArrowUpFromLine,
  BookOpen,
  Box,
  Braces,
  Check,
  CircleCheck,
  Clock3,
  CodeXml,
  Component,
  Database as DatabaseIcon,
  Eye,
  FileCode2,
  FileImage,
  FileJson2,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  GitMerge,
  Globe,
  KeyRound,
  Layers3,
  LayoutDashboard,
  Link2,
  ListFilter,
  LockKeyhole,
  LogIn,
  LogOut,
  Monitor,
  Network,
  Plus,
  Puzzle,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Table2,
  Terminal,
  TriangleAlert,
  Upload,
  UserRound,
  Users,
  Wrench,
} from "lucide-react"
import type { CoverArtwork } from "./cover-data"
import {
  Arrow,
  Cube,
  Database,
  DETAIL,
  FormFields,
  Frame,
  Glyph,
  GridTable,
  INVERSE,
  Iso,
  Rows,
  Sheet,
  SIDE,
  Slab,
  Tile,
  type ArtworkPalette,
} from "./artwork-primitives"

export function LessonArtwork({
  artwork,
  paper,
  ink,
}: { artwork: CoverArtwork } & ArtworkPalette) {
  const palette = { paper, ink }
  switch (artwork) {
    // 01 · One visual metaphor for each introduction lesson.
    case "course-origin":
      return (
        <g>
          <path d="m94 148 143-72 149 72v28l-144 78-148-78Z" fill={SIDE} />
          <path d="m94 157 148 76 144-77m-292 11 148 76 144-77M242 232v22" />
          <path
            d="M94 148 211 88q15-8 31 8v122q-17-17-32-9L94 148Z"
            fill={paper}
          />
          <path
            d="m242 96 22-9q11-5 24 2l98 59-119 62q-12 6-25 8Z"
            fill={paper}
          />
          <path
            d="m126 148 80-40m-63 49 64-32m-48 40 48-24m65-31 76 42m-94-24 61 34m-79-16 48 26"
            stroke={DETAIL}
          />
          <path d="m286 88 19 11-31 16v64l-12-5-11 17v-87Z" fill={ink} />
        </g>
      )
    case "industry-context":
      return (
        <g>
          <Slab y={248} width={302} height={92} fill={paper} />
          {[
            { x: 145, y: 175, h: 65 },
            { x: 213, y: 137, h: 90 },
            { x: 281, y: 83, h: 126 },
          ].map(({ x, y, h }) => (
            <g key={x}>
              <path
                d={`M${x} ${y}l42-20 23 12v${h}l-42 21-23-13Z`}
                fill={paper}
              />
              <path d={`m${x} ${y} 23 13 42-21m-42 21v${h}`} />
            </g>
          ))}
          <Arrow d="m112 125 92-42 105-27m-10-7 10 7-6 12" />
          <Tile
            x={352}
            y={225}
            icon={Clock3}
            fill={ink}
            active
            width={64}
            height={62}
          />
        </g>
      )
    case "course-roadmap":
      return (
        <g>
          <Sheet x={119} y={60} width={248} height={234} fill={paper}>
            <path
              d="M156 126h150a24 24 0 0 1 0 48H183a24 24 0 0 0 0 48h140"
              strokeWidth="2"
            />
            {[
              { x: 156, y: 126 },
              { x: 248, y: 126 },
              { x: 306, y: 174 },
              { x: 213, y: 174 },
              { x: 183, y: 222 },
              { x: 323, y: 222 },
            ].map(({ x, y }, i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="9"
                fill={i === 5 ? ink : paper}
              />
            ))}
            <path d="M323 222v-41l25 10-25 9" fill={ink} />
          </Sheet>
        </g>
      )
    case "audience":
      return (
        <g>
          <Tile
            x={124}
            y={179}
            icon={UserRound}
            fill={paper}
            width={88}
            height={116}
          />
          <Tile
            x={356}
            y={179}
            icon={UserRound}
            fill={paper}
            width={88}
            height={116}
          />
          <Tile
            x={240}
            y={158}
            icon={UserRound}
            fill={ink}
            active
            width={108}
            height={154}
          />
          <circle cx="240" cy="263" r="24" fill={paper} />
          <Glyph icon={Check} x={240} y={263} size={28} />
        </g>
      )
    case "study-method":
      return (
        <g>
          <path
            d="M166 104h141q32 0 32 32v23M339 222v18q0 32-32 32H170q-32 0-32-32v-95m-11 11 11-11 10 12"
            strokeWidth="2"
          />
          <Tile
            x={155}
            y={112}
            icon={BookOpen}
            fill={paper}
            width={86}
            height={76}
          />
          <Tile
            x={335}
            y={183}
            icon={CodeXml}
            fill={ink}
            active
            width={88}
            height={78}
          />
          <Tile
            x={214}
            y={269}
            icon={RefreshCw}
            fill={paper}
            width={82}
            height={68}
          />
        </g>
      )
    case "team":
      return (
        <g>
          <Slab y={217} width={312} height={134} fill={paper} />
          <path d="m145 209 95-82 95 82-190 0" strokeDasharray="4 5" />
          <Tile
            x={240}
            y={112}
            icon={Users}
            fill={ink}
            active
            width={104}
            height={80}
          />
          <Tile
            x={142}
            y={209}
            icon={UserRound}
            fill={paper}
            width={70}
            height={72}
          />
          <Tile
            x={339}
            y={209}
            icon={UserRound}
            fill={paper}
            width={70}
            height={72}
          />
          <Glyph icon={Link2} x={242} y={247} size={32} />
        </g>
      )
    // 02 · Repetition, foundations, and the domain model are different scenes.
    case "repetitive-work":
      return (
        <g>
          {[
            { x: 99, y: 105 },
            { x: 175, y: 79 },
            { x: 251, y: 105 },
          ].map(({ x, y }) => (
            <Sheet key={x} x={x} y={y} width={116} height={164} fill={paper}>
              <Rows x={x + 18} y={y + 57} width={78} count={4} />
            </Sheet>
          ))}
          <Tile
            x={354}
            y={267}
            icon={RefreshCw}
            fill={ink}
            active
            width={68}
            height={60}
          />
          <Arrow d="M108 288H78V100m-8 9 8-9 8 9" />
        </g>
      )
    case "architecture-foundation":
      return (
        <g>
          <Slab y={251} width={306} height={106} depth={18} fill={ink} />
          <Slab y={221} width={250} height={102} fill={paper} />
          <Cube x={190} y={117} size={51} fill={paper} />
          <Cube x={281} y={72} size={51} fill={paper} />
          <Tile
            x={362}
            y={133}
            icon={Wrench}
            fill={ink}
            active
            width={64}
            height={60}
          />
        </g>
      )
    case "domain-requirements":
      return (
        <g>
          <path
            d="m116 109 124 85 124-85M116 258l124-64 124 64"
            strokeDasharray="4 6"
          />
          <Slab x={116} y={103} width={80} height={40} fill={paper} />
          <Slab x={364} y={103} width={80} height={40} fill={paper} />
          <Slab x={116} y={252} width={80} height={40} fill={paper} />
          <Slab x={364} y={252} width={80} height={40} fill={paper} />
          <Cube x={240} y={112} size={58} fill={ink} />
          <Glyph icon={Braces} x={240} y={149} size={31} inverse />
        </g>
      )
    // 03 · Concrete architecture and technology choices.
    case "elpis-identity":
      return (
        <g>
          <Slab y={258} width={256} height={96} fill={paper} />
          {[
            { y: 78, w: 142 },
            { y: 140, w: 108 },
            { y: 202, w: 142 },
          ].map(({ y, w }) => (
            <g key={y}>
              <path d={`M166 ${y}h${w}v30l-18 12H148V${y + 12}Z`} fill={SIDE} />
              <path d={`M166 ${y}h${w}l-18 12H148Z`} fill={paper} />
              <path d={`M148 ${y + 12}h${w}v30H148Z`} fill={ink} />
            </g>
          ))}
        </g>
      )
    case "solution-research":
      return (
        <g>
          {[
            { x: 90, y: 103 },
            { x: 195, y: 73 },
            { x: 300, y: 103 },
          ].map(({ x, y }, i) => (
            <Sheet
              key={x}
              x={x}
              y={y}
              width={90}
              height={168}
              fill={i === 1 ? ink : paper}
            >
              <Glyph
                icon={i === 1 ? CircleCheck : Layers3}
                x={x + 45}
                y={y + 61}
                size={31}
                inverse={i === 1}
              />
              <Rows x={x + 16} y={y + 105} width={58} count={3} gap={18} />
            </Sheet>
          ))}
        </g>
      )
    case "layered-architecture":
      return (
        <g>
          {[226, 165, 104].map((y, i) => (
            <Slab
              key={y}
              y={y}
              width={270}
              height={122}
              fill={i === 1 ? ink : paper}
            />
          ))}
          <Iso y={104}>
            <rect x="-42" y="-42" width="84" height="84" rx="5" />
            <path d="M-24-20h48M-24 0h32M-24 20h42" stroke={DETAIL} />
          </Iso>
        </g>
      )
    case "vue-node":
      return (
        <g>
          <Slab y={250} width={296} height={100} fill={paper} />
          <Tile
            x={144}
            y={145}
            icon={CodeXml}
            fill={paper}
            width={120}
            height={134}
          />
          <Tile
            x={336}
            y={145}
            icon={Server}
            fill={ink}
            active
            width={120}
            height={134}
          />
          <Glyph icon={ArrowRightLeft} x={240} y={150} size={36} />
        </g>
      )
    case "bff-design":
      return (
        <g>
          <path d="M136 100h44v80h30M136 180h74M136 260h44v-80m70 0h60" />
          <Tile
            x={102}
            y={100}
            icon={DatabaseIcon}
            fill={paper}
            width={65}
            height={57}
          />
          <Tile
            x={102}
            y={180}
            icon={Server}
            fill={paper}
            width={65}
            height={57}
          />
          <Tile
            x={102}
            y={260}
            icon={Globe}
            fill={paper}
            width={65}
            height={57}
          />
          <Tile
            x={235}
            y={180}
            icon={Network}
            fill={ink}
            active
            width={72}
            height={84}
          />
          <Tile
            x={363}
            y={180}
            icon={Monitor}
            fill={paper}
            width={80}
            height={106}
          />
        </g>
      )
    case "model-architecture":
      return (
        <g>
          <Sheet x={83} y={84} width={125} height={188} fill={paper}>
            <Glyph icon={Braces} x={145} y={151} size={43} />
            <Rows x={107} y={208} width={78} count={2} />
          </Sheet>
          <Arrow d="M215 179h49m-10-7 10 7-10 7" />
          <Slab x={331} y={218} width={130} height={58} fill={paper} />
          <Slab x={331} y={160} width={130} height={58} fill={ink} />
          <Slab x={331} y={102} width={130} height={58} fill={paper} />
        </g>
      )
    // 04 · Repository, boot sequence, and each server capability.
    case "git-init":
      return (
        <g>
          <path
            d="M108 116V89q0-10 10-10h89l23 23h133q10 0 10 10v149H108Z"
            fill={SIDE}
          />
          <path
            d="M96 124h266q12 0 10 12l-17 143H87l-5-140q0-15 14-15Z"
            fill={paper}
          />
          <Glyph icon={GitBranch} x={214} y={202} size={75} />
          <Tile
            x={351}
            y={107}
            icon={Plus}
            fill={ink}
            active
            width={64}
            height={62}
          />
        </g>
      )
    case "gitflow":
      return (
        <g>
          <Slab y={268} width={306} height={70} fill={paper} />
          <path
            d="M175 72v194M175 111q0 29 54 29h36q42 0 42 36v40q0 37-42 37h-90"
            strokeWidth="3"
          />
          {[
            { x: 175, y: 78 },
            { x: 175, y: 138 },
            { x: 175, y: 204 },
            { x: 175, y: 264 },
            { x: 307, y: 176 },
            { x: 307, y: 223 },
          ].map(({ x, y }, i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="14"
              fill={i > 3 ? ink : paper}
              strokeWidth="2"
            />
          ))}
          <Glyph icon={GitMerge} x={361} y={104} size={39} />
        </g>
      )
    case "project-bootstrap":
      return (
        <g>
          <Frame x={100} y={65} width={280} height={224} fill={paper}>
            <path
              d="M132 118v136m0-109h30m-30 50h30m-30 49h30"
              strokeWidth="2"
            />
            <Glyph icon={FolderOpen} x={192} y={143} size={35} />
            <Glyph icon={FileJson2} x={192} y={193} size={35} />
            <Glyph icon={Terminal} x={192} y={243} size={35} />
            <Rows x={229} y={143} width={107} count={3} gap={50} />
          </Frame>
        </g>
      )
    case "kernel-design":
      return (
        <g>
          <Slab y={182} width={282} height={136} depth={18} fill={paper} />
          <Iso y={182}>
            {[-56, -28, 0, 28, 56].map((p) => (
              <path
                key={p}
                d={`M${p}-96v24M${p} 72v24M-96 ${p}h24M72 ${p}h24`}
                strokeWidth="5"
              />
            ))}
            <rect x="-62" y="-62" width="124" height="124" rx="9" fill={ink} />
            <rect
              x="-40"
              y="-40"
              width="80"
              height="80"
              rx="4"
              stroke={INVERSE}
            />
            <path
              d="M-18-18h36M-18 0h24M-18 18h36"
              stroke={INVERSE}
              strokeWidth="3"
            />
          </Iso>
        </g>
      )
    case "module-loader":
      return (
        <g>
          <path d="M135 102h37v78h72M135 179h37M135 256h37v-76" />
          {[FileCode2, Folder, Settings2].map((icon, i) => (
            <Tile
              key={i}
              x={102}
              y={102 + i * 77}
              icon={icon}
              fill={paper}
              width={66}
              height={60}
            />
          ))}
          <Sheet x={244} y={91} width={138} height={193} fill={paper}>
            <rect x="267" y="144" width="92" height="100" rx="7" fill={ink} />
            <Glyph icon={ArrowDownToLine} x={313} y={192} size={49} inverse />
          </Sheet>
        </g>
      )
    case "engine-boot":
      return (
        <g>
          <Tile
            x={134}
            y={120}
            icon={Settings2}
            fill={paper}
            width={104}
            height={102}
          />
          <path d="M185 122h113v41m-8-9 8 9 8-9" />
          <Tile
            x={299}
            y={222}
            icon={Server}
            fill={ink}
            active
            width={138}
            height={115}
          />
          <Glyph icon={Rocket} x={167} y={250} size={55} />
          <path d="m143 279-14 12m25-4-7 8" stroke={DETAIL} />
        </g>
      )
    case "request-router":
      return (
        <g>
          <path
            d="M144 181h63m70 0h44V99h43M321 181h43M321 181v81h43"
            strokeWidth="2"
          />
          <Tile
            x={104}
            y={181}
            icon={Globe}
            fill={paper}
            width={80}
            height={96}
          />
          <Tile
            x={244}
            y={181}
            icon={GitBranch}
            fill={ink}
            active
            width={74}
            height={82}
          />
          {[Monitor, DatabaseIcon, FileText].map((icon, i) => (
            <Tile
              key={i}
              x={372}
              y={99 + i * 81}
              icon={icon}
              fill={paper}
              width={59}
              height={55}
            />
          ))}
        </g>
      )
    case "static-api":
      return (
        <g>
          <Frame x={184} y={88} width={218} height={199} fill={paper}>
            <rect x="204" y="134" width="86" height="82" rx="6" fill={SIDE} />
            <Glyph icon={FileImage} x={247} y={175} size={40} />
            <Rows x={310} y={145} width={66} count={4} gap={22} />
            <Rows x={204} y={246} width={154} count={1} />
          </Frame>
          <Tile
            x={110}
            y={113}
            icon={FileCode2}
            fill={paper}
            width={70}
            height={67}
          />
          <Tile
            x={110}
            y={240}
            icon={ArrowRightLeft}
            fill={ink}
            active
            width={70}
            height={67}
          />
          <path d="M145 113h39M145 240h39" />
        </g>
      )
    case "logging":
      return (
        <g>
          <Sheet x={134} y={59} width={205} height={232} fill={paper}>
            {[116, 154, 192, 230].map((y, i) => (
              <g key={y}>
                <circle cx="162" cy={y} r="5" fill={i === 2 ? ink : SIDE} />
                <path d={`M181 ${y}h${i === 3 ? 76 : 125}`} stroke={DETAIL} />
              </g>
            ))}
          </Sheet>
          <Tile
            x={341}
            y={232}
            icon={TriangleAlert}
            fill={ink}
            active
            width={77}
            height={72}
          />
        </g>
      )
    case "schema-validation":
      return (
        <g>
          <Sheet x={111} y={64} width={184} height={230} fill={paper}>
            <Glyph icon={Braces} x={203} y={144} size={67} />
            <Rows x={137} y={217} width={127} count={3} gap={20} />
          </Sheet>
          <path d="m327 120 65 25v59q0 49-65 80-65-31-65-80v-59Z" fill={ink} />
          <Glyph icon={Check} x={327} y={197} size={61} inverse />
        </g>
      )
    // 05 · The build pipeline, rather than seven copies of a Webpack cube.
    case "webpack-design":
      return (
        <g>
          <path
            d="m134 113 93 47m-93 81 93-53m-93-19h93"
            strokeDasharray="4 6"
          />
          {[70, 142, 214].map((y) => (
            <Cube key={y} x={126} y={y} size={32} fill={paper} />
          ))}
          <Cube x={296} y={107} size={78} fill={ink} />
          <path
            d="m269 143 26 14 26-14m-26 14v24"
            stroke={INVERSE}
            strokeWidth="2"
          />
        </g>
      )
    case "build-entry":
      return (
        <g>
          <Frame x={176} y={74} width={228} height={202} fill={paper}>
            <Glyph icon={Monitor} x={290} y={171} size={90} />
            <Rows x={232} y={237} width={118} count={1} />
          </Frame>
          <Tile
            x={113}
            y={206}
            icon={Terminal}
            fill={ink}
            active
            width={111}
            height={94}
          />
          <Arrow d="M133 141v-24h80m-10-7 10 7-10 7" />
        </g>
      )
    case "resource-loaders":
      return (
        <g>
          <path d="M127 112h63v68h73M127 180h136M127 248h63v-68m80 0h44" />
          {[FileImage, FileCode2, FileText].map((icon, i) => (
            <Tile
              key={i}
              x={95}
              y={112 + i * 68}
              icon={icon}
              fill={paper}
              width={63}
              height={54}
            />
          ))}
          <Tile
            x={260}
            y={180}
            icon={Settings2}
            fill={ink}
            active
            width={94}
            height={112}
          />
          <Tile
            x={375}
            y={180}
            icon={Box}
            fill={paper}
            width={61}
            height={66}
          />
        </g>
      )
    case "build-plugins":
      return (
        <g>
          <Frame x={95} y={88} width={286} height={210} fill={paper}>
            <rect x="120" y="143" width="156" height="128" rx="8" fill={SIDE} />
            <Glyph icon={Puzzle} x={197} y={206} size={68} />
            <Rows x={299} y={164} width={57} count={4} gap={26} />
          </Frame>
          <Tile
            x={329}
            y={100}
            icon={Plus}
            fill={ink}
            active
            width={69}
            height={66}
          />
        </g>
      )
    case "bundle-output":
      return (
        <g>
          <Sheet x={111} y={75} width={170} height={219} fill={paper}>
            {[108, 129, 150, 171, 192].map((y, i) => (
              <rect
                key={y}
                x={i % 2 ? 202 : 193}
                y={y}
                width="12"
                height="17"
                rx="2"
                fill={i % 2 ? ink : SIDE}
              />
            ))}
            <rect x="191" y="216" width="25" height="35" rx="4" fill={ink} />
          </Sheet>
          <Arrow d="M303 182h62m-10-7 10 7-10 7" />
          <Tile
            x={348}
            y={91}
            icon={FileCode2}
            fill={paper}
            width={64}
            height={61}
          />
          <Tile
            x={348}
            y={255}
            icon={FileImage}
            fill={paper}
            width={64}
            height={61}
          />
        </g>
      )
    case "client-entry":
      return (
        <g>
          <Frame x={94} y={68} width={292} height={223} fill={paper}>
            <rect x="115" y="117" width="250" height="30" rx="5" fill={ink} />
            <rect x="115" y="160" width="54" height="106" rx="5" fill={SIDE} />
            <rect
              x="183"
              y="160"
              width="182"
              height="106"
              rx="5"
              fill={paper}
            />
            <Glyph icon={CodeXml} x={274} y={212} size={50} />
          </Frame>
        </g>
      )
    case "runtime-integration":
      return (
        <g>
          <Frame x={68} y={80} width={163} height={164} fill={paper}>
            <Glyph icon={Monitor} x={149} y={165} size={55} />
          </Frame>
          <Frame x={249} y={127} width={163} height={164} fill={paper}>
            <Glyph icon={Terminal} x={330} y={211} size={55} />
          </Frame>
          <Tile
            x={238}
            y={232}
            icon={Link2}
            fill={ink}
            active
            width={70}
            height={68}
          />
          <Arrow d="M230 101h99v25m-7-8 7 8 7-8" />
        </g>
      )
    // 06 · DSL, views, table capabilities, and search each have their own composition.
    case "dsl-design":
      return (
        <g>
          <rect
            x="133"
            y="69"
            width="188"
            height="225"
            rx="9"
            fill={SIDE}
            transform="rotate(-8 227 180)"
          />
          <Sheet x={160} y={58} width={188} height={237} fill={paper}>
            <Glyph icon={Braces} x={254} y={149} size={79} />
            <Rows x={184} y={218} width={138} count={3} gap={21} />
          </Sheet>
        </g>
      )
    case "dsl-parser":
      return (
        <g>
          <Tile
            x={113}
            y={110}
            icon={FileJson2}
            fill={paper}
            width={83}
            height={84}
          />
          <Tile
            x={356}
            y={245}
            icon={Component}
            fill={paper}
            width={83}
            height={78}
          />
          <path d="M153 110h88v51m0 56v28h75" />
          <path d="M185 130h114l-27 88h-61Z" fill={ink} />
          <Glyph icon={Braces} x={242} y={166} size={40} inverse />
          <path d="M222 230v41m20-41v26m20-26v37" strokeDasharray="3 6" />
        </g>
      )
    case "model-api":
      return (
        <g>
          <Database x={132} y={98} width={97} height={151} fill={paper} />
          <Tile
            x={337}
            y={182}
            icon={Braces}
            fill={ink}
            active
            width={118}
            height={133}
          />
          <Arrow d="M190 147h67m-9-7 9 7-9 7M258 218h-67m9-7-9 7 9 7" />
          <Glyph icon={Link2} x={224} y={182} size={31} />
        </g>
      )
    case "model-page":
      return (
        <g>
          <Frame x={180} y={75} width={224} height={219} fill={paper}>
            <rect x="202" y="123" width="179" height="56" rx="5" fill={SIDE} />
            <rect x="202" y="193" width="80" height="72" rx="5" fill={paper} />
            <Rows x={299} y={206} width={82} count={3} />
          </Frame>
          <Tile
            x={107}
            y={156}
            icon={FileJson2}
            fill={ink}
            active
            width={78}
            height={104}
          />
          <Arrow d="M146 156h32m-8-7 8 7-8 7" />
        </g>
      )
    case "app-list":
      return (
        <g>
          <Frame x={105} y={60} width={272} height={232} fill={paper}>
            {[
              { x: 130, y: 112 },
              { x: 246, y: 112 },
              { x: 130, y: 195 },
              { x: 246, y: 195 },
            ].map(({ x, y }, i) => (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width="104"
                  height="68"
                  rx="7"
                  fill={i === 0 ? ink : SIDE}
                />
                <Glyph
                  icon={[Box, Table2, Users, Settings2][i]}
                  x={x + 52}
                  y={y + 34}
                  size={34}
                  inverse={i === 0}
                />
              </g>
            ))}
          </Frame>
        </g>
      )
    case "app-config":
      return (
        <g>
          <Sheet x={136} y={56} width={211} height={242} fill={paper}>
            <Glyph icon={SlidersHorizontal} x={240} y={161} size={98} />
            <Rows x={163} y={248} width={150} count={2} gap={18} />
          </Sheet>
          <Tile
            x={345}
            y={105}
            icon={Box}
            fill={ink}
            active
            width={70}
            height={65}
          />
        </g>
      )
    case "header-view":
      return (
        <g>
          <Frame x={96} y={112} width={286} height={179} fill={paper}>
            <rect x="118" y="163" width="65" height="99" rx="5" fill={SIDE} />
            <Rows x={204} y={175} width={152} count={4} gap={23} />
          </Frame>
          <rect x="96" y="60" width="286" height="49" rx="8" fill={ink} />
          <rect
            x="115"
            y="76"
            width="62"
            height="16"
            rx="3"
            fill={INVERSE}
            stroke="none"
          />
          <path d="M208 84h32m18 0h32" stroke={INVERSE} />
          <circle cx="351" cy="84" r="10" stroke={INVERSE} />
          <path d="M128 110v30m223-30v30" strokeDasharray="3 4" />
        </g>
      )
    case "dashboard-entry":
      return (
        <g>
          <Frame x={86} y={64} width={308} height={231} fill={paper}>
            <rect x="103" y="110" width="72" height="166" rx="5" fill={ink} />
            <path d="M119 132h39m-39 24h27m-27 24h34" stroke={INVERSE} />
            <rect x="190" y="110" width="183" height="52" rx="5" fill={SIDE} />
            <rect x="190" y="177" width="84" height="99" rx="5" fill={paper} />
            <rect x="289" y="177" width="84" height="99" rx="5" fill={paper} />
            <Glyph icon={Table2} x={232} y={226} size={33} />
            <Glyph icon={Users} x={331} y={226} size={33} />
          </Frame>
        </g>
      )
    case "lazy-load":
      return (
        <g>
          <Frame x={101} y={62} width={278} height={232} fill={paper}>
            <rect x="121" y="116" width="235" height="57" rx="6" fill={ink} />
            <Glyph icon={CircleCheck} x={154} y={145} size={26} inverse />
            <path d="M182 145h150" stroke={INVERSE} />
            <rect
              x="121"
              y="189"
              width="235"
              height="29"
              rx="6"
              strokeDasharray="4 5"
            />
            <rect
              x="121"
              y="232"
              width="168"
              height="29"
              rx="6"
              strokeDasharray="4 5"
            />
          </Frame>
          <Tile
            x={364}
            y={260}
            icon={Clock3}
            fill={paper}
            width={62}
            height={60}
          />
        </g>
      )
    case "sider-view":
      return (
        <g>
          <Frame x={175} y={79} width={219} height={216} fill={paper}>
            <Rows x={207} y={143} width={158} count={5} gap={27} />
          </Frame>
          <rect x="89" y="79" width="71" height="216" rx="8" fill={ink} />
          {[118, 158, 198, 238].map((y, i) => (
            <g key={y}>
              <rect
                x="105"
                y={y}
                width={i === 1 ? 41 : 28}
                height="8"
                rx="3"
                fill={INVERSE}
                opacity={i === 1 ? 1 : 0.45}
                stroke="none"
              />
            </g>
          ))}
          <path d="M160 161h57m-9-7 9 7-9 7" strokeWidth="2" />
        </g>
      )
    case "iframe-view":
      return (
        <g>
          <Frame x={88} y={64} width={304} height={232} fill={paper}>
            <Frame x={154} y={126} width={207} height={145} fill={paper}>
              <Glyph icon={Globe} x={257} y={208} size={53} />
            </Frame>
            <path d="M115 130v123m-7-112 7-11 7 11" stroke={DETAIL} />
          </Frame>
        </g>
      )
    case "schema-view":
      return (
        <g>
          <Tile
            x={114}
            y={180}
            icon={Braces}
            fill={ink}
            active
            width={91}
            height={116}
          />
          <path d="M160 180h60v-68h51m-51 68h51m-51 0v68h51" />
          {[Table2, LayoutDashboard, FileText].map((icon, i) => (
            <Tile
              key={i}
              x={329}
              y={108 + i * 72}
              icon={icon}
              fill={paper}
              width={121}
              height={55}
            />
          ))}
        </g>
      )
    case "table-fields":
      return (
        <g>
          <Sheet x={73} y={106} width={110} height={158} fill={paper}>
            <Glyph icon={Braces} x={127} y={165} size={37} />
            <Rows x={91} y={209} width={71} count={2} gap={19} />
          </Sheet>
          <Frame x={219} y={66} width={195} height={228} fill={paper}>
            <GridTable
              x={237}
              y={124}
              width={156}
              height={146}
              columns={3}
              selectedColumn={0}
              {...palette}
            />
          </Frame>
          <Arrow d="M184 176h51m-9-7 9 7-9 7" />
        </g>
      )
    case "table-columns":
      return (
        <g>
          <Frame x={91} y={75} width={294} height={219} fill={paper}>
            <GridTable
              x={111}
              y={124}
              width={254}
              height={148}
              columns={4}
              selectedColumn={2}
              {...palette}
            />
          </Frame>
          <path d="M239 63h63m-8-7 8 7-8 7m-47-14-8 7 8 7" strokeWidth="2" />
        </g>
      )
    case "table-interaction":
      return (
        <g>
          <Frame x={91} y={70} width={285} height={223} fill={paper}>
            <GridTable
              x={111}
              y={121}
              width={244}
              height={148}
              selectedRow={2}
              {...palette}
            />
          </Frame>
          <path
            d="m301 190 64 47-29 5-13 28Z"
            fill={paper}
            stroke="var(--art-ink)"
            strokeWidth="2"
          />
          <path
            d="m298 173-8-12m-5 27-14-3m33-17 5-14"
            stroke="var(--art-ink)"
          />
        </g>
      )
    case "table-business":
      return (
        <g>
          <Frame x={88} y={61} width={307} height={238} fill={paper}>
            <rect x="109" y="108" width="64" height="25" rx="4" fill={ink} />
            <Glyph icon={Plus} x={140} y={120} size={17} inverse />
            <rect x="186" y="108" width="115" height="25" rx="4" fill={SIDE} />
            <Glyph icon={ArrowDownToLine} x={360} y={120} size={22} />
            <GridTable
              x={109}
              y={149}
              width={266}
              height={103}
              columns={4}
              {...palette}
            />
            <path d="M237 278h15m9 0h15m9 0h15" stroke={DETAIL} />
          </Frame>
        </g>
      )
    case "search-config":
      return (
        <g>
          <Frame x={103} y={130} width={276} height={164} fill={paper}>
            <GridTable x={122} y={179} width={237} height={94} {...palette} />
          </Frame>
          <rect x="103" y="62" width="276" height="52" rx="9" fill={paper} />
          <rect x="121" y="78" width="150" height="20" rx="4" fill={SIDE} />
          <rect x="288" y="73" width="70" height="30" rx="5" fill={ink} />
          <Glyph icon={Search} x={323} y={88} size={20} inverse />
          <path d="M241 114v43m-7-9 7 9 7-9" strokeDasharray="3 4" />
        </g>
      )
    case "search-linkage":
      return (
        <g>
          <Frame x={103} y={72} width={276} height={199} fill={paper}>
            <rect x="123" y="120" width="114" height="27" rx="4" fill={SIDE} />
            <rect x="252" y="120" width="105" height="27" rx="4" fill={SIDE} />
            <path d="m218 130 5 5 5-5m110 0 5 5 5-5" />
            <GridTable
              x={123}
              y={164}
              width={234}
              height={86}
              selectedRow={2}
              {...palette}
            />
          </Frame>
          <Tile
            x={342}
            y={285}
            icon={RefreshCw}
            fill={ink}
            active
            width={63}
            height={55}
          />
          <Arrow d="M128 272v28h148m-9-7 9 7-9 7" />
        </g>
      )
    case "model-review":
      return (
        <g>
          <path d="M145 111h192v128H145Z" strokeDasharray="4 6" />
          <Tile
            x={144}
            y={108}
            icon={Braces}
            fill={paper}
            width={75}
            height={69}
          />
          <Tile
            x={336}
            y={108}
            icon={Table2}
            fill={paper}
            width={75}
            height={69}
          />
          <Tile
            x={144}
            y={246}
            icon={Component}
            fill={paper}
            width={75}
            height={69}
          />
          <Tile
            x={336}
            y={246}
            icon={Check}
            fill={ink}
            active
            width={75}
            height={69}
          />
          <Glyph icon={RefreshCw} x={242} y={178} size={67} />
        </g>
      )
    // 07 · Component protocol, registration, and individual form operations.
    case "component-dsl":
      return (
        <g>
          <Sheet x={112} y={61} width={185} height={234} fill={paper}>
            <Glyph icon={Braces} x={203} y={139} size={62} />
            <Rows x={138} y={213} width={130} count={3} />
          </Sheet>
          {[
            { y: 104, icon: Plus },
            { y: 182, icon: ListFilter },
            { y: 260, icon: CircleCheck },
          ].map(({ y, icon }) => (
            <Tile
              key={y}
              x={347}
              y={y}
              icon={icon}
              fill={y === 182 ? ink : paper}
              active={y === 182}
              width={71}
              height={61}
            />
          ))}
          <path d="M296 104h15m-15 78h15m-15 78h15" />
        </g>
      )
    case "component-registry":
      return (
        <g>
          <Slab y={238} width={315} height={117} fill={paper} />
          <path d="M127 125h212v106H127Z" strokeDasharray="4 5" />
          <Tile
            x={125}
            y={120}
            icon={Puzzle}
            fill={paper}
            width={72}
            height={62}
          />
          <Tile
            x={335}
            y={120}
            icon={Box}
            fill={paper}
            width={72}
            height={62}
          />
          <Tile
            x={335}
            y={224}
            icon={Plus}
            fill={paper}
            width={72}
            height={62}
          />
          <Tile
            x={125}
            y={224}
            icon={Component}
            fill={ink}
            active
            width={72}
            height={62}
          />
          <Glyph icon={Settings2} x={234} y={174} size={47} />
        </g>
      )
    case "schema-form":
      return (
        <g>
          <Frame x={194} y={62} width={200} height={236} fill={paper}>
            <FormFields x={215} y={118} width={153} />
          </Frame>
          <Tile
            x={113}
            y={177}
            icon={Braces}
            fill={ink}
            active
            width={84}
            height={109}
          />
          <Arrow d="M155 177h37m-8-7 8 7-8 7" />
        </g>
      )
    case "create-form":
      return (
        <g>
          <Sheet x={135} y={60} width={211} height={237} fill={paper}>
            <FormFields x={161} y={120} width={155} />
          </Sheet>
          <circle cx="345" cy="253" r="41" fill={ink} />
          <Glyph icon={Plus} x={345} y={253} size={49} inverse />
        </g>
      )
    case "edit-form":
      return (
        <g>
          <Sheet x={111} y={60} width={217} height={237} fill={paper}>
            <FormFields x={137} y={118} width={159} filled />
          </Sheet>
          <path d="m335 141 29 17-61 109-34 20 5-39Z" fill={ink} />
          <path
            d="m335 141 9-16q5-8 13-3l14 8q8 4 4 12l-11 16M274 248l29 19-34 20Z"
            fill={paper}
          />
        </g>
      )
    case "detail-panel":
      return (
        <g>
          <Frame x={83} y={81} width={226} height={210} fill={SIDE}>
            <Rows x={107} y={136} width={167} count={5} gap={29} />
          </Frame>
          <rect x="254" y="59" width="148" height="242" rx="9" fill={paper} />
          <Glyph icon={Eye} x={328} y={103} size={38} />
          <path d="M273 138h110" stroke={DETAIL} />
          <Rows x={274} y={161} width={105} count={6} gap={21} />
          <path d="M254 59v242" stroke="var(--art-ink)" strokeWidth="2" />
        </g>
      )
    // 08 · Extraction, boundaries, extension, and publishing are separate steps.
    case "extract-package":
      return (
        <g>
          <Slab x={172} y={233} width={205} height={98} fill={paper} />
          <Cube x={172} y={106} size={61} fill={paper} />
          <path
            d="m173 107 29-38 131 0m-10-8 10 8-10 8"
            strokeDasharray="4 5"
          />
          <Cube x={339} y={96} size={44} fill={ink} />
          <Glyph icon={Link2} x={305} y={244} size={44} />
        </g>
      )
    case "package-boundary":
      return (
        <g>
          <rect
            x="104"
            y="60"
            width="272"
            height="240"
            rx="18"
            strokeDasharray="5 6"
          />
          <Slab y={239} width={205} height={82} fill={paper} />
          <Cube x={240} y={109} size={65} fill={ink} />
          <path
            d="m221 141-11 6 11 6m37-12 11 6-11 6"
            stroke={INVERSE}
            strokeWidth="2"
          />
          <Tile
            x={370}
            y={98}
            icon={LockKeyhole}
            fill={paper}
            width={63}
            height={64}
          />
        </g>
      )
    case "build-extension":
      return (
        <g>
          <Tile
            x={120}
            y={99}
            icon={Settings2}
            fill={paper}
            width={91}
            height={75}
          />
          <Tile
            x={351}
            y={99}
            icon={FileJson2}
            fill={paper}
            width={91}
            height={75}
          />
          <path d="M121 140v45h113m117-45v45H234v25" />
          <Tile
            x={234}
            y={244}
            icon={GitMerge}
            fill={ink}
            active
            width={121}
            height={92}
          />
          <Glyph icon={Plus} x={235} y={100} size={28} />
        </g>
      )
    case "page-extension":
      return (
        <g>
          <Frame x={83} y={83} width={273} height={212} fill={paper}>
            <rect x="105" y="137" width="88" height="131" rx="5" fill={SIDE} />
            <rect
              x="211"
              y="137"
              width="122"
              height="131"
              rx="5"
              strokeDasharray="4 5"
            />
          </Frame>
          <Tile
            x={345}
            y={106}
            icon={Puzzle}
            fill={ink}
            active
            width={89}
            height={87}
          />
          <Arrow d="M345 157v39h-37m9-7-9 7 9 7" />
        </g>
      )
    case "package-publish":
      return (
        <g>
          <path d="m240 116 104 54v89l-104 53-104-53v-89Z" fill={SIDE} />
          <path d="m240 116 104 54-104 53-104-53Z" fill={paper} />
          <path
            d="M240 223v89m-46-172 103 55v40l-31 16v-40l-103-55Z"
            fill={ink}
          />
          <circle cx="240" cy="72" r="37" fill={paper} />
          <Glyph icon={Upload} x={240} y={72} size={41} />
          <path d="M240 136v-21m-7 9 7-9 7 9" strokeDasharray="3 4" />
        </g>
      )
    // 09 · CI/CD, authentication, and the people-management feature.
    case "continuous-integration":
      return (
        <g>
          <path d="M112 174h256" strokeWidth="2" />
          {[
            { x: 110, icon: GitBranch },
            { x: 238, icon: Wrench },
            { x: 366, icon: CircleCheck },
          ].map(({ x, icon }, i) => (
            <Tile
              key={x}
              x={x}
              y={174}
              icon={icon}
              fill={i === 2 ? ink : paper}
              active={i === 2}
              width={82}
              height={88}
            />
          ))}
          <path d="M111 116V84h255v32m-8-9 8 9 8-9" strokeDasharray="4 6" />
          <Glyph icon={RefreshCw} x={238} y={263} size={39} />
        </g>
      )
    case "continuous-deployment":
      return (
        <g>
          <path
            d="M178 99a28 28 0 0 1 41-27 36 36 0 0 1 68 9 22 22 0 1 1 11 42h-99a22 22 0 0 1-21-24Z"
            fill={paper}
          />
          <Glyph icon={ArrowUpFromLine} x={242} y={90} size={35} />
          <path d="M241 124v44m0 0H118v25m123-25h125v25" />
          <Cube x={118} y={198} size={38} fill={paper} />
          <Cube x={242} y={181} size={49} fill={ink} />
          <Cube x={366} y={198} size={38} fill={paper} />
        </g>
      )
    case "login":
      return (
        <g>
          <Frame x={121} y={61} width={237} height={239} fill={paper}>
            <circle cx="239" cy="130" r="26" fill={SIDE} />
            <Glyph icon={UserRound} x={239} y={129} size={29} />
            <rect x="158" y="174" width="163" height="29" rx="5" fill={paper} />
            <Rows x={172} y={189} width={74} count={1} />
            <rect x="158" y="214" width="163" height="29" rx="5" fill={paper} />
            {[177, 193, 209, 225, 241].map((x) => (
              <circle
                key={x}
                cx={x}
                cy="228"
                r="2.5"
                fill={DETAIL}
                stroke="none"
              />
            ))}
            <rect x="203" y="257" width="76" height="26" rx="5" fill={ink} />
            <Glyph icon={LogIn} x={241} y={270} size={18} inverse />
          </Frame>
          <Tile
            x={363}
            y={118}
            icon={KeyRound}
            fill={ink}
            active
            width={65}
            height={63}
          />
        </g>
      )
    case "auth-session":
      return (
        <g>
          <path d="m213 60 89 34v88q0 60-89 99-89-39-89-99V94Z" fill={paper} />
          <Glyph icon={ShieldCheck} x={213} y={152} size={98} />
          <Tile
            x={348}
            y={240}
            icon={LogOut}
            fill={ink}
            active
            width={93}
            height={84}
          />
          <Arrow d="M299 151h49v46m-7-9 7 9 7-9" />
        </g>
      )
    case "people-management":
      return (
        <g>
          <Frame x={90} y={59} width={296} height={240} fill={paper}>
            {[130, 184, 238].map((y, i) => (
              <g key={y}>
                <circle cx="130" cy={y} r="16" fill={SIDE} />
                <Glyph icon={UserRound} x={130} y={y} size={23} />
                <path
                  d={`M160 ${y - 5}h${i === 1 ? 107 : 137}m-${i === 1 ? 107 : 137} 12h76`}
                  stroke={DETAIL}
                />
                <rect
                  x="323"
                  y={y - 9}
                  width="35"
                  height="18"
                  rx="4"
                  fill={i === 1 ? ink : SIDE}
                />
              </g>
            ))}
          </Frame>
          <Tile
            x={371}
            y={82}
            icon={Plus}
            fill={ink}
            active
            width={62}
            height={59}
          />
        </g>
      )
  }
  const exhaustive: never = artwork
  return exhaustive
}
