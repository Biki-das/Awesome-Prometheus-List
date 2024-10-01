import { useState, useMemo } from "react";
import { SearchInput } from "../common/searchInput";
import { Spinner } from "../common/spinner/Spinner";
import { CategoryList } from "../common/category/index";
import { ErrorMessage } from "../common/message/index";
import { NoResultsMessage } from "../common/message/index";
import { useAlertRules } from "../../hooks/useAlert";

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { serviceCategory, loading, error } = useAlertRules();

  function handleSearchChange(term: string) {
    setSearchTerm(term);
  }

  const filteredCategories = useMemo(() => {
    return serviceCategory
      .map((category) => ({
        ...category,
        services: category.services.filter((service: { name: string }) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.services.length > 0);
  }, [serviceCategory, searchTerm]);

  return (
    <main className="w-[80%] mx-auto py-12">
      <h1 className="text-xl-medium font-medium text-xl">Browse Library</h1>
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <div className="mt-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner color="black" size={40} />
          </div>
        ) : error ? (
          <ErrorMessage message={error} />
        ) : filteredCategories.length === 0 ? (
          <NoResultsMessage />
        ) : (
          <CategoryList categories={filteredCategories} />
        )}
      </div>
    </main>
  );
}
