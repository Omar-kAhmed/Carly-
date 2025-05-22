// components/UserAppointments.jsx
import React, { useEffect, useState } from "react";
import "./UserAppointments.css";

export default function UserAppointments({ userId }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const res = await fetch(`http://localhost:8080/api/maintenance/user/${userId}`);
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        alert("Failed to fetch appointments.");
      }
    }

    fetchAppointments();
  }, [userId]);

  if (appointments.length === 0) return <p>No appointments found.</p>;

  return (
    <ul className="appointments-list">
      {appointments.map((app) => (
        <li key={app._id}>
          {new Date(app.scheduledDate).toLocaleString()}
        </li>
      ))}
    </ul>
  );
}
