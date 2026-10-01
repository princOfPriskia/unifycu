import { RateCard } from "@/sections/RatesSection/components/RateCard";

export const RatesSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] pt-[15px] pb-[50px]">
      <div className="box-border caret-transparent justify-center max-w-[1200px] outline-[3px] w-[calc(100%_-_16px)] mx-3 my-0 px-2.5 md:w-auto md:m-auto md:px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] mx-0 md:ml-[-15px] md:mr-[-15px]">
          <div className="box-border caret-transparent shrink-0 outline-[3px] w-[calc(100%_-_20px)] ml-0 mr-2.5 md:w-[calc(100%_-_30px)] md:mx-[15px]">
            <h2 className="text-blue-950 text-4xl box-border caret-transparent leading-[50.4px] outline-[3px] ml-2 mb-6 font-brandon_grotesque md:ml-0 md:mb-4 after:accent-auto after:bg-blue-950 after:border-b-blue-950 after:border-l-blue-950 after:border-r-blue-950 after:border-t-yellow-500 after:box-border after:caret-transparent after:text-blue-950 after:block after:text-4xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[50.4px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[60px] after:mb-5 after:border-t-2 after:border-separate after:font-brandon_grotesque">
              Rates
            </h2>
          </div>
          <RateCard
            href="/savings-rates"
            title="Certificate Accounts"
            ratePrefix="as high as"
            rateValue="3.40"
            rateSymbol="%"
            rateType="APY*"
          />
          <RateCard
            href="/home-loans"
            title="Mortgages"
            ratePrefix="as low as"
            rateValue="Ask"
            rateSymbol=""
            rateType="APR*"
          />
          <RateCard
            href="/auto-loan-rates"
            title="Vehicle Loans"
            ratePrefix="as low as"
            rateValue="5.74"
            rateSymbol="%"
            rateType="APR*"
          />
          <RateCard
            href="/credit-card-rates"
            title="Credit Cards"
            ratePrefix="as low as"
            rateValue="14.49"
            rateSymbol="%"
            rateType="APR*"
          />
          <RateCard
            href="/personal-loan-rates"
            title="Personal Loans"
            ratePrefix="as low as"
            rateValue="13.74"
            rateSymbol="%"
            rateType="APR*"
          />
        </div>
        <div className="box-border caret-transparent outline-[3px] py-[22px]">
          <a
            href="/unify-rates"
            className="text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent block float-right justify-end leading-[14.4px] outline-[3px] text-center uppercase align-middle border mb-4 px-7 py-3 rounded-[50px] border-solid border-transparent hover:bg-purple-900"
          >
            {" "}
            View All Rates
          </a>
        </div>
      </div>
    </div>
  );
};
