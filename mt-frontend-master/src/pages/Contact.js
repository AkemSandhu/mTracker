import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Import icons for success/error

export default function Contact() {
    const [formStatus, setFormStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (!formData.name) {
            errors.name = "Name is required.";
            isValid = false;
        }

        // Email validation using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!formData.message) {
            errors.message = "Message is required.";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Don't submit the form if validation fails
        }

        setIsLoading(true);
        const formDataObj = new FormData(e.target);

        try {
            // Assuming you have an endpoint for submitting feedback
            const response = await fetch("/submitFeedback", {
                method: "POST",
                body: formDataObj,
            });

            if (response.ok) {
                setFormStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setFormStatus("error");
            }
        } catch (error) {
            setFormStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Feedback Form</h2>

            {/* Success/Error Notification with icons */}
            {formStatus === "success" && (
                <div
                    className="alert alert-success d-flex align-items-center fade-in-up"
                    role="alert"
                >
                    <FaCheckCircle className="me-2" />
                    Thank you for your feedback! We appreciate your input.
                </div>
            )}

            {formStatus === "error" && (
                <div
                    className="alert alert-danger d-flex align-items-center fade-in-up"
                    role="alert"
                >
                    <FaExclamationCircle className="me-2" />
                    There was an error submitting your feedback. Please try again later.
                </div>
            )}

            <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100 mt-3"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="spinner-border spinner-border-sm" />
                    ) : (
                        "Send Feedback"
                    )}
                </button>
            </form>
        </section>
    );
}
