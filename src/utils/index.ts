import { Rule } from "./types";

export function validateDescription(description: string) {
  return `"${description
    .replaceAll(`\n`, `\\n`)
    .replaceAll(`"{{`, `\\"{{`)
    .replaceAll(`}}"`, `}}\\"`)}"`;
}

export function getYaml(rule: Rule) {
  return `
  - alert: ${rule.alert}
    expr: ${rule.expr}
    for: ${rule.for}
    labels:
      severity: ${rule.labels.severity}
    annotations:
      summary: ${rule.annotations.summary}
      description: ${validateDescription(rule.annotations.description)}
  `.trim();
}
