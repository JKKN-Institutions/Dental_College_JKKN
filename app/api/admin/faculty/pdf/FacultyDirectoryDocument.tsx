import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  renderToBuffer,
} from '@react-pdf/renderer';

export type AcademicQualification = {
  degree?: string;
  specialisation?: string;
  university?: string;
  year?: string;
};

export type ExperienceEntry = {
  type?: string;
  period_start?: string;
  period_end?: string;
  role?: string;
  institution?: string;
  description?: string;
};

export type Publication = {
  title?: string;
  authors?: string;
  journal?: string;
  year?: string;
};

export type SimpleEntry = { [key: string]: string | undefined };

export interface FacultyRow {
  id: string;
  name: string;
  designation?: string | null;
  department?: string | null;
  qualification?: string | null;
  experience_years?: number | null;
  photo_url?: string | null;
  email?: string | null;
  summary?: string | null;
  research_papers_count?: number | null;
  phd_scholars_count?: number | null;
  awards_won_count?: number | null;
  pg_dissertations_guided?: number | null;
  ug_projects_guided?: number | null;
  mentoring_description?: string | null;
  google_scholar_url?: string | null;
  researchgate_url?: string | null;
  orcid_url?: string | null;
  academic_qualifications?: AcademicQualification[] | null;
  areas_of_specialisation?: string[] | null;
  experience?: ExperienceEntry[] | null;
  research_focus?: string[] | null;
  publications?: Publication[] | null;
  funded_research?: SimpleEntry[] | null;
  certifications?: SimpleEntry[] | null;
  awards?: SimpleEntry[] | null;
  memberships?: SimpleEntry[] | null;
  phd_scholars?: SimpleEntry[] | null;
  badges?: string[] | null;
}

const BRAND_GREEN = '#006837';
const BRAND_GREEN_LIGHT = '#7cb983';
const TEXT_DARK = '#0f1a12';
const TEXT_MUTED = '#5b6b60';
const BORDER = '#e4ebe6';
const BG_CREAM = '#FBF8F3';

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 48,
    paddingHorizontal: 36,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: TEXT_DARK,
    backgroundColor: '#ffffff',
  },
  coverPage: {
    paddingTop: 0,
    paddingHorizontal: 0,
    backgroundColor: BG_CREAM,
  },
  coverBand: {
    backgroundColor: BRAND_GREEN,
    paddingTop: 90,
    paddingBottom: 60,
    paddingHorizontal: 48,
  },
  coverEyebrow: {
    color: BRAND_GREEN_LIGHT,
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 12,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica-Bold',
  },
  coverTitle: {
    color: '#ffffff',
    fontSize: 36,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.15,
    marginBottom: 12,
  },
  coverSubtitle: {
    color: '#cfe6d5',
    fontSize: 14,
    marginBottom: 28,
  },
  coverMeta: {
    paddingHorizontal: 48,
    paddingTop: 32,
    paddingBottom: 48,
  },
  coverMetaRow: {
    flexDirection: 'row',
    borderBottom: `1pt solid ${BORDER}`,
    paddingVertical: 10,
  },
  coverMetaLabel: {
    width: 140,
    color: TEXT_MUTED,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  coverMetaValue: {
    flex: 1,
    color: TEXT_DARK,
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },
  // Profile page
  header: {
    flexDirection: 'row',
    gap: 14,
    paddingBottom: 12,
    borderBottom: `1.5pt solid ${BRAND_GREEN}`,
    marginBottom: 14,
  },
  photo: {
    width: 88,
    height: 88,
    borderRadius: 4,
    objectFit: 'cover',
    border: `1pt solid ${BORDER}`,
  },
  photoPlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 4,
    backgroundColor: BRAND_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoPlaceholderText: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  facultyName: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_DARK,
    marginBottom: 3,
  },
  designation: {
    fontSize: 11,
    color: BRAND_GREEN,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 2,
  },
  department: {
    fontSize: 10,
    color: TEXT_MUTED,
    marginBottom: 2,
  },
  qualLine: {
    fontSize: 9.5,
    color: TEXT_MUTED,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  contactItem: {
    fontSize: 9,
    color: TEXT_MUTED,
  },
  // Stat strip
  statStrip: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  stat: {
    flex: 1,
    backgroundColor: BG_CREAM,
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: BRAND_GREEN,
  },
  statLabel: {
    fontSize: 7.5,
    color: TEXT_MUTED,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 2,
    textAlign: 'center',
  },
  // Sections
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: BRAND_GREEN,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottom: `0.5pt solid ${BORDER}`,
  },
  body: {
    fontSize: 9.5,
    color: TEXT_DARK,
    lineHeight: 1.45,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 4,
  },
  bulletDot: {
    width: 8,
    color: BRAND_GREEN,
    fontFamily: 'Helvetica-Bold',
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: TEXT_DARK,
    lineHeight: 1.4,
  },
  tag: {
    fontSize: 8,
    color: BRAND_GREEN,
    backgroundColor: '#eaf3ec',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 4,
    marginBottom: 4,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 36,
    right: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    color: TEXT_MUTED,
    borderTop: `0.5pt solid ${BORDER}`,
    paddingTop: 8,
  },
});

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

function safeArr<T>(v: T[] | null | undefined): T[] {
  return Array.isArray(v) ? v.filter(Boolean) : [];
}

function nonEmpty(v: string | null | undefined): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function ProfilePage({ member, index, total }: { member: FacultyRow; index: number; total: number }) {
  const acads = safeArr<AcademicQualification>(member.academic_qualifications);
  const exps = safeArr<ExperienceEntry>(member.experience);
  const pubs = safeArr<Publication>(member.publications);
  const certs = safeArr<SimpleEntry>(member.certifications);
  const awards = safeArr<SimpleEntry>(member.awards);
  const mems = safeArr<SimpleEntry>(member.memberships);
  const phds = safeArr<SimpleEntry>(member.phd_scholars);
  const funded = safeArr<SimpleEntry>(member.funded_research);
  const areas = safeArr<string>(member.areas_of_specialisation);
  const focus = safeArr<string>(member.research_focus);
  const badges = safeArr<string>(member.badges);

  return (
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        {nonEmpty(member.photo_url) ? (
          <Image src={member.photo_url} style={styles.photo} />
        ) : (
          <View style={styles.photoPlaceholder}>
            <Text style={styles.photoPlaceholderText}>{initials(member.name)}</Text>
          </View>
        )}
        <View style={styles.headerInfo}>
          <Text style={styles.facultyName}>{member.name}</Text>
          {nonEmpty(member.designation) && <Text style={styles.designation}>{member.designation}</Text>}
          {nonEmpty(member.department) && <Text style={styles.department}>{member.department}</Text>}
          {nonEmpty(member.qualification) && <Text style={styles.qualLine}>{member.qualification}</Text>}
          {(nonEmpty(member.email) || (member.experience_years ?? 0) > 0) && (
            <View style={styles.contactRow}>
              {nonEmpty(member.email) && <Text style={styles.contactItem}>{member.email}</Text>}
              {(member.experience_years ?? 0) > 0 && (
                <Text style={styles.contactItem}>{member.experience_years}+ yrs experience</Text>
              )}
            </View>
          )}
        </View>
      </View>

      {/* Stat strip */}
      <View style={styles.statStrip}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{member.experience_years ?? 0}</Text>
          <Text style={styles.statLabel}>Years Exp</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{member.research_papers_count ?? 0}</Text>
          <Text style={styles.statLabel}>Research Papers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{member.phd_scholars_count ?? 0}</Text>
          <Text style={styles.statLabel}>PhD Scholars</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{member.awards_won_count ?? 0}</Text>
          <Text style={styles.statLabel}>Awards Won</Text>
        </View>
      </View>

      {/* Badges */}
      {badges.length > 0 && (
        <View style={styles.tagRow}>
          {badges.map((b, i) => (
            <Text key={i} style={styles.tag}>{b}</Text>
          ))}
        </View>
      )}

      {/* Summary */}
      {nonEmpty(member.summary) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.body}>{member.summary}</Text>
        </View>
      )}

      {/* Academic Qualifications */}
      {acads.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Academic Qualifications</Text>
          {acads.map((q, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {[q.degree, q.specialisation && `(${q.specialisation})`, q.university, q.year]
                  .filter(nonEmpty)
                  .join(' — ')}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Areas of specialisation */}
      {areas.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Areas of Specialisation</Text>
          <View style={styles.tagRow}>
            {areas.map((a, i) => (
              <Text key={i} style={styles.tag}>{a}</Text>
            ))}
          </View>
        </View>
      )}

      {/* Experience */}
      {exps.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {exps.map((e, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {[
                  [e.period_start, e.period_end].filter(nonEmpty).join('–'),
                  e.type,
                  e.role,
                  e.institution,
                ]
                  .filter(nonEmpty)
                  .join(' · ')}
                {nonEmpty(e.description) && ` — ${e.description}`}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Research focus */}
      {focus.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Research Focus</Text>
          <View style={styles.tagRow}>
            {focus.map((f, i) => (
              <Text key={i} style={styles.tag}>{f}</Text>
            ))}
          </View>
        </View>
      )}

      {/* Publications */}
      {pubs.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selected Publications</Text>
          {pubs.map((p, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {nonEmpty(p.title) ? p.title : 'Untitled'}
                {nonEmpty(p.authors) && ` — ${p.authors}`}
                {nonEmpty(p.journal) && ` · ${p.journal}`}
                {nonEmpty(p.year) && ` (${p.year})`}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Funded research */}
      {funded.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Funded Research</Text>
          {funded.map((f, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {[f.project, f.agency, f.amount, f.period, f.status].filter(nonEmpty).join(' · ')}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Awards */}
      {awards.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Awards & Recognitions</Text>
          {awards.map((a, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {[a.award, a.body, a.year].filter(nonEmpty).join(' · ')}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Certifications */}
      {certs.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Certifications & Training</Text>
          {certs.map((c, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {[c.name, c.organisation, c.year].filter(nonEmpty).join(' · ')}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Memberships */}
      {mems.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Professional Memberships</Text>
          {mems.map((m, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {[m.organisation, m.type, nonEmpty(m.since) ? `since ${m.since}` : '']
                  .filter(nonEmpty)
                  .join(' · ')}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* PhD scholars + mentoring */}
      {(phds.length > 0 || nonEmpty(member.mentoring_description) ||
        (member.pg_dissertations_guided ?? 0) > 0 || (member.ug_projects_guided ?? 0) > 0) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mentoring</Text>
          {nonEmpty(member.mentoring_description) && (
            <Text style={[styles.body, { marginBottom: 4 }]}>{member.mentoring_description}</Text>
          )}
          {((member.pg_dissertations_guided ?? 0) > 0 || (member.ug_projects_guided ?? 0) > 0) && (
            <Text style={styles.body}>
              PG dissertations guided: {member.pg_dissertations_guided ?? 0} · UG projects guided:{' '}
              {member.ug_projects_guided ?? 0}
            </Text>
          )}
          {phds.map((s, i) => (
            <View key={i} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                {[s.scholar, s.research_topic, s.status].filter(nonEmpty).join(' · ')}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Academic profile URLs */}
      {(nonEmpty(member.google_scholar_url) ||
        nonEmpty(member.researchgate_url) ||
        nonEmpty(member.orcid_url)) && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Academic Profiles</Text>
          {nonEmpty(member.google_scholar_url) && (
            <Text style={styles.body}>Google Scholar: {member.google_scholar_url}</Text>
          )}
          {nonEmpty(member.researchgate_url) && (
            <Text style={styles.body}>ResearchGate: {member.researchgate_url}</Text>
          )}
          {nonEmpty(member.orcid_url) && (
            <Text style={styles.body}>ORCID: {member.orcid_url}</Text>
          )}
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text>JKKN Dental College & Hospital · Faculty Directory</Text>
        <Text>
          {index + 1} / {total}
        </Text>
      </View>
    </Page>
  );
}

export function FacultyDirectoryDocument({
  collegeName,
  generatedAt,
  members,
}: {
  collegeName: string;
  generatedAt: Date;
  members: FacultyRow[];
}) {
  const dateStr = generatedAt.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Document title={`${collegeName} — Faculty Directory`} author={collegeName}>
      {/* Cover */}
      <Page size="A4" style={styles.coverPage}>
        <View style={styles.coverBand}>
          <Text style={styles.coverEyebrow}>{collegeName}</Text>
          <Text style={styles.coverTitle}>Faculty{'\n'}Directory</Text>
          <Text style={styles.coverSubtitle}>
            Profiles of our teaching and clinical faculty
          </Text>
        </View>
        <View style={styles.coverMeta}>
          <View style={styles.coverMetaRow}>
            <Text style={styles.coverMetaLabel}>Total Members</Text>
            <Text style={styles.coverMetaValue}>{members.length}</Text>
          </View>
          <View style={styles.coverMetaRow}>
            <Text style={styles.coverMetaLabel}>Generated</Text>
            <Text style={styles.coverMetaValue}>{dateStr}</Text>
          </View>
          <View style={styles.coverMetaRow}>
            <Text style={styles.coverMetaLabel}>Source</Text>
            <Text style={styles.coverMetaValue}>dental.jkkn.ac.in</Text>
          </View>
        </View>
      </Page>

      {/* One profile per page */}
      {members.map((m, i) => (
        <ProfilePage key={m.id} member={m} index={i} total={members.length} />
      ))}
    </Document>
  );
}

export function renderFacultyDirectoryPdf(opts: {
  collegeName: string;
  generatedAt: Date;
  members: FacultyRow[];
}): Promise<Buffer> {
  return renderToBuffer(
    <FacultyDirectoryDocument
      collegeName={opts.collegeName}
      generatedAt={opts.generatedAt}
      members={opts.members}
    />
  );
}
