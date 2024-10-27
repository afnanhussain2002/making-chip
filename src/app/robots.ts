import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
  return {
      rules:[
        {
            userAgent: "*",
            allow: "/",
            disallow:["/privacy-policy","/terms-and-conditions"]
        }
      ],
      sitemap:`${process.env.MAIN_URL}/sitemap.xml`
  }
}