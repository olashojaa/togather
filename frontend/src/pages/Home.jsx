import React from 'react';
import Header from '../components/Header';
import BottomFilter from '../components/BottomFilter';
import Filter from '../components/Filter';
import SliderComponent from '../components/SliderComponent';

function Home() {
  return (
    <div>
      <header>
      <Header />
      </header>
      <main>
        <div className='container'>
      <Filter />
      <SliderComponent />
      <BottomFilter />
      </div>
      </main>
    </div>
  );
}

export default Home;