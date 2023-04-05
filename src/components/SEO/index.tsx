import Head from "next/head";

const MAIN_TITLE = "Blog app";

type IMeta = {
  name: string;
  content: string;
};

type IMetaMap = IMeta[];

export type ISeo = {
  title?: string;
  meta?: IMetaMap;
};

type ISeoReturn = JSX.Element;

const Seo = ({ title, meta }: ISeo): ISeoReturn => {
  const appTitle = `${MAIN_TITLE} ${title ? ` - ${title}` : ""}`;

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

      <title>{appTitle}</title>

      {!!meta &&
        meta.map((item) => (
          <meta key={item.content} name={item.name} content={item.content} />
        ))}
    </Head>
  );
};

export default Seo;
