import React from "react";

const Pipeline = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto hide-scrollbar">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#0F75BC] text-white text-left">
              <th className="py-2 px-4 border-r">Molecule</th>
              <th className="py-2 px-4 border-r">Indication</th>
              <th className="py-2 px-4 border-r">Discovery</th>
              <th className="py-2 px-4 border-r">IND Enabling</th>
              <th className="py-2 px-4 border-r">Phase 1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2">
              <td className="py-2 px-4 border-r">GrB-Fc-IT4 (Targets Fn14)</td>
              <td className="py-2 px-4 border-r">
                Oncology: Breast, Colorectal, Lung, Ovarian, Prostate,
                Pancreatic, Melanoma, Liver, Glioblastoma, Glioma
              </td>
              <td className="py-2 px-4 border-r relative" colSpan={2}>
                <div className="absolute left-0 top-0 w-[400px] progress-bar"></div>
              </td>
              <td className="py-2 px-4 border-r"></td>
            </tr>

            <tr className="border-2">
              <td className="py-2 px-4 border-r">
                GrB-Fc-VEGF (Targets KDR/VEGFR2)
              </td>
              <td className="py-2 px-4 border-r">
                Oncology: Broad Cancer, Ophthalmology: Wet AMD & Choroidal
                Neovascularization
              </td>
              <td className="py-2 px-4 border-r relative" colSpan={2}>
                <div className="absolute left-0 top-0 w-[300px] progress-bar"></div>
              </td>
              <td className="py-2 px-4 border-r"></td>
            </tr>

            <tr className="border-2">
              <td className="py-2 px-4 border-r">
                GrB-Fc-SD1 (Targets Mesothelin)
              </td>
              <td className="py-2 px-4 border-r">Pancreatic Ovarian</td>
              <td className="py-2 px-4 border-r relative" colSpan={2}>
                <div className="absolute left-0 top-0 w-[180px] progress-bar"></div>
              </td>
              <td className="py-2 px-4 border-r"></td>
            </tr>

            <tr className="border-2">
              <td className="py-2 px-4 border-r">
                GrB-Fc-4D5 (Targets Her2/Neu)
              </td>
              <td className="py-2 px-4 border-r">
                Breast, Gallbladder, Bladder, Esophageal/Gastric Junction,
                Stomach
              </td>
              <td className="py-2 px-4 border-r relative" colSpan={2}>
                <div className="absolute left-0 top-0 w-[250px] progress-bar"></div>
              </td>
              <td className="py-2 px-4 border-r"></td>
            </tr>

            <tr className="border-2">
              <td className="py-2 px-4 border-r">
                GrB-Fc-Anti-Fra (Folate Receptor A)
              </td>
              <td className="py-2 px-4 border-r">
                Gastrointestinal, Gynecological, Breast, Lung, Head & Neck,
                Leukemias, Lymphomas
              </td>
              <td className="py-2 px-4 border-r relative" colSpan={2}>
                <div className="absolute left-0 top-0 w-[250px] progress-bar"></div>
              </td>
              <td className="py-2 px-4 border-r"></td>
            </tr>

            <tr className="border-2">
              <td className="py-2 px-4 border-r">GrB-Fc-CEA (Targets CEA)</td>
              <td className="py-2 px-4 border-r">
                Colon/Colorectal/Esophageal/Gastric, Breast, Prostate, Lung,
                Thyroid, Pancreatic, Ovarian
              </td>
              <td className="py-2 px-4 border-r relative" colSpan={2}>
                <div className="absolute left-0 top-0 w-[170px] progress-bar"></div>
              </td>
              <td className="py-2 px-4 border-r"></td>
            </tr>

            <tr className="border-2">
              <td className="py-2 px-4 border-r">
                GrB-Fc-HMEL (Targets SCPG4)
              </td>
              <td className="py-2 px-4 border-r">
                Melanoma, Lobular Breast, TNBC, Breast Stem Cells, Gliomas, and
                Squamous Cell Carcinomas
              </td>
              <td className="py-2 px-4 border-r relative">
                <div className="absolute left-0 top-0 w-[150px] progress-bar"></div>
              </td>
              <td className="py-2 px-4 border-r"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pipeline;
