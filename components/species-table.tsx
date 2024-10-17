"use client";
import { getSpecies } from "@/lib/data";
import { SpeciesType } from "@/lib/utils";
import { useState, useEffect } from "react";
import { EditButton, DeleteButton, DetailButton } from "@/components/buttons";
import { toast } from "react-toastify"; // Import toast for notifications

const SpeciesTable = () => {
  const [species, setSpecies] = useState<SpeciesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        setLoading(true);
        const data = await getSpecies(); // Ensure query and currentPage are valid
        setSpecies(data);
        setError(null);
      } catch (err) {
        console.error("Error in fetchSpecies:", err); // Log the detailed error
        setError("Data is unavailable. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSpecies();
  }, []); // Add dependencies
  // Add query and currentPage as dependencies

  // Function to refresh the species list
  const refreshSpeciesList = async () => {
    try {
      const data = await getSpecies();
      setSpecies(data);
    } catch (error) {
      console.error("Failed to refresh species list:", error);
      toast.error("Failed to refresh species list.");
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Fish Type</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Water type</th>
          <th className="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        {species.map((item, index) => (
          <tr key={item.id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{item.typeOfFish}</td>
            <td className="py-3 px-6">{item.englishName}</td>
            <td className="py-3 px-6">{item.typeOfWater}</td>
            <td className="flex justify-center gap-1 py-3">
              <DetailButton />
              <EditButton id={item.id ?? ""} />
              <DeleteButton id={item.id ?? ""} onDelete={refreshSpeciesList} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpeciesTable;
