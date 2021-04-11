import { useEffect } from 'react'

export const useInternetListener = <T extends (online: boolean) => void>(callback: T) => {
	useEffect(() => {
		if (window.navigator.onLine) {
			callback(true)
		}
        else {
            callback(false)
        }

		const handleOffline = () => callback(false)
		const handleOnline = () => callback(true)

		window.addEventListener('offline', handleOffline)
		window.addEventListener('online', handleOnline)

		return () => {
			window.removeEventListener('offline', handleOffline)
			window.removeEventListener('online', handleOnline)
		}
	}, [ callback ])
}