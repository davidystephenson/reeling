import { useEffect, useState, useRef, useMemo } from 'react'
import { UseReelingProps, Use } from './types'
import { RATIO } from './constants'

export default function useReeling (props: UseReelingProps): Use {
  const containerRef = useRef<HTMLDivElement>(null)
  const [minimum, setMinimum] = useState('0px')
  const [borderWidth, setBorderWidth] = useState('0px')

  useEffect(() => {
    function update (): void {
      if (containerRef.current == null) {
        return
      }
      const minimum = Math.min(
        containerRef.current.offsetHeight,
        containerRef.current.offsetWidth
      )
      const borderWidth = minimum / RATIO
      setBorderWidth(`${borderWidth}px`)
      setMinimum(`${minimum}px`)
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

  const color = props.noir === true
    ? 'rgba(0, 0, 0, 0.5)'
    : 'rgba(255, 255, 255, 0.33)'

  const size = props.size ?? '100%'

  const value = useMemo(() => {
    return {
      color,
      ref: containerRef,
      minimum,
      borderWidth,
      size
    }
  }, [color, minimum, borderWidth, size])

  return value
}
