import React from 'react';
import SmartWebcam from './component/smart_webcam/smart_webcam'

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <SmartWebcam></SmartWebcam>
      </div>
    )
  }
}

export default App;
