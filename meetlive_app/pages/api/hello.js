// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectionEstablish from '../../../utils/connect';
import MeetUp from '../../../models/MeetUpModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */   
export default function handler(req, res) {
    await connectionEstablish()
    try {
        const retrievedData = await MeetUp.find({});
        if (!retrievedData) throw new Error('No Data fetched :',error.message)
        res.status(200).json({success :"ok",retrievedData: retrievedData});
    }catch (error) {
        res.status(404);
        throw new Error(error.message);
    }
}
