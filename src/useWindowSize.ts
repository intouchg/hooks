import { useState } from 'react'
import { useIsoLayoutEffect } from './useIsoLayoutEffect'

export const useWindowSize = () => {
	const [ size, setSize ] = useState({ width: 0, height: 0 })

	useIsoLayoutEffect(() => {
		const callback = () => setSize({ width: window.innerWidth, height: window.innerHeight })
		window.addEventListener('resize', callback)
		callback()
		return () => window.removeEventListener('resize', callback)
	}, [])

	return size
}
