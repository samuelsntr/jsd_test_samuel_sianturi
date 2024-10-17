import { AddButton } from "@/components/buttons";
import SearchSpecies from "@/components/search";
import SpeciesTable from "@/components/species-table";
import Header from "./header";
import Pagination from "@/components/pagination";

const Species = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Header />
      <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex items-center justify-between gap-1 mb-5">
          <SearchSpecies />
          <AddButton />
        </div>
        <SpeciesTable query={query} currentPage={currentPage} />
        <Pagination totalPages={10} />
      </div>
    </>
  );
};

export default Species;
