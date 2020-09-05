import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { NextHandler } from "next-connect";
import AccountsService from '../../../services/accounts'
import {cookieHeaderValueFromAccountSession} from '../../../utils/cookie'

const handler = nextConnect();

handler.post((req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    const {email, password, name, riskProfile, telegramId} = req.body;

    AccountsService.signup(email, password, name, riskProfile, telegramId)
        .then((r) => {
            if (r) {
                res.setHeader('Set-Cookie', cookieHeaderValueFromAccountSession(r));
                res.json(r);
            } else {
                res.end();
            }
        }, next)
    
})

export default handler