import { Label } from "../label";

interface RulesSummaryProps {
  rules: any[];
}

export const RulesSummary = ({ rules }: RulesSummaryProps) => {
  const rulesCount = rules?.length;
  const displayedRules = rules?.slice(0, 4);

  return (
    <div className="mt-[18px]">
      <Label>
        {rulesCount} {rulesCount > 1 ? "Rules" : "Rule"}
      </Label>
      <>
        {displayedRules?.map((rule, index) => (
          <span key={index} className="font-medium text-xs text-slate-400 ml-1">
            {rule.name}
            {index < displayedRules.length - 1
              ? ","
              : rulesCount > 4
              ? "..."
              : ""}
          </span>
        ))}
      </>
    </div>
  );
};
