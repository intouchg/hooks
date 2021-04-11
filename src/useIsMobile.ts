import { useWindowSize } from './useWindowSize'

export const useIsMobile = (breakpoint: number) => {
	const { width } = useWindowSize()
	const isMobile = width < breakpoint
	return isMobile
}
