import { JSX } from 'react'

// Static CSS as a string for the keyframes animation
const KEYFRAMES = `
  @keyframes cloudsort-multi-rotation {
    100% { transform: rotate(1turn) }
  }
`

const RATIO = 4.375

export default function Reeling(props: {
  size?: number
}): JSX.Element {
  const size = props.size ?? 22
  const borderSize = size / RATIO
  const px = `${size}px`
  const style: React.HTMLAttributes<HTMLDivElement>['style'] = {
    width: px,
    height: px,
    borderRadius: '50%',
    border: `${borderSize}px solid rgba(255, 255, 255, 0.33)`,
    borderRightColor: 'transparent',
    position: 'relative',
    animation: 'cloudsort-multi-rotation 1.5s infinite linear',
    boxSizing: 'border-box'
  }
  const pseudoElementStyles = `
    .cloudsort-multi-reeling::before,
    .cloudsort-multi-reeling::after {
      content: "";
      position: absolute;
      inset: -${borderSize}px;
      border-radius: 50%;
      border: inherit;
      animation: inherit;
      animation-duration: 3s;
    }
    .cloudsort-multi-reeling::after {
      border-radius: 50%;
      animation-duration: 6s;
    }
  `
  const __html = `${KEYFRAMES}${pseudoElementStyles}`
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html }} />
      <span className="cloudsort-multi-reeling" style={style} />
    </>
  )
}