import { PromoCard } from "@/sections/PromoCardsSection/components/PromoCard";

export const PromoCardsSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] py-10 md:py-[50px]">
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-[22px] my-0 px-2.5 md:m-auto md:px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] -m-2.5 md:mt-[-15px] md:mr-[-15px] md:mb-[-15px] md:ml-[-15px]">
          <PromoCard
            imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/28.webp"
            imageAlt="Coin graphic with UNIFY knot logo in center"
            imageClassName="aspect-[auto_390_/_210]"
            title="Membership Has Its Benefits"
            description="Check us out. Find out why you should move your banking to UNIFY."
            href="/unify-membership"
            ariaLabel="Learn more about membership benefits"
            linkText="Learn About Membership"
          />
          <PromoCard
            imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/29.webp"
            imageAlt="House on blue background. UNIFY knot logo on house façade."
            imageClassName="aspect-[auto_390_/_210]"
            title="HOME LOAN RATES TO LOVE"
            description={
              <>
                Buy or refi where the best mortgages call home.
                <br className="box-border caret-transparent outline-[3px]" />
                {"\u00A0"}
              </>
            }
            href="/home-loans"
            ariaLabel="View Home Loan information"
            linkText="View Home Loans"
          />
          <PromoCard
            imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/30.webp"
            imageAlt="White SUV with UNIFY knot logo overlay"
            imageClassName="aspect-[auto_345_/_230]"
            title="Auto Loans"
            description="Drive off in the vehicle of your dreams for as low as 5.74% APR*."
            href="/auto-loans"
            ariaLabel="View our auto loan options"
            linkText="View Auto Loans"
          />
        </div>
      </div>
    </div>
  );
};
