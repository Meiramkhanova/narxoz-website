import ContactSection from "../widgets/contacts-section/ContactSection";
import DocumentsSection from "../widgets/documents-section/DocumentsSection";
import StructureSection from "../widgets/structure-section/StructureSection";
import OurTeamSection from "../widgets/teams-section/OurTeamSection";

function HomePage() {
  return (
    <>
      <StructureSection />

      <DocumentsSection />

      <OurTeamSection />

      <ContactSection />
    </>
  );
}

export default HomePage;
