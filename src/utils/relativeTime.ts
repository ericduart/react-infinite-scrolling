const DATE_UNITS: Record<string, number> = {
  year: 31536000, // One year in seconds
  month: 2629800, // One month in seconds
  day: 86400, // One day in seconds
  hour: 3600, // One hour in seconds
  minute: 60, // One minute in seconds
  second: 1
}

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const getRelativeTime = (time: Date) => {
  const started = new Date(time).getTime()
  const now = new Date().getTime()

  const elapsed = (started - now) / 1000

  for (const unit in DATE_UNITS) {
    const absoluteElapsed = Math.abs(elapsed)

    if (absoluteElapsed >= DATE_UNITS[unit] || unit === 'second') {
      return rtf.format(
        Math.floor(elapsed / DATE_UNITS[unit] + 1),
        unit as Intl.RelativeTimeFormatUnit
      )
    }
  }

  return ''
}
