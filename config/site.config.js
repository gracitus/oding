/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'cvstream01@outlook.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/128.png',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || 'fileio',

  // The name of your website. Present alongside your icon.
  title: "CVKentD2",

  // Used for the title of the website, and the title of the page when you share the link.
  siteTitle: "CVKentD2",
  // Used for the description of the website, and the description of the page when you share the link.
  siteDescription: "Foundation for Files.",
  // Used for the image of the website, and the image of the page when you share the link.
  siteImage: "/icons/512.png",
  // Used for the URL of the website, and the URL of the page when you share the link.
  siteUrl: "https://vdn-f1.616169.xyz",
  // Used for the language of the website, and the language of the page when you share the link.
  siteLocale: "en_US",
  // Used for the author of the website, and the author of the page when you share the link.
  siteAuthor: "CVKentD2",
  // Used for the keywords of the website, and the keywords of the page when you share the link.
  keywords: "CVKentD2",
  // Used for the type of the website, and the site type of the page when you share the link.
  siteType: "website",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: 'public',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    'CVKentD2@2025',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  // protectedRoutes: [''],
  protectedRoutes: ['UNETLAB'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:contact@convk.live',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    // {
    //   name: 'GitHub',
    //   link: 'https://github.com/ishare2-org',
    // },
    // {
    //   name: 'Telegram',
    //   link: 'https://t.me/NetLabHub',
    // },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}