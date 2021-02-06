import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BIRDS from 'vanta/dist/vanta.net.min'
import './index.css';
import { Homepage } from './Components/DashboardComponent/HomePage';

class Venta extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 2.00,
      scaleMobile: 1.00,
      color: 0x6640fa,
      backgroundColor: 0x1e1e1e,
      points: 13.00,
      maxDistance: 27.00,
      spacing: 16.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      <App />
    </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Venta />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

