"use server"
import axios from "axios";
import { SpeciesType } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveSpecies = async (speciesData: SpeciesType) => {
  try {
    const response = await axios.post(
      "https://test.api.sahabatlautlestari.com/species",
      speciesData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating species:", error);
    throw new Error("Failed to create species");
  }
};


export const editSpecies = async (
  id: string,
  prevState: SpeciesType,
  formData: FormData
) => {

  try {
    const response = await axios.put(
      `https://test.api.sahabatlautlestari.com/species/${id}`,
      {
        faoCode: formData.get('faoCode'),
        typeOfFish: formData.get('typeOfFish'),
        scientificName: formData.get('scientificName'),
        englishName: formData.get('englishName'),
        indonesianName: formData.get('indonesianName'),
        localName: formData.get('localName'),
        typeOfWater: formData.get('typeOfWater'),
        imageUrl: formData.get('imageUrl'),
        statusInIndonesia: formData.get('statusInIndonesia'),
        fishUtilization: formData.get('fishUtilization'),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      revalidatePath('/species');
      redirect('/species');
    } else {
      return { message: 'Failed to update species data' };
    }
  } catch (error) {
    return { message: 'Failed to update species', error };
  }
};
