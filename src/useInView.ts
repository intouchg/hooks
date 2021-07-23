import React, { useRef, useState, useEffect } from 'react'

export const useInView = <T extends HTMLElement>(options: IntersectionObserverInit, ref?: React.MutableRefObject<T>) => {
	const defaultRef = useRef<T>(null)
	const elementRef = ref || defaultRef
	const [ inView, setInView ] = useState(false)

	useEffect(() => {
		if (!elementRef.current) return
		const intersectionObserver = new IntersectionObserver(([ entry ]) => setInView(entry.isIntersecting), options)
		intersectionObserver.observe(elementRef.current)
		return () => intersectionObserver.disconnect()
	}, [ elementRef, options ])

	return [ elementRef, inView ] as [ typeof defaultRef, typeof inView ]
}
