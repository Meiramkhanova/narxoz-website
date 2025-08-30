import PdfIcon from "../../../assets/PdfIcon";
import { cn } from "../../../shared/utils/cn";

interface DocumentItemProps {
  title: string;
}

function DocumentItem({ title }: DocumentItemProps) {
  return (
    <div className="document-item flex gap-6 items-center">
      <PdfIcon className="size-14" />

      <div className="title-download w-full">
        <div className="title font-semibold">{title}</div>

        <div
          className={cn(
            "download underline cursor-pointer underline-offset-2",
            "hover:text-primary transition-all duration-300"
          )}>
          Скачать файл
        </div>
      </div>
    </div>
  );
}

export default DocumentItem;
