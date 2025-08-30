import Container from "../../shared/ui/Container";
import SectionTitle from "../../shared/ui/SectionTitle";
import TeamItem from "./components/TeamItem";

const teams = [
  {
    id: 1,
    name: "Алия Касенова",
    position: "HR-менеджер по обучению",
    email: "a.kasenova@company.kz",
    image: "/images/team1.jpg",
  },
  {
    id: 2,
    name: "Данияр Байжанов",
    position: "Координатор корпоративной культуры",
    email: "a.kasenova@company.kz",
    image: "/images/team2.png",
  },
  {
    id: 3,
    name: "Руслан Алимов",
    position: "Младший HR-специалист",
    email: "a.kasenova@company.kz",
    image: "/images/team3.jpg",
  },
  {
    id: 4,
    name: "Руслан Алимов",
    position: "HR-менеджер по обучению",
    email: "a.kasenova@company.kz",
    image: "/images/team4.jpg",
  },
  {
    id: 5,
    name: "Руслан Алимов",
    position: "HR-менеджер по обучению",
    email: "a.kasenova@company.kz",
    image: "/images/team5.jpg",
  },
  {
    id: 6,
    name: "Алия Касенова",
    position: "HR-менеджер по обучению",
    email: "a.kasenova@company.kz",
    image: "/images/team6.jpg",
  },
  {
    id: 7,
    name: "Данияр Байжанов",
    position: "Координатор корпоративной культуры",
    email: "a.kasenova@company.kz",
    image: "/images/team7.jpg",
  },
  {
    id: 8,
    name: "Руслан Алимов",
    position: "Младший HR-специалист",
    email: "a.kasenova@company.kz",
    image: "/images/team8.jpg",
  },
  {
    id: 9,
    name: "Руслан Алимов",
    position: "HR-менеджер по обучению",
    email: "a.kasenova@company.kz",
    image: "/images/team9.jpg",
  },
  {
    id: 10,
    name: "Руслан Алимов",
    position: "HR-менеджер по обучению",
    email: "a.kasenova@company.kz",
    image: "/images/team10.jpg",
  },
];

function OurTeamSection() {
  return (
    <section className="our-team-section">
      <Container>
        <div className="wrapper flex flex-col gap-6 pb-20">
          <SectionTitle title="Наша команда" />

          <div className="teams-wrapper grid grid-cols-5 gap-6">
            {teams.map((team) => (
              <TeamItem key={team.id} {...team} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurTeamSection;
