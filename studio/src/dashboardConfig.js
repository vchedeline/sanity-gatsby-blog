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
                    "62efca0213baf8213159fc08",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sabru5oj",
                  apiId: "c0db8f84-b757-4f36-92f1-fe3040e508ee",
                },
                {
                  buildHookId: "62efca024739791ab2345eb1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6d72bemz",
                  apiId: "75aebae9-d5e3-4673-9368-c8d4db8daab7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/vchedeline/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6d72bemz.netlify.app",
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
