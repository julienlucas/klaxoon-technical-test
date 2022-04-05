import styled from 'styled-components';

export const SApp = styled.div`
    body {
        margin: 0;
        font - family: -apple - system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans - serif;
        -webkit - font - smoothing: antialiased;
        -moz - osx - font - smoothing: grayscale;
    }

    code {
        font - family: source - code - pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export const SHeader = styled.main`
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`
export const SWrapper = styled.main`
    position: relative;
    margin: 0 auto;
    display: table;
    width: 100%;
    max-width: 1200px;
`