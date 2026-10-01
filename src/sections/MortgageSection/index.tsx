export const MortgageSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-[22px] my-0 pb-[30px] px-2.5 md:m-auto md:px-[15px]">
          <div className="box-border caret-transparent flex flex-wrap outline-[3px] -m-2.5 md:mt-[-15px] md:mr-[-15px] md:mb-[-15px] md:ml-[-15px]">
            <div className="box-border caret-transparent shrink-0 outline-[3px] w-[calc(100%_-_20px)] m-2.5 md:w-[calc(58.3333%_-_30px)] md:m-[15px]">
              <h2 className="text-blue-950 text-4xl box-border caret-transparent leading-[50.4px] outline-[3px] mb-2 font-brandon_grotesque after:accent-auto after:border-b-blue-950 after:border-l-blue-950 after:border-r-blue-950 after:border-t-yellow-500 after:box-border after:caret-transparent after:text-blue-950 after:block after:text-4xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[50.4px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[60px] after:mb-5 after:border-t-2 after:border-separate after:font-brandon_grotesque">
                Home Sweet Home
              </h2>
              <div className="border-b-stone-800 border-l-stone-800 border-r-zinc-400 border-t-stone-800 box-border caret-transparent outline-[3px] border-r-2">
                <p className="box-border caret-transparent leading-[25.6px] outline-[3px] mb-4">
                  A mortgage from UNIFY can make your dream home a reality. Our
                  calculators &amp; home loan specialists can help you determine
                  how much house you can afford.
                </p>
                <div className="box-border caret-transparent justify-center outline-[3px] text-center w-full mb-4 mx-auto pl-0 py-0 md:mb-0 md:pl-2.5 md:py-[25px]">
                  <img
                    src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/2.webp"
                    alt="Family moving into new home"
                    className="aspect-[auto_450_/_150] box-border caret-transparent inline-block max-w-full min-h-px object-contain outline-[3px]"
                  />
                </div>
              </div>
              <a
                href="/home-loans"
                aria-label="View more about UNIFY mortgage options"
                className="text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent inline-block leading-[14.4px] outline-[3px] text-center uppercase align-middle border mb-4 px-7 py-3 rounded-[50px] border-solid border-transparent hover:bg-purple-900"
              >
                View Mortgage Options
              </a>
            </div>
            <div className="box-border caret-transparent shrink-0 outline-[3px] w-[calc(100%_-_20px)] m-2.5 md:w-[calc(41.6667%_-_30px)] md:m-[15px]">
              <h2 className="text-blue-950 text-4xl box-border caret-transparent leading-[50.4px] outline-[3px] mb-2 font-brandon_grotesque after:accent-auto after:border-b-blue-950 after:border-l-blue-950 after:border-r-blue-950 after:border-t-yellow-500 after:box-border after:caret-transparent after:text-blue-950 after:block after:text-4xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[50.4px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[60px] after:mb-5 after:border-t-2 after:border-separate after:font-brandon_grotesque">
                Mortgage Payment Calculator
              </h2>
              <p className="box-border caret-transparent leading-[25.6px] outline-[3px] mb-4">
                Estimate your monthly mortgage payments and more with our{" "}
                <a
                  href="/mortgage-calculator"
                  title="Free Mortgage Calculators"
                  className="text-purple-800 box-border caret-transparent outline-[3px]"
                >
                  free mortgage calculators
                </a>
                .<br className="box-border caret-transparent outline-[3px]" />
                <iframe
                  src="https://expert.leadfusion.com/response/lf-unifyfcu/calc/home02?v=mini"
                  title="Calculator"
                  className="box-border caret-transparent inline h-[500px] outline-[3px] align-baseline w-full"
                ></iframe>
                 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
