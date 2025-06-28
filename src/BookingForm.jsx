
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
    alert("Booking submitted! (This is the dropdown version)");
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
        <div style={{ marginBottom: '12px' }}>
          <select
            name="room"
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            defaultValue=""
          >
            <option value="" disabled>Select a Room</option>
            <option value="Room A">Room A</option>
            <option value="Room B">Room B</option>
            <option value="Room C">Room C</option>
          </select>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          <input
            type="time"
            name="timeFrom"
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <input
            type="time"
            name="timeTo"
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <textarea
            name="purpose"
            placeholder="Purpose"
            onChange={handleChange}
            required
            rows="3"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
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
