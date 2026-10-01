export type BankingProductCardProps = {
  href: string;
  ariaLabel: string;
  imageUrl: string;
  imageAlt: string;
  imageVariant: string;
  title: string;
};

export const BankingProductCard = (props: BankingProductCardProps) => {
  return (
    <div className="box-border caret-transparent grow shrink-0 outline-[3px] text-center w-[33.3333%] p-2.5 md:w-[14.2857%] md:p-[15px]">
      <a
        href={props.href}
        aria-label={props.ariaLabel}
        className="text-purple-800 font-bold box-border caret-transparent outline-[3px]"
      >
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]">
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className={`box-border caret-transparent inline-block h-[60px] max-w-[80%] min-h-px object-contain outline-[3px] ${props.imageVariant}`}
              />
            </div>
          </div>
          <h2 className="text-[15px] font-normal box-border caret-transparent leading-[21px] outline-[3px] mt-3 mb-2 font-brandon_grotesque md:text-lg md:leading-[25.2px]">
            {props.title}
          </h2>
        </div>
      </a>
    </div>
  );
};
