'use client'

import { useState } from 'react'
import { usePattern } from './usePattern'

export default function usePatternGenerator() {
	const [playNote] = usePattern() 
	const [currentNote, setCurrentNote] = useState<number>(0)
	const numbers: number[] = []
	const [prevNumbers, setPrevNumbers] = useState<number[]> ([])

	const generateRandomNumber = () => {
		numbers[0]= Math.floor(Math.random() * 9) + 1
		numbers[1] = Math.floor(Math.random() * 9) + 1
		numbers[2] = Math.floor(Math.random() * 9) + 1
		numbers[3] = Math.floor(Math.random() * 9) + 1
		numbers[4] = 0
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
				clearInterval(quaver)
			}
		}, 400)
	} 

	const playPattern = (numbers: number[]) => {
		setPrevNumbers(numbers)
		console.log('random number', numbers)
		let i = 0
		console.log('random number en i', numbers[i])
		const compass = setInterval(() => {
			playNote(numbers[i])
			activeNote(numbers[i]) 
			console.log(numbers[i])
			i++
			if(i > 4) {
				clearInterval(compass)
			}
		}, 2100)
	}

	const repeat = () => {
		playPattern(prevNumbers)
	}

	const generatePattern = () => {
		generateRandomNumber()
		playPattern(numbers)
	} 

	return[generatePattern, repeat, currentNote] as const
}