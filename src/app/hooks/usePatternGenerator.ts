import { usePattern } from './usePattern'

export default function usePatternGenerator() {
	const [playNote] = usePattern() 
	const randomNumbers: number[] = []
	const generateRandomNumber = () => {
		randomNumbers[0]= Math.floor(Math.random() * 9) + 1
		randomNumbers[1] = Math.floor(Math.random() * 9) + 1
		randomNumbers[2] = Math.floor(Math.random() * 9) + 1
		randomNumbers[3] = Math.floor(Math.random() * 9) + 1
		randomNumbers[4] = 0
	}

	const generatePattern = () => {
		generateRandomNumber()
		let i = 0
		const compass = setInterval(() => {
			playNote(randomNumbers[i])
			i++
			if(i > 4) {
				clearInterval(compass)
			}
		}, 1500)
	} 

	return[generatePattern]
}