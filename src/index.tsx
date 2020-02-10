import React, { FC } from 'react'
import { render } from 'react-dom'
import beagleService from './beagle/service'
import { BeagleRemoteView, BeagleProvider } from 'beagle-react'
import NavBar from './components/NavBar'
import { Page, Content } from './styled'

const path = 'd803e59aadc5c3cc8def28553f17d61f/raw/140ee286ed0222ed10fb1e8f61a95f7f2f16f9d6/beagle-example.json'

const App: FC = () => (
  <Page>
    <BeagleProvider value={beagleService}>
      <NavBar />
      <Content>
        <BeagleRemoteView path={path} />
      </Content>
    </BeagleProvider>
  </Page>
)

render(<App />, document.getElementById('root'))
