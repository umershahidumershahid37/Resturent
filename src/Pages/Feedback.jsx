import React from 'react'
import Reviews from '../component/Reviews'

const Feedback = () => {
	return (
		<main className="min-h-screen bg-slate-100 text-slate-900 py">
			<div className="sm:px-6 max-w-[93%] mx-auto px-6 md:px-0">
				<h1 className="text-3xl font-semibold mb-6">Customer Feedback</h1>
				<Reviews />
			</div>
		</main>
	)
}

export default Feedback
