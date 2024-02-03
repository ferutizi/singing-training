import { useState } from 'react'
import { usePattern } from './usePattern'

export default function usePatternGenerator() {
	const [playNote] = usePattern() 
	const [currentNote, setCurrentNote] = useState<number>(0)
	const [randomNumbers, setRandomNumbers] = useState<number[]>([])
	
	const generateRandomNumber = () => {
		randomNumbers[0]= Math.floor(Math.random() * 9) + 1
		randomNumbers[1] = Math.floor(Math.random() * 9) + 1
		randomNumbers[2] = Math.floor(Math.random() * 9) + 1
		randomNumbers[3] = Math.floor(Math.random() * 9) + 1
		randomNumbers[4] = 0
	}

	const patterns = [
		[1, 1, 1, 1],
		[1, 1, 3, 3],
		[3, 3, 1, 1],
		[1, 1, 5, 5],
		[5, 5, 1, 1],
		[1, 2, 1, 1],
		[1, 3, 5, 5],
		[5, 3, 1, 1],
		[1, 2, 3, 4],
		[5, 4, 3, 2]
	]

	const activeNote = (pattern) => {
		let i = 0
		const quaver = setInterval(() => {
			setCurrentNote(patterns[pattern][i])
			i++
			if(i > 3) {
				setCurrentNote(0)
				clearInterval(quaver)
			}
		}, 320)
	}

	const playPattern = () => {
		console.log('random number', randomNumbers)
		let i = 0
		console.log('random number en i', randomNumbers[i])
		const compass = setInterval(() => {
			playNote(randomNumbers[i])
			activeNote(randomNumbers[i])
			console.log(randomNumbers[i])
			i++
			if(i > 4) {
				clearInterval(compass)
			}
		}, 1550)
	}

	const generatePattern = () => {
		generateRandomNumber()
		playPattern()
	} 

	return[generatePattern, playPattern, currentNote] as const
}