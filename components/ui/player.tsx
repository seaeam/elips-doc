import type { Ref } from "react"
import MuxPlayer, {
  type MuxPlayerProps,
  type MuxPlayerRefAttributes,
} from "@mux/mux-player-react"

type PlayerProps = MuxPlayerProps & {
  playerRef?: Ref<MuxPlayerRefAttributes>
}

const Player = ({ playerRef, ...props }: PlayerProps) => (
  <MuxPlayer ref={playerRef} {...props} />
)

export default Player
