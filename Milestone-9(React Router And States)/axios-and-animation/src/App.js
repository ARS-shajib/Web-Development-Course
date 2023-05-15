import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
    to: { opacity: 1 },

  })
  return (
    <div className="App">
      <animated.div style={props}>Hello World</animated.div>
    </div>
  );
}

export default App;
