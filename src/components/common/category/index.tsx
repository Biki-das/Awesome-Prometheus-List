import { RulesCard } from "../rules/RulesCard";

interface CategoryListProps {
  categories: any[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <>
      {categories.map(({ name, services }, index) => (
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
                  <RulesCard key={name} name={name} rules={rules} slug={slug} />
                );
              }
            )}
          </ul>
        </div>
      ))}
    </>
  );
}
