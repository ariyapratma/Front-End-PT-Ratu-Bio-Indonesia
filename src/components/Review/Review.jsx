import React from "react";
import Avatar from "react-avatar";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 5,
    comment: "Excellent service and quality products! Highly recommend.",
  },
  {
    name: "Jane Smith",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 4,
    comment: "Great experience, though the delivery could be faster.",
  },
  {
    name: "Mike Johnson",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    rating: 5,
    comment: "Amazing products! Will definitely buy again.",
  },
];

export default function Review() {
  return (
    <div className="flex flex-col items-center p-6">
      <h6 className="text-2xl text-black font-lexend font-medium mb-6">
        Reviews
      </h6>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 max-w-xs bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            <Avatar
              name={review.name}
              src={review.avatar}
              size="64"
              round={true}
              className="mb-4"
            />
            <h6 className="text-lg font-lexend font-medium mb-2">
              {review.name}
            </h6>
            <div className="flex mb-2">
              {[...Array(review.rating)].map((star, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
