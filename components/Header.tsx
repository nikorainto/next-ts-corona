import { HeaderStyle } from '../styles/containers.styled'

const Header: React.FC = () => (
  <HeaderStyle>
    <img
      title="corona-virus"
      alt="corona-virus"
      src="/static/images/corona-virus-small.webp"
    />
    <h1>Finlands corona-virus spread situation</h1>
    <p>
      This is mainly a demo site for my own practise. I'v been taking most look
      & feel from <a href="https://korona.kans.io/">https://korona.kans.io/</a>.
      This site also shows how simply you can get full score from Chrome audit
      tool. This demo is currently really simple and does not follow typescript
      rules in orthodox manner.
    </p>
  </HeaderStyle>
)

export { Header }
