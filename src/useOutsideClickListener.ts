import { useRef, useEffect } from 'react'

export const useOutsideClickListener = <T extends HTMLElement, C extends (event: MouseEvent) => void>(callback: C) => {
	const ref = useRef<T>(null)

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as any)) {
				callback(event)
			}
		}

		document.addEventListener('click', handleOutsideClick)
		return () => document.removeEventListener('click', handleOutsideClick)
	}, [ ref, callback ])

	return ref
}
