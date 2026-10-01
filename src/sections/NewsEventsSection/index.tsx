import { NewsEventsFilters } from "@/sections/NewsEventsSection/components/NewsEventsFilters";
import { NewsEventTabs } from "@/sections/NewsEventsSection/components/NewsEventTabs";

export const NewsEventsSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] pb-10 md:pb-[50px]">
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-[22px] my-0 px-2.5 md:m-auto md:px-[15px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent flex flex-wrap outline-[3px]">
            <div className="box-border caret-transparent shrink-0 outline-[3px] w-full md:w-6/12">
              <h2 className="text-blue-950 text-4xl font-light box-border caret-transparent leading-9 outline-[3px] mb-5 font-brandon_grotesque md:mb-[50px] after:accent-auto after:border-b-blue-950 after:border-l-blue-950 after:border-r-blue-950 after:border-t-yellow-500 after:box-border after:caret-transparent after:text-blue-950 after:block after:text-4xl after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-9 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[60px] after:mt-[5px] after:mb-5 after:border-t-2 after:border-separate after:font-brandon_grotesque">
                News &amp; Events
              </h2>
            </div>
            <NewsEventsFilters />
          </div>
          <NewsEventTabs
            containerClassName="box-border caret-transparent hidden outline-[3px]"
            tabListClassName="bg-white box-border caret-transparent block leading-[25.6px] list-none outline-[3px] border-stone-800 mb-4 pl-0 border-0 border-none md:flex md:border md:border-zinc-400 md:mb-0 md:border-solid before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-stone-800 before:md:table before:md:basis-0 before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[25.6px] before:md:list-outside before:md:list-none before:md:order-1 before:md:outline-[3px] before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-calibri after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-stone-800 after:md:table after:md:basis-0 after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[25.6px] after:md:list-outside after:md:list-none after:md:order-1 after:md:outline-[3px] after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-start after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:normal-case after:md:underline-offset-auto after:md:visible after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-calibri"
            tabs={[
              {
                href: "#0orzth-accordion",
                listItemClassName:
                  "border-b-stone-800 border-l-purple-800 border-r-stone-800 border-t-stone-800 box-border caret-transparent basis-auto grow-0 float-none outline-[3px] text-start border-l-[7px] md:border-l-stone-800 md:basis-[0%] md:grow md:float-left md:text-center md:border-l-0",
                linkClassName:
                  "relative text-sky-600 text-xs font-bold bg-white border-b-zinc-300 border-l-zinc-300 border-r-zinc-300 border-t-zinc-300 shadow-none box-border caret-transparent block leading-3 outline-[3px] text-start pl-4 pr-6 py-4 border-l border-r border-t md:static md:bg-neutral-100 md:border-b-sky-600 md:border-l-sky-600 md:border-r-sky-600 md:border-t-yellow-500 md:shadow-[rgba(86,134,218,0.5)_0px_-1px_3px_0px_inset] md:text-center md:px-[5px] md:py-[15px] md:border-t-[5px] md:border-x-0 hover:text-sky-700",
                title: "Way to go UNIFY! 300K Members!",
              },
            ]}
            panels={[
              {
                panelClassName:
                  "bg-white box-border caret-transparent block leading-[25.6px] list-none outline-[3px] border border-zinc-300 p-4 border-solid md:bg-transparent md:flex md:leading-6 md:list-disc md:border-neutral-950 md:p-0 md:border-0 md:border-none",
                contentClassName:
                  "bg-none bg-repeat border-b-neutral-950 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 box-border caret-transparent leading-[25.6px] list-none max-w-none outline-[3px] bg-left-top p-0 border-r-0 md:bg-[url('https://www.unifyfcu.com/sites/default/themes/unify/images/logomark-top-half.png')] md:bg-no-repeat md:border-r-zinc-400 md:leading-6 md:list-disc md:max-w-[396px] md:bg-[position:80%_100%] md:pt-9 md:pb-[120px] md:px-9 md:border-r",
                description:
                  "Congratulations to our newest members, Angelo and Frieda, for helping us pass the 300K member mark! We surprised them with 300 reasons and a special bonus deposit to welcome them to UNIFY as our 300K member!",
                descriptionClassName:
                  "text-neutral-950 font-light box-border caret-transparent leading-[25.6px] list-none outline-[3px] mb-4 md:text-stone-800 md:font-normal md:list-disc",
                linkHref: "/300kMember",
                linkAriaLabel:
                  "Learn more about Way to go UNIFY! 300K Members!",
                linkText: "Learn More",
                imageClassName:
                  "bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/unify_300k_member-news_events_585_300_px.png?VersionId=NAfLFABB0DMJ5E5q43.wIZXrzqTa6xEL')] bg-repeat bg-auto box-border caret-transparent basis-auto grow-0 leading-[25.6px] list-none outline-[3px] bg-left-top md:bg-no-repeat md:bg-cover md:basis-[0%] md:grow md:leading-6 md:list-disc md:bg-center",
                useNestedDescriptionWrapper: true,
                useNestedLinkWrapper: true,
              },
            ]}
          />
          <NewsEventTabs
            containerClassName="box-border caret-transparent outline-[3px]"
            tabListClassName="bg-white box-border caret-transparent block leading-[25.6px] list-none outline-[3px] border-stone-800 mb-4 pl-0 border-0 border-none md:flex md:border md:border-zinc-400 md:mb-0 md:border-solid before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-stone-800 before:md:table before:md:basis-0 before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[25.6px] before:md:list-outside before:md:list-none before:md:min-h-[auto] before:md:min-w-[auto] before:md:order-1 before:md:outline-[3px] before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-calibri after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-stone-800 after:md:table after:md:basis-0 after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[25.6px] after:md:list-outside after:md:list-none after:md:min-h-[auto] after:md:min-w-[auto] after:md:order-1 after:md:outline-[3px] after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-start after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:normal-case after:md:underline-offset-auto after:md:visible after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-calibri"
            tabs={[
              {
                href: "#i1kg0c-accordion",
                listItemClassName:
                  "border-b-stone-800 border-l-purple-800 border-r-stone-800 border-t-stone-800 box-border caret-transparent basis-auto grow-0 float-none min-h-0 min-w-0 outline-[3px] text-start border-l-[7px] border-r-0 md:border-l-stone-800 md:border-r-zinc-400 md:basis-[0%] md:grow md:float-left md:min-h-[auto] md:min-w-[auto] md:text-center md:border-l-0 md:border-r",
                linkClassName:
                  "relative text-sky-600 text-xs font-bold bg-white border-b-zinc-300 border-l-zinc-300 border-r-zinc-300 border-t-zinc-300 shadow-none box-border caret-transparent block leading-3 outline-[3px] text-start pl-4 pr-6 py-4 border-l border-r border-t md:static md:bg-neutral-100 md:border-b-sky-600 md:border-l-sky-600 md:border-r-sky-600 md:border-t-yellow-500 md:shadow-[rgba(86,134,218,0.5)_0px_-1px_3px_0px_inset] md:text-center md:px-[5px] md:py-[15px] md:border-t-[5px] md:border-x-0 hover:text-sky-700",
                title:
                  "Investment and Cryptocurrency Scams: Red Flags to Watch For",
              },
              {
                href: "#87ldib-accordion",
                listItemClassName:
                  "border-b-stone-800 border-l-slate-500 border-r-stone-800 border-t-stone-800 box-border caret-transparent basis-auto grow-0 float-none min-h-0 min-w-0 outline-[3px] text-start border-l-[7px] border-r-0 md:border-l-stone-800 md:border-r-zinc-400 md:basis-[0%] md:grow md:float-left md:min-h-[auto] md:min-w-[auto] md:text-center md:border-l-0 md:border-r",
                linkClassName:
                  "relative text-sky-600 text-xs font-bold bg-neutral-100 border-b-zinc-300 border-l-zinc-300 border-r-zinc-300 border-t-zinc-300 shadow-none box-border caret-transparent block leading-3 outline-[3px] text-start pl-4 pr-6 py-4 border-l border-r border-t md:static md:bg-neutral-100 md:border-b-sky-600 md:border-l-sky-600 md:border-r-sky-600 md:border-t-slate-500 md:shadow-[rgba(86,134,218,0.5)_0px_-1px_3px_0px_inset] md:text-center md:px-[5px] md:py-[15px] md:border-t-[5px] md:border-x-0 hover:text-sky-700 hover:border-b-sky-700 hover:border-l-sky-700 hover:border-r-sky-700",
                title:
                  "Protecting Your Credit Card: Understanding RFID and Contactless Security",
              },
              {
                href: "#tmncaw-accordion",
                listItemClassName:
                  "border-b-stone-800 border-l-slate-500 border-r-stone-800 border-t-stone-800 box-border caret-transparent basis-auto grow-0 float-none min-h-0 min-w-0 outline-[3px] text-start border-l-[7px] border-r-0 md:border-l-stone-800 md:border-r-zinc-400 md:basis-[0%] md:grow md:float-left md:min-h-[auto] md:min-w-[auto] md:text-center md:border-l-0 md:border-r",
                linkClassName:
                  "relative text-sky-600 text-xs font-bold bg-neutral-100 border-b-zinc-300 border-l-zinc-300 border-r-zinc-300 border-t-zinc-300 shadow-none box-border caret-transparent block leading-3 outline-[3px] text-start pl-4 pr-6 py-4 border-l border-r border-t md:static md:bg-neutral-100 md:border-b-sky-600 md:border-l-sky-600 md:border-r-sky-600 md:border-t-slate-500 md:shadow-[rgba(86,134,218,0.5)_0px_-1px_3px_0px_inset] md:text-center md:px-[5px] md:py-[15px] md:border-t-[5px] md:border-x-0 hover:text-sky-700 hover:border-b-sky-700 hover:border-l-sky-700 hover:border-r-sky-700",
                title: "Smart Money Tips for Teens and College Students",
              },
              {
                href: "#ack2fc-accordion",
                listItemClassName:
                  "border-b-stone-800 border-l-slate-500 border-r-stone-800 border-t-stone-800 box-border caret-transparent basis-auto grow-0 float-none min-h-0 min-w-0 outline-[3px] text-start border-l-[7px] md:border-l-stone-800 md:basis-[0%] md:grow md:float-left md:min-h-[auto] md:min-w-[auto] md:text-center md:border-l-0",
                linkClassName:
                  "relative text-sky-600 text-xs font-bold bg-neutral-100 border-b-zinc-300 border-l-zinc-300 border-r-zinc-300 border-t-zinc-300 shadow-none box-border caret-transparent block leading-3 outline-[3px] text-start pl-4 pr-6 py-4 border-b border-l border-r border-t md:static md:bg-neutral-100 md:border-b-sky-600 md:border-l-sky-600 md:border-r-sky-600 md:border-t-slate-500 md:shadow-[rgba(86,134,218,0.5)_0px_-1px_3px_0px_inset] md:text-center md:px-[5px] md:py-[15px] md:border-t-[5px] md:border-b-0 md:border-x-0 hover:text-sky-700 hover:border-b-sky-700 hover:border-l-sky-700 hover:border-r-sky-700",
                title: "10 Scams to Watch for in 2026",
              },
            ]}
            panels={[
              {
                panelClassName:
                  "bg-white box-border caret-transparent block leading-[25.6px] list-none outline-[3px] border-zinc-300 p-4 border-l border-r border-t md:bg-transparent md:flex md:leading-6 md:list-disc md:border-neutral-950 md:p-0 md:border-t-0 md:border-x-0",
                contentClassName:
                  "bg-none bg-repeat border-b-neutral-950 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 box-border caret-transparent leading-[25.6px] list-none max-w-none min-h-0 min-w-0 outline-[3px] bg-left-top p-0 border-r-0 md:bg-[url('https://www.unifyfcu.com/sites/default/themes/unify/images/logomark-top-half.png')] md:bg-no-repeat md:border-r-zinc-400 md:leading-6 md:list-disc md:max-w-[396px] md:min-h-[auto] md:min-w-[auto] md:bg-[position:80%_100%] md:pt-9 md:pb-[120px] md:px-9 md:border-r",
                title:
                  "Investment and Cryptocurrency Scams: Red Flags to Watch For",
                description:
                  "Online investment opportunities have expanded rapidly in recent years, especially in the world of cryptocurrency and digital assets. While many legitimate investment platforms exist, scammers increasingly use…",
                descriptionClassName:
                  "text-neutral-950 font-light box-border caret-transparent leading-[25.6px] list-none outline-[3px] mb-4 md:text-stone-800 md:font-normal md:list-disc",
                linkHref:
                  "/financial-education/investment-cryptocurrency-scams-red-flags",
                linkAriaLabel: " Red Flags to Watch For",
                linkText: "Read more",
                imageClassName:
                  "bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/fraudawareness_585x300_q2_apr2026_cryptoscams.jpg?VersionId=BIsEbeA.QEFP7LPtYhWi8oCL3I.1N8bt')] bg-repeat bg-auto box-border caret-transparent basis-auto grow-0 leading-[25.6px] list-none min-h-0 min-w-0 outline-[3px] bg-left-top md:bg-no-repeat md:bg-cover md:basis-[0%] md:grow md:leading-6 md:list-disc md:min-h-[auto] md:min-w-[auto] md:bg-center",
              },
              {
                panelClassName:
                  "bg-white box-border caret-transparent hidden leading-[25.6px] list-none outline-[3px] border-zinc-300 p-4 border-l border-r border-t md:bg-transparent md:leading-6 md:list-disc md:border-neutral-950 md:p-0 md:border-t-0 md:border-x-0",
                contentClassName:
                  "box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc",
                title:
                  "Protecting Your Credit Card: Understanding RFID and Contactless Security",
                description:
                  "Contactless credit cards have become increasingly popular because they make everyday purchases faster and more convenient. With a simple tap, members can complete transactions at grocery stores, gas stations,…",
                descriptionClassName:
                  "font-light box-border caret-transparent leading-[25.6px] list-none outline-[3px] mb-4 md:font-normal md:list-disc",
                linkHref: "/financial-education/protecting-your-credit%20card",
                linkAriaLabel: " Understanding RFID and Contactless Security",
                linkText: "Read more",
                imageClassName:
                  "bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/fraudawareness_585x300_q2_apr2026_creditcard.jpg?VersionId=Fj3mLC7jGTxDZeUc.DgbK3d6kNu1TerM')] box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc",
              },
              {
                panelClassName:
                  "bg-white box-border caret-transparent hidden leading-[25.6px] list-none outline-[3px] border-zinc-300 p-4 border-l border-r border-t md:bg-transparent md:leading-6 md:list-disc md:border-neutral-950 md:p-0 md:border-t-0 md:border-x-0",
                contentClassName:
                  "box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc",
                title: "Smart Money Tips for Teens and College Students",
                description:
                  "Starting college or entering adulthood often comes with new financial responsibilities — opening bank accounts, using credit, paying bills, and managing money independently for the first time. Learning how to…",
                descriptionClassName:
                  "font-light box-border caret-transparent leading-[25.6px] list-none outline-[3px] mb-4 md:font-normal md:list-disc",
                linkHref:
                  "/financial-education/smart-money-tips-for-teens-and-college-students",
                linkAriaLabel:
                  "Read more Smart Money Tips for Teens and College Students",
                linkText: "Read more",
                imageClassName:
                  "bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/fraudawareness_585x300_q2_apr2026_moneytips.jpg?VersionId=2oELlbddrzz2MnYd_Qm9.FKulWZ.ROGD')] box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc",
              },
              {
                panelClassName:
                  "bg-white box-border caret-transparent hidden leading-[25.6px] list-none outline-[3px] border border-zinc-300 p-4 border-solid md:bg-transparent md:leading-6 md:list-disc md:border-neutral-950 md:p-0 md:border-0 md:border-none",
                contentClassName:
                  "box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc",
                title: "10 Scams to Watch for in 2026",
                description:
                  "Fraudsters constantly adapt their tactics, using new technologies and social engineering techniques to trick people into giving up money or personal information. Staying aware of common scams is one of the best…",
                descriptionClassName:
                  "font-light box-border caret-transparent leading-[25.6px] list-none outline-[3px] mb-4 md:font-normal md:list-disc",
                linkHref: "/financial-education/scams-to-watch-for-in-2026",
                linkAriaLabel: "Read more 10 Scams to Watch for in 2026",
                linkText: "Read more",
                imageClassName:
                  "bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/fraudawareness_585x300_q2_apr2026_topscams.jpg?VersionId=yc0GfANNXoVE4kjZqBPqyXTe5wBBbCFl')] box-border caret-transparent leading-[25.6px] list-none outline-[3px] md:leading-6 md:list-disc",
              },
            ]}
          />
          <div className="box-border caret-transparent gap-x-[15px] flex shrink-0 justify-between outline-[3px] text-right w-full mt-[30px] md:gap-x-[normal] md:block md:justify-normal">
            <a
              href="/events"
              className="text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center uppercase align-middle w-6/12 border mr-0 mb-4 px-7 py-3 rounded-[50px] border-solid border-transparent md:inline-block md:min-h-0 md:min-w-0 md:w-auto md:mr-[15px] hover:bg-purple-900"
            >
              All Events
            </a>
            <a
              href="/news"
              className="text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center uppercase align-middle w-6/12 border ml-0 mb-4 px-7 py-3 rounded-[50px] border-solid border-transparent md:inline-block md:min-h-0 md:min-w-0 md:w-auto md:ml-[15px] hover:bg-purple-900"
            >
              All News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
