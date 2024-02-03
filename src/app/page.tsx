'use client'

import { useState } from 'react'
import './components/Note.css'
import usePatternGenerator from './hooks/usePatternGenerator'

export default function Home() {
	const [help, setHelp] = useState<boolean>(true)
	const [generatePattern, repeat, currentNote] = usePatternGenerator(help)

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Singing Training</h1>
			<button onClick={() => generatePattern()}>Start</button>
			<button onClick={() => setHelp(!help)}>help {help === true ? ' :on' : ' :off'}</button>
			<button onClick={() => repeat()}>Repeat</button>
			<div className="flex gap-8">
				<div className={`${currentNote === 1 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-24 border border-solid bg-blue-800 border-gray-50`}>C</div>
				<div className={`${currentNote === 2 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-20 border border-solid bg-gray-500 border-gray-50`}>D</div>
				<div className={`${currentNote === 3 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-16 border border-solid bg-green-600 border-gray-50`}>E</div>
				<div className={`${currentNote === 4 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-12 border border-solid bg-gray-500 border-gray-50`}>F</div>
				<div className={`${currentNote === 5 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-8 border border-solid  bg-red-600 border-gray-50`}>G</div>
			</div>
		</main>
	)
}

