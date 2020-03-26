import { useContext } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { format, differenceInCalendarDays, addDays, isBefore } from 'date-fns'
import { GeneralContext } from '../pages/index'
import { ChartContainer } from '../styles/containers.styled'

export interface Data {
  name: string
  Infected: number
  Healed: number
  Deaths: number
}

const dateFormatString = 'd.M'
const daysBetweenDataPoints = 7

const InfectionsByArea: React.FC = () => {
  const { confirmed, deaths, recovered } = useContext(GeneralContext)

  const daysBetweenStartAndNow = differenceInCalendarDays(
    new Date(confirmed[confirmed.length - 1].date),
    new Date(confirmed[0].date)
  )

  const dayInterval = Math.round(daysBetweenStartAndNow / daysBetweenDataPoints)

  const splitTimespanToDatapoints = () => {
    const data: Data[] = []
    const dayFirst = new Date(confirmed[0].date)
    const dayLast = new Date(confirmed[confirmed.length - 1].date)

    let iterationDate = dayFirst
    const getResultsFromIterationDate = () => {
      const dayIntervalAddedToIterationDate = addDays(
        iterationDate,
        dayInterval + 1
      )

      const confirmedForIterationDate = confirmed.filter(i =>
        isBefore(new Date(i.date), new Date(dayIntervalAddedToIterationDate))
      )

      const recoveredForIterationDate = recovered.filter(i =>
        isBefore(new Date(i.date), new Date(dayIntervalAddedToIterationDate))
      )
      const deadForIterationDate = deaths.filter(i =>
        isBefore(new Date(i.date), new Date(dayIntervalAddedToIterationDate))
      )

      data.push({
        name: format(new Date(iterationDate), dateFormatString),
        Infected: confirmedForIterationDate.length,
        Healed: recoveredForIterationDate.length,
        Deaths: deadForIterationDate.length,
      })

      if (
        addDays(dayIntervalAddedToIterationDate, daysBetweenDataPoints) <
        dayLast
      ) {
        // Continue running this loop when dealing with past dates
        iterationDate = dayIntervalAddedToIterationDate
        getResultsFromIterationDate()
      } else {
        // Add the current date as last point
        data.push({
          name: format(
            new Date(confirmed[confirmed.length - 1].date),
            dateFormatString
          ),
          Infected: confirmed.length,
          Healed: recovered.length,
          Deaths: deaths.length,
        })
      }
    }
    getResultsFromIterationDate()
    return data
  }

  const data = splitTimespanToDatapoints()

  return (
    <ChartContainer>
      <h3>Corona spread in Finland</h3>
      <ResponsiveContainer width={'100%'} height={350}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Infected" stroke="#adad24" />
          <Line type="monotone" dataKey="Healed" stroke="#008c00" />
          <Line type="monotone" dataKey="Deaths" stroke="#911d00" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export { InfectionsByArea }
