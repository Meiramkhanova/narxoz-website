import Container from "../../shared/ui/Container";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="contact-section">
      <Container>
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
          <div className="left-contact-form h-full flex items-center">
            <ContactForm />
          </div>

          <div className="right-image w-full">
            <img
              src="/images/contact.jpg"
              alt="contact"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
