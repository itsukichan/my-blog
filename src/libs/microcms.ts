import MicroCMS from "microcms-js-sdk";

const client = MicroCMS.createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
})

export const getBlogs = async (queries: MicroCMS.MicroCMSQueries) => {
  return await client.get({ endpoint: "blogs", queries })
}

export const getPortfolios = async (queries: MicroCMS.MicroCMSQueries) => {
  return await client.get({ endpoint: "portfolios", queries })
}


export const getBlogDetail = async (
  blogId: string,
  queries?: MicroCMS.MicroCMSQueries
) => {
  return await client.getListDetail({ endpoint: "blogs", contentId: blogId, queries })
}

export const getPortfolioDetail = async (
  portfolioId: string,
  queries?: MicroCMS.MicroCMSQueries
) => {
  return await client.getListDetail({ endpoint: "portfolios", contentId: portfolioId, queries })
}
