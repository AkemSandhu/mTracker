import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome Icons
import { faDownload, faInfoCircle } from "@fortawesome/free-solid-svg-icons"; // Download and Info icons

export default function Download() {
    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Download Links</h2>
            <p className="text-center mb-5">
                Get the latest version of mTracker to manage your finances effectively. Choose the version that
                works best for you.
            </p>

            {/* Download Options */}
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <FontAwesomeIcon icon={faDownload} size="2x" className="mb-3" />
                            <h5 className="card-title">Download mTracker (JAR)</h5>
                            <a href="archive/mTracker.jar" className="btn btn-primary btn-lg">
                                <FontAwesomeIcon icon={faDownload} className="me-2" />
                                Download Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Important Notes Section */}
            <div className="mt-5">
                <h3 className="text-center mb-3">Important Notes:</h3>
                <div className="card p-4 shadow-sm">
                    <ul>
                        <li>Ensure your system meets the requirements for mTracker to run smoothly.</li>
                        <li>Always download the latest version for optimal performance and bug fixes.</li>
                        <li>If you encounter issues, visit our <a href="/documentation">documentation page</a> for support.</li>
                    </ul>
                </div>
            </div>

            {/* FAQ / More Info Section */}
            <div className="mt-5">
                <h3 className="text-center mb-3">Need Help?</h3>
                <div className="card p-4 shadow-sm">
                    <p className="text-center">
                        For more information or troubleshooting, please refer to the <a href="/documentation">documentation page</a>
                        or contact our support team.
                    </p>
                    <p className="text-center">
                        <FontAwesomeIcon icon={faInfoCircle} size="1x" className="me-2" />
                        <strong>Note:</strong> mTracker is compatible with all major operating systems. Ensure your Java version is up-to-date.
                    </p>
                </div>
            </div>
        </section>
    );
}
