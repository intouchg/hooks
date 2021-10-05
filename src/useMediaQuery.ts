import { useState, useCallback, useEffect } from 'react'

export const useMediaQuery = (query: string | (() => string)) => {
    const [ matched, setMatched ] = useState(false)

    const setMatchedCallback = useCallback((event) => setMatched(event.matches), [])

    useEffect(() => {
        const media = window.matchMedia(typeof query === 'string' ? `(min-width: ${query})` : query())

        if ('addEventListener' in media) {
            media.addEventListener('change', setMatchedCallback)
        }
        else {
            media.addListener(setMatchedCallback)
        }

        if (media.matches) {
            setMatchedCallback(media)
        }

        if ('addEventListener' in media) {
            return () => media.removeEventListener('change', setMatchedCallback)
        }
        else {
            return () => media.removeListener(setMatchedCallback)
        }
    }, [ query, setMatchedCallback ])

    return matched
}