import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const Products = (): JSX.Element => {
  // Placeholder product data
  const products = [
    { id: 1, name: "Dried Mango Slices", price: "$9.99", image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1", description: "Sweet and chewy dried mango." },
    { id: 2, name: "Crispy Jackfruit Chips", price: "$12.99", image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1", description: "Crunchy and savory jackfruit chips." },
    { id: 3, name: "Ready Pitha Mix", price: "$15.99", image: "https://images.pexels.com/photos/461449/pexels-photo-461449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1", description: "Traditional Bangladeshi pitha mix." },
    { id: 4, name: "Sun-dried Vegetables", price: "$11.99", image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1", description: "A mix of seasonal sun-dried vegetables." },
    { id: 5, name: "Dried Pineapple Rings", price: "$10.99", image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1", description: "Tangy and sweet dried pineapple." },
    { id: 6, name: "Spicy Mango Pickle (Dried)", price: "$8.99", image: "https://images.pexels.com/photos/93049/pexels-photo-93049.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1", description: "Traditional spicy mango pickle, sun-dried." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Simple Header */}
      <header className="container mx-auto px-4 py-6 sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-xl">☀️</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 text-transparent bg-clip-text">Sororritu Products</span>
          </Link>
          <Button variant="outline" className="rounded-xl px-6 border-orange-200 text-orange-600 hover:bg-orange-50" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-orange-900">
          Our Dehydrated Delights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
                // Add error handling for images if needed
                onError={(e) => {
                  console.error(`Failed to load image: ${product.image}`);
                  // Optionally set a fallback image
                  // e.currentTarget.src = 'fallback-image-url.jpg';
                }}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-orange-900 mb-2">{product.name}</h2>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-orange-700">{product.price}</span>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-orange-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-orange-200">
          © 2024 Sororritu. Taste the Seasons, Anytime.
        </div>
      </footer>
    </div>
  );
};
