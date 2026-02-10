import { Subject } from '@/types'

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'CS',
    description:
      'An introductory course covering programming fundamentals and computer science concepts.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Calculus II',
    department: 'Math',
    description:
      'Advanced study of integrals, series, and applications of calculus.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: 'ENG102',
    name: 'English Composition',
    department: 'English',
    description:
      'Course focused on academic writing, critical thinking, and communication skills.',
    createdAt: new Date().toISOString(),
  },
]
