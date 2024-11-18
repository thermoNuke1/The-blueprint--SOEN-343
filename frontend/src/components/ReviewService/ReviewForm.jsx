import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", { name, email, rating, review });
    alert("Thank you for your feedback!");
    // Reset the form
    setName("");
    setEmail("");
    setRating(0);
    setReview("");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-center mb-4">Rate Your Delivery Experience</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Rating */}
            <div className="mb-3">
              <label className="form-label">Rate Your Delivery:</label>
              <div className="star-rating d-flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label
                    key={star}
                    className={`fa-star ${
                      rating >= star ? "fas text-warning" : "far text-muted"
                    }`}
                    style={{ fontSize: "1.5rem", cursor: "pointer", marginRight: "8px" }}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Review Input */}
            <div className="mb-3">
              <label htmlFor="review" className="form-label">
                Your Review
              </label>
              <textarea
                className="form-control"
                id="review"
                placeholder="Write your feedback here..."
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;