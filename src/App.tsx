import './App.css';
import { Listings } from './components/Listing/Listing';
import rawData from './components/data/data.json'

interface RawItem {
  state?: string;
  listing_id?: number;
  url?: string;
  MainImage?: {
    url_570xN?:string;
  };
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

function extractItem(raw: RawItem) {
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

const items = rawData
  .filter((raw: any) => raw.state !== "removed")
  .map(extractItem)

function App() {
  return (
    <div className="container">
      <Listings items={items}/>
    </div>
  );
}

export default App;