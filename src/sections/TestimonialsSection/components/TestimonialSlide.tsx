export type TestimonialSlideProps = {
  isActive: string;
  quote: string;
  quoteVariant: string;
  author: string;
};

export const TestimonialSlide = (props: TestimonialSlideProps) => {
  return (
    <li
      className={`absolute box-border caret-transparent h-[300px] outline-[3px] w-full md:h-[250px] ${props.isActive}`}
    >
      <figure className="box-border caret-transparent h-full outline-[3px]">
        <figcaption className="absolute text-white bg-white bg-[url('https://www.unifyfcu.com/sites/default/themes/unify/images/quotation-mark.svg')] bg-no-repeat bg-size-[30px] box-border caret-transparent h-[30px] min-w-full object-cover outline-[3px] w-[30px] inset-y-0 md:bg-size-[75px] md:h-[300px] md:w-[300px]">
          <div className="box-border caret-transparent flex flex-wrap h-full outline-[3px]">
            <div className="box-border caret-transparent shrink-0 outline-[3px] w-full">
              <div
                className={`text-stone-800 text-[19.2px] font-light box-border caret-transparent tracking-[0.15px] leading-[21.12px] outline-[3px] ml-8 mt-3 font-brandon_grotesque md:text-2xl md:leading-[26.4px] md:ml-[75px] md:mt-6 after:accent-auto after:box-border after:caret-transparent after:text-stone-800 after:hidden after:text-[19.2px] after:not-italic after:normal-nums after:font-light after:tracking-[0.15px] after:leading-[21.12px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:-mt-3 after:border-separate after:right-2 after:font-brandon_grotesque after:md:block after:md:text-2xl after:md:leading-[26.4px] ${props.quoteVariant}`}
              >
                {props.quote}
              </div>
              <div className="text-stone-800 text-[17.6px] font-light box-border caret-transparent leading-[28.16px] max-w-full outline-[3px] text-left ml-8 mr-[100px] mt-4 font-brandon_grotesque md:text-right md:ml-0 md:mt-0">
                {props.author}
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};
