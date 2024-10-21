import jwt from 'jsonwebtoken';

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        reject('Error while creating the token')
      }

      resolve({ token })
    })
  })
};