import { Request, Response } from 'express'
import { getAllUser, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from 'services/user.service'

const getHomePage = async (req: Request, res: Response) => {
  // get users
  const users = await getAllUser();
  return res.render("home.ejs", {
    users: users
  })
}

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user.ejs")
}

const postCreateUser = async (req: Request, res: Response) => {
  const { fullName, email, address } = req.body

  // handle create user 
  await handleCreateUser(fullName, email, address)
  return res.redirect("/")
}

const postDeleteUser = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params
  await handleDeleteUser(id)
  return res.redirect("/")
}

const getViewUser = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params
  // get user by id
  const user = await getUserById(id)
  return res.render("view-user.ejs", {
    id: id,
    user: user
  })
}

const postUpdateUser = async (req: Request, res: Response) => {
  const { id, email, address, fullName } = req.body
  // update user by id
  await updateUserById(id, email, address, fullName)
  return res.redirect("/")
}



export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser }