"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Autocomplete } from "@mui/material";
import { Input } from "@/components/ui/input"; // Adjust the import path as necessary
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import { Slider } from "@/components/ui/slider"; // Adjust the import path as necessary
import PlacesAutocomplete from "react-places-autocomplete";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { getLatLng, geocodeByAddress } from "react-places-autocomplete";

const Calculator = () => {
  const router = useRouter();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [houseType, setHouseType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [squareFeet, setSquareFeet] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSavings, setTotalSavings] = useState("");
  const [sunlightHours, setSunlightHours] = useState("");
  const [formData, setFormData] = useState({ address: "" });
  const [isScriptLoaded, setIsScriptLoaded] = useState(true);
  const [electricityBill, setElectricityBill] = useState(400);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleNextStep = () => {
    if (currentStep === 1) {
      // ReactPixel.track("Lead", {
      //   content_name: "Address Submission",
      //   content_category: "Solar Estimate",
      //   value: 0.0,
      //   currency: "USD",
      // });
    } else if (currentStep === 4) {
      // Use 'else if' to check this condition separately
      // ReactPixel.track("InitiateCheckout", {
      //   content_name: "Personal Info Submission",
      //   content_category: "Solar Proposal",
      //   num_items: 1,
      //   value: 0.0,
      //   currency: "USD",
      // });
    }

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
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

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

  const searchOptions = {
    componentRestrictions: { country: ["us"] },
  };

  const selectHouseType = (type: any) => {
    setHouseType(type);
    handleNextStep(); // Move to the next step after selection
  };

  const handlePersonalInfoChange = (e: any) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSliderChange = (value: any) => {
    setElectricityBill(value[0]); // Assuming the slider returns an array with one value
  };

  // const saveUser = async () => {
  //   try {
  //     console.log("testing try");

  //     const { data, error } = await supabase
  //       .from("solar_saver")
  //       .insert({
  //         lat,
  //         lng,
  //         phone,
  //         email,
  //         address,
  //         last_name: lastName,
  //         first_name: "Asdfasdf",
  //         sent: false,
  //         contact: false,
  //         electricity: 2,
  //         sunlight_hours: sunlightHours,
  //         square_feet: squareFeet,
  //         total_savings: totalSavings,
  //         image_url: imageUrl,
  //       })
  //       .select();

  //     if (error) {
  //       console.log(error, "dumb error");
  //       throw error;
  //     }
  //     console.log("Data inserted successfully:", data);
  //     console.log("*****************:", data[0].id);

  //     setTimeout(() => {
  //       navigate(
  //         `/pricing?address=${address}&email=${email}&phone=${phone}&firstName=${firstName}&lastName=${lastName}&electricity=${values[0]}&docId=${data[0].id}&lat=${lat}&lng=${lng}&alternativeRoute=${alternativeRoute}&imageURL=${imageUrl}&squareFeet=${squareFeet}&totalSavings=${totalSavings}&sunlightHours${sunlightHours}`
  //       );
  //     }, 2000);
  //   } catch (er) {
  //     console.log("big error");
  //     Swal.fire({ text: er.message, icon: "error", title: "Oops..." });
  //   }
  // };

  // const showAmount = () => {
  //   // Existing validation and routing logic
  //   ReactPixel.track("CompleteRegistration", {
  //     content_name: "Completed Solar Estimate",
  //     status: true,
  //     value: 0.0,
  //     currency: "USD",
  //   });
  //   router.push("/proposal");
  // };

  const handleSubmit = () => {
    const formData = {
      houseType,
      electricityBill,
      address,
      firstName,
      image: imageUrl,
      sunlightHours,
      squareFeet,
      totalSavings,
    };
    const query = new URLSearchParams(formData as any).toString();
    router.push(`/proposals/${formData.houseType}?${query}`);
  };

  const Avatar = () => (
    <Image
      src="/images/ProfilePic.png"
      width={70}
      height={70}
      alt="Image of a solar panel"
      className="rounded-full mb-4"
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

  const submitApi = async () => {
    setLoading(true);

    const url = "https://calculate.clouddeskapi.com/api";
    const res = await axios.post(url, { address, first_name: firstName });
    handleNextStep();
    setSunlightHours(res.data.sunlightHours);
    setTotalSavings(res.data.totalSaving);
    setSquareFeet(res.data.squareFeet);
    setImageUrl(res.data.imageUrl);
    setLoading(false);
    handleNextStep();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative w-full h-screen	">
      <div className="bg-darkBg flex justify-center flex-col p-4 w-full rounded-xl h-4/5 relative">
        <BackButton />
        {currentStep === 1 && (
          <>
            <div className="text-center mb-8">
              <div className="flex justify-center flex-col items-center mb-5">
                <Avatar />
                <h1 className="font-Poppins text-lg font-semibold text-white inline-flex items-center justify-center">
                  Hi, I’m Maddie.
                </h1>
                <p className="font-Poppins text-xs text-opacity-50 font-light text-white inline-flex items-center justify-center my-2">
                  FIND OUT IN SECONDS
                </p>
              </div>

              <div
                className="text-center mb-6 animate-fadeIn"
                style={{ animationDelay: "0s" }}
              >
                <span className="font-Bebas_Neue text-orange-500 text-4xl sm:text-5xl">
                  Let&apos;s{" "}
                </span>
                <span className="font-Bebas_Neue text-gray-300 text-4xl sm:text-5xl">
                  get your solar estimate
                </span>
              </div>

              <p className="text-gray-400 text-lg font-Poppins mb-4 sm:mb-6">
                WHAT IS YOUR ADDRESS?
              </p>
              <div className="flex flex-col justify-center items-center">
                {isScriptLoaded && (
                  <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                    searchOptions={searchOptions}
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
                <Button
                  variant="orange"
                  onClick={() => {
                    console.log("clicked");
                    submitApi();
                  }}
                  // onClick={submitApi}
                  disabled={address == ""}
                  className="px-6 sm:px-10 text-md font-bold uppercase"
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </div>
            </div>
          </>
        )}
        {currentStep === 2 && (
          // Step 2: Confirm address with map view
          <div className="flex justify-center flex-col items-center mb-5">
            <Avatar />
            <h2 className="font-Poppins text-md mb-2 text-white inline-flex items-center justify-center">
              How Does This Look?
            </h2>
            <p className="text-white mb-4 text-xl font-bold text-center">
              Just To Confirm, Is This Your
              <br />
              House?
            </p>
            {/* Replace with an actual map component or image */}
            <div className="mb-4 w-full sm:w-8/12">
              {!!imageUrl ? (
                <div className="relative w-full h-64 sm:h-96">
                  <Image
                    alt="Map view"
                    layout="fill"
                    src={imageUrl}
                    className="rounded-lg y-4 sm:mt-0"
                  />
                </div>
              ) : (
                isLoaded && (
                  <GoogleMap
                    zoom={20}
                    center={center}
                    onLoad={onLoad}
                    options={mapOptions}
                    onUnmount={onUnmount}
                    mapContainerStyle={containerStyle}
                  ></GoogleMap> // Apply the options to hide controls
                )
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
        {currentStep === 3 && (
          // Step 3: Ask for average electricity bill
          <div className="text-center mb-8 flex justify-center flex-col items-center">
            <Avatar />
            <h2 className="font-Poppins text-gray-400 text-md mb-4">
              YOUR CURRENT COSTS
            </h2>
            <h1 className="text-4xl sm:text-6xl font-Bebas_Neue text-white">
              <span className="text-orange-500">WHAT IS YOUR AVERAGE </span>
              <br />
              ELECTRICITY BILL?
            </h1>
            <div className="my-6 sm:my-10 w-full sm:w-3/4">
              <p className="mb-2 sm:mb-4 text-orange-500 font-Bebas_Neue text-2xl sm:text-3xl">
                ${electricityBill.toFixed(2)}
              </p>
              <Slider
                max={500}
                step={1}
                defaultValue={[electricityBill]} // Pass defaultValue as an array
                onValueChange={handleSliderChange} // Update the handler here
              />
            </div>
            <p className="font-Poppins text-gray-300 mb-4">
              We Use This Info To Estimate Your Plan And Savings!
            </p>
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
          <div className="text-center mb-8">
            <div className="flex justify-center flex-col items-center mb-4">
              <Avatar />
              <h2 className="font-Poppins text-gray-400 text-md">
                YOUR CURRENT COSTS
              </h2>
            </div>
            <span className="font-Bebas_Neue text-4xl sm:text-5xl text-white block mb-2 sm:mb-4">
              WHAT <span className="text-orange-500">TYPE OF HOUSE</span> DO YOU
              HAVE?
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
              {/* Replace these divs with actual buttons or clickable cards */}
              <div
                onClick={() => selectHouseType("apartment")}
                className={`p-4 ${
                  houseType === "apartment"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-orange-500"
                } rounded-lg cursor-pointer hover:bg-orange-600 hover:text-white transition-colors text-xl sm:text-2xl font-extrabold`}
              >
                <Image
                  className="m-auto mb-1"
                  src="/images/apartment.svg"
                  alt="Apartment"
                  width={64}
                  height={64}
                />
                <p className="font-Bebas_Neue font-normal text-xl sm:text-2xl">
                  APARTMENT
                </p>
              </div>
              <div
                onClick={() => selectHouseType("duplex")}
                className={`p-4 ${
                  houseType === "duplex"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-orange-500"
                } rounded-lg cursor-pointer hover:bg-orange-600 hover:text-white transition-colors text-xl sm:text-2xl font-extrabold`}
              >
                <Image
                  className="m-auto mb-1"
                  src="/images/duplex.svg" // Path to your SVG file
                  alt="Duplex"
                  width={64}
                  height={64}
                />
                <p className="font-Bebas_Neue font-normal text-xl sm:text-2xl">
                  DUPLEX
                </p>
              </div>
              <div
                onClick={() => selectHouseType("mobile_home")}
                className={`p-4 ${
                  houseType === "mobile_home"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-orange-500"
                } rounded-lg cursor-pointer hover:bg-orange-600 hover:text-white transition-colors text-xl sm:text-2xl font-extrabold`}
              >
                <Image
                  className="m-auto mb-1"
                  src="/images/mobile-home.svg"
                  alt="Mobile Home"
                  width={64}
                  height={64}
                />
                <p className="font-Bebas_Neue font-normal text-xl sm:text-2xl">
                  MOBILE HOME
                </p>
              </div>
              <div
                onClick={() => selectHouseType("single_home")}
                className={`p-4 ${
                  houseType === "single_home"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-orange-500"
                } rounded-lg cursor-pointer hover:bg-orange-600 hover:text-white transition-colors text-xl sm:text-2xl font-extrabold`}
              >
                <Image
                  className="m-auto"
                  src="/images/Group 2.svg"
                  alt="Single Home"
                  width={64}
                  height={64}
                />
                <p className="font-Bebas_Neue font-normal text-xl sm:text-2xl">
                  SINGLE HOME
                </p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          // Step 5: Collect personal information
          <div className="text-center mb-8 flex justify-center flex-col items-center">
            <Avatar />
            <h2 className="font-Poppins text-gray-400 text-md mb-4">
              ABOUT YOUR HOME
            </h2>
            <h1 className="text-4xl sm:text-5xl font-Bebas_Neue text-orange-500 mb-2">
              PERSONAL <span className="font-Bebas_Neue text-white">INFO</span>
            </h1>
            <div className="grid grid-cols-2 gap-4 w-full p-10">
              <Input
                name="firstName"
                placeholder="First Name"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
                className="col-span-2 sm:col-span-1"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
                className="col-span-2 sm:col-span-1"
              />
              <Input
                name="phone"
                placeholder="Phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                className="col-span-2 sm:col-span-1"
              />
              <Input
                name="email"
                placeholder="Email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="col-span-2 sm:col-span-1"
              />
            </div>
            <Button
              variant="orange"
              disabled={
                personalInfo.firstName === "" ||
                personalInfo.lastName === "" ||
                personalInfo.phone === "" ||
                personalInfo.email === ""
              }
              onClick={handleSubmit}
              className="px-10 text-md font-bold uppercase"
            >
              Show the Amount
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
