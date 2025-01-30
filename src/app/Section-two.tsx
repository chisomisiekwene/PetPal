// import React from "react";
// import { section2 } from "../Components/Lists/HomeList";
// import Image from "next/image";
// import Layout from "../Components/layout/Layout";
// import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card";


// export default function Sectiontwo() {
//   return (
//     <Layout className="py-20">
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {section2.map((section, index) => {
//           return (
//             <Card key={index} className="flex flex-col h-full col-span-1">
//               <CardHeader className="flex flex-row items-center gap-4">
//                 <div className="bg-primary rounded-full p-2 w-16 h-16 flex items-center justify-center">
//                 {React.createElement(section.image)}

//                 </div>
//                 <CardTitle className="text-lg md:text-xl">{section.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-base md:text-lg">{section.description}</p>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }
