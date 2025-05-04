/** @jsxImportSource @emotion/react */
import { JSX } from 'react'
import { css } from '@emotion/react'
import { ReelingProps } from './types'
import useReeling from './useReeling'
import { KEYFRAMES } from './constants'

export default function Reeling (props: ReelingProps): JSX.Element {
  const use = useReeling(props)

  const containerStyle: React.CSSProperties = {
    height: use.size,
    width: use.size,
    overflow: 'hidden',
    ...props.containerStyle
  }

  const reelClass = css({
    aspectRatio: '1/1',
    display: 'flex',
    borderRadius: '50%',
    borderWidth: use.borderWidth,
    borderStyle: 'solid',
    borderTopColor: use.color,
    borderRightColor: use.color,
    borderBottomColor: use.color,
    borderLeftColor: 'transparent',
    animation: `${KEYFRAMES} 1.75s infinite linear`,
    boxSizing: 'border-box',
    overflow: 'hidden',
    ...props.reelStyle
  })

  return (
    <div
      className={props.containerClassName}
      ref={use.ref}
      style={containerStyle}
    >
      <span
        className={props.reelClassName}
        css={reelClass}
      />
    </div>
  )
}
