import { HeaderStyle } from '../styles/containers.styled'

const Header: React.FC = () => (
  <HeaderStyle>
    <img
      title="corona-virus"
      alt="corona-virus"
      src="/static/images/corona-virus-small.png"
    />
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
      elit leo
    </h1>
    <p>
      Morbi a aliquam augue. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Sed molestie rhoncus orci in
      maximus. Donec ac tempor odio, hendrerit egestas odio. Etiam nec mauris
      odio. Morbi non aliquet libero, ac sollicitudin neque. Suspendisse laoreet
      metus nec neque sagittis fermentum. Mauris dignissim ante arcu, a cursus
      risus ornare in. Mauris in risus in felis gravida scelerisque. Proin ut
      viverra libero. Nullam id ultrices nibh. Aliquam semper massa ac justo
      posuere, sed ullamcorper tellus malesuada. Nunc placerat feugiat turpis
      quis aliquet. Donec vel mi ut quam accumsan auctor sit amet ac mauris.
      Curabitur sed nulla vehicula erat cursus gravida a vel ligula.
    </p>
  </HeaderStyle>
)

export { Header }
