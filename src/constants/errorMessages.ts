export const ERROR_MESSAGES = {
  authMsg: {
    INVALID_CREDENTIALS: "Incorrect email or password.",
    ALREADY_EXISTS: "This is already taken.",
    UNAUTHORIZED: "You need to log in to continue.",
    DEFAULT: "An error occurred while logging in. Please try again.",
  },
  validationMsg: {
    EMPTY_VALUE: "This field cannot be empty.",
    EMAIL_FORMAT: "Please enter a valid email address.",
    PASSWORD_WEAK:
      "Your password must be 8-20 characters long and include at least one letter, one number, and one special character.",
    PASSWORD_MISMATCH: "Passwords do not match.",
    NICKNAME_WEAK:
      "Nicknames must be 2-10 characters long and contain only letters, numbers, or Korean characters.",
    PHONE_NUMBER_FORMAT: "Please enter numbers only.",
  },
  networkMsg: {
    TIMEOUT: "The server is taking too long to respond. Please try again.",
    SERVER_ERROR: "Something went wrong on our end. Please try again later.",
    UNKNOWN: "An unexpected error occurred. Please try again.",
  },
};
