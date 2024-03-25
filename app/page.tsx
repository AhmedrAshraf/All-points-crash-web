"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Autocomplete } from "@mui/material";
import { Button } from "@/components/ui/button";
import PlacesAutocomplete from "react-places-autocomplete";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { getLatLng, geocodeByAddress } from "react-places-autocomplete";

import React, { useRef, useState } from "react";

export default function Home() {
  const initReg = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const router = useRouter();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [step, setStep] = useState(0);
  const [note, setNote] = useState("");
  const [state, setState] = useState("");
  const [caseNo, setCaseNo] = useState("");
  const [images, setImages] = useState([]);
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(new Date());
  const [insurance, setInsurance] = useState("");
  const [vehicleNo1, setVehicleNo1] = useState("");
  const [vehicleNo2, setVehicleNo2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [location, setLocation] = useState(initReg);
  const [currentStep, setCurrentStep] = useState(0);
  const [driverLicence, setDriverLicence] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // *** MAP ITEMS
  const containerStyle = {
    width: "450px",
    height: "250px",
    borderRadius: 15,
  };

  const center = {
    lat: 40.3916,
    lng: -111.8508,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBCY6xj3wMc2oSzqSbPtlFGzBoLxew6Dq4",
    libraries: ["places"],
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const mapOptions = {
    disableDefaultUI: true, // This will disable the default map controls
    zoomControl: false, // Optionally, specifically disable zoom controls
    streetViewControl: false, // Disable Street View control
    mapTypeControl: false, // Disable Map/Satellite toggle control
    mapTypeId: "satellite", // Set the map type to satellite
  };

  const handleSelect = (address: any) => {
    setAddress(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(async (latLng: any) => {
        setLat(latLng?.lat);
        setLng(latLng?.lng);
      })
      .catch((error) => console.error("Error", error));
  };

  const Avatar = () => (
    <Image
      width={150}
      height={120}
      src="/images/logo2.png"
      alt="All Points Logo"
      className="rounded-full mb-4 border-2 p-2"
    />
  );

  const BackButton = () => {
    return (
      <button
        onClick={() => setCurrentStep(currentStep - 1)}
        className="text-white cursor-pointer absolute top-10 left-10 text-5xl rotate-90"
      >
        ↓
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative w-full h-screen">
      <div className="bg-darkBg flex justify-center flex-col p-4 rounded-xl h-4/5 relative w-8/12">
        <BackButton />
        {currentStep === 1 && (
          <>
            <div className="text-center mb-8">
              <div className="flex justify-center flex-col items-center mb-5">
                <Avatar />
                <h1 className="font-Poppins text-lg font-semibold text-white inline-flex items-center justify-center">
                  Hi, I'm All-Points
                </h1>
                <p className="font-Poppins text-xs text-opacity-50 font-light text-white inline-flex items-center justify-center my-2">
                  Report in a seconds
                </p>
              </div>

              <div
                className="text-center mb-6 animate-fadeIn"
                style={{ animationDelay: "0s" }}
              >
                <span className="font-Bebas_Neue text-gray-300 text-4xl sm:text-5xl">
                  Have you been in an accident?
                </span>
              </div>
              <Button
                variant="orange"
                onClick={handleNextStep}
                className="px-6 sm:px-10 text-md font-bold uppercase"
              >
                Yes
              </Button>
            </div>
          </>
        )}
        {currentStep === 2 && (
          // Step 2: Confirm address with map view
          <div className="flex justify-center flex-col items-center mb-5">
            <Avatar />
            <h2 className="font-Poppins text-md mb-2 text-white inline-flex items-center justify-center">
              Are You in Danger?
            </h2>
            <p className="text-white my-4 text-4xl font-bold text-center">
              <a href="tel:+01911">Dial 911</a>
            </p>
            <Button
              variant="orange"
              onClick={handleNextStep}
              className="px-6 sm:px-10 text-md font-bold uppercase"
            >
              Yes
            </Button>
          </div>
        )}
        {currentStep === 3 && (
          // Step 3: Ask for average electricity bill
          <div className="text-center mb-8 flex justify-center flex-col items-center">
            <Avatar />
            <h2 className="font-Poppins text-gray-400 text-md mb-4">
              YOUR CURRENT COSTS
            </h2>

            <p className="text-gray-400 text-lg font-Poppins mb-4 sm:mb-6">
              WHAT IS YOUR ADDRESS?
            </p>
            <div className="flex flex-col justify-center items-center w-full">
              {isLoaded && (
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                  searchOptions={{ componentRestrictions: { country: ["us"] } }}
                >
                  {({ getInputProps, suggestions }) => (
                    <div className="w-full sm:w-10/12">
                      <Autocomplete
                        disablePortal
                        onChange={(e, value) => handleSelect(value)}
                        options={suggestions.map((e) => e.description)}
                        renderInput={(params) => (
                          <div ref={params.InputProps.ref}>
                            <input
                              {...params.inputProps}
                              {...getInputProps({
                                className: "input",
                                placeholder: "Address",
                              })}
                              className="rounded-lg px-5 py-3 w-full mb-4 sm:mb-6"
                            />
                          </div>
                        )}
                      />
                    </div>
                  )}
                </PlacesAutocomplete>
              )}
            </div>
            <Button
              variant="orange"
              onClick={handleNextStep}
              className="px-6 sm:px-10 text-md font-bold uppercase"
            >
              Submit
            </Button>
          </div>
        )}
        {currentStep === 4 && (
          // Step 4: Ask for the type of house
          <div className="text-center mb-8 flex justify-center flex-col items-center ">
            <div className="flex justify-center flex-col items-center mb-4">
              <Avatar />
              <h2 className="font-Poppins text-gray-400 text-md">Location</h2>
            </div>
            <span className="font-Bebas_Neue text-4xl sm:text-5xl text-white block mb-2 sm:mb-4">
              Your Current <span className="text-orange-500">Location?</span>
            </span>
            <div className="mb-4 w-8/12 ml-32">
              {isLoaded && (
                <GoogleMap
                  zoom={20}
                  center={center}
                  onLoad={onLoad}
                  options={mapOptions}
                  onUnmount={onUnmount}
                  mapContainerStyle={containerStyle}
                />
              )}
            </div>
            <Button
              variant="orange"
              onClick={handleNextStep}
              className="px-6 sm:px-10 text-md font-bold uppercase"
            >
              Yes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
