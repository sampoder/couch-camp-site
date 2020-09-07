import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/header'

const Post = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>{props.events[0].title}</h1>
      <p>Starts at: {props.events[0].start}</p>
      <p>Ends at: {props.events[0].end}</p>
      <p>All times in {props.events[0].tz}</p>
      <p><a href={props.events[0].link}>Sign up</a></p>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = await fetch(
    'http://sampoder-api.herokuapp.com/v0.1/OnePwaa%20Camps/Camps?select={"fields":["Slug"]}'
  )
    .then((r) => r.json())
    .then((paths) =>
      paths.map(({ id, fields }) => ({
        params: {
          camp: fields["Slug"],
        }
      }))
    )
  console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.camp
  console.log(params)
  const events = await fetch(
    'http://sampoder-api.herokuapp.com/v0.1/OnePwaa%20Camps/Camps?filterByFormula=%7BSlug%7D%3D\''+params.camp
  )
    .then((r) => r.json())
    .then((events) =>
      events.map(({ id, fields }) => ({
        id,
        title: fields["Camp Name"],
        link: fields["Sign Up Link"],
        start: fields["Start Date (Local Time Please)"].replace("T", " ").replace(".000Z", ""),
        end: fields["End Date (Local Time Please)"].replace("T", " ").replace(".000Z", ""),
        tz: fields["Time Zone (eg. GMT+9)"],
      }))
    )
  console.log(events);
  return { props: { events } };
};

