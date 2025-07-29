// components/TestimonialSection.jsx
"use client";

import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aman Verma",
    feedback: "Great quality furniture and excellent service!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    feedback: "Amazing experience! Highly recommend.",
  },
  {
    id: 3,
    name: "Rahul Mehra",
    feedback: "Delivery was fast and the product is top-notch.",
  },
  {
    id: 4,
    name: "Neha Jain",
    feedback: "Loved the design and finish. Totally worth it.",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef(null);

  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-20">
        <div>
        </div>
    </section>
  );
}
