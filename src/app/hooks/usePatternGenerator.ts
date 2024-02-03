'use client'

import { useState, useEffect } from 'react'
import { usePattern } from './usePattern'

export default function usePatternGenerator() {
	const [playNote] = usePattern() 
	const [currentNote, setCurrentNote] = useState<number>(0)
	const numbers: number[] = []
	const [prevNumbers, setPrevNumbers] = useState<number[]> ([])
	const [patternPlayed, setPatternPlayed] = useState<boolean>(false)

	const generateRandomNumber = () => {
		numbers[0]= Math.floor(Math.random() * 9) + 1
		numbers[1] = Math.floor(Math.random() * 9) + 1
		numbers[2] = Math.floor(Math.random() * 9) + 1
		numbers[3] = 0
	}

	useEffect(() => {
		if (patternPlayed) {
			const repeatTimeout = setTimeout(() => {
				repeat()
			}, 9400)
			return () => clearTimeout(repeatTimeout)
		}
	}, [patternPlayed])

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

	const activeNote = (pattern: number) => {
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
		setPatternPlayed(true)
		let i = 0
		const compass = setInterval(() => {
			activeNote(numbers[i]) 
			playNote(numbers[i])
			i++
			if(i > 3) {
				clearInterval(compass)
			}
		}, 2100)
	}

	const repeat = () => {
		if(patternPlayed) {
			setPatternPlayed(false)
			setCurrentNote(0)
			playPattern(prevNumbers)
		}
	}

	const generatePattern = () => {
		setPatternPlayed(false)
		setCurrentNote(0)
		generateRandomNumber()
		playPattern(numbers)
	} 

	return[generatePattern, repeat, currentNote] as const
}