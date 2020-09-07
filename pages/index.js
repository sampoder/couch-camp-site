import Head from "next/head";
import {
  Page,
  Text,
  Card,
  Note,
  Code,
  Spacer,
  Grid,
  Heading,
  Link,
  Image,
} from "@geist-ui/react";
import LazyHero from "react-lazy-hero";

const Home = (props) => (
  <>
    <h2 style={{ textAlign: "center" }}>🏠 Couch Camp</h2>
    <LazyHero style={{ overflow: "hidden" }} parallaxOffset={0} imageSrc="https://images.pexels.com/photos/269323/pexels-photo-269323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" color="#ffff33">
      <h1 style={{maxWidth: '600px', fontWeight: '400'}}>Participate in a (unofficial) <strong>World Scholars Cup</strong> round from your own couch</h1>
      <h2>↓</h2>
    </LazyHero>
    <Grid.Container gap={2} justify="center">
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
);

export async function getStaticProps() {
  const events = await fetch(
    "http://sampoder-api.herokuapp.com/v0.1/OnePwaa%20Camps/Camps"
  )
    .then((r) => r.json())
    .then((events) =>
      events.map(({ id, fields }) => ({
        id,
        title: fields["Camp Name"],
        slug: fields["Slug"],
        start:
          fields["Start Date (Local Time Please)"]
            .split("T")[0]
            .replace("-", "/")
            .replace("2020/", "")
            .replace("-", "/")
            .split("/")[1] +
          "/" +
          fields["Start Date (Local Time Please)"]
            .split("T")[0]
            .replace("-", "/")
            .replace("2020/", "")
            .replace("-", "/")
            .split("/")[0],
        end:
          fields["End Date (Local Time Please)"]
            .split("T")[0]
            .replace("-", "/")
            .replace("2020/", "")
            .replace("-", "/")
            .split("/")[1] +
          "/" +
          fields["End Date (Local Time Please)"]
            .split("T")[0]
            .replace("-", "/")
            .replace("2020/", "")
            .replace("-", "/")
            .split("/")[0],
      }))
    );
  console.log(events);
  return { props: { events } };
}

export default Home;
