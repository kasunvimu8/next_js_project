import MeetupList from "@/components/meetups/MeetupList";
const meetups = [
  {
    id: "m1",
    title: "First Meetup",
    description: "Meetup 1 description",
    description: "some description",
    address: "Belin, Germany",
    image:
      "https://img2.storyblok.com/1920x0/filters:quality(75):focal(1418x420:1419x421):format(webp)/f/58806/2836x840/5d1249a07f/berlin_stage_desktop.jpg",
  },
];
function HomePage() {
  return <MeetupList meetups={meetups} />;
}

export default HomePage;
