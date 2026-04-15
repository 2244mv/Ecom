import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    // role: "Frontend Developer",
    message: "This platform is amazing! It helped me improve my coding skills.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Priya Verma",
    // role: "UI Designer",
    message: "Beautiful UI and smooth experience. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Aman Gupta",
    // role: "Student",
    message: "Very helpful content and easy to understand.",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;