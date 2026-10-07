import { Request, Response } from 'express'
import { getAllUser, handleCreateUser } from '../services/user.service'

const getHomePage = async (req: Request, res: Response) => {
  // get users
  const users = await getAllUser();
  console.log(">>> check users: ", users)
  return res.render("home.ejs", {
    name: users
  })
}

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user.ejs")
}

const postCreateUser = (req: Request, res: Response) => {
  const { fullName, email, address } = req.body

  // handle create user 
  handleCreateUser(fullName, email, address)
  return res.redirect("/")
}

export { getHomePage, getCreateUserPage, postCreateUser }