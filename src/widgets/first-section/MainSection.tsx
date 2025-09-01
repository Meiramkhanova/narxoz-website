import { Link } from "react-router-dom";
import Button from "../../shared/ui/Button";
import { cn } from "../../shared/utils/cn";
import RightMainSection from "./RightMainSection";

function MainSection() {
  return (
    <section className="main-section h-full relative">
      <div className="overlay absolute inset-0 w-full lg:w-3/5 xl:w-1/2 2xl:w-2/5 bg-black/70" />

      <div className="wrapper h-full flex flex-col lg:flex-row relative z-10 gap-12 lg:gap-0 pt-20 lg:pt-0">
        <div className="left-main flex justify-center flex-col lg:max-w-3/5 xl:max-w-1/2 2xl:max-w-2/5">
          <div className="h-full px-6 md:px-12 lg:pl-16 lg:pr-0 flex items-center">
            <div className="text-btns flex flex-col gap-7">
              <div
                className={cn(
                  "title text-white font-semibold tracking-wide uppercase leading-tight",
                  "text-4xl sm:text-5xl"
                )}>
                Ознакомьтесь <br /> с актуальными вакансиями в нашем
                университете
              </div>

              <div className="btns flex flex-col sm:flex-row sm:items-center gap-3">
                <Link to={"/vacancies"}>
                  <Button size="lg" className="uppercase">
                    Перейти к вакансиям
                  </Button>
                </Link>

                <Button size="lg" variant="secondary" className="uppercase">
                  Hr портал
                </Button>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "bottom-breadcrumbs bg-primary/60 uppercase pl-6 md:pl-12 lg:pl-16 py-6",
              "text-gray-200/50 font-medium text-sm absolute inset-x-0 bottom-0",
              "lg:left-0 lg:right-2/5 xl:right-1/2 2xl:w-2/5"
            )}>
            Главная / <span className="text-white">hr отдел</span>
          </div>
        </div>

        <RightMainSection />
      </div>
    </section>
  );
}

export default MainSection;
