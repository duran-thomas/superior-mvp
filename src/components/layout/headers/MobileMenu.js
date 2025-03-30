"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/assets/img/logo.png";
import { useWishlistContext } from "@/providers/WshlistContext";
import { useCartContext } from "@/providers/CartContext";
import countDataLength from "@/libs/countDataLength";
import modifyNumber from "@/libs/modifyNumber";
const MobileMenu = () => {
  const { wishlistProducts } = useWishlistContext();
  const { cartProducts } = useCartContext();
  const totalCartProduct = countDataLength(cartProducts);
  const totalWishlistProduct = countDataLength(wishlistProducts);
  const navItems = [
    {
      name: "Home",
      path: "#",
      accordion: null,
      accordionItems: [
        {
          name: "Home Style - 01",

          path: "/",
        },
        {
          name: "Home Style - 02",

          path: "/home-2",
        },
        {
          name: "Home Style - 03",

          path: "/home-3",
        },
        {
          name: "Home Style - 04",

          path: "/home-4",
        },
        {
          name: "Home Style - 05",

          path: "/home-5",
          label: "video",
        },
        {
          name: "Home Style - 06",

          path: "/home-6",
        },
        {
          name: "Home Style - 07",

          path: "/home-7",
        },
        {
          name: "Home Style - 08",

          path: "/home-8",
          label: "map",
        },
        {
          name: "Home Style - 09",

          path: "/home-9",
        },
        {
          name: "Home Style - 10",

          path: "/home-10",
        },
        {
          name: "Home Style - 11",

          path: "/home-11",
        },
        {
          name: "Home Style - 12",

          path: "/home-12",
        },
        {
          name: "Home Style - 13",

          path: "/home-13",
        },
        {
          name: "Home Style - 14",

          path: "/home-14",
        },
        {
          name: "Home Style - 15",

          path: "/home-15",
        },
        {
          name: "Home Style - 16",

          path: "/home-16",
        },
      ],
    },
    {
      name: "About",
      path: "#",
      accordion: null,
      accordionItems: [
        {
          name: "About",

          path: "/about",
        },
        {
          name: "Services",

          path: "/services",
        },
        {
          name: "Service Details",

          path: "/services/1",
        },
        {
          name: "Portfolio",

          path: "/portfolio",
        },
        {
          name: "Portfolio - 02",

          path: "/portfolio-2",
        },
        {
          name: "Portfolio Details",
          path: "/portfolio/1",
        },
        {
          name: "Team",

          path: "/team",
        },
        {
          name: "Team Details",

          path: "/team/1",
        },
        {
          name: "FAQ",

          path: "/faq",
        },
        {
          name: "Google Map Locations",

          path: "/locations",
        },
      ],
    },
    {
      name: "Shop",
      path: "/shop",
      accordion: null,
      isNestedaccordion: null,
      accordionItems: [
        {
          name: "Shop",

          path: "/shop",
        },
        {
          name: "Shop Grid",

          path: "/shop-grid",
        },
        {
          name: "Shop Left sidebar",

          path: "/shop-left-sidebar",
        },
        {
          name: "Shop right sidebar",

          path: "/shop-right-sidebar",
        },
        {
          name: "Shop details",

          path: "/products/1",
        },
        {
          name: "Shop details 02",
          path: "/shop-details-2",
        },

        {
          name: "Shop Car Grid",

          path: "/shop-car-grid",
        },
        {
          name: "Shop Car Left sidebar",

          path: "/shop-car-left-sidebar",
        },
        {
          name: "Shop Car right sidebar",

          path: "/shop-car-right-sidebar",
        },
        {
          name: "Shop Car details",

          path: "/shop-details-3",
        },
      ],
    },
    {
      name: "News",
      path: "#",
      accordion: null,
      accordionItems: [
        {
          name: "News",

          path: "/blogs",
        },
        {
          name: "News Grid",

          path: "/blogs-grid",
        },
        {
          name: "News Left sidebar",

          path: "/blog-left-sidebar",
        },
        {
          name: "News Right sidebar",

          path: "/blog-right-sidebar",
        },
        {
          name: "News details",

          path: "/blogs/1",
        },
      ],
    },
    {
      name: "Pages",
      path: "#",
      accordion: null,
      accordionItems: [
        {
          name: "About",

          path: "/about",
        },
        {
          name: "Services",

          path: "/services",
        },
        {
          name: "Service Details",

          path: "/services/1",
        },
        {
          name: "Portfolio",

          path: "/portfolio",
        },
        {
          name: "Portfolio - 02",

          path: "/portfolio-2",
        },
        {
          name: "Portfolio Details",
          path: "/portfolio/1",
        },
        {
          name: "Team",

          path: "/team",
        },
        {
          name: "Team Details",

          path: "/team/1",
        },
        {
          name: "FAQ",

          path: "/faq",
        },

        {
          name: "History",

          path: "/history",
        },
        {
          name: "Appointment",

          path: "/appointment",
        },
        {
          name: "Google Map Locations",

          path: "/locations",
        },
        {
          name: "404",

          path: "/error",
        },
        {
          name: "Contact",

          path: "/contact",
        },
        {
          name: "Coming Soon",

          path: "/coming-soon",
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      accordion: null,
    },
  ];
  return (
    <div
      id="ltn__utilize-mobile-menu"
      className="ltn__utilize ltn__utilize-mobile-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <div className="site-logo">
            <Link href="/">
              <Image src={logoImage} alt="Logo" />
            </Link>
          </div>
          <button className="ltn__utilize-close">×</button>
        </div>
        <div className="ltn__utilize-menu-search-form">
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="ltn__utilize-menu">
          <ul>
            {navItems?.map(({ name, path, accordionItems }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
                {accordionItems ? (
                  <ul className="sub-menu">
                    {accordionItems?.map(
                      ({ name: name1, path: path1, label }, idx1) => (
                        <li key={idx1}>
                          <Link href={path1}>
                            {name1}{" "}
                            {label ? (
                              <span className="menu-item-badge">{label}</span>
                            ) : (
                              ""
                            )}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
          <ul>
            <li>
              <Link href="/account" title="My Account">
                <span className="utilize-btn-icon">
                  <i className="far fa-user"></i>
                </span>
                My Account
              </Link>
            </li>
            <li>
              <Link href="/wishlist" title="Wishlist">
                <span className="utilize-btn-icon">
                  <i className="far fa-heart"></i>{" "}
                  <sup>{totalWishlistProduct}</sup>
                </span>
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/cart" title="Shoping Cart">
                <span className="utilize-btn-icon">
                  <i className="fas fa-shopping-cart"></i>{" "}
                  <sup>{totalCartProduct}</sup>
                </span>
                Shoping Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="ltn__social-media-2">
          <ul>
            <li>
              <Link href="https://www.facebook.com" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com" title="Twitter">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com" title="Linkedin">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com" title="Instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
