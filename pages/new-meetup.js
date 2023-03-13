// domain/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const onAddMeetup = (newMeetUpData) => {
    console.log(newMeetUpData)
}

function NewMeetup() {
    return (
        <NewMeetupForm onAddMeetup={onAddMeetup}/>
    )
}

export default NewMeetup;