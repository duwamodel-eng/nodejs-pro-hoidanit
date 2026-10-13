import { prisma } from "config/client"
import getConection from "config/database"

const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string) => {

  // insert into database


  const newUser = await prisma.user.create({
    data: {
      name: fullName,
      email: email,
      address: address
    }
  })
  return newUser
}

const getAllUser = async () => {
  const connection = await getConection()
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `user`'
    );
    return results
  } catch (err) {
    console.log(err);
    return []
  }
}

const handleDeleteUser = async (id: string) => {
  const connection = await getConection()
  try {
    const sql = 'DELETE FROM `users` WHERE `id` = ?';
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result
  } catch (err) {
    console.log(err);
    return []
  }
}

const getUserById = async (id: string) => {
  const connection = await getConection()
  try {
    const sql = 'SELECT * FROM `users` WHERE `id` = ?';
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result[0]
  } catch (err) {
    console.log(err);
    return []
  }
}


const updateUserById = async (
  id: string,
  email: string, address: string, fullName: string
) => {
  const connection = await getConection()
  try {
    const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ? ';
    const values = [fullName, email, address, id];

    const [result, fields] = await connection.execute(sql, values);

    return result
  } catch (err) {
    console.log(err);
    return []
  }
}


export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }