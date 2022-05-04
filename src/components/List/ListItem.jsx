import "./ListItem.css";
import Card from "../Card/Card";

const ListItem = (props) => {
  const createList = props.listData.map((persons) => {
    return (
      <li
        key={Math.random() * 1337}
        className="list-item"
      >{`Name: ${persons.name} --- Age: ${persons.age}`}</li>
    );
  });

  return (
    <Card>
      <section className="_users-list">
        <ul>{createList}</ul>
      </section>
    </Card>
  );
};

export default ListItem;
