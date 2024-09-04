import ModalTest from "./custom-modal/modal-test";
import classic from "./assets/classic.jpg";
import hunter from "./assets/hunter.jpg";
import meteor from "./assets/meteor.jpg";
const cards = [
  {
    name: "Classic 350",
    image: classic,
    header: "Classic 350",
    body: "Specifications of Royal Enfield Classic 350 The Royal Enfield Classic 350 is powered by a 349.34 cc air-cooled engine which produces 20.21 PS @ 6100 rpm of power. It has a fuel tank of 13 L and a claimed mileage of 41.55 kmpl",
  },
  {
    name: "Hunter 350",
    image: hunter,
    header: "Hunter 350",
    body: "Specifications of Royal Enfield Hunter 350 The Royal Enfield Hunter 350 is powered by a 349.34 cc air-cooled engine which produces 20.21 PS @ 6100 rpm of power. It has a fuel tank of 13 L and a claimed mileage of 41.55 kmpl",
  },
  {
    name: "Meteor",
    image: meteor,
    header: "Meteor",
    body: "Specifications of Royal Enfield Meteor 350 The Royal Enfield Meteor 350 is powered by a 349.34 cc air-cooled engine which produces 20.21 PS @ 6100 rpm of power. It has a fuel tank of 13 L and a claimed mileage of 41.55 kmpl",
  },
];
function App() {
  return (
    <>
      <h1 className="p-5 text-center text-[40px] font-extrabold italic">
        Royal Enfield
      </h1>
      <div className="flex gap-5 justify-center">
        {cards.map((cardObjects, index) => {
          return <ModalTest key={index} data={cardObjects} />;
        })}
      </div>
    </>
  );
}

export default App;
