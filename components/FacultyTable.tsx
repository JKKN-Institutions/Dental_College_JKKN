import type { FacultyMember } from '@/data/facultyDirectory';

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
              <td className="border border-[#006837]/20 px-3 py-3 text-center align-top">{index + 1}</td>
              <th scope="row" className="border border-[#006837]/20 px-3 py-3 text-left align-top font-semibold">
                {member.name}
              </th>
              <td className="border border-[#006837]/20 px-3 py-3 align-top">{member.designation}</td>
              <td className="border border-[#006837]/20 px-3 py-3 align-top">
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
