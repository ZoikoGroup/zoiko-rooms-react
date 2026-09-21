import {
  NewsroomHeroSection,
  FeaturedStorySection,
  FilteredAnnouncementsSection,
  MediaResourcesSection,
} from "@/components/newsrooms";

export default function NewsroomsPage() {
  return (
    <main>
      <NewsroomHeroSection />
      <FeaturedStorySection />
      <FilteredAnnouncementsSection />
      <MediaResourcesSection />
    </main>
  );
}
