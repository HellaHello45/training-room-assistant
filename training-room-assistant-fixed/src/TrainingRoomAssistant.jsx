import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TrainingRoomAssistant() {
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    if (room && date && time && name && purpose) {
      setResponse(
        `Booking confirmed for ${name} on ${date} at ${time} in ${room} for ${purpose}.`
      );
    } else {
      setResponse("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold">Training Room Booking</h2>
          <Input placeholder="Room Name" value={room} onChange={(e) => setRoom(e.target.value)} />
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <Input placeholder="Time (e.g. 2:00 PM - 4:00 PM)" value={time} onChange={(e) => setTime(e.target.value)} />
          <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Purpose of Booking" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
          <Button onClick={handleSubmit}>Submit Booking</Button>
          {response && <p className="text-green-600 font-medium">{response}</p>}
        </CardContent>
      </Card>
    </div>
  );
}