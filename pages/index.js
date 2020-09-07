import Head from "next/head";
import {
  Page,
  Text,
  Card,
  Note,
  Code,
  Spacer,
  Display,
  Divider,
  Grid,
  Heading,
  Row,
  Col,
  Link,
  Image,
} from "@geist-ui/react";
import LazyHero from "react-lazy-hero";

const Home = (props) => (
  <>
    <div
      style={{
        overflow: "hidden",
        marginBottom: "40px",
        backgroundColor: "#323c5a",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        padding: "60px 0px",
        marginBottom: "60px",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%2359699c' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <h3
        style={{
          color: "white",
          fontSize: "3em",
          marginBlockEnd: "-0.4em",
        }}
      >
        You're invited to a season of
      </h3>
      <h1
        style={{
          color: "white",
          textShadow: "#DD5B39 8px 8px 0px",
          fontSize: "8em",
        }}
      >
        Couch Camps{" "}
      </h1>
      <h3
        style={{
          color: "white",
        }}
      >
        A (unofficial) virtual World Scholars Cup season,
        <br />
        organised by the community.
      </h3>
      <h1
        style={{
          color: "white",
          textShadow: "#DD5B39 2px 2px 0px",
        }}
      >
        ↓
      </h1>
    </div>
    <Grid.Container gap={2} justify="center">
      <Grid xs={9} md={9}>
        <Display
          shadow
          caption="Now for GitHub deploying a pull request automatically."
        >
          <Image
            width="435"
            height="200"
            src="https://i.imgur.com/mQTh5m3.jpg"
            style={{objectFit: 'cover'}}
          />
        </Display>
      </Grid>
      <Grid xs={9} md={9}>
        <div style={{ margin: "2.5rem auto" }}>
          <h3 style={{ marginBlockEnd: "0em" }}>Practise your skills in</h3>
          <h1>all four WSC events</h1>
          <h4 style={{fontWeight: '400'}}>
            From debates on Discord, to a Bowl on Socrative our team has ensured
            your experience will be as similar to a standard round as possible.
            You'll apply the same skills you'll need when competing in the
            Scholars Cup.
          </h4>
        </div>
      </Grid>
    </Grid.Container>
    <Divider />
    <h1 style={{textAlign: 'center'}}>
      Find your local Couch Camp
    </h1>
    <Grid.Container gap={2} justify="center">
      {props.events.map((event) => (
        <Grid xs={6} md={6}>
          <Card>
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
    <Divider y={5}>Couch Camp 2020</Divider>
    <style jsx>{`
      .caption{
        margin-top: 1rem;
      }
    `
    }</style>
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
