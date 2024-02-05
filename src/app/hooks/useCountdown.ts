import { useState, useEffect } from 'react'

export default function useCountdown() {
	const [showCountdown, setShowCountdown] = useState<boolean>(false)
	const [countdown, setCountdown] = useState<number>(3)

	const startCountdown = () => {
		setShowCountdown(true)
	}
      
	useEffect(() => {
		let interval: NodeJS.Timeout
    
		if (showCountdown) {
			interval = setInterval(() => {
				setCountdown((prevCountdown) => {
					if (prevCountdown === 0) {
						setShowCountdown(false)
						clearInterval(interval)
					}
					return prevCountdown - 1
				})
			}, 1000)
		}
    
		return () => {
			clearInterval(interval)
		}
	}, [showCountdown])

	return[startCountdown, countdown, showCountdown] as const
}