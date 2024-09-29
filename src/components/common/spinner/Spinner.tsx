import "../../../index.css";

const bars = Array(12).fill(0);

interface SpinnerProps {
  color: string;
  size?: number;
}

export function Spinner({ color, size = 20 }: SpinnerProps) {
  return (
    <div
      className="translate-y-[10px]"
      style={{
        ["--spinner-size" as any]: `${size}px`,
        ["--spinner-color" as any]: color,
      }}
    >
      <div className="spinner">
        {bars.map((_, i) => (
          <div className="bar" key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
