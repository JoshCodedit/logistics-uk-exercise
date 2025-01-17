import DriverCard from "./DriverCard";
import drivers from "../utils/data/drivers.json";
import "../assets/styles/DriverListing.css";

export default function DriverListing({ searchQuery }) {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const filteredDrivers = drivers.data.filter((driver) => {
    const fullName = `${driver.forename} ${driver.surname}`.toLowerCase();
    const registration = driver.vehicleRegistration.toLowerCase();
    const query = searchQuery.toLowerCase();

    return fullName.includes(query) || registration.includes(query);
  });

  return (
    <div className="driver-listings-container">
      {filteredDrivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} daysOfWeek={daysOfWeek} />
      ))}
    </div>
  );
}
