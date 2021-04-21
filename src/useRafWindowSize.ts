import { useRafState } from './useRafState'
import { useIsoLayoutEffect } from './useIsoLayoutEffect'

export const useRafWindowSize = () => {
    const [ size, setSize ] = useRafState({ width: 0, height: 0 })

    useIsoLayoutEffect(() => {
        const callback = () => setSize({ width: window.innerWidth, height: window.innerHeight })
        window.addEventListener('resize', callback)
        callback()
        return () => window.removeEventListener('resize', callback)
    }, [])

    return size
}