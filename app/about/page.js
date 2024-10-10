export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <p className="text-lg text-gray-600 mb-4">
      Hello! I&apos;m [Your Name], a passionate web developer with a keen interest in creating 
      intuitive and dynamic user experiences. My journey in web development started [your background].
      </p>
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <ul className="list-disc list-inside text-gray-400">
        <li>JavaScript (React, Node.js)</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        <li>Database Management (SQL, MongoDB)</li>
        {/* Add more skills */}
      </ul>
    </div>
  )
}