import React from "react";
import { Star, User } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Murat K.",
      title: "School Teacher • Istanbul",
      review:
        "Booking my appointment through DentalScanner was unbelievably easy. I found a top-rated clinic in Istanbul within minutes, and the whole process felt professional and secure.",
      rating: 5,
    },
    {
      id: 2,
      name: "Murat K.",
      title: "School Teacher • Istanbul",
      review:
        "Booking my appointment through DentalScanner was unbelievably easy. I found a top-rated clinic in Istanbul within minutes, and the whole process felt professional and secure.",
      rating: 5,
    },
    {
      id: 3,
      name: "Murat K.",
      title: "School Teacher • Istanbul",
      review:
        "Booking my appointment through DentalScanner was unbelievably easy. I found a top-rated clinic in Istanbul within minutes, and the whole process felt professional and secure.",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "fill-orange-400 text-orange-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className=" min-h-[100dvh] w-full bg-gray-50 flex justify-center items-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-2">What our customers say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Thousands of users across Turkey trust us to
            <br />
            help them book safe, affordable dental care
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <StarRating rating={testimonial.rating} />

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {testimonial.review}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
