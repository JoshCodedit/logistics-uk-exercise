import calculateDuration from "../utils/durationCalculator";

export default function DriverCard({ driver, daysOfWeek }) {
  const hasActivity = (traces, dayIndex) => {
    const date = `2021-02-${(dayIndex + 1).toString().padStart(2, "0")}`;
    return traces.some(
      (trace) => trace.date === date && trace.activity?.length > 0
    );
  };

  return (
    <div className="driver-listing">
      <div className="driver-info">
        <p className="driver-name">
          <span className="info-label">Driver:</span>
          <br />
          {driver.forename} {driver.surname}
        </p>
      </div>
      <div className="driver-info">
        <p className="driver-vehicle">
          <span className="info-label">Vehicle:</span>
          <br />
          {driver.vehicleRegistration}
        </p>
      </div>
      <div className="driver-info">
        <p className="driver-duration">
          <span className="info-label">Activity Duration:</span>
          <br />
          {calculateDuration(driver.traces)}
        </p>
      </div>
      <div className="week-grid">
        {daysOfWeek.map((day, i) => (
          <div
            key={i}
            className={`day-box ${
              hasActivity(driver.traces, i) ? "has-activity" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
