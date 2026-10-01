export type NewsEventTabsTab = {
  href: string;
  listItemClassName: string;
  linkClassName: string;
  title: string;
};

export type NewsEventTabsPanel = {
  panelClassName: string;
  contentClassName: string;
  title?: string;
  description: string;
  descriptionClassName: string;
  linkHref: string;
  linkAriaLabel: string;
  linkText: string;
  imageClassName: string;
  useNestedContentWrapper?: boolean;
  useNestedDescriptionWrapper?: boolean;
  useNestedLinkWrapper?: boolean;
};

export type NewsEventTabsProps = {
  containerClassName: string;
  tabListClassName: string;
  tabs: NewsEventTabsTab[];
  panels: NewsEventTabsPanel[];
};

export const NewsEventTabs = (props: NewsEventTabsProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className={props.containerClassName}>
          <ul role="tablist" className={props.tabListClassName}>
            {props.tabs.map((tab) => (
              <li
                key={tab.href}
                role="presentation"
                className={tab.listItemClassName}
              >
                <a href={tab.href} role="tab" className={tab.linkClassName}>
                  <h3 className="text-neutral-700 text-[18.4px] font-semibold box-border caret-transparent leading-[18.4px] max-w-none outline-[3px] text-start text-clip text-wrap overflow-visible m-0 font-brandon_grotesque md:text-stone-800 md:text-[17.6px] md:leading-[24.64px] md:max-w-[276px] md:text-center md:text-ellipsis md:text-nowrap md:overflow-hidden md:m-auto">
                    {tab.title}
                  </h3>
                </a>
              </li>
            ))}
          </ul>
          <div className="text-black bg-transparent box-content caret-black outline-0 border-b-0 border-x-0 md:text-neutral-950 md:aspect-auto md:bg-white md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border-zinc-400 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:border-b md:border-l md:border-r">
            {props.panels.map((panel) => (
              <div
                key={panel.linkHref}
                role="tabpanel"
                className={panel.panelClassName}
              >
                <div className={panel.contentClassName}>
                  {panel.title ? (
                    <div className="box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc">
                      <h3 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-[33.6px] list-none outline-[3px] mb-2 font-brandon_grotesque md:list-disc">
                        {panel.title}
                      </h3>
                    </div>
                  ) : null}
                  <div className="box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc">
                    {panel.useNestedDescriptionWrapper ? (
                      <div className="box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc">
                        <p className={panel.descriptionClassName}>
                          {panel.description}
                        </p>
                      </div>
                    ) : (
                      <p className={panel.descriptionClassName}>
                        {panel.description}
                      </p>
                    )}
                  </div>
                  <div className="box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc">
                    {panel.useNestedLinkWrapper ? (
                      <div className="box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc">
                        <a
                          href={panel.linkHref}
                          aria-label={panel.linkAriaLabel}
                          className="text-purple-800 font-bold box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc"
                        >
                          {panel.linkText}
                        </a>
                      </div>
                    ) : (
                      <a
                        aria-label={panel.linkAriaLabel}
                        href={panel.linkHref}
                        className="text-purple-800 font-bold box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc"
                      >
                        {panel.linkText}
                      </a>
                    )}
                  </div>
                </div>
                <div className={panel.imageClassName}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
