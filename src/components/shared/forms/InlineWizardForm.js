'use client';
import React, { useState } from 'react';
import LocationSelect from './LocationSelect';
import CarSelectionWizard from './CarSelectionWizard';
import ContactInfo from './ContactInfo';
import { useRouter } from "next/navigation";


export default function InlineWizardForm() {
  // Data: locations, brands, years, fuels
  const locations = ['Kingston', 'Mandeville', 'May Pen'];

  // Using null to force user selection.
  const [location, setLocation] = useState(null);

  // Updated handler for location selection
  const handleSelectLocation = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  // Car selection state and data
  const [carSelected, setCarSelected] = useState(false);
  const [selectedCar, setSelectedCar] = useState({
    brand: null,
    model: null,
    year: null,
    fuel: null,
  });

  const brands = [
    {
      id: 1,
      name: 'Nissan',
      logo: '/img/Car-Logos/Nissan.jpeg',
      models: [
        { id: 101, name: 'GTR', logo: '/img/Car-Models/Nissan/GTR.jpeg' },
        { id: 102, name: 'Teana', logo: '/img/Car-Models/Nissan/Teana.jpeg' },
        { id: 103, name: 'X-Trail', logo: '/img/Car-Models/Nissan/X-Trail.jpeg' },
      ],
    },
    {
      id: 2,
      name: 'Toyota',
      logo: '/img/Car-Logos/Toyota.jpeg',
      models: [
        { id: 201, name: 'Fortuner', logo: '/img/Car-Models/Toyota/Fortuner.jpeg' },
        { id: 202, name: 'Hilux', logo: '/img/Car-Models/Toyota/Hilux.png' },
        { id: 203, name: 'Yaris', logo: '/img/Car-Models/Toyota/Yaris.jpeg' },
      ],
    },
    {
      id: 3,
      name: 'Honda',
      logo: '/img/Car-Logos/Honda.jpeg',
      models: [
        { id: 301, name: 'Amaze', logo: '/img/Car-Models/Honda/CityIVTEC.jpeg' },
        { id: 302, name: 'City', logo: '/img/Car-Models/Honda/CRV.jpeg' },
      ],
    },
  ];

  const years = [2019, 2020, 2021, 2022, 2023];

  const fuelTypes = [
    { id: 'petrol', name: 'Petrol' },
    { id: 'diesel', name: 'Diesel' },
    { id: 'cng', name: 'CNG' },
  ];

  const handleCarSelected = ({ brand, model, year, fuel }) => {
    setSelectedCar({ brand, model, year, fuel });
  };

  const router = useRouter();

  const handleContactSubmit = (contactData) => {
    const formPayload = {
      location: location,
      brand: selectedCar.brand?.name,
      model: selectedCar.model?.name,
      year: selectedCar.year,
      fuel: selectedCar.fuel?.name,
      email: contactData.email,
      phone: contactData.phone,
      img: selectedCar.model?.logo,
    };
    console.log('Form Submission', formPayload);
    localStorage.setItem('formPayload', JSON.stringify(formPayload));
    router.push(
      `/shop?location=${location}&brand=${selectedCar.brand?.name}&model=${selectedCar.model?.name}&year=${selectedCar.year}&fuel=${selectedCar.fuel?.name}&email=${contactData.email}&phone=${contactData.phone}`
    );
  };

  return (
    <section className="wizard-form-container">
      <h2>Experience The Best Car Services In Jamaica</h2>
      <p>Get instant quotes for your car service</p>

      {/* Location Select */}
      <div className="form-step">
        <LocationSelect
          locations={locations}
          location={location}
          onChange={handleSelectLocation}
        />
      </div>
    <br />
    <br />
    
      {/* Car Selection */}
      <div className="form-step">
        <CarSelectionWizard
          brands={brands}
          years={years}
          fuelTypes={fuelTypes}
          onCarSelected={handleCarSelected}
          carSelected={carSelected}
          setCarSelected={setCarSelected}
          existingSelection={selectedCar}
        />
      </div>

      {/* Contact Info (visible once the car is chosen) */}
      {carSelected && <ContactInfo onSubmit={handleContactSubmit} />}

      <style jsx>
        {`
          .wizard-form-container {
            width: 100%;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px; /* Set a max-width to ensure the form doesn't stretch too wide */
            margin: auto;
          }

          h2 {
            font-size: 1.4rem;
            margin-bottom: 10px;
          }

          p {
            margin-bottom: 20px;
            color: #555;
          }

          .form-step {
            margin-bottom: 20px; /* Adds space between each step */
          }
        `}
      </style>
    </section>
  );
}
