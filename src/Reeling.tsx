/** @jsxImportSource @emotion/react */
import { JSX } from 'react'
import { css } from '@emotion/react'
import { ReelingProps } from './types'
import useReeling from './useReeling'
import { KEYFRAMES } from './constants'

export default function Reeling (props: ReelingProps): JSX.Element {
  const use = useReeling(props)

  const canisterStyle: React.CSSProperties = {
    height: use.size,
    width: use.size,
    aspectRatio: '1/1',
    position: 'relative',
    display: 'flex',
    boxSizing: 'border-box',
    ...props.canisterStyle
  }

  const reelClass = css({
    width: use.minimum,
    height: use.minimum,
    borderRadius: '50%',
    borderWidth: use.borderWidth,
    borderStyle: 'solid',
    borderTopColor: use.color,
    borderRightColor: use.color,
    borderBottomColor: use.color,
    borderLeftColor: 'transparent',
    animation: `${KEYFRAMES} 1.5s infinite linear`,
    boxSizing: 'border-box',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      inset: `-${use.borderWidth}`,
      borderRadius: '50%',
      border: 'inherit',
      animation: 'inherit'
    },
    '&::before': {
      animationDuration: '3s'
    },
    '&::after': {
      animationDuration: '6s'
    },
    ...props.reelStyle
  })

  return (
    <div
      className={props.canisterClassName}
      ref={use.ref}
      style={canisterStyle}
    >
      <span
        className={props.reelClassName}
        css={reelClass}
      />
    </div>
  )
}
