import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Post = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Name: {props.events[0].title}</h1>
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
      }))
    )
  console.log(events);
  return { props: { events } };
};

