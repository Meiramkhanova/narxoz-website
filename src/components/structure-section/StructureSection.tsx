import Container from "../../shared/ui/Container";
import SectionTitle from "../../shared/ui/SectionTitle";
import StructureItem from "./components/StructureItem";

const departments = [
  {
    id: 1,
    title: "HR-администрирование",
    image: "/images/dep1.jpg",
  },
  {
    id: 2,
    title: "Подбор персонала",
    image: "/images/dep2.jpg",
  },
  {
    id: 3,
    title: "Обучение и развитие",
    image: "/images/dep3.jpg",
  },
  {
    id: 4,
    title: "Внутренние коммуникации",
    image: "/images/dep4.jpg",
  },
];

function StructureSection() {
  return (
    <section className="structure-section">
      <Container>
        <div className="wrapper py-20 flex flex-col gap-6">
          <SectionTitle title="Структура HR-отдела" />

          <div className="departments-wrapper grid grid-cols-4 gap-6">
            {departments.map((department) => (
              <StructureItem key={department.id} {...department} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StructureSection;
