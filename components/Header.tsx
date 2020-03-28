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
      This is mainly a demo site for my own interest and practice. I'v been
      taking most look & feel from{' '}
      <a
        href="https://korona.kans.io/"
        target="_blank"
        rel="noopener noreferrer">
        https://korona.kans.io/
      </a>
      . This site also shows how simply you can get (almost) full score from
      Chrome audit tool.
    </p>
  </HeaderStyle>
)

export { Header }
