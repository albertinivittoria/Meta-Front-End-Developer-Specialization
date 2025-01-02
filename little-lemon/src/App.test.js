import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders BookingForm correctly", () => {
    const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
    render(<App availableTimes={availableTimes} />);
    expect(screen.getByText("Time:")).toBeInTheDocument();
});
