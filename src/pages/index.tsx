import Seo from "src/components/SEO";

const Home = (): JSX.Element => (
  <>
    <Seo title="Home" meta={metaMap} />
    <main>test app</main>
  </>
);

export default Home;

// constants
const metaMap = [
  { name: "description", content: "This is test full-stack next js app" },
];
