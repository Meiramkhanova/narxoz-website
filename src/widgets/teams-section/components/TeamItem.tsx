import { cn } from "../../../shared/utils/cn";

interface TeamItemProps {
  id?: number;
  name: string;
  position: string;
  email: string;
  image: string;
}

function TeamItem({ name, position, email, image }: TeamItemProps) {
  return (
    <div className="team-item flex flex-col gap-3 shadow-sm rounded-xs pb-3 ">
      <div className="team-image overflow-hidden">
        <img
          src={image}
          alt="position-image"
          loading="lazy"
          className={cn(
            "aspect-5/4 lg:aspect-square size-full xl:aspect-[10/11] object-cover hover:scale-105",
            "hover:brightness-90 transition-all duration-500 object-[50%_30%]"
          )}
        />
      </div>

      <div className="name uppercase font-semibold text-lg px-3">{name}</div>

      <div className="position text-sm px-3">{position}</div>

      <div
        className={cn(
          "email underline underline-offset-2 text-sm px-3 hover:text-primary",
          "transition-all duration-300 cursor-pointer mt-auto"
        )}>
        {email}
      </div>
    </div>
  );
}

export default TeamItem;
