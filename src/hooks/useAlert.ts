import { useState, useEffect } from "react";
import yaml from "js-yaml";
import { CatalogData } from "../utils/types";

export function useAlertRules() {
  const [serviceCategory, setServiceCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return { serviceCategory, loading, error };
}
