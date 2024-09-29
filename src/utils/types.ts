export interface Rule {
  name: string;
  alert: string;
  expr: string;
  for: string;
  labels: {
    severity: string;
  };
  annotations: {
    summary: string;
    description: string;
  };
}

export interface RulesCardProps {
  name: string;
  rules: Rule[];
  slug: string;
}

interface Exporter {
  name: string;
  exporters: any[];
}

export interface Service {
  name: string;
  exporters?: Exporter[];
}

export interface Group {
  name: string;
  rules: Rule[];
  services: Service[];
}

export interface CatalogData {
  groups: Group[];
}
