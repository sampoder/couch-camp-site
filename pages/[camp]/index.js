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
      <Grid.Container gap={2} style={{ overflow: "hidden" }} justify="center">
      {props.events.map((event) => (
        <Grid xs={6}>
          <Card shadow style={{ width: "100%", marginBottom: "24px" }}>
            <Image
              src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1549&q=80"
              height="100%"
            />
            <h4 style={{ marginBlockEnd: "0em" }}>{event.title}</h4>
            <p style={{ marginBlockStart: "0.4em" }}>
              From {event.start} to {event.end}, we'll be taking a trip to the
              Lion City (which sadly does not have any lions).
            </p>
            <Card.Footer>
              <Link color href={event.slug}>
                Learn more and sign up.
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
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

