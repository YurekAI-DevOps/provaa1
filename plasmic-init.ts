import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "5arBmnxc1unAsmtqTrYo7v";
export const projectApiToken = "0XFaGauwdM4AGkSYWibNc0yqdOjdWZWRJdA2iNwvqSzOiKMXHvjEZAfFCf2H5U0X46vvmo1dUkJlu8X5G8Ijg";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
