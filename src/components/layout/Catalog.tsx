import { useState, useEffect } from "react";
import { SearchInput } from "../common/searchInput";
import yaml from "js-yaml";
import { RulesCard } from "../common/rules/RulesCard";
import { CatalogData } from "../../utils/types";
import { Spinner } from "../common/spinner/Spinner";

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [serviceCategory, setServiceCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function handleSearchChange(term: string) {
    setSearchTerm(term);
  }

  useEffect(() => {
    const fetchAlertRules = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/refs/heads/master/_data/rules.yml"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const yamlText = await response.text();
        const data = yaml.load(yamlText) as CatalogData;
        setServiceCategory(data.groups);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch alert rules. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlertRules();
  }, []);

  const filteredCategories = serviceCategory
    .map((category) => ({
      ...category,
      services: category.services.filter((service: { name: string }) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.services.length > 0);

  return (
    <main className="w-[80%] mx-auto py-12">
      <h1 className="text-xl-medium font-medium text-[20px]">Browse Library</h1>
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
          <div className="text-red-500 text-center">{error}</div>
        ) : filteredCategories.length === 0 ? (
          <div className="text-center text-gray-500">No results found</div>
        ) : (
          filteredCategories.map(({ name, services }, index) => (
            <div key={name} className={index !== 0 ? "py-4" : ""}>
              <p className="text-xl-light font-bold text-[10px] uppercase">
                {name}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {services.map(
                  ({
                    name,
                    exporters,
                  }: {
                    name: string;
                    exporters: {
                      rules: any[];
                      slug: string;
                    }[];
                  }) => {
                    const rules =
                      name.toLowerCase() === "zookeeper" && exporters.length > 1
                        ? exporters[1].rules
                        : exporters.length > 0
                        ? exporters[0].rules
                        : [];
                    const slug =
                      name.toLowerCase() === "zookeeper"
                        ? exporters[1].slug
                        : exporters[0].slug;

                    return (
                      <RulesCard
                        key={name}
                        name={name}
                        rules={rules}
                        slug={slug}
                      />
                    );
                  }
                )}
              </ul>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
