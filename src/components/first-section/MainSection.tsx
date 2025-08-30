import Button from "../../shared/ui/Button";
import RightMainSection from "./RightMainSection";

function MainSection() {
  return (
    <section className="main-section h-full">
      <div className="wrapper h-full flex">
        <div className="left-main flex flex-col w-2/5">
          <div className="bg-black/70 h-full pl-16 flex items-center">
            <div className="text-btns flex flex-col gap-7">
              <div className="text-white font-semibold tracking-wide uppercase text-5xl font-bebas leading-tight pr-4">
                Ознакомьтесь <br /> с актуальными вакансиями в нашем
                университете
              </div>

              <div className="btns flex items-center gap-3">
                <Button size="lg" className="uppercase">
                  Перейти к вакансиям
                </Button>

                <Button size="lg" variant="secondary" className="uppercase">
                  Hr портал
                </Button>
              </div>
            </div>
          </div>

          <div className="bottom-breadcrumbs bg-primary/60 uppercase pl-16 py-6 text-gray-200/50 font-medium text-sm">
            Главная / <span className="text-white">hr отдел</span>
          </div>
        </div>

        <RightMainSection />
      </div>
    </section>
  );
}

export default MainSection;
