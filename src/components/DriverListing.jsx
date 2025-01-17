import calculateDuration from "../utils/durationCalculator";
import drivers from "../utils/data/drivers.json";
import "../assets/styles/DriverListing.css";

export default function DriverListing() {
  return (
    <div>
      <div className="driver-listings-container">
        {drivers.data.map((driver) => (
          <div className="driver-listing">
            <p className="driver-name">
              {driver.forename} {driver.surname}
            </p>
            <p className="driver-vehicle">{driver.vehicleRegistration}</p>
            <p className="driver-duration">
              {calculateDuration(driver.traces)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
