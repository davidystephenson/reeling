export interface UseReelingProps {
  noir?: boolean
  size?: string
}

export interface ReelingProps extends UseReelingProps {
  containerClassName?: string
  containerStyle?: React.CSSProperties
  reelClassName?: string
  reelStyle?: React.CSSProperties
}

export interface Use {
  color: string
  ref: React.RefObject<HTMLDivElement | null>
  minimum: string
  borderWidth: string
  size: string
}
