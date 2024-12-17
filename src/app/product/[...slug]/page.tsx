type DetailProductPageProps = {
  params: { slug: string[] };
};
export default async function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log(params);
  return (
    <div>
      <h1> This is Detail Product Page</h1>
      {params.slug && (
        <>
          <h2>
            id : {params.slug[0]}-{params.slug[1]}-{params.slug[2]}
          </h2>
          <p>category: {params.slug[0]}</p>
          <p>gender: {params.slug[1]}</p>
          <p>size: {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
