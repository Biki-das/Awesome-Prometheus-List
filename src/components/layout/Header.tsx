import { FireIcon } from "../common/icons/FireIcon";
import { ThunderIcon } from "../common/icons/ThunderIcon";
import { GithubIcon } from "../common/icons/GithubIcon";

export function Header() {
  return (
    <header className="bg-white sticky border-b-base-white border-b top-0 z-40">
      <div className="flex w-[80%] mx-auto items-start p-2 ">
        <div className="mt-1">
          <FireIcon />
          <ThunderIcon className="mt-1" />
        </div>
        <p className="text-xl-medium text-lg font-medium ml-[8px] leading-[0.9] mt-1">
          Awesome <br /> Prometheus <br /> Toolkit
        </p>
        <GithubIcon className="ml-auto mr-[4px] self-end " />
        <p className="text-xs-medium self-end text-xs font-medium">125 stars</p>
      </div>
    </header>
  );
}
