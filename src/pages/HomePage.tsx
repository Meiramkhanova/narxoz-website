import ContactSection from "../components/contacts-section/ContactSection";
import DocumentsSection from "../components/documents-section/DocumentsSection";
import StructureSection from "../components/structure-section/StructureSection";
import OurTeamSection from "../components/teams-section/OurTeamSection";

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
