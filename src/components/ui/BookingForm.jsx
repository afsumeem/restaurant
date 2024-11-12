import { useState, useRef, useEffect } from "react";
import styles from "../../styles/BookingForm.module.css";
import calender from "../../assets/calender.svg";
import Swal from "sweetalert2";
import { TbCaretUp } from "react-icons/tb";
import { TbCaretDown } from "react-icons/tb";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  //

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setErrors({});
      }
    };

    //  event listener
    if (Object.keys(errors).length > 0) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [errors]);

  // validation booking form
  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    //name
    if (!formData.name) newErrors.name = "Name is required";

    // email
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid. Example: example@gmail.com";

    // date
    if (!formData.date) newErrors.date = "Date is required";
    else if (formData.date < today) {
      newErrors.date = "Cannot reserve a past date";
      Swal.fire(
        "Invalid Date",
        "You cannot select a past date for reservation.",
        "error"
      );
    }

    // total people
    if (!formData.people || formData.people <= 0)
      newErrors.people =
        "Number of people is required and must be greater than 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //increment people
  const incrementPeople = () => {
    setFormData((prevData) => ({
      ...prevData,
      people: prevData.people ? parseInt(prevData.people) + 1 : 1,
    }));
  };

  // decrement ppl
  const decrementPeople = () => {
    setFormData((prevData) => ({
      ...prevData,
      people: prevData.people > 1 ? parseInt(prevData.people) - 1 : 1,
    }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    //  check if the message box is empty
    // if (!formData.message) {
    //   const result = await Swal.fire({
    //     title: "No message provided",
    //     text: "Are you sure you want to submit the form without a message?",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonText: "Yes, submit it",
    //     cancelButtonText: "Cancel",
    //   });

    //   // if user cancel -return without submitting
    //   if (!result.isConfirmed) return;
    // }

    // Show alert
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Booking information ready to be saved!",
      confirmButtonText: "submit it",
      // showConfirmButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // save data to local storage
        localStorage.setItem("bookingData", JSON.stringify(formData));

        // reset the form after submit the form
        setFormData({
          name: "",
          email: "",
          date: "",
          people: "",
          message: "",
        });

        Swal.fire({
          icon: "success",
          title: " saved.",
          text: "Your booking information has been successfully saved to local storage.",
          showConfirmButton: false,
          timer: 4000,
        });
      }
    });
  };

  return (
    <div
      id="book-a-table"
      className={`${styles.bookingFormSection} h-full lg:h-[788px] py-[30px] lg:py-[100px]`}
    >
      <div className="w-full max-w-full lg:w-[90%] xl:w-[1320px] mx-auto px-7 lg:px-0 relative">
        {/* section title */}
        <div className="mb-6 lg:mb-10">
          <p className="section-subtitle text-base lg:text-xl leading-[26px] lg:leading-8">
            Book Now
          </p>
          <h3 className="text-[40px] lg:text-[62px] text-white-solid leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
            Book Your Table
          </h3>
          <p className="text-base text-footer-text mt-4 font-light leading-6 w-full lg:w-[545px]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        {/* booking form */}
        <div className="w-full lg:w-[635px]" ref={formRef}>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] mb-4 lg:mb-6 ">
              {/* name input */}
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  // required
                  placeholder="Your Name *"
                  className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
                />{" "}
                {errors.name && (
                  <p className="text-orange-tab text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* email input */}
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid  placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
                />{" "}
                {errors.email && (
                  <p className="text-orange-tab text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/*  date and people*/}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] mb-4 lg:mb-6 ">
              <div className=" w-full">
                <div className="relative w-full">
                  {/* date */}
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Reservation Date"
                    className="border border-white-border w-full bg-inherit py-3 px-4 caret-white-solid outline-none text-white-solid appearance-none custom-date-input"
                  />

                  <span className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <img
                      src={calender}
                      alt="Calendar Icon"
                      className="w-5 h-5 "
                    />
                  </span>
                </div>

                {errors.date && (
                  <p className="text-orange-tab text-sm mt-1">{errors.date}</p>
                )}
              </div>

              {/* people */}
              <div className="w-full">
                <div className="relative w-full">
                  <input
                    type="number"
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    placeholder="Total People"
                    className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid placeholder-white-solid caret-white-solid outline-none"
                    min="1"
                  />
                  {/* Up and down icons */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={incrementPeople}
                      className="bg-inherit text-white-solid hover:text-gray-400 p-0"
                    >
                      <TbCaretUp className="text-xl mt-1" />
                    </button>
                    <button
                      type="button"
                      onClick={decrementPeople}
                      className="bg-inherit text-white-solid hover:text-gray-400 p-0"
                    >
                      <TbCaretDown className="text-xl -mt-3" />
                    </button>
                  </div>
                </div>
                {errors.people && (
                  <p className="text-orange-tab text-sm mt-1">
                    {errors.people}
                  </p>
                )}
              </div>
            </div>
            {/* message box */}
            <div>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid  placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
              ></textarea>
            </div>

            {/* book now btn */}
            <button
              type="submit"
              className="transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg mt-6 lg:mt-8"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
