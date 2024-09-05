import React from "react";
import "./Testimonials.css";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";

export default function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      message: "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image: p1,
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image: p2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      message: "The variety of courses offered is fantastic. I've gained valuable skills that I use in my career every day.",
      image: p3,
    },
    {
      id: 4,
      name: "Bob Brown",
      message: "Great learning experience with practical insights. The support and resources provided are top-notch.",
      image: p4,
    },
  ];

  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testimonial-container">
        {testimonialsData.map((e) => (
          <div className="testimonial" key={e.id}>
            <div className="photo">
              <img className="t-img" src={e.image} alt={e.name} />
            </div>
            <div className="review">
              <p>{e.message}</p>
              <p className="name">{e.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
