'use client'

import { useState } from 'react'
import './components/Note.css'
import usePatternGenerator from './hooks/usePatternGenerator'
import useCountdown from './hooks/useCountdown'

export default function Home() {
	const [help, setHelp] = useState<boolean>(true)
	const [generatePattern, currentNote] = usePatternGenerator(help)
	const [startCountdown, countdown, showCountdown] = useCountdown()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className='text-3xl'>Singing Training</h1>
			{showCountdown &&
				<p>{countdown}</p>
			}
			<div className='flex justify-between w-60'>
				<button
					onClick={() => setHelp(!help)}
					className={`${help ? 'shadow-orange-300 border-orange-300 text-orange-300' : 'shadow-slate-600 border-slate-600 text-slate-400 shadow-sm'} px-4 py-2 border rounded-lg shadow-sm active:shadow-none`}
				>Help {help === true ? ': ON' : ': OFF'}</button>
				<button
					onClick={() => {generatePattern(), startCountdown()}}
					className='px-4 py-2 border rounded-lg shadow-sm shadow-slate-400 active:shadow-none'
				>Start</button>
			</div>
			<div className="flex gap-8">
				<div className={`${currentNote === 1 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-24 border rounded-lg bg-blue-800 border-gray-50`}>C</div>
				<div className={`${currentNote === 2 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-20 border rounded-lg bg-gray-500 border-gray-50`}>D</div>
				<div className={`${currentNote === 3 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-16 border rounded-lg bg-green-600 border-gray-50`}>E</div>
				<div className={`${currentNote === 4 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-12 border rounded-lg bg-gray-500 border-gray-50`}>F</div>
				<div className={`${currentNote === 5 && 'active'} flex justify-center items-center w-12 h-12 text-xl p-4 mt-8 border rounded-lg  bg-red-600 border-gray-50`}>G</div>
			</div>
		</main>
	)
}

