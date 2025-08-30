interface TeamItemProps {
  id?: number;
  name: string;
  position: string;
  email: string;
  image: string;
}

function TeamItem({ name, position, email, image }: TeamItemProps) {
  return (
    <div className="team-item flex flex-col gap-3 shadow-sm rounded-xs pb-3">
      <img
        src={image}
        alt="position-image"
        loading="lazy"
        className="aspect-[10/11] object-cover"
      />

      <div className="name uppercase font-semibold text-lg px-3">{name}</div>

      <div className="position text-sm px-3">{position}</div>

      <div className="email underline underline-offset-2 text-sm px-3">
        {email}
      </div>
    </div>
  );
}

export default TeamItem;
