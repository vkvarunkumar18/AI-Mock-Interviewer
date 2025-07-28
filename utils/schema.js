import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const mockInterview = pgTable('mock_interview', {
  id: serial('id').primaryKey(),
  jsonMockResp: text('json_mock_resp').notNull(),
  jobPosition: varchar('job_position', { length: 255 }).notNull(),
  jobDesc: varchar('job_desc', { length: 255 }).notNull(),
  jobExperience: varchar('job_experience', { length: 255 }).notNull(),
  createdBy: varchar('created_by', { length: 255 }).notNull(),
  createdAt: varchar('created_at', { length: 255 }), // Consider using `timestamp()` if it's a date
  mockId: varchar('mock_id', { length: 255 }).notNull(),
});

export const userAnswer = pgTable('user_answer', {
  id: serial('id').primaryKey(),
  mockIdRef: varchar('mock_id_ref', { length: 255 }).notNull(),
  question: varchar('question', { length: 255 }).notNull(),
  correctAns: text('correct_ans'),
  userAns: text('user_ans'),
  feedback: text('feedback'),
  rating: varchar('rating', { length: 255 }),
  userEmail: varchar('user_email', { length: 255 }),
  createdAt: varchar('created_at', { length: 255 }), // Again, `timestamp()` is better for dates
});
