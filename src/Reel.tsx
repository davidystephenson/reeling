/** @jsxImportSource @emotion/react */
import { JSX, useRef, useEffect, useState } from 'react'
import { css, keyframes } from '@emotion/react'

const KEYFRAMES = keyframes`
  100% { transform: rotate(1turn) }
`

const RATIO = 4.375

export default function Reel (props: {
  containerClassName?: string
  reelClassName?: string
  containerStyle?: React.CSSProperties
  reelStyle?: React.CSSProperties
}): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')
  const [width, setWidth] = useState('0px')
  const [borderWidth, setBorderWidth] = useState('0px')

  useEffect(() => {
    function update (): void {
      if (containerRef.current == null) {
        return
      }
      const height = containerRef.current.offsetHeight
      const width = containerRef.current.offsetWidth
      const minimum = Math.min(height, width)
      const borderWidth = minimum / RATIO
      setBorderWidth(`${borderWidth}px`)
      setHeight(`${minimum}px`)
      setWidth(`${minimum}px`)
    }
    update()

    const observer = new ResizeObserver(update)
    if (containerRef.current != null) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current == null) {
        return
      }
      observer.unobserve(containerRef.current)
    }
  }, [])

  const containerStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    aspectRatio: '1/1',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    ...props.containerStyle
  }

  const reelClass = css({
    width,
    height,
    borderRadius: '50%',
    borderWidth,
    borderStyle: 'solid',
    borderTopColor: 'rgba(255, 255, 255, 0.33)',
    borderRightColor: 'rgba(255, 255, 255, 0.33)',
    borderBottomColor: 'rgba(255, 255, 255, 0.33)',
    borderLeftColor: 'transparent',
    animation: `${KEYFRAMES} 1.5s infinite linear`,
    boxSizing: 'border-box',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      inset: `-${borderWidth}`,
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
      ref={containerRef}
      style={containerStyle}
      className={props.containerClassName}
    >
      <span css={reelClass} className={props.reelClassName} />
    </div>
  )
}
