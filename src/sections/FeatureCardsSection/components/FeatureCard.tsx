export type FeatureCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
  ariaLabel: string;
  linkText: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="bg-white border-b-stone-800 border-l-stone-800 border-r-stone-800 border-t-slate-500 shadow-[rgba(0,0,0,0.2)_0px_0px_4px_0px] box-border caret-transparent flex shrink-0 outline-[3px] w-[calc(100%_-_20px)] m-2.5 rounded-sm border-t-[7px] md:w-[calc(33.3333%_-_30px)] md:m-[15px]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-[18px] mt-[30px] mb-[18px]">
        <div className="box-border caret-transparent h-[106px] outline-[3px] w-[106px]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="aspect-[auto_102_/_102] box-border caret-transparent inline-block h-[106px] max-h-[200px] max-w-full min-h-px object-cover outline-[3px] w-full"
          />
        </div>
      </div>
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] ml-[15px] mr-[18px] mt-[30px] mb-[22px]">
        <h2 className="text-blue-950 text-lg font-semibold box-border caret-transparent leading-[25.2px] min-h-[auto] min-w-[auto] outline-[3px] mb-2 font-brandon_grotesque">
          {props.title}
        </h2>
        <p className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-4">
          {props.description}
        </p>
        <a
          href={props.href}
          aria-label={props.ariaLabel}
          className="text-purple-800 text-[14.4px] font-semibold box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] text-right uppercase align-middle border bg-[position:0px_0px] mt-auto rounded-[50px] border-solid border-transparent after:accent-auto after:box-border after:caret-transparent after:text-purple-800 after:text-[14.4px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[14.4px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-right after:no-underline after:indent-[0px] after:uppercase after:visible after:pl-[5px] after:border-separate after:font-font_awesome_6_pro"
        >
          {props.linkText}
        </a>
      </div>
    </div>
  );
};
