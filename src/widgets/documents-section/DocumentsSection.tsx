import Container from "../../shared/ui/Container";
import SectionTitle from "../../shared/ui/SectionTitle";
import DocumentItem from "./components/DocumentItem";

const documents = [
  {
    id: 1,
    title: "Положение об отделе HR",
  },
  {
    id: 2,
    title: "Кодекс корпоративной этики",
  },
  {
    id: 3,
    title: "Политика конфиденциальности персональных данных",
  },
  {
    id: 4,
    title: "Регламент оценки персонал",
  },
];

function DocumentsSection() {
  return (
    <section className="documents-section">
      <Container>
        <div className="wrapper pb-20 flex flex-col gap-6">
          <SectionTitle title="Нормативные документы" />

          <div className="documents-wrapper  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {documents.map((document) => (
              <DocumentItem key={document.id} title={document.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DocumentsSection;
