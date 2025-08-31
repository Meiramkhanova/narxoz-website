import { cn } from "../../../shared/utils/cn";

interface StructureItemProps {
  id?: number;
  title: string;
  image: string;
}

function StructureItem({ title, image }: StructureItemProps) {
  return (
    <div
      className={cn(
        "structure-item relative aspect-square flex items-center justify-center group",
        "text-white overflow-hidden group"
      )}>
      <div
        className={cn(
          "image absolute inset-0 bg-cover bg-center",
          "transition-transform duration-500 group-hover:scale-105"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="overlay-bg absolute inset-0 bg-primary/50"></div>

      <div className="title-subtitle relative z-10 text-center">
        <div
          className={cn(
            "title uppercase group-hover:-translate-y-full",
            "transition-transform duration-500 ease-in-out font-semibold"
          )}>
          {title}
        </div>

        <div
          className={cn(
            "subtitle opacity-0 group-hover:opacity-100 transition-opacity",
            "duration-500 ease-in-out underline underline-offset-2 cursor-pointer"
          )}>
          Подробнее
        </div>
      </div>
    </div>
  );
}

export default StructureItem;
