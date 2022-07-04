import { connectToDatabase } from '@/lib/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const leads = await db
    .collection("leads")
    .find({ client_id: process.env.CLIENT_ID })
    .count();

  return res.status(200).json(leads);
};
