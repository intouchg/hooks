import React, { useRef, useEffect } from 'react'
import { useRafState } from './useRafState'

export const useRafMeasure = <T extends HTMLElement>(ref?: React.MutableRefObject<T>) => {
	const defaultRef = useRef<T>(null)
	const elementRef = ref || defaultRef
	const [ rect, setRect ] = useRafState({ x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 })

	useEffect(() => {
		if (!elementRef.current) return
		const resizeObserver = new ResizeObserver(([ entry ]) => setRect(entry.contentRect))
		resizeObserver.observe(elementRef.current)
		return () => resizeObserver.disconnect()
	}, [ elementRef, setRect ])

	return [ elementRef, rect ] as [ typeof defaultRef, typeof rect ]
}
