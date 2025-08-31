import { cn } from "../../shared/utils/cn";
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
    <div
      className={cn(
        "right-main-section lg:h-full w-full lg:w-2/5 px-6 md:px-12 lg:pl-20 lg:pr-0 xl:w-1/2 2xl:w-3/5",
        "flex lg:justify-end lg:items-center pr-6 md:pr-12 lg:pr-16 pb-28 lg:pb-0"
      )}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {vacancies.map((vacancy) => (
          <VacancyItem {...vacancy} key={vacancy.id} />
        ))}
      </div>
    </div>
  );
}

export default RightMainSection;
