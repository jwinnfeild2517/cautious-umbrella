import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import LocationProvider from '../components/LocationContext';

import theme from '../config/theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #efefef;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 60000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <Component {...pageProps} />
        </LocationProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}
