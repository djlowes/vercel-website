export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project cards */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Project Name</h2>
          <p className="text-gray-400 mb-4">Brief project description goes here. Explain what the project does and the technologies used.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary hover:text-primary">View Project</a>
            <a href="#" className="text-secondary hover:text-primary">GitHub</a>
          </div>
        </div>
        {/* Repeat for other projects */}
      </div>
    </div>
  )
}