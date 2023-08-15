import {
  User,
  Product,
  Order,
  Feedback
} from '@prisma/client'

export type IParams = {
  id?: string
}

export type dbUser = Omit<User, 'createdAt' | 'updatedAt'> & {
  createdAt: String
  updatedAt: String
}

export type putUser = Omit<dbUser, 'createdAt'>

export type detailProduct = Product & {
  feedbacks: dbFeedback[]
}

export type dbOrder = Omit<Order, 'createdAt' | 'updatedAt'> & {
  createdAt: String
  updatedAt: String
}

export type dbFeedback = Omit<Feedback, 'createdAt' | 'updatedAt'> & {
  createdAt: String
  updatedAt: String
}
