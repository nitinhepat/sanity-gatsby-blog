export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6152d06ee42fa5c8c95a7f3b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yz9zbwu2",
                  apiId: "fa2a7955-5fa2-4e4e-9f1d-2936d89a5ce2",
                },
                {
                  buildHookId: "6152d06e678a6cc1f9b4fa3f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7tq4o13k",
                  apiId: "e151448b-dd4f-48b8-a353-d065e5f67b24",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nitinhepat/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7tq4o13k.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
