import { usePattern } from './usePattern'

export default function usePatternGenerator() {
	const [playNote] = usePattern() 
	const randomNumbers: number[] = []
	const generateRandomNumber = () => {
		randomNumbers[0]= Math.floor(Math.random() * 10) + 1
		randomNumbers[1] = Math.floor(Math.random() * 10) + 1
		randomNumbers[2] = Math.floor(Math.random() * 10) + 1
		randomNumbers[3] = Math.floor(Math.random() * 10) + 1
	}

	const generatePattern = () => {
		generateRandomNumber()
		for(const number of randomNumbers) {
			setTimeout(() => {
				playNote(number)
			}, 1500)
		}
		playNote(0)
	} 

	return[generatePattern]
}