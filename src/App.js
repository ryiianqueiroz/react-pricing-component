import './App.css';
import React, { useState } from 'react'

function App() {
  
  const [ priceBasic , setPriceBasic ] = useState('$199.99')
  const [ priceProfissional , setPriceProfissional ] = useState('$249.99')
  const [ priceMaster , setPriceMaster ] = useState('$399.99')
  
  const switchTheme = (event) => {
    if (event.target.checked) {
      setPriceBasic('$19.99')
      setPriceProfissional('$24.99')
      setPriceMaster("$39.99")
    }
    else {
      setPriceBasic('$199.99')
      setPriceProfissional('$249.99')
      setPriceMaster("$399.99")
    }    
  }

  return (
    <div className="App">
      <div className="pper">
        <header>
          <h1>Our Pricing</h1>
          <div className="changePlan">
            <p>Annually</p>
            <div className="toggle-switch">
              <input type="checkbox" id="toggle" className="toggle-switch-checkbox" onChange={switchTheme}/>
              <label htmlFor="toggle" className="toggle-switch-label"></label>
            </div>
            <p>Monthly</p>
          </div>
        </header>

        <section>
          <div className="containers">
            <div className="container">
              <p className="p-plan">Basic</p>
              <h1 className="price_plan">{priceBasic}</h1>
              <div className="containers-text">
                <p>500 GB Storage</p>
                <p>2 Users Allowed</p>
                <p>Send up to 3 GB</p>
              </div>
              <input type="button" className="btn" value="LEARN MORE" />
            </div>
            
            <div className="container feature">
              <p className="p-plan feature">Professional</p>
              <h1 className="price_plan feature">{priceProfissional}</h1>
              <div className="containers-text feature">
                <p>1 TB Storage</p>
                <p>5 Users Allowed</p>
                <p>Send up to 10 GB</p>
              </div>
              <input type="button" className="btn feature" value="LEARN MORE" />
            </div>

            <div className="container">
              <p className="p-plan">Master</p>
              <h1 className="price_plan">{priceMaster}</h1>
              <div className="containers-text">
                <p>2 TB Storage</p>
                <p>10 Users Allowed</p>
                <p>Send up to 20 GB</p>
              </div>
              <input type="button" className="btn" value="LEARN MORE" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
