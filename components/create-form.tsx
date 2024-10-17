"use client";
import { saveSpecies } from "@/lib/actions";
import React, { useState } from "react";
import { SubmitButton } from "./buttons";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    faoCode: "",
    typeOfFish: "",
    scientificName: "",
    englishName: "",
    indonesianName: "",
    localName: "",
    typeOfWater: "",
    imageUrl: "",
    statusInIndonesia: "",
    fishUtilization: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await saveSpecies(formData);
      console.log("Species created successfully:", result);
      // Optionally, handle success (e.g., redirect or display a success message)
    } catch (error) {
      console.error("Failed to create species:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="faoCode"
            className="block text-sm font-medium text-gray-900"
          >
            FAO Code
          </label>
          <input
            type="text"
            name="faoCode"
            id="faoCode"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter FAO Code..."
          />
        </div>

        <div>
          <label
            htmlFor="typeOfFish"
            className="block text-sm font-medium text-gray-900"
          >
            Type of Fish
          </label>
          <input
            type="text"
            name="typeOfFish"
            id="typeOfFish"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Type of Fish..."
          />
        </div>

        <div>
          <label
            htmlFor="scientificName"
            className="block text-sm font-medium text-gray-900"
          >
            Scientific Name
          </label>
          <input
            type="text"
            name="scientificName"
            id="scientificName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Scientific Name..."
          />
        </div>

        <div>
          <label
            htmlFor="englishName"
            className="block text-sm font-medium text-gray-900"
          >
            English Name
          </label>
          <input
            type="text"
            name="englishName"
            id="englishName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter English Name..."
          />
        </div>

        <div>
          <label
            htmlFor="indonesianName"
            className="block text-sm font-medium text-gray-900"
          >
            Indonesian Name
          </label>
          <input
            type="text"
            name="indonesianName"
            id="indonesianName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Indonesian Name..."
          />
        </div>

        <div>
          <label
            htmlFor="localName"
            className="block text-sm font-medium text-gray-900"
          >
            Local Name
          </label>
          <input
            type="text"
            name="localName"
            id="localName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Local Name..."
          />
        </div>

        <div>
          <label
            htmlFor="typeOfWater"
            className="block text-sm font-medium text-gray-900"
          >
            Type of Water
          </label>
          <input
            type="text"
            name="typeOfWater"
            id="typeOfWater"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Type of Water..."
          />
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-900"
          >
            Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            id="imageUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Image URL..."
          />
        </div>

        <div>
          <label
            htmlFor="statusInIndonesia"
            className="block text-sm font-medium text-gray-900"
          >
            Status in Indonesia
          </label>
          <input
            type="text"
            name="statusInIndonesia"
            id="statusInIndonesia"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Status in Indonesia..."
          />
        </div>

        <div>
          <label
            htmlFor="fishUtilization"
            className="block text-sm font-medium text-gray-900"
          >
            Fish Utilization
          </label>
          <input
            type="text"
            name="fishUtilization"
            id="fishUtilization"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Fish Utilization..."
          />
        </div>

        <div className="mt-5">
          <SubmitButton label="Save" />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
