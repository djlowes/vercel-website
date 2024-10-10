'use client';

import { useState, useEffect } from 'react';
import { FaList, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DataTable = ({ data }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
      <FaList className="mr-2" />
      Personal Statistics
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-primary">
            <th className="p-2">Attribute</th>
            <th className="p-2">Value</th>
            <th className="p-2">Unit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="p-2 text-gray-300">{item.attribute}</td>
              <td className="p-2 text-white">{item.value}</td>
              <td className="p-2 text-gray-400">{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const DropdownComponent = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
      <button
        className="flex justify-between items-center w-full text-left text-xl font-bold text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Personal() {
  const [detailedStats, setDetailedStats] = useState([]);

  useEffect(() => {
  const birthDate = new Date('1984-09-26T00:00:00');
  const coffeeStartDate = new Date('2017-01-01T00:00:00');
  const travelStartDate = new Date('2012-01-01T00:00:00');
  const booksStartDate = new Date('2002-01-01T00:00:00');
  const age30Date = new Date('2014-09-26T00:00:00'); // 30th birthday
  const weddingDate = new Date('2017-10-18T00:00:00'); // Wedding date

  const updateStats = () => {
    const now = new Date();

    // Age calculation
    const ageInYears = (now - birthDate) / (365.25 * 24 * 60 * 60 * 1000);
    
    // Seconds alive
    const secondsAlive = Math.floor((now - birthDate) / 1000);
    
    // Coffee consumed
    const daysSinceCoffeeStart = Math.floor((now - coffeeStartDate) / (24 * 60 * 60 * 1000));
    const coffeesConsumed = daysSinceCoffeeStart * 2;
    
    // Distance travelled
    const yearsSinceTravelStart = (now - travelStartDate) / (365.25 * 24 * 60 * 60 * 1000);
    const distanceTravelled = yearsSinceTravelStart * 75000;
    
    // Books read
    const monthsSinceBooksStart = (now - booksStartDate) / (30.44 * 24 * 60 * 60 * 1000);
    const booksReadCount = Math.floor(monthsSinceBooksStart);

    // Running distance calculation
    const yearsAfter30 = Math.max(0, (now - age30Date) / (365.25 * 24 * 60 * 60 * 1000));
    const runningDistance = 3000 + (yearsAfter30 * 680);

    // Biking distance calculation
    const bikingDistance = 5000 + (yearsAfter30 * 700);

    // Years married calculation
    const yearsMarried = (now - weddingDate) / (365.25 * 24 * 60 * 60 * 1000);

    setDetailedStats([
      { attribute: "Age", value: ageInYears.toFixed(4), unit: "years" },
      { attribute: "Seconds Alive", value: secondsAlive.toLocaleString(), unit: "seconds" },
      { attribute: "Coffee Consumed", value: coffeesConsumed.toLocaleString(), unit: "cups" },
      { attribute: "Air Travel", value: distanceTravelled.toFixed(2), unit: "miles" },
      { attribute: "Books Read", value: booksReadCount.toLocaleString(), unit: "books" },
      { attribute: "Weight", value: "185", unit: "pounds" },
      { attribute: "Married", value: yearsMarried.toFixed(4), unit: "years" },
      { attribute: "Countries Visited", value: "39", unit: "countries" },
      { attribute: "Countries Lived", value: "4", unit: "countries" },
      { attribute: "Running Distance", value: runningDistance.toFixed(0), unit: "miles" },
      { attribute: "Biking Distance", value: bikingDistance.toFixed(0), unit: "miles" },
      { attribute: "Fosters Consumed", value: "3", unit: "pints" },
      { attribute: "Foreign Languages", value: "3", unit: "languages" },
      { attribute: "Business Exits", value: "1", unit: "languages" },
      { attribute: "Businesses Failed", value: "4", unit: "languages" },
      { attribute: "Employers", value: "11", unit: "companies" },
      { attribute: "Website Visits", value: "will hook up to GAnalytics soon", unit: "visits" }
    ]);
  };

  updateStats();
  const timer = setInterval(updateStats, 100); // Update every 100ms for smooth counting

  return () => clearInterval(timer);
}, []);

  const topLists = {
    "Top 10 Books": ["The Art of Communication - Thich Nhat Hanh", "The Checklist Manifesto - Atul Gawande", "Thinking Fast and Slow - Daniel Kahneman", "Moonwalking with Einstein - Joshua Foer", "Common Sense on Mutual Funds - John C. Bogle", "Dare to Lead - Brene Brown", "The Heart of the Buddha's Teachings - Thich Nhat Hanh", "Bold - Peter Diamandis", "A Complaint Free World - Will Bowen", "Talking to Strangers - Malcolm Gladwell"],
    "Top 10 Movies": ["The Power of One", "Shawshank Redemption", "Now You See Me", "The Game", "Lock, Stock and Two Smoking Barrels", "The Matrix (series)", "The Usual Suspects", "The Dark Knight", "Fight Club", "Rocky (series)"],
    "Top 10 TV Shows": ["Succession", "Breaking Bad", "Silicon Valley", "Entourage", "Westworld", "The X-Files", "Law and Order", "Prison Break", "The Pretender", "South Park"],
    "Top 10 Songs": ["Stairway to Heaven - Led Zeppelin", "Sittin on the Dock of the Bay - Otis Redding", "Zombie - The Cranberries", "Edge of Seventeen - Stevie Nix", "In The Air Tonight - Phil Collins", "Hit ‘Em Up - 2Pac", "Loud and Heavy - Cody Jinks", "Paint it, Black - The Rolling Stones", "Smells Like Teen Spirit - Nirvana", "Tarantula - Pendulum"],
    "Top 10 Music Artists": ["Oliver Huntermann", "Hernan Cattaneo", "Onyx", "Nas", "Fleetwood Mac", "Wu Tang", "Rennie Pilgrem", "Felix da Housecat", "Metallica", "Rolling Stones"],
    "Top 10 Actors": ["Denzel Washington", "Hugh Jackman", "Heath Ledger", "Robin Williams", "Johnny Depp", "Tom Hanks", "Morgan Freeman", "Samuel L Jackson", "Harrison Ford", "Matthew McConaughey"],
    "Top 10 Cities in the World": ["Melbourne - Australia", "Hạlong Bay - Vietnam", "Kauai - Unites States", "Vang Vieng - Laos", "Koh Tao - Thailand", "Chiang Mai - Thailand", "Yasawa Islands - Fiji", "San Sebastián - Spain", "Berlin - Germany", "El Nido - Philippines"]
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <DataTable data={detailedStats} />

      {Object.entries(topLists).map(([title, items], index) => (
        <DropdownComponent key={index} title={title} items={items} />
      ))}
    </div>
  );
}