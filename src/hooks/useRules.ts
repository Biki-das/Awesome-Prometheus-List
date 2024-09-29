import { useState } from "react";
import yaml from "js-yaml";
import { Group } from "../utils/types";

export const useRuleData = (name: string, slug: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ruleData, setRuleData] = useState<any>(null);

  const transformedName = name.toLowerCase().replace(/\s+/g, "-");
  const ruleUrl = `https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/refs/heads/master/dist/rules/${transformedName}/${slug}.yml`;

  const fetchRuleData = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(ruleUrl);
      if (!response.ok) {
        setError(true);
        throw new Error("Network response was not ok");
      }
      const yamlText = await response.text();
      const data = yaml.load(yamlText) as { groups: Group[] };
      setRuleData(data.groups[0].rules);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, ruleData, fetchRuleData };
};
