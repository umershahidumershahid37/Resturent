import React from 'react'
import Reviews from '../component/Reviews'

const Feedback = () => {
	return (
		<main className="min-h-screen bg-slate-100 text-slate-900 py-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<h1 className="text-3xl font-semibold mb-6">Customer Feedback</h1>
				<Reviews />
			</div>
		</main>
	)
}

export default Feedback
