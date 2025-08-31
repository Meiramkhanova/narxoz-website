import { cn } from "../../../shared/utils/cn";

interface VacancyItemProps {
  id?: number;
  title: string;
  priceFrom: number;
  priceTo: number;
}

function VacancyItem({ title, priceFrom, priceTo }: VacancyItemProps) {
  return (
    <div
      className={cn(
        "vacancy-item bg-white rounded-lg flex flex-col",
        "gap-1.5 xl:gap-3 p-4 lg:p-6"
      )}>
      <span className="vacancy-title font-semibold text-lg tracking-wide">
        {title}
      </span>

      <div className="vacancy-salary font-semibold text-sm tracking-widest">
        от <span>{priceFrom}</span> до <span>{priceTo} тг</span>
      </div>

      <span className="leave-request text-primary underline font-semibold tracking-wide">
        Оставить заявку
      </span>
    </div>
  );
}

export default VacancyItem;
