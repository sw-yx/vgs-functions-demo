import axios from "axios"
import path from "path"
export default {
  siteRoot: "https://vgs-functions-demo-test.netlify.com",
  getSiteData: () => ({
    title: "React Static"
  }),
  // getRoutes: async () => {
  //   const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //   return [
  //     {
  //       path: "/blog",
  //       getData: () => ({
  //         posts
  //       }),
  //       children: posts.map((post) => ({
  //         path: `/post/${post.id}`,
  //         component: "src/containers/Post",
  //         getData: () => ({
  //           post
  //         })
  //       }))
  //     }
  //   ]
  // },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
}
