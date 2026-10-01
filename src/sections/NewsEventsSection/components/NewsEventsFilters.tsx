export const NewsEventsFilters = () => {
  return (
    <div className="box-border caret-transparent gap-x-0 flex shrink-0 justify-between outline-[3px] text-right w-full mb-[30px] md:gap-x-[15px] md:justify-end md:w-6/12 md:mb-0">
      <select
        aria-label="new-and-events-filter"
        name="new-and-events-filter"
        className="appearance-none text-neutral-700 text-sm bg-white bg-[url(data:image/svg+xml;utf8,<svg%20xmlns=\%22http://www.w3.org/2000/svg\%22%20version=\%221.1\%22%20width=\%2232\%22%20height=\%2224\%22%20viewBox=\%220%200%2032%2024\%22><polygon%20points=\%220,0%2032,0%2016,24\%22%20style=\%22fill:%20rgb%28138,%20138,%20138%29\%22></polygon></svg>)] bg-origin-content bg-no-repeat bg-size-[9px_6px] caret-transparent block basis-6/12 grow h-[39px] leading-[21px] max-w-[200px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full border-stone-300 bg-[position:calc(100%_+_16px)_50%] mb-4 pl-2 pr-6 rounded-[21px] md:bg-neutral-100 md:basis-auto md:grow-0"
      >
        <option
          value="news"
          className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
        >
          News
        </option>
        <option
          value="events"
          className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
        >
          Events
        </option>
      </select>
      <div
        aria-label="new-and-events-state-filter"
        name="new-and-events-state-filter"
        className="box-border caret-transparent max-w-[200px] min-h-[auto] min-w-[auto] outline-[3px] w-6/12 md:w-full"
      >
        <div className="box-border caret-transparent outline-[3px]">
          <form
            aria-label="Events filter"
            className="box-border caret-transparent outline-[3px]"
          >
            <div className="box-border caret-transparent outline-[3px]">
              <select
                name="field_q2_blog_tags_target_id"
                aria-label="Filter news by state"
                className="appearance-none text-neutral-700 text-sm bg-white bg-[url(data:image/svg+xml;utf8,<svg%20xmlns=\%22http://www.w3.org/2000/svg\%22%20version=\%221.1\%22%20width=\%2232\%22%20height=\%2224\%22%20viewBox=\%220%200%2032%2024\%22><polygon%20points=\%220,0%2032,0%2016,24\%22%20style=\%22fill:%20rgb%28138,%20138,%20138%29\%22></polygon></svg>)] bg-origin-content bg-no-repeat bg-size-[9px_6px] caret-transparent basis-6/12 grow h-[39px] leading-[21px] max-w-[200px] outline-[3px] text-start w-full border-stone-300 bg-[position:calc(100%_+_16px)_50%] mb-4 pl-2 pr-6 rounded-[21px] md:bg-neutral-100 md:basis-auto md:grow-0"
              >
                <option
                  value="All"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  - Any -
                </option>
                <option
                  value="47"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  Arkansas
                </option>
                <option
                  value="44"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  California
                </option>
                <option
                  value="48"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  Texas
                </option>
              </select>
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <input
                type="submit"
                value="Search"
                className="appearance-none text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent hidden leading-[14.4px] outline-[3px] text-center uppercase text-nowrap align-middle border mb-4 px-7 py-3 rounded-[50px] border-solid border-transparent hover:bg-purple-900"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        aria-label="new-and-events-state-filter"
        name="new-and-events-state-filter"
        className="box-border caret-transparent hidden max-w-[200px] outline-[3px] w-6/12 md:w-full"
      >
        <div className="box-border caret-transparent outline-[3px]">
          <form className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]">
              <select
                name="tid"
                aria-label="Filter events by state"
                className="appearance-none text-neutral-700 text-sm bg-white bg-[url(data:image/svg+xml;utf8,<svg%20xmlns=\%22http://www.w3.org/2000/svg\%22%20version=\%221.1\%22%20width=\%2232\%22%20height=\%2224\%22%20viewBox=\%220%200%2032%2024\%22><polygon%20points=\%220,0%2032,0%2016,24\%22%20style=\%22fill:%20rgb%28138,%20138,%20138%29\%22></polygon></svg>)] bg-origin-content bg-no-repeat bg-size-[9px_6px] caret-transparent basis-6/12 grow h-[39px] leading-[21px] max-w-[200px] outline-[3px] text-start w-full border-stone-300 bg-[position:calc(100%_+_16px)_50%] mb-4 pl-2 pr-6 rounded-[21px] md:bg-neutral-100 md:basis-auto md:grow-0"
              >
                <option
                  value="All"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  - Any -
                </option>
                <option
                  value="17"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  Arkansas
                </option>
                <option
                  value="7"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  California
                </option>
                <option
                  value="3"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  Texas
                </option>
                <option
                  value="28"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  Other locations
                </option>
                <option
                  value="49"
                  className="items-center caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                >
                  Online Webinars
                </option>
              </select>
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <input
                type="submit"
                value="Apply"
                className="appearance-none text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent hidden leading-[14.4px] outline-[3px] text-center uppercase text-nowrap align-middle border mb-4 px-7 py-3 rounded-[50px] border-solid border-transparent hover:bg-purple-900"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
