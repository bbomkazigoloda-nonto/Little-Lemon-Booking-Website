import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table booked successfully!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Reserve a Table</h2>

      <label htmlFor="date">Choose Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Choose Time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select Time</option>
        <option value="17:00">5:00 PM</option>
        <option value="18:00">6:00 PM</option>
        <option value="19:00">7:00 PM</option>
        <option value="20:00">8:00 PM</option>
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
`
