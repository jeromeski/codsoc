import { TEST_DISPATCH } from "./auth.types"

// Register User
export const registerUser = (userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  }
}