import EditForm from "@/components/edit-form";
import { getSpeciesById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditSpeciesPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const species = await getSpeciesById(id);

  if (!species) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit Species</h1>
      <EditForm species={species} />
    </div>
  );
};

export default EditSpeciesPage;
