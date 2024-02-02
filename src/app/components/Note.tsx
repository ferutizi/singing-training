'use client'

import usePatternGenerator from '../hooks/usePatternGenerator'

interface NoteProps {
    name: string
}

export default function Note({name}: NoteProps) {
	const [generatePattern] = usePatternGenerator()
	return(
		<div onClick={() => generatePattern()} className="flex justify-center items-center w-12 h-12 p-4 border border-solid border-gray-50">{name}</div>
	)
}