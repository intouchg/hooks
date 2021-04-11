import { useRafWindowSize } from './useRafWindowSize'

export const useRafIsMobile = (breakpoint: number) => {
	const { width } = useRafWindowSize()
	const isMobile = width < breakpoint
	return isMobile
}
