import { useState, useLayoutEffect } from 'react'

export const useWindowSize = () => {
	const [ size, setSize ] = useState({ width: 0, height: 0 })

	useLayoutEffect(() => {
		const callback = () => setSize({ width: window.innerWidth, height: window.innerHeight })
		window.addEventListener('resize', callback)
		callback()
		return () => window.removeEventListener('resize', callback)
	}, [])

	return size
}
