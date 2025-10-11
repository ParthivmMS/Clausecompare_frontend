export const mockReports = [
  {
    id: 'rpt-001',
    title: 'NDA Agreement Comparison',
    description: 'Confidentiality period reduced, payment terms modified',
    fileA: 'nda_v1.pdf',
    fileB: 'nda_v2.pdf',
    riskScore: 75,
    diffCount: 5,
    highRiskCount: 2,
    createdAt: '2025-01-08T10:30:00Z',
  },
  {
    id: 'rpt-002',
    title: 'Service Agreement Review',
    description: 'Termination notice period changed, liability caps adjusted',
    fileA: 'service_agreement_old.docx',
    fileB: 'service_agreement_new.docx',
    riskScore: 52,
    diffCount: 8,
    highRiskCount: 1,
    createdAt: '2025-01-07T14:15:00Z',
  },
  {
    id: 'rpt-003',
    title: 'Employment Contract Update',
    description: 'Minor formatting changes, no material modifications',
    fileA: 'employment_v1.pdf',
    fileB: 'employment_v2.pdf',
    riskScore: 15,
    diffCount: 2,
    highRiskCount: 0,
    createdAt: '2025-01-06T09:45:00Z',
  },
]

export const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  plan: 'Free',
  comparisonsUsed: 3,
  comparisonsLimit: 10,
  joinedDate: '2025-01-01',
}
