import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";
import React from "react";

const title = "Potion Details";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions I have concocted.";

const PotionDetails = () => {
  return (
    <PageLayout pageMeta={{ title: "Potion Details" }}>
      <PageTitle title={title} subtitle={subtitle} icons={false} />
    </PageLayout>
  );
};

export default PotionDetails;
