import React from 'react';

const Table = () => {
    const TABLE_COLUMNS = [
        "First Name",
        "Last Name",
        "Email",
        "Status",
        "Actions",
    ]

    return (
        <div>
            <table>
                <thead className="bg-grey-200">
                    {TABLE_COLUMNS.map((column) => (
                        <th>{column}</th>
                    ))}
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>YV5v6@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>);
};

export default Table;   