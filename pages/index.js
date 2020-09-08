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
import Meta from "../components/meta.js";

const Home = (props) => (
  <>
    <Meta />
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
        className="toptitle"
      >
        You're invited to a season of
      </h3>
      <h1
        style={{
          color: "white",
          textShadow: "#DD5B39 8px 8px 0px",
          fontSize: "8em",
        }}
        className="title"
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
    <Grid.Container gap={2} justify="center" style={{ marginBottom: "60px" }}>
      <Grid xs={23} md={9}>
        <img
          width={"650px"}
          height={"257px"}
          disableAutoResize={true}
          style={{
            height: "297px!important",
            objectFit: "cover",
            borderRadius: "10px",
            paddingRight: "10px",
          }}
          src="https://i.imgur.com/mQTh5m3.jpg"
        />
      </Grid>
      <Grid xs={23} md={9}>
        <div style={{ margin: "1.5rem auto" }}>
          <h3 style={{ marginBlockEnd: "0em" }}>Practice your skills in</h3>
          <h1>all four WSC events</h1>
          <h4 style={{ fontWeight: "400" }}>
            From debates on Discord, to a Bowl on Socrative our team has ensured
            your experience will be as similar to a standard round as possible.
            You'll apply the same skills you'll need when competing in the
            Scholars Cup.
          </h4>
        </div>
      </Grid>
    </Grid.Container>
    <Grid.Container gap={2} justify="center" style={{ marginBottom: "30px" }}>
      <Grid xs={23} md={0}>
        <img
          width={"650px"}
          height={"297px"}
          disableAutoResize={true}
          style={{
            height: "297px!important",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src="https://www.iccsydney.com.au/getattachment/19d937a8-766c-47a2-a7d6-f10f160eeb62/world-scholars-cup_2018_FBanner_1700x580.jpg.aspx?lang=en-AU&width=1700&height=580&ext=.jpg"
        />
      </Grid>
      <Grid xs={23} md={9}>
        <div style={{ margin: "0.2rem auto" }}>
          <h3 style={{ marginBlockEnd: "0em" }}>It's all going towards</h3>
          <h1>keeping WSC alive</h1>
          <h4 style={{ fontWeight: "400" }}>
            The Scholars Cup has been struggling due to the COVID-19 crisis.
            They've started a{" "}
            <a href="https://www.gofundme.com/f/wsc-covid">GoFundMe</a>{" "}
            campaign, to ensure the program survives. All the proceeds from
            Couch Camp 2 will go to the fundraiser.
          </h4>
        </div>
      </Grid>
      <Grid xs={23} md={9} className="hideOnMobile">
        <img
          width={"650px"}
          height={"297px"}
          disableAutoResize={true}
          style={{
            height: "297px!important",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src="https://www.iccsydney.com.au/getattachment/19d937a8-766c-47a2-a7d6-f10f160eeb62/world-scholars-cup_2018_FBanner_1700x580.jpg.aspx?lang=en-AU&width=1700&height=580&ext=.jpg"
        />
      </Grid>
    </Grid.Container>
    <Divider />
    <h1
      style={{ textAlign: "center", marginBottom: "20px" }}
      className="hideOnMobile"
    >
      Find your local Couch Camp
    </h1>
    <p
      style={{
        textAlign: "center",
        margin: "auto",
        maxWidth: "700px",
        marginBottom: "30px",
        padding: "0 10px",
      }}
      className="hideOnMobile"
    >
      This time around there are going to be multiple Couch Camps scattered
      around the world. Just choose the one that is closest to you!
    </p>
    <Grid.Container
      gap={2}
      justify="center"
      style={{ maxWidth: "1125px", margin: "auto" }}
      className="hideOnMobile"
    >
      {props.events.map((event) => (
        <Grid xs={18} md={8}>
          <Card>
            <Image src={event.image} height="100%" />
            <h4 style={{ marginBlockEnd: "0em", fontWeight: "700" }}>
              {event.title}
            </h4>
            <p style={{ marginBlockStart: "0.4em" }}>
              <strong>Dates:</strong> {event.date}
              <br />
              <strong>Contact email:</strong> <a href={event.emailURL}>{event.email}</a>
            </p>
            <Card.Footer>
              <Link color href={event.link}>
                Join the round or learn more.
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    <div className="hideOnDesktop">
      <h1
        style={{ textAlign: "left", marginBottom: "20px", marginLeft: "10px" }}
      >
        Find your local Couch Camp
      </h1>
      <p
        style={{
          textAlign: "left",
          maxWidth: "700px",
          marginBottom: "30px",
          marginLeft: "5px",
          padding: "0 10px",
        }}
      >
        This time around there are going to be multiple Couch Camps scattered
        around the world. Just choose the one that is closest to you!
      </p>
      <Grid.Container
        gap={2}
        justify="left"
        style={{ maxWidth: "1125px", marginLeft: "5px", textAlign: "left" }}
      >
        {props.events.map((event) => (
          <Grid xs={23} md={8}>
            <Card>
              <Image src={event.image} height="100%" />
              <h4 style={{ marginBlockEnd: "0em", fontWeight: "700" }}>
                {event.title}
              </h4>
              <p style={{ marginBlockStart: "0.4em" }}>
                <strong>Dates:</strong> {event.date}
                <br />
                <strong>Contact email:</strong> {event.email}
              </p>
              <Card.Footer>
                <Link color href={event.link}>
                  Join the round or learn more.
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
    <Divider y={5}>Couch Camp 2020</Divider>
    <style jsx global>{`
      .caption {
        margin-top: 1rem;
      }
      @media screen and (max-width: 900px) {
        .hideOnMobile {
          display: none;
        }
        .toptitle{
          font-size: 1.3em!important;
        }
        .title{
          font-size: 5em!important;
        }
      }
      @media screen and (min-width: 900px) {
        .hideOnDesktop {
          display: none;
        }
      }
    `}</style>
  </>
);

export async function getServerSideProps() {
  const events = await fetch(
    "http://sampoder-api.herokuapp.com/v0.1/OnePwaa%20Camps/Camps"
  )
    .then((r) => r.json())
    .then((events) =>
      events.map(({ id, fields }) => ({
        id,
        title: fields["Camp Name"],
        link: fields["Sign Up Link"],
        date: fields["Formatted Date"],
        image: fields["Header Image"][0]["url"],
        email: fields["Contact Email"],
        emailURL: 'mailto:'+ fields["Contact Email"]
      }))
    );
  console.log(events);
  return { props: { events } };
}

export default Home;
