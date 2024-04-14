import moment from "moment"
import { getPeriodPassed } from "../custom/getPeriodPassed.custom"

export const convertCreatedToTime = (createdAt: string) => {
  const timeDiff = moment().unix() - moment(createdAt).unix()
  const daysPassed = Math.floor(timeDiff / 60 / 60 / 24)
  const formatedDate = getPeriodPassed(daysPassed)
  return formatedDate
} 