import { BranchesList } from './BranchesList';
import { ContactFAQ } from './ContactFAQ';

export function BranchesAndFaq() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <BranchesList />
        <ContactFAQ />
      </div>
    </section>
  );
}
