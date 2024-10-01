export const Footer = () => {
  return (
    <footer className="border-t-2 border-t-slate-100 sticky bottom-0 z-40 bg-white">
      <section className="w-[83%] mx-auto flex p-4 items-center">
        <a className="text-xs-medium font-medium text-xs" href="/">
          Contribute on Github
        </a>
        <p className="ml-auto text-slate-400 text-xs font-medium">
          Maintained by{" "}
        </p>
        <img alt="brand-image" className="ml-2 h-5 w-5" src="./last9io.svg" />
      </section>
    </footer>
  );
};
