export type RecognitionCardProps = {
  href: string;
  ariaLabel: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export const RecognitionCard = (props: RecognitionCardProps) => {
  return (
    <a
      href={props.href}
      aria-label={props.ariaLabel}
      className="text-purple-800 font-bold box-border caret-transparent block float-left h-full min-h-px outline-[3px] w-[181px] md:w-52"
    >
      <div className="box-border caret-transparent outline-[3px] mx-4">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="aspect-[auto_350_/_350] box-border caret-transparent max-w-full min-h-px object-contain outline-[3px]"
            />
          </div>
        </div>
        <p className="text-black box-border caret-transparent leading-[25.6px] outline-[3px] text-center my-3.5">
          {props.title}
        </p>
      </div>
    </a>
  );
};
