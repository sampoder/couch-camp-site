import { useRouter } from "next/router";
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
import Meta from "../../components/meta.js";

const Home = (
  props,
  {
    name = "Couch Camp 2020 Season",
    title = props.events[0].title,
    description = `A (unofficial) virtual World Scholars Cup regional round,
    organised by the community.`,
    image = "https://cloud-mfm9q02p9.vercel.app/screenshot_2020-09-08_at_4.38.34_pm.png",
    url = "https://couch-camp-site.vercel.app/",
  }
) => (
  <>
    <Head>
      <title>
        {title} - {name}
      </title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={name} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="msapplication-TileColor" content="#DD5B39" />
      <meta name="theme-color" content="#DD5B39" />
    </Head>
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
        A Couch Camp in
      </h3>
      <h1
        style={{
          color: "white",
          textShadow: "#DD5B39 8px 8px 0px",
          fontSize: "8em",
          maxWidth: "900px",
          margin: "auto",
        }}
        className="title"
      >
        {props.events[0].title}
      </h1>
      <h3
        style={{
          color: "white",
        }}
      >
        A (unofficial) virtual World Scholars Cup regional round,
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

    <Divider y={5}>Couch Camp 2020</Divider>
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
    `}</style>
  </>
);

export async function getStaticPaths() {
  const paths = await fetch(
    'http://sampoder-api.herokuapp.com/v0.1/OnePwaa%20Camps/Camps?select={"fields":["Slug"]}'
  )
    .then((r) => r.json())
    .then((paths) =>
      paths.map(({ id, fields }) => ({
        params: {
          camp: fields["Slug"],
        },
      }))
    );
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.camp;
  console.log(params);
  function filterSlugs(object) {
    return object.fields["Slug"] == params.camp;
  }
  console.log("http://sampoder-api.herokuapp.com/v0.1/OnePwaa%20Camps/Camps");
  const events = await fetch(
    "http://sampoder-api.herokuapp.com/v0.1/OnePwaa%20Camps/Camps?filterByFormula=%7BSlug%7D%3D'" +
      params.camp
  )
    .then((r) => r.json())
    .then((events) => events.filter(filterSlugs))
    .then((events) =>
      events.map(({ id, fields }) => ({
        id,
        title: fields["Camp Name"],
        link: fields["Sign Up Link"],
        start: fields["Start Date (Local Time Please)"]
          .replace("T", " ")
          .replace(".000Z", ""),
        end: fields["End Date (Local Time Please)"]
          .replace("T", " ")
          .replace(".000Z", ""),
        tz: fields["Time Zone (eg. GMT+9)"],
      }))
    );
  console.log(events);
  return { props: { events } };
}

export default Home;
