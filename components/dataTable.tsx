import React from "react";

interface DataRow {
          point: string;
          description: string;
}

interface DataTableProps {
          data: DataRow[];
}

const DataTable = ({ data }: DataTableProps) => {
          return (
                    <div className="overflow-x-auto">
                              <table className="w-full">
                                        <thead className="bg-blue-200">
                                                  <tr>
                                                            <th className="p-4">Point</th>
                                                            <th className="p-4">Description</th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  {data.map((row, index) => (
                                                            <tr key={index} className="bg-gray-100 hover:bg-gray-300">
                                                                      <td className="p-4">{row.point}</td>
                                                                      <td className="p-4">{row.description}</td>
                                                            </tr>
                                                  ))}
                                        </tbody>
                              </table>
                    </div>

          );
};

export default DataTable;
