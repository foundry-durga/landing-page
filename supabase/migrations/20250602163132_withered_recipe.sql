/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text)
      - `role` (text)
      - `company` (text, optional)
      - `interest_areas` (text array)
      - `notified` (boolean)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL,
  company text,
  interest_areas text[] NOT NULL DEFAULT '{}',
  notified boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view their own entries" ON waitlist
  FOR SELECT
  TO public
  USING (email = current_setting('request.jwt.claims')::json->>'email');