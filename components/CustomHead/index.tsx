import Head from 'next/head'

const CustomHead = ({name}: {name: string}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default CustomHead;