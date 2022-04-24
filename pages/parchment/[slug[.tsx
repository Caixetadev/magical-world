import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";

const title = "Parchment Details";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions that have been in my cauldrons.";

const ParchmentDetails = () => {
  return (
    <PageLayout pageMeta={{ title: "Potion Details" }}>
      <PageTitle title={title} center icons={false} />
    </PageLayout>
  );
};

export default ParchmentDetails;
