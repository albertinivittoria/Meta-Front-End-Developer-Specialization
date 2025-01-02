import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
    const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
    const handleSubmit = jest.fn();

    test("renders the form correctly", () => {
        render(<BookingForm availableTimes={availableTimes} handleSubmit={handleSubmit} />);
        expect(screen.getByLabelText("Date:")).toBeInTheDocument();
        expect(screen.getByLabelText("Time:")).toBeInTheDocument();
        expect(screen.getByLabelText("Number of Guests:")).toBeInTheDocument();
        expect(screen.getByLabelText("Full Name:")).toBeInTheDocument();
        expect(screen.getByLabelText("Email:")).toBeInTheDocument();
        expect(screen.getByLabelText("Phone Number:")).toBeInTheDocument();
        expect(screen.getByLabelText("Additional Comments:")).toBeInTheDocument();
        expect(screen.getByText("Book Now")).toBeInTheDocument();
    });

    test("displays available times in the dropdown", () => {
        render(<BookingForm availableTimes={availableTimes} handleSubmit={handleSubmit} />);
        const timeSelect = screen.getByLabelText("Time:");
        expect(timeSelect).toHaveTextContent("12:00 PM");
        expect(timeSelect).toHaveTextContent("1:00 PM");
        expect(timeSelect).toHaveTextContent("2:00 PM");
    });

    test("calls handleSubmit on form submission", () => {
        render(<BookingForm availableTimes={availableTimes} handleSubmit={handleSubmit} />);
        fireEvent.submit(screen.getByRole("button", { name: "Book Now" }));
        expect(handleSubmit).toHaveBeenCalled();
    });
});
