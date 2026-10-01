export const FooterNewsletter = () => {
  return (
    <div className="box-border caret-transparent shrink-0 outline-[3px] text-start w-[calc(100%_-_20px)] mt-[30px] mb-5 mx-2.5 md:text-left md:w-[calc(75%_-_30px)] md:mx-[15px]">
      <form
        role="search"
        className="box-border caret-transparent max-w-[785px] outline-[3px] text-start ml-0 md:text-left md:ml-5"
      >
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] text-start md:text-left">
          <div className="box-border caret-transparent basis-0 grow outline-[3px] text-start md:text-left">
            <div className="box-border caret-transparent outline-[3px] text-start md:text-left">
              <input
                placeholder="How can we help you?"
                aria-label="Search"
                type="text"
                name="search_query"
                className="appearance-none text-xs bg-stone-800 border-b-stone-300 border-l-stone-300 border-t-stone-300 shadow-[rgba(10,10,10,0.1)_0px_1px_2px_0px_inset] box-border caret-transparent block h-[38px] leading-[18px] outline-[3px] w-full mb-4 pl-5 pr-2 py-2 rounded-l-[50px] border-r-white border-r-0 border-b border-l border-t"
              />
            </div>
          </div>
          <div className="box-border caret-transparent shrink-0 outline-[3px] text-start md:text-left">
            <button className="appearance-none text-[14.4px] font-semibold bg-purple-800 border-b-stone-300 border-r-stone-300 border-t-stone-300 caret-transparent h-[38px] leading-[14.4px] outline-[3px] text-center uppercase align-middle mb-4 pl-[11.2px] pr-4 py-[11.2px] rounded-r-[50px] border-l-white border-b border-r border-t hover:bg-purple-900">
              <i
                role="presentation"
                className="box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[14.4px] before:not-italic before:normal-nums before:font-semibold before:tracking-[normal] before:leading-[14.4px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:uppercase before:visible before:border-separate before:font-font_awesome_6_pro"
              ></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
