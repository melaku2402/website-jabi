import { WhyChooseUs } from './WhyChooseUs';
import { FAQ } from './FAQ';

export function WhyChooseAndFaq() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
        <WhyChooseUs />
        <FAQ />
      </div>
    </section>
  );
}
