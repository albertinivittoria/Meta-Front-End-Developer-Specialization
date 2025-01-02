import React from "react";

const BookingForm = ({ availableTimes = [], handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input type="date" required />
            </label>
            <label>
                Time:
                <select required>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Guests:
                <input type="number" min="1" max="20" required />
            </label>
            <label>
                Name:
                <input type="text" required />
            </label>
            <label>
                Email:
                <input type="email" required />
            </label>
            <label>
                Phone:
                <input type="tel" required />
            </label>
            <label>
                Additional Comments:
                <textarea rows="4"></textarea>
            </label>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
