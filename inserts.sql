INSERT INTO ecolar.users (
    id,
    full_name,
    email,
    name,
    role,
    household_size,
    transportation_type,
    has_solar_panels,
    heating_type,
    residence_size,
    has_garden,
    recycling_habit,
    monthly_income_range,
    has_seen_intro,
    onboarding_completed
  )
VALUES (
    1,
    'João Silva',
    'joao.silva@example.com',
    'joao',
    'user',
    3,
    'car',
    true,
    'electric',
    'medium',
    true,
    'always',
    '3000-5000',
    true,
    true
  );
INSERT INTO ecolar.records (
    user_id,
    category,
    value,
    unit,
    cost,
    notes
  )
VALUES (
    1,
    'water',
    5,
    'L',
    2.5,
    'Consumo diário de água'
  );
INSERT INTO ecolar.tips (
    user_id,
    title,
    content,
    category,
    difficulty,
    impact,
    liked,
    implemented
  )
VALUES (
    1,
    'Reutilize água do enxágue',
    'Use a água do enxágue da máquina de lavar para lavar calçadas ou descargas.',
    'water',
    'easy',
    'medium',
    TRUE,
    FALSE
  );
INSERT INTO ecolar.goals (
    user_id,
    current_value,
    title,
    description,
    category,
    target_value,
    unit,
    deadline
  )
VALUES (
    1,
    0,
    'Melhorar a irrigação das plantas',
    '',
    'water',
    12,
    'L',
    '2025-11-28'
  );