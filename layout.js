import { Provider } from 'react-fela';
import { getRenderer, getMountNode } from './fela';

import Container from './components/container';

export default ({ children }) => (
  <Provider renderer={getRenderer()} mountNode={getMountNode()}>
    <Container>
      {children}
    </Container>
  </Provider>
);
