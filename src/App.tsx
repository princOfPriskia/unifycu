import { Header } from "./sections/Header";
import { Main } from "./sections/Main";
import { AnnouncementSection } from "./sections/AnnouncementSection";
import { FeatureCardsSection } from "./sections/FeatureCardsSection";
import { BankingProductsSection } from "./sections/BankingProductsSection";
import { PromoCardsSection } from "./sections/PromoCardsSection";
import { RatesSection } from "./sections/RatesSection";
import { MortgageSection } from "./sections/MortgageSection";
import { RecognitionSection } from "./sections/RecognitionSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyJoinSection } from "./sections/WhyJoinSection";
import { NewsEventsSection } from "./sections/NewsEventsSection";
import { Footer } from "./sections/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { FloatingActionButton } from "./components/FloatingActionButton";

export const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Main />
        <AnnouncementSection />
        <FeatureCardsSection />
        <BankingProductsSection />
        <PromoCardsSection />
        <RatesSection />
        <MortgageSection />
        <RecognitionSection />
        <TestimonialsSection />
        <WhyJoinSection />
        <NewsEventsSection />
      </main>
      <Footer />
      <ChatWidget />
      <FloatingActionButton />
    </div>
  );
};
