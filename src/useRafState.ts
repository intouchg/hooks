import { useRef, useState, useCallback, useEffect } from 'react'

export const useRafState = <T>(initialState: T) => {
    const frame = useRef(0)
    const [ state, setState ] = useState(initialState)

    const setRafState = useCallback((value: React.SetStateAction<T>) => {
        cancelAnimationFrame(frame.current)
        frame.current = requestAnimationFrame(() => setState(value))
    }, [])

    useEffect(() => cancelAnimationFrame(frame.current), [])

    return [ state, setRafState ] as [ typeof state, typeof setRafState ]
}