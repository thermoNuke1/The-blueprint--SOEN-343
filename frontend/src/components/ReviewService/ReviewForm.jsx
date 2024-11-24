import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import PropTypes from "prop-types";

const ReviewForm = ({ setErrorMessage }) => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const baseUrl = "/api/reviews";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        username: email,
        ratingScore: rating,
      };

      // Only include feedback if it has content
      if (review.trim()) {
        reviewData.feedback = review;
      }

      const response = await axios.post(baseUrl, reviewData);
      console.log(response.data.message);
      setShowSuccessModal(true); // Show success modal

      // Navigate to the main page after showing the success modal for 3 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error("Error submitting review:", error.response?.data?.message || error.message);
      setShowErrorModal(true); // Show error modal
    }
    setEmail("");
    setRating(0);
    setReview("");
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/"); // Redirect to the main page when closing the success modal
  };

  const closeErrorModal = () => setShowErrorModal(false); // Close the error modal

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-center mb-4">Rate Your Delivery Experience</h2>
          <form onSubmit={handleSubmit}>
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
                    style={{
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      marginRight: "8px",
                    }}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Review Input */}
            <div className="mb-3">
              <label htmlFor="review" className="form-label">
                Your Review (Optional)
              </label>
              <textarea
                className="form-control"
                id="review"
                placeholder="Write your feedback here..."
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Review Submitted</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeSuccessModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Thank you for your feedback! Your review has been submitted
                  successfully.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeSuccessModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Submission Failed</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeErrorModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Sorry, we couldn't submit your review. Please check your
                  connection and try again.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeErrorModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ReviewForm.propTypes = {
  setErrorMessage: PropTypes.func.isRequired,
};

export default ReviewForm;
