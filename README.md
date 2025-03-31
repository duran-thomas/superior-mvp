# superior-mvp
Mvp for superior's version of Go Mechanic

```
superior-mvp
├─ README copy.md
├─ README.md
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ fakedata
│  │  ├─ blogComments.json
│  │  ├─ branches.json
│  │  ├─ categories.json
│  │  ├─ faq.json
│  │  ├─ history.json
│  │  ├─ pricing_plans.json
│  │  ├─ productComments.json
│  │  ├─ productReviews.json
│  │  ├─ products.json
│  │  ├─ products1.json
│  │  ├─ services.json
│  │  └─ testimonials.json
│  ├─ img
│  │  ├─ Car-Logos
│  │  │  ├─ Audi.jpeg
│  │  │  ├─ BMW.jpeg
│  │  │  ├─ BYD.png
│  │  │  ├─ Chevrolet.jpeg
│  │  │  ├─ Datsun.jpeg
│  │  │  ├─ Fiat.jpeg
│  │  │  ├─ Ford.jpeg
│  │  │  ├─ Honda.jpeg
│  │  │  ├─ Hyundai.jpeg
│  │  │  ├─ IZUZU.jpeg
│  │  │  ├─ JEEP.jpeg
│  │  │  ├─ Jaguar.jpeg
│  │  │  ├─ KIA.jpeg
│  │  │  ├─ Landrover.jpeg
│  │  │  ├─ MG.jpeg
│  │  │  ├─ Mahindra.jpeg
│  │  │  ├─ Mercedes.jpeg
│  │  │  ├─ Mini.jpeg
│  │  │  ├─ Mitsubishi.jpeg
│  │  │  ├─ Nissan.jpeg
│  │  │  ├─ Renault.jpeg
│  │  │  ├─ Skoda.jpeg
│  │  │  ├─ Ssangyong.jpeg
│  │  │  ├─ Suzuki.jpeg
│  │  │  ├─ TATA.jpeg
│  │  │  ├─ Toyota.jpeg
│  │  │  ├─ VOlvo.jpeg
│  │  │  └─ Volkswagen.jpeg
│  │  ├─ Car-Models
│  │  │  ├─ Honda
│  │  │  │  ├─ CRV.jpeg
│  │  │  │  ├─ CityIVTEC.jpeg
│  │  │  │  └─ JAZZ.jpeg
│  │  │  ├─ Nissan
│  │  │  │  ├─ GTR.jpeg
│  │  │  │  ├─ Teana.jpeg
│  │  │  │  └─ X-Trail.jpeg
│  │  │  └─ Toyota
│  │  │     ├─ Fortuner.jpeg
│  │  │     ├─ Hilux.png
│  │  │     └─ Yaris.jpeg
│  │  ├─ blog
│  │  │  ├─ author.jpg
│  │  │  └─ blog-details
│  │  │     ├─ 1.jpg
│  │  │     ├─ 11.jpg
│  │  │     └─ 12.jpg
│  │  ├─ superior-logo.png
│  │  ├─ superior-logo1.png
│  │  └─ testimonial
│  │     ├─ 1.jpg
│  │     ├─ 2.jpg
│  │     ├─ 3.jpg
│  │     ├─ 4.jpg
│  │     ├─ 5.jpg
│  │     ├─ 6.jpg
│  │     └─ 7.jpg
│  ├─ map-marker-2.png
│  ├─ media
│  │  ├─ 1.mp4
│  │  └─ 2.mp4
│  └─ plugins.js
└─ src
   ├─ app
   │  ├─ account
   │  │  └─ page.js
   │  ├─ api
   │  │  └─ sendEmail
   │  ├─ appointment
   │  │  └─ page.js
   │  ├─ blog-left-sidebar
   │  │  └─ page.js
   │  ├─ blog-right-sidebar
   │  │  └─ page.js
   │  ├─ cart
   │  │  └─ page.js
   │  ├─ coming-soon
   │  │  └─ page.js
   │  ├─ contact
   │  │  └─ page.js
   │  ├─ error
   │  │  └─ page.js
   │  ├─ error.js
   │  ├─ faq
   │  │  └─ page.js
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  ├─ history
   │  │  └─ page.js
   │  ├─ home-10
   │  │  └─ page.js
   │  ├─ home-11
   │  │  └─ page.js
   │  ├─ home-12
   │  │  └─ page.js
   │  ├─ home-13
   │  │  └─ page.js
   │  ├─ home-14
   │  │  └─ page.js
   │  ├─ home-15
   │  │  └─ page.js
   │  ├─ home-16
   │  │  └─ page.js
   │  ├─ home-2
   │  │  └─ page.js
   │  ├─ home-3
   │  │  └─ page.js
   │  ├─ home-4
   │  │  └─ page.js
   │  ├─ home-5
   │  │  └─ page.js
   │  ├─ home-6
   │  │  └─ page.js
   │  ├─ home-7
   │  │  └─ page.js
   │  ├─ home-8
   │  │  └─ page.js
   │  ├─ home-9
   │  │  └─ page.js
   │  ├─ locations
   │  │  └─ page.js
   │  ├─ login
   │  │  └─ page.js
   │  ├─ not-found.js
   │  ├─ order-tracking
   │  │  └─ page.js
   │  ├─ page-home.js
   │  ├─ page.js
   │  ├─ portfolio
   │  │  ├─ [id]
   │  │  │  └─ page.js
   │  │  └─ page.js
   │  ├─ portfolio-2
   │  │  └─ page.js
   │  ├─ products
   │  │  └─ [id]
   │  │     └─ page.js
   │  ├─ register
   │  │  └─ page.js
   │  ├─ services
   │  │  ├─ [id]
   │  │  │  └─ page.js
   │  │  └─ page.js
   │  ├─ shop
   │  │  └─ page.js
   │  ├─ shop-car-grid
   │  │  └─ page.js
   │  ├─ shop-car-left-sidebar
   │  │  └─ page.js
   │  ├─ shop-car-right-sidebar
   │  │  └─ page.js
   │  ├─ shop-details-2
   │  │  └─ page.js
   │  ├─ shop-details-3
   │  │  └─ page.js
   │  ├─ shop-grid
   │  │  └─ page.js
   │  ├─ shop-left-sidebar
   │  │  └─ page.js
   │  ├─ shop-right-sidebar
   │  │  └─ page.js
   │  ├─ team
   │  │  ├─ [id]
   │  │  │  └─ page.js
   │  │  └─ page.js
   │  └─ wishlist
   │     └─ page.js
   ├─ assets
   │  ├─ .DS_Store
   │  ├─ css
   │  │  ├─ custom.css
   │  │  ├─ elements
   │  │  │  └─ _portfoli.css
   │  │  ├─ font-icons.css
   │  │  ├─ plugins.css
   │  │  ├─ responsive.css
   │  │  └─ sections
   │  │     ├─ _error_404.css
   │  │     └─ _portfolio.css
   │  ├─ fonts
   │  │  ├─ icomoon.eot
   │  │  ├─ icomoon.svg
   │  │  ├─ icomoon.ttf
   │  │  ├─ icomoon.woff
   │  │  ├─ lightcase.eot
   │  │  ├─ lightcase.svg
   │  │  ├─ lightcase.ttf
   │  │  ├─ lightcase.woff
   │  │  └─ new-folder
   │  │     └─ custom-Fonts-For-Use
   │  │        ├─ demo-files
   │  │        │  ├─ demo.css
   │  │        │  └─ demo.js
   │  │        ├─ demo.html
   │  │        ├─ fonts
   │  │        │  ├─ icomoon.eot
   │  │        │  ├─ icomoon.svg
   │  │        │  ├─ icomoon.ttf
   │  │        │  └─ icomoon.woff
   │  │        └─ style.css
   │  ├─ img
   │  │  ├─ banner
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 4.jpg
   │  │  │  ├─ 5.jpg
   │  │  │  ├─ 7.jpg
   │  │  │  ├─ banner-1.jpg
   │  │  │  ├─ banner-2.jpg
   │  │  │  ├─ banner-3.jpg
   │  │  │  ├─ banner-4.jpg
   │  │  │  ├─ menu-banner-1.jpg
   │  │  │  └─ newsletter-popup-1.jpg
   │  │  ├─ bg
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 10.png
   │  │  │  ├─ 11.png
   │  │  │  ├─ 12-1.png
   │  │  │  ├─ 12.png
   │  │  │  ├─ 13.jpg
   │  │  │  ├─ 14.jpg
   │  │  │  ├─ 15.jpg
   │  │  │  ├─ 16.jpg
   │  │  │  ├─ 17.jpg
   │  │  │  ├─ 18.png
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 2.png
   │  │  │  ├─ 3.jpg
   │  │  │  ├─ 30.jpg
   │  │  │  ├─ 4.jpg
   │  │  │  ├─ 5.jpg
   │  │  │  ├─ 6.jpg
   │  │  │  ├─ 7.jpg
   │  │  │  ├─ 8-1.jpg
   │  │  │  ├─ 8-2.jpg
   │  │  │  ├─ 8.jpg
   │  │  │  ├─ 9.jpg
   │  │  │  └─ footer-bg-1.png
   │  │  ├─ blog
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 3.jpg
   │  │  │  ├─ 31.jpg
   │  │  │  ├─ 32.jpg
   │  │  │  ├─ 33.jpg
   │  │  │  ├─ 34.jpg
   │  │  │  ├─ 35.jpg
   │  │  │  ├─ 4.jpg
   │  │  │  ├─ 5.jpg
   │  │  │  ├─ 6.jpg
   │  │  │  ├─ 7.jpg
   │  │  │  ├─ 8.jpg
   │  │  │  ├─ author.jpg
   │  │  │  └─ blog-details
   │  │  │     ├─ 1.jpg
   │  │  │     ├─ 11.jpg
   │  │  │     └─ 12.jpg
   │  │  ├─ brand-logo
   │  │  │  ├─ 1.png
   │  │  │  ├─ 2.png
   │  │  │  ├─ 3.png
   │  │  │  ├─ 4.png
   │  │  │  ├─ 5.png
   │  │  │  ├─ b1.png
   │  │  │  ├─ b2.png
   │  │  │  ├─ b3.png
   │  │  │  ├─ b4.png
   │  │  │  └─ b5.png
   │  │  ├─ effect
   │  │  │  ├─ 1.png
   │  │  │  ├─ 2.png
   │  │  │  ├─ 3.png
   │  │  │  ├─ 4.png
   │  │  │  ├─ 5.png
   │  │  │  └─ 6.png
   │  │  ├─ favicon.png
   │  │  ├─ gallery
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 10.jpg
   │  │  │  ├─ 11.jpg
   │  │  │  ├─ 12.jpg
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 3.jpg
   │  │  │  ├─ 4.jpg
   │  │  │  ├─ 5.jpg
   │  │  │  ├─ 6.jpg
   │  │  │  ├─ 7.jpg
   │  │  │  ├─ 8.jpg
   │  │  │  └─ 9.jpg
   │  │  ├─ home-demos
   │  │  │  ├─ home-1.jpg
   │  │  │  ├─ home-10.jpg
   │  │  │  ├─ home-11.jpg
   │  │  │  ├─ home-12.jpg
   │  │  │  ├─ home-13.jpg
   │  │  │  ├─ home-14.jpg
   │  │  │  ├─ home-15.jpg
   │  │  │  ├─ home-16.jpg
   │  │  │  ├─ home-2.jpg
   │  │  │  ├─ home-3.jpg
   │  │  │  ├─ home-4.jpg
   │  │  │  ├─ home-5.jpg
   │  │  │  ├─ home-6.jpg
   │  │  │  ├─ home-7.jpg
   │  │  │  ├─ home-8.jpg
   │  │  │  └─ home-9.jpg
   │  │  ├─ icons
   │  │  │  ├─ 1.png
   │  │  │  ├─ 10.png
   │  │  │  ├─ 11.png
   │  │  │  ├─ 12.png
   │  │  │  ├─ 2.png
   │  │  │  ├─ 3.png
   │  │  │  ├─ 4.png
   │  │  │  ├─ 5.png
   │  │  │  ├─ 6.png
   │  │  │  ├─ 7.png
   │  │  │  ├─ 8.png
   │  │  │  ├─ 9.png
   │  │  │  ├─ car.png
   │  │  │  ├─ map-marker-2.png
   │  │  │  ├─ map-marker-3.png
   │  │  │  ├─ map-marker.png
   │  │  │  ├─ payment-2.png
   │  │  │  ├─ payment-3.png
   │  │  │  ├─ payment-4.png
   │  │  │  ├─ payment.png
   │  │  │  └─ svg
   │  │  │     ├─ 1-cart.svg
   │  │  │     ├─ 10-credit-card.svg
   │  │  │     ├─ 11-gift-card.svg
   │  │  │     ├─ 12-shopping-cart.svg
   │  │  │     ├─ 2
   │  │  │     │  ├─ 1-cart.svg
   │  │  │     │  ├─ 2-track.svg
   │  │  │     │  ├─ 3-payment.svg
   │  │  │     │  ├─ 4-track.svg
   │  │  │     │  ├─ 5-prize.svg
   │  │  │     │  ├─ 6-return.svg
   │  │  │     │  └─ 7-support.svg
   │  │  │     ├─ 2-track.svg
   │  │  │     ├─ 3-payment.svg
   │  │  │     ├─ 4-track.svg
   │  │  │     ├─ 5-madel.svg
   │  │  │     ├─ 6-return.svg
   │  │  │     ├─ 7-support.svg
   │  │  │     ├─ 8-trolley.svg
   │  │  │     └─ 9-money.svg
   │  │  ├─ img-slide
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 11.jpg
   │  │  │  ├─ 12.jpg
   │  │  │  ├─ 13.jpg
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 21.jpg
   │  │  │  ├─ 22.jpg
   │  │  │  ├─ 23.jpg
   │  │  │  ├─ 24.jpg
   │  │  │  ├─ 3.jpg
   │  │  │  └─ 4.jpg
   │  │  ├─ logo-2.png
   │  │  ├─ logo-3.png
   │  │  ├─ logo.png
   │  │  ├─ others
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 1.png
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 2.png
   │  │  │  ├─ 3.jpg
   │  │  │  ├─ 4.jpg
   │  │  │  ├─ 5.jpg
   │  │  │  └─ 5.png
   │  │  ├─ product
   │  │  │  ├─ 1.png
   │  │  │  ├─ 10.png
   │  │  │  ├─ 11.png
   │  │  │  ├─ 12.png
   │  │  │  ├─ 13.png
   │  │  │  ├─ 14.png
   │  │  │  ├─ 15.png
   │  │  │  ├─ 16.png
   │  │  │  ├─ 17.png
   │  │  │  ├─ 18.png
   │  │  │  ├─ 19.png
   │  │  │  ├─ 2.png
   │  │  │  ├─ 3.png
   │  │  │  ├─ 4.png
   │  │  │  ├─ 5.png
   │  │  │  ├─ 6.png
   │  │  │  ├─ 7.png
   │  │  │  ├─ 8.png
   │  │  │  └─ 9.png
   │  │  ├─ product-2
   │  │  │  ├─ 1.png
   │  │  │  ├─ 10.png
   │  │  │  ├─ 11.png
   │  │  │  ├─ 12.png
   │  │  │  ├─ 13.png
   │  │  │  ├─ 14.png
   │  │  │  ├─ 2.png
   │  │  │  ├─ 3.png
   │  │  │  ├─ 4.png
   │  │  │  ├─ 5.png
   │  │  │  ├─ 6.png
   │  │  │  ├─ 7.png
   │  │  │  ├─ 8.png
   │  │  │  └─ 9.png
   │  │  ├─ service
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 11.jpg
   │  │  │  ├─ 19.jpg
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 21.jpg
   │  │  │  ├─ 22.jpg
   │  │  │  ├─ 23.jpg
   │  │  │  ├─ 3.jpg
   │  │  │  ├─ 31.jpg
   │  │  │  ├─ 32.jpg
   │  │  │  ├─ 33.jpg
   │  │  │  ├─ 34.jpg
   │  │  │  └─ history-1.jpg
   │  │  ├─ slider
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 100.jpg
   │  │  │  ├─ 11.jpg
   │  │  │  ├─ 12.jpg
   │  │  │  ├─ 13.jpg
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 21.png
   │  │  │  ├─ 22.png
   │  │  │  ├─ 3.jpg
   │  │  │  ├─ 31-bg.png
   │  │  │  ├─ 31.png
   │  │  │  ├─ 41-1.png
   │  │  │  ├─ 41.jpg
   │  │  │  ├─ 51.jpg
   │  │  │  ├─ 52.jpg
   │  │  │  └─ 53.jpg
   │  │  ├─ team
   │  │  │  ├─ 1.jpg
   │  │  │  ├─ 2.jpg
   │  │  │  ├─ 21.jpg
   │  │  │  ├─ 3.jpg
   │  │  │  ├─ 4.jpg
   │  │  │  ├─ 5.jpg
   │  │  │  ├─ 6.jpg
   │  │  │  ├─ 7.jpg
   │  │  │  ├─ 8.jpg
   │  │  │  ├─ 9.jpg
   │  │  │  └─ t-4.png
   │  │  └─ testimonial
   │  │     ├─ 1.jpg
   │  │     ├─ 2.jpg
   │  │     ├─ 3.jpg
   │  │     ├─ 4.jpg
   │  │     ├─ 5.jpg
   │  │     ├─ 6.jpg
   │  │     └─ 7.jpg
   │  ├─ media
   │  │  ├─ 1.mp4
   │  │  └─ 2.mp4
   │  └─ webfonts
   │     ├─ fa-brands-400.ttf
   │     ├─ fa-brands-400.woff2
   │     ├─ fa-regular-400.ttf
   │     ├─ fa-regular-400.woff2
   │     ├─ fa-solid-900.ttf
   │     ├─ fa-solid-900.woff2
   │     ├─ fa-v4compatibility.ttf
   │     └─ fa-v4compatibility.woff2
   ├─ components
   │  ├─ sections
   │  │  ├─ Timelines
   │  │  │  └─ TimelineFloat.js
   │  │  ├─ account
   │  │  │  └─ AccountPrimary.js
   │  │  ├─ address
   │  │  │  └─ Adress.js
   │  │  ├─ appointment
   │  │  │  └─ AppointmentPrimary.js
   │  │  ├─ blog-details
   │  │  │  └─ BlogDetailsPrimary.js
   │  │  ├─ brands
   │  │  │  ├─ Brands.js
   │  │  │  └─ Brands2.js
   │  │  ├─ call-to-action
   │  │  │  ├─ CallToAction2.js
   │  │  │  ├─ CallToAction3.js
   │  │  │  ├─ CallToAction4.js
   │  │  │  ├─ CallToAction6.js
   │  │  │  ├─ CallToActionForm.js
   │  │  │  └─ CallToaction.js
   │  │  ├─ cart
   │  │  │  └─ CartPrimary.js
   │  │  ├─ categories
   │  │  │  ├─ Categories.js
   │  │  │  └─ Categories2.js
   │  │  ├─ contacts
   │  │  │  ├─ Contact1.js
   │  │  │  └─ ContactPrimary.js
   │  │  ├─ counters
   │  │  │  └─ CounterUp.js
   │  │  ├─ faq
   │  │  │  └─ FaqPrimary.js
   │  │  ├─ features
   │  │  │  ├─ Features.js
   │  │  │  ├─ Features2.js
   │  │  │  ├─ Features3.js
   │  │  │  ├─ Features4.js
   │  │  │  ├─ Features5.js
   │  │  │  └─ Features6.js
   │  │  ├─ filter-tab
   │  │  │  └─ FilterTab.js
   │  │  ├─ hero-banners
   │  │  │  ├─ Hero1.js
   │  │  │  ├─ Hero10.js
   │  │  │  ├─ Hero11.js
   │  │  │  ├─ Hero12.js
   │  │  │  ├─ Hero13.js
   │  │  │  ├─ Hero14.js
   │  │  │  ├─ Hero15.js
   │  │  │  ├─ Hero16.js
   │  │  │  ├─ Hero2.js
   │  │  │  ├─ Hero3.js
   │  │  │  ├─ Hero4.js
   │  │  │  ├─ Hero5.js
   │  │  │  ├─ Hero6.js
   │  │  │  ├─ Hero7.js
   │  │  │  ├─ Hero8.js
   │  │  │  └─ HeroPrimary.js
   │  │  ├─ history
   │  │  │  ├─ History.js
   │  │  │  └─ HistoryPrimary.js
   │  │  ├─ hot-deals
   │  │  │  ├─ HotDeal2.js
   │  │  │  └─ HotDeals.js
   │  │  ├─ locations
   │  │  │  └─ LocationsPrimary.js
   │  │  ├─ login
   │  │  │  └─ LoginPrimary.js
   │  │  ├─ not-found
   │  │  │  └─ NotFoundPrimary.js
   │  │  ├─ offers
   │  │  │  ├─ Offer.js
   │  │  │  └─ Offer2.js
   │  │  ├─ order-tracking
   │  │  │  └─ OrderTrackingPrimary.js
   │  │  ├─ portfolio
   │  │  │  ├─ Portfolio1.js
   │  │  │  ├─ Portfolio2.js
   │  │  │  ├─ Portfolio3.js
   │  │  │  └─ PortfolioPrimary.js
   │  │  ├─ portfolio-details
   │  │  │  └─ PortfolioDetailsPrimary.js
   │  │  ├─ pricing-plans
   │  │  │  └─ PricingPlans.js
   │  │  ├─ product-details
   │  │  │  └─ ProductDetailsPrimary.js
   │  │  ├─ products
   │  │  │  ├─ NewProducts.js
   │  │  │  ├─ ProductLists.js
   │  │  │  ├─ Products2.js
   │  │  │  ├─ Products3.js
   │  │  │  ├─ Products4.js
   │  │  │  ├─ Products5.js
   │  │  │  └─ ProductsPrimary.js
   │  │  ├─ register
   │  │  │  └─ RegisterPrimary.js
   │  │  ├─ service-details
   │  │  │  └─ ServiceDetailsPrimary.js
   │  │  ├─ services
   │  │  │  ├─ Services1.js
   │  │  │  ├─ Services2.js
   │  │  │  ├─ Services3.js
   │  │  │  └─ Services4.js
   │  │  ├─ skills
   │  │  │  ├─ Skills.js
   │  │  │  └─ Skills2.js
   │  │  ├─ subscribs
   │  │  │  └─ Subscribs.js
   │  │  ├─ team
   │  │  │  ├─ Team1.js
   │  │  │  └─ TeamPrimary.js
   │  │  ├─ team-details
   │  │  │  └─ TeamDetailsPrimary.js
   │  │  ├─ testimonils
   │  │  │  ├─ Testimonials1.js
   │  │  │  ├─ Testimonials2.js
   │  │  │  └─ Testimonials3.js
   │  │  ├─ videos
   │  │  │  ├─ Video.js
   │  │  │  └─ Videos2.js
   │  │  └─ wishlist
   │  │     └─ WishlistPrimary.js
   │  └─ shared
   │     ├─ buttons
   │     │  ├─ ButtonOpenMobileMenu.js
   │     │  ├─ ButtonPrimary.js
   │     │  └─ ButtonSecondary.js
   │     ├─ cards
   │     │  ├─ BlogCard2.js
   │     │  ├─ BlogCard3.js
   │     │  ├─ BlogCard4.js
   │     │  ├─ BlogCardPrimary.js
   │     │  ├─ BlogCardPrimaryLarge.js
   │     │  ├─ CategoryCard.js
   │     │  ├─ CategoryCard2.js
   │     │  ├─ FeatureCard.js
   │     │  ├─ FeatureCard2.js
   │     │  ├─ FeatureCard3.js
   │     │  ├─ LoactionCard.js
   │     │  ├─ OfferCard.js
   │     │  ├─ PortfolioCard.js
   │     │  ├─ PortfolioCard2.js
   │     │  ├─ PortfolionCard.js
   │     │  ├─ PricingCard.js
   │     │  ├─ ProductCard.js
   │     │  ├─ ProductCard2.js
   │     │  ├─ ProductCardPrimary.js
   │     │  ├─ ProductCardPrimary2.js
   │     │  ├─ ServiceCard.js
   │     │  ├─ ServiceCard2.js
   │     │  ├─ ServiceCard3.js
   │     │  ├─ ServiceCard4.js
   │     │  ├─ TeamCard.js
   │     │  ├─ TestimonialCard.js
   │     │  ├─ TestimonialCard2.js
   │     │  ├─ TestimonialCard3.js
   │     │  ├─ TopRatedProductCard.js
   │     │  └─ maplace-active.js
   │     ├─ cart
   │     │  └─ CartProduct.js
   │     ├─ forms
   │     │  ├─ CarModal.js
   │     │  ├─ CarSelectionModal.js
   │     │  ├─ CarSelectionWizard.js
   │     │  ├─ ContactInfo.js
   │     │  ├─ DealarForm.js
   │     │  ├─ DynamicForm.js
   │     │  ├─ InlineWizardForm.js
   │     │  └─ LocationSelect.js
   │     ├─ hero
   │     │  ├─ HeroSlide1.js
   │     │  └─ Slider1.js
   │     ├─ map
   │     │  ├─ Map.js
   │     │  └─ Map2.js
   │     ├─ modals
   │     │  ├─ CartStatusModal.js
   │     │  ├─ NewsletterModal.js
   │     │  ├─ ProductDetailsQuick.js
   │     │  └─ WishlistStatusModal.js
   │     ├─ no-data
   │     │  └─ Nodata.js
   │     ├─ others
   │     │  ├─ Preloader.js
   │     │  └─ QuickSearchItems.js
   │     ├─ paginations
   │     │  └─ Pagination.js
   │     ├─ products
   │     │  ├─ ProductComments.js
   │     │  ├─ ProductDetailsColors.js
   │     │  ├─ ProductDetailsReviews.js
   │     │  ├─ ProductDetailsRight.js
   │     │  ├─ ProductDetailsSizes.js
   │     │  ├─ ProductDetailsTab.js
   │     │  ├─ ProductDetailsTab2.js
   │     │  ├─ ShopDataShowing.js
   │     │  ├─ ShopShortSelect.js
   │     │  ├─ ShopTop.js
   │     │  └─ TabDescription.js
   │     ├─ service
   │     │  └─ ServiceDetailsBanner.js
   │     ├─ sidebars
   │     │  ├─ BlogSidebar.js
   │     │  ├─ CategoryItem.js
   │     │  ├─ HeroSidebar.js
   │     │  ├─ ProductSidebar.js
   │     │  ├─ ServiceSidebar.js
   │     │  └─ widgets
   │     │     ├─ BlogAuthor.js
   │     │     ├─ BlogCategories.js
   │     │     ├─ BlogTags.js
   │     │     ├─ InstagramFeeds.js
   │     │     ├─ PopularBlog.js
   │     │     ├─ PriceRange.js
   │     │     ├─ ProductBrands.js
   │     │     ├─ ProductCategories.js
   │     │     ├─ ProductColors.js
   │     │     ├─ ProductSizes.js
   │     │     ├─ ProductTags.js
   │     │     ├─ ServiceCategories.js
   │     │     ├─ SidebarBanner.js
   │     │     ├─ SidebarNewsletter.js
   │     │     ├─ SidebarSearch.js
   │     │     ├─ SidebarSocials.js
   │     │     ├─ SidebarTopRatedProducs.js
   │     │     └─ TwitterFeeds.js
   │     ├─ skills
   │     │  └─ SkillProgross.js
   │     ├─ tab
   │     │  ├─ FilterForm1.js
   │     │  └─ FilterForm2.js
   │     └─ wrappers
   │        └─ PageWrapper.js
   ├─ hooks
   │  ├─ useCartOfLocalStorage.js
   │  ├─ useClose.js
   │  ├─ useIsTrue.js
   │  ├─ usePagination.js
   │  ├─ useSearch.js
   │  └─ useSweetAlert.js
   ├─ libs
   │  ├─ addItemsToLocalstorage.js
   │  ├─ blogSlider.js
   │  ├─ breakRage.js
   │  ├─ controlModal.js
   │  ├─ controllSwiper.js
   │  ├─ countCommentLength.js
   │  ├─ countDataLength.js
   │  ├─ countDiscount.js
   │  ├─ countQuantity.js
   │  ├─ countTotalPrice.js
   │  ├─ filter.js
   │  ├─ filterItems.js
   │  ├─ getAllBranches.js
   │  ├─ getAllCategories.js
   │  ├─ getAllFaq.js
   │  ├─ getAllFeatues.js
   │  ├─ getAllPortfolios.js
   │  ├─ getAllProducts.js
   │  ├─ getAllProjects.js
   │  ├─ getAllServices.js
   │  ├─ getAllTestimonials.js
   │  ├─ getCategoryItems.js
   │  ├─ getHistory.js
   │  ├─ getItemsFromLocalstorage.js
   │  ├─ getNiceSelectValue.js
   │  ├─ getRangeValue.js
   │  ├─ getTeamMembers.js
   │  ├─ main.js
   │  ├─ makePath.js
   │  ├─ makeText.js
   │  ├─ maplace-active.js
   │  ├─ modifyAmount.js
   │  ├─ modifyNumber.js
   │  ├─ setBgImage.js
   │  ├─ sliceText.js
   │  ├─ smoothScroll.js
   │  └─ testimonialGallarySlider.js
   └─ providers
      ├─ CartContext.js
      ├─ CommonContext.js
      ├─ FooterContext.js
      ├─ HeaderContex.js
      ├─ ProductContext.js
      └─ WshlistContext.js

```