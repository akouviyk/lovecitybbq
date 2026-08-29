import { HOURS, KITCHEN_CLOSE_HOUR } from './content'

// Rough live "open/closed" read based on published hours. Kitchen hours
// are "until it's gone" island-style, so this is a best-effort estimate,
// not a guarantee — the badge copy says as much.
export function getStatus(date = new Date()) {
  const dayIndex = date.getDay() // 0 = Sunday
  const order = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayName = order[dayIndex]
  const today = HOURS.find((h) => h.day === dayName)

  if (!today || !today.open) {
    return { open: false, label: 'Closed today', detail: 'Back Tuesday at 10am' }
  }

  const hour = date.getHours()
  const closeHour = dayName === 'Sunday' ? 14 : KITCHEN_CLOSE_HOUR

  if (hour < 10) {
    return { open: false, label: 'Opening at 10am', detail: 'Kitchen fires up at 10' }
  }
  if (hour >= closeHour) {
    return { open: false, label: 'Closed for the night', detail: 'Back tomorrow at 10am' }
  }
  return { open: true, label: 'Open now', detail: today.open }
}
