import dayjs from 'dayjs'

const relativeTime = require('dayjs/plugin/relativeTime')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

export const fromNow = (mmddyyy) => dayjs(mmddyyy, "MM-DD-YYYY").fromNow()