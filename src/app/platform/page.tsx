import Application from "@/components/Application";
import Sidebar from "@/components/Sidebar";
import TextInput from "@/components/TextInput";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Application />
    </>
  );
};

export default Page;
