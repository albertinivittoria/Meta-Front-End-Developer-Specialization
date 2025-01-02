import React, { useState } from "react";
import BookingForm from "./BookingForm";

const App = () => {
    const [availableTimes, setAvailableTimes] = useState(["12:00 PM", "1:00 PM", "2:00 PM"]);

    return (
        <div>
            <h1>Little Lemon - Book a Table</h1>
            <BookingForm availableTimes={availableTimes} handleSubmit={() => {}} />
        </div>
    );
};

export default App;
