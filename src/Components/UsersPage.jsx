function UserPage({ data }) {
  return (
    <div>
      <div>
        <img src={data.picture.medium} />
      </div>
      <div>{data.name.first}</div>
    </div>
  );
}

export default UserPage;
