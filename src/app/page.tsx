'use client'
import usePatternGenerator from './hooks/usePatternGenerator'
import Note from './components/Note'

export default function Home() {
	const [generatePattern, playPattern] = usePatternGenerator()
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Singing Training</h1>
			<button onClick={() => generatePattern()}>Start</button>
			<button onClick={() => playPattern()}>Repeat</button>
			<div className="flex gap-8">
				<Note name='C'/>
				<Note name='D'/>
				<Note name='E'/>
				<Note name='F'/>
				<Note name='G'/>
			</div>
		</main>
	)
}

