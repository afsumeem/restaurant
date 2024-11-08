import styles from "../../styles/BookingForm.module.css";

const BookingForm = () => {
  return (
    <div
      className={`${styles.popularFoodSection} h-[722px] lg:h-[788px] px-8 lg:px-[300px] py-[30px] lg:py-[120px]`}
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
          <form>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] mb-4 lg:mb-6 ">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="border border-white-border w-full bg-inherit py-3 px-4 placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-white-border w-full bg-inherit py-3 px-4 placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
              />
            </div>
            {/*  */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] mb-4 lg:mb-6 ">
              <input
                type="date"
                name="date"
                placeholder="Reservation Date"
                className="border border-white-border w-full bg-inherit py-3 px-4 caret-white-solid focus:text-gray-400 outline-none text-white-solid"
              />
              <input
                type="number"
                name="people"
                placeholder="Total People*"
                className="border border-white-border w-full bg-inherit py-3 px-4 text-white-solid  caret-white-solid outline-none"
              />
            </div>
            <div>
              <textarea
                name="Message"
                id=""
                cols="40"
                rows="7"
                placeholder="Message"
                className="border border-white-border w-full bg-inherit py-3 px-4 placeholder-white-solid  caret-white-solid  focus:placeholder-gray-400 outline-none"
              ></textarea>
            </div>
            <button className="mt-8">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
