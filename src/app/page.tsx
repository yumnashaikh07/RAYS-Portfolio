import Servicecard from "../components/servicecard";
import Herosection from "../components/herosection";
import Bundle from "../components/bundle";
import KeyTraits from "../components/keytraits";
import Contact from "../components/contact";
export default function Home() {
  return (
    <main className="mx-auto" >
      <Herosection/>
      <section id="service">
        <Servicecard/>
      </section>
        <section id="contact">
          <Contact/>
        </section>
       <section id="bundle" >
        <Bundle/>
      </section>
      <section>
        <KeyTraits/>
      </section>
    </main>
  );
}