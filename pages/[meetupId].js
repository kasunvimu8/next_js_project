import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
    console.log ('Rendering')
  return (
    <MeetupDetail
      src="https://img2.storyblok.com/1920x0/filters:quality(75):focal(1418x420:1419x421):format(webp)/f/58806/2836x840/5d1249a07f/berlin_stage_desktop.jpg"
      title="Meet Up 1"
      address="1212/ Stte Street, Suite"
      description="Meet Up 1 Description"
    />
  );
}

export default MeetupDetails;
