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
import {
  format,
  subDays,
  isBefore,
  isAfter,
  addDays,
  isSameDay,
} from 'date-fns'
import { GeneralContext } from '../pages/index'
import { ChartContainer } from '../styles/containers.styled'

export interface Data {
  name: string
  Infected: number
  Healed: number
  Deaths: number
}

const dateFormatString = 'd.M'

const InfectionsLast30DaysLineChart: React.FC = () => {
  const { confirmed, deaths, recovered } = useContext(GeneralContext)

  const startDate = new Date(subDays(new Date(Date.now()), 30))

  const confirmedForPast30Days = confirmed.filter(i =>
    isAfter(new Date(i.date), startDate)
  )
  const recoveredForPast30Days = recovered.filter(i =>
    isAfter(new Date(i.date), startDate)
  )
  const deadForPast30Days = deaths.filter(i =>
    isAfter(new Date(i.date), startDate)
  )

  const calculateResultsForEachDay = () => {
    const data: Data[] = []
    let currentDate = startDate

    const extractData = () => {
      if (isBefore(currentDate, new Date(Date.now()))) {
        const currentDatesInfected = confirmedForPast30Days.filter(i =>
          isSameDay(new Date(i.date), new Date(currentDate))
        )
        const currentDatesRecovered = recoveredForPast30Days.filter(i =>
          isSameDay(new Date(i.date), new Date(currentDate))
        )
        const currentDatesDead = deadForPast30Days.filter(i =>
          isSameDay(new Date(i.date), new Date(currentDate))
        )

        data.push({
          name: format(currentDate, dateFormatString),
          Infected: currentDatesInfected.length,
          Healed: currentDatesRecovered.length,
          Deaths: currentDatesDead.length,
        })

        currentDate = new Date(addDays(currentDate, 1))
        extractData()
      }
    }

    extractData()

    return data
  }

  return (
    <ChartContainer>
      <h3>Daily development last 30 days</h3>
      <ResponsiveContainer width={'100%'} height={350} id="chartPast30Days">
        <LineChart width={500} height={300} data={calculateResultsForEachDay()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
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

export { InfectionsLast30DaysLineChart }
