import * as Dialog from "@radix-ui/react-dialog";
import { ServiceIcon } from "../icons/ServiceIcon";
import { Label } from "../label";
import { Button } from "../button/index";
import { CloseIcon } from "../icons/CloseIcon";
import { YamlView } from "../../common/yaml/index";

interface RulesDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  rules: any[];
  ruleData: any[] | null;
}

export const RulesDialog = ({
  isOpen,
  onOpenChange,
  name,
  rules,
  ruleData,
}: RulesDialogProps) => (
  <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle"></Dialog.Title>
        <Dialog.Description className="text-slate-600 font-semibold items-center text-base flex gap-x-3 border-b-base-white border-b p-4 sticky top-0 z-20 bg-white">
          <ServiceIcon name={name} />
          {name}
          <div>
            <Label>
              {rules.length} {rules.length > 1 ? "Rules" : "Rule"}
            </Label>
          </div>
          <Dialog.Close asChild>
            <Button
              onClick={() => onOpenChange(false)}
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
);
