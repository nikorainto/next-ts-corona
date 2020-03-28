import { useContext } from 'react'
import { GeneralContext } from '../pages/index'
import { BlockContainer, Block } from '../styles/containers.styled'

export interface Data {
  name: string
  Infected: number
  Healed: number
  Deaths: number
}

const InfectionsQuickValues: React.FC = () => {
  const { confirmed, deaths, recovered } = useContext(GeneralContext)

  return (
    <BlockContainer>
      <div>
        Infected:
        <Block color="#adad24">{confirmed.length}</Block>
      </div>

      <div>
        Healed:
        <Block color="#008c00">{recovered.length}</Block>
      </div>

      <div>
        Deaths:
        <Block color="#911d00">{deaths.length}</Block>
      </div>
    </BlockContainer>
  )
}

export { InfectionsQuickValues }