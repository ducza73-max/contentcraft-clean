export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ContentCraft AI</h1>
        <p className="text-xl text-gray-600 mb-8">Create amazing content with AI</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</button>
        {/* Add three feature cards below the button */}
        {/* Each card: icon, title, description in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">🚀 Fast and Efficient</div>
            <p className="text-gray-600">Create content in seconds, not hours.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">🎨 Creative Assistance</div>
            <p className="text-gray-600">Get AI-generated suggestions to enhance your writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl mb-2">🔍 SEO Optimized</div>
            <p className="text-gray-600">Ensure your content ranks well with built-in SEO tools.</p>
          </div>
        </div>
      </div>
    </div>
  )
}