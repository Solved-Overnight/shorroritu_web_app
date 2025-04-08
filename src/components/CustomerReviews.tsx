import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}

const CustomerReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      author: "Ayesha Khan",
      text: "The dried mango slices are absolutely delicious! They taste like summer in every bite.",
      rating: 5,
    },
    {
      id: 2,
      author: "Omar Sharif",
      text: "I love the crispy jackfruit chips. They're a perfect snack with just the right amount of crunch.",
      rating: 4,
    },
    {
      id: 3,
      author: "Fatima Ahmed",
      text: "The ready pitha mix made it so easy to enjoy traditional Bangladeshi sweets at home. Highly recommended!",
      rating: 5,
    },
    {
      id: 4,
      author: "Zahid Hasan",
      text: "The sun-dried vegetables added a unique flavor to my dishes. I'm impressed with the quality.",
      rating: 4,
    },
    {
      id: 5,
      author: "Nadia Rahman",
      text: "The dried pineapple rings are a delightful treat. They're sweet, tangy, and perfect for a quick snack.",
      rating: 5,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [reviews.length]);

  const currentReview = reviews[currentReviewIndex];

  const renderStars = (rating: number) => {
    const fullStar = "★";
    const emptyStar = "☆";
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += fullStar;
    }
    for (let i = rating; i < 5; i++) {
      stars += emptyStar;
    }
    return stars;
  };


  return (
    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-orange-700 flex items-center gap-4 py-3 px-4 rounded-xl shadow-lg w-[300px]">
      <Avatar className="w-10 h-10">
        <AvatarImage src={`https://i.pravatar.cc/150?img=${currentReviewIndex + 1}`} alt={currentReview.author} />
        <AvatarFallback>{currentReview.author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-sm">
            <b>{currentReview.author}</b>
          </div>
          <div className="text-amber-500 text-sm">
            {renderStars(currentReview.rating)}
          </div>
        </div>
        <div className="text-xs opacity-75 text-slate-700">
          <i>"{currentReview.text}"</i>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
