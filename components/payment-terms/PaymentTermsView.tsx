import { Container } from "@/components/ui";
import { HeroSection } from "./HeroSection";
import { TableOfContentsSidebar } from "./TableOfContentsSidebar";
import { WhoIsInvolvedSection } from "./WhoIsInvolvedSection";
import { PayingSection } from "./PayingSection";
import { RentSection } from "./RentSection";
import { DepositsSection } from "./DepositsSection";
import { FeesTaxesCurrencySection } from "./FeesTaxesCurrencySection";
import { PayoutsSection } from "./PayoutsSection";
import { WhenSomethingGoesWrongSection } from "./WhenSomethingGoesWrongSection";
import { RestrictionsSection } from "./RestrictionsSection";
import { RecordsComplaintsSection } from "./RecordsComplaintsSection";
import { RegionalRulesSection } from "./RegionalRulesSection";
import { ChangesHierarchySection } from "./ChangesHierarchySection";

export function PaymentTermsView() {
  return (
    <>
      <HeroSection />
      <Container className="border-t border-[#E9E0D3] pb-20 pt-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <TableOfContentsSidebar />
          <div className="min-w-0 flex-1">
            <WhoIsInvolvedSection />
            <PayingSection />
            <RentSection />
            <DepositsSection />
            <FeesTaxesCurrencySection />
            <PayoutsSection />
            <WhenSomethingGoesWrongSection />
            <RestrictionsSection />
            <RecordsComplaintsSection />
            <RegionalRulesSection />
            <ChangesHierarchySection />
          </div>
        </div>
      </Container>
    </>
  );
}
