import { FooterNavigation } from "@/sections/Footer/components/FooterNavigation";
import { FooterSocialLinks } from "@/sections/Footer/components/FooterSocialLinks";
import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterCompliance } from "@/sections/Footer/components/FooterCompliance";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="text-white bg-stone-800 bg-[url('https://www.unifyfcu.com/sites/default/themes/unify/images/knot-footer.png')] bg-no-repeat bg-auto box-border caret-transparent outline-[3px] bg-[position:150%_10%] pt-[50px] md:bg-size-[auto_270px] md:bg-[position:-135px_50%]">
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-auto px-2.5 md:px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] text-start -mx-2.5 md:ml-[-15px] md:mr-[-15px] md:text-left">
          <FooterNavigation />
          <FooterSocialLinks
            containerVariant="my-[30px] md:my-0"
            hasInnerWrapper={false}
            innerWrapperClassName=""
            listClassName="box-border caret-transparent leading-[25.6px] list-none outline-[3px] text-center ml-5 pl-0"
            links={[
              {
                href: "https://www.facebook.com/UNIFYfinancial/",
                anchorClassName:
                  "text-2xl font-bold box-border caret-transparent leading-6 outline-[3px] mr-6",
                iconClassName:
                  "font-normal box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands",
              },
              {
                href: "https://www.instagram.com/unify_financial/",
                anchorClassName:
                  "text-2xl font-bold box-border caret-transparent leading-6 outline-[3px] mr-6",
                iconClassName:
                  "font-normal box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands",
              },
              {
                href: "https://www.linkedin.com/company/unify-financial-credit-union",
                anchorClassName:
                  "text-2xl font-bold box-border caret-transparent leading-6 outline-[3px] mr-6",
                iconClassName:
                  "font-normal box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands",
              },
              {
                href: "https://twitter.com/unifyfcu/",
                anchorClassName:
                  "text-2xl font-bold box-border caret-transparent leading-6 outline-[3px] mr-6",
                iconClassName:
                  "font-normal box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands",
              },
              {
                href: "https://www.youtube.com/UNIFYFinancialCreditUnion/",
                anchorClassName:
                  "text-2xl font-bold box-border caret-transparent leading-6 outline-[3px] mr-6",
                iconClassName:
                  "font-normal box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands",
              },
            ]}
          />
          <FooterNewsletter />
          <FooterSocialLinks
            containerVariant="hidden mt-[30px] mb-5 md:block"
            hasInnerWrapper={true}
            innerWrapperClassName="box-border caret-transparent flex flex-wrap outline-[3px] text-start md:text-left"
            listClassName="box-border caret-transparent leading-[25.6px] list-none min-h-0 min-w-0 outline-[3px] text-center ml-5 pl-0 md:min-h-[auto] md:min-w-[auto]"
            links={[
              {
                href: "https://apps.apple.com/us/app/unify-financial-credit-union/id1143082572?platform=iphone",
                anchorClassName:
                  "text-[32px] font-bold box-border caret-transparent leading-8 outline-[3px] mr-6",
                iconClassName:
                  "font-normal box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[32px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-8 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands",
                iconRole: "presentation",
              },
              {
                href: "https://play.google.com/store/apps/details?id=com.westernfederalcreditunion5103.mobile.production&gl=US",
                anchorClassName:
                  "text-2xl font-bold box-border caret-transparent leading-6 outline-[3px] mr-6",
                iconClassName:
                  "font-normal box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_brands before:accent-auto before:box-border before:caret-transparent before:text-white before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_brands",
                iconRole: "presentation",
              },
            ]}
          />
          <FooterCompliance />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};
