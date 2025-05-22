import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm({ onBooked }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select a date and time.");
      return;
    }

    setLoading(true);

    try {
        const res = await fetch("http://localhost:8080/api/maintenance/book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scheduledDate: selectedDate }),
        });
      
        let data = null;
      
        if (res.headers.get("content-type")?.includes("application/json")) {
          data = await res.json();
        }
      
        if (res.ok) {
          alert("Booking successful!");
          onBooked(data?.data);
          setSelectedDate(null);
        } else {
          alert(data?.message || "Failed to book.");
        }
      } catch (error) {
        console.error("Error occurred:", error);
        alert("Network error. Please try again.");
      }
}      

  return (
    <form onSubmit={handleSubmit}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={new Date()}
        placeholderText="Select Date and Time"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  );
}
