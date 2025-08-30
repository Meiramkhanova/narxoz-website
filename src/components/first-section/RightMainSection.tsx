import VacancyItem from "./components/VacancyItem";

const vacancies = [
  {
    id: 1,
    title: "Водитель-курьер на личном автомобиле",
    priceFrom: 450000,
    priceTo: 600000,
  },
  {
    id: 2,
    title: "Бухгалтер по учету ТМЦ на (Ратушного 70)",
    priceFrom: 450000,
    priceTo: 600000,
  },
];

function RightMainSection() {
  return (
    <div className="right-main-section h-full w-3/5 flex justify-end items-center pr-16">
      <div className="flex flex-col gap-6">
        {vacancies.map((vacancy) => (
          <VacancyItem {...vacancy} key={vacancy.id} />
        ))}
      </div>
    </div>
  );
}

export default RightMainSection;
