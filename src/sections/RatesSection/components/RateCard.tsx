export type RateCardProps = {
  href: string;
  title: string;
  ratePrefix: string;
  rateValue: string;
  rateSymbol: string;
  rateType: string;
};

export const RateCard = (props: RateCardProps) => {
  return (
    <div className="box-border caret-transparent flex basis-auto grow-0 shrink-0 justify-center outline-[3px] w-[calc(100%_-_20px)] ml-0 mr-3.5 pb-4 md:block md:basis-0 md:grow md:shrink md:justify-normal md:w-auto md:mx-[15px] md:pb-0">
      <div className="border-b-stone-800 border-l-stone-800 border-r-stone-800 border-t-stone-800 box-border caret-transparent flex-col min-h-[auto] min-w-[auto] outline-[3px] w-[90%] pl-0 border-l-0 md:border-l-zinc-300 md:min-h-0 md:min-w-0 md:w-auto md:pl-[15px] md:border-l-2">
        <a
          href={props.href}
          className="text-purple-800 font-bold box-border caret-transparent outline-[3px]"
        >
          <h3 className="text-stone-500 font-semibold box-border caret-transparent leading-5 outline-[3px] uppercase">
            {props.title}
          </h3>
        </a>
        <p className="box-border caret-transparent outline-[3px]">
          {props.ratePrefix}
        </p>
        <div className="relative text-blue-950 text-[33.6px] font-normal box-border caret-transparent tracking-[1px] leading-[33.6px] outline-[3px] mb-3 font-alfa_slab_one md:text-[44px] md:font-bold md:tracking-[3px] md:leading-[44px] md:mb-0">
          {props.rateValue}
          <span className="absolute text-[17.6px] box-border caret-transparent block leading-[17.6px] outline-[3px] ml-0 top-0 font-calibri md:-ml-3 md:top-auto">
            {props.rateSymbol}
          </span>
          <span className="absolute text-stone-800 text-base box-border caret-transparent block leading-4 outline-[3px] ml-0 top-[18px] font-calibri md:static md:text-sm md:inline md:leading-[14px] md:-ml-3 md:top-auto">
            {props.rateType}
          </span>
        </div>
      </div>
    </div>
  );
};
