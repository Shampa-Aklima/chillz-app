export function Recipes() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Quick & Easy Recipe {i}</h3>
                <p className="text-gray-600 mb-4">Prep time: 20 mins • Cook time: 30 mins</p>
                <button className="text-[#004745] font-semibold hover:underline">
                  View Recipe →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 