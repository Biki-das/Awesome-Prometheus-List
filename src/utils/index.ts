import { Rule } from "./types";
export function getYaml(rule: Rule) {
  return `
  - alert: ${rule.alert}
    expr: ${rule.expr}
    for: ${rule.for}
    labels:
      severity: ${rule.labels.severity}
    annotations:
      summary: ${rule.annotations.summary}
      description: ${rule.annotations.description}
  `.trim();
}
