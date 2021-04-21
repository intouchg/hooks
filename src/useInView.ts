import { useRef, useState } from 'react'
import { useIsoLayoutEffect } from './useIsoLayoutEffect'

export const useInView = <T extends HTMLElement>(options: IntersectionObserverInit) => {
	const ref = useRef<T>(null)
	const [ inView, setInView ] = useState(false)

	useIsoLayoutEffect(() => {
		if (!ref.current) return
		const intersectionObserver = new IntersectionObserver(([ entry ]) => setInView(entry.isIntersecting), options)
		intersectionObserver.observe(ref.current)
		return intersectionObserver.disconnect
	}, [ options ])

	return [ ref, inView ]
}
