interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title font-semibold text-3xl uppercase">
      {title}
    </div>
  );
}

export default SectionTitle;
