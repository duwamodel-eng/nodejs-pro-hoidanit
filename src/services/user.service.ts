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
  const users = prisma.user.findMany()
  return users
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
  const user = await prisma.user.findUnique({ where: { id: +id } })
  return user
}


const updateUserById = async (
  id: string,
  email: string, address: string, fullName: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id: +id },
    data: {
      name: fullName,
      email: email,
      address: address
    }
  })
  return updatedUser
}


export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }