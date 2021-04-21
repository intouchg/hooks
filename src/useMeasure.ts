import { useRef, useState } from 'react'
import { useIsoLayoutEffect } from './useIsoLayoutEffect'

export const useMeasure = <T extends HTMLElement>() => {
	const ref = useRef<T>(null)
	const [ rect, setRect ] = useState({ x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 })

	useIsoLayoutEffect(() => {
		if (!ref.current) return
		const resizeObserver = new ResizeObserver(([ entry ]) => setRect(entry.contentRect))
		resizeObserver.observe(ref.current)
		return resizeObserver.disconnect
	}, [])

	return [ ref, rect ]
}
