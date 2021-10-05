import { useEffect } from 'react'
import { useRafState } from './useRafState'

export const useRafWindowSize = () => {
    const [ size, setSize ] = useRafState({ width: 0, height: 0 })

    useEffect(() => {
        const callback = () => setSize({ width: window.innerWidth, height: window.innerHeight })
        window.addEventListener('resize', callback)
        callback()
        return () => window.removeEventListener('resize', callback)
    }, [setSize])

    return size
}