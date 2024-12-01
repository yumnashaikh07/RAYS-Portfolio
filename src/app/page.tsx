import Servicecard from "../components/servicecard";
import Herosection from "../components/herosection";
import Skill from "../components/skill";
import KeyTraits from "../components/keytraits";
export default function Home() {
  return (
    <main className="mx-auto" >
      <Herosection/>
      <section>
        <Skill/>
      </section>
      <section>
        <Servicecard/>
      </section>
      
      <section>
        <KeyTraits/>
      </section>
    </main>
  );
}

