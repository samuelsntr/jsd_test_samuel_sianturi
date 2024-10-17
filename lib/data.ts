import axios from "axios";
import { SpeciesType } from "./utils";

export const getSpecies = async (): Promise<SpeciesType[]> => {
    try {
  
      // Make sure to include params correctly
      const response = await axios.get<SpeciesType[]>("https://test.api.sahabatlautlestari.com/species/all");
  
      console.log("API Response:", response.data); // Debugging line
      return response.data; // Extract the data here
    } catch (error) {
      console.error("Error fetching species:", error); // Log the error
      // Check if error response is available
      if (axios.isAxiosError(error) && error.response) {
        console.error("Response data:", error.response.data);
        throw new Error(`Error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
      }
      throw new Error("Failed to fetch species");
    }
  };
  
  
  

export const getSpeciesById = async (id: string) => {
    try {
      const response = await axios.get<SpeciesType[]>(`https://test.api.sahabatlautlestari.com/species/${id}`);
      
      return response.data; // Extract the data here
    } catch (error) {
      throw new Error(String(error));
    }
  };
  
