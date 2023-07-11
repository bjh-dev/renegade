import ClassesList from "@/components/ClassesList";
import CovidSafe from "@/components/CovidSafe";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Memberships from "@/components/Memberships";
import Reviews from "@/components/Reviews";
import ScrollUp from "@/components/ScrollUp";
import TextWithImage from "@/components/TextWithImage";
import { HomePagePayload } from "@/lib/types";

export interface HomePageProps {
  data: HomePagePayload;
}

const HomePage = ({ data }: HomePageProps) => {
  const { content } = data;
  return (
    <section className="sections flex flex-col">
      {content.map((s: any) => {
        let el: any = null;
        switch (s._type) {
          case "hero":
            el = <Hero key={s._key} data={s} />;
            break;
          case "textWithImage":
            el = <TextWithImage key={s._key} data={s} />;
            break;
          case "googleReviews":
            el = <Reviews key={s._key} data={s} />;
            break;
          case "pricing":
            el = <Memberships key={s._key} data={s} />;
            break;

          case "classList":
            el = <ClassesList key={s._key} data={s} />;
            break;
          case "boxedTextWithImage":
            el = <CovidSafe key={s._key} data={s} />;
            break;
          case "membershipForm":
            el = <Form key={s._key} data={s.applicationForm} />;
            break;
        }
        return el;
      })}
      <Footer />
      <ScrollUp />
    </section>
  );
};

export default HomePage;
