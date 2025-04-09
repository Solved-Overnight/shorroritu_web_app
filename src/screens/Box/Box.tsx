import React from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import CustomerReviews from "../../components/CustomerReviews";

export const Box = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { name: "Home", href: "#home", active: true },
    { name: "Our Products", href: "#products", active: false }, // Keep href for scrolling on home page
    { name: "Why Sororritu?", href: "#features", active: false },
    { name: "Our Story", href: "#about", active: false },
    { name: "Contact Us", href: "#contact", active: false },
  ];

  // Feature cards data - Updated for Sororritu
  const featureCards = [
    {
      title: "Seasonal Preservation",
      icon: "🗓️",
      description:
        "Capturing the peak flavors of each season through careful dehydration.",
    },
    {
      title: "Year-Round Availability",
      icon: "☀️",
      description:
        "Enjoy your favorite seasonal Bangladeshi tastes any time of the year.",
    },
    {
      title: "Authentic Flavors",
      icon: "😋",
      description:
        "Traditional recipes meet modern techniques to preserve genuine taste.",
    },
    {
      title: "Modern Convenience",
      icon: "🛍️",
      description:
        "Bringing the richness of Bangladeshi seasons to your busy lifestyle.",
    },
  ];

  // Best seller dishes data - Updated with Pexels images
  const bestSellerDishes = [
    {
      image: "https://raw.githubusercontent.com/Solved-Overnight/shorroritu_web_app/refs/heads/main/src/img/img18.jpg", // Dried Mango
      category: "Fruits",
      price: "$2.99",
      rating: 5,
      tag: "Sweet",
      name: "Dried Mango Slices"
    },
    {
      image: "https://raw.githubusercontent.com/Solved-Overnight/shorroritu_web_app/refs/heads/main/src/img/img10.jpg", // Pinapple
      category: "Fruits",
      price: "$2.99",
      rating: 5,
      tag: "New",
      name: "Crispy Pineapple Rings"
    },
    {
      image: "https://raw.githubusercontent.com/Solved-Overnight/shorroritu_web_app/refs/heads/main/src/img/img16.jpg", // Mashroom
      category: "Vegetables",
      price: "$4.99",
      rating: 5,
      tag: "Traditional",
      name: "Mix Mushrooms"
    },
    {
      image: "https://raw.githubusercontent.com/Solved-Overnight/shorroritu_web_app/refs/heads/main/src/img/img11.jpg", // Banana Chips
      category: "Fruits",
      price: "$0.99",
      rating: 5,
      tag: "Savory",
      name: "Crispy Banana Chips"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6 sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">☀️</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 text-transparent bg-clip-text">Sororritu</span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href} // Keep href for in-page scrolling
                className={`relative text-base font-semibold transition-colors nav-link-hover ${
                  item.active
                    ? "text-orange-600"
                    : "text-slate-700 hover:text-orange-600"
                }`}
              >
                {item.name}
              </a>
            ))}
             {/* Add a direct link to the products page as well */}
            <Link to="/products" className="relative text-base font-semibold transition-colors text-slate-700 hover:text-orange-600 nav-link-hover">
              All Products
            </Link>
          </nav>

          <Button
            variant="outline"
            className="rounded-xl px-6 border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section - Updated for Sororritu */}
      <section id="home" className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center pt-24">
        <div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Taste the
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1 rounded-xl ml-3">
              Seasons
            </span>
            <br />Anytime
          </h1>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Experience the authentic flavors of Bangladesh's six seasons, preserved naturally.
            Enjoy your favorite seasonal delicacies year-round with Sororritu's dehydrated delights.
          </p>
          {/* Use Link component for navigation */}
          <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl px-8 py-6 text-lg shadow-xl shadow-orange-100 transition-all hover:shadow-2xl hover:shadow-orange-200">
            <Link to="/products">Explore Products</Link>
          </Button>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl p-8 relative shadow-2xl">
            <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-orange-700 flex items-center gap-2 py-3 px-4 rounded-xl shadow-lg">
              <span className="text-2xl">🌿</span>
              <div>
                <div className="font-bold">Naturally Preserved</div>
                <div className="text-xs opacity-75">Taste of Bangladesh</div>
              </div>
            </Badge>

            <img
              src="https://raw.githubusercontent.com/Solved-Overnight/shorroritu_web_app/refs/heads/main/src/img/img3.jpg" // Generic dried fruit/veg
              alt="Dried seasonal produce"
              className="rounded-2xl w-full h-[500px] object-cover shadow-lg"
              onError={(e) => { console.error("Failed to load hero image"); }}
            />

            {/* Replaced the Avatar section with CustomerReviews component */}
            <CustomerReviews />
          </div>
        </div>
      </section>

      {/* Features Section - Updated for Sororritu */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-orange-900">
            Why Choose Sororritu?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We bring the essence of Bangladesh's seasons to your table, combining tradition
            with modern convenience for a unique taste experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {featureCards.map((feature, index) => (
            <Card key={index} className="group border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white hover:bg-orange-50">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-5xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-xl text-orange-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
                {/* Keep this as a button for now, or link to specific feature details if available */}
                <Button variant="link" className="mt-4 text-orange-600 hover:text-orange-700 text-lg group">
                  Learn More{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Best Seller Dishes Section (Products) - Updated for Sororritu */}
      <section id="products" className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-orange-900">
            Our Seasonal Delights
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our range of carefully dehydrated fruits, vegetables, and traditional mixes,
            capturing the best of Bangladeshi seasons.
          </p>
           {/* Add a button linking to the full product page */}
          <Button asChild variant="outline" className="mt-6 rounded-xl px-6 border-orange-200 text-orange-600 hover:bg-orange-50">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellerDishes.map((dish, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative">
                <img
                  src={dish.image} // Using Pexels URL from array
                  alt={dish.name}
                  className="w-full h-56 object-cover"
                   onError={(e) => { console.error(`Failed to load product image: ${dish.image}`); }}
                />
                <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-700">
                  {dish.tag}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-orange-900 mb-2">{dish.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-600">{dish.category}</span>
                  <Badge
                    variant="outline"
                    className="bg-orange-50 text-orange-700 border-orange-200"
                  >
                    {dish.price}
                  </Badge>
                </div>
                <div className="flex items-center text-amber-500 text-lg">
                  {"★".repeat(dish.rating)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feedback Section (Our Story) - Updated for Sororritu */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-orange-900">Our Story: Taste the Seasons</h2>
              <p className="text-slate-600 text-xl leading-relaxed mb-8">
                "Sororritu began with a love for Bangladesh's rich seasonal bounty. We wanted to capture the joy of summer mangoes and winter pithas, making them accessible year-round. Using traditional wisdom and modern methods, we preserve the authentic taste of each season, offering a flavorful journey through Bangladesh's culinary heritage, anytime you desire."
              </p>
              <div className="flex gap-3 mt-6">
                {[1, 2, 3, 4].map((dot) => (
                  <div
                    key={dot}
                    className={`w-3 h-3 rounded-full transition-all ${
                      dot === 1
                        ? "bg-orange-600 w-6"
                        : "bg-orange-200 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&dpr=1" // Generic market image
                alt="Bangladeshi Market"
                className="rounded-2xl w-full h-[500px] object-cover shadow-xl"
                 onError={(e) => { console.error("Failed to load market image"); }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated for Sororritu */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-orange-900">Get in Touch</h2>
          <p className="text-slate-600 text-lg">
            Have questions about our dehydrated products, preservation process, or want to place an order?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="font-bold text-xl text-orange-900 mb-2">Phone</h3>
              <p className="text-slate-600">+880 123 456 7890</p>
              <p className="text-slate-600">Sat-Thu: 10AM - 6PM</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-bold text-xl text-orange-900 mb-2">Location</h3>
              <p className="text-slate-600">123 Seasonal Lane</p>
              <p className="text-slate-600">Dhaka, Bangladesh</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="font-bold text-xl text-orange-900 mb-2">Email</h3>
              <p className="text-slate-600">info@sororritu.com</p>
              <p className="text-slate-600">support@sororritu.com</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Updated for Sororritu */}
      <footer className="bg-orange-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">☀️</span>
            </div>
            <span className="text-2xl font-bold">Sororritu</span>
          </div>
          <p className="text-orange-200 max-w-md mx-auto">
            Taste the Seasons, Anytime. Bringing the best of Bangladesh's harvest to your table, year-round.
          </p>
          <div className="mt-8 text-orange-200">
            © 2024 Sororritu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
