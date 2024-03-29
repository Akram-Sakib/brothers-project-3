import React, { useState } from "react";
import "./RecruiterBanner.css";

const data = [
  { id: 0, label: "HR" },
  { id: 1, label: "Founder/CEO" },
  { id: 2, label: "CTO" },
  { id: 3, label: "CMO" },
  { id: 4, label: "COO" },
  { id: 5, label: "Others" },
];

const numberData = [
  { id: 0, label: "+91" },
  { id: 1, label: "+1" },
  { id: 2, label: "+65" },
  { id: 3, label: "+44" },
];

const RecruiterBanner = () => {
  // for designation dropdown
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  // for number dropdown
  const [isNumOpen, setNumOpen] = useState(false);
  const [numItems, setNumItem] = useState(numberData);
  const [selectedNumItem, setSelectedNumItem] = useState(null);

  const toggleNumDropdown = () => setNumOpen(!isNumOpen);

  const handleNumItemClick = (id) => {
    selectedNumItem == id ? selectedNumItem(null) : setSelectedNumItem(id);
  };

  return (
    <section className="recruiter-section">
      <div className="recruiter-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="px-0.5 py-0.5">
                <div className="recruiter-banner-details">
                  <h3 className="title-md">Want to Hire Instantly?</h3>{" "}
                  <p>
                    Hirect enables Founders/CXOs/Hiring Managers/Business Owners
                    to chat directly with relevant, AI-filtered candidates,
                    without consultants, and with 100% data privacy!
                  </p>{" "}
                  <div className="recruiter-banner-img">
                    <img src="/_nuxt/img/recruiter-banner.1c745d2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="px-0.5 py-0.5">
                <div className="Schedule-call">
                  <div>
                    <div className="schedule-a-call contact-ue-form">
                      <p className="schedule-title">Schedule a call now!</p>{" "}
                      <p className="schedule-text">
                        Your next hire is right here. Get started.
                      </p>{" "}
                      <div className="input-container">
                        <input
                          type="text"
                          autocomplete="off"
                          id="user-name"
                          placeholder="Name"
                          class="common_input"
                          style={{ borderColor: "rgb(220, 223, 230)" }}
                        />
                      </div>{" "}
                      <div className="input-container d-flex">
                        <div className="dropdown number_dropdown">
                          <div
                            className="dropdown-header"
                            onClick={toggleNumDropdown}
                          >
                            <span
                              style={{
                                fontSize: "17px",
                                fontWeight: "bold",
                                opacity: "0.7",
                              }}
                            >
                              {selectedNumItem
                                ? numItems.find(
                                    (item) => item.id == selectedNumItem
                                  ).label
                                : "+91"}
                            </span>
                            <i
                              className={`fa fa-chevron-down icon ${
                                isNumOpen && "open"
                              }`}
                            ></i>
                          </div>
                        </div>
                        <div
                          style={{ marginTop: "60px" }}
                          className={`dropdown-body position-absolute z-10 ${
                            isNumOpen && "open"
                          }`}
                        >
                          {numItems.map((item) => (
                            <div
                              className="dropdown-item"
                              onClick={(e) => handleNumItemClick(e.target.id)}
                              id={item.id}
                            >
                              <span
                                className={`dropdown-item-dot ${
                                  item.id == selectedNumItem && "selected"
                                }`}
                              >
                                •{" "}
                              </span>
                              {item.label}
                            </div>
                          ))}
                        </div>
                        <input
                          type="text"
                          autocomplete="off"
                          id="user-name"
                          placeholder="Enter 10 digit mobile number"
                          class="common_input number_input"
                          style={{ borderColor: "rgb(220, 223, 230)" }}
                        />
                      </div>{" "}
                      <div className="input-container">
                        <input
                          type="text"
                          autocomplete="off"
                          id="user-name"
                          placeholder="Official Email"
                          class="common_input"
                          style={{ borderColor: "rgb(220, 223, 230)" }}
                        />
                      </div>{" "}
                      <div className="input-container-bottom">
                        <input
                          type="text"
                          autocomplete="off"
                          id="user-name"
                          placeholder="Company Name"
                          class="common_input"
                          style={{ borderColor: "rgb(220, 223, 230)" }}
                        />

                        {/* Dropdown Input */}
                        <div className="dropdown">
                          <div
                            className="dropdown-header"
                            onClick={toggleDropdown}
                          >
                            <span
                              style={{
                                fontSize: "17px",
                                fontWeight: "bold",
                                opacity: "0.7",
                              }}
                            >
                              {selectedItem
                                ? items.find((item) => item.id == selectedItem)
                                    .label
                                : "Designation"}
                            </span>
                            <i
                              className={`fa fa-chevron-down icon ${
                                isOpen && "open"
                              }`}
                            ></i>
                          </div>
                        </div>
                        <div className={`dropdown-body ${isOpen && "open"}`}>
                          {items.map((item) => (
                            <div
                              className="dropdown-item"
                              onClick={(e) => handleItemClick(e.target.id)}
                              id={item.id}
                            >
                              <span
                                className={`dropdown-item-dot ${
                                  item.id == selectedItem && "selected"
                                }`}
                              >
                                •{" "}
                              </span>
                              {item.label}
                            </div>
                          ))}
                        </div>
                      </div>
                      <label
                        className="el-checkbox schedule-checkbox is-checked"
                        style={{ color: "rgb(120, 120, 122)" }}
                      >
                        <span className="el-checkbox__input is-checked">
                          <span className="el-checkbox__inner"></span>
                          <input
                            type="checkbox"
                            aria-hidden="false"
                            className="el-checkbox__original"
                            value=""
                          />
                        </span>
                        <span className="el-checkbox__label">
                          {" "}
                          I would like to receive updates via whatsapp.{" "}
                        </span>
                      </label>{" "}
                      <button
                        type="button"
                        className="el-button submitButton el-button--primary"
                      >
                        {" "}
                        <span>Submit</span>
                      </button>
                    </div>{" "}
                    {/* <div
                      className="el-dialog__wrapper submit-dialog"
                      style={{ display: "block" }}
                    >
                      <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="dialog"
                        className="el-dialog"
                        style={{ marginTop: "15vh", width: "920px" }}
                      >
                        <div className="el-dialog__header">
                          <span className="el-dialog__title"></span>
                          <button
                            type="button"
                            aria-label="Close"
                            className="el-dialog__headerbtn"
                          >
                            <i className="el-dialog__close el-icon el-icon-close"></i>
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterBanner;
