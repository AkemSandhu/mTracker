import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome Icons
import { faBook, faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"; // Icons for the documentation sections
import "../style.css"

export default function Documentation() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Side Navigation */}
                <aside className="col-md-3 col-lg-2 d-md-block bg-light sidebar py-4">
                    <h4 className="text-center mb-4">Navigation</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#what-is-mtracker">
                                <FontAwesomeIcon icon={faBook} /> What is mTracker?
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#getting-started">
                                <FontAwesomeIcon icon={faCog} /> Getting Started
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">
                                <FontAwesomeIcon icon={faCog} /> Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">
                                <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
                    <section id="what-is-mtracker">
                        <h2 className="mt-4">What is mTracker?</h2>
                        <p>
                            mTracker is a powerful financial tracking tool designed to help users manage their finances
                            effectively. It offers features for tracking income, expenses, and budgeting.
                        </p>
                    </section>

                    <section id="getting-started">
                        <h2 className="mt-5">Getting Started</h2>
                        <p>Follow these simple steps to set up mTracker:</p>
                        <ol>
                            <li>Download the application from the <a href="/download">Download</a> page.</li>
                            <li>Create your account and start tracking your finances!</li>
                        </ol>
                    </section>

                    <section id="features">
                        <h2 className="mt-5">Features</h2>

                        <h3 id="add-account">Add Account</h3>
                        <p>To add an account, fill in the account name and the initial sum of money in the appropriate
                            boxes, then click 'Add'.</p>

                        <h3 id="transfer-money">Transfer Money</h3>
                        <p>To transfer money, enter the account to transfer to and the desired amount in the boxes, then
                            click 'Transfer'.</p>

                        <h3 id="buy-stock">Buy Stock</h3>
                        <p>Select the stock symbol you wish to buy, provide the amount and price in the provided boxes, and
                            click 'Buy'.</p>

                        <h3 id="sell-stock">Sell Stock</h3>
                        <p>Follow the same process as buying, but click 'Sell' instead.</p>

                        <h3 id="add-transaction">Add Transaction</h3>
                        <p>Select a date in 2023 or 2024, pick the relevant transaction category, provide the amount of
                            money exchanged (negative for expense, positive for income), and include a description if
                            desired, then click 'Add'.</p>

                        <h3 id="edit-transaction">Edit Transaction</h3>
                        <p>To edit a transaction, type the new amount in the amount box, select the row you wish to edit,
                            and click 'Edit'.</p>

                        <h3 id="delete-transaction">Delete Transaction</h3>
                        <p>Select the row you wish to delete and click 'Delete'.</p>

                        <h3 id="fill-rows">Fill Rows</h3>
                        <p>Select the row you wish to mimic and click 'Fill'.</p>

                        <h3 id="budget-instructions">Budget Instructions</h3>
                        <p>For managing budgets, the same instructions apply as for transactions. Be sure to provide a
                            specific year and month when adding or editing budgets.</p>

                        <h3 id="filter-tracker">Filter Tracker</h3>
                        <p>Select the year and month of budgets you would like to view and click 'Filter'.</p>
                    </section>

                    <section id="faq">
                        <h2 className="mt-5">FAQ</h2>
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        What is mTracker?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        mTracker is a tool for tracking your financial activities.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Can I use mTracker offline?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, mTracker can be used offline.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
