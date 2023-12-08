import { format, parseISO } from 'date-fns'

export function formattedDate(date: string) {
  if (!date) return ''
  const dateObject = parseISO(date)
  const formattedResult = format(dateObject, 'yyyy/MM/dd ')
  return formattedResult
}
