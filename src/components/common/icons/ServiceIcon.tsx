import { useMemo, useState } from "react";

interface ServiceIconProps {
  color?: string | null;
  className?: string;
  name: string;
}

const errored: string[] = [];

export const ServiceIcon = ({ color, className, name }: ServiceIconProps) => {
  const [error, setError] = useState(false);

  const imageUrl = useMemo(() => {
    const serviceName = name.split(" ")[0].toLowerCase();

    if (color) {
      return `https://cdn.simpleicons.org/${serviceName}/${color}`;
    }

    return `https://cdn.simpleicons.org/${serviceName}`;
  }, [color, name]);

  return (
    <img
      alt="icon"
      className={`h-5 w-5 ${className || ""}`}
      onError={() => {
        setError(true);
        errored.push(name);
      }}
      src={errored.includes(name) || error ? "/component.svg" : imageUrl}
      height={20}
      width={20}
    />
  );
};
