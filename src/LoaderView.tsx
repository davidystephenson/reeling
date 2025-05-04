import { JSX } from 'react'

const KEYFRAMES = `
  @keyframes cloudsort-rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const RATIO = 4.375

export default function LoaderView (props: {
  size?: number
}): JSX.Element {
  const size = props.size ?? 22
  const borderSize = size / RATIO
  const px = `${size}px`
  const border = `${borderSize}px solid rgba(255, 255, 255, 0.75)`
  const style: React.HTMLAttributes<HTMLSpanElement>['style'] = {
    height: px,
    width: px,
    border,
    borderRightColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: 'cloudsort-rotation 1.75s linear infinite'
  }
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      <span style={style} />
    </>
  )
}
