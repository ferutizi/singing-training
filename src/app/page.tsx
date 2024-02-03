'use client'

import './components/Note.css'
import usePatternGenerator from './hooks/usePatternGenerator'

export default function Home() {
	const [generatePattern, playPattern, currentNote] = usePatternGenerator()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Singing Training</h1>
			<button onClick={() => generatePattern()}>Start</button>
			<button onClick={() => playPattern()}>Repeat</button>
			<div className="flex gap-8">
				<div className={`${currentNote === 1 && 'active'} flex justify-center items-center w-12 h-12 p-4 border border-solid border-gray-50`}>C</div>
				<div className={`${currentNote === 2 && 'active'} flex justify-center items-center w-12 h-12 p-4 border border-solid border-gray-50`}>D</div>
				<div className={`${currentNote === 3 && 'active'} flex justify-center items-center w-12 h-12 p-4 border border-solid border-gray-50`}>E</div>
				<div className={`${currentNote === 4 && 'active'} flex justify-center items-center w-12 h-12 p-4 border border-solid border-gray-50`}>F</div>
				<div className={`${currentNote === 5 && 'active'} flex justify-center items-center w-12 h-12 p-4 border border-solid border-gray-50`}>G</div>
			</div>
		</main>
	)
}

