import dayjs, { type ConfigType } from 'dayjs'

export const formatDate = (date: ConfigType, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format)
}
