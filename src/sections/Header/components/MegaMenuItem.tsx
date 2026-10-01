export type MegaMenuItemLink = {
  label: string;
  href: string;
  title?: string;
};

export type MegaMenuItemSection = {
  title: string;
  links: MegaMenuItemLink[];
};

export type MegaMenuItemImage = {
  src: string;
  alt: string;
};

export type MegaMenuItemProps = {
  label: string;
  sections: MegaMenuItemSection[];
  image?: MegaMenuItemImage;
};

export const MegaMenuItem = (props: MegaMenuItemProps) => {
  return (
    <li
      role="none"
      aria-label={props.label}
      className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
    >
      <button
        role="menuitem"
        type="button"
        className="appearance-none text-white text-[18.4px] font-bold bg-transparent box-content caret-transparent block leading-[18.4px] outline-[3px] text-left uppercase bg-[position:0px_0px] px-[15px] py-7 font-brandon_grotesque md:px-[30px] hover:text-sky-400 hover:bg-black/30 hover:border-sky-400"
      >
        {props.label}
      </button>
      <ul
        role="menu"
        className="box-border caret-transparent hidden outline-[3px] pl-0"
      >
        {props.sections.map((section) => (
          <li
            role="none"
            className="box-border caret-transparent outline-[3px]"
            key={section.title}
          >
            <h2 className="text-blue-950 text-4xl box-border caret-transparent leading-[50.4px] outline-[3px] mb-2 font-brandon_grotesque">
              {section.title}
            </h2>
            <ul
              role="menu"
              className="box-border caret-transparent outline-[3px] pl-0"
            >
              {section.links.map((link) => (
                <li
                  role="none"
                  title={link.title}
                  className="box-border caret-transparent outline-[3px]"
                  key={`${section.title}-${link.href}-${link.label}`}
                >
                  <a
                    role="menuitem"
                    href={link.href}
                    className="text-purple-800 caret-transparent block leading-4 outline-[3px] text-left w-[calc(100%_-_30px)] px-[15px] py-2.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {props.image ? (
          <li
            role="none"
            className="box-border caret-transparent outline-[3px]"
          >
            <div className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="box-border caret-transparent justify-center outline-[3px] text-center w-full mx-auto py-[25px]">
                    <img
                      src={props.image.src}
                      alt={props.image.alt}
                      className="aspect-[auto_500_/_335] box-border caret-transparent inline-block max-w-full min-h-px object-contain outline-[3px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ) : null}
      </ul>
    </li>
  );
};
