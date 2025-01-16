import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import { FaRegCalendarAlt } from "react-icons/fa"; // Import calendar icon for post dates
import "../../style.css"

export default function Blog() {
    return (
        <section className="container my-5">
            <h2 className="text-center mb-5 text-primary">Latest Posts</h2>

            <div className="row">
                {/* Blog Post 1 */}
                <div className="col-md-6 mb-4">
                    <article className="card shadow-lg border-light hover-shadow">
                        <div className="card-body">
                            <h3 className="card-title">
                                <a
                                    href="/blog/making"
                                    className="text-decoration-none text-primary hover-link"
                                >
                                    A look into the making of mTracker
                                </a>
                            </h3>
                            <p className="card-text text-muted">
                                Dive into the process behind the creation of mTracker and how it aims to simplify your financial journey.
                            </p>
                            <p className="text-muted">
                                <FaRegCalendarAlt className="me-2" />
                                <time dateTime="2024-10-23">October 23, 2024</time> by Akem
                            </p>
                            <a href="/blog/making" className="btn btn-outline-primary btn-sm mt-2">
                                Read More
                            </a>
                        </div>
                    </article>
                </div>

                {/* Blog Post 2 */}
                <div className="col-md-6 mb-4">
                    <article className="card shadow-lg border-light hover-shadow">
                        <div className="card-body">
                            <h3 className="card-title">
                                <a
                                    href="/blog/literacy"
                                    className="text-decoration-none text-primary hover-link"
                                >
                                    Financial literacy is important—how mTracker can help
                                </a>
                            </h3>
                            <p className="card-text text-muted">
                                Learn how mTracker enhances financial literacy by making it easy to manage your finances with clear, accessible tools.
                            </p>
                            <p className="text-muted">
                                <FaRegCalendarAlt className="me-2" />
                                <time dateTime="2024-10-22">October 22, 2024</time> by Akem
                            </p>
                            <a href="/blog/literacy" className="btn btn-outline-primary btn-sm mt-2">
                                Read More
                            </a>
                        </div>
                    </article>
                </div>
            </div>

            {/* Pagination Section */}
            <div className="text-center mt-5">
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}