// HomePage.jsx
import React from "react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold mb-6">
          Coding Club
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
          Learn to code, build exciting projects, and collaborate with your friends! Join our school Coding Club and start creating today.
        </p>
        <a
          href="#activities"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Explore Activities
        </a>
      </section>

      {/* Activities / Cards */}
<section id="activities" className="bg-gray-900 py-16 px-6 text-gray-300">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
    What We Do
  </h2>

  <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
    {/* Card 1 */}
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src="https://placehold.co/400x300?text=Projects"
        alt="Projects"
      />
      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="text-2xl font-bold mb-2">Projects</h3>
        <p className="flex-1 text-gray-300">
          Build fun and useful projects, from games to apps, and showcase your skills.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src="https://placehold.co/400x300?text=Workshops"
        alt="Workshops"
      />
      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="text-2xl font-bold mb-2">Workshops</h3>
        <p className="flex-1 text-gray-300">
          Learn new languages, frameworks, and tools in our fun hands-on workshops.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src="https://placehold.co/400x300?text=Competitions"
        alt="Competitions"
      />
      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="text-2xl font-bold mb-2">Competitions</h3>
        <p className="flex-1 text-gray-300">
          Participate in coding competitions, hackathons, and challenge yourself to learn more.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="bg-gray-900 py-16 px-6 text-center text-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Club</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Our school Coding Club is open to everyone interested in learning and exploring technology. 
          Whether you're a beginner or an advanced coder, you'll find projects, workshops, and a supportive 
          community to help you grow your skills and creativity.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} School Coding Club. All rights reserved.
      </footer>
    </>
  );
}
