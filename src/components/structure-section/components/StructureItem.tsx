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
        "text-white font-semibold cursor-pointer overflow-hidden"
      )}>
      <div
        className={cn(
          "image absolute inset-0 bg-cover bg-center",
          "transition-transform duration-500 group-hover:scale-105"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="overlay-bg absolute inset-0 bg-primary/50"></div>

      <div className="title relative z-10 uppercase">{title}</div>
    </div>
  );
}

export default StructureItem;
