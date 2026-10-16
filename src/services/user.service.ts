import { prisma } from "config/client"
import getConection from "config/database"

const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string) => {

  // insert into database
  const newUser = await prisma.user.create({
    data: {
      fullName: fullName,
      username: email,
      address: address,
      password: "",
      accountType: ""
    }
  })
  return newUser
}

const getAllUser = async () => {
  const users = prisma.user.findMany()
  return users
}

const getAllRoles = async () => {
  const roles = prisma.role.findMany()
  return roles
}

const handleDeleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: { id: +id }
  })
  return result
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
      fullName: fullName,
      username: email,
      address: address,
      password: "",
      accountType: ""
    }
  })
  return updatedUser
}


export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById, getAllRoles }