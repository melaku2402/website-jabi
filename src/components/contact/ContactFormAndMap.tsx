import { ContactForm } from './ContactForm';
import { LocationMap } from './LocationMap';

export function ContactFormAndMap() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ContactForm />
        <LocationMap />
      </div>
    </section>
  );
}
