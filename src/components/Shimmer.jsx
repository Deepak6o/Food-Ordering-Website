const Shimmer = () => {
  return (
    <>
      <h1>Shimmer is Loading....</h1>
      <div className="shimmer">
        {Array(15)
          .fill("")
          .map((e) => (
            <div className="shimmercard"></div>
          ))}
      </div>
    </>
  );
};
export default Shimmer;
