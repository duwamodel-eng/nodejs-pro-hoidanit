import getConection from "../config/database"

const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string) => {

  // insert into database
  const connection = await getConection()
  try {
    const sql = 'INSERT INTO `users`(`name`, `email`,`address`) VALUES (?, ?, ?)';
    const values = [fullName, email, address];

    const [result, fields] = await connection.execute(sql, values);
    return result
  } catch (err) {
    console.log(err);
    return []
  }

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