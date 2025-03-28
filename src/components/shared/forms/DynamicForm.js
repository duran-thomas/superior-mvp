"use client";
import React, { useState } from 'react';
import LocationModal from './LocationSelect';
import CarSelectionModal from './CarSelectionModal';
import ContactInfo from './ContactInfo';
import InlineWizardForm from './InlineWizardForm';

const DynamicForm = () => {
    // steps: "location" → "car" → "contact" → "completed"
    const [step, setStep] = useState("location");
    const [location, setLocation] = useState(null);
    const [car, setCar] = useState(null);
    const [contact, setContact] = useState(null);

    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation);
        setStep("car");
    };

    const handleCarSelect = (selectedCar) => {
        setCar(selectedCar);
        setStep("contact");
    };

    const handleContactSubmit = (data) => {
        setContact(data);
        setStep("completed");
        // Further processing or submission logic here
        console.log("Form Submission:", { location, car, contact: data });
    };

    return (
        <div>
            <h1>Dynamic Form</h1>
            {step === "location" && (
                <LocationModal isOpen={true} onSelect={handleLocationSelect} />
            )}
            {step === "car" && (
                <CarSelectionModal isOpen={true} onSelect={handleCarSelect} />
            )}
            {step === "contact" && (
                <ContactInfo onSubmit={handleContactSubmit} />
            )}
            {step === "completed" && (
                <div>
                <h2>Thank you!</h2>
                <p>Location: {location.name}</p>
                <p>
                    Car: {car.brand.name} {car.model.name} - {car.year} - {car.fuel}
                </p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                </div>
            )}
        </div>
    );
};

export default DynamicForm;

