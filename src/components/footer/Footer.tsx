import Facebook from "../../assets/Facebook";
import Instagram from "../../assets/Instagram";
import LogoAnother from "../../assets/LogoAnother";
import Telegram from "../../assets/Telegram";
import Youtube from "../../assets/Youtube";
import Container from "../../shared/ui/Container";
import { cn } from "../../shared/utils/cn";

const links = [
  {
    id: 1,
    title: "Поступающим",
    list: [
      {
        id: 1,
        title: "Бакалавриат",
        link: "#",
      },
      {
        id: 2,
        title: "Магистратура",
        link: "#",
      },
      {
        id: 3,
        title: "Докторантура",
        link: "#",
      },
      {
        id: 4,
        title: "MBA",
        link: "#",
      },
      {
        id: 5,
        title: "Гранты, льготы и стипендии",
        link: "#",
      },
      {
        id: 6,
        title: "Контакты приемной комиссии",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Школы",
    list: [
      {
        id: 1,
        title: "Школа права и государственного управления",
        link: "#",
      },
      {
        id: 2,
        title: "Школа экономики и менеджмента",
        link: "#",
      },
      {
        id: 3,
        title: "Школа цифровых технологий",
        link: "#",
      },
      {
        id: 4,
        title: "Гуманитарная школа ",
        link: "#",
      },
      {
        id: 5,
        title: "Школа бизнеса",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Дополнительно",
    list: [
      {
        id: 1,
        title: "Миссия и ценности",
        link: "#",
      },
      {
        id: 2,
        title: "История",
        link: "#",
      },
      {
        id: 3,
        title: "Стратегия развития",
        link: "#",
      },
      {
        id: 4,
        title: "Вакансии",
        link: "#",
      },
      {
        id: 5,
        title: "Контакты",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Полезные переходы",
    list: [
      {
        id: 1,
        title: "Карта кампуса",
        link: "#",
      },
      {
        id: 2,
        title: "Новости Университета",
        link: "#",
      },
      {
        id: 3,
        title: "Библиотека",
        link: "#",
      },
      {
        id: 4,
        title: "Гуманитарная школа ",
        link: "#",
      },
      {
        id: 5,
        title: "Школа бизнеса",
        link: "#",
      },
    ],
  },
];

const infoLinks = [
  {
    id: 1,
    title: "Приемная комиссия",
    type: "withNumber",
    number: "+7(777) 770 77-77",
    email: "info@narxoz.kz",
    contactForm: "WhatsApp",
  },
  {
    id: 2,
    title: "Офис эдвайзеров",
    type: "withNumber",
    number: "+7(777) 770 77-77",
    email: "info@narxoz.kz",
    contactForm: "WhatsApp",
  },
  {
    id: 3,
    title: "Welcome Centre",
    type: "withNumber",
    number: "+7(777) 770 77-77",
    email: "info@narxoz.kz",
    contactForm: "WhatsApp",
  },
  {
    id: 4,
    title: "Пресс-служба",
    subtitle: "Фамилия Имя",
    email: "info@narxoz.kz",
  },
];

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-top-wrapper py-20 bg-primary text-white">
          <Container>
            <div className="inner-wrapper flex flex-col gap-12">
              <div className="inner-top grid grid-cols-4 gap-12">
                <LogoAnother className="w-48" />

                <div className="contacts flex flex-col gap-6">
                  <div className="contact-title font-semibold">Контакты</div>

                  <div className="address-email flex flex-col gap-3">
                    <div className="address">
                      050035, ул. Жандосова, 55, г. Алматы, Казахстан
                    </div>

                    <div className="email">info@narxoz.kz</div>
                  </div>
                </div>

                <div className="social-media flex flex-col gap-6">
                  <div className="social-media-title font-semibold">
                    Соц. сети
                  </div>

                  <div className="social-platforms flex items-center gap-4">
                    <Facebook className="w-8 h-fit" />

                    <Instagram className="w-8 h-fit" />

                    <Telegram className="w-8 h-fit" />

                    <Youtube className="w-8 h-fit" />
                  </div>
                </div>
              </div>

              <div className="inner-middle grid grid-cols-4 gap-12">
                {links.map((link) => (
                  <div
                    key={link.id}
                    className="link-item-list flex flex-col gap-6">
                    <div className="link-title font-semibold">{link.title}</div>

                    <div className="list flex flex-col gap-3">
                      {link.list.map((listItem) => (
                        <div key={listItem.id}>
                          {<div>{listItem.title}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="inner-bottom grid grid-cols-4 gap-12">
                {infoLinks.map((infoLink) => (
                  <div key={infoLink.id} className="infoLink">
                    {infoLink.type ? (
                      <div className="flex flex-col gap-6">
                        <div className="title font-semibold uppercase text-lg">
                          {infoLink.title}
                        </div>

                        <div className="list flex flex-col gap-1.5">
                          <div className="number">{infoLink.number}</div>

                          <div className="email">{infoLink.email}</div>

                          <div className="contactForm">
                            {infoLink.contactForm}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-6">
                        <div className="title uppercase text-lg font-semibold">
                          {infoLink.title}
                        </div>

                        <div className="list flex flex-col gap-1.5">
                          <div className="subtitle">{infoLink.subtitle}</div>

                          <div className="email">{infoLink.email}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        <div className="footer-bottom bg-dark-gray text-white py-8">
          <Container>
            <div className="flex justify-between items-center text-sm">
              <div className="footer-copyright font-light">
                © НАРХОЗ - 2024. Все права защищены
              </div>

              <div className="policy-confidentiality flex items-center gap-6">
                <div className="policy">Пользовательское соглашение</div>

                <div className="confidentiality">
                  Политика конфиденциальности
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
