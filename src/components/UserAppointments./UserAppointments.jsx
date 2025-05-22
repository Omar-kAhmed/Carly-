import React, { useEffect, useState } from "react";
import "./UserAppointments.css";

export default function UserAppointments({ userId }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAppointments() {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/maintenance/user/${userId}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        alert("فشل في جلب المواعيد.");
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      fetchAppointments();
    }
  }, [userId]);

  if (loading) return <p>جارٍ التحميل...</p>;
  if (appointments.length === 0) return <p>لا توجد مواعيد.</p>;

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
