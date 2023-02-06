import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const user = [
        { id: 1, nome: 'Carlos' },
        { id: 2, nome: 'Jarder' },
        { id: 3, nome: 'Joarlinsson' }
    ]
    return response.json(user)
}