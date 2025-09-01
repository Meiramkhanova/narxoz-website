import Button from "../../shared/ui/Button";
import { cn } from "../../shared/utils/cn";

function ContactForm() {
  return (
    <div className="contact-form flex flex-col gap-3">
      <div className="title text-4xl font-semibold uppercase">
        Связаться с HR
      </div>

      <div className="subtitle text-xl font-semibold">
        Если у вас есть вопросы, предложения или пожелания — напишите нам
      </div>

      <form className="forms-wrapper flex flex-col gap-3 w-full">
        <div className="name-email w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            className={cn(
              "rounded-sm px-6 py-3 bg-gray-100 placeholder:uppercase placeholder:text-gray-300",
              "outline-0"
            )}
            placeholder="ФИО"
          />

          <input
            type="email"
            name="email"
            className="rounded-sm px-6 py-3 bg-gray-100 placeholder:text-gray-300 outline-0"
            placeholder="Email"
          />
        </div>

        <textarea
          className="bg-gray-100 px-6 py-3 w-full h-40 resize-none placeholder:text-gray-300 outline-0"
          placeholder="Ваше сообщение..."></textarea>

        <Button size="lg" className="uppercase tracking-widest">
          отправить заявку
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
