import Head from "next/head";

import { IconTray } from "src/components/IconTray/IconTray.js";
import { PaperResume } from "src/resume_layouts/PaperResume.js";
import { ResponsiveResume } from "src/resume_layouts/ResponsiveResume.js";

export const config = {
  output: "export", // in prod, export final built site to HTML
  unstable_runtimeJS: false, // in prod, strip the JS from the exported HTML site; REMINDER: don't do anything that requires runtime JS, haha
};

export default function Index() {
  return (
    <>
      <Head>
        <title>{"Resume - Stephen O'Neil"}</title>
        <meta
          name="description"
          content="Resume and personal site of Stephen O'Neil, full-stack developer"
        />
      </Head>
      <main>
        <PaperResume />
        <ResponsiveResume />
        <IconTray />
      </main>
    </>
  );
}
