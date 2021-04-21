import { useState, useCallback, useEffect } from 'react'

export const useMediaQuery = (query: string | (() => string)) => {
    const [ matched, setMatched ] = useState(false)

    const setMatchedCallback = useCallback((event) => setMatched(event.matches), [])

    useEffect(() => {
        const media = window.matchMedia(typeof query === 'string' ? `(min-width: ${query})` : query())
        media.addEventListener('change', setMatchedCallback)

        if (media.matches) {
            setMatchedCallback(true)
        }

        return () => media.removeEventListener('change', setMatchedCallback)
    }, [ query ])

    return matched
}