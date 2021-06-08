import { useRef, useEffect } from 'react'

export const useScrollLock = (active: boolean) => {
    const scrollPosition = useRef([ 0, 0 ])

	useEffect(() => {
		if (active) {
            scrollPosition.current = [ window.scrollX, window.scrollY ]
            document.body.style.position = 'fixed'
            document.body.style.left = `-${scrollPosition.current[0]}px`
            document.body.style.top = `-${scrollPosition.current[1]}px`
        }
        else {
            document.body.style.position = ''
            document.body.style.left = ''
            document.body.style.top = ''
            window.scrollTo(scrollPosition.current[0], scrollPosition.current[1])
        }
	}, [ active, scrollPosition ])
}
