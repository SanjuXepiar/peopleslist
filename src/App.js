import "./App.css";

const App = () => <PeopleList />;
const PeopleList = () => {
  const peoples = [
    {
      name: "John Doe",
      job: "developer",
      image: 85,
    },
    {
      name: "Marcus Bell",
      job: "doctor",
      image: 50,
    },
    {
      name: "Karren Swiss",
      job: "painter",
      image: 64,
    },
  ];
  return (
    <section>
      <People person={peoples[0]} />
      <People person={peoples[1]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </People>
      <People person={peoples[2]} />
    </section>
  );
};
const People = ({ person, children }) => {
  const { name, image, job } = person;
  const url = `https://randomuser.me/api/portraits/thumb/men/${image}.jpg`;
  console.log(children);
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
