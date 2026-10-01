export type HeroSlideProps = {
  listItemClassName: string;
  figcaptionClassName: string;
  title: React.ReactNode;
  secondaryContent?: React.ReactNode;
  secondaryElement: string;
  href: string;
  linkAriaLabel?: string;
  linkText: string;
  presentationClassName: string;
};

export const HeroSlide = (props: HeroSlideProps) => {
  return (
    <li
      className={`absolute bg-white box-border caret-transparent h-[446px] min-h-[500px] outline-[3px] w-full md:min-h-0 after:accent-auto after:bg-[position:0px_0px] after:box-border after:caret-transparent after:text-stone-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-calibri ${props.listItemClassName}`}
    >
      <div className="box-border caret-transparent flex flex-wrap max-w-[1200px] outline-[3px] mx-auto px-0 md:px-[15px]">
        <div className="box-border caret-transparent shrink-0 order-2 outline-[3px] w-full p-4 md:order-1 md:w-6/12 md:p-0">
          <figure className="relative box-border caret-transparent h-full outline-[3px]">
            <figcaption
              className={`absolute text-white bg-white/80 box-border caret-transparent max-w-full outline-[3px] w-full z-10 mt-0 p-4 left-auto top-2/4 md:bg-transparent md:w-auto md:mt-10 md:p-0 md:left-[15%] ${props.figcaptionClassName}`}
            >
              <h2 className="text-stone-800 text-[38px] font-bold box-border caret-transparent leading-[41.8px] outline-[3px] mb-3 font-brandon_grotesque md:text-7xl md:leading-[79.2px] md:mb-2">
                {props.title}
              </h2>
              {props.secondaryContent !== undefined &&
                (props.secondaryElement === "p" ? (
                  <p className="text-stone-800 text-2xl font-light box-border caret-transparent leading-9 outline-[3px] mb-4 font-brandon_grotesque">
                    {props.secondaryContent}
                  </p>
                ) : (
                  <h2 className="text-stone-800 text-[28.8px] font-normal box-border caret-transparent leading-[31.68px] outline-[3px] my-3 font-brandon_grotesque md:text-[40px] md:font-light md:leading-[44px] md:mt-9 md:mb-2">
                    {props.secondaryContent}
                  </h2>
                ))}
              <a
                href={props.href}
                aria-label={props.linkAriaLabel}
                className="text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent inline-block leading-[14.4px] outline-[3px] text-center uppercase align-middle border mb-4 px-7 py-3 rounded-[50px] border-solid border-transparent hover:bg-purple-900"
              >
                {props.linkText}
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="box-border caret-transparent shrink-0 order-1 outline-[3px] w-full md:order-2 md:w-6/12">
          <div
            role="presentation"
            className={`bg-cover box-border caret-transparent max-w-full min-h-[400px] outline-[3px] w-full bg-center md:min-h-[446px] ${props.presentationClassName}`}
          ></div>
        </div>
      </div>
    </li>
  );
};
