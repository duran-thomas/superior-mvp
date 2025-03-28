import Image from "next/image";
import homeImage1 from "@/assets/img/home-demos/home-1.jpg";
import homeImage2 from "@/assets/img/home-demos/home-2.jpg";
import homeImage3 from "@/assets/img/home-demos/home-3.jpg";
import homeImage4 from "@/assets/img/home-demos/home-4.jpg";
import homeImage5 from "@/assets/img/home-demos/home-5.jpg";
import homeImage6 from "@/assets/img/home-demos/home-6.jpg";
import homeImage7 from "@/assets/img/home-demos/home-7.jpg";
import homeImage8 from "@/assets/img/home-demos/home-8.jpg";
import homeImage9 from "@/assets/img/home-demos/home-9.jpg";
import homeImage10 from "@/assets/img/home-demos/home-10.jpg";
import homeImage11 from "@/assets/img/home-demos/home-11.jpg";
import homeImage12 from "@/assets/img/home-demos/home-12.jpg";
import homeImage13 from "@/assets/img/home-demos/home-13.jpg";
import homeImage14 from "@/assets/img/home-demos/home-14.jpg";
import homeImage15 from "@/assets/img/home-demos/home-15.jpg";
import homeImage16 from "@/assets/img/home-demos/home-16.jpg";
import dropdownBannerImage1 from "@/assets/img/banner/menu-banner-1.jpg";
import HomeDropdown from "./HomeDropdown";
import CommonDropdown from "./CommonDropdown";
import PagesDropdown from "./PagesDropdown";
import NavItem from "./NavItem";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";
import Logo from "./Logo";

const Navbar = () => {
  const { headerStyle, headerSize, isNavbarAppointmentBtn } = useHeaderContex();
  const navItemsRaw = [
    {
      name: "Home",
      path: "/",
      dropdown: null,
    },
    // {
    //   name: "About",
    //   path: "#",
    //   dropdown: null,
    //   dropdownSection: [
    //     {
    //       title: null,
    //       path: "#",
    //       dropdownItems: [
    //         {
    //           name: "About",

    //           path: "/about",
    //         },
    //         {
    //           name: "Services",

    //           path: "/services",
    //         },
    //         {
    //           name: "Service Details",

    //           path: "/services/1",
    //         },
    //         {
    //           name: "Portfolio",

    //           path: "/portfolio",
    //         },
    //         {
    //           name: "Portfolio - 02",

    //           path: "/portfolio-2",
    //         },
    //         {
    //           name: "Portfolio Details",
    //           path: "/portfolio/1",
    //         },
    //         {
    //           name: "Team",

    //           path: "/team",
    //         },
    //         {
    //           name: "Team Details",

    //           path: "/team/1",
    //         },
    //         {
    //           name: "FAQ",

    //           path: "/faq",
    //         },
    //         {
    //           name: "Google Map Locations",

    //           path: "/locations",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "Shop",
    //   path: "/shop",
    //   dropdown: null,
    //   isNestedDropdown: null,
    //   dropdownSection: [
    //     {
    //       title: null,
    //       path: "#",
    //       dropdownItems: [
    //         {
    //           name: "Shop",

    //           path: "/shop",
    //         },
    //         {
    //           name: "Shop Grid",

    //           path: "/shop-grid",
    //         },
    //         {
    //           name: "Shop Left sidebar",

    //           path: "/shop-left-sidebar",
    //         },
    //         {
    //           name: "Shop right sidebar",

    //           path: "/shop-right-sidebar",
    //         },
    //         {
    //           name: "Shop details",

    //           path: "/products/1",
    //         },
    //         {
    //           name: "Shop details 02",
    //           path: "/shop-details-2",
    //         },
    //         {
    //           name: "Other Pages",
    //           path: "/team",
    //           nestedDropdown: null,
    //           nestedDropdownItems: [
    //             {
    //               name: "Cart",
    //               path: "/cart",
    //             },
    //             {
    //               name: "Wishlist",
    //               path: "/wishlist",
    //             },
    //             {
    //               name: "Checkout",
    //               path: "/checkout",
    //             },
    //             {
    //               name: "Order Tracking",
    //               path: "/order-tracking",
    //             },
    //             {
    //               name: "My Account",
    //               path: "/account",
    //             },
    //             {
    //               name: "Sign in",
    //               path: "/login",
    //             },
    //             {
    //               name: "Register",
    //               path: "/register",
    //             },
    //           ],
    //         },
    //         {
    //           name: "Shop Car Grid",

    //           path: "/shop-car-grid",
    //         },
    //         {
    //           name: "Shop Car Left sidebar",

    //           path: "/shop-car-left-sidebar",
    //         },
    //         {
    //           name: "Shop Car right sidebar",

    //           path: "/shop-car-right-sidebar",
    //         },
    //         {
    //           name: "Shop Car details",

    //           path: "/shop-details-3",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "News",
    //   path: "#",
    //   dropdown: null,
    //   dropdownSection: [
    //     {
    //       title: null,
    //       path: "#",
    //       dropdownItems: [
    //         {
    //           name: "News",

    //           path: "/blogs",
    //         },
    //         {
    //           name: "News Grid",

    //           path: "/blogs-grid",
    //         },
    //         {
    //           name: "News Left sidebar",

    //           path: "/blog-left-sidebar",
    //         },
    //         {
    //           name: "News Right sidebar",

    //           path: "/blog-right-sidebar",
    //         },
    //         {
    //           name: "News details",

    //           path: "/blogs/1",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "Pages",
    //   path: "#",
    //   dropdown: null,
    //   dropdownSection: [
    //     {
    //       title: "Inner Pages",
    //       path: "#",
    //       dropdownItems: [
    //         {
    //           name: "Portfolio",

    //           path: "/portfolio",
    //         },
    //         {
    //           name: "Portfolio - 02",

    //           path: "/portfolio-2",
    //         },
    //         {
    //           name: "Portfolio",

    //           path: "/portfolio/1",
    //         },
    //         {
    //           name: "Team",

    //           path: "/team",
    //         },
    //         {
    //           name: "Team Details",

    //           path: "/team/1",
    //         },
    //         {
    //           name: "FAQ",

    //           path: "/faq",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Inner Pages",
    //       path: "#",
    //       dropdownItems: [
    //         {
    //           name: "History",

    //           path: "/history",
    //         },
    //         {
    //           name: "Appointment",

    //           path: "/appointment",
    //         },
    //         {
    //           name: "Google Map Locations",

    //           path: "/locations",
    //         },
    //         {
    //           name: "404",

    //           path: "/error",
    //         },
    //         {
    //           name: "Contact",

    //           path: "/contact",
    //         },
    //         {
    //           name: "Coming Soon",

    //           path: "/coming-soon",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Shop Pages",
    //       path: "#",
    //       dropdownItems: [
    //         {
    //           name: "Shop",

    //           path: "/shop",
    //         },
    //         {
    //           name: "Shop Left sidebar",

    //           path: "/shop-left-sidebar",
    //         },
    //         {
    //           name: "Shop right sidebar",

    //           path: "/shop-right-sidebar",
    //         },
    //         {
    //           name: "Shop Grid",

    //           path: "/shop-grid",
    //         },
    //         {
    //           name: "Shop details",

    //           path: "/products/1",
    //         },
    //         {
    //           name: "Cart",

    //           path: "/cart",
    //         },
    //       ],
    //     },
    //     {
    //       title: null,
    //       bannerImg: dropdownBannerImage1,
    //       path: "/shop",
    //     },
    //   ],
    // },
    {
      name: "Contact",
      path: "/contact",
      dropdown: null,
    },
  ];
  const navItems = navItemsRaw?.map((navItem, idx) => ({
    ...navItem,
    dropdown:
      idx > 0 && idx < 4 ? (
        <CommonDropdown items={navItem?.dropdownSection} />
      ) : idx === 4 ? (
        <PagesDropdown itmes={navItem?.dropdownSection} />
      ) : null,
  }));
  return (
    <div
      className={`col header-menu-column ${
        headerStyle === 2
          ? " menu-color-white"
          : headerStyle === 5
          ? "justify-content-center align-items-center"
          : ""
      }`}
    >
      {headerStyle === 5 ? <Logo sticky={true} /> : ""}
      <div
        className={`header-menu ${
          headerStyle === 5 ? "header-menu-2" : "d-none d-xl-block "
        } `}
      >
        <nav>
          <div className="ltn__main-menu">
            <ul>
              {navItems?.map((item, idx) => (
                <NavItem key={idx} item={item} />
              ))}
              {isNavbarAppointmentBtn ||
              headerSize === "lg" ||
              headerStyle === 2 ||
              headerStyle === 4 ? (
                <li className="special-link">
                  <Link href="/appointment">GET APPOINTMENT</Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
