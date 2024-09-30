export const Footer = () => {
  return (
    <footer className="border-t-2 border-t-slate-100">
      <section className="w-[80%] mx-auto flex p-4 items-center">
        <a
          className="text-xs-medium font-medium text-[12px] leading-[16px]"
          href="/"
        >
          Contribute on Github
        </a>
        <p className="ml-auto text-slate-400 text-[12px] font-medium leading-[16px]">
          Maintained by{" "}
        </p>
        <img className="ml-2 h-[20px] w-[20px]" src="./last9io.svg" />
      </section>
    </footer>
  );
};
