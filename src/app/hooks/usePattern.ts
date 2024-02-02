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

export function usePattern() {
	const [play1] = useSound(pattern1)
	const [play2] = useSound(pattern2)
	const [play3] = useSound(pattern3)
	const [play4] = useSound(pattern4)
	const [play5] = useSound(pattern5)
	const [play6] = useSound(pattern6)
	const [play7] = useSound(pattern7)
	const [play8] = useSound(pattern8)
	const [play9] = useSound(pattern9)
	const [playFinal] = useSound(patternFinal)

	const playNote = (pattern: number) => {
		pattern === 1 && play1()
		pattern === 2 && play2()
		pattern === 3 && play3()
		pattern === 4 && play4()
		pattern === 5 && play5()
		pattern === 6 && play6()
		pattern === 7 && play7()
		pattern === 8 && play8()
		pattern === 9 && play9()
		pattern === 0 && playFinal()
	}
	return[playNote]
}