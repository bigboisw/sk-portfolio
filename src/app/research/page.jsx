import Link from "next/link";

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 lg:px-64 py-8">

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Research Interests</h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
            <li>Innovation and Entrepreneurship; Strategic Management; Business and Public Policy</li>
            <li>Organizational Search; Exploration and Exploitation; Behavioral Strategy</li>
            <li>Biopharmaceutical and High-tech industry</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Peer-Reviewed Publications</h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            <li>
              <strong>[1]</strong> Yongwook Paik, <strong>Sukhun Kang</strong>, and Robert Seamans. 2019.{" "}
              <em>“Entrepreneurship, Innovation, and Political Competition: How the Public Sector Helps the Sharing Economy Create Value”</em>{" "}
              <span className="italic">Strategic Management Journal</span>, 40: 503-532.{" "}
              <Link href="https://www.dropbox.com/scl/fi/htc20yl5eh4ub75yiyhzf/Paik_et_al-2018-Strategic_Management_Journal-2.pdf?rlkey=r1fjn0h1303pnu4ej64bqrdpn&e=1&dl=0" className="text-blue-600 underline" target="_blank">[pdf]</Link>
            </li>
            <li>
              <strong>[2]</strong> <strong>Sukhun Kang</strong>, Sungyong Chang, Joseph Ross, and Jennifer Miller. 2021.{" "}
              <em>“Implementation of 21st Century Cures Act Expanded Access Policies Requirement”</em>{" "}
              <span className="italic">Clinical Pharmacology & Therapeutics</span>, 110; 6:1579-1584.{" "}
              <Link href="https://www.dropbox.com/scl/fi/0rueqjmrx4yy1ji2cur9q/Kang-Chang-Ross-Miller-2021-CPT.pdf?rlkey=kdcn7f9z5luccmfbbcpbfyn1i&e=1&dl=0" className="text-blue-600 underline">[pdf]</Link>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Working Papers</h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            <li>
              <strong>[3]</strong> <strong>Sukhun Kang</strong> and Sungyong Chang,{" "}
              <em>“When Do Firms Provide Early Access to Investigational Drugs? Evidence from Expanded Access in the Oncology Drug Market 1990-2020”</em>{" "}
              <Link href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4885005" className="text-blue-600 underline">[pdf]</Link>
            </li>
            <li>
              <strong>[4]</strong> Sarath Balachandran, Sungyong Chang, and <strong>Sukhun Kang</strong>,{" "}
              <em>“How Do Investors Shape Startups' Response to New Market Opportunities?”</em>{" "}
              <Link href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4993926" className="text-blue-600 underline">[pdf]</Link>
            </li>
            <li>
              <strong>[5]</strong> <strong>Sukhun Kang</strong>, <em>“From Outward to Inward: Reframing Search with New Mapping Criteria”</em>
              <ul className="list-disc pl-8 mt-1">
                <li>2023 AOM Best Paper Proceedings</li>
                <li>Runner-up for ISA Giarrantani Rising Star Award</li>
              </ul>
            </li>
            <li>
              <strong>[6]</strong> Sukhun Kang, Olenka Kacperczyk, and Yongwook Paik,{" "}
              <em>“Shattering Ceilings While Opening Doors: The Symbolic Effect of the First Female Political Leader on the Mobility Outcomes of Female Employees”</em>
            </li>
            <li>
              <strong>[7]</strong> <strong>Sukhun Kang</strong> and Gary Dushnitsky,{" "}
              <em>“Orchestrating an Ecosystem of Innovative Startups: Ex-Ante and Ex-post Actions and Orchestrator's Performance”</em>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Work in Progress</h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            <li><em>“Are Drugs Becoming Less Innovative?”</em> (with Sandra Barbosu)</li>
            <li><em>“Data Privacy and Innovation: The Case of GDPR”</em> (with Jennifer Kao)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Research Affiliates</h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-2">
            {[
              ["Sarath Balachandran", "Assistant Professor of Strategy and Entrepreneurship, London Business School", "https://www.london.edu/faculty-and-research/faculty-profiles/s/sarath-balachandran"],
              ["Sandra Barbosu", "Senior Policy Manager, Information Technology and Innovation Foundation", "https://www.barbosu.com/home"],
              ["Sungyong Chang", "Assistant Professor of Management and Organization, Cornell University", "https://sungyongchang.com/"],
              ["Gary Dushnitsky", "Associate Professor of Strategy and Entrepreneurship, London Business School", "https://www.dushnitsky.com/index.html"],
              ["Olenka Kacperczyk", "Professor of Strategy and Entrepreneurship, London Business School", "https://www.london.edu/faculty-and-research/faculty-profiles/o/olenka-kacperczyk"],
              ["Jennifer Kao", "Assistant Professor of Strategy, UCLA Anderson School of Management", "https://www.jennifer-kao.com/"],
              ["Jennifer Miller", "Associate Professor, School of Medicine, Yale University", "http://www.jennifermiller.info/"],
              ["Yongwook Paik", "Associate Professor of Strategy, KAIST College of Business", "https://medicine.yale.edu/profile/joseph_ross/"],
              ["Joseph Ross", "Professor, School of Medicine and Public Health, Yale University", "https://medicine.yale.edu/profile/joseph_ross/"],
              ["Rob Seamans", "Associate Professor of Strategy, NYU Stern School of Business", "https://robertseamans.com/"]
            ].map(([name, title, url]) => (
              <li key={name}>
                <Link href={url} className="underline" target="_blank">{name}</Link> - {title}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
