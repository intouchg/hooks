import { useRef, useEffect } from 'react'

export const usePrevious = <T>(value: T) => {
    const ref = useRef(null) as React.MutableRefObject<T | null>
    useEffect(() => void (ref.current = value), [ value ])
    return ref.current
}