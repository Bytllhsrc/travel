import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import data from './data';

import './App.css';

function App() {
  console.log(data[1]);

  const cities = data.map(cityData => {
    return (

      <Post data={cityData} />
    )

  })


  return (
    <div className="App">
      <Header/>
      <section className="cities-list" >
          {cities}
        </section>
      <Footer/>
    </div>
  );
}

export default App;
