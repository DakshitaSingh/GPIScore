import React, { Component } from 'react';
import '../Css/Feedback.css';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedback: '',
      rating: 5,
      formSubmitted: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRatingChange = (event) => {
    this.setState({ rating: parseInt(event.target.value) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, feedback } = this.state;
    if (!name || !email || !feedback) {
      alert("Please fill out all required fields.");
    } else {
      console.log('Feedback submitted:', this.state);
      this.setState({
        name: '',
        email: '',
        feedback: '',
        rating: 5,
        formSubmitted: true,
      });
    }
  };

  render() {
    if (this.state.formSubmitted) {
      window.location.href = "/feedbacksubmitted";
    }

    return (
      <div className="feedback-wrapper">
        <img src="../images/feedback.png" alt="feedback banner" className="feedback-image-banner" />
        
        <div className="feedback-card">
          <h2 className="feedback-title">We’d love to hear from you 🌿</h2>
          
          <form onSubmit={this.handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                value={this.state.feedback}
                onChange={this.handleInputChange}
                placeholder="Tell us what you think..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rate Us</label>
              <select
                id="rating"
                name="rating"
                value={this.state.rating}
                onChange={this.handleRatingChange}
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <div className="form-submit">
              <button className="submit-button" type="submit">Submit Feedback</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
