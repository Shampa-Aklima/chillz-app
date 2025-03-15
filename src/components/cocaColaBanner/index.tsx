import Image from "next/image"

export function CocaColaBanner() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="bg-[#0e0e0e] text-white rounded-md p-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">There&apos;s always something good here.</h2>
            <p className="text-gray-300 mb-4">Refreshing drinks for all occasions</p>
            <div className="flex items-center">
              <span className="text-sm">From</span>
              <span className="text-2xl font-bold ml-2">$ 249.99</span>
            </div>
          </div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chillz.png-lCw5edIgsHfHJz3mO4lMh5nWbBY6Ny.jpeg"
            alt="Coca Cola bottle"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

