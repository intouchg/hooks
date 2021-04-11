import { useRef, useEffect } from 'react'
import { useRafState } from './useRafState'

export const useRafMeasure = <T extends HTMLElement>() => {
	const ref = useRef<T>(null)
	const [ rect, setRect ] = useRafState({ x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 })
	
	useEffect(() => {
		if (!ref.current) return
		const resizeObserver = new ResizeObserver(([ entry ]) => setRect(entry.contentRect))
		resizeObserver.observe(ref.current)
		return resizeObserver.disconnect
	}, [])

	return [ ref, rect ]
}
