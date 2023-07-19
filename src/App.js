import React from "react";
import Header from './Components/header';
import Selection from './Components/selection';
import KeyBoard from './Components/KeyBoard';
import Bill from './Components/bill';
import Menu from './Components/menuBox';

function App() {
  return (
    <div>
      <Header/>
      <div className="row">
        <div className="col-8">
      <Selection/>
      <KeyBoard/>
        </div>
      <div className="col-4">
      <Bill/>
      </div>
      </div>
      <menuBox/>
    </div>
  );
}

export default App;
