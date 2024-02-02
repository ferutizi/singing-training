import Note from './components/Note'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Singing Training</h1>
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

