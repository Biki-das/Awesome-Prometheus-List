import { useState } from "react";
import { ServiceIcon } from "../icons/ServiceIcon";
import { Label } from "../label";
import { Button } from "../button/index";
import yaml from "js-yaml";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseIcon } from "../icons/CloseIcon";
import { RulesCardProps, Group } from "../../../utils/types";
import { YamlView } from "../../common/yaml/index";

export const RulesCard = ({ name, rules, slug }: RulesCardProps) => {
  const rulesCount = rules?.length;
  const displayedRules = rules?.slice(0, 4);
  const transformedName = name.toLowerCase().replace(/\s+/g, "-");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ruleData, setRuleData] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const ruleUrl = `https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/refs/heads/master/dist/rules/${transformedName}/${slug}.yml`;

  const handleViewAlertRules = async () => {
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
      setLoading(false);
      setIsDialogOpen(true);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="border border-slate-100 rounded-sm p-4">
      <div className="flex gap-x-2 text-[14px] font-bold text-slate-600">
        <ServiceIcon name={name} />
        <p className="text-slate-600 font-bold">{name}</p>
      </div>
      <div className="mt-[18px]">
        <Label>
          {rulesCount} {rulesCount > 1 ? "Rules" : "Rule"}
        </Label>
        <>
          {displayedRules?.map((rule, index) => (
            <span
              key={index}
              className="font-medium text-[12px] text-slate-400 ml-1 leading-[16px]"
            >
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

      <Button
        onClick={handleViewAlertRules}
        loading={loading}
        className="mt-4 mx-auto border border-slate-200 w-full items-center justify-center px-4 py-2 text-slate-600  font-semibold text-[12px] rounded-md"
      >
        View Alert Rules
      </Button>

      {error && (
        <div className="mt-4 text-red-500 text-sm">
          Error fetching alert rules. Please try again later.
        </div>
      )}

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Description className="text-slate-600 font-semibold text-[16px] flex gap-x-3 border-b-base-white border-b p-4 sticky top-0 z-20 bg-white">
              <ServiceIcon name={name} />
              {name}
              <Label>
                {rulesCount} {rulesCount > 1 ? "Rules" : "Rule"}
              </Label>
              <Dialog.Close asChild>
                <Button
                  onClick={() => setIsDialogOpen(false)}
                  className="w-[11px] h-[11px] ml-auto"
                  icon={<CloseIcon />}
                ></Button>
              </Dialog.Close>
            </Dialog.Description>
            <div className="mt-4">
              {ruleData?.map((rule: any, index: number) => (
                <YamlView key={index} rule={rule} index={index} />
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
