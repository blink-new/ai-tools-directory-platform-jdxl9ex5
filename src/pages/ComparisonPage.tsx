import { useParams } from 'react-router-dom'

export function ComparisonPage() {
  const { tool1, tool2 } = useParams()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Compare: {tool1} vs {tool2}
        </h1>
        <p className="text-gray-600 mt-4">
          Tool comparison will be displayed here.
        </p>
      </div>
    </div>
  )
}