import React from 'react';
import './App.css';
import { Listings } from './components/Listing/Listing';
import rawData from './components/data/data.json'

function extractItem(raw) {
  return {
    listing_id: raw.listing_id,
    url: raw.url,
    title: raw.title,
    currency_code: raw.currency_code,
    price: raw.price,
    quantity: raw.quantity,
    MainImage: raw.MainImage?.url_570xN || "",
  };
}

const items = rawData.map(extractItem)

function App() {
  return (
    <div className="app">
      <Listings items={items}/>
    </div>
  );
}

export default App;