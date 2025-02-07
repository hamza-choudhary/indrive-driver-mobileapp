import {useState} from 'react';
import {DocumentList} from './DocumentList';

type File = {
  type: string;
  uri: string;
  name: string;
};

type Document = {
  title: string;
  name: string;
};

const DRIVER_DOCUMENTS: Document[] = [
  {title: 'Profile Image', name: 'profileImage'},
  {title: 'Private Hire Driver License (PHL)', name: 'phlLicense'},
  {title: 'DVLA Plastic Driving License', name: 'dvlaLicense'},
  {title: 'National Insurance Number', name: 'nationalInsurance'},
];

const VEHICLE_DOCUMENTS: Document[] = [
  {title: 'MOT Test Certificate', name: 'motCertificate'},
  {title: 'Private Hire Vehicle License (PHV)', name: 'phvLicense'},
  {title: 'Private Hire Insurance Certificate', name: 'insuranceCertificate'},
  {title: 'PCO Blue Badge', name: 'pcoBadge'},
  {title: 'Insurance Supporting Documents', name: 'insuranceSupport'},
  {title: 'V5 Logbook', name: 'v5Logbook'},
];

export function DocumentSection() {
  const [driverDocuments, setDriverDocuments] = useState<
    Record<string, File | null>
  >({
    profileImage: null,
    phlLicense: null,
    dvlaLicense: null,
    nationalInsurance: null,
  });
  const [vehicleDocuments, setVehicleDocuments] = useState<
    Record<string, File | null>
  >({
    motCertificate: null,
    phvLicense: null,
    insuranceCertificate: null,
    pcoBadge: null,
    insuranceSupport: null,
    v5Logbook: null,
  });

  function uploadHandler() {
    console.log('upload handler');
  }

  return (
    <>
      <DocumentList
        data={DRIVER_DOCUMENTS}
        value={driverDocuments}
        onChange={(key, value) =>
          setDriverDocuments(p => ({...p, [key]: value}))
        }
        onSubmit={uploadHandler}
      />
      <DocumentList
        data={VEHICLE_DOCUMENTS}
        value={vehicleDocuments}
        onChange={(key, value) =>
          setVehicleDocuments(p => ({...p, [key]: value}))
        }
        onSubmit={uploadHandler}
      />
    </>
  );
}


// const handleUpload =
// (
//   stateSetter: React.Dispatch<
//     React.SetStateAction<Record<string, Document>>
//   >,
// ) =>
// (documentType: string, document: Document) => {
//   stateSetter(prev => ({...prev, [documentType]: document}));
// };

// const createSubmitHandler =
// (documents: Record<string, Document>) => async () => {
//   const formData = new FormData();

//   Object.entries(documents).forEach(([key, doc]) => {
//     formData.append(key, {
//       uri: doc.uri,
//       name: doc.fileName,
//       type: 'application/octet-stream',
//     } as unknown as Blob);
//   });

//   try {
//     const response = await fetch('http://localhost:3000/docs', {
//       method: 'POST',
//       body: formData,
//       headers: {'Content-Type': 'multipart/form-data'},
//     });
//     if (!response.ok) {
//       throw new Error('Upload failed');
//     }
//     console.log('Upload successful');
//   } catch (error) {
//     console.error('Error uploading documents:', error);
//   }
// };

// {
//   "error": null,
//   "convertibleToMimeTypes": null,
//   "isVirtual": false,
//   "nativeType": "image/jpeg",
//   "size": 145340,
//   "type": "image/jpeg",
//   "uri": "content://com.android.providers.downloads.documents/document/2044",
//   "name": "ID_CARD_BACK.jpeg",
//   "hasRequestedType": true
// }
