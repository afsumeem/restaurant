const BookingForm = () => {
  return (
    <div>
      {/* section title */}
      <div>
        <p>Book Now</p>
        <h3>Book Your Table</h3>
        <p>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
      </div>
      {/* booking form */}
      <div>
        <form>
          <div>
            <input type="text" name="name" placeholder="Your Name*" />
            <input type="email" name="email" placeholder="Your Email" />
          </div>
          {/*  */}
          <div>
            <input type="date" name="date" placeholder="Reservation Date" />
            <input type="number" name="people" placeholder="Total People*" />
          </div>
          <div>
            <textarea
              name="Message"
              id=""
              cols="40"
              rows="7"
              placeholder="Message"
            ></textarea>
          </div>
          <button>Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
