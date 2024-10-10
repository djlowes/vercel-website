import TravelMap from './TravelMap';

const Travel = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-white mb-4">My Travels</h1>
      <p className="text-gray-300 mb-8">Explore the places I've visited and lived in around the world.</p>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <TravelMap />
      </div>
      <div className="flex justify-center space-x-8 text-white">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
          <span>Visited Once</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
          <span>Visited Multiple Times</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-orange-500 mr-2"></div>
          <span>Lived Here</span>
        </div>
      </div>
    </div>
  );
}

export default Travel;