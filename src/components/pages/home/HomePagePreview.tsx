"use client";

import { useLiveQuery } from "next-sanity/preview";

import HomePage from "@/components/pages/home/HomePage";
import { homePageQuery } from "@/lib/queries";
import { HomePagePayload, SettingsPayload } from "@/lib/types";

const HomePagePreview = ({
  data: initialData,
  settings,
}: {
  data: HomePagePayload;
  settings: SettingsPayload;
}) => {
  const [data] = useLiveQuery<HomePagePayload | null>(
    initialData,
    homePageQuery
  );

  if (!data) {
    return (
      <div>Please start editing your Home document to see the preview!</div>
    );
  }

  return <HomePage data={data} settings={settings} />;
};

export default HomePagePreview;
