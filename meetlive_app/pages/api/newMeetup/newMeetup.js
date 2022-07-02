import connectionEstablish from '../../../utils/connect';
import MeetUp from '../../../models/MeetUpModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function AddMeetUp(req, res){
    // const data = req.body;
    // console.log(req.body);
    // const {name,image,description,address} = data;
    await connectionEstablish()
    try {
        const addedData = await MeetUp.create(req.body)
        res.status(200).json({success :"ok",data: addedData});
    }catch (error) {
        res.status(404);
        throw new Error(error.message);
    }
}