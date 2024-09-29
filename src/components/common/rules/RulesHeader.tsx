import { ServiceIcon } from "../icons/ServiceIcon";

interface CardHeaderProps {
  name: string;
}

export const CardHeader = ({ name }: CardHeaderProps) => (
  <div className="flex gap-x-2 text-[14px] font-bold text-slate-600">
    <ServiceIcon name={name} />
    <p className="text-slate-600 font-bold">{name}</p>
  </div>
);
