"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitButton } from "./buttons";
import { SpeciesType } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-toastify";

const EditForm = ({ species }: { species: SpeciesType }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    faoCode: species.faoCode,
    typeOfFish: species.typeOfFish,
    scientificName: species.scientificName,
    englishName: species.englishName,
    indonesianName: species.indonesianName,
    localName: species.localName,
    typeOfWater: species.typeOfWater,
    imageUrl: species.imageUrl,
    statusInIndonesia: species.statusInIndonesia,
    fishUtilization: species.fishUtilization,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("You need to log in first.");
        return;
      }

      const response = await axios.put(
        `https://test.api.sahabatlautlestari.com/species/${species.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Response status:", response.status); // For debugging
      console.log("Response data:", response.data); // For debugging

      // Check the response for success
      if (response.status >= 200 && response.status < 300) {
        toast.success("Updated successfully!"); // Success toast
        router.push("/species"); // Redirect using useRouter
      } else {
        alert(`Failed to update species data. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating species:", error);
      if (axios.isAxiosError(error) && error.response) {
        alert(
          `Failed to update species: ${error.response.status} - ${
            error.response.data.message || error.message
          }`
        );
      } else {
        alert("Failed to update species.");
      }
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
            value={formData.faoCode}
            onChange={handleChange}
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
            value={formData.typeOfFish}
            onChange={handleChange}
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
            value={formData.scientificName}
            onChange={handleChange}
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
            value={formData.englishName}
            onChange={handleChange}
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
            value={formData.indonesianName}
            onChange={handleChange}
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
            value={formData.localName}
            onChange={handleChange}
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
            value={formData.typeOfWater}
            onChange={handleChange}
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
            value={formData.imageUrl}
            onChange={handleChange}
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
            value={formData.statusInIndonesia}
            onChange={handleChange}
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
            value={formData.fishUtilization}
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <SubmitButton label="Update" />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
