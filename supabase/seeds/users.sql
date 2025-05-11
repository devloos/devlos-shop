-- create test users
INSERT INTO
  auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
  )
VALUES
  (
    '00000000-0000-0000-0000-000000000000',
    '49b6dafc-f4ca-4e93-9b63-f3903332724a',
    'authenticated',
    'authenticated',
    '18aguilerac@gmail.com',
    crypt ('password123', gen_salt ('bf')),
    current_timestamp,
    current_timestamp,
    current_timestamp,
    '{"provider":"email","providers":["email"]}',
    '{}',
    current_timestamp,
    current_timestamp,
    '',
    '',
    '',
    ''
  );

-- test user email identities
INSERT INTO
  auth.identities (
    id,
    user_id,
    provider_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
  )
VALUES
  (
    uuid_generate_v4 (),
    '49b6dafc-f4ca-4e93-9b63-f3903332724a',
    '49b6dafc-f4ca-4e93-9b63-f3903332724a',
    '{"sub":"49b6dafc-f4ca-4e93-9b63-f3903332724a","email":"18aguilerac@gmail.com"}',
    'email',
    current_timestamp,
    current_timestamp,
    current_timestamp
  );