import { useState } from "react";
import styles from "../../styles/BookingForm.module.css";
import calender from "../../assets/calender.svg";
import Swal from "sweetalert2";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: 1,
    message: "",
  });

  const handleChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      people: Math.max(1, prevData.people + value), // Prevent value from going below 1
    }));
  };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Booking information ready to be saved!",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Save data to local storage after user clicks "OK"
        localStorage.setItem("bookingData", JSON.stringify(formData));
        Swal.fire({
          icon: "success",
          title: " saved.",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div
      className={`${styles.bookingFormSection} h-auto lg:h-[788px]  py-[30px] lg:py-[120px]`}
    >
      <div className="w-[330px] lg:w-[1320px] mx-auto relative">
        {/* section title */}
        <div>
          <p className="section-subtitle text-base lg:text-xl leading-[26px] lg:leading-8">
            Book Now
          </p>
          <h3 className="text-[40px] lg:text-[62px] text-white-solid leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
            Book Your Table
          </h3>
          <p className="text-base text-footer-text mt-4 mb-10 font-light leading-6 w-full lg:w-[545px]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        {/* booking form */}
        <div className="w-full lg:w-[635px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] mb-4 lg:mb-6 ">
              {/* name input */}
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                placeholder="Your Name*"
                className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
              />

              {/* email input */}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Your Email"
                className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid  placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
              />
            </div>

            {/*  date and people*/}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] mb-4 lg:mb-6 ">
              <div className="relative w-full">
                {/* date */}
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  placeholder="Reservation Date"
                  className="border border-white-border w-full bg-inherit py-3 px-4 caret-white-solid outline-none text-white-solid appearance-none"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <img
                    src={calender}
                    alt="Calendar Icon"
                    className="w-5 h-5 "
                  />
                </span>
              </div>

              {/* people */}

              {/* <input
                type="number"
                name="people"
                onChange={handleChange}
                placeholder="Total People*"
                className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid  placeholder-white-solid  caret-white-solid outline-none"
              /> */}

              <div className="relative w-full">
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  placeholder="Total People*"
                  className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid placeholder-white-solid caret-white-solid outline-none"
                  min="1"
                />
                {/* Up and down icons */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleChange(1)}
                    className="bg-inherit text-white-solid hover:text-gray-400"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChange(-1)}
                    className="bg-inherit text-white-solid hover:text-gray-400"
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>

            {/* message box */}
            <div>
              <textarea
                name="Message"
                rows="4"
                onChange={handleChange}
                placeholder="Message"
                className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid  placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
              ></textarea>
            </div>

            {/* book now btn */}
            <button type="submit" className=" mt-6 lg:mt-8">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
