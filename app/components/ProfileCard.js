import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
      {/* Profile Picture */}
      <Image
        src="" // Update with your actual image path
        alt="Profile Photo"
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      
      {/* Name */}
      <h2 className="text-2xl font-semibold mb-2">Your Name</h2>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
