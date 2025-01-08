'use client'

import { useState } from 'react'
import Container from './Container'
import { Button } from './ui/button'

export default function Footer() {
	const [count, setCount] = useState(0)

	function handleClick() {
		setCount(prev => prev + 1)
	}
	return (
		<footer className='bg-silver/60 z-10 backdrop-blur'>
			<Container>
				<div className='max-w-4xl mx-auto text-center py-10 text-sm text-gray-400'>
					<p>
						Khotai Online &copy; {new Date().getFullYear()}. All
						rights reserved.
					</p>
					<p>
						You have clicked this button: {count} times!
						<br />
						<Button
							variant='secondary'
							onClick={handleClick}>
							Click Me
						</Button>
					</p>
				</div>
			</Container>
		</footer>
	)
}
