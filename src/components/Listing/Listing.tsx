import React from "react";

interface Item {
  listing_id: number;
  url: string;
  MainImage: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingsProps {
  items: Item[];
}

function selectedCAD(currency_code: string, price: string) {
  if (currency_code === "USD") {
    return `$${price}`
  } else if (currency_code === "EUR") {
    return `€${price}`
  } else if (currency_code === "GBP") {
    return `£${price}`
  } else {
    return `CAD${price}`
  }
}

function selectedStock(quantity: number) {
  if (quantity > 20) {
    return "stock-high"
  } else if (quantity < 10) {
    return "stock-low"
  } else {
    return "stock-medium"
  }
}

export function Listings({ items }: ListingsProps) {
  return (
    <>
      <div className="listing-container">
          {items.map((item) => (
            <div key={item.listing_id} className="product-card">
              <img src={item.MainImage}/>
              <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <div className="price-container">
                      <div className="product-price">
                        {selectedCAD(item.currency_code, item.price)}
                      </div>
                      <span className={`stock-badge ${selectedStock(item.quantity)}`}>
                        {item.quantity} left
                      </span>
                  </div>
              </div>
          </div>
          ))}
      </div>
    </>
  )
}