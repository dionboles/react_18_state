import { useState, useSyncExternalStore } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import store from './store';
import { useEffect } from 'react';
const useStore = (selector = (state) => state) => {
  // This is to sync a external start to react such as the re
  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
};
const IncreamentValue = ({ item }) => (
  <button
    onClick={() => {
      const state = store.getState();
      store.setState({
        ...state,
        [item]: state[item] + 1,
      });
    }}>
    Increament {item}
  </button>
);

const DisplayValue = ({ item }) => (
  <div>
    {item} : {useStore((state) => state[item])}
  </div>
);
function App() {
  return (
    <div
      className='App'
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: 600,
        gap: '1rem',
      }}>
      <IncreamentValue item='value1'></IncreamentValue>
      <DisplayValue item='value1'></DisplayValue>

      <IncreamentValue item='value2'></IncreamentValue>
      <DisplayValue item='value2'></DisplayValue>
    </div>
  );
}

export default App;
