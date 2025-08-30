interface VacancyItemProps {
  id?: number;
  title: string;
  priceFrom: number;
  priceTo: number;
}

function VacancyItem({ title, priceFrom, priceTo }: VacancyItemProps) {
  return (
    <div className="vacancy-item bg-white rounded-md p-6 flex flex-col gap-3">
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
