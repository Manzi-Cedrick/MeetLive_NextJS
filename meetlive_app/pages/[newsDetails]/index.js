// import { useRouter } from "next/router"
import { MeetDetailed } from "../../components/meetups/MeetDetailed"

export default function DetailedPage (props) {
  return (
    <MeetDetailed meetupsData={props.meetupsData} />
  )
}
export async function getStaticPaths() {
    return {
        fallback : false,
        paths: [
            {
                params:{
                    newsDetails : '1'
                }
            }, {
                params:{
                    newsDetails : '2'
                }
            }
        ],
    }
}
export async function getStaticProps(context) {
    const meetUpId = context.params.newsDetails;
    return {
        props:{
            meetupsData :{
                id : meetUpId,
                image : 'https://media.timeout.com/images/105883842/750/422/image.jpg',
                name : 'Meet Kigali',
                address : 'Kigali,Rwanda',
                description : 'Meet Kigali Now Rwanda right now Kigali rwanda Meet Kigali Now Rwanda right now Kigali rwandaMeet Kigali Now Rwanda right now Kigali rwanda'
            }
        }
    }
}
