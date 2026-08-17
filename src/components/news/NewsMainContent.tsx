import { FeaturedNews } from './FeaturedNews';
import { LatestNewsGrid } from './LatestNewsGrid';
import { CategoriesSidebar } from './CategoriesSidebar';
import { UpcomingEvents } from './UpcomingEvents';
import { PhotoGallery } from './PhotoGallery';

export function NewsMainContent() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-12 lg:col-span-2">
          <FeaturedNews />
          <LatestNewsGrid />
        </div>

        <aside className="space-y-6">
          <CategoriesSidebar />
          <UpcomingEvents />
          <PhotoGallery />
        </aside>
      </div>
    </section>
  );
}
