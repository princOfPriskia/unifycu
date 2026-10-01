export type FooterSocialLinksProps = {
  containerVariant: string;
  hasInnerWrapper: boolean;
  innerWrapperClassName: string;
  listClassName: string;
  links: {
    href: string;
    anchorClassName: string;
    iconClassName: string;
    iconRole?: string;
  }[];
};

export const FooterSocialLinks = (props: FooterSocialLinksProps) => {
  const listElement = (
    <ul className={props.listClassName}>
      {props.links.map((link) => (
        <li
          key={link.href}
          className="box-border caret-transparent inline-block outline-[3px]"
        >
          <a href={link.href} className={link.anchorClassName}>
            <i role={link.iconRole} className={link.iconClassName}></i>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`box-border caret-transparent shrink-0 outline-[3px] text-start w-[calc(100%_-_20px)] mx-2.5 md:text-left md:w-[calc(25%_-_30px)] md:mx-[15px] ${props.containerVariant}`}
    >
      {props.hasInnerWrapper ? (
        <div className={props.innerWrapperClassName}>{listElement}</div>
      ) : (
        listElement
      )}
    </div>
  );
};
