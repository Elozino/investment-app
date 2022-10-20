import sanityClient from "@sanity/client";
// import ImageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: "w5xc9yp6",
  dataset: "production",
  apiVersion: "2022-10-18",
  useCdn: true,
  token:
    "sksAUDu0Z5cTLmnbsFOLPhSDyNA9swIgSXKuERs0eo6JNzdrlgeuU8v9h2Xt477vQAPj4yZfXNwOD2ITGJ7ksYkQm3AcjVsgiDeKuzTWMeY5aotxOaYgmJxtdk0ZKJ92Qgm2zHnQUJJLjk4uaWHcv7x1HdMssCKWDf6KxYS3cujcUaCLTbpk",
});

// const builder = ImageUrlBuilder(client)
// export const urlFor = (source) => builder.image(source)