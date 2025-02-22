import MicroCMS from "microcms-js-sdk";

const client = MicroCMS.createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
})


export const getWorks = async (queries: MicroCMS.MicroCMSQueries) => {
  return await client.get({ endpoint: "works", queries })
}



export const getWorkDetail = async (
  workId: string,
  queries?: MicroCMS.MicroCMSQueries
) => {
  return await client.getListDetail({ endpoint: "works", contentId: workId, queries })
}
