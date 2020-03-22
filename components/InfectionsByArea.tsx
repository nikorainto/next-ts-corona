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
import { format } from 'date-fns'
import { GeneralContext } from '../pages/index'
import { ChartContainer } from '../styles/containers.styled'

const InfectionsByArea: React.FC = () => {
  const { confirmed, deaths, recovered } = useContext(GeneralContext)

  // @ts-ignore
  const data = [
    {
      name: format(new Date(confirmed[0].date), 'd.M.Y'),
      Infected: 1,
      Healed: 0,
      Deaths: 0,
    },
    {
      name: format(new Date(confirmed[confirmed.length - 1].date), 'd.M.Y'),
      Infected: confirmed.length,
      Healed: recovered.length,
      Deaths: deaths.length,
    },
  ]

  return (
    <ChartContainer>
      <h3>Corona spread in Finland</h3>
      <ResponsiveContainer width={'100%'} height={350}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          // @ts-ignore
          <XAxis dataKey="name" />
          // @ts-ignore
          <YAxis />
          // @ts-ignore
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
