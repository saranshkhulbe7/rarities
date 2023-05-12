import React, { useEffect, useState } from "react";

import BuyerNavbar from "@/components/buyer/navbar";
import CountdownClock from "@/components/countdownClock";
import Link from "next/link";
import SellerNavbar from "@/components/seller/navbar";
import { bids } from "@/db/bids";
import { buyers } from "@/db/buyers";
import { categories } from "@/db/categories";
import { convertToRupeesFormat } from "@/utilities/formatter";
import { products } from "@/db/products";
import { sellers } from "@/db/sellers";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const role = "seller";
  const [id, setId] = useState(null);
  const router = useRouter();
  useEffect(() => {
    console.log("bidding", buyers[id]?.current_biddings.length);
  }, [id]);
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      setId(id);
    }
  }, [router.query]);
  return (
    <>
      {role === "buyer" && (
        <BuyerNavbar>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center">
              <div className="hero bg-white rounded-lg drop-shadow-md py-10">
                <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                  <div className="max-w-[190px] min-w-[190px]">
                    {id && (
                      <img
                        src={`/profile_pics/buyer${id}.jpg`}
                        className="max-w-sm rounded-lg shadow-2xl object-contain h-full w-full"
                      />
                    )}
                  </div>

                  <div className="max-w-[850px]">
                    {id && (
                      <h1 className="text-5xl font-bold text-primary">
                        {buyers[id].name}
                      </h1>
                    )}
                    <p className="py-6 text-ternary">
                      As an antique collector, I find myself constantly on the
                      hunt for unique and valuable pieces. I take great pleasure
                      in discovering items with a rich history and story behind
                      them, and my collection is a testament to my passion for
                      preserving the past. Whether I'm scouring antique shops or
                      browsing online auctions, my love for these timeless
                      treasures never fades.
                    </p>
                    <button className="btn btn-primary">Follow</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero bg-white rounded-lg drop-shadow-md overflow-x-auto">
              <div className="flex flex-col w-full justify-between">
                <div className="hero-content flex-col gap-10 w-full">
                  <div className="flex justify-center gap-10 flex-row-reverse">
                    <div className="stats bg-primary text-primary-content ">
                      <div className="stat">
                        <div className="stat-title text-ternary font-bold">
                          Account balance
                        </div>
                        {id && (
                          <div className="stat-value">
                            {convertToRupeesFormat(buyers[id].account_balance)}
                          </div>
                        )}
                        <div className="stat-actions">
                          <button className="btn btn-sm btn-success hover:scale-105 duration-100">
                            Add funds
                          </button>
                        </div>
                      </div>

                      <div className="stat">
                        <div className="stat-actions gap-5 flex flex-col">
                          <button className="btn btn-sm hover:text-white">
                            Withdrawal
                          </button>
                          <button className="btn btn-sm hover:text-white">
                            deposit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-figure text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                          </svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">
                          21% more than last month
                        </div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">
                          21% more than last month
                        </div>
                      </div>

                      <div className="stat">
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">
                          31 tasks remaining
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* biddings */}
                  {id && buyers[id]?.current_biddings.length && (
                    <div className="flex flex-col gap-10 w-full">
                      <div className="font-bold text-4xl text-ternary">
                        <h1 className="text-center underline decoration-10 decoration-primary">
                          Biddings
                        </h1>
                      </div>
                      <div className="w-full">
                        <div className="overflow-x-auto w-full">
                          <table className="table w-full">
                            {/* head */}
                            <thead>
                              <tr>
                                <th>Seller</th>
                                <th>Antique</th>
                                <th>Bid</th>
                                <th>Bidding Clock</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* row 1 */}
                              {id &&
                                buyers[id]?.current_biddings?.map((bid_id) => {
                                  return (
                                    <tr>
                                      <td>
                                        <div className="flex items-center space-x-3">
                                          <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                              <img
                                                src={
                                                  sellers[
                                                    products[
                                                      bids[bid_id].product_id
                                                    ].seller_id
                                                  ].image
                                                }
                                                alt="Avatar Tailwind CSS Component"
                                              />
                                            </div>
                                          </div>
                                          <div>
                                            <div className="font-bold">
                                              {
                                                sellers[
                                                  products[
                                                    bids[bid_id].product_id
                                                  ].seller_id
                                                ].name
                                              }
                                            </div>
                                            <div className="text-sm opacity-50">
                                              {
                                                sellers[
                                                  products[
                                                    bids[bid_id].product_id
                                                  ].seller_id
                                                ].address
                                              }
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        {
                                          products[bids[bid_id]?.product_id]
                                            ?.name
                                        }
                                        <br />
                                        <span className="badge badge-ghost badge-sm">
                                          {
                                            categories[
                                              products[bids[bid_id].product_id]
                                                .categories[0]
                                            ].name
                                          }
                                        </span>
                                      </td>
                                      <td>
                                        {convertToRupeesFormat(
                                          products[bids[bid_id].product_id]
                                            .current_bid_price
                                        )}
                                      </td>
                                      <th>
                                        <CountdownClock
                                          endDateTime={
                                            new Date("2023-04-16T18:00:00")
                                          }
                                        />
                                      </th>
                                      <th>
                                        <button className="btn btn-ghost btn-sm bg-primary text-white hover:bg-primary hover:text-white hover:scale-105">
                                          Go To Bid
                                        </button>
                                      </th>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </BuyerNavbar>
      )}
      {role === "seller" && (
        <SellerNavbar>seller name and details + account balance</SellerNavbar>
      )}
    </>
  );
};

export default ProfilePage;
