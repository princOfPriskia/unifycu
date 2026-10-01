import { RecognitionCard } from "@/sections/RecognitionSection/components/RecognitionCard";

export const RecognitionSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-[22px] px-2.5 md:mx-auto md:px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px]">
          <div className="box-border caret-transparent shrink-0 outline-[3px] w-full">
            <div className="box-border caret-transparent outline-[3px]">
              <h2 className="text-blue-950 text-4xl font-light box-border caret-transparent tracking-[-0.4px] leading-9 outline-[3px] mb-2 font-brandon_grotesque after:accent-auto after:border-b-blue-950 after:border-l-blue-950 after:border-r-blue-950 after:border-t-yellow-500 after:box-border after:caret-transparent after:text-blue-950 after:block after:text-4xl after:not-italic after:normal-nums after:font-light after:tracking-[-0.4px] after:leading-9 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[60px] after:mt-[5px] after:mb-5 after:border-t-2 after:border-separate after:font-brandon_grotesque">
                Recent Recognition
              </h2>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex-wrap outline-[3px] mx-[65px] my-[50px]">
          <div className="static box-content caret-black outline-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black outline-0 w-auto mx-0 left-auto top-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[1040px] md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0 before:md:accent-auto before:md:aspect-auto before:md:box-border before:md:caret-transparent before:md:text-stone-800 before:md:table before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:outline-[3px] before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:font-calibri after:md:accent-auto after:md:aspect-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-stone-800 after:md:table after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-disc after:md:outline-[3px] after:md:overscroll-x-auto after:md:overscroll-y-auto after:md:pointer-events-auto after:md:snap-align-none after:md:snap-normal after:md:snap-none after:md:text-start after:md:no-underline after:md:decoration-auto after:md:indent-[0px] after:md:normal-case after:md:underline-offset-auto after:md:visible after:md:scroll-m-0 after:md:scroll-p-[auto] after:md:border-separate after:md:font-calibri">
              <RecognitionCard
                href="/awards"
                ariaLabel="View all awards including ADDY Silver Award- Local TV Commercial"
                imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/3.webp"
                imageAlt="Addy Award Silver Winner Logo"
                title="ADDY Silver Award- Local TV Commercial"
              />
              <RecognitionCard
                href="/awards"
                ariaLabel="View all awards including Diamond Award, Credit Union National Association "
                imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/4.webp"
                imageAlt="CUNA Diamond Award Winner logo"
                title="Diamond Award, Credit Union National Association "
              />
              <RecognitionCard
                href="/awards"
                ariaLabel="View all awards including Gold Best Credit Union, Northwest Arkansas"
                imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/5.webp"
                imageAlt="The Best of Northwest Arkansas 2024 Winner seal"
                title="Gold Best Credit Union, Northwest Arkansas"
              />
              <RecognitionCard
                href="/awards"
                ariaLabel="View all awards including South Bay's Best Credit Union, Daily Breeze "
                imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/6.webp"
                imageAlt="South Bays BEST Annual Readers' Choice Awards Logo"
                title="South Bay's Best Credit Union, Daily Breeze "
              />
              <RecognitionCard
                href="/awards"
                ariaLabel="View all awards including Silver Award, The Telly Awards"
                imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/8.webp"
                imageAlt="45th Annual Silver Winner The Telly Awards. Silver Telly Award statue."
                title="Silver Award, The Telly Awards"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
