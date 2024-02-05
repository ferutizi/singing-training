'use client'

import { useState, useEffect } from 'react'
import { usePattern } from './usePattern'

export default function usePatternGenerator(help: boolean) {
	const [volume, setVolume] = useState<number>(1.0)
	const [playNote] = usePattern(volume) 
	const [currentNote, setCurrentNote] = useState<number>(0)
	const numbers: number[] = []
	const [prevNumbers, setPrevNumbers] = useState<number[]> ([])
	const [patternPlayed, setPatternPlayed] = useState<boolean>(false)
	const [updatedPattern, setUpdatedPattern] = useState<boolean>(true)
	const [listen, setListen] = useState(true)

	const generateRandomNumber = () => {
		numbers[0]= Math.floor(Math.random() * 9) + 1
		numbers[1] = Math.floor(Math.random() * 9) + 1
		numbers[2] = Math.floor(Math.random() * 9) + 1
		numbers[3] = 0
	}

	useEffect(() => {
		if (patternPlayed) {
			setTimeout(() => {
				const repeatTimeout = setTimeout(() => {
					if(help) {
						setVolume(0.05)
					} else {
						setVolume(0)
					}
					repeat()
				}, 12000)
				return () => clearTimeout(repeatTimeout)
			}, 3000)
		}
	}, [updatedPattern])

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
		setListen(!listen)
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
		setVolume(1.0)
		setPatternPlayed(false)
		setUpdatedPattern(!updatedPattern)
		setCurrentNote(0)
		generateRandomNumber()
		playPattern(numbers)
	} 

	return[generatePattern, currentNote, listen] as const
}