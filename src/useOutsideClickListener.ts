import { useRef, useEffect } from 'react'

export const useOutsideClickListener = <T extends HTMLElement, C extends (event: MouseEvent) => void>(callback: C, ref?: React.MutableRefObject<T>) => {
	const defaultRef = useRef<T>(null)
	const elementRef = ref || defaultRef

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (elementRef.current && !elementRef.current.contains(event.target as any)) {
				callback(event)
			}
		}

		document.addEventListener('click', handleOutsideClick)
		return () => document.removeEventListener('click', handleOutsideClick)
	}, [ elementRef, callback ])

	return elementRef as typeof defaultRef
}
