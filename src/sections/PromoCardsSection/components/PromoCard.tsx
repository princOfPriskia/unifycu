export type PromoCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageClassName: string;
  title: string;
  description: React.ReactNode;
  href: string;
  ariaLabel: string;
  linkText: string;
};

export const PromoCard = (props: PromoCardProps) => {
  return (
    <div className="relative text-neutral-950 bg-white shadow-[rgba(0,0,0,0.2)_0px_0px_4px_0px] box-border caret-transparent flex flex-col shrink-0 outline-[3px] text-center w-[calc(100%_-_20px)] m-2.5 md:w-[calc(33.3333%_-_30px)] md:m-[15px]">
      <div className="border-b-slate-500 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full m-auto border-b-[7px]">
        <div className="box-border caret-transparent outline-[3px]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className={`box-border caret-transparent inline-block max-h-[200px] max-w-full min-h-px object-cover outline-[3px] w-full ${props.imageClassName}`}
          />
        </div>
      </div>
      <h2 className="text-stone-800 text-xl font-bold box-border caret-transparent leading-7 min-h-[auto] min-w-[auto] outline-[3px] uppercase mt-[30px] mb-5 mx-[30px] font-brandon_grotesque">
        {props.title}
      </h2>
      <p className="text-[21px] box-border caret-transparent grow shrink-0 leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] mb-4 px-[30px]">
        {props.description}
      </p>
      <a
        href={props.href}
        aria-label={props.ariaLabel}
        className="text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-40 outline-[3px] uppercase align-middle border mt-[35px] mb-[30px] mx-[30px] px-7 py-3 rounded-[50px] border-solid border-transparent hover:bg-purple-900"
      >
        {props.linkText}
        <span className="box-border caret-transparent outline-[3px]"></span>
      </a>
    </div>
  );
};
