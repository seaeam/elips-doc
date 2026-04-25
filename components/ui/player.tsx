import MuxPlayer, { MuxPlayerProps } from "@mux/mux-player-react"
import { Backlight } from "./backlight"

const Player = (props: MuxPlayerProps) => (
  <Backlight className="w-full">
    <MuxPlayer {...props} />
  </Backlight>
)

export default Player
