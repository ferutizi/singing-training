//@ts-expect-error not supported
import useSound from 'use-sound'
import { pattern1,
	pattern2,
	pattern3,
	pattern4,
	pattern5,
	pattern6,
	pattern7,
	pattern8,
	pattern9,
	patternFinal
} from '../../../public/sounds'

export function usePattern(volume: number) {
	const [play1] = useSound(pattern1, { volume: volume })
	const [play2] = useSound(pattern2, { volume: volume })
	const [play3] = useSound(pattern3, { volume: volume })
	const [play4] = useSound(pattern4, { volume: volume })
	const [play5] = useSound(pattern5, { volume: volume })
	const [play6] = useSound(pattern6, { volume: volume })
	const [play7] = useSound(pattern7, { volume: volume })
	const [play8] = useSound(pattern8, { volume: volume })
	const [play9] = useSound(pattern9, { volume: volume })
	const [playFinal] = useSound(patternFinal, { volume: volume })

	const playNote = (pattern: number) => {
		console.log(pattern)
		pattern === 0 && playFinal()
		pattern === 1 && play1()
		pattern === 2 && play2()
		pattern === 3 && play3()
		pattern === 4 && play4()
		pattern === 5 && play5()
		pattern === 6 && play6()
		pattern === 7 && play7()
		pattern === 8 && play8()
		pattern === 9 && play9()
	}
	return[playNote]
}