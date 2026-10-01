import { MegaMenuItem } from "@/sections/Header/components/MegaMenuItem";

export const MainNavigation = () => {
  return (
    <div className="relative bg-stone-800 border-b-sky-400 border-l-stone-800 border-r-stone-800 border-t-stone-800 box-border caret-transparent outline-[3px] border-b-[5px]">
      <div className="relative box-border caret-transparent max-w-[1200px] outline-[3px] mx-auto px-2.5 md:px-[15px]">
        <nav className="relative box-border caret-transparent outline-[3px]">
          <ul
            role="menubar"
            className="relative box-border caret-transparent flex flex-wrap leading-[25.6px] list-none outline-[3px] pl-0"
          >
            <MegaMenuItem
              label="Membership"
              sections={[
                {
                  title: "Meet UNIFY",
                  links: [
                    { label: "UNIFY Story", href: "/meet-unify" },
                    { label: "Why Join", href: "/unify-membership" },
                    {
                      label: "Become A Member",
                      href: "/unify-membership#member",
                    },
                    {
                      label: "Credit Unions vs. Banks",
                      href: "/credit-unions-vs-banks",
                    },
                  ],
                },
                {
                  title: "News",
                  links: [
                    { label: "Merger Updates", href: "/forward" },
                    { label: "Promotions", href: "/promotions" },
                  ],
                },
                {
                  title: "Refer-A-Friend",
                  links: [{ label: "Rewardiness", href: "/refer-a-friend" }],
                },
                {
                  title: "Community",
                  links: [
                    { label: "News", href: "/news" },
                    { label: "Events", href: "/events" },
                    {
                      label: "Holiday Schedule",
                      href: "/unify-holiday-schedule",
                    },
                  ],
                },
              ]}
            />
            <MegaMenuItem
              label="Personal Banking"
              sections={[
                {
                  title: "Banking Accounts",
                  links: [
                    { label: "Savings Accounts", href: "/savings-accounts" },
                    { label: "Checking Accounts", href: "/checking-accounts" },
                    {
                      label: "Certificate & IRA Accounts",
                      href: "/certificate-accounts",
                    },
                  ],
                },
                {
                  title: "Loans ",
                  links: [
                    { label: "Auto Loans", href: "/auto-loans" },
                    {
                      label: "RV, Boat & Motorcycle Loans",
                      href: "/rv-boat-motorcycle-loans",
                    },
                    { label: "Credit Cards", href: "/credit-cards" },
                    { label: "Personal Loans", href: "/personal-loans" },
                    { label: "Short-Term Loans", href: "/short-term-loans" },
                    { label: "Secured Loans", href: "/secured-loans" },
                  ],
                },
                {
                  title: "Home Loans",
                  links: [
                    { label: "Mortgages", href: "/home-loans" },
                    { label: "Home Refinance", href: "/home-loan-refinance" },
                    {
                      label: "Home Equity Loans & Lines",
                      href: "/home-equity-loans",
                    },
                    {
                      label: "Mortgage Calculators",
                      href: "/mortgage-calculator",
                    },
                    {
                      label: "Foreclosure Avoidance",
                      href: "/foreclosure-avoidance",
                    },
                  ],
                },
                {
                  title: "Digital Services",
                  links: [
                    {
                      label: "Online eBanking",
                      href: "/digital-online-banking",
                    },
                    {
                      label: "Mobile Banking App",
                      href: "/digital-online-banking",
                    },
                    { label: "Payment Options", href: "/payment-services" },
                    { label: "Transfer Funds", href: "/transfer-funds" },
                    { label: "Zelle", href: "/zelle", title: "Zelle" },
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    {
                      label: "Financial Education",
                      href: "/financial-education-resources",
                    },
                    {
                      label: "Financial Calculators",
                      href: "/financial-calculators",
                    },
                    {
                      label: "FAQs",
                      href: "/frequently-asked-questions-faqs",
                      title: "FAQs",
                    },
                    { label: "Merger Updates", href: "/forward" },
                  ],
                },
              ]}
            />
            <MegaMenuItem
              label="Investments & Insurance"
              sections={[
                {
                  title: "Investments",
                  links: [
                    {
                      label: "Investments",
                      href: "/Investments",
                    },
                  ],
                },
                {
                  title: "Insurance",
                  links: [
                    {
                      label: "Insurance",
                      href: "/insurance",
                    },
                  ],
                },
              ]}
              image={{
                src: "https://c.animaapp.com/mp6ve6ukPxqINY/assets/14.webp",
                alt: "Couple on couch looking at phone together",
              }}
            />
          </ul>
        </nav>
        <div className="absolute box-border caret-transparent outline-[3px] transform-none right-[15px] top-2/4 md:translate-y-[-50.0%]">
          <button
            type="button"
            className="appearance-none text-white bg-transparent caret-transparent leading-4 outline-[3px] text-center bg-[position:0px_0px] p-0"
          >
            <i
              role="presentation"
              className="font-black box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};
