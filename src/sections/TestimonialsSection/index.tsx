import { TestimonialSlide } from "@/sections/TestimonialsSection/components/TestimonialSlide";

export const TestimonialsSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] py-[50px] md:py-[100px]">
      <div className="box-border caret-transparent flex flex-wrap max-w-[1200px] outline-[3px] mx-[22px] px-2.5 md:mx-auto md:px-[15px]">
        <div className="box-border caret-transparent shrink-0 outline-[3px] w-full px-2.5 md:w-[33.3333%] md:px-[15px]">
          <div className="box-border caret-transparent justify-center outline-[3px] text-center w-full mx-auto py-[25px]">
            <img
              src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/7.webp"
              alt="Two Women smiling. One of the women whispering into ear of the other."
              className="aspect-[auto_374_/_262] box-border caret-transparent inline-block max-w-full min-h-px object-contain outline-[3px]"
            />
          </div>
        </div>
        <div className="box-border caret-transparent shrink-0 outline-[3px] w-full px-2.5 md:w-[66.6667%] md:px-[15px]">
          <div className="box-border caret-transparent outline-[3px]">
            <div
              role="region"
              className="relative box-border caret-transparent h-[300px] outline-[3px] bg-[position:0px_0px] md:h-[250px]"
            >
              <div className="box-border caret-transparent outline-[3px]">
                <ul className="relative box-border caret-transparent h-[300px] leading-[25.6px] list-none outline-[3px] overflow-hidden pl-0 md:h-[250px]">
                  <TestimonialSlide
                    isActive=""
                    quote="UNIFY is the place for all your financial necessities. A community environment that gives you access to better financial options. UNIFY serves its members only. The friendly and personal environment is a welcome change from the traditional, just another number, type of environment. UNIFY provides reasonable savings and charges you fewer fees, all while offering excellent customer service."
                    quoteVariant="after:transform-none after:md:-scale-100"
                    author="- Mary"
                  />
                  <TestimonialSlide
                    isActive="hidden"
                    quote="I recently visited the UNIFY branch located inside the Harps grocery store in Springdale, Arkansas, and it was a delightful experience. The team there is exceptional - they are friendly and extremely knowledgeable. They make me feel incredibly welcome each time I visit, creating a warm and inviting atmosphere."
                    quoteVariant=""
                    author="- Daniel"
                  />
                </ul>
              </div>
              <nav
                aria-label="Slider navigation"
                className="relative box-border caret-transparent max-w-[1200px] outline-[3px] text-center mx-[22px] my-0 px-2.5 top-0 md:mx-auto md:my-[12.8px] md:px-[15px]"
              >
                <button className="appearance-none text-black bg-slate-500 caret-transparent h-[15px] leading-4 outline-[3px] w-[15px] border border-purple-800 mx-1 p-0 rounded-[50%]"></button>
                <button className="appearance-none text-black bg-white caret-transparent h-[15px] leading-4 outline-[3px] w-[15px] border border-purple-800 bg-[position:0px_0px] mx-1 p-0 rounded-[50%]"></button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
