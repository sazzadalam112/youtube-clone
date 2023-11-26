import React from 'react'

function ErrorPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <a href="/" className="mt-4 inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Go to Home</a>
    </div>
  </div>
  )
}

export default ErrorPage