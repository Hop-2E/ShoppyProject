const Product3 = ({ data }) => {
  return (
    <div className="types">
      <img
        style={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "row",
        }}
        className="types"
        src={data.image}
        alt=""
      />
    </div>
  );
};
export default Product3;
