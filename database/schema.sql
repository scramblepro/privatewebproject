SELECT current_database();
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  link VARCHAR(255)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
  sort_order INTEGER NOT NULL DEFAULT 0
);

INSERT INTO skills (id, name, level, sort_order) VALUES
  ('react', 'React / TypeScript', 90, 1),
  ('node', 'Node.js', 85, 2),
  ('api', 'REST API', 88, 3),
  ('sql', 'SQL', 80, 4),
  ('tailwind', 'Tailwind CSS', 85, 5),
  ('git', 'Git', 82, 6);