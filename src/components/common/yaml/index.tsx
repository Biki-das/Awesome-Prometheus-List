import { Button } from "../button/index";
import { Rule } from "../../../utils/types";
import { getYaml, validateDescription } from "../../../utils/index";
import { toast } from "sonner";
import { CheckMark } from "../icons/CheckMark";
import { CopyIcon } from "../icons/CopyIcon";
import { useState } from "react";

interface YamlViewProps {
  rule: Rule;
  index: number;
}

export const YamlView = ({ rule, index }: YamlViewProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    toast.success("Copied to clipboard");
    navigator.clipboard.writeText(getYaml(rule));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="relative flex flex-col mt-6 px-1 last:mb-4">
      <div className="h-[50px] flex items-center gap-x-2">
        <span className="ml-2 bg-slate-100 text-slate-500 font-bold text-xs rounded-full h-10 w-10 flex items-center justify-center">
          0{index + 1}
        </span>
        <div className="flex flex-col">
          <span className="text-slate-600 text-sm font-medium">
            {rule.annotations.summary.split("(")[0]}
          </span>
          <span className="text-slate-600 text-xs font-medium">
            {rule.annotations.description.split("\n")[0]}
          </span>
        </div>
      </div>
      <div className="flex flex-col rounded-[4px] bg-slate-50 py-6 px-4 w-[85%] mx-auto mt-6 relative overflow-x-hidden">
        <span className="text-nowrap text-xs font-normal">
          <span>-</span>&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">alert: </span>
          <span className="text-yaml-value font-JetBrains-Mono">
            {rule.alert}
          </span>
        </span>

        <span className="text-nowrap text-xs font-normal">
          &nbsp;&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">expr: </span>
          <span className="text-yaml-value font-JetBrains-Mono">
            {rule.expr}
          </span>
        </span>

        <span className="text-nowrap text-xs font-normal">
          &nbsp;&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">for: </span>
          <span className="text-yaml-value font-JetBrains-Mono">
            {rule.for}
          </span>
        </span>

        <span className="text-nowrap text-xs font-normal">
          &nbsp;&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">labels: </span>
        </span>

        <span className="text-nowrap text-xs font-normal">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">severity: </span>
          <span className="text-yaml-value font-JetBrains-Mono">
            {rule.labels.severity}
          </span>
        </span>

        <span className="text-nowrap text-xs font-normal">
          &nbsp;&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">
            annotations:{" "}
          </span>
        </span>

        <span className="text-nowrap text-xs font-normal">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">summary: </span>
          <span className="text-yaml-value font-JetBrains-Mono">
            {rule.annotations.summary}
          </span>
        </span>

        <span className="text-nowrap text-xs font-normal">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yaml-key font-JetBrains-Mono">
            description:{" "}
          </span>
          <span className="text-yaml-value font-JetBrains-Mono">
            {validateDescription(rule.annotations.description)}
          </span>
        </span>
        <Button
          className="absolute right-0 top-0 flex h-8 w-[66px] cursor-pointer select-none items-center justify-center space-x-1 rounded-bl-[4px] rounded-tr-[4px] bg-slate-100 hover:bg-slate-200"
          onClick={handleCopy}
        >
          {copied ? (
            <CheckMark />
          ) : (
            <>
              <CopyIcon />
              <span className="text-[10px] font-bold text-slate-500">COPY</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
