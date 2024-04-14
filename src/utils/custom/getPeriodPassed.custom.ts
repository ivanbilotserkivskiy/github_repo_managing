type DaysPassedInfo = {
  amount: number
  date: string
}

export const getPeriodPassed = (days: number) : DaysPassedInfo => {
  if (days < 1) {
    return { amount: days, date: 'today' }
  } else if (days === 1) {
    return { amount: days, date: 'day' }
  } else {
    return { amount: days, date: 'days' }
  }
} 