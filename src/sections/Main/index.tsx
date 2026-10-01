import { HeroCarousel } from "@/sections/Main/components/HeroCarousel";
import { AnnouncementSection } from "@/sections/AnnouncementSection";
import { BankingProductsSection } from "@/sections/BankingProductsSection";
import { PromoCardsSection } from "@/sections/PromoCardsSection";
import { RatesSection } from "@/sections/RatesSection";
import { WhyJoinSection } from "@/sections/WhyJoinSection";
import { MortgageSection } from "@/sections/MortgageSection";
import { NewsEventsSection } from "@/sections/NewsEventsSection";
import { RecognitionSection } from "@/sections/RecognitionSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FeatureCardsSection } from "@/sections/FeatureCardsSection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <HeroCarousel />
      </div>
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-auto px-2.5 md:px-[15px]">
        <div className="box-border caret-transparent shrink-0 outline-[3px] w-full">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent hidden outline-[3px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent max-w-full outline-[3px] mx-auto">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px]">
          <section className="box-border caret-transparent shrink-0 outline-[3px] w-full">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px]">
                <article className="box-border caret-transparent outline-[3px]">
                  <div className="box-border caret-transparent outline-[3px]">
                    <AnnouncementSection />
                    <BankingProductsSection />
                    <PromoCardsSection />
                    <RatesSection />
                    <div className="box-border caret-transparent outline-[3px] py-[0.1px]">
                      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-[22px] my-0 px-2.5 md:m-auto md:px-[15px]">
                        <div className="box-border caret-transparent outline-[3px]">
                          <div className="box-border caret-transparent flex flex-wrap justify-center outline-[3px] -mx-2.5 md:ml-[-15px] md:mr-[-15px]">
                            <div className="box-border caret-transparent shrink-0 outline-[3px] w-[calc(100%_-_20px)] mx-2.5 md:w-[calc(100%_-_30px)] md:mx-[15px]">
                              <p className="text-xs font-light box-border caret-transparent leading-[14px] outline-[3px] mb-4 font-gill_sans">
                                *APY=Annual Percentage Yield. APR=Annual
                                Percentage Rate. Click the product name for
                                details. All rates and terms displayed are
                                subject to change without notice. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <WhyJoinSection />
                    <MortgageSection />
                    <NewsEventsSection />
                    <RecognitionSection />
                    <TestimonialsSection />
                  </div>
                </article>
              </div>
              <FeatureCardsSection />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
