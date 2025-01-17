import calculateDuration from "../utils/durationCalculator";
import drivers from "../utils/data/drivers.json";

export default function DriverListing() {
  return (
    <div>
      <ul>
        {drivers.data.map((driver) => (
          <div>
            <p>
              {driver.forename} {driver.surname}
            </p>
            <p>{driver.vehicleRegistration}</p>
            <p>{calculateDuration(driver.traces)}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
