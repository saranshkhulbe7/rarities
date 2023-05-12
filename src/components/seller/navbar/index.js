import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
function Navbar({ children }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar py-14 bg-white lg:px-10 ">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-1 mx-2 flex">
            <Link href={`/profile/buyer/${id}/products`}>
              <div className="h-16 w-16 rounded-lg overflow-hidden">
                <Image
                  className="w-full h-full object-contain"
                  src={"/brandlogo/logo.png"}
                  alt={"/brandlogo/logo.png"}
                  height={100}
                  width={100}
                />
              </div>
            </Link>
          </div>

          <div className="flex-none hidden lg:block mr-10">
            <ul className="menu menu-horizontal text-ternary font-bold">
              <li className="bg-[#661ae6] text-white rounded-lg">
                <Link href={`/profile/seller/${id}/myproducts`}>
                  My Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-none gap-10">
            <div className="form-control hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="input border border-gray-100 bg-white text-primary"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full">
                  <img src={`/profile_pics/buyer${id}.jpg`} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
              >
                <li>
                  <Link
                    href={`/profile/buyer/${id}`}
                    className="justify-between"
                  >
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-8 md:px-16 py-10 md:py-10">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 bg-white text-ternary flex flex-col gap-10">
          <div className="h-16 w-16 rounded-lg overflow-hidden self-center">
            <Image
              className="w-full h-full object-contain"
              src={"/brandlogo/logo.png"}
              alt={"/brandlogo/logo.png"}
              height={100}
              width={100}
            />
          </div>
          <ul>
            <li className="border-b">
              <Link href={`/profile/buyer/${id}/products`}>Products</Link>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
