import { FeatureCard } from "@/sections/FeatureCardsSection/components/FeatureCard";

export const FeatureCardsSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="bg-blue-950 bg-[url('https://www.unifyfcu.com/sites/default/themes/unify/images/bg_pattern.svg')] bg-size-[200px] box-border caret-transparent outline-[3px] bg-center">
        <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-[22px] my-0 px-2.5 md:m-auto md:px-[15px]">
          <div className="box-border caret-transparent flex flex-wrap outline-[3px] -m-2.5 md:mt-[-15px] md:mr-[-15px] md:mb-[-15px] md:ml-[-15px]">
            <FeatureCard
              imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/9.webp"
              imageAlt="Young adults snacking and relaxing"
              title="FREE Checking"
              description="Yep… we said FREE. Convenient and flexible, our FREE Checking account is the no-fuss way to manage your money."
              href="/checking-accounts"
              ariaLabel="Learn More about Get free checking"
              linkText="Get FREE Checking"
            />
            <FeatureCard
              imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/10.webp"
              imageAlt="Woman Looking at Sunset over mountains"
              title="Credit Union Near Me"
              description="UNIFY is always near you with call center access 7 days a week and branches nationwide, including Los Angeles, Orange County, Plano, Texas, and Northwest Arkansas."
              href="/locator"
              ariaLabel="Go to our locator to Find a branch near you"
              linkText="Find a branch near you"
            />
            <FeatureCard
              imageUrl="https://c.animaapp.com/mp6ve6ukPxqINY/assets/11.webp"
              imageAlt="Woman with beige jacket standing outdoors looking into the distance."
              title="A New Path Forward"
              description="Stay up to date and see what this new path forward means for you."
              href="/forward"
              ariaLabel="Learn more about UNIFY is now CommunityAmerica"
              linkText="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
