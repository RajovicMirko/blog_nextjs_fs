import { useRouter } from "next/router";
import { useEffect } from "react";
import Seo from "src/components/SEO";

const Home = (): JSX.Element => {
  const { push } = useRouter();

  useEffect(() => {
    const handleRedirect = () => {
      push("/users");
    };

    handleRedirect();
  }, [push]);

  return <Seo meta={metaMap} />;
};

export default Home;

// constants
const metaMap = [
  { name: "description", content: "This is test full-stack next js app" },
];
