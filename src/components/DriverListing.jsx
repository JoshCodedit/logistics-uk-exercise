import DriverCard from "./DriverCard";
import drivers from "../utils/data/drivers.json";
import "../assets/styles/DriverListing.css";

export default function DriverListing() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="driver-listings-container">
      {drivers.data.map((driver) => (
        <DriverCard key={driver.id} driver={driver} daysOfWeek={daysOfWeek} />
      ))}
    </div>
  );
}
