import Head from "next/head";

import { IconTray } from "src/components/IconTray/IconTray.js";
import { PaperResume } from "src/resume_layouts/PaperResume.js";
import { ResponsiveResume } from "src/resume_layouts/ResponsiveResume.js";

export default function Index() {
  return (
    <>
      <Head>
        <title>{"Resume - Stephen O'Neil"}</title>
        <meta
          content="Resume and personal site of Stephen O'Neil, full-stack developer"
          name="description"
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
