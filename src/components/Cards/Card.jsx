import "./Card.scss";

const Card = ({ title, desc, img }) => {
  return (
    <div className="cards">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <img src={img} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Card;
