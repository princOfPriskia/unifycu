import { HeroSlide } from "@/sections/Main/components/HeroSlide";
import { CarouselControls } from "@/sections/Main/components/CarouselControls";

export const HeroCarousel = () => {
  return (
    <div
      role="region"
      aria-label="UNIFY Financial Credit Union"
      className="relative bg-stone-800 box-border caret-transparent min-h-[500px] outline-[3px] md:min-h-[446px]"
    >
      <img
        src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/loading.gif"
        alt="loading"
        className="absolute box-border caret-transparent hidden h-[75px] max-w-full min-h-px object-contain opacity-50 outline-[3px] w-[75px] left-2/4 top-2/4"
      />
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <button className="absolute appearance-none text-zinc-600 text-5xl bg-transparent caret-transparent hidden leading-[48px] outline-[3px] text-center transform-none z-10 bg-[position:0px_0px] p-4 left-0 top-2/4 md:block md:translate-y-[-50.0%] before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-5xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[48px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro hover:text-purple-800 hover:bg-white/30 hover:border-purple-800"></button>
          <button className="absolute appearance-none text-zinc-600 text-5xl bg-transparent caret-transparent hidden leading-[48px] outline-[3px] text-center transform-none z-10 bg-[position:0px_0px] p-4 right-0 top-2/4 md:block md:translate-y-[-50.0%] before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-5xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[48px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro hover:text-purple-800 hover:bg-white/30 hover:border-purple-800"></button>
        </div>
        <ul className="relative box-border caret-transparent h-[500px] leading-[25.6px] list-none min-h-[500px] outline-[3px] overflow-hidden pl-0 md:h-[446px] md:min-h-0">
          <HeroSlide
            listItemClassName="hidden"
            figcaptionClassName=""
            title="A New Path Forward"
            secondaryContent="Stay up to date and see what this new path forward means for you."
            secondaryElement="p"
            href="/forward"
            linkText="Learn More"
            presentationClassName="bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/unify_homepage_500x335.png?VersionId=CqbeOMxbkHOxR6lNGxos9Lj1_BaSCDM0')]"
          />
          <HeroSlide
            listItemClassName="hidden"
            figcaptionClassName=""
            title="Open the Door!"
            secondaryContent="New or Refinanced - The best mortgages call UNIFY home."
            secondaryElement="h2"
            href="https://www.unifyfcu.com/thinkmortgages?utm_source=website&utm_medium=hpbanner&utm_campaign=mortgageawareness1"
            linkAriaLabel="Learn More about UNIFY Mortgages"
            linkText="Find your Mortgage"
            presentationClassName="bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/mortgageawareness_2025_homepagebnr.jpg?VersionId=4UyT.uBEbhniCI0kA97GR7RkrDXsCpdq')]"
          />
          <HeroSlide
            listItemClassName="hidden"
            figcaptionClassName=""
            title="Becoming a Homeowner"
            secondaryContent="FREE Webinar - Wednesday May 20"
            secondaryElement="p"
            href="https://www.unifyfcu.com/learn-plan-grow?utm_source=website&utm_medium=hpbanner&utm_campaign=maywebinar"
            linkAriaLabel="Get the details and register for Becoming a Homeowner webinar"
            linkText="Get the details and register today"
            presentationClassName="bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/may20webinar_homepagebnr.jpg?VersionId=T9PD.ok5ev2FSaHafkgAuI6dl.NDnCVS')]"
          />
          <HeroSlide
            listItemClassName="block translate-x-[-100.0%]"
            figcaptionClassName="translate-y-[-70.0%] md:translate-x-[-15.0%] md:translate-y-[-70.0%]"
            title="Rewardiness Earn up to $600"
            secondaryContent="Fill your account with friends and start referring today. "
            secondaryElement="h2"
            href="https://www.unifyfcu.com/refer-a-friend?utm_source=website&utm_medium=hpbanner&utm_campaign=rewardiness"
            linkAriaLabel="Learn More about Rewardiness UNIFY's reward program"
            linkText="Learn More about Rewardiness"
            presentationClassName="bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/rewardiness2024_homepagebnr.jpg?VersionId=12MlvSLUHFiyocmApSnn8rnEUEXTdNOS')]"
          />
          <HeroSlide
            listItemClassName=""
            figcaptionClassName="translate-y-[-70.0%] md:translate-x-[-15.0%] md:translate-y-[-70.0%]"
            title="Boost Your Savings and Earn 3.25% APY*!"
            secondaryElement="p"
            href="https://www.unifyfcu.com/MoneyMarketPlus?utm_source=website&utm_medium=hpbanner&utm_campaign=moneymarketplus"
            linkAriaLabel="Learn About Platinum Money Market"
            linkText="Learn About Money Market Plus"
            presentationClassName="bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/platinummm_homepagebnr_500x335.jpg?VersionId=51Vk5_WxivoW75ELfy.mWm73nPyUyZz3')]"
          />
          <HeroSlide
            listItemClassName="hidden"
            figcaptionClassName=""
            title="Say YES to Paperless!"
            secondaryContent={
              <>
                eStatements.
                <br className="text-[28.8px] font-normal box-border caret-transparent leading-[31.68px] outline-[3px] md:text-[40px] md:font-light md:leading-[44px]" />
                Safe & convenient
              </>
            }
            secondaryElement="h2"
            href="https://www.unifyfcu.com/GoGreen?utm_source=website&utm_medium=hpbanner&utm_campaign=paperless-statements"
            linkAriaLabel="Get started with eStatements"
            linkText="Get Started Today!"
            presentationClassName="bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/estatements_500x335.jpg?VersionId=o.8xPzL9ggjoC6rwMaMq2BmvoAvxKZ2x')]"
          />
          <HeroSlide
            listItemClassName="hidden"
            figcaptionClassName=""
            title={
              <>
                Earn Big!
                <br className="text-[38px] box-border caret-transparent leading-[41.8px] outline-[3px] md:text-7xl md:leading-[79.2px]" />
                3.60 APY*
              </>
            }
            secondaryContent="11-Month Certificate"
            secondaryElement="h2"
            href="https://www.unifyfcu.com/justforyou?utm_source=website&utm_medium=hpbanner&utm_campaign=11monthcertjfy"
            linkAriaLabel="Learn how to vote UNIFY Best of Northwest Arkansas"
            linkText="Get the Details!"
            presentationClassName="bg-[url('https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/image/11monthsharecert_homepagebnr.jpg?VersionId=fRti5dINao6.OHjETd513FkEpaHP2FNW')]"
          />
        </ul>
      </div>
      <CarouselControls />
    </div>
  );
};
