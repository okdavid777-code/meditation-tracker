import { supabase } from '../../supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { day } = req.body;

  const { error } = await supabase
    .from('habit_entries')
    .upsert({
      day_number: day,
      is_completed: true,
      updated_at: new Date(),
    });

  if (error) {
    return res.status(500).json({ message: 'Failed to update', error });
  }

  return res.status(200).json({ message: 'Success', day });
}
