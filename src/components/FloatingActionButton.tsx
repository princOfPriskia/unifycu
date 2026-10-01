export const FloatingActionButton = () => {
  return (
    <div className="fixed box-border caret-transparent outline-[3px] right-[25px] bottom-[25px] md:right-[75px] md:bottom-[50px]">
      <button
        aria-label="Scroll to top"
        className="appearance-none text-black bg-purple-800 caret-transparent leading-4 opacity-0 outline-[3px] text-center px-2.5 py-0.5 rounded-[25px] hover:bg-purple-900"
      >
        <i className="text-white text-4xl font-black box-border caret-transparent inline-block leading-9 outline-[3px] font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-white before:text-4xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-9 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro"></i>
      </button>
    </div>
  );
};
