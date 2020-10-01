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
  User,
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
        A (unofficial) virtual World Scholar's Cup season,
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
            From debates on Discord to a digital Challenge, our team has ensured
            your experience will be as similar to a standard round as possible.
            You'll apply the same skills you'll need when competing in the
            Scholar's Cup.
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
          src="https://www.iccsydney.com.au/getattachment/19d937a8-766c-47a2-a7d6-f10f160eeb62/world-Scholar's-cup_2018_FBanner_1700x580.jpg.aspx?lang=en-AU&width=1700&height=580&ext=.jpg"
        />
      </Grid>
      <Grid xs={23} md={9}>
        <div style={{ margin: "0.2rem auto" }}>
          <h3 style={{ marginBlockEnd: "0em" }}>It's all going towards</h3>
          <h1>keeping WSC alive</h1>
          <h4 style={{ fontWeight: "400" }}>
            The Scholar's Cup has been struggling due to the COVID-19 crisis.
            They've started a{" "}
            <a href="https://www.gofundme.com/f/wsc-covid">GoFundMe</a>{" "}
            campaign to ensure the program survives. All the proceeds from
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
          src="https://www.iccsydney.com.au/getattachment/19d937a8-766c-47a2-a7d6-f10f160eeb62/world-Scholar's-cup_2018_FBanner_1700x580.jpg.aspx?lang=en-AU&width=1700&height=580&ext=.jpg"
        />
      </Grid>
    </Grid.Container>
    <Divider />
    <Grid.Container gap={2} justify="center" style={{ marginBottom: "0px" }}>
      <Grid xs={23} md={6}>
        <div style={{ margin: "1.5rem auto" }}>
          <h3 style={{ marginBlockEnd: "0em" }}>Join in!</h3>
          <a href="https://forms.gle/FhYACNeh2UcjBguB6">
          <Button size="large" type="secondary">
            Sign up now.
          </Button>{" "}</a>
          <Spacer y={0.5} />
          <a href="https://discord.gg/8DgHcR2">
          <Button size="large" type="secondary">
            Find a team.
          </Button>{" "}</a>
        </div>
      </Grid>
      <Grid xs={23} md={6}>
        <div style={{ margin: "1.5rem auto" }}>
          <h3 style={{ marginBlockEnd: "-0.2em" }}>Key Details</h3>
          <p style={{ fontWeight: "400", lineHeight: "2.5" }}>
            <span style={{ marginBottom: "10px" }}>
              <strong>Dates:</strong> 15th Oct to 22nd Oct 
            </span>
            <br />
            <strong>Cost per person (in USD):</strong> $5
            <br />
            <strong>Hosted on:</strong> Discord
            <br />
            <strong>Contact:</strong>{" "}
            <a href="mailto:all@couch.camp">all@couch.camp</a>
          </p>
        </div>
      </Grid>
      <Grid xs={23} md={6}>
        <div style={{ margin: "1.5rem auto" }}>
          <h3 style={{ marginBlockEnd: "0em" }}>Organising Groups</h3>
          <p style={{ fontWeight: "400" }}>
            <User
              src="https://avansalpacaresources.weebly.com/uploads/1/1/1/7/111766893/editor/aarlogo-whiteborder.png?1581387864"
              name="Avan's Alpaca Resources"
            />
            <User
              src="data:image/png;base64,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"
              name="Scholars of Australia"
            />
            <User
              src="data:image/jpeg;base64,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"
              name="Champion Scholar Initiative"
            />
            <User
              src="https://www.onepwaa.org/assets/img/onepwaa_13%20(1).png"
              name="OnePwaa"
            />
            <br />
            <User
              src="https://yt3.ggpht.com/a/AATXAJxd11hjSuUwIGiHbZsKmHS3dm20QbHbSxA338_4iQ=s288-c-k-c0xffffffff-no-rj-mo"
              name="Joaquin Revello"
            />
          </p>
        </div>
      </Grid>
    </Grid.Container>
    <Divider y={5} className="hideOnMobile">
      <User
        src="https://avansalpacaresources.weebly.com/uploads/1/1/1/7/111766893/editor/aarlogo-whiteborder.png?1581387864"
        name="Avan's Alpaca Resources"
      />
      <User
        src="data:image/png;base64,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"
        name="Scholars of Australia"
      />
      <User
        src="data:image/jpeg;base64,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"
        name="Champion Scholar Initiative"
      />
      <User
        src="https://www.onepwaa.org/assets/img/onepwaa_13%20(1).png"
        name="OnePwaa"
      />
      <User
        src="https://yt3.ggpht.com/a/AATXAJxd11hjSuUwIGiHbZsKmHS3dm20QbHbSxA338_4iQ=s288-c-k-c0xffffffff-no-rj-mo"
        name="Joaquin Revello"
      />
    </Divider>
    <div style={{textAlign: 'center'}} className="hideOnDesktop">
      <br />
      <User
        src="https://avansalpacaresources.weebly.com/uploads/1/1/1/7/111766893/editor/aarlogo-whiteborder.png?1581387864"
        name="Avan's Alpaca Resources"
      />
      <User
        src="data:image/png;base64,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"
        name="Scholars of Australia"
      />
      <User
        src="data:image/jpeg;base64,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"
        name="Champion Scholar Initiative"
      />
      <User
        src="https://www.onepwaa.org/assets/img/onepwaa_13%20(1).png"
        name="OnePwaa"
      />
      <User
        src="https://yt3.ggpht.com/a/AATXAJxd11hjSuUwIGiHbZsKmHS3dm20QbHbSxA338_4iQ=s288-c-k-c0xffffffff-no-rj-mo"
        name="Joaquin Revello"
      />
    </div>
    <style jsx global>{`
      .caption {
        margin-top: 1rem;
      }
      @media screen and (max-width: 900px) {
        .hideOnMobile {
          display: none;
        }
        .toptitle {
          font-size: 1.3em !important;
        }
        .title {
          font-size: 5em !important;
        }
      }
      @media screen and (min-width: 900px) {
        .hideOnDesktop {
          display: none;
        }
      }
      .roundimage{
        height: 220px!important
      }
    `}</style>
  </>
);

export default Home;
