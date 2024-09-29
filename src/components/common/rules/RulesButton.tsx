import { Button } from "../button/index";

interface ViewRulesButtonProps {
  onClick: () => void;
  loading: boolean;
  error: boolean;
}

export const ViewRulesButton = ({
  onClick,
  loading,
  error,
}: ViewRulesButtonProps) => (
  <>
    <Button
      onClick={onClick}
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
  </>
);
