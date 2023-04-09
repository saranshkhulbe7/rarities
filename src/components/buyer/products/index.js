import React from "react";
import { buyers } from "@/db/buyers";
import { convertToRupeesFormat } from "@/utilities/formatter";
import { products } from "@/db/products";
import { sellers } from "@/db/sellers";

function Products() {
  return (
    <div className="flex flex-col gap-10">
      <div className="form-control w-full max-w-xs flex">
        <select className="select select-bordered bg-white text-ternary">
          <option selected>All Categories</option>
          <option>Furniture</option>
          <option>Statue</option>
          <option>Scientific Instruments</option>
          <option>Royal Artifact</option>
          <option>Writing Instrument</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
        {Object.values(products).map((product) => {
          return (
            <div className="flex justify-center items-center">
              <div className="card bg-white lg:card-side shadow-xl p-2 max-w-[360px] lg:max-w-none">
                <div className="flex justify-center items-center">
                  <div className="aspect-[16/12] h-[210px] min-w-[270px] rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt="Album"
                      className="h-full w-full"
                    />
                  </div>
                </div>

                <div className="card-body text-ternary">
                  <h2 className="card-title font-bold">{product.name}</h2>
                  <p className="truncate-2-lines">
                    Click the button to listen on Spotiwhy app.
                  </p>
                  <div className="flex gap-2 items-center">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={sellers[product.seller_id].image} />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500">
                        {sellers[product.seller_id].name}
                      </p>
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary flex items-center gap-2 drop-shadow-md bg-[#FFD93D] hover:bg-[#FFD93D] text-ternary hover:text-ternary border-none">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img src={buyers[product.buyer_id].image} />
                        </div>
                      </div>
                      <div>
                        {convertToRupeesFormat(product.current_bid_price)}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
