
import UiCards from '../components/meetups/UiCards'
const DummyMeetUps = [
  {
    id: 1,
    name: "Kigali Convention Meetings",
    schedule: "Manzi Cedrick",
    date: "09/12/2005",
    location: "Kigali,Rwanda",
  },
  {
    id: 2,
    name: "Kigali Management Meeting",
    schedule: "Cedrick",
    date: "09/12/2005",
    location: "Kigali,Rwanda",
  },
  {
    id: 3,
    name: "Kigali Management Meeting",
    schedule: "Cedrick",
    date: "09/12/2005",
    location: "Kigali,Rwanda",
  },
  {
    id: 4,
    name: "Kigali Management Meeting",
    schedule: "Cedrick",
    date: "09/12/2005",
    location: "Kigali,Rwanda",
  },
  {
    id: 5,
    name: "Kigali Management Meeting",
    schedule: "Cedrick",
    date: "09/12/2005",
    location: "Kigali,Rwanda",
  },
];
export default function Home(props) {
  return (
    <UiCards meetUp={props.meetUp}/>
  )
}
export async function getServerSideProps(context){
  const req = context.req;
  const res = context.res;
  return {
    props :{
      meetUp : DummyMeetUps  
    }
  }
}
