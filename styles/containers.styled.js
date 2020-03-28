import styled from 'styled-components'

export const BodyContainer = styled.div`
  margin: 40px 20px 20px 20px;
  color: #334455;
`

export const ItemContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 220px;
  }
`

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -25px;
`
export const FooterStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
  height: 60px;
  padding: 10px;
`

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
  text-align: center;
`

export const Block = styled.div`
  margin: 0px 8px;
  width: 100px;
  height: 40px;
  background-color: ${props => props.color};
  border: 1px solid black;
  vertical-align: middle;
  line-height: 40px;
  color: #fff;
  text-shadow: 1px 1px 1px black;
  font-size: 22px;
`
