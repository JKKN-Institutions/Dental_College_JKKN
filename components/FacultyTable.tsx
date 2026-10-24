import Image from 'next/image';
import type { FacultyMember } from '@/data/facultyDirectory';

function initialsOf(name: string) {
  return name
    .replace(/^(dr|mr|mrs|ms)\.?\s*/i, '')
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

// Set to true to bring back the Photo column (photos live in public/images/faculty/).
const SHOW_PHOTO_COLUMN = false;

interface FacultyTableProps {
  departmentName: string;
  members: FacultyMember[];
}

export default function FacultyTable({ departmentName, members }: FacultyTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#006837]/20 bg-white">
      <table className="w-full min-w-[600px] border-collapse text-sm text-[#002309] sm:text-base">
        <caption className="sr-only">Faculty list of the Department of {departmentName}</caption>
        <thead>
          <tr className="bg-[#006837] text-white">
            <th scope="col" className="w-16 border border-[#006837]/30 px-3 py-3 text-center font-semibold">
              S.No.
            </th>
            {SHOW_PHOTO_COLUMN && (
              <th scope="col" className="w-24 border border-[#006837]/30 px-3 py-3 text-center font-semibold sm:w-28">
                Photo
              </th>
            )}
            <th scope="col" className="border border-[#006837]/30 px-3 py-3 text-left font-semibold">
              Name
            </th>
            <th scope="col" className="border border-[#006837]/30 px-3 py-3 text-left font-semibold">
              Designation
            </th>
            <th scope="col" className="border border-[#006837]/30 px-3 py-3 text-left font-semibold">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={`${member.name}-${index}`} className={index % 2 === 1 ? 'bg-[#FBFBEE]' : 'bg-white'}>
              <td className="border border-[#006837]/20 px-3 py-3 text-center align-middle">{index + 1}</td>
              {SHOW_PHOTO_COLUMN && (
                <td className="border border-[#006837]/20 px-3 py-3 text-center align-middle">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={224}
                      height={280}
                      sizes="(min-width: 640px) 80px, 64px"
                      className="mx-auto h-auto w-16 rounded bg-[#FBFBEE] sm:w-20"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="mx-auto flex aspect-[4/5] w-16 items-center justify-center rounded bg-[#7cb983] text-lg font-bold text-[#002309] sm:w-20"
                    >
                      {initialsOf(member.name)}
                    </span>
                  )}
                </td>
              )}
              <th scope="row" className="border border-[#006837]/20 px-3 py-3 text-left align-middle font-semibold">
                {member.name}
              </th>
              <td className="border border-[#006837]/20 px-3 py-3 align-middle">{member.designation}</td>
              <td className="border border-[#006837]/20 px-3 py-3 align-middle">
                {member.qualification.map((degree) => (
                  <span key={degree} className="block">
                    {degree}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
