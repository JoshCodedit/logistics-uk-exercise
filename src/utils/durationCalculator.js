export default function calculateDuration(traces) {
  return traces.reduce((traceTotal, trace) => {
    const traceDuration = trace.activity.reduce((activityTotal, activity) => {
      return activityTotal + activity.duration;
    }, 0);
    return traceTotal + traceDuration;
  }, 0);
}
