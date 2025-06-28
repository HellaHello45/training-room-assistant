
import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    room: "",
    date: "",
    timeFrom: "",
    timeTo: "",
    name: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! (This is the base version)");
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Book a Training Room</h2>
      <form onSubmit={handleSubmit}>
        {["room", "date", "timeFrom", "timeTo", "name", "purpose"].map((field) => (
          <div key={field} style={{ marginBottom: '12px' }}>
            <input
              type={field.includes("time") ? "time" : field === "date" ? "date" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </div>
        ))}
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}>
          Submit Booking
        </button>
      </form>
    </div>
  );
}
