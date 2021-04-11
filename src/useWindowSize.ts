import { useState, useEffect } from 'react'

export const useWindowSize = () => {
	const [ size, setSize ] = useState({ width: 0, height: 0 })

	useEffect(() => {
		const callback = () => setSize({ width: window.innerWidth, height: window.innerHeight })
		callback()
		window.addEventListener('resize', callback)
		return () => window.removeEventListener('resize', callback)
	}, [])

	return size
}