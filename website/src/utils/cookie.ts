import { serialize, unset } from 'cookie'
import AccountDto from '../shared/dto/AccountDto'

const TOKEN_EXPIRES_IN_MILLIS = 30 * 60 * 1000

export const USER_ID = "userId"
export const TOKEN_EXPIRES_AT = "tokenExpiresAt"

const serializeCookie = (name : string, value: object | string, options?: any, priority?: string) => {
  const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value)

  return serialize(name, String(stringValue), options) + (priority ? `; Priority=${priority}`: '');
}

export const cookieHeaderValueFromAccountSession = (accountSession: AccountDto) : string[] => {

  const cookieOptions = {
    httpOnly: true,
    sameSite: 'Lax',
    path: '/',
    secure: false //might want to change to true
  }

  const tokenExpiresAt = new Date().getTime() + TOKEN_EXPIRES_IN_MILLIS

  return [
    serializeCookie(USER_ID, accountSession.email, cookieOptions, 'High'),
    serializeCookie(TOKEN_EXPIRES_AT, String(tokenExpiresAt), cookieOptions, 'High'),
  ]
}

export const unsetCookie = () : string[] => {

  const expire = new Date();

  const cookieOptions = {
    httpOnly: true,
    sameSite: 'Lax',
    path: '/',
    expires: expire,
  }

  return [
    serializeCookie(USER_ID, "", cookieOptions, 'High'),
    serializeCookie(TOKEN_EXPIRES_AT, "", cookieOptions, 'High'),
  ]
}

export const checkCookies = async (cookies) : Promise<string>=> {
  return cookies.email;
}