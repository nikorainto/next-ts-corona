import { useContext } from 'react'
import { GeneralContext } from '../pages/index'
import { BlockContainer, Block } from '../styles/containers.styled'

const InfectionsQuickValues: React.FC = () => {
  const { confirmed, deaths, recovered, hospitalised } = useContext(
    GeneralContext
  )

  return (
    <>
      <BlockContainer>
        <div>
          Infected:
          <Block color="#827717">{confirmed.length}</Block>
        </div>

        <div>
          Healed:
          <Block color="#1B5E20">{recovered.length}</Block>
        </div>

        <div>
          Deaths:
          <Block color="#911d00">{deaths.length}</Block>
        </div>
      </BlockContainer>
      <BlockContainer>
        <div>
          In ward:
          <Block color="#04006b">
            {hospitalised[hospitalised.length - 1].inWard}
          </Block>
        </div>

        <div>
          In IC:
          <Block color="#000000">
            {hospitalised[hospitalised.length - 1].inIcu}
          </Block>
        </div>
      </BlockContainer>
    </>
  )
}

export { InfectionsQuickValues }
