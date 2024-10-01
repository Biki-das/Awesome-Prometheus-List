import { useState } from "react";
import { RulesCardProps } from "../../../utils/types";
import { CardHeader } from "./RulesHeader";
import { RulesSummary } from "./RulesSummary";
import { ViewRulesButton } from "./RulesButton";
import { RulesDialog } from "./RulesDialog";
import { useRuleData } from "../../../hooks/useRules";

export const RulesCard = ({ name, rules, slug }: RulesCardProps) => {
  console.log(rules);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { loading, error, ruleData, fetchRuleData } = useRuleData(name, slug);

  const handleViewAlertRules = async () => {
    await fetchRuleData();
    setIsDialogOpen(true);
  };

  return (
    <li className="border border-slate-100 rounded-sm p-4">
      <CardHeader name={name} />
      <RulesSummary rules={rules} />
      <ViewRulesButton
        onClick={handleViewAlertRules}
        loading={loading}
        error={error}
      />
      <RulesDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        name={name}
        rules={rules}
        ruleData={ruleData}
      />
    </li>
  );
};
