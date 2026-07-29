import { Container, Reveal } from "@/components/ui";
import { navSections } from "@/lib/nav-data";
import { FooterColumn } from "./FooterColumn";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterBottomBar } from "./FooterBottomBar";

export function Footer() {
  const [findARoom, listARoom, howItWorks, organizations, pro, resources] = navSections;

  return (
    <footer className="mt-auto bg-[#F1E7DA]">
      <Container className="py-14">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          <FooterNewsletter />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-5">
            <FooterColumn title="Find a Room" groups={[{ links: findARoom.links }]} />
            <FooterColumn title="List a Room" groups={[{ links: listARoom.links }]} />
            <FooterColumn title="How It Works" groups={[{ links: howItWorks.links }]} />
            <FooterColumn title="Organizations" groups={[{ links: organizations.links }]} />
            <FooterColumn
              title="Pro & Resources"
              groups={[
                { heading: pro.label, links: pro.links },
                { heading: resources.label, links: resources.links },
              ]}
            />
          </div>
        </Reveal>
      </Container>
      <FooterBottomBar />
    </footer>
  );
}
