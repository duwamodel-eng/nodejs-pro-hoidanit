import getConection from "../config/database"

const handleCreateUser = (
  fullName: string,
  email: string,
  address: string) => {
  // insert into database

  // return result
  console.log(">>> insert a new user")
}

const getAllUser = async () => {
  const connection = await getConection()
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `users`'
    );
    return results
  } catch (err) {
    console.log(err);
    return []
  }
}
export { handleCreateUser, getAllUser }