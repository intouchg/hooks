import { useState, useEffect, useCallback } from 'react'

export const useCookie = (key: string) => {
    const [ cookie, setCookie ] = useState<any>()

    const getCookie = useCallback(() => {
        const cookie = document.cookie.split(';').find(cookieString => cookieString.includes(key))
        const cookieValue = cookie ? cookie.replace(key + '=', '').trimStart() : null
        return cookieValue ? JSON.parse(cookieValue) : cookieValue
    }, [ key ])

    const setCookieCallback = useCallback((value, maxAgeSeconds?: number) => {
        document.cookie = `${key}=${JSON.stringify(value)}${maxAgeSeconds ? `;max-age=${maxAgeSeconds}` : ''}`
        setCookie(getCookie())
    }, [ key, getCookie ])

    useEffect(() => setCookie(getCookie()), [ key, getCookie ])

    return [
        cookie,
        setCookieCallback,
    ] as [ typeof cookie, typeof setCookieCallback ]
}